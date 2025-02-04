import React, { useState } from 'react';
import { Share, ChevronDown } from 'lucide-react';

const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
};

const ELSSCalculator = () => {
  const [investmentType, setInvestmentType] = useState('sip');
  const [monthlySIP, setMonthlySIP] = useState(5000);
  const [lumpsumAmount, setLumpsumAmount] = useState(50000);
  const [years, setYears] = useState(3);
  const [expectedReturn, setExpectedReturn] = useState(12);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [taxRate, setTaxRate] = useState(30);
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

  const taxSavings = investmentType === 'sip' 
    ? Math.min(monthlySIP * 12 * years, 150000) * 0.3
    : Math.min(lumpsumAmount, 150000) * 0.3;

  const results = {
    maturity: calculateReturns(),
    taxSaved: Math.round(taxSavings)
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
        <h1 className="text-2xl font-semibold text-[#113262] mb-2">ELSS Tax Saver</h1>
        <h2 className="text-lg text-gray-600">Achieve Financial Goals with ELSS Calculator</h2>
      </div>

      <div className="max-w-5xl mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Input Sections */}
          <div className="lg:col-span-2 space-y-8">
            {/* Investment Type */}
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
                  SIP
                </button>
                <button
                  onClick={() => setInvestmentType('lumpsum')}
                  className={`flex-1 py-2 rounded ${
                    investmentType === 'lumpsum' 
                      ? 'bg-[#113262] text-white' 
                      : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  Lumpsum
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
                      onChange={(e) => setMonthlySIP(Math.min(e.target.value, 12500))}
                      className="w-full p-1.5 border rounded text-sm"
                    />
                    <input
                      type="range"
                      min={500}
                      max={12500}
                      step={500}
                      value={monthlySIP}
                      onChange={(e) => setMonthlySIP(Number(e.target.value))}
                      className="w-full mt-2"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>₹500</span>
                      <span>₹12.5K</span>
                    </div>
                  </div>
                ) : (
                  <div>
                    <label className="block font-medium text-sm mb-1.5">Lumpsum Amount</label>
                    <input
                      type="number"
                      value={lumpsumAmount}
                      onChange={(e) => setLumpsumAmount(Math.min(e.target.value, 150000))}
                      className="w-full p-1.5 border rounded text-sm"
                    />
                    <input
                      type="range"
                      min={500}
                      max={150000}
                      step={500}
                      value={lumpsumAmount}
                      onChange={(e) => setLumpsumAmount(Number(e.target.value))}
                      className="w-full mt-2"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>₹500</span>
                      <span>₹1.5L</span>
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
                    min={8}
                    max={20}
                    step={0.5}
                    value={expectedReturn}
                    onChange={(e) => setExpectedReturn(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>8%</span>
                    <span>20%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Lock-in Period */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Lock-in Period</h2>
              <div>
                <label className="block font-medium text-sm mb-1.5">Years</label>
                <input
                  type="number"
                  value={years}
                  onChange={(e) => setYears(Math.max(3, Number(e.target.value)))}
                  className="w-full p-1.5 border rounded text-sm"
                />
                <input
                  type="range"
                  min={3}
                  max={15}
                  value={years}
                  onChange={(e) => setYears(Number(e.target.value))}
                  className="w-full mt-2"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>3 Years</span>
                  <span>15 Years</span>
                </div>
              </div>
            </div>

            {/* Tax Settings */}
            <div className="bg-white rounded-lg shadow">
              <button
                onClick={() => setShowAdvanced(!showAdvanced)}
                className="w-full p-4 flex justify-between items-center hover:bg-gray-50"
              >
                <h2 className="text-lg font-bold text-gray-900">Tax Settings</h2>
                <ChevronDown 
                  className={`transform transition-transform ${showAdvanced ? 'rotate-180' : ''}`}
                  size={20}
                />
              </button>
              
              {showAdvanced && (
                <div className="p-4 border-t">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block font-medium text-sm mb-1.5">Tax Bracket (%)</label>
                      <input
                        type="number"
                        value={taxRate}
                        onChange={(e) => setTaxRate(Number(e.target.value))}
                        className="w-full p-1.5 border rounded text-sm"
                      />
                      <input
                        type="range"
                        min={5}
                        max={30}
                        step={5}
                        value={taxRate}
                        onChange={(e) => setTaxRate(Number(e.target.value))}
                        className="w-full mt-2"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>5%</span>
                        <span>30%</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Results Section */}
          <div className="bg-[#113262] text-white rounded-lg h-[360px] sticky top-6">
            <div className="p-4 border-b border-white/20">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold">Tax Savings</h3>
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
                    <span className="text-sm">Tax Saved (80C)</span>
                    <span className="font-bold">{formatCurrency(results.taxSaved)}</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-2 border-t border-white/20">
                    <span className="text-sm">Total Invested</span>
                    <span className="font-bold">
                      {investmentType === 'sip' 
                        ? formatCurrency(monthlySIP * 12 * years)
                        : formatCurrency(lumpsumAmount)}
                    </span>
                  </div>

                  <div className="flex justify-between items-center py-2 border-t border-white/20">
                    <span className="text-sm">Lock-in Period</span>
                    <span className="font-bold">{years} Years</span>
                  </div>
                </div>
              </div>

              <button className="w-full bg-orange-400 text-white py-2 rounded-lg mt-4 hover:bg-orange-500 transition-colors text-sm">
                {investmentType === 'sip' ? 'Start ELSS SIP →' : 'Invest Lumpsum →'}
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

export default ELSSCalculator;