import React, { useState, useEffect } from 'react';
import { Share, ChevronDown, Calculator } from 'lucide-react';

const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
};

const formatPercentage = (value) => {
  return `${value.toFixed(2)}%`;
};

const SRCalculator = () => {
  // Investment Details
  const [investmentAmount, setInvestmentAmount] = useState(100000);
  const [investmentType, setInvestmentType] = useState('lumpsum'); // lumpsum or sip
  const [sipAmount, setSipAmount] = useState(10000);

  // Stock Details
  const [buyPrice, setBuyPrice] = useState(100);
  const [currentPrice, setCurrentPrice] = useState(150);
  const [dividendYield, setDividendYield] = useState(2);
  const [investmentPeriod, setInvestmentPeriod] = useState(3); // in years

  // Additional Settings
  const [inflationRate, setInflationRate] = useState(6);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [showShareToast, setShowShareToast] = useState(false);

  const calculateReturns = () => {
    let totalInvestment = 0;
    let totalUnits = 0;
    let totalValue = 0;
    let totalDividends = 0;

    if (investmentType === 'lumpsum') {
      totalUnits = investmentAmount / buyPrice;
      totalInvestment = investmentAmount;
    } else {
      // Calculate SIP returns
      for (let month = 0; month < investmentPeriod * 12; month++) {
        const monthlyUnits = sipAmount / buyPrice;
        totalUnits += monthlyUnits;
        totalInvestment += sipAmount;
      }
    }

    totalValue = totalUnits * currentPrice;

    // Calculate dividend returns
    for (let year = 0; year < investmentPeriod; year++) {
      const yearlyDividend = (totalValue * (dividendYield / 100));
      totalDividends += yearlyDividend;
    }

    // Calculate returns
    const absoluteReturn = ((totalValue + totalDividends - totalInvestment) / totalInvestment) * 100;
    
    // Calculate XIRR (simplified approximation)
    const yearlyReturn = Math.pow((totalValue + totalDividends) / totalInvestment, 1/investmentPeriod) - 1;
    const annualizedReturn = yearlyReturn * 100;

    // Calculate inflation-adjusted return
    const realReturn = annualizedReturn - inflationRate;

    return {
      totalInvestment,
      currentValue: totalValue,
      totalDividends,
      totalReturn: totalValue + totalDividends - totalInvestment,
      absoluteReturn,
      annualizedReturn,
      realReturn,
      totalUnits
    };
  };

  const results = calculateReturns();

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
        <h1 className="text-2xl font-semibold text-[#113262] mb-2">Stock Return Calculator</h1>
        <h2 className="text-lg text-gray-600">Calculate Your Stock Investment Returns</h2>
      </div>

      <div className="max-w-5xl mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Input Sections */}
          <div className="lg:col-span-2 space-y-8">
            {/* Investment Type */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Investment Type</h2>
              <div className="grid grid-cols-2 gap-4">
                <button 
                  className={`p-3 rounded-lg border ${investmentType === 'lumpsum' ? 'bg-blue-50 border-blue-500' : 'hover:bg-gray-50'}`}
                  onClick={() => setInvestmentType('lumpsum')}
                >
                  <div className="font-medium">Lumpsum</div>
                  <div className="text-sm text-gray-600">One-time investment</div>
                </button>
                <button 
                  className={`p-3 rounded-lg border ${investmentType === 'sip' ? 'bg-blue-50 border-blue-500' : 'hover:bg-gray-50'}`}
                  onClick={() => setInvestmentType('sip')}
                >
                  <div className="font-medium">SIP</div>
                  <div className="text-sm text-gray-600">Monthly investment</div>
                </button>
              </div>

              <div className="mt-4">
                <label className="block font-medium text-sm mb-1.5">
                  {investmentType === 'lumpsum' ? 'Investment Amount' : 'Monthly SIP Amount'}
                </label>
                <input
                  type="number"
                  value={investmentType === 'lumpsum' ? investmentAmount : sipAmount}
                  onChange={(e) => investmentType === 'lumpsum' 
                    ? setInvestmentAmount(Number(e.target.value))
                    : setSipAmount(Number(e.target.value))}
                  className="w-full p-1.5 border rounded text-sm"
                />
                <input
                  type="range"
                  min={investmentType === 'lumpsum' ? 10000 : 1000}
                  max={investmentType === 'lumpsum' ? 10000000 : 100000}
                  step={investmentType === 'lumpsum' ? 10000 : 1000}
                  value={investmentType === 'lumpsum' ? investmentAmount : sipAmount}
                  onChange={(e) => investmentType === 'lumpsum'
                    ? setInvestmentAmount(Number(e.target.value))
                    : setSipAmount(Number(e.target.value))}
                  className="w-full mt-2"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>{investmentType === 'lumpsum' ? '₹10K' : '₹1K'}</span>
                  <span>{investmentType === 'lumpsum' ? '₹1Cr' : '₹1L'}</span>
                </div>
              </div>
            </div>

            {/* Stock Details */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Stock Details</h2>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block font-medium text-sm mb-1.5">Buy Price</label>
                  <input
                    type="number"
                    value={buyPrice}
                    onChange={(e) => setBuyPrice(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                </div>
                <div>
                  <label className="block font-medium text-sm mb-1.5">Current Price</label>
                  <input
                    type="number"
                    value={currentPrice}
                    onChange={(e) => setCurrentPrice(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                </div>
                <div>
                  <label className="block font-medium text-sm mb-1.5">Dividend Yield (%)</label>
                  <input
                    type="number"
                    value={dividendYield}
                    onChange={(e) => setDividendYield(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                </div>
                <div>
                  <label className="block font-medium text-sm mb-1.5">Investment Period (Years)</label>
                  <input
                    type="number"
                    value={investmentPeriod}
                    onChange={(e) => setInvestmentPeriod(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={1}
                    max={30}
                    value={investmentPeriod}
                    onChange={(e) => setInvestmentPeriod(Number(e.target.value))}
                    className="w-full mt-2"
                  />
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
                      max={15}
                      step={0.5}
                      value={inflationRate}
                      onChange={(e) => setInflationRate(Number(e.target.value))}
                      className="w-full mt-2"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>0%</span>
                      <span>15%</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Results Section */}
          <div className="bg-[#113262] text-white rounded-lg h-[530px] sticky top-6">
            <div className="p-4 border-b border-white/20">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold">Return Summary</h3>
                <button onClick={handleShare} className="p-1 hover:bg-blue-700 rounded">
                  <Share size={18} />
                </button>
              </div>
            </div>

            <div className="p-4 flex flex-col h-[calc(100%-68px)] justify-between">
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">
                    {formatCurrency(results.currentValue + results.totalDividends)}
                  </div>
                  <div className="text-sm text-gray-300">Total Value (including dividends)</div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-t border-white/20">
                    <span className="text-sm">Total Investment</span>
                    <span className="font-bold">{formatCurrency(results.totalInvestment)}</span>
                  </div>

                  <div className="flex justify-between items-center py-2 border-t border-white/20">
                    <span className="text-sm">Total Units</span>
                    <span className="font-bold">{results.totalUnits.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-2 border-t border-white/20">
                    <span className="text-sm">Total Dividends</span>
                    <span className="font-bold">{formatCurrency(results.totalDividends)}</span>
                  </div>

                  <div className="flex justify-between items-center py-2 border-t border-white/20">
                    <span className="text-sm">Absolute Return</span>
                    <span className="font-bold">{formatPercentage(results.absoluteReturn)}</span>
                  </div>

                  <div className="flex justify-between items-center py-2 border-t border-white/20">
                    <span className="text-sm">XIRR</span>
                    <span className="font-bold">{formatPercentage(results.annualizedReturn)}</span>
                  </div>

                  <div className="flex justify-between items-center py-2 border-t border-white/20">
                    <span className="text-sm">Real Return (Inflation Adj.)</span>
                    <span className="font-bold">{formatPercentage(results.realReturn)}</span>
                  </div>
                </div>
              </div>

              <button className="w-full bg-orange-400 text-white py-2 rounded-lg mt-4 hover:bg-orange-500 transition-colors text-sm">
                Download Detailed Report →
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

export default SRCalculator;