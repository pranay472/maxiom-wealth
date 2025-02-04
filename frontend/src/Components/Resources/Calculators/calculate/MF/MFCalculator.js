import React, { useState } from 'react';
import { Share, ChevronDown } from 'lucide-react';

const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
};

const MFCalculator = () => {
  const [investmentType, setInvestmentType] = useState('sip');
  const [monthlySIP, setMonthlySIP] = useState(5000);
  const [lumpsumAmount, setLumpsumAmount] = useState(100000);
  const [years, setYears] = useState(10);
  const [expectedReturn, setExpectedReturn] = useState(12);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [inflationRate, setInflationRate] = useState(6);
  const [showShareToast, setShowShareToast] = useState(false);

  const calculateReturns = () => {
    const rate = expectedReturn / 100;
    const months = years * 12;
    
    if (investmentType === 'sip') {
      const monthlyRate = rate / 12;
      const futureValue = monthlySIP * 
        ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * 
        (1 + monthlyRate);
      return Math.round(futureValue);
    }
    
    // Lumpsum calculation
    return Math.round(lumpsumAmount * Math.pow(1 + rate, years));
  };

  const calculateInflationAdjusted = (amount) => {
    return Math.round(amount / Math.pow(1 + (inflationRate/100), years));
  };

  const results = {
    maturity: calculateReturns(),
    inflationAdjusted: calculateInflationAdjusted(calculateReturns())
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

  return (
    <div className="calculator-container pt-24">
      <div className="calculator-header text-center mb-8">
        <h1 className="text-2xl font-semibold text-[#113262] mb-2">Mutual Fund Tracker</h1>
        <h2 className="text-lg text-gray-600">Achieve Financial Goals with Mutual Fund Calculator</h2>
      </div>

      <div className="max-w-5xl mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Input Sections */}
          <div className="lg:col-span-2 space-y-8">
            {/* Calculation Type */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Investment Type</h2>
              <div className="flex gap-4">
                <button
                  onClick={() => setInvestmentType('sip')}
                  className={`flex-1 py-2 rounded ${
                    investmentType === 'sip' 
                      ? 'bg-[#113262] text-white' 
                      : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  SIP Calculator
                </button>
                <button
                  onClick={() => setInvestmentType('lumpsum')}
                  className={`flex-1 py-2 rounded ${
                    investmentType === 'lumpsum' 
                      ? 'bg-[#113262] text-white' 
                      : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  Lumpsum Calculator
                </button>
              </div>
            </div>

            {/* Investment Details */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Investment Details</h2>
              <div className="grid grid-cols-2 gap-6">
                {investmentType === 'sip' ? (
                  <div>
                    <label className="block font-medium text-sm mb-1.5">Monthly SIP</label>
                    <input
                      type="number"
                      value={monthlySIP}
                      onChange={(e) => setMonthlySIP(Number(e.target.value))}
                      className="w-full p-1.5 border rounded text-sm"
                    />
                    <input
                      type="range"
                      min={500}
                      max={200000}
                      step={500}
                      value={monthlySIP}
                      onChange={(e) => setMonthlySIP(Number(e.target.value))}
                      className="w-full mt-2"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>₹500</span>
                      <span>₹2L</span>
                    </div>
                  </div>
                ) : (
                  <div>
                    <label className="block font-medium text-sm mb-1.5">Lumpsum Amount</label>
                    <input
                      type="number"
                      value={lumpsumAmount}
                      onChange={(e) => setLumpsumAmount(Number(e.target.value))}
                      className="w-full p-1.5 border rounded text-sm"
                    />
                    <input
                      type="range"
                      min={10000}
                      max={1000000}
                      step={10000}
                      value={lumpsumAmount}
                      onChange={(e) => setLumpsumAmount(Number(e.target.value))}
                      className="w-full mt-2"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>₹10K</span>
                      <span>₹10L</span>
                    </div>
                  </div>
                )}

                <div>
                  <label className="block font-medium text-sm mb-1.5">Expected Returns (%)</label>
                  <input
                    type="number"
                    value={expectedReturn}
                    onChange={(e) => setExpectedReturn(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={5}
                    max={20}
                    step={0.5}
                    value={expectedReturn}
                    onChange={(e) => setExpectedReturn(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>5%</span>
                    <span>20%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Time Period */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Investment Horizon</h2>
              <div>
                <label className="block font-medium text-sm mb-1.5">Years</label>
                <input
                  type="number"
                  value={years}
                  onChange={(e) => setYears(Number(e.target.value))}
                  className="w-full p-1.5 border rounded text-sm"
                />
                <input
                  type="range"
                  min={1}
                  max={30}
                  value={years}
                  onChange={(e) => setYears(Number(e.target.value))}
                  className="w-full mt-2"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>1 Year</span>
                  <span>30 Years</span>
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
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block font-medium text-sm mb-1.5">Inflation Rate (%)</label>
                      <input
                        type="number"
                        value={inflationRate}
                        onChange={(e) => setInflationRate(Number(e.target.value))}
                        className="w-full p-1.5 border rounded text-sm"
                      />
                      <input
                        type="range"
                        min={0}
                        max={10}
                        step={0.5}
                        value={inflationRate}
                        onChange={(e) => setInflationRate(Number(e.target.value))}
                        className="w-full mt-2"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>0%</span>
                        <span>10%</span>
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
                <h3 className="text-xl font-bold">Projection</h3>
                <button onClick={handleShare} className="p-1 hover:bg-blue-700 rounded">
                  <Share size={18} />
                </button>
              </div>
            </div>

            <div className="p-4 flex flex-col h-[calc(100%-68px)] justify-between">
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">
                    {formatCurrency(results.maturity)}
                  </div>
                  <div className="text-sm text-gray-300">Maturity Value</div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-t border-white/20">
                    <span className="text-sm">Inflation Adjusted</span>
                    <span className="font-bold">{formatCurrency(results.inflationAdjusted)}</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-2 border-t border-white/20">
                    <span className="text-sm">Total Invested</span>
                    <span className="font-bold">
                      {investmentType === 'sip' 
                        ? formatCurrency(monthlySIP * years * 12)
                        : formatCurrency(lumpsumAmount)}
                    </span>
                  </div>

                  <div className="flex justify-between items-center py-2 border-t border-white/20">
                    <span className="text-sm">Investment Period</span>
                    <span className="font-bold">{years} Years</span>
                  </div>
                </div>
              </div>

              <button className="w-full bg-orange-400 text-white py-2 rounded-lg mt-4 hover:bg-orange-500 transition-colors text-sm">
                {investmentType === 'sip' ? 'Start SIP Now →' : 'Invest Lumpsum →'}
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

export default MFCalculator;