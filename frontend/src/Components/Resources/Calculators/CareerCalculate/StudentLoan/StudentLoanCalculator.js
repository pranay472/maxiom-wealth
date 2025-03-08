import React, { useState, useEffect } from 'react';
import { Share, ChevronDown } from 'lucide-react';

const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
};

const StudentLoanCalculator = () => {
  // Basic inputs
  const [loanAmount, setLoanAmount] = useState(500000);
  const [interestRate, setInterestRate] = useState(9.5);
  const [loanTerm, setLoanTerm] = useState(5);
  const [moratoriumPeriod, setMoratoriumPeriod] = useState(2);
  
  // Advanced settings
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [interestDuringMoratorium, setInterestDuringMoratorium] = useState("capitalize");
  const [processingFee, setProcessingFee] = useState(1);
  const [prepaymentPercentage, setPrepaymentPercentage] = useState(0);
  const [prepaymentStartYear, setPrepaymentStartYear] = useState(3);
  const [prepaymentFrequency, setPrepaymentFrequency] = useState("annual");
  const [expectedSalary, setExpectedSalary] = useState(500000);
  const [salaryGrowthRate, setSalaryGrowthRate] = useState(10);
  const [showShareToast, setShowShareToast] = useState(false);
  
  // Results
  const [results, setResults] = useState({
    monthlyEMI: 0,
    totalPayment: 0,
    totalInterest: 0,
    processingFeeAmount: 0,
    netDisbursement: 0,
    EMIToIncomeRatio: 0,
    paymentSchedule: [],
    amortizationSchedule: []
  });

  const calculateStudentLoan = () => {
    // Basic calculations
    const loanTermMonths = loanTerm * 12;
    const moratoriumMonths = moratoriumPeriod * 12;
    const monthlyRate = interestRate / 12 / 100;
    const processingFeeAmount = loanAmount * (processingFee / 100);
    const netDisbursement = loanAmount - processingFeeAmount;
    
    // Calculate interest during moratorium period
    let principalAfterMoratorium = loanAmount;
    if (interestDuringMoratorium === "capitalize") {
      // Compound interest during moratorium
      principalAfterMoratorium = loanAmount * Math.pow(1 + monthlyRate, moratoriumMonths);
    }
    
    // Calculate EMI (post-moratorium)
    // Formula: P * r * (1+r)^n / ((1+r)^n - 1)
    const emi = principalAfterMoratorium * monthlyRate * Math.pow(1 + monthlyRate, loanTermMonths) / 
      (Math.pow(1 + monthlyRate, loanTermMonths) - 1);
    
    // Generate payment schedule
    let paymentSchedule = [];
    let amortizationSchedule = [];
    let remainingPrincipal = principalAfterMoratorium;
    let totalInterestPaid = principalAfterMoratorium - loanAmount; // Interest capitalized during moratorium
    let totalPaid = 0;
    
    // Include moratorium period in schedule (only interest payments or no payments)
    for (let month = 1; month <= moratoriumMonths; month++) {
      const interestForMonth = loanAmount * monthlyRate;
      totalInterestPaid += interestDuringMoratorium === "pay" ? interestForMonth : 0;
      totalPaid += interestDuringMoratorium === "pay" ? interestForMonth : 0;
      
      paymentSchedule.push({
        month,
        payment: interestDuringMoratorium === "pay" ? interestForMonth : 0,
        principal: 0,
        interest: interestForMonth,
        balance: interestDuringMoratorium === "capitalize" ? 
          loanAmount * Math.pow(1 + monthlyRate, month) : loanAmount
      });
    }
    
    // Calculate prepayment amount based on expected salary
    let annualPrepayment = 0;
    let monthlyPrepayment = 0;
    
    // Regular repayment period with EMIs
    for (let month = moratoriumMonths + 1; month <= moratoriumMonths + loanTermMonths; month++) {
      // Calculate prepayment if applicable
      if (prepaymentPercentage > 0 && month >= (moratoriumMonths + (prepaymentStartYear * 12))) {
        const yearsSinceGraduation = Math.floor((month - moratoriumMonths) / 12);
        const currentSalary = expectedSalary * Math.pow(1 + salaryGrowthRate / 100, yearsSinceGraduation);
        
        if (prepaymentFrequency === "annual" && (month - moratoriumMonths) % 12 === 0) {
          annualPrepayment = currentSalary * (prepaymentPercentage / 100);
        } else if (prepaymentFrequency === "monthly") {
          monthlyPrepayment = (currentSalary / 12) * (prepaymentPercentage / 100);
        }
      }
      
      // Calculate interest for the month
      const interestForMonth = remainingPrincipal * monthlyRate;
      
      // Apply regular payment
      let principalForMonth = emi - interestForMonth;
      let currentPayment = emi;
      
      // Add prepayment if applicable
      if (prepaymentFrequency === "annual" && (month - moratoriumMonths) % 12 === 0 && annualPrepayment > 0) {
        principalForMonth += annualPrepayment;
        currentPayment += annualPrepayment;
        annualPrepayment = 0;
      } else if (prepaymentFrequency === "monthly" && monthlyPrepayment > 0) {
        principalForMonth += monthlyPrepayment;
        currentPayment += monthlyPrepayment;
      }
      
      // Ensure principal payment doesn't exceed remaining balance
      principalForMonth = Math.min(principalForMonth, remainingPrincipal);
      currentPayment = principalForMonth + interestForMonth;
      
      // Update running totals
      remainingPrincipal -= principalForMonth;
      totalPaid += currentPayment;
      totalInterestPaid += interestForMonth;
      
      paymentSchedule.push({
        month,
        payment: currentPayment,
        principal: principalForMonth,
        interest: interestForMonth,
        balance: remainingPrincipal
      });
      
      // Check if loan is fully paid off
      if (remainingPrincipal <= 0) {
        break;
      }
    }
    
    // Summarize results for each year
    const yearsTotal = Math.ceil((moratoriumMonths + loanTermMonths) / 12);
    for (let year = 1; year <= yearsTotal; year++) {
      const yearPayments = paymentSchedule.filter(p => 
        p.month > (year - 1) * 12 && p.month <= year * 12
      );
      
      const yearlyTotalPayment = yearPayments.reduce((sum, p) => sum + p.payment, 0);
      const yearlyPrincipal = yearPayments.reduce((sum, p) => sum + p.principal, 0);
      const yearlyInterest = yearPayments.reduce((sum, p) => sum + p.interest, 0);
      
      amortizationSchedule.push({
        year,
        totalPayment: yearlyTotalPayment,
        principal: yearlyPrincipal,
        interest: yearlyInterest,
        remainingBalance: yearPayments.length > 0 ? yearPayments[yearPayments.length - 1].balance : 0
      });
    }
    
    // Calculate EMI to income ratio (affordability)
    const monthlyIncome = expectedSalary / 12;
    const EMIToIncomeRatio = (emi / monthlyIncome) * 100;
    
    return {
      monthlyEMI: emi,
      totalPayment: totalPaid,
      totalInterest: totalInterestPaid,
      processingFeeAmount,
      netDisbursement,
      EMIToIncomeRatio,
      paymentSchedule,
      amortizationSchedule
    };
  };

  useEffect(() => {
    const calculatedResults = calculateStudentLoan();
    setResults(calculatedResults);
  }, [
    loanAmount,
    interestRate,
    loanTerm,
    moratoriumPeriod,
    interestDuringMoratorium,
    processingFee,
    prepaymentPercentage,
    prepaymentStartYear,
    prepaymentFrequency,
    expectedSalary,
    salaryGrowthRate
  ]);

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setShowShareToast(true);
      setTimeout(() => setShowShareToast(false), 3000);
    } catch (err) {
      console.error('Failed to copy URL:', err);
    }
  };

  return (
    <div className="calculator-container pt-24">
      <div className="calculator-header text-center mb-8">
        <h1 className="text-2xl font-semibold text-[#113262] mb-2">Student Loan Calculator</h1>
        <h2 className="text-lg text-gray-600">Plan your education financing and repayment strategy</h2>
      </div>

      <div className="max-w-5xl mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Input Sections */}
          <div className="lg:col-span-2 space-y-8">
            {/* Loan Details */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Loan Details</h2>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block font-medium text-sm mb-1.5">Loan Amount</label>
                  <input
                    type="number"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={100000}
                    max={5000000}
                    step={50000}
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>₹1L</span>
                    <span>₹50L</span>
                  </div>
                </div>

                <div>
                  <label className="block font-medium text-sm mb-1.5">Interest Rate (%)</label>
                  <input
                    type="number"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={6}
                    max={15}
                    step={0.1}
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>6%</span>
                    <span>15%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Term Details */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Term Details</h2>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block font-medium text-sm mb-1.5">Loan Term (Years)</label>
                  <input
                    type="number"
                    value={loanTerm}
                    onChange={(e) => setLoanTerm(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={1}
                    max={15}
                    step={1}
                    value={loanTerm}
                    onChange={(e) => setLoanTerm(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>1 year</span>
                    <span>15 years</span>
                  </div>
                </div>

                <div>
                  <label className="block font-medium text-sm mb-1.5">Moratorium Period (Years)</label>
                  <input
                    type="number"
                    value={moratoriumPeriod}
                    onChange={(e) => setMoratoriumPeriod(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={0}
                    max={5}
                    step={1}
                    value={moratoriumPeriod}
                    onChange={(e) => setMoratoriumPeriod(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>0 years</span>
                    <span>5 years</span>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <label className="block font-medium text-sm mb-1.5">Interest During Moratorium</label>
                <select
                  value={interestDuringMoratorium}
                  onChange={(e) => setInterestDuringMoratorium(e.target.value)}
                  className="w-full p-1.5 border rounded text-sm"
                >
                  <option value="capitalize">Capitalize (add to principal)</option>
                  <option value="pay">Pay during moratorium</option>
                  <option value="subsidized">Subsidized (no interest during moratorium)</option>
                </select>
              </div>
            </div>

            {/* Career Details */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Career Details</h2>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block font-medium text-sm mb-1.5">Expected Annual Salary Post-Study</label>
                  <input
                    type="number"
                    value={expectedSalary}
                    onChange={(e) => setExpectedSalary(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={300000}
                    max={2000000}
                    step={50000}
                    value={expectedSalary}
                    onChange={(e) => setExpectedSalary(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>₹3L</span>
                    <span>₹20L</span>
                  </div>
                </div>

                <div>
                  <label className="block font-medium text-sm mb-1.5">Annual Salary Growth (%)</label>
                  <input
                    type="number"
                    value={salaryGrowthRate}
                    onChange={(e) => setSalaryGrowthRate(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={0}
                    max={20}
                    step={1}
                    value={salaryGrowthRate}
                    onChange={(e) => setSalaryGrowthRate(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>0%</span>
                    <span>20%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Advanced Settings */}
            <div className="bg-white rounded-lg shadow">
              <button
                onClick={() => setShowAdvanced(!showAdvanced)}
                className="w-full p-4 flex justify-between items-center hover:bg-gray-50"
              >
                <h2 className="text-lg font-bold text-gray-900">Advanced Settings</h2>
                <ChevronDown 
                  className={`transform transition-transform ${showAdvanced ? 'rotate-180' : ''}`}
                  size={20}
                />
              </button>
              
              {showAdvanced && (
                <div className="p-4 border-t">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block font-medium text-sm mb-1.5">Processing Fee (%)</label>
                      <input
                        type="number"
                        value={processingFee}
                        onChange={(e) => setProcessingFee(Number(e.target.value))}
                        className="w-full p-1.5 border rounded text-sm"
                      />
                      <input
                        type="range"
                        min={0}
                        max={5}
                        step={0.1}
                        value={processingFee}
                        onChange={(e) => setProcessingFee(Number(e.target.value))}
                        className="w-full mt-2"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>0%</span>
                        <span>5%</span>
                      </div>
                    </div>

                    <div>
                      <label className="block font-medium text-sm mb-1.5">Prepayment Percentage of Salary</label>
                      <input
                        type="number"
                        value={prepaymentPercentage}
                        onChange={(e) => setPrepaymentPercentage(Number(e.target.value))}
                        className="w-full p-1.5 border rounded text-sm"
                      />
                      <input
                        type="range"
                        min={0}
                        max={25}
                        step={1}
                        value={prepaymentPercentage}
                        onChange={(e) => setPrepaymentPercentage(Number(e.target.value))}
                        className="w-full mt-2"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>0%</span>
                        <span>25%</span>
                      </div>
                    </div>

                    <div>
                      <label className="block font-medium text-sm mb-1.5">Prepayment Starts After (Years)</label>
                      <input
                        type="number"
                        value={prepaymentStartYear}
                        onChange={(e) => setPrepaymentStartYear(Number(e.target.value))}
                        className="w-full p-1.5 border rounded text-sm"
                      />
                      <input
                        type="range"
                        min={1}
                        max={10}
                        step={1}
                        value={prepaymentStartYear}
                        onChange={(e) => setPrepaymentStartYear(Number(e.target.value))}
                        className="w-full mt-2"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>1 year</span>
                        <span>10 years</span>
                      </div>
                    </div>

                    <div>
                      <label className="block font-medium text-sm mb-1.5">Prepayment Frequency</label>
                      <select
                        value={prepaymentFrequency}
                        onChange={(e) => setPrepaymentFrequency(e.target.value)}
                        className="w-full p-1.5 border rounded text-sm"
                      >
                        <option value="annual">Annual (bonus)</option>
                        <option value="monthly">Monthly</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Results Section */}
          <div className="bg-[#113262] text-white rounded-lg h-[520px] sticky top-6">
            <div className="p-4 border-b border-white/20">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold">Loan Summary</h3>
                <button onClick={handleShare} className="p-1 hover:bg-blue-700 rounded">
                  <Share size={18} />
                </button>
              </div>
            </div>

            <div className="p-4 flex flex-col h-[calc(100%-68px)] justify-between">
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">
                    {formatCurrency(results.monthlyEMI)}
                  </div>
                  <div className="text-sm text-gray-300">Monthly EMI</div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-t border-white/20">
                    <span className="text-sm">Total Principal</span>
                    <span className="font-bold">{formatCurrency(loanAmount)}</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-2 border-t border-white/20">
                    <span className="text-sm">Total Interest</span>
                    <span className="font-bold">{formatCurrency(results.totalInterest)}</span>
                  </div>

                  <div className="flex justify-between items-center py-2 border-t border-white/20">
                    <span className="text-sm">Total Payment</span>
                    <span className="font-bold">{formatCurrency(results.totalPayment)}</span>
                  </div>

                  <div className="flex justify-between items-center py-2 border-t border-white/20">
                    <span className="text-sm">Processing Fee</span>
                    <span className="font-bold">{formatCurrency(results.processingFeeAmount)}</span>
                  </div>

                  <div className="flex justify-between items-center py-2 border-t border-white/20">
                    <span className="text-sm">Net Disbursement</span>
                    <span className="font-bold">{formatCurrency(results.netDisbursement)}</span>
                  </div>

                  <div className="flex justify-between items-center py-2 border-t border-white/20">
                    <span className="text-sm">EMI to Income Ratio</span>
                    <span className="font-bold">{results.EMIToIncomeRatio.toFixed(1)}%</span>
                  </div>
                </div>
              </div>

              <button className="w-full bg-orange-400 text-white py-2 rounded-lg mt-4 hover:bg-orange-500 transition-colors text-sm">
                Compare Loan Options →
              </button>
            </div>
          </div>

          {showShareToast && (
            <div className="fixed top-4 right-4 bg-green-600 text-white px-6 py-3 rounded shadow-lg">
              Link copied!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentLoanCalculator;