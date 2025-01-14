import React, { useState } from 'react';
import { Share } from 'lucide-react';

const ChildMarriageCalculator = () => {
  const [values, setValues] = useState({
    weddingCost: 1000000,
    yearsToWedding: 3,
    expectedReturns: 12,
    expectedInflation: 6,
    showSavings: false,
    currentSavings: 0,
    expectedReturnsSavings: 12,
    savingsGrowth: 9
  });

  const handleChange = (key, value) => {
    console.log('Changing:', key, 'to:', value);
    console.log('Previous values:', values);
    setValues(prev => {
      const newValues = { ...prev, [key]: value };
      console.log('New values:', newValues);
      return newValues;
    });
  };

  const calculateWeddingFund = () => {
    const { weddingCost, yearsToWedding, expectedReturns, expectedInflation, 
            showSavings, currentSavings, expectedReturnsSavings, savingsGrowth } = values;
            
    // Calculate inflation adjusted wedding cost (with 10x multiplier for total wedding expenses)
    const inflatedWeddingCost = weddingCost * Math.pow((1 + expectedInflation/100), yearsToWedding) * 10;
    
    // Calculate future value of current savings if any
    let futureValueSavings = 0;
    if (showSavings && currentSavings > 0) {
      // Calculate total returns (growth + investment returns)
      const totalRate = (savingsGrowth + expectedReturnsSavings) / 100;
      
      // Apply compound interest with total rate
      futureValueSavings = currentSavings * Math.pow(1 + totalRate, yearsToWedding);
      
      console.log('Savings calculation:', {
        currentSavings,
        savingsGrowth,
        expectedReturnsSavings,
        totalRate,
        yearsToWedding,
        futureValueSavings
      });
    }
    
    // Calculate required amount after considering savings
    const requiredAmount = Math.max(0, inflatedWeddingCost - futureValueSavings);
    console.log('Required amount:', requiredAmount);
    
    // Calculate monthly investment
    const monthlyRate = expectedReturns / (12 * 100);
    const totalMonths = yearsToWedding * 12;
    const annualRate = expectedReturns / 100;
    
    // PMT = FV / (((1 + r)^n - 1) / r)
    const monthlyInvestment = requiredAmount / 
      ((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate);
    
    const result = {
      inflationAdjustedAmount: Math.round(inflatedWeddingCost),
      monthly: Math.round(monthlyInvestment),
      yearly: Math.round(monthlyInvestment * 12),
      oneTime: Math.round(requiredAmount / Math.pow(1 + annualRate, yearsToWedding))
    };
    
    console.log('Final result:', result);
    return result;
  };

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

  const results = calculateWeddingFund();

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      <div className="mb-4 pt-36">
        <h1 className="text-2xl font-bold text-gray-900">Child Marriage Plan Calculator</h1>
        <p className="text-sm text-gray-600 mt-1">Plan your investments for your child's wedding</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <InputField label="Wedding Cost (Today)" value={values.weddingCost}
              onChange={v => handleChange('weddingCost', v)} min={50000} max={10000000}
              unit="₹" step={10000} />
            <InputField label="Years to Wedding" value={values.yearsToWedding}
              onChange={v => handleChange('yearsToWedding', v)} min={1} max={30}
              unit="years" />
            <InputField label="Expected Returns" value={values.expectedReturns}
              onChange={v => handleChange('expectedReturns', v)} min={0} max={30}
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
                I have existing savings
              </label>
            </div>

            {values.showSavings && (
              <div className="grid grid-cols-2 gap-3">
                <InputField label="Current Savings" value={values.currentSavings}
                  onChange={v => handleChange('currentSavings', v)} min={0}
                  max={values.weddingCost} unit="₹" step={10000} />
                <InputField label="Expected Returns on Savings" value={values.expectedReturnsSavings}
                  onChange={v => handleChange('expectedReturnsSavings', v)} min={0}
                  max={30} unit="%" />
                <InputField label="Savings Growth" value={values.savingsGrowth}
                  onChange={v => {
                    if (v >= 0 && v <= 30) handleChange('savingsGrowth', v);
                  }} min={0}
                  max={30} unit="%" />
              </div>
            )}
          </div>
        </div>

        <div className="bg-[#113262] text-white p-4 rounded-lg">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold">Your Child's Wedding</h3>
            <button className="p-1.5 hover:bg-[#1e3a8a] rounded">
              <Share size={18} />
            </button>
          </div>

          <div className="mb-6">
            <div className="text-3xl font-bold mb-1">₹{formatCurrency(results.inflationAdjustedAmount)}</div>
            <div className="text-sm text-gray-300">Required amount (inflation adjusted)</div>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-medium text-gray-300">Investment Required</h4>
            {[
              ['Monthly', results.monthly],
              ['Yearly', results.yearly],
              ['One Time', results.oneTime]
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
  );
};

export default ChildMarriageCalculator;