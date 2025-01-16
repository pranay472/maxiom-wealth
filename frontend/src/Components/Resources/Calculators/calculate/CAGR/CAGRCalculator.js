import React, { useState } from 'react';
import { Share, ChevronDown } from 'lucide-react';

const CAGRCalculator = () => {
  // Investment details
  const [initialInvestment, setInitialInvestment] = useState(2570000);
  const [futureValue, setFutureValue] = useState(14440000);
  const [years, setYears] = useState(12);

  // Additional settings
  const [showAdditional, setShowAdditional] = useState(false);
  const [showShareToast, setShowShareToast] = useState(false);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const calculateCAGR = () => {
    if (initialInvestment <= 0 || futureValue <= 0 || years <= 0) return 0;
    return (Math.pow(futureValue / initialInvestment, 1 / years) - 1) * 100;
  };

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setShowShareToast(true);
      setTimeout(() => setShowShareToast(false), 3000);
    } catch (err) {
      console.error('Failed to copy URL:', err);
    }
  };

  const cagr = calculateCAGR();

  return (
    <div className="calculator-container pt-24">
      <div className="calculator-header text-center mb-8">
        <h1 className="text-2xl font-semibold text-[#113262] mb-2">CAGR Tracker</h1>
        <h2 className="text-lg text-gray-600">Track Your Wealth Growth with CAGR Calculator</h2>
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
                  <label className="block font-medium text-sm mb-1.5">Initial Investment</label>
                  <input
                    type="number"
                    value={initialInvestment}
                    onChange={(e) => setInitialInvestment(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={100000}
                    max={100000000}
                    step={100000}
                    value={initialInvestment}
                    onChange={(e) => setInitialInvestment(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>₹1L</span>
                    <span>₹10Cr</span>
                  </div>
                </div>

                <div>
                  <label className="block font-medium text-sm mb-1.5">Future Value</label>
                  <input
                    type="number"
                    value={futureValue}
                    onChange={(e) => setFutureValue(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={100000}
                    max={500000000}
                    step={100000}
                    value={futureValue}
                    onChange={(e) => setFutureValue(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>₹1L</span>
                    <span>₹50Cr</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Time Period Section */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Time Period</h2>
              <div>
                <label className="block font-medium text-sm mb-1.5">Investment Period (Years)</label>
                <input
                  type="number"
                  value={years}
                  onChange={(e) => setYears(Number(e.target.value))}
                  className="w-full p-1.5 border rounded text-sm"
                />
                <input
                  type="range"
                  min={5}
                  max={25}
                  value={years}
                  onChange={(e) => setYears(Number(e.target.value))}
                  className="w-full mt-2"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>5 years</span>
                  <span>25 years</span>
                </div>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="bg-[#113262] text-white rounded-lg h-[400px] sticky top-6">
            <div className="p-4 border-b border-white/20">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold">CAGR Summary</h3>
                <button onClick={handleShare} className="p-1 hover:bg-blue-700 rounded">
                  <Share size={18} />
                </button>
              </div>
            </div>

            <div className="p-4">
              <div className="mb-4">
                <div className="text-3xl font-bold mb-1">{cagr.toFixed(2)}%</div>
                <div className="text-sm text-gray-300">Compound Annual Growth Rate</div>
              </div>

              <div className="space-y-3">
                <h4 className="text-sm font-medium text-gray-300">Investment Details</h4>
                
                <div className="flex justify-between items-center py-2 border-t border-white/20">
                  <span className="text-sm">Initial Investment</span>
                  <span className="font-bold">{formatCurrency(initialInvestment)}</span>
                </div>
                
                <div className="flex justify-between items-center py-2 border-t border-white/20">
                  <span className="text-sm">Future Value</span>
                  <span className="font-bold">{formatCurrency(futureValue)}</span>
                </div>

                <div className="flex justify-between items-center py-2 border-t border-white/20">
                  <span className="text-sm">Time Period</span>
                  <span className="font-bold">{years} Years</span>
                </div>
              </div>

              <button className="w-full bg-orange-400 text-white py-2 rounded-lg mt-4 hover:bg-orange-500 transition-colors text-sm">
                Start Planning →
              </button>
            </div>
          </div>
        </div>

        {showShareToast && (
          <div className="fixed top-4 right-4 bg-green-600 text-white px-6 py-3 rounded shadow-lg">
            Link copied!
          </div>
        )}
      </div>
    </div>
  );
};

export default CAGRCalculator;