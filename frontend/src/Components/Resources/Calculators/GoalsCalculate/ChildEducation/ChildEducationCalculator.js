import React, { useState } from 'react';
import { Share } from 'lucide-react';

const ChildEducationCalculator = () => {
  const [educationCost, setEducationCost] = useState(1000000);
  const [yearsToSchooling, setYearsToSchooling] = useState(3);
  const [expectedReturns, setExpectedReturns] = useState(12);
  const [expectedInflation, setExpectedInflation] = useState(6);
  const [showSavings, setShowSavings] = useState(false);
  const [currentSavings, setCurrentSavings] = useState(0);
  const [expectedReturnsSavings, setExpectedReturnsSavings] = useState(12);
  const [savingsGrowth, setSavingsGrowth] = useState(9);

  const calculateEducationFund = () => {
    // Calculate education cost adjusted for inflation
    // For 3 years and 6% inflation: 1000000 * (1 + 0.06)^3 = 1191016
    const inflatedEducationCost = educationCost * Math.pow((1 + expectedInflation/100), yearsToSchooling) * 10;
    
    // Calculate future value of current savings with both returns and growth
    let futureValueSavings = 0;
    if (showSavings && currentSavings > 0) {
      // First calculate growth in savings
      const futureValueWithGrowth = currentSavings * Math.pow(1 + savingsGrowth/100, yearsToSchooling);
      // Then calculate returns on the grown savings
      futureValueSavings = futureValueWithGrowth * Math.pow(1 + expectedReturnsSavings/100, yearsToSchooling);
    }
    
    // Calculate required amount after considering savings
    const requiredAmount = inflatedEducationCost - futureValueSavings;
    
    // Calculate investments needed
    const monthlyRate = expectedReturns / (12 * 100);
    const totalMonths = yearsToSchooling * 12;
    
    // Calculate monthly investment using PMT formula
    // PMT = FV * r / ((1 + r)^n - 1)
    // Where FV is future value, r is monthly rate, n is number of months
    const monthlyInvestment = (requiredAmount * monthlyRate) / 
      (Math.pow(1 + monthlyRate, totalMonths) - 1);
    
    // Calculate one-time investment
    const annualRate = expectedReturns / 100;
    const oneTimeInvestment = requiredAmount / Math.pow(1 + annualRate, yearsToSchooling);
    
    return {
      inflationAdjustedAmount: Math.round(inflatedEducationCost),
      monthly: Math.round(monthlyInvestment),
      yearly: Math.round(monthlyInvestment * 12),
      oneTime: Math.round(oneTimeInvestment)
    };
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      maximumFractionDigits: 0
    }).format(amount);
  };

  const results = calculateEducationFund();

  return (
    <div>
      <div className="mb-8 pt-36">
        <h1 className="text-3xl font-bold text-gray-900">Child Education Calculator</h1>
        <p className="text-gray-600 mt-2">Plan your child's education fund with our calculator.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column Inputs */}
        <div className="lg:col-span-2 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Education Cost Input */}
            <div>
              <div className="mb-2">
                <label className="block font-semibold text-gray-800">Education Cost Today</label>
                <p className="text-sm text-gray-600 mt-1">What is the current cost of education?</p>
              </div>
              <div className="relative mt-6">
                <div className="flex items-center gap-4 mb-2">
                  <input
                    type="number"
                    min={50000}
                    max={10000000}
                    value={educationCost}
                    onChange={(e) => {
                      const value = Number(e.target.value);
                      if (value >= 50000 && value <= 10000000) {
                        setEducationCost(value);
                      }
                    }}
                    className="w-32 px-2 py-1 border rounded"
                  />
                  <span className="text-sm text-gray-600">₹</span>
                </div>
                <input
                  type="range"
                  min={50000}
                  max={10000000}
                  step={50000}
                  value={educationCost}
                  onChange={(e) => setEducationCost(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-sm text-gray-600 mt-1">
                  <span>₹50K</span>
                  <span className="font-semibold">₹{formatCurrency(educationCost)}</span>
                  <span>₹1Cr</span>
                </div>
              </div>
            </div>

            {/* Years to Schooling Input */}
            <div>
              <div className="mb-2">
                <label className="block font-semibold text-gray-800">Years to Education</label>
                <p className="text-sm text-gray-600 mt-1">When do you plan to start your child's education?</p>
              </div>
              <div className="relative mt-6">
                <div className="flex items-center gap-4 mb-2">
                  <input
                    type="number"
                    min={1}
                    max={20}
                    value={yearsToSchooling}
                    onChange={(e) => {
                      const value = Number(e.target.value);
                      if (value >= 1 && value <= 20) {
                        setYearsToSchooling(value);
                      }
                    }}
                    className="w-20 px-2 py-1 border rounded"
                  />
                  <span className="text-sm text-gray-600">years</span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={20}
                  value={yearsToSchooling}
                  onChange={(e) => setYearsToSchooling(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-sm text-gray-600 mt-1">
                  <span>1 year</span>
                  <span className="font-semibold">{yearsToSchooling} years</span>
                  <span>20 years</span>
                </div>
              </div>
            </div>

            {/* Expected Returns Input */}
            <div>
              <div className="mb-2">
                <label className="block font-semibold text-gray-800">Expected Returns</label>
                <p className="text-sm text-gray-600 mt-1">Expected annual returns on your investments</p>
              </div>
              <div className="relative mt-6">
                <div className="flex items-center gap-4 mb-2">
                  <input
                    type="number"
                    min={1}
                    max={30}
                    value={expectedReturns}
                    onChange={(e) => {
                      const value = Number(e.target.value);
                      if (value >= 1 && value <= 30) {
                        setExpectedReturns(value);
                      }
                    }}
                    className="w-20 px-2 py-1 border rounded"
                  />
                  <span className="text-sm text-gray-600">%</span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={30}
                  value={expectedReturns}
                  onChange={(e) => setExpectedReturns(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-sm text-gray-600 mt-1">
                  <span>1%</span>
                  <span className="font-semibold">{expectedReturns}%</span>
                  <span>30%</span>
                </div>
              </div>
            </div>

            {/* Expected Inflation Input */}
            <div>
              <div className="mb-2">
                <label className="block font-semibold text-gray-800">Expected Inflation</label>
                <p className="text-sm text-gray-600 mt-1">Expected annual inflation rate</p>
              </div>
              <div className="relative mt-6">
                <div className="flex items-center gap-4 mb-2">
                  <input
                    type="number"
                    min={1}
                    max={20}
                    value={expectedInflation}
                    onChange={(e) => {
                      const value = Number(e.target.value);
                      if (value >= 1 && value <= 20) {
                        setExpectedInflation(value);
                      }
                    }}
                    className="w-20 px-2 py-1 border rounded"
                  />
                  <span className="text-sm text-gray-600">%</span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={20}
                  value={expectedInflation}
                  onChange={(e) => setExpectedInflation(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-sm text-gray-600 mt-1">
                  <span>1%</span>
                  <span className="font-semibold">{expectedInflation}%</span>
                  <span>20%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Current Savings Section */}
          <div className="border-t pt-6">
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                checked={showSavings}
                onChange={(e) => setShowSavings(e.target.checked)}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label className="ml-2 font-semibold text-gray-800">
                I have some savings for this goal
              </label>
            </div>

            {showSavings && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Current Savings Amount */}
                <div>
                  <div className="mb-2">
                    <label className="block font-semibold text-gray-800">Current Savings</label>
                    <p className="text-sm text-gray-600 mt-1">How much have you saved up?</p>
                  </div>
                  <div className="relative mt-6">
                    <div className="flex items-center gap-4 mb-2">
                      <input
                        type="number"
                        min={0}
                        max={educationCost}
                        value={currentSavings}
                        onChange={(e) => {
                          const value = Number(e.target.value);
                          if (value >= 0 && value <= educationCost) {
                            setCurrentSavings(value);
                          }
                        }}
                        className="w-32 px-2 py-1 border rounded"
                      />
                      <span className="text-sm text-gray-600">₹</span>
                    </div>
                    <input
                      type="range"
                      min={0}
                      max={educationCost}
                      step={10000}
                      value={currentSavings}
                      onChange={(e) => setCurrentSavings(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-sm text-gray-600 mt-1">
                      <span>₹0</span>
                      <span className="font-semibold">₹{formatCurrency(currentSavings)}</span>
                      <span>₹{formatCurrency(educationCost)}</span>
                    </div>
                  </div>
                </div>

                {/* Expected Returns on Savings */}
                <div>
                  <div className="mb-2">
                    <label className="block font-semibold text-gray-800">Expected Returns on Savings</label>
                    <p className="text-sm text-gray-600 mt-1">Expected annual returns on your current savings</p>
                  </div>
                  <div className="relative mt-6">
                    <div className="flex items-center gap-4 mb-2">
                      <input
                        type="number"
                        min={1}
                        max={30}
                        value={expectedReturnsSavings}
                        onChange={(e) => {
                          const value = Number(e.target.value);
                          if (value >= 1 && value <= 30) {
                            setExpectedReturnsSavings(value);
                          }
                        }}
                        className="w-20 px-2 py-1 border rounded"
                      />
                      <span className="text-sm text-gray-600">%</span>
                    </div>
                    <input
                      type="range"
                      min={1}
                      max={30}
                      value={expectedReturnsSavings}
                      onChange={(e) => setExpectedReturnsSavings(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-sm text-gray-600 mt-1">
                      <span>1%</span>
                      <span className="font-semibold">{expectedReturnsSavings}%</span>
                      <span>30%</span>
                    </div>
                  </div>
                </div>

                {/* Savings Growth */}
                <div>
                  <div className="mb-2">
                    <label className="block font-semibold text-gray-800">Savings Growth</label>
                    <p className="text-sm text-gray-600 mt-1">Expected growth in your savings every year</p>
                  </div>
                  <div className="relative mt-6">
                    <div className="flex items-center gap-4 mb-2">
                      <input
                        type="number"
                        min={0}
                        max={30}
                        value={savingsGrowth}
                        onChange={(e) => {
                          const value = Number(e.target.value);
                          if (value >= 0 && value <= 30) {
                            setSavingsGrowth(value);
                          }
                        }}
                        className="w-20 px-2 py-1 border rounded"
                      />
                      <span className="text-sm text-gray-600">%</span>
                    </div>
                    <input
                      type="range"
                      min={0}
                      max={30}
                      value={savingsGrowth}
                      onChange={(e) => setSavingsGrowth(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-sm text-gray-600 mt-1">
                      <span>0%</span>
                      <span className="font-semibold">{savingsGrowth}%</span>
                      <span>30%</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Column Results */}
        <div className="bg-[#113262] text-white p-6 rounded-lg">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold">Child Education</h3>
            <button className="p-2 hover:bg-[#1e3a8a] rounded">
              <Share size={20} />
            </button>
          </div>

          <div className="mb-8">
            <div className="text-4xl font-bold mb-2">₹{formatCurrency(results.inflationAdjustedAmount)}</div>
            <div className="text-gray-300">Required amount (inflation adjusted)</div>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium text-gray-300">New Investment Required<br/>(By frequency)</h4>
            
            <div className="flex justify-between py-2 border-t border-white/20">
              <span>Monthly</span>
              <span className="font-bold">₹{formatCurrency(results.monthly)}</span>
            </div>
            
            <div className="flex justify-between py-2 border-t border-white/20">
              <span>Yearly</span>
              <span className="font-bold">₹{formatCurrency(results.yearly)}</span>
            </div>
            
            <div className="flex justify-between py-2 border-t border-white/20">
              <span>One Time</span>
              <span className="font-bold">₹{formatCurrency(results.oneTime)}</span>
            </div>
          </div>

          <button className="w-full bg-[#fb923c] text-white py-3 rounded-lg mt-8 hover:bg-[#f97316] transition-colors">
            Get Started →
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChildEducationCalculator;
