import React, { useState, useEffect } from 'react';
import { Share, ChevronDown } from 'lucide-react';

const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
};

const SIPDelayCalculator = () => {
  const [monthlySIP, setMonthlySIP] = useState(25000);
  const [sipPeriod, setSIPPeriod] = useState(10);
  const [expectedReturns, setExpectedReturns] = useState(12);
  const [delayPeriod, setDelayPeriod] = useState(10);
  const [showShareToast, setShowShareToast] = useState(false);

  const calculateSIP = () => {
    const P = monthlySIP;
    const t = sipPeriod;
    const r = expectedReturns / 100 / 12;
    const d = delayPeriod;
    const n = t * 12;

    const withoutDelay = P * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
    const projectedValue = P * ((Math.pow(1 + r, n - d) - 1) / r) * (1 + r);
    const costOfDelay = withoutDelay - projectedValue;
    const withDelay = P * (withoutDelay / projectedValue);

    return {
      amountWithoutDelay: Math.round(withoutDelay),
      amountWithDelay: Math.round(withDelay),
      costOfDelay: Math.round(costOfDelay),
      projectedValue: Math.round(projectedValue)
    };
  };

  const results = calculateSIP();

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
        <h1 className="text-2xl font-semibold text-[#113262] mb-2">SIP Delay Cost Calculator</h1>
        <h2 className="text-lg text-gray-600">Calculate the Cost of Delaying Your Investments</h2>
      </div>

      <div className="max-w-5xl mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Input Sections */}
          <div className="lg:col-span-2 space-y-8">
            {/* Investment Details */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Investment Details</h2>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block font-medium text-sm mb-1.5">Monthly SIP Amount</label>
                  <input
                    type="number"
                    value={monthlySIP}
                    onChange={(e) => setMonthlySIP(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={1000}
                    max={100000}
                    step={1000}
                    value={monthlySIP}
                    onChange={(e) => setMonthlySIP(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>₹1K</span>
                    <span>₹1L</span>
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
                    max={20}
                    step={1}
                    value={expectedReturns}
                    onChange={(e) => setExpectedReturns(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>5%</span>
                    <span>20%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Time Periods */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow p-4">
                <h2 className="text-lg font-bold text-gray-900 mb-4">SIP Period</h2>
                <div>
                  <label className="block font-medium text-sm mb-1.5">Years</label>
                  <input
                    type="number"
                    value={sipPeriod}
                    onChange={(e) => setSIPPeriod(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={1}
                    max={40}
                    value={sipPeriod}
                    onChange={(e) => setSIPPeriod(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>1 Year</span>
                    <span>40 Years</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-4">
                <h2 className="text-lg font-bold text-gray-900 mb-4">Delay Period</h2>
                <div>
                  <label className="block font-medium text-sm mb-1.5">Months</label>
                  <input
                    type="number"
                    value={delayPeriod}
                    onChange={(e) => setDelayPeriod(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={1}
                    max={100}
                    value={delayPeriod}
                    onChange={(e) => setDelayPeriod(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>1 Month</span>
                    <span>100 Months</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Information Note */}
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm text-blue-800">
                Note: Calculations assume monthly compounding. Delay period reduces effective investment tenure.
              </p>
            </div>
          </div>

          {/* Results Section */}
          <div className="bg-[#113262] text-white rounded-lg h-[360px] sticky top-6">
            <div className="p-4 border-b border-white/20">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold">Delay Impact</h3>
                <button onClick={handleShare} className="p-1 hover:bg-blue-700 rounded">
                  <Share size={18} />
                </button>
              </div>
            </div>

            <div className="p-4 flex flex-col h-[calc(100%-68px)] justify-between">
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">
                    {formatCurrency(results.costOfDelay)}
                  </div>
                  <div className="text-sm text-gray-300">Cost of Delay</div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-t border-white/20">
                    <span className="text-sm">Without Delay</span>
                    <span className="font-bold">{formatCurrency(results.amountWithoutDelay)}</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-2 border-t border-white/20">
                    <span className="text-sm">With Delay</span>
                    <span className="font-bold">{formatCurrency(results.projectedValue)}</span>
                  </div>

                  <div className="flex justify-between items-center py-2 border-t border-white/20">
                    <span className="text-sm">Required SIP</span>
                    <span className="font-bold">{formatCurrency(results.amountWithDelay)}</span>
                  </div>
                </div>
              </div>

              <button className="w-full bg-orange-400 text-white py-2 rounded-lg mt-4 hover:bg-orange-500 transition-colors text-sm">
                Start SIP Immediately →
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

export default SIPDelayCalculator;