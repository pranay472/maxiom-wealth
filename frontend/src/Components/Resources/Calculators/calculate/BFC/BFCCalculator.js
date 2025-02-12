import React, { useState } from 'react';
import { Share, ChevronDown } from 'lucide-react';

const BFCCalculator = () => {
  // Fund Type
  const [fundType, setFundType] = useState('equity');
  
  // Investment details
  const [investmentAmount, setInvestmentAmount] = useState(100000);
  const [investmentPeriod, setInvestmentPeriod] = useState(5);
  
  // Fund metrics
  const [expenseRatio, setExpenseRatio] = useState(1.5);
  const [averageAUM, setAverageAUM] = useState(1000);
  const [returnRate, setReturnRate] = useState(12);
  
  // Additional settings
  const [showAdditional, setShowAdditional] = useState(false);
  const [includeDirectPlan, setIncludeDirectPlan] = useState(true);
  const [showShareToast, setShowShareToast] = useState(false);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const calculateFundMetrics = () => {
    // Calculate expense impact
    const expenseCost = (investmentAmount * expenseRatio / 100) * investmentPeriod;
    
    // Calculate returns with and without expenses
    const grossReturns = investmentAmount * Math.pow(1 + returnRate/100, investmentPeriod);
    const netReturns = grossReturns - expenseCost;
    
    // Calculate fund score (basic example)
    let score = 100;
    score -= (expenseRatio * 10); // Higher expense ratio reduces score
    score += (Math.min(averageAUM, 10000) / 100); // Higher AUM adds to score up to a limit
    score = Math.min(100, Math.max(0, score)); // Keep score between 0 and 100

    return {
      fundScore: Math.round(score),
      expenseCost: Math.round(expenseCost),
      netReturns: Math.round(netReturns),
      aumRating: averageAUM < 500 ? 'Small' : averageAUM < 2000 ? 'Medium' : 'Large'
    };
  };

  const results = calculateFundMetrics();

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
        <h1 className="text-2xl font-semibold text-[#113262] mb-2">Better Funds Checker</h1>
        <h2 className="text-lg text-gray-600">Check impact of getting stuck in bad investmetns with Better Funds Calculator</h2>
      </div>

      <div className="max-w-5xl mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Input Sections */}
          <div className="lg:col-span-2 space-y-8">
            {/* Fund Type */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Fund Type</h2>
              <div className="flex gap-4">
                <button
                  onClick={() => setFundType('equity')}
                  className={`flex-1 py-2 rounded ${
                    fundType === 'equity'
                      ? 'bg-[#113262] text-white'
                      : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  Equity
                </button>
                <button
                  onClick={() => setFundType('debt')}
                  className={`flex-1 py-2 rounded ${
                    fundType === 'debt'
                      ? 'bg-[#113262] text-white'
                      : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  Debt
                </button>
                <button
                  onClick={() => setFundType('hybrid')}
                  className={`flex-1 py-2 rounded ${
                    fundType === 'hybrid'
                      ? 'bg-[#113262] text-white'
                      : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  Hybrid
                </button>
              </div>
            </div>

            {/* Investment Details */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Investment Details</h2>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block font-medium text-sm mb-1.5">Investment Amount</label>
                  <input
                    type="number"
                    value={investmentAmount}
                    onChange={(e) => setInvestmentAmount(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={1000}
                    max={10000000}
                    value={investmentAmount}
                    onChange={(e) => setInvestmentAmount(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>₹1,000</span>
                    <span>₹1Cr</span>
                  </div>
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
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>1 year</span>
                    <span>30 years</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Fund Metrics */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Fund Metrics</h2>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block font-medium text-sm mb-1.5">Expense Ratio (%)</label>
                  <input
                    type="number"
                    value={expenseRatio}
                    onChange={(e) => setExpenseRatio(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={0.1}
                    max={2.5}
                    step={0.1}
                    value={expenseRatio}
                    onChange={(e) => setExpenseRatio(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>0.1%</span>
                    <span>2.5%</span>
                  </div>
                </div>

                <div>
                  <label className="block font-medium text-sm mb-1.5">Expected Return Rate (%)</label>
                  <input
                    type="number"
                    value={returnRate}
                    onChange={(e) => setReturnRate(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={4}
                    max={20}
                    step={0.5}
                    value={returnRate}
                    onChange={(e) => setReturnRate(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>4%</span>
                    <span>20%</span>
                  </div>
                </div>

                <div>
                  <label className="block font-medium text-sm mb-1.5">Average AUM (₹ Crores)</label>
                  <input
                    type="number"
                    value={averageAUM}
                    onChange={(e) => setAverageAUM(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={100}
                    max={50000}
                    value={averageAUM}
                    onChange={(e) => setAverageAUM(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>₹100 Cr</span>
                    <span>₹50,000 Cr</span>
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
                      checked={includeDirectPlan}
                      onChange={(e) => setIncludeDirectPlan(e.target.checked)}
                      className="rounded"
                    />
                    <span className="text-sm">Include Direct Plan Analysis</span>
                  </label>
                </div>
              )}
            </div>
          </div>

          {/* Results Section */}
          <div className="bg-[#113262] text-white rounded-lg h-[420px] sticky top-6">
            <div className="p-4 border-b border-white/20">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold">Fund Analysis</h3>
                <button onClick={handleShare} className="p-1 hover:bg-blue-700 rounded">
                  <Share size={18} />
                </button>
              </div>
            </div>

            <div className="p-4">
              <div className="mb-4">
                <div className="text-3xl font-bold mb-1">{results.fundScore}</div>
                <div className="text-sm text-gray-300">Fund Score (out of 100)</div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-t border-white/20">
                  <span className="text-sm">Total Investment</span>
                  <span className="font-bold">{formatCurrency(investmentAmount)}</span>
                </div>

                <div className="flex justify-between items-center py-2 border-t border-white/20">
                  <span className="text-sm">Net Returns</span>
                  <span className="font-bold">{formatCurrency(results.netReturns)}</span>
                </div>

                <div className="flex justify-between items-center py-2 border-t border-white/20">
                  <span className="text-sm">Expense Cost Impact</span>
                  <span className="font-bold">{formatCurrency(results.expenseCost)}</span>
                </div>

                <div className="flex justify-between items-center py-2 border-t border-white/20">
                  <span className="text-sm">Fund Size Rating</span>
                  <span className="font-bold">{results.aumRating}</span>
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

export default BFCCalculator;