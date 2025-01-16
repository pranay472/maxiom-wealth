import React, { useState } from 'react';
import { Share, ChevronDown } from 'lucide-react';

const PPFCalculator = () => {
  // Investment details
  const [annualInvestment, setAnnualInvestment] = useState(86500);
  const [years, setYears] = useState(15);
  const [expectedReturns, setExpectedReturns] = useState(6);

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

  const calculatePPF = () => {
    const principal = annualInvestment;
    const period = years;
    const rate = expectedReturns / 100;
    
    if (principal <= 0 || period <= 0 || rate <= 0) return { 
      totalInvested: 0, 
      totalInterest: 0, 
      maturity: 0 
    };
    
    const totalInvested = principal * period;
    let balance = 0;
    
    // PPF interest is compounded annually
    for (let year = 1; year <= period; year++) {
      balance += principal;
      balance *= (1 + rate);
    }
    
    const totalInterest = balance - totalInvested;
    
    return {
      totalInvested: Math.round(totalInvested),
      totalInterest: Math.round(totalInterest),
      maturity: Math.round(balance)
    };
  };

  const results = calculatePPF();

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
        <h1 className="text-2xl font-semibold text-[#113262] mb-2">PPF Planner</h1>
        <h2 className="text-lg text-gray-600">Secure Your Future with PPF Calculator</h2>
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
                  <label className="block font-medium text-sm mb-1.5">Annual Investment</label>
                  <input
                    type="number"
                    value={annualInvestment}
                    onChange={(e) => setAnnualInvestment(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={500}
                    max={150000}
                    step={500}
                    value={annualInvestment}
                    onChange={(e) => setAnnualInvestment(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>₹500</span>
                    <span>₹1.5L</span>
                  </div>
                </div>

                <div>
                  <label className="block font-medium text-sm mb-1.5">Expected Returns (%)</label>
                  <input
                    type="number"
                    value={expectedReturns}
                    onChange={(e) => setExpectedReturns(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={5}
                    max={8}
                    step={0.1}
                    value={expectedReturns}
                    onChange={(e) => setExpectedReturns(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>5%</span>
                    <span>8%</span>
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

            {/* Information Note */}
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm text-blue-800">
                Note: The current PPF interest rate is 6% per annum, compounded annually. The minimum investment period is 15 years.
              </p>
            </div>
          </div>

          {/* Results Section */}
          <div className="bg-[#113262] text-white rounded-lg h-[400px] sticky top-6">
            <div className="p-4 border-b border-white/20">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold">PPF Summary</h3>
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
                  <span className="font-bold">{formatCurrency(results.totalInterest)}</span>
                </div>

                <div className="flex justify-between items-center py-2 border-t border-white/20">
                  <span className="text-sm">Investment Period</span>
                  <span className="font-bold">{years} Years</span>
                </div>
              </div>

              <button className="w-full bg-orange-400 text-white py-2 rounded-lg mt-4 hover:bg-orange-500 transition-colors text-sm">
                Start PPF Investment →
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

export default PPFCalculator;