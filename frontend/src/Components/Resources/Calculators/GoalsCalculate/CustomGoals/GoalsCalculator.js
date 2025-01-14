import React, { useState } from 'react';
import { Share } from 'lucide-react';

const GoalsCalculator = () => {
  const [goalAmount, setGoalAmount] = useState(10000000);
  const [yearsToAchieve, setYearsToAchieve] = useState(3);
  const [expectedReturns, setExpectedReturns] = useState(12);
  const [expectedInflation, setExpectedInflation] = useState(6);
  const [hasSavings, setHasSavings] = useState(false);
  const [currentSavings, setCurrentSavings] = useState(0);
  const [savingsReturns, setSavingsReturns] = useState(12);
  const [savingsGrowth, setSavingsGrowth] = useState(9);

  // Calculate inflation-adjusted goal amount
  const calculateRequiredAmount = () => {
    const inflationFactor = Math.pow(1 + expectedInflation / 100, yearsToAchieve);
    return Math.round(goalAmount * inflationFactor);
  };

  // Calculate required investments based on frequency
  const calculateInvestments = () => {
    const requiredAmount = calculateRequiredAmount();
    const r = expectedReturns / 100;
    const n = yearsToAchieve;
    
    // Calculate future value of current savings including growth
    let futureValueSavings = 0;
    if (hasSavings && currentSavings > 0) {
      let savings = currentSavings;
      // For each year:
      // 1. Apply investment returns to current balance
      // 2. Add growth amount based on original principal
      for(let year = 1; year <= n; year++) {
        savings = savings * (1 + savingsReturns/100);  // Apply returns
        savings = savings + (currentSavings * savingsGrowth/100);  // Add growth
      }
      futureValueSavings = savings;
    }
    
    const totalRequired = requiredAmount - futureValueSavings;
    
    // Monthly investment calculation
    const monthlyRate = r / 12;
    const months = n * 12;
    const monthlyPayment = totalRequired * (monthlyRate) / 
      ((Math.pow(1 + monthlyRate, months) - 1) / (1 + monthlyRate));
    
    // Yearly investment calculation
    const yearlyPayment = totalRequired * (r) / 
      ((Math.pow(1 + r, n) - 1) / (1 + r));
    
    // One-time investment calculation
    const oneTimePayment = totalRequired / Math.pow(1 + r, n);
    
    return {
      monthly: Math.round(monthlyPayment),
      yearly: Math.round(yearlyPayment),
      oneTime: Math.round(oneTimePayment),
      requiredAmount
    };
  };

  const formatCurrency = amount => new Intl.NumberFormat('en-IN', { 
    maximumFractionDigits: 0,
    minimumFractionDigits: 0
  }).format(amount);

  const InputField = ({ label, value, onChange, min, max, unit, step = 1, description }) => (
    <div className="mb-3">
      <label className="block font-semibold text-gray-800 mb-1 text-sm">{label}</label>
      {description && <div className="text-sm text-gray-500 mb-1">{description}</div>}
      <div className="flex gap-2">
        <input 
          type="number" 
          value={value} 
          onChange={e => {
            const val = parseFloat(e.target.value);
            if (!isNaN(val)) {
              onChange(Math.min(Math.max(val, min), max));
            }
          }} 
          className="w-24 px-2 py-1 border rounded text-sm" 
        />
        <span className="text-sm text-gray-600">{unit}</span>
      </div>
      <div className="relative mt-1">
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
          <span>{unit === '₹' ? formatCurrency(min) : min + unit}</span>
          <span>{unit === '₹' ? formatCurrency(max) : max + unit}</span>
        </div>
      </div>
    </div>
  );

  const results = calculateInvestments();

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      <div className="mb-4">
        <h1 className="text-2xl font-bold text-gray-900">Custom Goals Calculator</h1>
        <p className="text-sm text-gray-600 mt-1">Plan your investment strategy based on your custom goals and requirements.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField 
              label="Goal Amount" 
              value={goalAmount}
              onChange={setGoalAmount} 
              min={50000} 
              max={10000000}
              unit="₹" 
              step={10000}
              description="What is the value for your goal today?" 
            />
            <InputField 
              label="Years to Achieve" 
              value={yearsToAchieve}
              onChange={setYearsToAchieve} 
              min={1} 
              max={10}
              unit="years"
              description="How many years later you wish to achieve?" 
            />
            <InputField 
              label="Expected Returns" 
              value={expectedReturns}
              onChange={setExpectedReturns} 
              min={5} 
              max={20}
              unit="%"
              description="Your expectation of returns on this planned investment" 
            />
            <InputField 
              label="Expected Inflation" 
              value={expectedInflation}
              onChange={setExpectedInflation} 
              min={0} 
              max={20}
              unit="%"
              description="Your expectation on inflation" 
            />
          </div>

          <div>
            <div className="flex items-center gap-2 mb-4">
              <input 
                type="checkbox" 
                id="hasSavings" 
                checked={hasSavings}
                onChange={e => setHasSavings(e.target.checked)}
                className="w-4 h-4 text-green-600 border-gray-300 rounded" 
              />
              <label htmlFor="hasSavings" className="text-sm font-semibold text-gray-800">
                Do You Have Any Existing Savings?
              </label>
            </div>

            {hasSavings && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <InputField 
                  label="Current Savings" 
                  value={currentSavings}
                  onChange={setCurrentSavings} 
                  min={0}
                  max={5000000} 
                  unit="₹" 
                  step={10000}
                  description="Your existing savings" 
                />
                <InputField 
                  label="Expected Returns on Savings" 
                  value={savingsReturns}
                  onChange={setSavingsReturns} 
                  min={0}
                  max={20} 
                  unit="%"
                  description="Your expectation of returns on current savings every year" 
                />
                <InputField 
                  label="Savings Growth" 
                  value={savingsGrowth}
                  onChange={setSavingsGrowth} 
                  min={0}
                  max={20} 
                  unit="%"
                  description="Expected growth in your savings every year" 
                />
              </div>
            )}
          </div>
        </div>

        <div className="bg-[#113262] text-white p-6 rounded-lg h-fit">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold">Custom Goal</h3>
            <button className="p-1.5 hover:bg-[#1e3a8a] rounded transition-colors">
              <Share size={18} />
            </button>
          </div>

          <div className="mb-6">
            <div className="text-3xl font-bold mb-1">₹{formatCurrency(results.requiredAmount)}</div>
            <div className="text-sm text-gray-300">Required amount (inflation adjusted)</div>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-medium text-gray-300">New Investment Required<br/>(By frequency)</h4>
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

          <button className="w-full bg-[#fb923c] text-white py-2.5 rounded-lg mt-6 text-sm font-medium hover:bg-[#f97316] transition-colors">
            Get Started →
          </button>
        </div>
      </div>
    </div>
  );
};

export default GoalsCalculator;