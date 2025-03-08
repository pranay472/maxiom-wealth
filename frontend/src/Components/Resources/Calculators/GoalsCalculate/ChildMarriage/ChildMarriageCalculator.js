import React, { useState } from 'react';
import { Share, ChevronDown } from 'lucide-react';

const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
};

const ChildMarriageCalculator = () => {
  const [weddingCost, setWeddingCost] = useState(1000000);
  const [yearsToWedding, setYearsToWedding] = useState(3);
  const [expectedReturns, setExpectedReturns] = useState(12);
  const [expectedInflation, setExpectedInflation] = useState(6);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [showShareToast, setShowShareToast] = useState(false);
  const [showSavings, setShowSavings] = useState(false);
  const [currentSavings, setCurrentSavings] = useState(0);
  const [expectedReturnsSavings, setExpectedReturnsSavings] = useState(12);
  const [savingsGrowth, setSavingsGrowth] = useState(9);

  const calculateWeddingFund = () => {
    // Calculate inflation adjusted wedding cost (with 10x multiplier for total wedding expenses)
    const inflatedWeddingCost = weddingCost * Math.pow((1 + expectedInflation/100), yearsToWedding) * 10;
    
    // Calculate future value of current savings if any
    let futureValueSavings = 0;
    if (showSavings && currentSavings > 0) {
      // Calculate total returns (growth + investment returns)
      const totalRate = (savingsGrowth + expectedReturnsSavings) / 100;
      
      // Apply compound interest with total rate
      futureValueSavings = currentSavings * Math.pow(1 + totalRate, yearsToWedding);
    }
    
    // Calculate required amount after considering savings
    const requiredAmount = Math.max(0, inflatedWeddingCost - futureValueSavings);
    
    // Calculate monthly investment
    const monthlyRate = expectedReturns / (12 * 100);
    const totalMonths = yearsToWedding * 12;
    const annualRate = expectedReturns / 100;
    
    // PMT = FV / (((1 + r)^n - 1) / r)
    const monthlyInvestment = requiredAmount / 
      ((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate);
    
    return {
      inflationAdjustedAmount: Math.round(inflatedWeddingCost),
      monthly: Math.round(monthlyInvestment),
      yearly: Math.round(monthlyInvestment * 12),
      oneTime: Math.round(requiredAmount / Math.pow(1 + annualRate, yearsToWedding))
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

  const results = calculateWeddingFund();

  return (
    <div className="calculator-container pt-24">
      <div className="calculator-header text-center mb-8">
        <h1 className="text-2xl font-semibold text-[#113262] mb-2">Child Marriage Calculator</h1>
        <h2 className="text-lg text-gray-600">Plan your investments for your child's wedding expenses</h2>
      </div>

      <div className="max-w-5xl mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Input Sections */}
          <div className="lg:col-span-2 space-y-8">
            {/* Cost Details */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Wedding Details</h2>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block font-medium text-sm mb-1.5">Wedding Cost (Today)</label>
                  <input
                    type="number"
                    value={weddingCost}
                    onChange={(e) => setWeddingCost(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={50000}
                    max={10000000}
                    step={10000}
                    value={weddingCost}
                    onChange={(e) => setWeddingCost(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>₹50K</span>
                    <span>₹1Cr</span>
                  </div>
                </div>

                <div>
                  <label className="block font-medium text-sm mb-1.5">Years to Wedding</label>
                  <input
                    type="number"
                    value={yearsToWedding}
                    onChange={(e) => setYearsToWedding(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={1}
                    max={30}
                    value={yearsToWedding}
                    onChange={(e) => setYearsToWedding(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>1 year</span>
                    <span>30 years</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Financial Details */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Financial Assumptions</h2>
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
                    min={0}
                    max={30}
                    value={expectedReturns}
                    onChange={(e) => setExpectedReturns(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>0%</span>
                    <span>30%</span>
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
                  <div className="flex items-center gap-2 mb-4">
                    <input
                      type="checkbox"
                      id="haveSavings"
                      checked={showSavings}
                      onChange={(e) => setShowSavings(e.target.checked)}
                      className="w-4 h-4"
                    />
                    <label htmlFor="haveSavings" className="text-sm font-medium">
                      I have existing savings
                    </label>
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
                          max={weddingCost}
                          step={10000}
                          value={currentSavings}
                          onChange={(e) => setCurrentSavings(Number(e.target.value))}
                          className="w-full mt-2"
                        />
                        <div className="flex justify-between text-xs text-gray-500 mt-1">
                          <span>₹0</span>
                          <span>{formatCurrency(weddingCost)}</span>
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
                          max={30}
                          value={expectedReturnsSavings}
                          onChange={(e) => setExpectedReturnsSavings(Number(e.target.value))}
                          className="w-full mt-2"
                        />
                        <div className="flex justify-between text-xs text-gray-500 mt-1">
                          <span>0%</span>
                          <span>30%</span>
                        </div>
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
                          max={30}
                          value={savingsGrowth}
                          onChange={(e) => setSavingsGrowth(Number(e.target.value))}
                          className="w-full mt-2"
                        />
                        <div className="flex justify-between text-xs text-gray-500 mt-1">
                          <span>0%</span>
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
                <h3 className="text-xl font-bold">Your Child's Wedding</h3>
                <button onClick={handleShare} className="p-1 hover:bg-blue-700 rounded">
                  <Share size={18} />
                </button>
              </div>
            </div>

            <div className="p-4 flex flex-col h-[calc(100%-68px)] justify-between">
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">
                    {formatCurrency(results.inflationAdjustedAmount)}
                  </div>
                  <div className="text-sm text-gray-300">Required amount (inflation adjusted)</div>
                </div>

                <div className="space-y-3">
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

export default ChildMarriageCalculator;