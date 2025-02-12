import React, { useState } from 'react';
import { Share, ChevronDown } from 'lucide-react';

const SavingsGoalCalculator = () => {
  // Goal Type
  const [goalType, setGoalType] = useState('retirement');
  
  // Goal Details
  const [targetAmount, setTargetAmount] = useState(5000000);
  const [timeframe, setTimeframe] = useState(10);
  const [initialSavings, setInitialSavings] = useState(100000);
  
  // Growth Assumptions
  const [expectedReturn, setExpectedReturn] = useState(12);
  const [monthlyContribution, setMonthlyContribution] = useState(25000);
  
  // Additional settings
  const [showAdditional, setShowAdditional] = useState(false);
  const [includeInflation, setIncludeInflation] = useState(true);
  const [inflationRate, setInflationRate] = useState(6);
  const [showShareToast, setShowShareToast] = useState(false);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const calculateSavings = () => {
    const monthlyRate = expectedReturn / 1200;
    const inflationAdjustedReturn = includeInflation 
      ? (1 + expectedReturn/100)/(1 + inflationRate/100) - 1
      : expectedReturn/100;
    const adjustedMonthlyRate = inflationAdjustedReturn / 12;
    
    const totalMonths = timeframe * 12;
    let futureValue = initialSavings;
    
    for (let i = 0; i < totalMonths; i++) {
      futureValue = (futureValue + monthlyContribution) * (1 + adjustedMonthlyRate);
    }

    const totalContributions = initialSavings + (monthlyContribution * totalMonths);
    const interestEarned = futureValue - totalContributions;
    
    // Calculate required monthly savings to reach goal
    const requiredMonthlySaving = (targetAmount - initialSavings * Math.pow(1 + adjustedMonthlyRate, totalMonths)) /
      ((Math.pow(1 + adjustedMonthlyRate, totalMonths) - 1) / adjustedMonthlyRate);

    // Calculate final year corpus needed based on goal type
    const goalTypeMultiplier = {
      'retirement': 25, // 25x annual expenses
      'education': 1,   // Lump sum needed
      'home': 1        // Lump sum needed
    };

    const finalCorpusNeeded = targetAmount * (goalTypeMultiplier[goalType] || 1);

    return {
      projectedAmount: Math.round(futureValue),
      totalContributions: Math.round(totalContributions),
      interestEarned: Math.round(interestEarned),
      requiredMonthlySaving: Math.round(Math.max(0, requiredMonthlySaving)),
      shortfall: Math.round(Math.max(0, finalCorpusNeeded - futureValue)),
      goalCorpus: Math.round(finalCorpusNeeded)
    };
  };

  const results = calculateSavings();

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setShowShareToast(true);
      setTimeout(() => setShowShareToast(false), 3000);
    } catch (err) {
      console.error('Failed to copy URL:', err);
    }
  };

  const getGoalTypeDescription = () => {
    switch(goalType) {
      case 'retirement':
        return 'Save for a comfortable retirement with inflation-adjusted corpus';
      case 'education':
        return 'Plan for future education expenses';
      case 'home':
        return 'Save for your dream home down payment';
      default:
        return 'Plan your savings to reach your goal';
    }
  };

  return (
    <div className="calculator-container pt-24">
      <div className="calculator-header text-center mb-8">
        <h1 className="text-2xl font-semibold text-[#113262] mb-2">Savings Goal Calculator</h1>
        <h2 className="text-lg text-gray-600">Estimate savings with this calculator.</h2>
      </div>

      <div className="max-w-5xl mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Input Sections */}
          <div className="lg:col-span-2 space-y-8">
            {/* Goal Type */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Goal Type</h2>
              <div className="flex gap-4">
                <button
                  onClick={() => setGoalType('retirement')}
                  className={`flex-1 py-2 rounded ${
                    goalType === 'retirement'
                      ? 'bg-[#113262] text-white'
                      : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  Retirement
                </button>
                <button
                  onClick={() => setGoalType('education')}
                  className={`flex-1 py-2 rounded ${
                    goalType === 'education'
                      ? 'bg-[#113262] text-white'
                      : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  Education
                </button>
                <button
                  onClick={() => setGoalType('home')}
                  className={`flex-1 py-2 rounded ${
                    goalType === 'home'
                      ? 'bg-[#113262] text-white'
                      : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  Home
                </button>
              </div>
            </div>

            {/* Goal Details */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Goal Details</h2>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block font-medium text-sm mb-1.5">Target Amount</label>
                  <input
                    type="number"
                    value={targetAmount}
                    onChange={(e) => setTargetAmount(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={100000}
                    max={50000000}
                    value={targetAmount}
                    onChange={(e) => setTargetAmount(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>₹1L</span>
                    <span>₹5Cr</span>
                  </div>
                </div>

                <div>
                  <label className="block font-medium text-sm mb-1.5">Time Frame (Years)</label>
                  <input
                    type="number"
                    value={timeframe}
                    onChange={(e) => setTimeframe(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={1}
                    max={30}
                    value={timeframe}
                    onChange={(e) => setTimeframe(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>1 year</span>
                    <span>30 years</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Current Savings */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Current Savings</h2>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block font-medium text-sm mb-1.5">Initial Amount</label>
                  <input
                    type="number"
                    value={initialSavings}
                    onChange={(e) => setInitialSavings(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={0}
                    max={5000000}
                    value={initialSavings}
                    onChange={(e) => setInitialSavings(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>₹0</span>
                    <span>₹50L</span>
                  </div>
                </div>

                <div>
                  <label className="block font-medium text-sm mb-1.5">Monthly Contribution</label>
                  <input
                    type="number"
                    value={monthlyContribution}
                    onChange={(e) => setMonthlyContribution(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={1000}
                    max={100000}
                    value={monthlyContribution}
                    onChange={(e) => setMonthlyContribution(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>₹1,000</span>
                    <span>₹1L</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Settings */}
            <div className="bg-white rounded-lg shadow">
              <button
                onClick={() => setShowAdditional(!showAdditional)}
                className="w-full p-4 flex justify-between items-center hover:bg-gray-50"
              >
                <h2 className="text-lg font-bold text-gray-900">Additional Settings</h2>
                <ChevronDown
                  className={`transform transition-transform ${showAdditional ? 'rotate-180' : ''}`}
                  size={20}
                />
              </button>

              {showAdditional && (
                <div className="p-4 border-t">
                  <label className="flex items-center space-x-2 mb-4">
                    <input
                      type="checkbox"
                      checked={includeInflation}
                      onChange={(e) => setIncludeInflation(e.target.checked)}
                      className="rounded"
                    />
                    <span className="text-sm">Account for Inflation</span>
                  </label>

                  {includeInflation && (
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label className="block font-medium text-sm mb-1.5">Expected Return (%)</label>
                        <input
                          type="number"
                          value={expectedReturn}
                          onChange={(e) => setExpectedReturn(Number(e.target.value))}
                          className="w-full p-1.5 border rounded text-sm"
                        />
                        <input
                          type="range"
                          min={6}
                          max={15}
                          step={0.5}
                          value={expectedReturn}
                          onChange={(e) => setExpectedReturn(Number(e.target.value))}
                          className="w-full mt-2"
                        />
                      </div>

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
                          min={4}
                          max={10}
                          step={0.5}
                          value={inflationRate}
                          onChange={(e) => setInflationRate(Number(e.target.value))}
                          className="w-full mt-2"
                        />
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Results Section */}
          <div className="bg-[#113262] text-white rounded-lg h-[520px] sticky top-6">
            <div className="p-4 border-b border-white/20">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold">Savings Plan</h3>
                <button onClick={handleShare} className="p-1 hover:bg-blue-700 rounded">
                  <Share size={18} />
                </button>
              </div>
            </div>

            <div className="p-4">
              <div className="mb-4">
                <div className="text-3xl font-bold mb-1">{formatCurrency(results.projectedAmount)}</div>
                <div className="text-sm text-gray-300">Projected Amount</div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-t border-white/20">
                  <span className="text-sm">Target Amount</span>
                  <span className="font-bold">{formatCurrency(targetAmount)}</span>
                </div>

                <div className="flex justify-between items-center py-2 border-t border-white/20">
                  <span className="text-sm">Total Contributions</span>
                  <span className="font-bold">{formatCurrency(results.totalContributions)}</span>
                </div>

                <div className="flex justify-between items-center py-2 border-t border-white/20">
                  <span className="text-sm">Interest Earned</span>
                  <span className="font-bold">{formatCurrency(results.interestEarned)}</span>
                </div>

                <div className="flex justify-between items-center py-2 border-t border-white/20">
                  <span className="text-sm">Required Monthly Saving</span>
                  <span className="font-bold">{formatCurrency(results.requiredMonthlySaving)}</span>
                </div>

                <div className="flex justify-between items-center py-2 border-t border-white/20">
                  <span className="text-sm">Projected Shortfall</span>
                  <span className="font-bold">{formatCurrency(results.shortfall)}</span>
                </div>

                {goalType === 'retirement' && (
                  <div className="flex justify-between items-center py-2 border-t border-white/20">
                    <span className="text-sm">Required Corpus</span>
                    <span className="font-bold">{formatCurrency(results.goalCorpus)}</span>
                  </div>
                )}
              </div>

              <button className="w-full bg-orange-400 text-white py-2 rounded-lg mt-4 hover:bg-orange-500 transition-colors text-sm">
                Start Saving →
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

export default SavingsGoalCalculator;