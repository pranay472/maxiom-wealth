import React, { useState } from 'react';
import { Share, ChevronDown } from 'lucide-react';

const ChildEducationCalculator = () => {
  // Input Variables section
  const [educationCost, setEducationCost] = useState(1000000);
  const [yearsToEducation, setYearsToEducation] = useState(3);
  const [currentSavings, setCurrentSavings] = useState(0);

  // Expectations section
  const [expectedReturns, setExpectedReturns] = useState(12);
  const [expectedReturnsSavings, setExpectedReturnsSavings] = useState(12);
  
  // Assumptions section
  const [expectedInflation, setExpectedInflation] = useState(6);
  const [savingsGrowth, setSavingsGrowth] = useState(9);
  const [showAssumptions, setShowAssumptions] = useState(false);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const calculateEducationFund = () => {
    const inflatedEducationCost = educationCost * Math.pow((1 + expectedInflation/100), yearsToEducation);
    const monthlyRate = expectedReturns / (12 * 100);
    const totalMonths = yearsToEducation * 12;
    
    let requiredAmount = inflatedEducationCost;
    
    if (currentSavings > 0) {
      const futureValueWithGrowth = currentSavings * Math.pow(1 + savingsGrowth/100, yearsToEducation);
      const futureValueSavings = futureValueWithGrowth * Math.pow(1 + expectedReturnsSavings/100, yearsToEducation);
      requiredAmount -= futureValueSavings;
    }
    
    const monthlyInvestment = (requiredAmount * monthlyRate) / (Math.pow(1 + monthlyRate, totalMonths) - 1);
    const oneTimeInvestment = requiredAmount / Math.pow(1 + expectedReturns/100, yearsToEducation);
    
    return {
      futureValue: Math.round(requiredAmount),
      monthly: Math.round(monthlyInvestment),
      oneTime: Math.round(oneTimeInvestment)
    };
  };

  const results = calculateEducationFund();

  return (
    <div className="calculator-container pt-16">
      <div className="calculator-header text-center mb-8">
        <h1 className="text-2xl font-semibold text-[#113262] mb-2">Child Education Planner</h1>
        <h2 className="text-lg text-gray-600">Fund Your Studies with Child Education Calculator</h2>
      </div>
      <div className="max-w-5xl mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Input Sections */}
          <div className="lg:col-span-2 space-y-8">
            {/* Basic Details Section */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Basic Details</h2>
              <div className="grid grid-cols-2 gap-6">
                {/* Education Cost Input */}
                <div>
                  <label className="block font-medium text-sm mb-1.5">Current Education Cost</label>
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      value={educationCost}
                      onChange={(e) => setEducationCost(Number(e.target.value))}
                      className="w-full p-1.5 border rounded text-sm"
                    />
                  </div>
                  <input
                    type="range"
                    min={100000}
                    max={10000000}
                    value={educationCost}
                    onChange={(e) => setEducationCost(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                </div>

                {/* Years to Education */}
                <div>
                  <label className="block font-semibold mb-2">Years to Education</label>
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      value={yearsToEducation}
                      onChange={(e) => setYearsToEducation(Number(e.target.value))}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <input
                    type="range"
                    min={1}
                    max={20}
                    value={yearsToEducation}
                    onChange={(e) => setYearsToEducation(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                </div>

                {/* Current Savings */}
                <div>
                  <label className="block font-semibold mb-2">Current Savings</label>
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      value={currentSavings}
                      onChange={(e) => setCurrentSavings(Number(e.target.value))}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={educationCost}
                    value={currentSavings}
                    onChange={(e) => setCurrentSavings(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                </div>
              </div>
            </div>

            {/* Investment Details Section */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Investment Details</h2>
              <div className="grid grid-cols-2 gap-6">
                {/* Expected Returns */}
                <div>
                  <label className="block font-semibold mb-2">Expected Returns (%)</label>
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      value={expectedReturns}
                      onChange={(e) => setExpectedReturns(Number(e.target.value))}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <input
                    type="range"
                    min={1}
                    max={30}
                    value={expectedReturns}
                    onChange={(e) => setExpectedReturns(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                </div>

                {/* Expected Returns on Savings */}
                <div>
                  <label className="block font-semibold mb-2">Expected Returns on Savings (%)</label>
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      value={expectedReturnsSavings}
                      onChange={(e) => setExpectedReturnsSavings(Number(e.target.value))}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <input
                    type="range"
                    min={1}
                    max={30}
                    value={expectedReturnsSavings}
                    onChange={(e) => setExpectedReturnsSavings(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                </div>
              </div>
            </div>

            {/* Advanced Settings Section */}
            <div className="bg-white rounded-lg shadow">
              <button
                onClick={() => setShowAssumptions(!showAssumptions)}
                className="w-full p-4 flex justify-between items-center hover:bg-gray-50"
              >
                <h2 className="text-lg font-bold text-gray-900">Advanced Settings</h2>
                <ChevronDown 
                  className={`transform transition-transform ${showAssumptions ? 'rotate-180' : ''}`} 
                  size={20}
                />
              </button>
              
              {showAssumptions && (
                <div className="p-4 border-t">
                  <div className="grid grid-cols-2 gap-6">
                    {/* Expected Inflation */}
                    <div>
                      <label className="block font-semibold mb-2">Expected Inflation (%)</label>
                      <div className="flex items-center gap-2">
                        <input
                          type="number"
                          value={expectedInflation}
                          onChange={(e) => setExpectedInflation(Number(e.target.value))}
                          className="w-full p-2 border rounded"
                        />
                      </div>
                      <input
                        type="range"
                        min={1}
                        max={20}
                        value={expectedInflation}
                        onChange={(e) => setExpectedInflation(Number(e.target.value))}
                        className="w-full mt-2"
                      />
                    </div>

                    {/* Savings Growth */}
                    <div>
                      <label className="block font-semibold mb-2">Savings Growth (%)</label>
                      <div className="flex items-center gap-2">
                        <input
                          type="number"
                          value={savingsGrowth}
                          onChange={(e) => setSavingsGrowth(Number(e.target.value))}
                          className="w-full p-2 border rounded"
                        />
                      </div>
                      <input
                        type="range"
                        min={0}
                        max={30}
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
          <div className="bg-[#113262] text-white rounded-lg h-[360px] sticky top-6">
            <div className="p-4 border-b border-white/20">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold">Education Fund Summary</h3>
                <button className="p-1 hover:bg-blue-700 rounded">
                  <Share size={18} />
                </button>
              </div>
            </div>

            <div className="p-4">
              <div className="mb-4">
                <div className="text-3xl font-bold mb-1">{formatCurrency(results.futureValue)}</div>
                <div className="text-sm text-gray-300">Total Education Fund Required</div>
              </div>

              <div className="space-y-3">
                <h4 className="text-sm font-medium text-gray-300">Investment Options</h4>
                
                <div className="flex justify-between items-center py-2 border-t border-white/20">
                  <span className="text-sm">Monthly Investment</span>
                  <span className="font-bold">{formatCurrency(results.monthly)}</span>
                </div>
                
                <div className="flex justify-between items-center py-2 border-t border-white/20">
                  <span className="text-sm">Lump Sum Investment</span>
                  <span className="font-bold">{formatCurrency(results.oneTime)}</span>
                </div>
              </div>

              <button className="w-full bg-orange-400 text-white py-2 rounded-lg mt-4 hover:bg-orange-500 transition-colors text-sm">
                Start Education Planning →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChildEducationCalculator;