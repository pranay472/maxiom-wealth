import React, { useState } from 'react';
import { Share, ChevronDown } from 'lucide-react';

const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
};

const SukanyaCalculator = () => {
  const [childAge, setChildAge] = useState(2);
  const [monthlyInvestment, setMonthlyInvestment] = useState(12500);
  const [interestRate, setInterestRate] = useState(8.0);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [showShareToast, setShowShareToast] = useState(false);

  const calculateSSY = () => {
    const maturityAge = 21;
    const investmentYears = Math.min(15, maturityAge - childAge);
    const totalYears = maturityAge - childAge;
    const monthlyRate = interestRate / (12 * 100);
    
    let totalInvestment = 0;
    let maturityValue = 0;
    let yearlyBalance = 0;

    // Calculate for each year
    for (let year = 1; year <= totalYears; year++) {
      if (year <= investmentYears) {
        const yearlyInvestment = monthlyInvestment * 12;
        totalInvestment += yearlyInvestment;
        
        // Calculate interest on previous balance
        yearlyBalance = (yearlyBalance + yearlyInvestment) * (1 + (interestRate/100));
      } else {
        // Only interest accumulation after 15 years
        yearlyBalance = yearlyBalance * (1 + (interestRate/100));
      }
      
      maturityValue = yearlyBalance;
    }

    return {
      maturityValue: Math.round(maturityValue),
      totalInvestment: Math.round(totalInvestment),
      totalYears,
      investmentYears,
      interestEarned: Math.round(maturityValue - totalInvestment)
    };
  };

  const results = calculateSSY();

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
        <h1 className="text-2xl font-semibold text-[#113262] mb-2">Sukanya Samriddhi Yojana Calculator</h1>
        <h2 className="text-lg text-gray-600">Plan Your Daughter's Future with SSY Investment</h2>
      </div>

      <div className="max-w-5xl mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Input Sections */}
          <div className="lg:col-span-2 space-y-8">
            {/* Basic Details */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Basic Details</h2>
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="block font-medium text-sm mb-1.5">Daughter's Age (years)</label>
                  <input
                    type="number"
                    value={childAge}
                    onChange={(e) => setChildAge(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={0}
                    max={10}
                    value={childAge}
                    onChange={(e) => setChildAge(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>0</span>
                    <span>10</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Investment Details */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Investment Details</h2>
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="block font-medium text-sm mb-1.5">Monthly Investment</label>
                  <input
                    type="number"
                    value={monthlyInvestment}
                    onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={250}
                    max={12500}
                    step={250}
                    value={monthlyInvestment}
                    onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>₹250</span>
                    <span>₹12,500</span>
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
                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <label className="block font-medium text-sm mb-1.5">Interest Rate (%)</label>
                      <input
                        type="number"
                        value={interestRate}
                        onChange={(e) => setInterestRate(Number(e.target.value))}
                        className="w-full p-1.5 border rounded text-sm"
                      />
                      <input
                        type="range"
                        min={7}
                        max={9}
                        step={0.1}
                        value={interestRate}
                        onChange={(e) => setInterestRate(Number(e.target.value))}
                        className="w-full mt-2"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>7%</span>
                        <span>9%</span>
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
                <h3 className="text-xl font-bold">SSY Projection</h3>
                <button onClick={handleShare} className="p-1 hover:bg-blue-700 rounded">
                  <Share size={18} />
                </button>
              </div>
            </div>

            <div className="p-4 flex flex-col h-[calc(100%-68px)] justify-between">
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">
                    {formatCurrency(results.maturityValue)}
                  </div>
                  <div className="text-sm text-gray-300">Maturity Value at Age 21</div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-t border-white/20">
                    <span className="text-sm">Total Investment Period</span>
                    <span className="font-bold">{results.investmentYears} years</span>
                  </div>

                  <div className="flex justify-between items-center py-2 border-t border-white/20">
                    <span className="text-sm">Total Time till Maturity</span>
                    <span className="font-bold">{results.totalYears} years</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-2 border-t border-white/20">
                    <span className="text-sm">Total Investment</span>
                    <span className="font-bold">{formatCurrency(results.totalInvestment)}</span>
                  </div>

                  <div className="flex justify-between items-center py-2 border-t border-white/20">
                    <span className="text-sm">Interest Earned</span>
                    <span className="font-bold">{formatCurrency(results.interestEarned)}</span>
                  </div>
                </div>
              </div>

              <button className="w-full bg-orange-400 text-white py-2 rounded-lg mt-4 hover:bg-orange-500 transition-colors text-sm">
                Start SSY Investment →
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

export default SukanyaCalculator;