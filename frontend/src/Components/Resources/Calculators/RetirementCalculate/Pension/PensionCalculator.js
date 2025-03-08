import React, { useState, useEffect } from 'react';
import { Share, ChevronDown } from 'lucide-react';

const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
};

const PensionCalculator = () => {
  // Basic inputs
  const [currentAge, setCurrentAge] = useState(35);
  const [retirementAge, setRetirementAge] = useState(60);
  const [currentSalary, setCurrentSalary] = useState(80000);
  const [currentPensionCorpus, setCurrentPensionCorpus] = useState(1500000);
  const [monthlyContribution, setMonthlyContribution] = useState(10000);
  const [lifeExpectancy, setLifeExpectancy] = useState(85);
  
  // Advanced settings
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [salaryGrowthRate, setSalaryGrowthRate] = useState(7);
  const [preRetirementReturns, setPreRetirementReturns] = useState(12);
  const [postRetirementReturns, setPostRetirementReturns] = useState(8);
  const [inflationRate, setInflationRate] = useState(6);
  const [withdrawalRate, setWithdrawalRate] = useState(4);
  const [showShareToast, setShowShareToast] = useState(false);

  // Results
  const [results, setResults] = useState({
    projectedPensionCorpus: 0,
    monthlyPension: 0,
    yearsFinanced: 0,
    incomeReplacementRatio: 0,
    totalContributions: 0,
    totalReturns: 0,
    shortfall: 0
  });

  const calculatePension = () => {
    // Calculate key variables
    const yearsToRetirement = retirementAge - currentAge;
    const yearsInRetirement = lifeExpectancy - retirementAge;
    let projectedCorpus = currentPensionCorpus;
    let totalContributions = currentPensionCorpus;
    let currentMonthlyContribution = monthlyContribution;
    
    // Calculate pension corpus at retirement
    for (let year = 1; year <= yearsToRetirement; year++) {
      // Adjust contribution with salary growth
      if (year > 1) {
        currentMonthlyContribution *= (1 + salaryGrowthRate / 100);
      }
      
      const annualContribution = currentMonthlyContribution * 12;
      const annualReturn = projectedCorpus * (preRetirementReturns / 100);
      
      projectedCorpus += annualContribution + annualReturn;
      totalContributions += annualContribution;
    }
    
    // Calculate total investment returns
    const totalReturns = projectedCorpus - totalContributions;
    
    // Calculate final salary at retirement
    const finalSalary = currentSalary * Math.pow(1 + salaryGrowthRate / 100, yearsToRetirement);
    
    // Calculate required corpus based on withdrawal rate
    const annualExpenseAtRetirement = finalSalary * 12;
    const requiredCorpus = (annualExpenseAtRetirement * 100) / withdrawalRate;
    
    // Calculate shortfall
    const shortfall = Math.max(0, requiredCorpus - projectedCorpus);
    
    // Calculate monthly pension amount (using post-retirement returns rate)
    // Using the 4% rule or specified withdrawal rate
    const monthlyPension = (projectedCorpus * (withdrawalRate / 100)) / 12;
    
    // Calculate income replacement ratio
    const incomeReplacementRatio = (monthlyPension / finalSalary) * 100;
    
    // Calculate how many years the corpus will last
    // If post-retirement returns > inflation, corpus can theoretically last indefinitely
    // Otherwise, calculate depletion
    let yearsFinanced = yearsInRetirement;
    
    if (postRetirementReturns < inflationRate) {
      let remainingCorpus = projectedCorpus;
      let currentPension = monthlyPension;
      
      for (let year = 1; year <= yearsInRetirement; year++) {
        // Adjust pension for inflation
        if (year > 1) {
          currentPension *= (1 + inflationRate / 100);
        }
        
        const annualWithdrawal = currentPension * 12;
        const annualReturn = remainingCorpus * (postRetirementReturns / 100);
        
        remainingCorpus = remainingCorpus - annualWithdrawal + annualReturn;
        
        if (remainingCorpus <= 0) {
          yearsFinanced = year;
          break;
        }
      }
    }
    
    return {
      projectedPensionCorpus: projectedCorpus,
      monthlyPension: monthlyPension,
      yearsFinanced: yearsFinanced,
      incomeReplacementRatio: incomeReplacementRatio,
      totalContributions: totalContributions,
      totalReturns: totalReturns,
      shortfall: shortfall
    };
  };

  useEffect(() => {
    const calculatedResults = calculatePension();
    setResults(calculatedResults);
  }, [
    currentAge,
    retirementAge,
    currentSalary,
    currentPensionCorpus,
    monthlyContribution,
    lifeExpectancy,
    salaryGrowthRate,
    preRetirementReturns,
    postRetirementReturns,
    inflationRate,
    withdrawalRate
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
        <h1 className="text-2xl font-semibold text-[#113262] mb-2">Pension Calculator</h1>
        <h2 className="text-lg text-gray-600">Plan your retirement income with our pension calculator</h2>
      </div>

      <div className="max-w-5xl mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Input Sections */}
          <div className="lg:col-span-2 space-y-8">
            {/* Age Details */}
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
                    max={59}
                    step={1}
                    value={currentAge}
                    onChange={(e) => setCurrentAge(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>20 years</span>
                    <span>59 years</span>
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
                    max={75}
                    step={1}
                    value={retirementAge}
                    onChange={(e) => setRetirementAge(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>45 years</span>
                    <span>75 years</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Financial Details */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Financial Details</h2>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block font-medium text-sm mb-1.5">Current Monthly Salary</label>
                  <input
                    type="number"
                    value={currentSalary}
                    onChange={(e) => setCurrentSalary(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={20000}
                    max={500000}
                    step={5000}
                    value={currentSalary}
                    onChange={(e) => setCurrentSalary(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>₹20K</span>
                    <span>₹5L</span>
                  </div>
                </div>

                <div>
                  <label className="block font-medium text-sm mb-1.5">Current Pension Corpus</label>
                  <input
                    type="number"
                    value={currentPensionCorpus}
                    onChange={(e) => setCurrentPensionCorpus(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={0}
                    max={10000000}
                    step={100000}
                    value={currentPensionCorpus}
                    onChange={(e) => setCurrentPensionCorpus(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>₹0</span>
                    <span>₹1Cr</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contribution Details */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Contribution & Lifespan</h2>
              <div className="grid grid-cols-2 gap-6">
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
                    step={1000}
                    value={monthlyContribution}
                    onChange={(e) => setMonthlyContribution(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>₹1K</span>
                    <span>₹1L</span>
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
                    min={65}
                    max={100}
                    step={1}
                    value={lifeExpectancy}
                    onChange={(e) => setLifeExpectancy(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>65 years</span>
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
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block font-medium text-sm mb-1.5">Salary Growth Rate (%)</label>
                      <input
                        type="number"
                        value={salaryGrowthRate}
                        onChange={(e) => setSalaryGrowthRate(Number(e.target.value))}
                        className="w-full p-1.5 border rounded text-sm"
                      />
                      <input
                        type="range"
                        min={0}
                        max={15}
                        step={0.5}
                        value={salaryGrowthRate}
                        onChange={(e) => setSalaryGrowthRate(Number(e.target.value))}
                        className="w-full mt-2"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>0%</span>
                        <span>15%</span>
                      </div>
                    </div>

                    <div>
                      <label className="block font-medium text-sm mb-1.5">Pre-Retirement Returns (%)</label>
                      <input
                        type="number"
                        value={preRetirementReturns}
                        onChange={(e) => setPreRetirementReturns(Number(e.target.value))}
                        className="w-full p-1.5 border rounded text-sm"
                      />
                      <input
                        type="range"
                        min={5}
                        max={15}
                        step={0.5}
                        value={preRetirementReturns}
                        onChange={(e) => setPreRetirementReturns(Number(e.target.value))}
                        className="w-full mt-2"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>5%</span>
                        <span>15%</span>
                      </div>
                    </div>

                    <div>
                      <label className="block font-medium text-sm mb-1.5">Post-Retirement Returns (%)</label>
                      <input
                        type="number"
                        value={postRetirementReturns}
                        onChange={(e) => setPostRetirementReturns(Number(e.target.value))}
                        className="w-full p-1.5 border rounded text-sm"
                      />
                      <input
                        type="range"
                        min={4}
                        max={12}
                        step={0.5}
                        value={postRetirementReturns}
                        onChange={(e) => setPostRetirementReturns(Number(e.target.value))}
                        className="w-full mt-2"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>4%</span>
                        <span>12%</span>
                      </div>
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
                        min={2}
                        max={10}
                        step={0.5}
                        value={inflationRate}
                        onChange={(e) => setInflationRate(Number(e.target.value))}
                        className="w-full mt-2"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>2%</span>
                        <span>10%</span>
                      </div>
                    </div>

                    <div>
                      <label className="block font-medium text-sm mb-1.5">Withdrawal Rate (%)</label>
                      <input
                        type="number"
                        value={withdrawalRate}
                        onChange={(e) => setWithdrawalRate(Number(e.target.value))}
                        className="w-full p-1.5 border rounded text-sm"
                      />
                      <input
                        type="range"
                        min={3}
                        max={7}
                        step={0.1}
                        value={withdrawalRate}
                        onChange={(e) => setWithdrawalRate(Number(e.target.value))}
                        className="w-full mt-2"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>3%</span>
                        <span>7%</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Results Section */}
          <div className="bg-[#113262] text-white rounded-lg h-[500px] sticky top-6">
            <div className="p-4 border-b border-white/20">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold">Pension Projections</h3>
                <button onClick={handleShare} className="p-1 hover:bg-blue-700 rounded">
                  <Share size={18} />
                </button>
              </div>
            </div>

            <div className="p-4 flex flex-col h-[calc(100%-68px)] justify-between">
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">
                    {formatCurrency(results.monthlyPension)}
                  </div>
                  <div className="text-sm text-gray-300">Monthly Pension at Retirement</div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-t border-white/20">
                    <span className="text-sm">Projected Corpus</span>
                    <span className="font-bold">{formatCurrency(results.projectedPensionCorpus)}</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-2 border-t border-white/20">
                    <span className="text-sm">Years Financed</span>
                    <span className="font-bold">{results.yearsFinanced} years</span>
                  </div>

                  <div className="flex justify-between items-center py-2 border-t border-white/20">
                    <span className="text-sm">Income Replacement</span>
                    <span className="font-bold">{results.incomeReplacementRatio.toFixed(1)}%</span>
                  </div>

                  <div className="flex justify-between items-center py-2 border-t border-white/20">
                    <span className="text-sm">Investment Returns</span>
                    <span className="font-bold">{formatCurrency(results.totalReturns)}</span>
                  </div>

                  {results.shortfall > 0 && (
                    <div className="flex justify-between items-center py-2 border-t border-white/20">
                      <span className="text-sm">Corpus Shortfall</span>
                      <span className="font-bold text-red-300">{formatCurrency(results.shortfall)}</span>
                    </div>
                  )}
                </div>
              </div>

              <button className="w-full bg-orange-400 text-white py-2 rounded-lg mt-4 hover:bg-orange-500 transition-colors text-sm">
                Get Expert Advice →
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

export default PensionCalculator;