import React, { useState, useEffect } from 'react';
import { Share } from 'lucide-react';

const FIRECalculator = () => {
  const [values, setValues] = useState({
    currentAge: 30,
    targetRetirementAge: 45,
    currentSavings: 2000000,
    monthlyExpenses: 50000,
    monthlyIncome: 150000,
    expectedReturnRate: 12,
    inflationRate: 6,
    withdrawalRate: 4
  });

  const handleChange = (key, value) => {
    setValues(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const calculateFIRE = () => {
    const yearsToRetirement = values.targetRetirementAge - values.currentAge;
    const monthlyExpensesAtRetirement = values.monthlyExpenses * 
      Math.pow(1 + values.inflationRate / 100, yearsToRetirement);
    
    // Calculate required corpus using the 4% rule (or user-defined withdrawal rate)
    const annualExpensesAtRetirement = monthlyExpensesAtRetirement * 12;
    const requiredCorpus = (annualExpensesAtRetirement * 100) / values.withdrawalRate;
    
    // Calculate monthly savings needed
    const monthlySavings = values.monthlyIncome - values.monthlyExpenses;
    
    let currentBalance = values.currentSavings;
    let yearsSavedByHigherSavings = 0;

    // Calculate year by year progression
    for (let year = 0; year <= yearsToRetirement; year++) {
      const yearlyReturn = currentBalance * (values.expectedReturnRate / 100);
      const yearlySavings = monthlySavings * 12;
      currentBalance = currentBalance + yearlyReturn + yearlySavings;

      // Check if FIRE target is reached earlier
      if (currentBalance >= requiredCorpus && yearsSavedByHigherSavings === 0) {
        yearsSavedByHigherSavings = yearsToRetirement - year;
      }
    }

    const savingsRate = (monthlySavings / values.monthlyIncome) * 100;

    return {
      requiredCorpus,
      currentSavingsRate: savingsRate,
      yearlyExpensesAtRetirement: annualExpensesAtRetirement,
      yearlySavingsNeeded: monthlySavings * 12,
      finalBalance: currentBalance,
      yearsSavedByHigherSavings
    };
  };

  const [result, setResult] = useState(calculateFIRE());

  useEffect(() => {
    setResult(calculateFIRE());
  }, [values]);

  const formatCurrency = (amount) => {
    const numStr = Math.abs(amount).toFixed(0);
    const lastThree = numStr.substring(numStr.length - 3);
    const otherNums = numStr.substring(0, numStr.length - 3);
    const formatted = otherNums !== '' 
      ? otherNums.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + ',' + lastThree 
      : lastThree;
    return '₹' + (amount < 0 ? '-' : '') + formatted;
  };

  const InputField = ({ label, value, onChange, min, max, unit, step = 1, helpText }) => (
    <div className="mb-4">
      <label className="block font-semibold text-gray-800 mb-1 text-sm">{label}</label>
      {helpText && <p className="text-xs text-gray-600 mb-1">{helpText}</p>}
      <div className="flex gap-2">
        <input 
          type="number" 
          value={value} 
          onChange={e => {
            const val = parseFloat(e.target.value);
            if (!isNaN(val) && val >= min && val <= max) {
              onChange(val);
            }
          }}
          className="w-32 px-2 py-1 border rounded text-sm" 
        />
        <span className="text-sm text-gray-600">{unit}</span>
      </div>
      <div className="mt-2">
        <input 
          type="range" 
          min={min} 
          max={max} 
          step={step} 
          value={value}
          onChange={e => onChange(parseFloat(e.target.value))}
          className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer" 
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>{unit === 'years' || unit === '%' ? min : formatCurrency(min)}</span>
          <span>{unit === 'years' || unit === '%' ? max : formatCurrency(max)}</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      <div className="container mx-auto">
        <div className="mb-4 pt-36">
          <h1 className="text-2xl font-bold text-gray-900">FIRE Calculator</h1>
          <p className="text-sm text-gray-600 mt-1">Plan your early retirement with our FIRE calculator</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 space-y-3">
            <div className="grid grid-cols-2 gap-6">
              <InputField 
                label="Current Age" 
                value={values.currentAge}
                onChange={v => handleChange('currentAge', v)}
                min={18}
                max={60}
                unit="years"
                helpText="What is your current age?"
              />
              <InputField 
                label="Target FIRE Age" 
                value={values.targetRetirementAge}
                onChange={v => handleChange('targetRetirementAge', v)}
                min={35}
                max={65}
                unit="years"
                helpText="At what age do you want to achieve FIRE?"
              />
              <InputField 
                label="Current Savings" 
                value={values.currentSavings}
                onChange={v => handleChange('currentSavings', v)}
                min={0}
                max={50000000}
                unit="₹"
                step={100000}
                helpText="What are your current total savings?"
              />
              <InputField 
                label="Monthly Income" 
                value={values.monthlyIncome}
                onChange={v => handleChange('monthlyIncome', v)}
                min={30000}
                max={1000000}
                unit="₹"
                step={5000}
                helpText="What is your current monthly income?"
              />
              <InputField 
                label="Monthly Expenses" 
                value={values.monthlyExpenses}
                onChange={v => handleChange('monthlyExpenses', v)}
                min={10000}
                max={500000}
                unit="₹"
                step={5000}
                helpText="What are your current monthly expenses?"
              />
              <InputField 
                label="Expected Return Rate" 
                value={values.expectedReturnRate}
                onChange={v => handleChange('expectedReturnRate', v)}
                min={4}
                max={15}
                unit="%"
                step={0.5}
                helpText="Expected annual return on investments"
              />
              <InputField 
                label="Inflation Rate" 
                value={values.inflationRate}
                onChange={v => handleChange('inflationRate', v)}
                min={2}
                max={10}
                unit="%"
                step={0.5}
                helpText="Expected annual inflation rate"
              />
              <InputField 
                label="Withdrawal Rate" 
                value={values.withdrawalRate}
                onChange={v => handleChange('withdrawalRate', v)}
                min={2}
                max={6}
                unit="%"
                step={0.1}
                helpText="Annual withdrawal rate after retirement (4% is standard)"
              />
            </div>
          </div>

          <div className="bg-[#113262] text-white p-3 rounded-lg h-fit">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-base font-bold">FIRE Target Corpus</h3>
              <button className="p-1 hover:bg-[#1e3a8a] rounded">
                <Share size={16} />
              </button>
            </div>

            <div className="mb-3">
              <div className="text-2xl font-bold">{formatCurrency(result.requiredCorpus)}</div>
              <div className="text-xs text-gray-300">Required corpus for FIRE</div>
            </div>

            <div>
              <h4 className="text-xs font-medium text-gray-300 mb-1">Key Metrics</h4>
              
              <div>
                <div className="flex justify-between py-1 border-t border-white/20">
                  <span className="text-xs">Current Savings Rate</span>
                  <span className="font-medium text-sm">{result.currentSavingsRate.toFixed(1)}%</span>
                </div>
                
                <div className="flex justify-between py-1 border-t border-white/20">
                  <span className="text-xs">Yearly Expenses at FIRE</span>
                  <span className="font-medium text-sm">{formatCurrency(result.yearlyExpensesAtRetirement)}</span>
                </div>

                <div className="flex justify-between py-1 border-t border-white/20">
                  <span className="text-xs">Required Yearly Savings</span>
                  <span className="font-medium text-sm">{formatCurrency(result.yearlySavingsNeeded)}</span>
                </div>

                <div className="flex justify-between py-1 border-t border-white/20">
                  <span className="text-xs">Potential Years Saved</span>
                  <span className="font-medium text-sm">{result.yearsSavedByHigherSavings} years</span>
                </div>
              </div>
            </div>

            <button className="w-full bg-[#fb923c] text-white py-1.5 rounded-lg mt-3 text-sm hover:bg-[#f97316] transition-colors">
              Start Planning →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FIRECalculator;