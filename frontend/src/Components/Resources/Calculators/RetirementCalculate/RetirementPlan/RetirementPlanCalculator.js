import React, { useState, useEffect } from 'react';
import { Share, ChevronDown } from 'lucide-react';

const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
};

const RetirementCalculator = () => {
  const [currentAge, setCurrentAge] = useState(30);
  const [retirementAge, setRetirementAge] = useState(55);
  const [monthlyExpense, setMonthlyExpense] = useState(100000);
  const [inflation, setInflation] = useState(6);
  const [expectedReturns, setExpectedReturns] = useState(12);
  const [retirementReturns, setRetirementReturns] = useState(9);
  const [lifeExpectancy, setLifeExpectancy] = useState(85);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [showShareToast, setShowShareToast] = useState(false);
  const [hasSavings, setHasSavings] = useState(false);
  const [currentSavings, setCurrentSavings] = useState(0);
  const [savingsReturns, setSavingsReturns] = useState(12);
  const [results, setResults] = useState({
    requiredCorpus: 0,
    monthlyInvestment: 0,
    yearlyInvestment: 0,
    oneTimeInvestment: 0,
    monthlyExpenseAtRetirement: 0
  });

  const calculateRetirementNeeds = () => {
    const yearsToRetirement = retirementAge - currentAge;
    const retirementDuration = lifeExpectancy - retirementAge;
    
    // Calculate monthly expense at retirement with compound inflation
    const monthlyExpenseAtRetirement = monthlyExpense * 
      Math.pow(1 + inflation / 100, yearsToRetirement);

    // Calculate total retirement corpus needed
    // Using a more conservative approach that accounts for post-retirement inflation
    const postRetirementInflationRate = inflation / 100;
    const postRetirementReturnRate = retirementReturns / 100;
    
    // Calculate the present value of retirement corpus needed
    let retirementCorpus = monthlyExpenseAtRetirement * 12 * 
      (1 - Math.pow(1 + postRetirementInflationRate - postRetirementReturnRate, retirementDuration)) /
      (postRetirementReturnRate - postRetirementInflationRate);

    // Add a safety margin of 10% to account for market fluctuations
    retirementCorpus *= 1.1;

    // Deduct future value of current savings if any
    if (hasSavings && currentSavings > 0) {
      const futureSavings = currentSavings * 
        Math.pow(1 + savingsReturns / 100, yearsToRetirement);
      retirementCorpus -= futureSavings;
    }

    // Calculate required monthly investment
    const monthlyReturnRate = expectedReturns / 12 / 100;
    const monthsToRetirement = yearsToRetirement * 12;
    
    const requiredMonthlyInvestment = (retirementCorpus * monthlyReturnRate) / 
      (Math.pow(1 + monthlyReturnRate, monthsToRetirement) - 1);

    // Calculate yearly and one-time investments
    const yearlyInvestment = requiredMonthlyInvestment * 12;
    const oneTimeInvestment = retirementCorpus / 
      Math.pow(1 + expectedReturns / 100, yearsToRetirement);

    setResults({
      requiredCorpus: Math.round(retirementCorpus),
      monthlyInvestment: Math.round(requiredMonthlyInvestment),
      yearlyInvestment: Math.round(yearlyInvestment),
      oneTimeInvestment: Math.round(oneTimeInvestment),
      monthlyExpenseAtRetirement: Math.round(monthlyExpenseAtRetirement)
    });
  };

  useEffect(() => {
    calculateRetirementNeeds();
  }, [
    currentAge, 
    retirementAge, 
    monthlyExpense, 
    inflation, 
    expectedReturns, 
    retirementReturns, 
    lifeExpectancy, 
    hasSavings, 
    currentSavings, 
    savingsReturns
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
        <h1 className="text-2xl font-semibold text-[#113262] mb-2">Retirement Calculator</h1>
        <h2 className="text-lg text-gray-600">Plan your retirement fund with our calculator</h2>
      </div>

      <div className="max-w-5xl mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Input Sections */}
          <div className="lg:col-span-2 space-y-8">
            {/* Basic Details */}
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
                    min={20}
                    max={70}
                    value={currentAge}
                    onChange={(e) => setCurrentAge(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>20 years</span>
                    <span>70 years</span>
                  </div>
                </div>

                <div>
                  <label className="block font-medium text-sm mb-1.5">Retirement Age</label>
                  <input
                    type="number"
                    value={retirementAge}
                    onChange={(e) => setRetirementAge(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={45}
                    max={70}
                    value={retirementAge}
                    onChange={(e) => setRetirementAge(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>45 years</span>
                    <span>70 years</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Expense Details */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Financial Details</h2>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block font-medium text-sm mb-1.5">Monthly Expenses</label>
                  <input
                    type="number"
                    value={monthlyExpense}
                    onChange={(e) => setMonthlyExpense(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={20000}
                    max={500000}
                    step={5000}
                    value={monthlyExpense}
                    onChange={(e) => setMonthlyExpense(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>₹20K</span>
                    <span>₹5L</span>
                  </div>
                </div>

                <div>
                  <label className="block font-medium text-sm mb-1.5">Expected Inflation (%)</label>
                  <input
                    type="number"
                    value={inflation}
                    onChange={(e) => setInflation(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={0}
                    max={20}
                    value={inflation}
                    onChange={(e) => setInflation(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>0%</span>
                    <span>20%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Investment Details */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Investment Details</h2>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block font-medium text-sm mb-1.5">Expected Returns Before Retirement (%)</label>
                  <input
                    type="number"
                    value={expectedReturns}
                    onChange={(e) => setExpectedReturns(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={5}
                    max={20}
                    value={expectedReturns}
                    onChange={(e) => setExpectedReturns(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>5%</span>
                    <span>20%</span>
                  </div>
                </div>

                <div>
                  <label className="block font-medium text-sm mb-1.5">Life Expectancy</label>
                  <input
                    type="number"
                    value={lifeExpectancy}
                    onChange={(e) => setLifeExpectancy(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={70}
                    max={100}
                    value={lifeExpectancy}
                    onChange={(e) => setLifeExpectancy(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>70 years</span>
                    <span>100 years</span>
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
                  <div className="grid grid-cols-1 gap-6 mb-6">
                    <div>
                      <label className="block font-medium text-sm mb-1.5">Expected Returns After Retirement (%)</label>
                      <input
                        type="number"
                        value={retirementReturns}
                        onChange={(e) => setRetirementReturns(Number(e.target.value))}
                        className="w-full p-1.5 border rounded text-sm"
                      />
                      <input
                        type="range"
                        min={5}
                        max={20}
                        value={retirementReturns}
                        onChange={(e) => setRetirementReturns(Number(e.target.value))}
                        className="w-full mt-2"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>5%</span>
                        <span>20%</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-4">
                    <input
                      type="checkbox"
                      id="hasSavings"
                      checked={hasSavings}
                      onChange={(e) => setHasSavings(e.target.checked)}
                      className="w-4 h-4"
                    />
                    <label htmlFor="hasSavings" className="text-sm font-medium">
                      I have some savings for retirement
                    </label>
                  </div>

                  {hasSavings && (
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
                          max={10000000}
                          step={100000}
                          value={currentSavings}
                          onChange={(e) => setCurrentSavings(Number(e.target.value))}
                          className="w-full mt-2"
                        />
                        <div className="flex justify-between text-xs text-gray-500 mt-1">
                          <span>₹0</span>
                          <span>₹1Cr</span>
                        </div>
                      </div>

                      <div>
                        <label className="block font-medium text-sm mb-1.5">Expected Returns on Savings (%)</label>
                        <input
                          type="number"
                          value={savingsReturns}
                          onChange={(e) => setSavingsReturns(Number(e.target.value))}
                          className="w-full p-1.5 border rounded text-sm"
                        />
                        <input
                          type="range"
                          min={1}
                          max={30}
                          value={savingsReturns}
                          onChange={(e) => setSavingsReturns(Number(e.target.value))}
                          className="w-full mt-2"
                        />
                        <div className="flex justify-between text-xs text-gray-500 mt-1">
                          <span>1%</span>
                          <span>30%</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Results Section */}
          <div className="bg-[#113262] text-white rounded-lg h-[500px] sticky top-6">
            <div className="p-4 border-b border-white/20">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold">Retirement Plan</h3>
                <button onClick={handleShare} className="p-1 hover:bg-blue-700 rounded">
                  <Share size={18} />
                </button>
              </div>
            </div>

            <div className="p-4 flex flex-col h-[calc(100%-68px)] justify-between">
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">
                    {formatCurrency(results.requiredCorpus)}
                  </div>
                  <div className="text-sm text-gray-300">Required retirement corpus</div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-t border-white/20">
                    <span className="text-sm">Monthly Investment</span>
                    <span className="font-bold">{formatCurrency(results.monthlyInvestment)}</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-2 border-t border-white/20">
                    <span className="text-sm">Yearly Investment</span>
                    <span className="font-bold">{formatCurrency(results.yearlyInvestment)}</span>
                  </div>

                  <div className="flex justify-between items-center py-2 border-t border-white/20">
                    <span className="text-sm">One Time Investment</span>
                    <span className="font-bold">{formatCurrency(results.oneTimeInvestment)}</span>
                  </div>

                  <div className="flex justify-between items-center py-2 border-t border-white/20">
                    <span className="text-sm">Monthly Expense (At Retirement)</span>
                    <span className="font-bold">{formatCurrency(results.monthlyExpenseAtRetirement)}</span>
                  </div>
                </div>
              </div>

              <button className="w-full bg-orange-400 text-white py-2 rounded-lg mt-4 hover:bg-orange-500 transition-colors text-sm">
                Get Started →
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

export default RetirementCalculator;