import React, { useState, useEffect } from 'react';
import { Share2 } from 'lucide-react';

const RetirementCalculator = () => {
  const [formData, setFormData] = useState({
    currentAge: 30,
    retirementAge: 55,
    monthlyExpense: 100000,
    inflation: 6,
    expectedReturns: 12,
    retirementReturns: 9,
    lifeExpectancy: 85,
    hasSavings: false,
    currentSavings: 0,
    savingsReturns: 12
  });

  const [results, setResults] = useState({
    requiredCorpus: 0,
    monthlyInvestment: 0,
    yearlyInvestment: 0,
    oneTimeInvestment: 0,
    monthlyExpenseAtRetirement: 0
  });

  const calculateRetirementNeeds = () => {
    const yearsToRetirement = formData.retirementAge - formData.currentAge;
    const retirementDuration = formData.lifeExpectancy - formData.retirementAge;
    
    // Calculate monthly expense at retirement with compound inflation
    const monthlyExpenseAtRetirement = formData.monthlyExpense * 
      Math.pow(1 + formData.inflation / 100, yearsToRetirement);

    // Calculate total retirement corpus needed
    // Using a more conservative approach that accounts for post-retirement inflation
    const postRetirementInflationRate = formData.inflation / 100;
    const postRetirementReturnRate = formData.retirementReturns / 100;
    
    // Calculate the present value of retirement corpus needed
    let retirementCorpus = monthlyExpenseAtRetirement * 12 * 
      (1 - Math.pow(1 + postRetirementInflationRate - postRetirementReturnRate, retirementDuration)) /
      (postRetirementReturnRate - postRetirementInflationRate);

    // Add a safety margin of 10% to account for market fluctuations
    retirementCorpus *= 1.1;

    // Deduct future value of current savings if any
    if (formData.hasSavings && formData.currentSavings > 0) {
      const futureSavings = formData.currentSavings * 
        Math.pow(1 + formData.savingsReturns / 100, yearsToRetirement);
      retirementCorpus -= futureSavings;
    }

    // Calculate required monthly investment
    const monthlyReturnRate = formData.expectedReturns / 12 / 100;
    const monthsToRetirement = yearsToRetirement * 12;
    
    const requiredMonthlyInvestment = (retirementCorpus * monthlyReturnRate) / 
      (Math.pow(1 + monthlyReturnRate, monthsToRetirement) - 1);

    // Calculate yearly and one-time investments
    const yearlyInvestment = requiredMonthlyInvestment * 12;
    const oneTimeInvestment = retirementCorpus / 
      Math.pow(1 + formData.expectedReturns / 100, yearsToRetirement);

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
  }, [formData]);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8 pt-36">
        <h1 className="text-3xl font-bold text-gray-900">Retirement Calculator</h1>
        <p className="text-gray-600 mt-2">Plan your retirement fund with our calculator.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Inputs */}
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Current Age Input */}
            <div>
              <div className="mb-2">
                <label className="block font-semibold text-gray-800">Current Age</label>
                <p className="text-sm text-gray-600 mt-1">What is your present age?</p>
              </div>
              <div className="relative mt-6">
                <div className="flex items-center gap-4 mb-2">
                  <input
                    type="number"
                    min={20}
                    max={70}
                    value={formData.currentAge}
                    onChange={(e) => {
                      const value = Number(e.target.value);
                      if (value >= 20 && value <= 70) {
                        setFormData(prev => ({ ...prev, currentAge: value }));
                      }
                    }}
                    className="w-20 px-2 py-1 border rounded"
                  />
                  <span className="text-sm text-gray-600">years</span>
                </div>
                <input
                  type="range"
                  min={20}
                  max={70}
                  value={formData.currentAge}
                  onChange={(e) => setFormData(prev => ({ ...prev, currentAge: Number(e.target.value) }))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-sm text-gray-600 mt-1">
                  <span>20 years</span>
                  <span className="font-semibold">{formData.currentAge} years</span>
                  <span>70 years</span>
                </div>
              </div>
            </div>

            {/* Retirement Age Input */}
            <div>
              <div className="mb-2">
                <label className="block font-semibold text-gray-800">Planned Retirement Age</label>
                <p className="text-sm text-gray-600 mt-1">When do you wish to retire?</p>
              </div>
              <div className="relative mt-6">
                <div className="flex items-center gap-4 mb-2">
                  <input
                    type="number"
                    min={50}
                    max={70}
                    value={formData.retirementAge}
                    onChange={(e) => {
                      const value = Number(e.target.value);
                      if (value >= 50 && value <= 70) {
                        setFormData(prev => ({ ...prev, retirementAge: value }));
                      }
                    }}
                    className="w-20 px-2 py-1 border rounded"
                  />
                  <span className="text-sm text-gray-600">years</span>
                </div>
                <input
                  type="range"
                  min={50}
                  max={70}
                  value={formData.retirementAge}
                  onChange={(e) => setFormData(prev => ({ ...prev, retirementAge: Number(e.target.value) }))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-sm text-gray-600 mt-1">
                  <span>50 years</span>
                  <span className="font-semibold">{formData.retirementAge} years</span>
                  <span>70 years</span>
                </div>
              </div>
            </div>

            {/* Monthly Expenditure Input */}
            <div>
              <div className="mb-2">
                <label className="block font-semibold text-gray-800">Monthly Expenditure</label>
                <p className="text-sm text-gray-600 mt-1">Monthly expense to maintain your current lifestyle</p>
              </div>
              <div className="relative mt-6">
                <div className="flex items-center gap-4 mb-2">
                  <input
                    type="number"
                    min={20000}
                    max={500000}
                    value={formData.monthlyExpense}
                    onChange={(e) => {
                      const value = Number(e.target.value);
                      if (value >= 20000 && value <= 500000) {
                        setFormData(prev => ({ ...prev, monthlyExpense: value }));
                      }
                    }}
                    className="w-32 px-2 py-1 border rounded"
                  />
                  <span className="text-sm text-gray-600">₹</span>
                </div>
                <input
                  type="range"
                  min={20000}
                  max={500000}
                  step={5000}
                  value={formData.monthlyExpense}
                  onChange={(e) => setFormData(prev => ({ ...prev, monthlyExpense: Number(e.target.value) }))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-sm text-gray-600 mt-1">
                  <span>₹20K</span>
                  <span className="font-semibold">₹{formatCurrency(formData.monthlyExpense)}</span>
                  <span>₹5L</span>
                </div>
              </div>
            </div>

            {/* Expected Inflation Input */}
            <div>
              <div className="mb-2">
                <label className="block font-semibold text-gray-800">Expected Inflation</label>
                <p className="text-sm text-gray-600 mt-1">Your expectation on inflation</p>
              </div>
              <div className="relative mt-6">
                <div className="flex items-center gap-4 mb-2">
                  <input
                    type="number"
                    min={0}
                    max={20}
                    value={formData.inflation}
                    onChange={(e) => {
                      const value = Number(e.target.value);
                      if (value >= 0 && value <= 20) {
                        setFormData(prev => ({ ...prev, inflation: value }));
                      }
                    }}
                    className="w-20 px-2 py-1 border rounded"
                  />
                  <span className="text-sm text-gray-600">%</span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={20}
                  value={formData.inflation}
                  onChange={(e) => setFormData(prev => ({ ...prev, inflation: Number(e.target.value) }))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-sm text-gray-600 mt-1">
                  <span>0%</span>
                  <span className="font-semibold">{formData.inflation}%</span>
                  <span>20%</span>
                </div>
              </div>
            </div>

            {/* Expected Returns on Investment Input */}
            <div>
              <div className="mb-2">
                <label className="block font-semibold text-gray-800">Expected Returns On Investment</label>
                <p className="text-sm text-gray-600 mt-1">Your expectation of returns on this planned investment</p>
              </div>
              <div className="relative mt-6">
                <div className="flex items-center gap-4 mb-2">
                  <input
                    type="number"
                    min={5}
                    max={20}
                    value={formData.expectedReturns}
                    onChange={(e) => {
                      const value = Number(e.target.value);
                      if (value >= 5 && value <= 20) {
                        setFormData(prev => ({ ...prev, expectedReturns: value }));
                      }
                    }}
                    className="w-20 px-2 py-1 border rounded"
                  />
                  <span className="text-sm text-gray-600">%</span>
                </div>
                <input
                  type="range"
                  min={5}
                  max={20}
                  value={formData.expectedReturns}
                  onChange={(e) => setFormData(prev => ({ ...prev, expectedReturns: Number(e.target.value) }))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-sm text-gray-600 mt-1">
                  <span>5%</span>
                  <span className="font-semibold">{formData.expectedReturns}%</span>
                  <span>20%</span>
                </div>
              </div>
            </div>

            {/* Expected Returns on Retirement Corpus Input */}
            <div>
              <div className="mb-2">
                <label className="block font-semibold text-gray-800">Expected Returns on Retirement Corpus</label>
                <p className="text-sm text-gray-600 mt-1">Your expectation of returns on the retirement corpus</p>
              </div>
              <div className="relative mt-6">
                <div className="flex items-center gap-4 mb-2">
                  <input
                    type="number"
                    min={5}
                    max={20}
                    value={formData.retirementReturns}
                    onChange={(e) => {
                      const value = Number(e.target.value);
                      if (value >= 5 && value <= 20) {
                        setFormData(prev => ({ ...prev, retirementReturns: value }));
                      }
                    }}
                    className="w-20 px-2 py-1 border rounded"
                  />
                  <span className="text-sm text-gray-600">%</span>
                </div>
                <input
                  type="range"
                  min={5}
                  max={20}
                  value={formData.retirementReturns}
                  onChange={(e) => setFormData(prev => ({ ...prev, retirementReturns: Number(e.target.value) }))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-sm text-gray-600 mt-1">
                  <span>5%</span>
                  <span className="font-semibold">{formData.retirementReturns}%</span>
                  <span>20%</span>
                </div>
              </div>
            </div>

            {/* Life Expectancy Input */}
            <div>
              <div className="mb-2">
                <label className="block font-semibold text-gray-800">Life Expectancy</label>
                <p className="text-sm text-gray-600 mt-1">Years you will live</p>
              </div>
              <div className="relative mt-6">
                <div className="flex items-center gap-4 mb-2">
                  <input
                    type="number"
                    min={70}
                    max={100}
                    value={formData.lifeExpectancy}
                    onChange={(e) => {
                      const value = Number(e.target.value);
                      if (value >= 70 && value <= 100) {
                        setFormData(prev => ({ ...prev, lifeExpectancy: value }));
                      }
                    }}
                    className="w-20 px-2 py-1 border rounded"
                  />
                  <span className="text-sm text-gray-600">years</span>
                </div>
                <input
                  type="range"
                  min={70}
                  max={100}
                  value={formData.lifeExpectancy}
                  onChange={(e) => setFormData(prev => ({ ...prev, lifeExpectancy: Number(e.target.value) }))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-sm text-gray-600 mt-1">
                  <span>70 years</span>
                  <span className="font-semibold">{formData.lifeExpectancy} years</span>
                  <span>100 years</span>
                </div>
              </div>
            </div>
          </div>

          {/* Current Savings Section */}
          <div className="border-t pt-6">
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                checked={formData.hasSavings}
                onChange={(e) => setFormData(prev => ({ ...prev, hasSavings: e.target.checked }))}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label className="ml-2 font-semibold text-gray-800">
                I have some savings for retirement
              </label>
            </div>

            {formData.hasSavings && (
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
                        max={10000000}
                        value={formData.currentSavings}
                        onChange={(e) => {
                          const value = Number(e.target.value);
                          if (value >= 0 && value <= 10000000) {
                            setFormData(prev => ({ ...prev, currentSavings: value }));
                          }
                        }}
                        className="w-32 px-2 py-1 border rounded"
                      />
                      <span className="text-sm text-gray-600">₹</span>
                    </div>
                    <input
                      type="range"
                      min={0}
                      max={10000000}
                      step={100000}
                      value={formData.currentSavings}
                      onChange={(e) => setFormData(prev => ({ ...prev, currentSavings: Number(e.target.value) }))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-sm text-gray-600 mt-1">
                      <span>₹0</span>
                      <span className="font-semibold">₹{formatCurrency(formData.currentSavings)}</span>
                      <span>₹1Cr</span>
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
                        value={formData.savingsReturns}
                        onChange={(e) => {
                          const value = Number(e.target.value);
                          if (value >= 1 && value <= 30) {
                            setFormData(prev => ({ ...prev, savingsReturns: value }));
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
                      value={formData.savingsReturns}
                      onChange={(e) => setFormData(prev => ({ ...prev, savingsReturns: Number(e.target.value) }))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-sm text-gray-600 mt-1">
                      <span>1%</span>
                      <span className="font-semibold">{formData.savingsReturns}%</span>
                      <span>30%</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Column - Results */}
        <div className="bg-[#113262] text-white p-6 rounded-lg h-fit">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold">Retirement Plan</h3>
            <button className="p-2 hover:bg-[#1e3a8a] rounded">
              <Share2 size={20} />
            </button>
          </div>

          <div className="mb-8">
            <div className="text-4xl font-bold mb-2">₹{formatCurrency(results.requiredCorpus)}</div>
            <div className="text-gray-300">Required retirement corpus</div>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium text-gray-300">New Investment Required<br/>(By frequency)</h4>
            
            <div className="flex justify-between py-2 border-t border-white/20">
              <span>Monthly</span>
              <span className="font-bold">₹{formatCurrency(results.monthlyInvestment)}</span>
            </div>
            
            <div className="flex justify-between py-2 border-t border-white/20">
              <span>Yearly</span>
              <span className="font-bold">₹{formatCurrency(results.yearlyInvestment)}</span>
            </div>
            
            <div className="flex justify-between py-2 border-t border-white/20">
              <span>One Time</span>
              <span className="font-bold">₹{formatCurrency(results.oneTimeInvestment)}</span>
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

export default RetirementCalculator;