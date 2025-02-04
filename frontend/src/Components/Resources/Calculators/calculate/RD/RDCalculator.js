import React, { useState, useEffect } from 'react';
import { Share, ChevronDown } from 'lucide-react';

const RDCalculator = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState(100000);
  const [months, setMonths] = useState(18);
  const [rateOfInterest, setRateOfInterest] = useState(8);
  const [showShareToast, setShowShareToast] = useState(false);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const calculateRD = () => {
    const monthlyInstallment = monthlyInvestment;
    const period = months;
    const rate = rateOfInterest / 100;
    
    if (monthlyInstallment <= 0 || period <= 0 || rate <= 0) return { 
      totalInvested: 0, 
      interest: 0, 
      maturity: 0 
    };

    const totalInvested = monthlyInstallment * period;
    const quarterlyRate = rate / 4;
    const numberOfQuarters = Math.ceil(period / 3);
    
    const numerator = Math.pow(1 + quarterlyRate, numberOfQuarters) - 1;
    const denominator = 1 - Math.pow(1 + quarterlyRate, -1/3);
    const maturityAmount = monthlyInstallment * (numerator / denominator);
    
    return {
      totalInvested,
      interest: maturityAmount - totalInvested,
      maturity: maturityAmount
    };
  };

  const results = calculateRD();

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
        <h1 className="text-2xl font-semibold text-[#113262] mb-2">Recurring Deposit Planner</h1>
        <h2 className="text-lg text-gray-600">Save Consistently with Recurring Deposit Calculator</h2>
      </div>
      
      <div className="max-w-5xl mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Input Sections */}
          <div className="lg:col-span-2 space-y-8">
            {/* Investment Details Section */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Investment Details</h2>
              <div className="grid grid-cols-2 gap-6">
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
                    min={5000}
                    max={1000000}
                    step={5000}
                    value={monthlyInvestment}
                    onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>₹5K</span>
                    <span>₹10L</span>
                  </div>
                </div>

                <div>
                  <label className="block font-medium text-sm mb-1.5">Expected Returns (%)</label>
                  <input
                    type="number"
                    value={rateOfInterest}
                    onChange={(e) => setRateOfInterest(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={5}
                    max={20}
                    step={0.1}
                    value={rateOfInterest}
                    onChange={(e) => setRateOfInterest(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>5%</span>
                    <span>20%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Time Period Section */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Time Period</h2>
              <div>
                <label className="block font-medium text-sm mb-1.5">Investment Period (Months)</label>
                <input
                  type="number"
                  value={months}
                  onChange={(e) => setMonths(Number(e.target.value))}
                  className="w-full p-1.5 border rounded text-sm"
                />
                <input
                  type="range"
                  min={12}
                  max={60}
                  value={months}
                  onChange={(e) => setMonths(Number(e.target.value))}
                  className="w-full mt-2"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>12 months</span>
                  <span>60 months</span>
                </div>
              </div>
            </div>

            {/* Information Note */}
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm text-blue-800">
                Note: RD interest is compounded quarterly. Minimum investment period is 6 months.
              </p>
            </div>
          </div>

          {/* Results Section */}
          <div className="bg-[#113262] text-white rounded-lg h-[400px] sticky top-6">
            <div className="p-4 border-b border-white/20">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold">RD Summary</h3>
                <button onClick={handleShare} className="p-1 hover:bg-blue-700 rounded">
                  <Share size={18} />
                </button>
              </div>
            </div>

            <div className="p-4">
              <div className="mb-4">
                <div className="text-3xl font-bold mb-1">{formatCurrency(results.maturity)}</div>
                <div className="text-sm text-gray-300">Maturity Value</div>
              </div>

              <div className="space-y-3">
                <h4 className="text-sm font-medium text-gray-300">Investment Breakdown</h4>
                
                <div className="flex justify-between items-center py-2 border-t border-white/20">
                  <span className="text-sm">Total Investment</span>
                  <span className="font-bold">{formatCurrency(results.totalInvested)}</span>
                </div>
                
                <div className="flex justify-between items-center py-2 border-t border-white/20">
                  <span className="text-sm">Interest Earned</span>
                  <span className="font-bold">{formatCurrency(results.interest)}</span>
                </div>

                <div className="flex justify-between items-center py-2 border-t border-white/20">
                  <span className="text-sm">Investment Period</span>
                  <span className="font-bold">{months} Months</span>
                </div>
              </div>

              <button className="w-full bg-orange-400 text-white py-2 rounded-lg mt-4 hover:bg-orange-500 transition-colors text-sm">
                Start RD Investment →
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

export default RDCalculator;