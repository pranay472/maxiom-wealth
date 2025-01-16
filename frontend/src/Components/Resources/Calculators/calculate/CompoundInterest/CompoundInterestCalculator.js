import React, { useState } from 'react';
import { Share, ChevronDown } from 'lucide-react';

const CompoundInterestCalculator = () => {
  // Investment details
  const [principalAmount, setPrincipalAmount] = useState(100000);
  const [interestRate, setInterestRate] = useState(8);
  const [years, setYears] = useState(10);
  const [compoundingFrequency, setCompoundingFrequency] = useState('annually');

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

  const calculateCompoundInterest = () => {
    const frequencies = {
      'annually': 1,
      'semi-annually': 2,
      'quarterly': 4,
      'monthly': 12
    };

    const p = principalAmount;
    const r = interestRate;
    const t = years;
    const n = frequencies[compoundingFrequency];
    
    if (p <= 0 || r <= 0 || t <= 0) return { maturity: 0, interest: 0 };
    
    const amount = p * Math.pow(1 + (r / (100 * n)), n * t);
    const interest = amount - p;
    return { maturity: Math.round(amount), interest: Math.round(interest) };
  };

  const results = calculateCompoundInterest();

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
        <h1 className="text-2xl font-semibold text-[#113262] mb-2">Compound Interest Tool</h1>
        <h2 className="text-lg text-gray-600">Boost Savings with Compound Interest Calculator</h2>
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
                  <label className="block font-medium text-sm mb-1.5">Principal Amount</label>
                  <input
                    type="number"
                    value={principalAmount}
                    onChange={(e) => setPrincipalAmount(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={100000}
                    max={100000000}
                    step={100000}
                    value={principalAmount}
                    onChange={(e) => setPrincipalAmount(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>₹1L</span>
                    <span>₹10Cr</span>
                  </div>
                </div>

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
                    min={5}
                    max={20}
                    step={0.1}
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
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

            {/* Compounding Frequency Section */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Compounding Frequency</h2>
              <select 
                value={compoundingFrequency}
                onChange={(e) => setCompoundingFrequency(e.target.value)}
                className="w-full p-2 border rounded text-sm"
              >
                <option value="annually">Compounded Annually</option>
                <option value="semi-annually">Compounded Semi Annually</option>
                <option value="quarterly">Compounded Quarterly</option>
                <option value="monthly">Compounded Monthly</option>
              </select>
            </div>
          </div>

          {/* Results Section */}
          <div className="bg-[#113262] text-white rounded-lg h-[400px] sticky top-6">
            <div className="p-4 border-b border-white/20">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold">Investment Summary</h3>
                <button onClick={handleShare} className="p-1 hover:bg-blue-700 rounded">
                  <Share size={18} />
                </button>
              </div>
            </div>

            <div className="p-4">
              <div className="mb-4">
                <div className="text-3xl font-bold mb-1">{formatCurrency(results.maturity)}</div>
                <div className="text-sm text-gray-300">Maturity Amount</div>
              </div>

              <div className="space-y-3">
                <h4 className="text-sm font-medium text-gray-300">Investment Breakdown</h4>
                
                <div className="flex justify-between items-center py-2 border-t border-white/20">
                  <span className="text-sm">Principal Amount</span>
                  <span className="font-bold">{formatCurrency(principalAmount)}</span>
                </div>
                
                <div className="flex justify-between items-center py-2 border-t border-white/20">
                  <span className="text-sm">Interest Earned</span>
                  <span className="font-bold">{formatCurrency(results.interest)}</span>
                </div>

                <div className="flex justify-between items-center py-2 border-t border-white/20">
                  <span className="text-sm">Compounding</span>
                  <span className="font-bold capitalize">{compoundingFrequency}</span>
                </div>
              </div>

              <button className="w-full bg-orange-400 text-white py-2 rounded-lg mt-4 hover:bg-orange-500 transition-colors text-sm">
                Start Investing →
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

export default CompoundInterestCalculator;