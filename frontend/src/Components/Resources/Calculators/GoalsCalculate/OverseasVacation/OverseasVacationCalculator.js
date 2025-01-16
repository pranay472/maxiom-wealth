import React, { useState } from 'react';
import { Share, ChevronDown } from 'lucide-react';

const OverseasVacationCalculator = () => {
  // Basic vacation details
  const [travelCost, setTravelCost] = useState(1000000);
  const [yearsToTravel, setYearsToTravel] = useState(3);
  const [expectedReturns, setExpectedReturns] = useState(12);

  // Investment details
  const [currentSavings, setCurrentSavings] = useState(0);
  const [expectedInflation, setExpectedInflation] = useState(6);

  // Additional settings
  const [showAdditional, setShowAdditional] = useState(false);
  const [expectedReturnsSavings, setExpectedReturnsSavings] = useState(12);
  const [savingsGrowth, setSavingsGrowth] = useState(9);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const calculateVacation = () => {
    // Calculate inflation adjusted travel cost
    const inflatedAmount = travelCost * Math.pow((1 + expectedInflation/100), yearsToTravel);
    
    // Calculate future value of current savings if any
    let futureValueSavings = 0;
    if (currentSavings > 0) {
      // Calculate future value with savings growth
      const growthAmount = currentSavings * Math.pow(1 + savingsGrowth/100, yearsToTravel);
      
      // Calculate returns on the growing amount
      futureValueSavings = growthAmount * Math.pow(1 + expectedReturnsSavings/100, yearsToTravel);
    }
    
    // Calculate required amount after considering savings
    const requiredAmount = Math.max(0, inflatedAmount - futureValueSavings);
    
    // Calculate monthly investment
    const monthlyRate = expectedReturns / (12 * 100);
    const totalMonths = yearsToTravel * 12;
    const annualRate = expectedReturns / 100;
    
    const monthlyInvestment = requiredAmount / 
      ((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate);
    
    return {
      inflatedAmount: Math.round(inflatedAmount),
      monthly: Math.round(monthlyInvestment),
      yearly: Math.round(monthlyInvestment * 12),
      oneTime: Math.round(requiredAmount / Math.pow(1 + annualRate, yearsToTravel)),
      futureValueSavings: Math.round(futureValueSavings)
    };
  };

  const results = calculateVacation();

  return (
    <div className="calculator-container pt-24">
      <div className="calculator-header text-center mb-8">
        <h1 className="text-2xl font-semibold text-[#113262] mb-2">Vacation Goal Planner</h1>
        <h2 className="text-lg text-gray-600">Become a Jetsetter with Overseas Vacation Goal Calculator</h2>
      </div>
      <div className="max-w-5xl mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Input Sections */}
          <div className="lg:col-span-2 space-y-8">
            {/* Basic Details Section */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Vacation Details</h2>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block font-medium text-sm mb-1.5">Travel Cost</label>
                  <input
                    type="number"
                    value={travelCost}
                    onChange={(e) => setTravelCost(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={50000}
                    max={5000000}
                    step={50000}
                    value={travelCost}
                    onChange={(e) => setTravelCost(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                </div>

                <div>
                  <label className="block font-medium text-sm mb-1.5">Years to Travel</label>
                  <input
                    type="number"
                    value={yearsToTravel}
                    onChange={(e) => setYearsToTravel(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={1}
                    max={10}
                    value={yearsToTravel}
                    onChange={(e) => setYearsToTravel(Number(e.target.value))}
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
                    max={travelCost}
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
          <div className="bg-[#113262] text-white rounded-lg h-[400px] sticky top-6">
            <div className="p-4 border-b border-white/20">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold">Vacation Fund Summary</h3>
                <button className="p-1 hover:bg-blue-700 rounded">
                  <Share size={18} />
                </button>
              </div>
            </div>

            <div className="p-4">
              <div className="mb-4">
                <div className="text-3xl font-bold mb-1">{formatCurrency(results.inflatedAmount)}</div>
                <div className="text-sm text-gray-300">Required Vacation Fund</div>
              </div>

              <div className="space-y-3">
                <h4 className="text-sm font-medium text-gray-300">Investment Options</h4>
                
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

export default OverseasVacationCalculator;