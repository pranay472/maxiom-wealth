import React, { useState } from 'react';
import { Share, ChevronDown } from 'lucide-react';

const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
};

const AgingParentsCalculator = () => {
  const [currentAge, setCurrentAge] = useState(50);
  const [plannedSupportAge, setPlannedSupportAge] = useState(60);
  const [monthlyExpenditure, setMonthlyExpenditure] = useState(100000);
  const [expectedInflation, setExpectedInflation] = useState(6);
  const [expectedReturns, setExpectedReturns] = useState(12);
  const [expectedReturnsCorpus, setExpectedReturnsCorpus] = useState(9);
  const [lifeExpectancy, setLifeExpectancy] = useState(85);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [showShareToast, setShowShareToast] = useState(false);
  const [currentSavings, setCurrentSavings] = useState(0);
  const [expectedReturnsSavings, setExpectedReturnsSavings] = useState(12);
  const [showSavings, setShowSavings] = useState(false);

  const calculateCorpus = () => {
    const timeToStart = plannedSupportAge - currentAge;
    const supportDuration = lifeExpectancy - plannedSupportAge;
    
    // Calculate monthly expense at retirement with inflation
    const monthlyInflatedExpense = monthlyExpenditure * Math.pow((1 + expectedInflation/100), timeToStart);
    
    // Calculate total corpus needed
    const annualExpense = monthlyInflatedExpense * 12;
    const annualReturnRate = expectedReturnsCorpus / 100;
    
    // Using the formula for perpetuity with growth
    // Corpus = Annual Payment / (Return Rate - Growth Rate)
    // Assuming a conservative real growth rate after inflation
    const realGrowthRate = 0.02; // 2% real growth
    const corpus = annualExpense / (annualReturnRate - realGrowthRate);
    
    return {
      corpus: Math.round(corpus),
      inflationAdjustedAmount: Math.round(corpus),
      monthlyExpenseAfterRetirement: Math.round(monthlyInflatedExpense)
    };
  };

  const calculateInvestments = (corpus) => {
    const timeToStart = plannedSupportAge - currentAge;
    const annualRate = expectedReturns / 100;
    
    // Calculate future value of current savings
    let futureValueSavings = 0;
    if (showSavings && currentSavings > 0) {
      futureValueSavings = currentSavings * Math.pow(1 + expectedReturnsSavings/100, timeToStart);
    }
    
    // Adjust required corpus based on savings
    const targetAmount = corpus - futureValueSavings;
    
    // Calculate monthly investment using modified formula
    // PMT = FV / ((1 + r)^n - 1) * r
    // Where FV is the target amount, r is monthly rate, n is total months
    const monthlyRate = annualRate / 12;
    const totalMonths = timeToStart * 12;
    
    const monthlyInvestment = (targetAmount * monthlyRate) / 
      (Math.pow(1 + monthlyRate, totalMonths) - 1);
    
    // Calculate one-time investment
    const oneTimeInvestment = targetAmount / Math.pow(1 + annualRate, timeToStart);
    
    return {
      monthly: Math.round(monthlyInvestment),
      yearly: Math.round(monthlyInvestment * 12),
      oneTime: Math.round(oneTimeInvestment)
    };
  };

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setShowShareToast(true);
      setTimeout(() => setShowShareToast(false), 3000);
    } catch (err) {
      console.error('Failed to copy URL:', err);
    }
  };

  const { corpus, monthlyExpenseAfterRetirement } = calculateCorpus();
  const investments = calculateInvestments(corpus);

  return (
    <div className="calculator-container pt-24">
      <div className="calculator-header text-center mb-8">
        <h1 className="text-2xl font-semibold text-[#113262] mb-2">Aging Parents Calculator</h1>
        <h2 className="text-lg text-gray-600">Calculate the investment required to secure your parents' future</h2>
      </div>

      <div className="max-w-5xl mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Input Sections */}
          <div className="lg:col-span-2 space-y-8">
            {/* Basic Details */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Basic Details</h2>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block font-medium text-sm mb-1.5">Current Age of Your Parent</label>
                  <input
                    type="number"
                    value={currentAge}
                    onChange={(e) => setCurrentAge(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={40}
                    max={100}
                    value={currentAge}
                    onChange={(e) => setCurrentAge(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>40 years</span>
                    <span>100 years</span>
                  </div>
                </div>

                <div>
                  <label className="block font-medium text-sm mb-1.5">Planned Support Age</label>
                  <input
                    type="number"
                    value={plannedSupportAge}
                    onChange={(e) => setPlannedSupportAge(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={50}
                    max={100}
                    value={plannedSupportAge}
                    onChange={(e) => setPlannedSupportAge(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>50 years</span>
                    <span>100 years</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Financial Details */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Financial Details</h2>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block font-medium text-sm mb-1.5">Monthly Expenditure</label>
                  <input
                    type="number"
                    value={monthlyExpenditure}
                    onChange={(e) => setMonthlyExpenditure(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={20000}
                    max={500000}
                    step={5000}
                    value={monthlyExpenditure}
                    onChange={(e) => setMonthlyExpenditure(Number(e.target.value))}
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
                    value={expectedInflation}
                    onChange={(e) => setExpectedInflation(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={0}
                    max={20}
                    value={expectedInflation}
                    onChange={(e) => setExpectedInflation(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>0%</span>
                    <span>20%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Investment Settings */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Investment Settings</h2>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block font-medium text-sm mb-1.5">Expected Returns (%)</label>
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
                      <label className="block font-medium text-sm mb-1.5">Expected Returns on Corpus (%)</label>
                      <input
                        type="number"
                        value={expectedReturnsCorpus}
                        onChange={(e) => setExpectedReturnsCorpus(Number(e.target.value))}
                        className="w-full p-1.5 border rounded text-sm"
                      />
                      <input
                        type="range"
                        min={0}
                        max={20}
                        value={expectedReturnsCorpus}
                        onChange={(e) => setExpectedReturnsCorpus(Number(e.target.value))}
                        className="w-full mt-2"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>0%</span>
                        <span>20%</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-4">
                    <input
                      type="checkbox"
                      checked={showSavings}
                      onChange={(e) => setShowSavings(e.target.checked)}
                      className="w-4 h-4"
                    />
                    <label className="text-sm font-medium">Do You Have Any Existing Savings?</label>
                  </div>

                  {showSavings && (
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
                          max={5000000}
                          step={10000}
                          value={currentSavings}
                          onChange={(e) => setCurrentSavings(Number(e.target.value))}
                          className="w-full mt-2"
                        />
                        <div className="flex justify-between text-xs text-gray-500 mt-1">
                          <span>₹0</span>
                          <span>₹50L</span>
                        </div>
                      </div>

                      <div>
                        <label className="block font-medium text-sm mb-1.5">Expected Returns on Savings (%)</label>
                        <input
                          type="number"
                          value={expectedReturnsSavings}
                          onChange={(e) => setExpectedReturnsSavings(Number(e.target.value))}
                          className="w-full p-1.5 border rounded text-sm"
                        />
                        <input
                          type="range"
                          min={0}
                          max={20}
                          value={expectedReturnsSavings}
                          onChange={(e) => setExpectedReturnsSavings(Number(e.target.value))}
                          className="w-full mt-2"
                        />
                        <div className="flex justify-between text-xs text-gray-500 mt-1">
                          <span>0%</span>
                          <span>20%</span>
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
                <h3 className="text-xl font-bold">AGING PARENTS CORPUS</h3>
                <button onClick={handleShare} className="p-1 hover:bg-blue-700 rounded">
                  <Share size={18} />
                </button>
              </div>
            </div>

            <div className="p-4 flex flex-col h-[calc(100%-68px)] justify-between">
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">
                    {formatCurrency(corpus)}
                  </div>
                  <div className="text-sm text-gray-300">Required Amount (inflation adjusted)</div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-t border-white/20">
                    <span className="text-sm">Monthly Investment</span>
                    <span className="font-bold">{formatCurrency(investments.monthly)}</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-2 border-t border-white/20">
                    <span className="text-sm">Yearly Investment</span>
                    <span className="font-bold">{formatCurrency(investments.yearly)}</span>
                  </div>

                  <div className="flex justify-between items-center py-2 border-t border-white/20">
                    <span className="text-sm">One Time Investment</span>
                    <span className="font-bold">{formatCurrency(investments.oneTime)}</span>
                  </div>

                  <div className="flex justify-between items-center py-2 border-t border-white/20">
                    <span className="text-sm">Monthly Expense (After Retirement)</span>
                    <span className="font-bold">{formatCurrency(monthlyExpenseAfterRetirement)}</span>
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

export default AgingParentsCalculator;