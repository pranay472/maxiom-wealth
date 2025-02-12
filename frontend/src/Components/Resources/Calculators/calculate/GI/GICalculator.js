import React, { useState } from 'react';
import { Share, ChevronDown } from 'lucide-react';

const GICalculator = () => {
  // Investment details
  const [investmentType, setInvestmentType] = useState('oneTime');
  const [investmentAmount, setInvestmentAmount] = useState(50000);
  const [goldPrice, setGoldPrice] = useState(6500);
  
  // Investment period
  const [years, setYears] = useState(5);
  const [monthlyInvestment, setMonthlyInvestment] = useState(5000);
  
  // Growth assumptions
  const [expectedReturn, setExpectedReturn] = useState(8);
  
  // Additional settings
  const [showAdditional, setShowAdditional] = useState(false);
  const [investmentPurity, setInvestmentPurity] = useState('24k');
  const [showShareToast, setShowShareToast] = useState(false);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const formatWeight = (weight) => {
    return new Intl.NumberFormat('en-IN', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(weight);
  };

  const calculateReturns = () => {
    let totalInvestment = 0;
    let goldWeight = 0;
    let futureValue = 0;
    
    const monthlyRate = expectedReturn / (12 * 100);
    const totalMonths = years * 12;
    
    if (investmentType === 'oneTime') {
      totalInvestment = investmentAmount;
      goldWeight = investmentAmount / goldPrice;
      futureValue = investmentAmount * Math.pow(1 + (expectedReturn / 100), years);
    } else {
      // SIP calculation
      totalInvestment = monthlyInvestment * totalMonths;
      for (let i = 0; i < totalMonths; i++) {
        const monthlyGoldWeight = monthlyInvestment / goldPrice;
        goldWeight += monthlyGoldWeight;
        futureValue = (monthlyInvestment + futureValue) * (1 + monthlyRate);
      }
    }

    const purityFactor = investmentPurity === '24k' ? 1 : 0.916; // 22K is 91.6% pure
    goldWeight = goldWeight * purityFactor;

    return {
      totalInvestment: Math.round(totalInvestment),
      goldWeight: goldWeight,
      futureValue: Math.round(futureValue),
      estimatedReturns: Math.round(futureValue - totalInvestment)
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
        <h1 className="text-2xl font-semibold text-[#113262] mb-2">Gold Investment Calculator</h1>
        <h2 className="text-lg text-gray-600">Calculate gold returns with this calculator.</h2>
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
                  onClick={() => setInvestmentType('oneTime')}
                  className={`flex-1 py-2 rounded ${
                    investmentType === 'oneTime'
                      ? 'bg-[#113262] text-white'
                      : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  One-Time Investment
                </button>
                <button
                  onClick={() => setInvestmentType('monthly')}
                  className={`flex-1 py-2 rounded ${
                    investmentType === 'monthly'
                      ? 'bg-[#113262] text-white'
                      : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  Monthly Investment
                </button>
              </div>
            </div>

            {/* Investment Details */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Investment Details</h2>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block font-medium text-sm mb-1.5">
                    {investmentType === 'oneTime' ? 'Investment Amount' : 'Monthly Investment'}
                  </label>
                  <input
                    type="number"
                    value={investmentType === 'oneTime' ? investmentAmount : monthlyInvestment}
                    onChange={(e) =>
                      investmentType === 'oneTime'
                        ? setInvestmentAmount(Number(e.target.value))
                        : setMonthlyInvestment(Number(e.target.value))
                    }
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={investmentType === 'oneTime' ? 10000 : 1000}
                    max={investmentType === 'oneTime' ? 10000000 : 100000}
                    value={investmentType === 'oneTime' ? investmentAmount : monthlyInvestment}
                    onChange={(e) =>
                      investmentType === 'oneTime'
                        ? setInvestmentAmount(Number(e.target.value))
                        : setMonthlyInvestment(Number(e.target.value))
                    }
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>{investmentType === 'oneTime' ? '₹10,000' : '₹1,000'}</span>
                    <span>{investmentType === 'oneTime' ? '₹1Cr' : '₹1L'}</span>
                  </div>
                </div>

                <div>
                  <label className="block font-medium text-sm mb-1.5">Gold Price (per gram)</label>
                  <input
                    type="number"
                    value={goldPrice}
                    onChange={(e) => setGoldPrice(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={4000}
                    max={10000}
                    step={100}
                    value={goldPrice}
                    onChange={(e) => setGoldPrice(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>₹4,000</span>
                    <span>₹10,000</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Growth Assumptions */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Growth Assumptions</h2>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block font-medium text-sm mb-1.5">Expected Return (%)</label>
                  <input
                    type="number"
                    value={expectedReturn}
                    onChange={(e) => setExpectedReturn(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={5}
                    max={15}
                    step={0.5}
                    value={expectedReturn}
                    onChange={(e) => setExpectedReturn(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>5%</span>
                    <span>15%</span>
                  </div>
                </div>

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
                    min={1}
                    max={30}
                    value={years}
                    onChange={(e) => setYears(Number(e.target.value))}
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
                  <label className="block font-medium text-sm mb-2">Gold Purity</label>
                  <select
                    value={investmentPurity}
                    onChange={(e) => setInvestmentPurity(e.target.value)}
                    className="w-full p-2 border rounded text-sm"
                  >
                    <option value="24k">24K - 99.9% Pure</option>
                    <option value="22k">22K - 91.6% Pure</option>
                  </select>
                </div>
              )}
            </div>
          </div>

          {/* Results Section */}
          <div className="bg-[#113262] text-white rounded-lg h-[420px] sticky top-6">
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
                <div className="text-3xl font-bold mb-1">{formatCurrency(results.futureValue)}</div>
                <div className="text-sm text-gray-300">Future Value</div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-t border-white/20">
                  <span className="text-sm">Total Investment</span>
                  <span className="font-bold">{formatCurrency(results.totalInvestment)}</span>
                </div>

                <div className="flex justify-between items-center py-2 border-t border-white/20">
                  <span className="text-sm">Estimated Returns</span>
                  <span className="font-bold">{formatCurrency(results.estimatedReturns)}</span>
                </div>

                <div className="flex justify-between items-center py-2 border-t border-white/20">
                  <span className="text-sm">Gold Weight</span>
                  <span className="font-bold">{formatWeight(results.goldWeight)} grams</span>
                </div>

                <div className="flex justify-between items-center py-2 border-t border-white/20">
                  <span className="text-sm">Gold Purity</span>
                  <span className="font-bold">{investmentPurity.toUpperCase()}</span>
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

export default GICalculator;