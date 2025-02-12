import React, { useState } from 'react';
import { Share, ChevronDown } from 'lucide-react';

const EmergencyFundCalculator = () => {
  // Coverage months
  const [coverageMonths, setCoverageMonths] = useState(6);
  
  // Monthly Expenses
  const [monthlyIncome, setMonthlyIncome] = useState(50000);
  const [housingExpense, setHousingExpense] = useState(15000);
  const [utilitiesExpense, setUtilitiesExpense] = useState(5000);
  const [foodExpense, setFoodExpense] = useState(8000);
  const [transportExpense, setTransportExpense] = useState(4000);
  
  // Current savings
  const [currentSavings, setCurrentSavings] = useState(100000);
  const [monthlySavings, setMonthlySavings] = useState(10000);
  
  // Additional settings
  const [showAdditional, setShowAdditional] = useState(false);
  const [includeInsurance, setIncludeInsurance] = useState(true);
  const [insurancePremium, setInsurancePremium] = useState(2000);
  const [showShareToast, setShowShareToast] = useState(false);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const calculateEmergencyFund = () => {
    const monthlyExpenses = 
      housingExpense + 
      utilitiesExpense + 
      foodExpense + 
      transportExpense + 
      (includeInsurance ? insurancePremium : 0);

    const targetAmount = monthlyExpenses * coverageMonths;
    const currentShortfall = Math.max(0, targetAmount - currentSavings);
    const monthsToGoal = currentShortfall > 0 ? Math.ceil(currentShortfall / monthlySavings) : 0;
    const expenseRatio = monthlyExpenses / monthlyIncome * 100;

    // Get target date
    const targetDate = new Date();
    targetDate.setMonth(targetDate.getMonth() + monthsToGoal);

    return {
      monthlyExpenses,
      targetAmount,
      currentShortfall,
      monthsToGoal,
      expenseRatio,
      targetDate: targetDate.toLocaleDateString('en-IN', { 
        year: 'numeric', 
        month: 'long' 
      })
    };
  };

  const results = calculateEmergencyFund();

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
        <h1 className="text-2xl font-semibold text-[#113262] mb-2">Emergency Fund Calculator</h1>
        <h2 className="text-lg text-gray-600">Determine emergency savings with this calculator.</h2>
      </div>

      <div className="max-w-5xl mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Input Sections */}
          <div className="lg:col-span-2 space-y-8">
            {/* Coverage Period */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Coverage Period</h2>
              <div>
                <label className="block font-medium text-sm mb-1.5">Months of Coverage</label>
                <input
                  type="number"
                  value={coverageMonths}
                  onChange={(e) => setCoverageMonths(Number(e.target.value))}
                  className="w-full p-1.5 border rounded text-sm"
                />
                <input
                  type="range"
                  min={3}
                  max={24}
                  value={coverageMonths}
                  onChange={(e) => setCoverageMonths(Number(e.target.value))}
                  className="w-full mt-2"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>3 months</span>
                  <span>24 months</span>
                </div>
              </div>
            </div>

            {/* Monthly Income */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Monthly Income</h2>
              <div>
                <label className="block font-medium text-sm mb-1.5">Take-Home Income</label>
                <input
                  type="number"
                  value={monthlyIncome}
                  onChange={(e) => setMonthlyIncome(Number(e.target.value))}
                  className="w-full p-1.5 border rounded text-sm"
                />
                <input
                  type="range"
                  min={20000}
                  max={500000}
                  value={monthlyIncome}
                  onChange={(e) => setMonthlyIncome(Number(e.target.value))}
                  className="w-full mt-2"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>₹20,000</span>
                  <span>₹5L</span>
                </div>
              </div>
            </div>

            {/* Monthly Expenses */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Monthly Expenses</h2>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block font-medium text-sm mb-1.5">Housing</label>
                  <input
                    type="number"
                    value={housingExpense}
                    onChange={(e) => setHousingExpense(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={0}
                    max={100000}
                    value={housingExpense}
                    onChange={(e) => setHousingExpense(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                </div>

                <div>
                  <label className="block font-medium text-sm mb-1.5">Utilities</label>
                  <input
                    type="number"
                    value={utilitiesExpense}
                    onChange={(e) => setUtilitiesExpense(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={0}
                    max={20000}
                    value={utilitiesExpense}
                    onChange={(e) => setUtilitiesExpense(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                </div>

                <div>
                  <label className="block font-medium text-sm mb-1.5">Food</label>
                  <input
                    type="number"
                    value={foodExpense}
                    onChange={(e) => setFoodExpense(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={0}
                    max={30000}
                    value={foodExpense}
                    onChange={(e) => setFoodExpense(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                </div>

                <div>
                  <label className="block font-medium text-sm mb-1.5">Transportation</label>
                  <input
                    type="number"
                    value={transportExpense}
                    onChange={(e) => setTransportExpense(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={0}
                    max={20000}
                    value={transportExpense}
                    onChange={(e) => setTransportExpense(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                </div>
              </div>
            </div>

            {/* Current Savings */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Current Savings</h2>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block font-medium text-sm mb-1.5">Current Emergency Fund</label>
                  <input
                    type="number"
                    value={currentSavings}
                    onChange={(e) => setCurrentSavings(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={0}
                    max={1000000}
                    value={currentSavings}
                    onChange={(e) => setCurrentSavings(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                </div>

                <div>
                  <label className="block font-medium text-sm mb-1.5">Monthly Savings</label>
                  <input
                    type="number"
                    value={monthlySavings}
                    onChange={(e) => setMonthlySavings(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={1000}
                    max={50000}
                    value={monthlySavings}
                    onChange={(e) => setMonthlySavings(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                </div>
              </div>
            </div>

            {/* Additional Settings */}
            <div className="bg-white rounded-lg shadow">
              <button
                onClick={() => setShowAdditional(!showAdditional)}
                className="w-full p-4 flex justify-between items-center hover:bg-gray-50"
              >
                <h2 className="text-lg font-bold text-gray-900">Additional Settings</h2>
                <ChevronDown
                  className={`transform transition-transform ${showAdditional ? 'rotate-180' : ''}`}
                  size={20}
                />
              </button>

              {showAdditional && (
                <div className="p-4 border-t">
                  <label className="flex items-center space-x-2 mb-4">
                    <input
                      type="checkbox"
                      checked={includeInsurance}
                      onChange={(e) => setIncludeInsurance(e.target.checked)}
                      className="rounded"
                    />
                    <span className="text-sm">Include Insurance Premium</span>
                  </label>

                  {includeInsurance && (
                    <div>
                      <label className="block font-medium text-sm mb-1.5">Monthly Premium</label>
                      <input
                        type="number"
                        value={insurancePremium}
                        onChange={(e) => setInsurancePremium(Number(e.target.value))}
                        className="w-full p-1.5 border rounded text-sm"
                      />
                      <input
                        type="range"
                        min={500}
                        max={10000}
                        value={insurancePremium}
                        onChange={(e) => setInsurancePremium(Number(e.target.value))}
                        className="w-full mt-2"
                      />
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Results Section */}
          <div className="bg-[#113262] text-white rounded-lg h-[420px] sticky top-6">
            <div className="p-4 border-b border-white/20">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold">Emergency Fund Plan</h3>
                <button onClick={handleShare} className="p-1 hover:bg-blue-700 rounded">
                  <Share size={18} />
                </button>
              </div>
            </div>

            <div className="p-4">
              <div className="mb-4">
                <div className="text-3xl font-bold mb-1">{formatCurrency(results.targetAmount)}</div>
                <div className="text-sm text-gray-300">Target Emergency Fund</div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-t border-white/20">
                  <span className="text-sm">Monthly Expenses</span>
                  <span className="font-bold">{formatCurrency(results.monthlyExpenses)}</span>
                </div>

                <div className="flex justify-between items-center py-2 border-t border-white/20">
                  <span className="text-sm">Current Savings</span>
                  <span className="font-bold">{formatCurrency(currentSavings)}</span>
                </div>

                <div className="flex justify-between items-center py-2 border-t border-white/20">
                  <span className="text-sm">Current Shortfall</span>
                  <span className="font-bold">{formatCurrency(results.currentShortfall)}</span>
                </div>

                <div className="flex justify-between items-center py-2 border-t border-white/20">
                  <span className="text-sm">Months to Goal</span>
                  <span className="font-bold">{results.expenseRatio.toFixed(1)}%</span>
                </div>
              </div>

              <button className="w-full bg-orange-400 text-white py-2 rounded-lg mt-4 hover:bg-orange-500 transition-colors text-sm">
                Start Saving →
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

export default EmergencyFundCalculator;