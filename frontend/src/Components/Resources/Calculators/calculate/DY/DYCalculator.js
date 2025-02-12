import React, { useState } from 'react';
import { Share, ChevronDown } from 'lucide-react';

const DYCalculator = () => {
  // Stock details
  const [stockPrice, setStockPrice] = useState(100);
  const [annualDividend, setAnnualDividend] = useState(5);
  const [numberOfShares, setNumberOfShares] = useState(100);
  
  // Growth projections
  const [dividendGrowthRate, setDividendGrowthRate] = useState(5);
  const [yearsToProject, setYearsToProject] = useState(5);
  
  // Additional settings
  const [showAdditional, setShowAdditional] = useState(false);
  const [reinvestDividends, setReinvestDividends] = useState(false);
  const [showShareToast, setShowShareToast] = useState(false);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const calculateDividendYield = () => {
    const currentYield = (annualDividend / stockPrice) * 100;
    const totalInvestment = stockPrice * numberOfShares;
    const annualDividendIncome = annualDividend * numberOfShares;
    
    let futureAnnualDividend = annualDividendIncome;
    let totalDividends = 0;
    let finalValue = totalInvestment;
    
    for (let i = 1; i <= yearsToProject; i++) {
      futureAnnualDividend *= (1 + dividendGrowthRate / 100);
      if (reinvestDividends) {
        const additionalShares = futureAnnualDividend / stockPrice;
        finalValue += futureAnnualDividend;
        totalDividends += futureAnnualDividend * (1 + additionalShares);
      } else {
        totalDividends += futureAnnualDividend;
      }
    }

    return {
      yield: currentYield.toFixed(2),
      totalDividends: Math.round(totalDividends),
      finalValue: Math.round(finalValue),
      annualIncome: Math.round(annualDividendIncome)
    };
  };

  const results = calculateDividendYield();

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
        <h1 className="text-2xl font-semibold text-[#113262] mb-2">Dividend Yield Calculator</h1>
        <h2 className="text-lg text-gray-600">Estimate dividend yields with this calculator.</h2>
      </div>

      <div className="max-w-5xl mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Input Sections */}
          <div className="lg:col-span-2 space-y-8">
            {/* Stock Details Section */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Stock Details</h2>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block font-medium text-sm mb-1.5">Stock Price (₹)</label>
                  <input
                    type="number"
                    value={stockPrice}
                    onChange={(e) => setStockPrice(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={1}
                    max={10000}
                    value={stockPrice}
                    onChange={(e) => setStockPrice(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>₹1</span>
                    <span>₹10,000</span>
                  </div>
                </div>

                <div>
                  <label className="block font-medium text-sm mb-1.5">Annual Dividend (₹)</label>
                  <input
                    type="number"
                    value={annualDividend}
                    onChange={(e) => setAnnualDividend(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={0}
                    max={1000}
                    value={annualDividend}
                    onChange={(e) => setAnnualDividend(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>₹0</span>
                    <span>₹1,000</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Investment Details */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Investment Details</h2>
              <div>
                <label className="block font-medium text-sm mb-1.5">Number of Shares</label>
                <input
                  type="number"
                  value={numberOfShares}
                  onChange={(e) => setNumberOfShares(Number(e.target.value))}
                  className="w-full p-1.5 border rounded text-sm"
                />
                <input
                  type="range"
                  min={1}
                  max={10000}
                  value={numberOfShares}
                  onChange={(e) => setNumberOfShares(Number(e.target.value))}
                  className="w-full mt-2"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>1</span>
                  <span>10,000</span>
                </div>
              </div>
            </div>

            {/* Growth Projections */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Growth Projections</h2>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block font-medium text-sm mb-1.5">Dividend Growth Rate (%)</label>
                  <input
                    type="number"
                    value={dividendGrowthRate}
                    onChange={(e) => setDividendGrowthRate(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={0}
                    max={25}
                    step={0.5}
                    value={dividendGrowthRate}
                    onChange={(e) => setDividendGrowthRate(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>0%</span>
                    <span>25%</span>
                  </div>
                </div>

                <div>
                  <label className="block font-medium text-sm mb-1.5">Years to Project</label>
                  <input
                    type="number"
                    value={yearsToProject}
                    onChange={(e) => setYearsToProject(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={1}
                    max={30}
                    value={yearsToProject}
                    onChange={(e) => setYearsToProject(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>1 year</span>
                    <span>30 years</span>
                  </div>
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
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={reinvestDividends}
                      onChange={(e) => setReinvestDividends(e.target.checked)}
                      className="rounded"
                    />
                    <span className="text-sm">Reinvest Dividends</span>
                  </label>
                </div>
              )}
            </div>
          </div>

          {/* Results Section */}
          <div className="bg-[#113262] text-white rounded-lg h-[420px] sticky top-6">
            <div className="p-4 border-b border-white/20">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold">Dividend Summary</h3>
                <button onClick={handleShare} className="p-1 hover:bg-blue-700 rounded">
                  <Share size={18} />
                </button>
              </div>
            </div>

            <div className="p-4">
              <div className="mb-4">
                <div className="text-3xl font-bold mb-1">{results.yield}%</div>
                <div className="text-sm text-gray-300">Dividend Yield</div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-t border-white/20">
                  <span className="text-sm">Total Investment</span>
                  <span className="font-bold">{formatCurrency(stockPrice * numberOfShares)}</span>
                </div>

                <div className="flex justify-between items-center py-2 border-t border-white/20">
                  <span className="text-sm">Annual Dividend Income</span>
                  <span className="font-bold">{formatCurrency(results.annualIncome)}</span>
                </div>

                <div className="flex justify-between items-center py-2 border-t border-white/20">
                  <span className="text-sm">Projected Total Dividends</span>
                  <span className="font-bold">{formatCurrency(results.totalDividends)}</span>
                </div>

                <div className="flex justify-between items-center py-2 border-t border-white/20">
                  <span className="text-sm">Final Investment Value</span>
                  <span className="font-bold">{formatCurrency(results.finalValue)}</span>
                </div>
              </div>

              <button className="w-full bg-orange-400 text-white py-2 rounded-lg mt-4 hover:bg-orange-500 transition-colors text-sm">
                Start Investing →
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

export default DYCalculator;