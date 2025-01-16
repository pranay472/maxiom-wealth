import React, { useState } from 'react';
import { Share, ChevronDown } from 'lucide-react';

const GoalsCalculator = () => {
  // Goal details
  const [goalAmount, setGoalAmount] = useState(10000000);
  const [yearsToAchieve, setYearsToAchieve] = useState(3);
  const [expectedReturns, setExpectedReturns] = useState(12);

  // Investment details
  const [currentSavings, setCurrentSavings] = useState(0);
  const [expectedInflation, setExpectedInflation] = useState(6);

  // Additional settings
  const [showAdditional, setShowAdditional] = useState(false);
  const [savingsReturns, setSavingsReturns] = useState(12);
  const [savingsGrowth, setSavingsGrowth] = useState(9);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const calculateInvestments = () => {
    // Calculate inflation-adjusted goal amount
    const inflatedAmount = goalAmount * Math.pow((1 + expectedInflation/100), yearsToAchieve);
    
    // Calculate future value of current savings if any
    let futureValueSavings = 0;
    if (currentSavings > 0) {
      let savings = currentSavings;
      // For each year:
      // 1. Apply investment returns to current balance
      // 2. Add growth amount based on original principal
      for(let year = 1; year <= yearsToAchieve; year++) {
        savings = savings * (1 + savingsReturns/100);  // Apply returns
        savings = savings + (currentSavings * savingsGrowth/100);  // Add growth
      }
      futureValueSavings = savings;
    }
    
    // Calculate required amount after considering savings
    const requiredAmount = Math.max(0, inflatedAmount - futureValueSavings);
    
    // Calculate monthly investment
    const monthlyRate = expectedReturns / (12 * 100);
    const totalMonths = yearsToAchieve * 12;
    const annualRate = expectedReturns / 100;
    
    const monthlyInvestment = requiredAmount * monthlyRate / 
      ((Math.pow(1 + monthlyRate, totalMonths) - 1) / (1 + monthlyRate));

    return {
      inflatedAmount: Math.round(inflatedAmount),
      monthly: Math.round(monthlyInvestment),
      yearly: Math.round(monthlyInvestment * 12),
      oneTime: Math.round(requiredAmount / Math.pow(1 + annualRate, yearsToAchieve)),
      futureValueSavings: Math.round(futureValueSavings)
    };
  };

  const results = calculateInvestments();

  return (
    <div className="calculator-container pt-24">
      <div className="calculator-header text-center mb-8">
        <h1 className="text-2xl font-semibold text-[#113262] mb-2">Custom Goal Tracker</h1>
        <h2 className="text-lg text-gray-600">Achieve Any Financial Goals with Custom Goal Calculator</h2>
      </div>
      <div className="max-w-5xl mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Input Sections */}
          <div className="lg:col-span-2 space-y-8">
            {/* Goal Details Section */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Goal Details</h2>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block font-medium text-sm mb-1.5">Goal Amount</label>
                  <input
                    type="number"
                    value={goalAmount}
                    onChange={(e) => setGoalAmount(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={50000}
                    max={10000000}
                    step={10000}
                    value={goalAmount}
                    onChange={(e) => setGoalAmount(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                </div>

                <div>
                  <label className="block font-medium text-sm mb-1.5">Years to Achieve</label>
                  <input
                    type="number"
                    value={yearsToAchieve}
                    onChange={(e) => setYearsToAchieve(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={1}
                    max={30}
                    value={yearsToAchieve}
                    onChange={(e) => setYearsToAchieve(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                </div>
              </div>
            </div>

            {/* Investment Details Section */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Investment Details</h2>
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
                    max={goalAmount}
                    step={10000}
                    value={currentSavings}
                    onChange={(e) => setCurrentSavings(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                </div>

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
                </div>
              </div>
            </div>

            {/* Additional Settings Section */}
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
                  <div className="grid grid-cols-2 gap-6">
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
                    </div>

                    <div>
                      <label className="block font-medium text-sm mb-1.5">Returns on Savings (%)</label>
                      <input
                        type="number"
                        value={savingsReturns}
                        onChange={(e) => setSavingsReturns(Number(e.target.value))}
                        className="w-full p-1.5 border rounded text-sm"
                      />
                      <input
                        type="range"
                        min={0}
                        max={20}
                        value={savingsReturns}
                        onChange={(e) => setSavingsReturns(Number(e.target.value))}
                        className="w-full mt-2"
                      />
                    </div>

                    <div>
                      <label className="block font-medium text-sm mb-1.5">Savings Growth (%)</label>
                      <input
                        type="number"
                        value={savingsGrowth}
                        onChange={(e) => setSavingsGrowth(Number(e.target.value))}
                        className="w-full p-1.5 border rounded text-sm"
                      />
                      <input
                        type="range"
                        min={0}
                        max={20}
                        value={savingsGrowth}
                        onChange={(e) => setSavingsGrowth(Number(e.target.value))}
                        className="w-full mt-2"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Results Section */}
          <div className="bg-[#113262] text-white rounded-lg h-[410px] sticky top-6">
            <div className="p-4 border-b border-white/20">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold">Goal Summary</h3>
                <button className="p-1 hover:bg-blue-700 rounded">
                  <Share size={18} />
                </button>
              </div>
            </div>

            <div className="p-4">
              <div className="mb-4">
                <div className="text-3xl font-bold mb-1">{formatCurrency(results.inflatedAmount)}</div>
                <div className="text-sm text-gray-300">Future Goal Value</div>
              </div>

              <div className="space-y-3">
                <h4 className="text-sm font-medium text-gray-300">Investment Required</h4>
                
                <div className="flex justify-between items-center py-2 border-t border-white/20">
                  <span className="text-sm">Monthly Investment</span>
                  <span className="font-bold">{formatCurrency(results.monthly)}</span>
                </div>
                
                <div className="flex justify-between items-center py-2 border-t border-white/20">
                  <span className="text-sm">Yearly Investment</span>
                  <span className="font-bold">{formatCurrency(results.yearly)}</span>
                </div>

                <div className="flex justify-between items-center py-2 border-t border-white/20">
                  <span className="text-sm">One Time Investment</span>
                  <span className="font-bold">{formatCurrency(results.oneTime)}</span>
                </div>
              </div>

              <button className="w-full bg-orange-400 text-white py-2 rounded-lg mt-4 hover:bg-orange-500 transition-colors text-sm">
                Start Planning →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoalsCalculator;