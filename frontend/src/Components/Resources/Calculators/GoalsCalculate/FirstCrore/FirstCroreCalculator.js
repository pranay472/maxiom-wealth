import React, { useState, useEffect } from 'react';
import { Share } from 'lucide-react';

const FirstCroreCalculator = () => {
  const [values, setValues] = useState({
    targetAmount: 10000000,
    yearsToAchieve: 3,
    expectedReturns: 12,
    expectedInflation: 6,
    showSavings: false,
    currentSavings: 0,
    expectedReturnsSavings: 12,
    savingsGrowth: 9
  });

  const handleChange = (key, value) => {
    setValues(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const calculateCroreFund = () => {
    const { targetAmount, yearsToAchieve, expectedReturns, expectedInflation, 
            showSavings, currentSavings, expectedReturnsSavings, savingsGrowth } = values;
            
    // Calculate inflation adjusted target amount
    const inflatedAmount = targetAmount * Math.pow((1 + expectedInflation/100), yearsToAchieve);
    
    // Calculate future value of current savings if any
    let futureValueSavings = 0;
    if (showSavings && currentSavings > 0) {
      // First calculate future value with savings growth
      const growthAmount = currentSavings * Math.pow(1 + savingsGrowth/100, yearsToAchieve);
      
      // Then calculate returns on the growing amount
      futureValueSavings = growthAmount * Math.pow(1 + expectedReturnsSavings/100, yearsToAchieve);
    }
    
    // Calculate required amount after considering savings
    const requiredAmount = Math.max(0, inflatedAmount - futureValueSavings);
    
    // Calculate monthly investment
    const monthlyRate = expectedReturns / (12 * 100);
    const totalMonths = yearsToAchieve * 12;
    const annualRate = expectedReturns / 100;
    
    // PMT = FV / (((1 + r)^n - 1) / r)
    const monthlyInvestment = requiredAmount / 
      ((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate);
    
    const result = {
      inflationAdjustedAmount: Math.round(inflatedAmount),
      monthly: Math.round(monthlyInvestment),
      yearly: Math.round(monthlyInvestment * 12),
      oneTime: Math.round(requiredAmount / Math.pow(1 + annualRate, yearsToAchieve))
    };
    
    return result;
  };

  const [result, setResult] = useState(calculateCroreFund());

  useEffect(() => {
    setResult(calculateCroreFund());
  }, [values]);

  const formatCurrency = amount => new Intl.NumberFormat('en-IN', { maximumFractionDigits: 0 }).format(amount);

  const InputField = ({ label, value, onChange, min, max, unit, step = 1 }) => (
    <div className="mb-3">
      <label className="block font-semibold text-gray-800 mb-1 text-sm">{label}</label>
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
          className="w-24 px-2 py-1 border rounded text-sm" 
        />
        <span className="text-sm text-gray-600">{unit}</span>
      </div>
      <input 
        type="range" 
        min={min} 
        max={max} 
        step={step} 
        value={value}
        onChange={e => {
          const val = parseFloat(e.target.value);
          if (!isNaN(val) && val >= min && val <= max) {
            onChange(val);
          }
        }}
        className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer mt-1" 
      />
    </div>
  );

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      <div className="container mx-auto">
        <div className="mb-4 pt-36">
          <h1 className="text-2xl font-bold text-gray-900">First Crore Calculator</h1>
          <p className="text-sm text-gray-600 mt-1">Calculate to reach your first crore at the earliest</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <InputField label="Your First One Crore" value={values.targetAmount}
                onChange={v => handleChange('targetAmount', v)} min={50000} max={10000000}
                unit="₹" step={10000} />
              <InputField label="Years to Achieve" value={values.yearsToAchieve}
                onChange={v => handleChange('yearsToAchieve', v)} min={1} max={10}
                unit="years" />
              <InputField label="Expected Returns On Investment" value={values.expectedReturns}
                onChange={v => handleChange('expectedReturns', v)} min={5} max={20}
                unit="%" />
              <InputField label="Expected Inflation" value={values.expectedInflation}
                onChange={v => handleChange('expectedInflation', v)} min={0} max={20}
                unit="%" />
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <input type="checkbox" id="haveSavings" checked={values.showSavings}
                  onChange={e => handleChange('showSavings', e.target.checked)}
                  className="w-3.5 h-3.5 text-green-600" />
                <label htmlFor="haveSavings" className="text-sm font-semibold text-gray-800">
                  Do You Have Any Existing Savings?
                </label>
              </div>

              {values.showSavings && (
                <div className="grid grid-cols-2 gap-3">
                  <InputField label="Current Savings" value={values.currentSavings}
                    onChange={v => handleChange('currentSavings', v)} min={0}
                    max={values.targetAmount} unit="₹" step={10000} />
                  <InputField label="Expected Returns on Savings" value={values.expectedReturnsSavings}
                    onChange={v => handleChange('expectedReturnsSavings', v)} min={0}
                    max={20} unit="%" />
                  <InputField label="Savings Growth" value={values.savingsGrowth}
                    onChange={v => {
                      if (v >= 0 && v <= 20) handleChange('savingsGrowth', v);
                    }} min={0}
                    max={20} unit="%" />
                </div>
              )}
            </div>
          </div>

          <div className="bg-[#113262] text-white p-4 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold">First Crore</h3>
              <button className="p-1.5 hover:bg-[#1e3a8a] rounded">
                <Share size={18} />
              </button>
            </div>

            <div className="mb-6">
              <div className="text-3xl font-bold mb-1">₹{formatCurrency(result.inflationAdjustedAmount)}</div>
              <div className="text-sm text-gray-300">Required amount (inflation adjusted)</div>
            </div>

            <div className="space-y-3">
              <h4 className="text-sm font-medium text-gray-300">Investment Required</h4>
              {[
                ['Monthly', result.monthly],
                ['Yearly', result.yearly],
                ['One Time', result.oneTime]
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between py-1.5 border-t border-white/20">
                  <span className="text-sm">{label}</span>
                  <span className="font-bold">₹{formatCurrency(value)}</span>
                </div>
              ))}
            </div>

            <button className="w-full bg-[#fb923c] text-white py-2 rounded-lg mt-6 text-sm hover:bg-[#f97316] transition-colors">
              Get Started →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstCroreCalculator;