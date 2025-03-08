import React, { useState, useEffect } from 'react';
import { Share, ChevronDown } from 'lucide-react';

const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
};

const FIRECalculator = () => {
  const [currentAge, setCurrentAge] = useState(30);
  const [targetRetirementAge, setTargetRetirementAge] = useState(45);
  const [currentSavings, setCurrentSavings] = useState(2000000);
  const [monthlyExpenses, setMonthlyExpenses] = useState(50000);
  const [monthlyIncome, setMonthlyIncome] = useState(150000);
  const [expectedReturnRate, setExpectedReturnRate] = useState(12);
  const [inflationRate, setInflationRate] = useState(6);
  const [withdrawalRate, setWithdrawalRate] = useState(4);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [showShareToast, setShowShareToast] = useState(false);
  const [result, setResult] = useState({
    requiredCorpus: 0,
    currentSavingsRate: 0,
    yearlyExpensesAtRetirement: 0,
    yearlySavingsNeeded: 0,
    finalBalance: 0,
    yearsSavedByHigherSavings: 0
  });

  const calculateFIRE = () => {
    const yearsToRetirement = targetRetirementAge - currentAge;
    const monthlyExpensesAtRetirement = monthlyExpenses * 
      Math.pow(1 + inflationRate / 100, yearsToRetirement);
    
    // Calculate required corpus using the 4% rule (or user-defined withdrawal rate)
    const annualExpensesAtRetirement = monthlyExpensesAtRetirement * 12;
    const requiredCorpus = (annualExpensesAtRetirement * 100) / withdrawalRate;
    
    // Calculate monthly savings needed
    const monthlySavings = monthlyIncome - monthlyExpenses;
    
    let balance = currentSavings;
    let yearsSavedByHigherSavings = 0;

    // Calculate year by year progression
    for (let year = 0; year <= yearsToRetirement; year++) {
      const yearlyReturn = balance * (expectedReturnRate / 100);
      const yearlySavings = monthlySavings * 12;
      balance = balance + yearlyReturn + yearlySavings;

      // Check if FIRE target is reached earlier
      if (balance >= requiredCorpus && yearsSavedByHigherSavings === 0) {
        yearsSavedByHigherSavings = yearsToRetirement - year;
      }
    }

    const savingsRate = (monthlySavings / monthlyIncome) * 100;

    return {
      requiredCorpus,
      currentSavingsRate: savingsRate,
      yearlyExpensesAtRetirement: annualExpensesAtRetirement,
      yearlySavingsNeeded: monthlySavings * 12,
      finalBalance: balance,
      yearsSavedByHigherSavings
    };
  };

  useEffect(() => {
    setResult(calculateFIRE());
  }, [
    currentAge, 
    targetRetirementAge, 
    currentSavings, 
    monthlyExpenses, 
    monthlyIncome, 
    expectedReturnRate, 
    inflationRate, 
    withdrawalRate
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
        <h1 className="text-2xl font-semibold text-[#113262] mb-2">FIRE Calculator</h1>
        <h2 className="text-lg text-gray-600">Plan your Financial Independence and Early Retirement</h2>
      </div>

      <div className="max-w-5xl mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Input Sections */}
          <div className="lg:col-span-2 space-y-8">
            {/* Age Details */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Age Details</h2>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block font-medium text-sm mb-1.5">Current Age</label>
                  <input
                    type="number"
                    value={currentAge}
                    onChange={(e) => setCurrentAge(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={18}
                    max={60}
                    value={currentAge}
                    onChange={(e) => setCurrentAge(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>18 years</span>
                    <span>60 years</span>
                  </div>
                </div>

                <div>
                  <label className="block font-medium text-sm mb-1.5">Target FIRE Age</label>
                  <input
                    type="number"
                    value={targetRetirementAge}
                    onChange={(e) => setTargetRetirementAge(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={35}
                    max={65}
                    value={targetRetirementAge}
                    onChange={(e) => setTargetRetirementAge(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>35 years</span>
                    <span>65 years</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Financial Details */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Financial Details</h2>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block font-medium text-sm mb-1.5">Current Savings</label>
                  <input
                    type="number"
                    value={currentSavings}
                    onChange={(e) => setCurrentSavings(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={0}
                    max={50000000}
                    step={100000}
                    value={currentSavings}
                    onChange={(e) => setCurrentSavings(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>₹0</span>
                    <span>₹5Cr</span>
                  </div>
                </div>

                <div>
                  <label className="block font-medium text-sm mb-1.5">Monthly Income</label>
                  <input
                    type="number"
                    value={monthlyIncome}
                    onChange={(e) => setMonthlyIncome(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={30000}
                    max={1000000}
                    step={5000}
                    value={monthlyIncome}
                    onChange={(e) => setMonthlyIncome(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>₹30K</span>
                    <span>₹10L</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Expense Details */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Expense Details</h2>
              <div className="grid grid-cols-2 gap-6">
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
                    max={500000}
                    step={5000}
                    value={monthlyExpenses}
                    onChange={(e) => setMonthlyExpenses(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>₹10K</span>
                    <span>₹5L</span>
                  </div>
                </div>

                <div>
                  <label className="block font-medium text-sm mb-1.5">Expected Return Rate (%)</label>
                  <input
                    type="number"
                    value={expectedReturnRate}
                    onChange={(e) => setExpectedReturnRate(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={4}
                    max={15}
                    step={0.5}
                    value={expectedReturnRate}
                    onChange={(e) => setExpectedReturnRate(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>4%</span>
                    <span>15%</span>
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
                      <label className="block font-medium text-sm mb-1.5">Inflation Rate (%)</label>
                      <input
                        type="number"
                        value={inflationRate}
                        onChange={(e) => setInflationRate(Number(e.target.value))}
                        className="w-full p-1.5 border rounded text-sm"
                      />
                      <input
                        type="range"
                        min={2}
                        max={10}
                        step={0.5}
                        value={inflationRate}
                        onChange={(e) => setInflationRate(Number(e.target.value))}
                        className="w-full mt-2"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>2%</span>
                        <span>10%</span>
                      </div>
                    </div>

                    <div>
                      <label className="block font-medium text-sm mb-1.5">Withdrawal Rate (%)</label>
                      <input
                        type="number"
                        value={withdrawalRate}
                        onChange={(e) => setWithdrawalRate(Number(e.target.value))}
                        className="w-full p-1.5 border rounded text-sm"
                      />
                      <input
                        type="range"
                        min={2}
                        max={6}
                        step={0.1}
                        value={withdrawalRate}
                        onChange={(e) => setWithdrawalRate(Number(e.target.value))}
                        className="w-full mt-2"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>2%</span>
                        <span>6%</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Results Section */}
          <div className="bg-[#113262] text-white rounded-lg h-[500px] sticky top-6">
            <div className="p-4 border-b border-white/20">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold">FIRE Target Corpus</h3>
                <button onClick={handleShare} className="p-1 hover:bg-blue-700 rounded">
                  <Share size={18} />
                </button>
              </div>
            </div>

            <div className="p-4 flex flex-col h-[calc(100%-68px)] justify-between">
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">
                    {formatCurrency(result.requiredCorpus)}
                  </div>
                  <div className="text-sm text-gray-300">Required corpus for FIRE</div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-t border-white/20">
                    <span className="text-sm">Current Savings Rate</span>
                    <span className="font-bold">{result.currentSavingsRate.toFixed(1)}%</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-2 border-t border-white/20">
                    <span className="text-sm">Yearly Expenses at FIRE</span>
                    <span className="font-bold">{formatCurrency(result.yearlyExpensesAtRetirement)}</span>
                  </div>

                  <div className="flex justify-between items-center py-2 border-t border-white/20">
                    <span className="text-sm">Required Yearly Savings</span>
                    <span className="font-bold">{formatCurrency(result.yearlySavingsNeeded)}</span>
                  </div>

                  <div className="flex justify-between items-center py-2 border-t border-white/20">
                    <span className="text-sm">Potential Years Saved</span>
                    <span className="font-bold">{result.yearsSavedByHigherSavings} years</span>
                  </div>
                </div>
              </div>

              <button className="w-full bg-orange-400 text-white py-2 rounded-lg mt-4 hover:bg-orange-500 transition-colors text-sm">
                Start Planning →
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

export default FIRECalculator;