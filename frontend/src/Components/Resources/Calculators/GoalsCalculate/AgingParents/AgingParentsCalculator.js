import React, { useState, useEffect } from 'react';
import { Share } from 'lucide-react';

const AgingParentsCalculator = () => {
  const [currentAge, setCurrentAge] = useState(50);
  const [plannedSupportAge, setPlannedSupportAge] = useState(60);
  const [monthlyExpenditure, setMonthlyExpenditure] = useState(100000);
  const [expectedInflation, setExpectedInflation] = useState(6);
  const [expectedReturns, setExpectedReturns] = useState(12);
  const [expectedReturnsCorpus, setExpectedReturnsCorpus] = useState(9);
  const [lifeExpectancy, setLifeExpectancy] = useState(85);
  const [showSavings, setShowSavings] = useState(false);
  const [currentSavings, setCurrentSavings] = useState(0);
  const [expectedReturnsSavings, setExpectedReturnsSavings] = useState(12);

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

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      maximumFractionDigits: 0
    }).format(amount);
  };

  const { corpus, monthlyExpenseAfterRetirement, inflationAdjustedAmount } = calculateCorpus();
  const investments = calculateInvestments(corpus);

  return (
    <div className="w-full bg-white py-12">
      <div className="max-w-6xl mx-auto px-6 pt-20">
        <h1 className="text-3xl font-bold text-gray-900">Aging Parents Calculator</h1>
        <p className="text-gray-600 mt-2">Calculate the investment required to secure your parents' future.</p>

        <div className="mt-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column Inputs */}
            <div className="lg:col-span-2 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Current Age */}
                <div>
                  <div className="mb-2">
                    <label className="block font-semibold text-gray-800">Current Age of Your Parent</label>
                    <p className="text-sm text-gray-600 mt-1">What is your parent's present age?</p>
                  </div>
                  <div className="relative mt-6">
                    <div className="flex items-center gap-4 mb-2">
                      <input
                        type="number"
                        min={40}
                        max={100}
                        value={currentAge}
                        onChange={(e) => {
                          const value = Number(e.target.value);
                          if (value >= 40 && value <= 100) {
                            setCurrentAge(value);
                          }
                        }}
                        className="w-20 px-2 py-1 border rounded"
                      />
                      <span className="text-sm text-gray-600">years</span>
                    </div>
                    <input
                      type="range"
                      min={40}
                      max={100}
                      step={1}
                      value={currentAge}
                      onChange={(e) => setCurrentAge(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-sm text-gray-600 mt-1">
                      <span>40 years</span>
                      <span className="font-semibold">{currentAge} years</span>
                      <span>100 years</span>
                    </div>
                  </div>
                </div>

                {/* Planned Support Age */}
                <div>
                  <div className="mb-2">
                    <label className="block font-semibold text-gray-800">Planned Support Age</label>
                    <p className="text-sm text-gray-600 mt-1">When do you wish to start supporting?</p>
                  </div>
                  <div className="relative mt-6">
                    <div className="flex items-center gap-4 mb-2">
                      <input
                        type="number"
                        min={50}
                        max={100}
                        value={plannedSupportAge}
                        onChange={(e) => {
                          const value = Number(e.target.value);
                          if (value >= 50 && value <= 100) {
                            setPlannedSupportAge(value);
                          }
                        }}
                        className="w-20 px-2 py-1 border rounded"
                      />
                      <span className="text-sm text-gray-600">years</span>
                    </div>
                    <input
                      type="range"
                      min={50}
                      max={100}
                      step={1}
                      value={plannedSupportAge}
                      onChange={(e) => setPlannedSupportAge(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-sm text-gray-600 mt-1">
                      <span>50 years</span>
                      <span className="font-semibold">{plannedSupportAge} years</span>
                      <span>100 years</span>
                    </div>
                  </div>
                </div>

                {/* Monthly Expenditure */}
                <div>
                  <div className="mb-2">
                    <label className="block font-semibold text-gray-800">Monthly Expenditure</label>
                    <p className="text-sm text-gray-600 mt-1">Monthly expenses to maintain lifestyle</p>
                  </div>
                  <div className="relative mt-6">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="text-sm text-gray-600">₹</span>
                      <input
                        type="number"
                        min={20000}
                        max={5000000}
                        value={monthlyExpenditure}
                        onChange={(e) => {
                          const value = Number(e.target.value);
                          if (value >= 20000 && value <= 5000000) {
                            setMonthlyExpenditure(value);
                          }
                        }}
                        className="w-32 px-2 py-1 border rounded"
                      />
                    </div>
                    <input
                      type="range"
                      min={20000}
                      max={5000000}
                      step={10000}
                      value={monthlyExpenditure}
                      onChange={(e) => setMonthlyExpenditure(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-sm text-gray-600 mt-1">
                      <span>₹20K</span>
                      <span className="font-semibold">₹{formatCurrency(monthlyExpenditure)}</span>
                      <span>₹5 Lac</span>
                    </div>
                  </div>
                </div>

                {/* Expected Inflation */}
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
                        value={expectedInflation}
                        onChange={(e) => {
                          const value = Number(e.target.value);
                          if (value >= 0 && value <= 20) {
                            setExpectedInflation(value);
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
                      step={1}
                      value={expectedInflation}
                      onChange={(e) => setExpectedInflation(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-sm text-gray-600 mt-1">
                      <span>0%</span>
                      <span className="font-semibold">{expectedInflation}%</span>
                      <span>20%</span>
                    </div>
                  </div>
                </div>

                {/* Expected Returns */}
                <div>
                  <div className="mb-2">
                    <label className="block font-semibold text-gray-800">Expected Returns</label>
                    <p className="text-sm text-gray-600 mt-1">Expected returns on investment</p>
                  </div>
                  <div className="relative mt-6">
                    <div className="flex items-center gap-4 mb-2">
                      <input
                        type="number"
                        min={5}
                        max={20}
                        value={expectedReturns}
                        onChange={(e) => {
                          const value = Number(e.target.value);
                          if (value >= 5 && value <= 20) {
                            setExpectedReturns(value);
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
                      step={1}
                      value={expectedReturns}
                      onChange={(e) => setExpectedReturns(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-sm text-gray-600 mt-1">
                      <span>5%</span>
                      <span className="font-semibold">{expectedReturns}%</span>
                      <span>20%</span>
                    </div>
                  </div>
                </div>

                {/* Expected Returns Corpus */}
                <div>
                  <div className="mb-2">
                    <label className="block font-semibold text-gray-800">Expected Returns on Corpus</label>
                    <p className="text-sm text-gray-600 mt-1">Expected returns on the corpus</p>
                  </div>
                  <div className="relative mt-6">
                    <div className="flex items-center gap-4 mb-2">
                      <input
                        type="number"
                        min={0}
                        max={20}
                        value={expectedReturnsCorpus}
                        onChange={(e) => {
                          const value = Number(e.target.value);
                          if (value >= 0 && value <= 20) {
                            setExpectedReturnsCorpus(value);
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
                      step={1}
                      value={expectedReturnsCorpus}
                      onChange={(e) => setExpectedReturnsCorpus(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-sm text-gray-600 mt-1">
                      <span>0%</span>
                      <span className="font-semibold">{expectedReturnsCorpus}%</span>
                      <span>20%</span>
                    </div>
                  </div>
                </div>

                {/* Life Expectancy */}
                <div>
                  <div className="mb-2">
                    <label className="block font-semibold text-gray-800">Life Expectancy</label>
                    <p className="text-sm text-gray-600 mt-1">Years your parents will live</p>
                  </div>
                  <div className="relative mt-6">
                    <div className="flex items-center gap-4 mb-2">
                      <input
                        type="number"
                        min={70}
                        max={100}
                        value={lifeExpectancy}
                        onChange={(e) => {
                          const value = Number(e.target.value);
                          if (value >= 70 && value <= 100) {
                            setLifeExpectancy(value);
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
                      step={1}
                      value={lifeExpectancy}
                      onChange={(e) => setLifeExpectancy(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-sm text-gray-600 mt-1">
                      <span>70 years</span>
                      <span className="font-semibold">{lifeExpectancy} years</span>
                      <span>100 years</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Savings Section */}
              <div className="mt-8">
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Current Savings */}
                    <div>
                      <div className="mb-2">
                        <label className="block font-semibold text-gray-800">Current Savings</label>
                        <p className="text-sm text-gray-600 mt-1">Your existing savings</p>
                      </div>
                      <div className="relative mt-6">
                        <div className="flex items-center gap-4 mb-2">
                          <span className="text-sm text-gray-600">₹</span>
                          <input
                            type="number"
                            min={0}
                            max={5000000}
                            value={currentSavings}
                            onChange={(e) => {
                              const value = Number(e.target.value);
                              if (value >= 0 && value <= 5000000) {
                                setCurrentSavings(value);
                              }
                            }}
                            className="w-32 px-2 py-1 border rounded"
                          />
                        </div>
                        <input
                          type="range"
                          min={0}
                          max={5000000}
                          step={10000}
                          value={currentSavings}
                          onChange={(e) => setCurrentSavings(Number(e.target.value))}
                          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                        />
                        <div className="flex justify-between text-sm text-gray-600 mt-1">
                          <span>₹0</span>
                          <span className="font-semibold">₹{currentSavings.toLocaleString()}</span>
                          <span>₹50L</span>
                        </div>
                      </div>
                    </div>

                    {/* Expected Returns on Savings */}
                    <div>
                      <div className="mb-2">
                        <label className="block font-semibold text-gray-800">Expected Returns on Savings</label>
                        <p className="text-sm text-gray-600 mt-1">Expected returns on current savings</p>
                      </div>
                      <div className="relative mt-6">
                        <div className="flex items-center gap-4 mb-2">
                          <input
                            type="number"
                            min={0}
                            max={20}
                            value={expectedReturnsSavings}
                            onChange={(e) => {
                              const value = Number(e.target.value);
                              if (value >= 0 && value <= 20) {
                                setExpectedReturnsSavings(value);
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
                          step={1}
                          value={expectedReturnsSavings}
                          onChange={(e) => setExpectedReturnsSavings(Number(e.target.value))}
                          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                        />
                        <div className="flex justify-between text-sm text-gray-600 mt-1">
                          <span>0%</span>
                          <span className="font-semibold">{expectedReturnsSavings}%</span>
                          <span>20%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Result Card */}
            <div className="lg:col-span-1">
              <div className="space-y-6">
                <div className="bg-[#113262] text-white p-6 rounded-lg">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg">AGING PARENTS CORPUS</span>
                    <Share className="w-5 h-5 cursor-pointer" />
                  </div>
                  
                  <div className="text-4xl font-bold mb-2">₹{formatCurrency(corpus)}</div>
                  <div className="text-sm mb-6">Required amount (inflation adjusted)</div>

                  <div className="space-y-2">
                    <div className="text-sm font-medium mb-2">New Investment Required</div>
                    <div className="text-sm text-gray-300 mb-1">(By frequency)</div>
                      
                    <div className="flex justify-between py-2 border-t border-white/20">
                      <span>Monthly</span>
                      <span>₹{formatCurrency(investments.monthly)}</span>
                    </div>
                    <div className="flex justify-between py-2 border-t border-white/20">
                      <span>Yearly</span>
                      <span>₹{formatCurrency(investments.yearly)}</span>
                    </div>
                    <div className="flex justify-between py-2 border-t border-white/20">
                      <span>One Time</span>
                      <span>₹{formatCurrency(investments.oneTime)}</span>
                    </div>
                    <div className="flex justify-between py-2 border-t border-white/20">
                      <span>Monthly Expense after retirement</span>
                      <span>₹{formatCurrency(monthlyExpenseAfterRetirement)}</span>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-[#F49611] hover:bg-[#F6A839] text-white font-semibold py-3 px-8 rounded-lg transition duration-300">
                  Get Started →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgingParentsCalculator;