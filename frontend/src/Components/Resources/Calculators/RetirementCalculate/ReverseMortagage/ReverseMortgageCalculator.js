import React, { useState, useEffect } from 'react';
import { Share, ChevronDown } from 'lucide-react';

const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
};

const formatPercentage = (value) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'percent',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value / 100);
};

const ReverseMortgageCalculator = () => {
  // Basic inputs
  const [propertyValue, setPropertyValue] = useState(10000000);
  const [borrowerAge, setBorrowerAge] = useState(65);
  const [spouseAge, setSpouseAge] = useState(60);
  const [includeSpouse, setIncludeSpouse] = useState(true);
  const [loanTerm, setLoanTerm] = useState(15);
  
  // Advanced settings
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [interestRate, setInterestRate] = useState(8.5);
  const [propertyAppreciationRate, setPropertyAppreciationRate] = useState(5);
  const [loanToValueRatio, setLoanToValueRatio] = useState(60);
  const [upfrontCosts, setUpfrontCosts] = useState(100000);
  const [disbursementOption, setDisbursementOption] = useState('monthly');
  const [lumpSumPercentage, setLumpSumPercentage] = useState(25);
  const [monthlyExpenses, setMonthlyExpenses] = useState(40000);
  const [showShareToast, setShowShareToast] = useState(false);
  
  // Results
  const [results, setResults] = useState({
    maxLoanAmount: 0,
    lumpSumAmount: 0,
    monthlyPayment: 0,
    totalDisbursements: 0,
    netProceedsAfterCosts: 0,
    finalLoanBalance: 0,
    projectedPropertyValue: 0,
    estimatedEquityRemaining: 0,
    incomeGapCovered: 0
  });

  const calculateReverseMortgage = () => {
    // Calculate maximum loan amount based on property value and LTV ratio
    const maxLoanAmount = propertyValue * (loanToValueRatio / 100);
    
    // Calculate age factor based on youngest borrower's age
    const youngestAge = includeSpouse ? Math.min(borrowerAge, spouseAge) : borrowerAge;
    
    // Age factor adjustment (higher age = higher available percentage)
    let ageFactor = 0.5;
    if (youngestAge >= 62 && youngestAge < 65) ageFactor = 0.52;
    else if (youngestAge >= 65 && youngestAge < 70) ageFactor = 0.55;
    else if (youngestAge >= 70 && youngestAge < 75) ageFactor = 0.60;
    else if (youngestAge >= 75 && youngestAge < 80) ageFactor = 0.65;
    else if (youngestAge >= 80) ageFactor = 0.70;
    
    // Adjust loan amount based on age factor
    const adjustedLoanAmount = maxLoanAmount * ageFactor;
    
    // Calculate available loan amount after upfront costs
    const netLoanAmount = adjustedLoanAmount - upfrontCosts;
    
    // Calculate lump sum amount (if applicable)
    const lumpSumAmount = disbursementOption === 'lumpsum' ? 
      netLoanAmount : 
      (disbursementOption === 'combined' ? netLoanAmount * (lumpSumPercentage / 100) : 0);
    
    // Calculate amount available for monthly payments
    const amountForMonthlyPayments = netLoanAmount - lumpSumAmount;
    
    // Calculate monthly payment using PMT formula
    // PMT = (P * r * (1 + r)^n) / ((1 + r)^n - 1)
    // Where:
    // P = principal (loan amount)
    // r = monthly interest rate
    // n = total number of payments (months)
    
    const monthlyInterestRate = interestRate / 100 / 12;
    const totalPayments = loanTerm * 12;
    
    // Avoid division by zero
    let monthlyPayment = 0;
    if (monthlyInterestRate > 0 && amountForMonthlyPayments > 0) {
      const numerator = amountForMonthlyPayments * monthlyInterestRate;
      const denominator = 1 - Math.pow(1 + monthlyInterestRate, -totalPayments);
      monthlyPayment = numerator / denominator;
    } else if (amountForMonthlyPayments > 0) {
      // If interest rate is 0 (unlikely but possible)
      monthlyPayment = amountForMonthlyPayments / totalPayments;
    }
    
    // Total disbursements over the loan term
    const totalDisbursements = lumpSumAmount + (monthlyPayment * totalPayments);
    
    // Calculate final loan balance at the end of the term
    // This grows with compound interest
    let finalLoanBalance = lumpSumAmount;
    
    // Add each monthly payment and compound the interest
    for (let month = 0; month < totalPayments; month++) {
      // Add the monthly payment
      finalLoanBalance += monthlyPayment;
      
      // Add monthly interest
      finalLoanBalance *= (1 + monthlyInterestRate);
    }
    
    // Calculate projected property value at end of term
    const projectedPropertyValue = propertyValue * 
      Math.pow(1 + (propertyAppreciationRate / 100), loanTerm);
    
    // Calculate estimated equity remaining
    const estimatedEquityRemaining = Math.max(0, projectedPropertyValue - finalLoanBalance);
    
    // Calculate income gap covered percentage
    const incomeGapCovered = monthlyPayment > 0 ? 
      (monthlyPayment / monthlyExpenses) * 100 : 0;
    
    return {
      maxLoanAmount: adjustedLoanAmount,
      lumpSumAmount,
      monthlyPayment,
      totalDisbursements,
      netProceedsAfterCosts: netLoanAmount,
      finalLoanBalance,
      projectedPropertyValue,
      estimatedEquityRemaining,
      incomeGapCovered: Math.min(100, incomeGapCovered)
    };
  };

  useEffect(() => {
    const calculatedResults = calculateReverseMortgage();
    setResults(calculatedResults);
  }, [
    propertyValue,
    borrowerAge,
    spouseAge,
    includeSpouse,
    loanTerm,
    interestRate,
    propertyAppreciationRate,
    loanToValueRatio,
    upfrontCosts,
    disbursementOption,
    lumpSumPercentage,
    monthlyExpenses
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
        <h1 className="text-2xl font-semibold text-[#113262] mb-2">Reverse Mortgage Calculator</h1>
        <h2 className="text-lg text-gray-600">Estimate your reverse mortgage benefits for retirement</h2>
      </div>

      <div className="max-w-5xl mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Input Sections */}
          <div className="lg:col-span-2 space-y-8">
            {/* Property Details */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Property Details</h2>
              <div>
                <label className="block font-medium text-sm mb-1.5">Property Value</label>
                <input
                  type="number"
                  value={propertyValue}
                  onChange={(e) => setPropertyValue(Number(e.target.value))}
                  className="w-full p-1.5 border rounded text-sm"
                />
                <input
                  type="range"
                  min={1000000}
                  max={50000000}
                  step={500000}
                  value={propertyValue}
                  onChange={(e) => setPropertyValue(Number(e.target.value))}
                  className="w-full mt-2"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>₹10L</span>
                  <span>₹5Cr</span>
                </div>
              </div>
            </div>

            {/* Borrower Details */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Borrower Details</h2>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block font-medium text-sm mb-1.5">Primary Borrower Age</label>
                  <input
                    type="number"
                    value={borrowerAge}
                    onChange={(e) => setBorrowerAge(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={60}
                    max={95}
                    step={1}
                    value={borrowerAge}
                    onChange={(e) => setBorrowerAge(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>60 years</span>
                    <span>95 years</span>
                  </div>
                </div>

                <div className="flex flex-col">
                  <div className="mb-2">
                    <input
                      type="checkbox"
                      id="includeSpouse"
                      checked={includeSpouse}
                      onChange={(e) => setIncludeSpouse(e.target.checked)}
                      className="w-4 h-4"
                    />
                    <label htmlFor="includeSpouse" className="ml-2 text-sm font-medium">
                      Include Co-Borrower/Spouse
                    </label>
                  </div>
                  
                  {includeSpouse && (
                    <div className="mt-1">
                      <label className="block font-medium text-sm mb-1.5">Co-Borrower Age</label>
                      <input
                        type="number"
                        value={spouseAge}
                        onChange={(e) => setSpouseAge(Number(e.target.value))}
                        className="w-full p-1.5 border rounded text-sm"
                      />
                      <input
                        type="range"
                        min={60}
                        max={95}
                        step={1}
                        value={spouseAge}
                        onChange={(e) => setSpouseAge(Number(e.target.value))}
                        className="w-full mt-2"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>60 years</span>
                        <span>95 years</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Loan Details */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Loan Details</h2>
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
                    min={5}
                    max={20}
                    step={1}
                    value={loanTerm}
                    onChange={(e) => setLoanTerm(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>5 years</span>
                    <span>20 years</span>
                  </div>
                </div>

                <div>
                  <label className="block font-medium text-sm mb-1.5">Disbursement Option</label>
                  <select
                    value={disbursementOption}
                    onChange={(e) => setDisbursementOption(e.target.value)}
                    className="w-full p-1.5 border rounded text-sm"
                  >
                    <option value="monthly">Monthly Payments</option>
                    <option value="lumpsum">Lump Sum</option>
                    <option value="combined">Combined (Lump Sum + Monthly)</option>
                  </select>
                  
                  {disbursementOption === 'combined' && (
                    <div className="mt-3">
                      <label className="block font-medium text-sm mb-1.5">
                        Lump Sum Percentage ({lumpSumPercentage}%)
                      </label>
                      <input
                        type="range"
                        min={10}
                        max={90}
                        step={5}
                        value={lumpSumPercentage}
                        onChange={(e) => setLumpSumPercentage(Number(e.target.value))}
                        className="w-full mt-2"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>10%</span>
                        <span>90%</span>
                      </div>
                    </div>
                  )}
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
                        max={12}
                        step={0.1}
                        value={interestRate}
                        onChange={(e) => setInterestRate(Number(e.target.value))}
                        className="w-full mt-2"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>6%</span>
                        <span>12%</span>
                      </div>
                    </div>

                    <div>
                      <label className="block font-medium text-sm mb-1.5">Property Appreciation (%)</label>
                      <input
                        type="number"
                        value={propertyAppreciationRate}
                        onChange={(e) => setPropertyAppreciationRate(Number(e.target.value))}
                        className="w-full p-1.5 border rounded text-sm"
                      />
                      <input
                        type="range"
                        min={1}
                        max={10}
                        step={0.5}
                        value={propertyAppreciationRate}
                        onChange={(e) => setPropertyAppreciationRate(Number(e.target.value))}
                        className="w-full mt-2"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>1%</span>
                        <span>10%</span>
                      </div>
                    </div>

                    <div>
                      <label className="block font-medium text-sm mb-1.5">Loan to Value Ratio (%)</label>
                      <input
                        type="number"
                        value={loanToValueRatio}
                        onChange={(e) => setLoanToValueRatio(Number(e.target.value))}
                        className="w-full p-1.5 border rounded text-sm"
                      />
                      <input
                        type="range"
                        min={40}
                        max={90}
                        step={5}
                        value={loanToValueRatio}
                        onChange={(e) => setLoanToValueRatio(Number(e.target.value))}
                        className="w-full mt-2"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>40%</span>
                        <span>90%</span>
                      </div>
                    </div>

                    <div>
                      <label className="block font-medium text-sm mb-1.5">Upfront Costs</label>
                      <input
                        type="number"
                        value={upfrontCosts}
                        onChange={(e) => setUpfrontCosts(Number(e.target.value))}
                        className="w-full p-1.5 border rounded text-sm"
                      />
                      <input
                        type="range"
                        min={50000}
                        max={500000}
                        step={10000}
                        value={upfrontCosts}
                        onChange={(e) => setUpfrontCosts(Number(e.target.value))}
                        className="w-full mt-2"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>₹50K</span>
                        <span>₹5L</span>
                      </div>
                    </div>

                    <div>
                      <label className="block font-medium text-sm mb-1.5">Monthly Expenses</label>
                      <input
                        type="number"
                        value={monthlyExpenses}
                        onChange={(e) => setMonthlyExpenses(Number(e.target.value))}
                        className="w-full p-1.5 border rounded text-sm"
                      />
                      <input
                        type="range"
                        min={10000}
                        max={200000}
                        step={5000}
                        value={monthlyExpenses}
                        onChange={(e) => setMonthlyExpenses(Number(e.target.value))}
                        className="w-full mt-2"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>₹10K</span>
                        <span>₹2L</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Results Section */}
          <div className="bg-[#113262] text-white rounded-2xl h-[580px] sticky top-6">
            <div className="p-4 border-b border-white/20">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold">Reverse Mortgage Estimate</h3>
                <button onClick={handleShare} className="p-1 hover:bg-blue-700 rounded">
                  <Share size={18} />
                </button>
              </div>
            </div>

            <div className="p-4 flex flex-col h-[calc(100%-68px)] justify-between">
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">
                    {results.monthlyPayment > 0 ? 
                      formatCurrency(results.monthlyPayment) + '/month' : 
                      formatCurrency(results.lumpSumAmount)}
                  </div>
                  <div className="text-sm text-gray-300">
                    {disbursementOption === 'monthly' ? 'Monthly Payment' : 
                     disbursementOption === 'lumpsum' ? 'Lump Sum Amount' : 
                     'Monthly Payment + ' + formatCurrency(results.lumpSumAmount) + ' Lump Sum'}
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-t border-white/20">
                    <span className="text-sm">Maximum Loan Amount</span>
                    <span className="font-bold">{formatCurrency(results.maxLoanAmount)}</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-2 border-t border-white/20">
                    <span className="text-sm">Net Proceeds After Costs</span>
                    <span className="font-bold">{formatCurrency(results.netProceedsAfterCosts)}</span>
                  </div>

                  <div className="flex justify-between items-center py-2 border-t border-white/20">
                    <span className="text-sm">Total Disbursements</span>
                    <span className="font-bold">{formatCurrency(results.totalDisbursements)}</span>
                  </div>

                  <div className="flex justify-between items-center py-2 border-t border-white/20">
                    <span className="text-sm">Final Loan Balance</span>
                    <span className="font-bold">{formatCurrency(results.finalLoanBalance)}</span>
                  </div>

                  <div className="flex justify-between items-center py-2 border-t border-white/20">
                    <span className="text-sm">Estimated Equity Remaining</span>
                    <span className="font-bold">{formatCurrency(results.estimatedEquityRemaining)}</span>
                  </div>

                  <div className="flex justify-between items-center py-2 border-t border-white/20">
                    <span className="text-sm">Income Gap Covered</span>
                    <span className="font-bold">{results.incomeGapCovered.toFixed(1)}%</span>
                  </div>
                </div>
              </div>

              <button className="w-full bg-orange-400 text-white py-2 rounded-lg mt-4 hover:bg-orange-500 transition-colors text-sm">
                Speak to a Specialist →
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

export default ReverseMortgageCalculator;