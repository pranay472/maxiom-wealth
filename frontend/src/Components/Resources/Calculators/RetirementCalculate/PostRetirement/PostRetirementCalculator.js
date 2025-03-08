import React, { useState, useEffect } from 'react';
import { Share, ChevronDown } from 'lucide-react';

const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
};

const PostRetirementCalculator = () => {
  // Basic inputs
  const [currentAge, setCurrentAge] = useState(50);
  const [retirementAge, setRetirementAge] = useState(60);
  const [lifeExpectancy, setLifeExpectancy] = useState(85);
  const [currentMonthlyExpenses, setCurrentMonthlyExpenses] = useState(70000);
  
  // Expense categories
  const [basicLiving, setBasicLiving] = useState(40); // Percentage of total expenses
  const [healthcare, setHealthcare] = useState(15);
  const [leisure, setLeisure] = useState(20);
  const [housing, setHousing] = useState(15);
  const [miscellaneous, setMiscellaneous] = useState(10);
  
  // Advanced settings
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [inflationRate, setInflationRate] = useState(6);
  const [healthcareInflationRate, setHealthcareInflationRate] = useState(8);
  const [showShareToast, setShowShareToast] = useState(false);
  const [expenseReductionRate, setExpenseReductionRate] = useState(10);
  const [showExpensePhases, setShowExpensePhases] = useState(true);
  
  // Results
  const [results, setResults] = useState({
    monthlyExpensesAtRetirement: 0,
    annualExpensesAtRetirement: 0,
    totalExpensesLifetime: 0,
    expenseBreakdown: {
      basicLiving: 0,
      healthcare: 0,
      leisure: 0,
      housing: 0,
      miscellaneous: 0
    },
    expensePhases: {
      activePhase: { years: 0, monthlyExpense: 0, totalExpense: 0 },
      passivePhase: { years: 0, monthlyExpense: 0, totalExpense: 0 },
      assistedPhase: { years: 0, monthlyExpense: 0, totalExpense: 0 }
    }
  });

  const calculatePostRetirementExpenses = () => {
    const yearsToRetirement = retirementAge - currentAge;
    const yearsInRetirement = lifeExpectancy - retirementAge;
    
    // Calculate monthly expenses at retirement
    const monthlyExpensesAtRetirement = currentMonthlyExpenses * 
      Math.pow((1 + inflationRate / 100), yearsToRetirement);
    
    // Calculate annual expenses at retirement
    const annualExpensesAtRetirement = monthlyExpensesAtRetirement * 12;
    
    // Calculate expense breakdown
    const expenseBreakdown = {
      basicLiving: (monthlyExpensesAtRetirement * basicLiving / 100),
      healthcare: (monthlyExpensesAtRetirement * healthcare / 100),
      leisure: (monthlyExpensesAtRetirement * leisure / 100),
      housing: (monthlyExpensesAtRetirement * housing / 100),
      miscellaneous: (monthlyExpensesAtRetirement * miscellaneous / 100)
    };
    
    // Calculate expense phases if enabled
    let totalExpensesLifetime = 0;
    let expensePhases = {
      activePhase: { years: 0, monthlyExpense: 0, totalExpense: 0 },
      passivePhase: { years: 0, monthlyExpense: 0, totalExpense: 0 },
      assistedPhase: { years: 0, monthlyExpense: 0, totalExpense: 0 }
    };
    
    if (showExpensePhases) {
      // Define phases
      const activeYears = Math.min(15, yearsInRetirement);
      const passiveYears = Math.min(10, yearsInRetirement - activeYears);
      const assistedYears = yearsInRetirement - activeYears - passiveYears;
      
      // Active phase (first ~15 years after retirement)
      const activeMonthlyExpense = monthlyExpensesAtRetirement;
      let activeTotalExpense = 0;
      
      for (let year = 0; year < activeYears; year++) {
        const yearlyExpense = activeMonthlyExpense * 
          Math.pow((1 + inflationRate / 100), year) * 12;
        activeTotalExpense += yearlyExpense;
      }
      
      // Passive phase (next ~10 years) - reduced expenses except healthcare
      const passiveReduction = 1 - (expenseReductionRate / 100);
      const passiveMonthlyExpense = (
        expenseBreakdown.basicLiving * passiveReduction +
        expenseBreakdown.leisure * passiveReduction * 0.7 +
        expenseBreakdown.housing * passiveReduction +
        expenseBreakdown.miscellaneous * passiveReduction +
        expenseBreakdown.healthcare * 1.2 // 20% increase in healthcare
      );
      
      let passiveTotalExpense = 0;
      
      for (let year = 0; year < passiveYears; year++) {
        const yearlyExpense = passiveMonthlyExpense * 
          Math.pow((1 + inflationRate / 100), activeYears + year) * 12;
        passiveTotalExpense += yearlyExpense;
      }
      
      // Assisted phase (remaining years) - reduced leisure but increased healthcare
      const assistedMonthlyExpense = (
        expenseBreakdown.basicLiving * passiveReduction +
        expenseBreakdown.leisure * passiveReduction * 0.3 +
        expenseBreakdown.housing * passiveReduction * 0.8 +
        expenseBreakdown.miscellaneous * passiveReduction * 0.8 +
        expenseBreakdown.healthcare * 2 // Double healthcare costs
      );
      
      let assistedTotalExpense = 0;
      
      for (let year = 0; year < assistedYears; year++) {
        const yearlyExpense = assistedMonthlyExpense * 
          Math.pow((1 + inflationRate / 100), activeYears + passiveYears + year) * 12;
        assistedTotalExpense += yearlyExpense;
      }
      
      expensePhases = {
        activePhase: { 
          years: activeYears, 
          monthlyExpense: activeMonthlyExpense, 
          totalExpense: activeTotalExpense 
        },
        passivePhase: { 
          years: passiveYears, 
          monthlyExpense: passiveMonthlyExpense, 
          totalExpense: passiveTotalExpense 
        },
        assistedPhase: { 
          years: assistedYears, 
          monthlyExpense: assistedMonthlyExpense, 
          totalExpense: assistedTotalExpense 
        }
      };
      
      totalExpensesLifetime = activeTotalExpense + passiveTotalExpense + assistedTotalExpense;
    } else {
      // Simple calculation without phases
      for (let year = 0; year < yearsInRetirement; year++) {
        const yearlyExpense = monthlyExpensesAtRetirement * 
          Math.pow((1 + inflationRate / 100), year) * 12;
        totalExpensesLifetime += yearlyExpense;
      }
    }
    
    return {
      monthlyExpensesAtRetirement,
      annualExpensesAtRetirement,
      totalExpensesLifetime,
      expenseBreakdown,
      expensePhases
    };
  };

  useEffect(() => {
    const calculatedResults = calculatePostRetirementExpenses();
    setResults(calculatedResults);
  }, [
    currentAge,
    retirementAge,
    lifeExpectancy,
    currentMonthlyExpenses,
    basicLiving,
    healthcare,
    leisure,
    housing,
    miscellaneous,
    inflationRate,
    healthcareInflationRate,
    expenseReductionRate,
    showExpensePhases
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

  // Ensure expense category percentages sum to 100%
  const updateExpenseCategory = (category, value) => {
    // Convert all percentages to numbers
    const currentPercentages = {
      basicLiving,
      healthcare,
      leisure,
      housing,
      miscellaneous
    };
    
    // Update the specified category
    currentPercentages[category] = value;
    
    // Calculate the total excluding the category being updated
    const totalOthers = Object.entries(currentPercentages)
      .filter(([key]) => key !== category)
      .reduce((sum, [_, val]) => sum + val, 0);
    
    // Validate if the new total would exceed 100
    if (value + totalOthers > 100) {
      // Reduce other categories proportionally
      const reduction = (value + totalOthers - 100) / totalOthers;
      
      Object.entries(currentPercentages).forEach(([key, val]) => {
        if (key !== category) {
          currentPercentages[key] = Math.max(0, Math.round(val * (1 - reduction)));
        }
      });
    }
    
    // Update state with new values
    setBasicLiving(currentPercentages.basicLiving);
    setHealthcare(currentPercentages.healthcare);
    setLeisure(currentPercentages.leisure);
    setHousing(currentPercentages.housing);
    setMiscellaneous(currentPercentages.miscellaneous);
  };

  return (
    <div className="calculator-container pt-24">
      <div className="calculator-header text-center mb-8">
        <h1 className="text-2xl font-semibold text-[#113262] mb-2">Post-Retirement Expenses Calculator</h1>
        <h2 className="text-lg text-gray-600">Estimate your expenses after retirement</h2>
      </div>

      <div className="max-w-5xl mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Input Sections */}
          <div className="lg:col-span-2 space-y-8">
            {/* Age Details */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Age Details</h2>
              <div className="grid grid-cols-3 gap-6">
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
                    min={30}
                    max={70}
                    step={1}
                    value={currentAge}
                    onChange={(e) => setCurrentAge(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>30 yrs</span>
                    <span>70 yrs</span>
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
                    <span>45 yrs</span>
                    <span>75 yrs</span>
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
                    step={1}
                    value={lifeExpectancy}
                    onChange={(e) => setLifeExpectancy(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>70 yrs</span>
                    <span>100 yrs</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Current Expenses */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Current Expenses</h2>
              <div>
                <label className="block font-medium text-sm mb-1.5">Monthly Expenses</label>
                <input
                  type="number"
                  value={currentMonthlyExpenses}
                  onChange={(e) => setCurrentMonthlyExpenses(Number(e.target.value))}
                  className="w-full p-1.5 border rounded text-sm"
                />
                <input
                  type="range"
                  min={20000}
                  max={500000}
                  step={5000}
                  value={currentMonthlyExpenses}
                  onChange={(e) => setCurrentMonthlyExpenses(Number(e.target.value))}
                  className="w-full mt-2"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>₹20K</span>
                  <span>₹5L</span>
                </div>
              </div>
            </div>

            {/* Expense Breakdown */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Expense Categories</h2>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <label className="block font-medium text-sm">Basic Living</label>
                    <span className="text-sm">{basicLiving}%</span>
                  </div>
                  <input
                    type="range"
                    min={10}
                    max={60}
                    step={1}
                    value={basicLiving}
                    onChange={(e) => updateExpenseCategory('basicLiving', Number(e.target.value))}
                    className="w-full"
                  />
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <label className="block font-medium text-sm">Healthcare</label>
                    <span className="text-sm">{healthcare}%</span>
                  </div>
                  <input
                    type="range"
                    min={5}
                    max={40}
                    step={1}
                    value={healthcare}
                    onChange={(e) => updateExpenseCategory('healthcare', Number(e.target.value))}
                    className="w-full"
                  />
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <label className="block font-medium text-sm">Leisure & Travel</label>
                    <span className="text-sm">{leisure}%</span>
                  </div>
                  <input
                    type="range"
                    min={5}
                    max={40}
                    step={1}
                    value={leisure}
                    onChange={(e) => updateExpenseCategory('leisure', Number(e.target.value))}
                    className="w-full"
                  />
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <label className="block font-medium text-sm">Housing & Utilities</label>
                    <span className="text-sm">{housing}%</span>
                  </div>
                  <input
                    type="range"
                    min={5}
                    max={40}
                    step={1}
                    value={housing}
                    onChange={(e) => updateExpenseCategory('housing', Number(e.target.value))}
                    className="w-full"
                  />
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <label className="block font-medium text-sm">Miscellaneous</label>
                    <span className="text-sm">{miscellaneous}%</span>
                  </div>
                  <input
                    type="range"
                    min={5}
                    max={30}
                    step={1}
                    value={miscellaneous}
                    onChange={(e) => updateExpenseCategory('miscellaneous', Number(e.target.value))}
                    className="w-full"
                  />
                </div>
                
                <div className="pt-2 border-t">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-sm">Total</span>
                    <span className="font-medium text-sm">{basicLiving + healthcare + leisure + housing + miscellaneous}%</span>
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
                        max={12}
                        step={0.5}
                        value={inflationRate}
                        onChange={(e) => setInflationRate(Number(e.target.value))}
                        className="w-full mt-2"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>2%</span>
                        <span>12%</span>
                      </div>
                    </div>

                    <div>
                      <label className="block font-medium text-sm mb-1.5">Healthcare Inflation (%)</label>
                      <input
                        type="number"
                        value={healthcareInflationRate}
                        onChange={(e) => setHealthcareInflationRate(Number(e.target.value))}
                        className="w-full p-1.5 border rounded text-sm"
                      />
                      <input
                        type="range"
                        min={4}
                        max={15}
                        step={0.5}
                        value={healthcareInflationRate}
                        onChange={(e) => setHealthcareInflationRate(Number(e.target.value))}
                        className="w-full mt-2"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>4%</span>
                        <span>15%</span>
                      </div>
                    </div>

                    <div>
                      <label className="block font-medium text-sm mb-1.5">Expense Reduction in Later Years (%)</label>
                      <input
                        type="number"
                        value={expenseReductionRate}
                        onChange={(e) => setExpenseReductionRate(Number(e.target.value))}
                        className="w-full p-1.5 border rounded text-sm"
                      />
                      <input
                        type="range"
                        min={0}
                        max={30}
                        step={1}
                        value={expenseReductionRate}
                        onChange={(e) => setExpenseReductionRate(Number(e.target.value))}
                        className="w-full mt-2"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>0%</span>
                        <span>30%</span>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="showExpensePhases"
                        checked={showExpensePhases}
                        onChange={(e) => setShowExpensePhases(e.target.checked)}
                        className="w-4 h-4"
                      />
                      <label htmlFor="showExpensePhases" className="ml-2 text-sm font-medium">
                        Use retirement expense phases model
                      </label>
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
                <h3 className="text-xl font-bold">Expense Projections</h3>
                <button onClick={handleShare} className="p-1 hover:bg-blue-700 rounded">
                  <Share size={18} />
                </button>
              </div>
            </div>

            <div className="p-4 flex flex-col h-[calc(100%-68px)] justify-between">
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">
                    {formatCurrency(results.monthlyExpensesAtRetirement)}
                  </div>
                  <div className="text-sm text-gray-300">Monthly Expenses at Retirement</div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-t border-white/20">
                    <span className="text-sm">Annual Expenses</span>
                    <span className="font-bold">{formatCurrency(results.annualExpensesAtRetirement)}</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-2 border-t border-white/20">
                    <span className="text-sm">Total Lifetime Expenses</span>
                    <span className="font-bold">{formatCurrency(results.totalExpensesLifetime)}</span>
                  </div>

                  {showExpensePhases && (
                    <>
                      <div className="flex justify-between items-center py-2 border-t border-white/20">
                        <span className="text-sm">Active Phase (Years {retirementAge}-{retirementAge + results.expensePhases.activePhase.years})</span>
                        <span className="font-bold">{formatCurrency(results.expensePhases.activePhase.monthlyExpense)}/mo</span>
                      </div>
                      
                      <div className="flex justify-between items-center py-2 border-t border-white/20">
                        <span className="text-sm">Passive Phase (Years {retirementAge + results.expensePhases.activePhase.years}-{retirementAge + results.expensePhases.activePhase.years + results.expensePhases.passivePhase.years})</span>
                        <span className="font-bold">{formatCurrency(results.expensePhases.passivePhase.monthlyExpense)}/mo</span>
                      </div>
                      
                      <div className="flex justify-between items-center py-2 border-t border-white/20">
                        <span className="text-sm">Assisted Phase (Remaining Years)</span>
                        <span className="font-bold">{formatCurrency(results.expensePhases.assistedPhase.monthlyExpense)}/mo</span>
                      </div>
                    </>
                  )}
                </div>
              </div>

              <button className="w-full bg-orange-400 text-white py-2 rounded-lg mt-4 hover:bg-orange-500 transition-colors text-sm">
                Create Retirement Plan →
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

export default PostRetirementCalculator;