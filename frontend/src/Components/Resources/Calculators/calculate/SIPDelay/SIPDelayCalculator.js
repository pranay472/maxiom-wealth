import React, { useState, useEffect } from 'react';

const SIPDelayCalculator = () => {
  const [monthlySIP, setMonthlySIP] = useState('25000');
  const [sipPeriod, setSIPPeriod] = useState('10');
  const [expectedReturns, setExpectedReturns] = useState('12');
  const [delayPeriod, setDelayPeriod] = useState('10');
  const [showShareToast, setShowShareToast] = useState(false);

  // Calculate SIP returns with and without delay
  const calculateSIP = () => {
    const P = Number(monthlySIP.replace(/,/g, '')); // Monthly Investment
    const t = Number(sipPeriod); // Investment Period in years
    const r = Number(expectedReturns) / 100 / 12; // Monthly return rate
    const d = Number(delayPeriod); // Delay in months
    const n = t * 12; // Total number of installments
    
    // Calculate amount without delay (Total corpus if started immediately)
    const withoutDelay = P * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
    
    // Calculate projected value (what you'll get with delay)
    const projectedValue = P * ((Math.pow(1 + r, n - d) - 1) / r) * (1 + r);
    
    // Calculate cost of delay
    const costOfDelay = withoutDelay - projectedValue;
    
    // Calculate required monthly investment with delay to reach same corpus as withoutDelay
    const withDelay = P * (withoutDelay / projectedValue);

    return {
      amountWithoutDelay: Math.round(withoutDelay),
      amountWithDelay: Math.round(withDelay),
      costOfDelay: Math.round(costOfDelay),
      projectedValue: Math.round(projectedValue)
    };
  };

  // Update URL parameters when inputs change
  useEffect(() => {
    const newUrl = new URL(window.location.href);
    newUrl.searchParams.set('sip', monthlySIP);
    newUrl.searchParams.set('period', sipPeriod);
    newUrl.searchParams.set('returns', expectedReturns);
    newUrl.searchParams.set('delay', delayPeriod);
    window.history.replaceState({}, '', newUrl);
  }, [monthlySIP, sipPeriod, expectedReturns, delayPeriod]);

  // Read URL parameters on load
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('sip')) setMonthlySIP(urlParams.get('sip'));
    if (urlParams.get('period')) setSIPPeriod(urlParams.get('period'));
    if (urlParams.get('returns')) setExpectedReturns(urlParams.get('returns'));
    if (urlParams.get('delay')) setDelayPeriod(urlParams.get('delay'));
  }, []);

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setShowShareToast(true);
      setTimeout(() => setShowShareToast(false), 3000);
    } catch (err) {
      console.error('Failed to copy URL:', err);
    }
  };

  const results = calculateSIP();

  return (
    <div className="w-full bg-white py-12">
      {showShareToast && (
        <div className="fixed top-4 right-4 bg-green-600 text-white px-6 py-3 rounded shadow-lg">
          Link copied!
        </div>
      )}

      <div className="max-w-6xl mx-auto px-6 pt-20">
        <h1 className="text-3xl font-bold text-gray-900">SIP Delay Cost Calculator</h1>
        <p className="text-gray-600 mt-2">Calculate how much you would lose if you delayed your SIP investment.</p>

        <div className="mt-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Monthly SIP Amount */}
            <div>
              <div className="mb-2">
                <label className="block font-semibold text-gray-800">Monthly SIP Amount</label>
                <p className="text-sm text-gray-600 mt-1">What is the your monthly SIP target value today?</p>
              </div>
              <div className="relative mt-6">
                <input
                  type="range"
                  value={monthlySIP.replace(/,/g, '')}
                  onChange={(e) => setMonthlySIP(Number(e.target.value).toLocaleString('en-IN'))}
                  min="1000"
                  max="100000"
                  step="1000"
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between items-center mt-2">
                  <span className="text-sm text-gray-600">1K</span>
                  <input
                    type="text"
                    value={monthlySIP}
                    onChange={(e) => setMonthlySIP(e.target.value)}
                    className="w-32 text-center border rounded py-1 bg-gray-50"
                  />
                  <span className="text-sm text-gray-600">1L</span>
                </div>
              </div>
            </div>

            {/* SIP Period */}
            <div>
              <div className="mb-2">
                <label className="block font-semibold text-gray-800">SIP Period</label>
                <p className="text-sm text-gray-600 mt-1">How many years you wish to continue your SIP?</p>
              </div>
              <div className="relative mt-6">
                <input
                  type="range"
                  value={sipPeriod}
                  onChange={(e) => setSIPPeriod(e.target.value)}
                  min="1"
                  max="40"
                  step="1"
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between items-center mt-2">
                  <span className="text-sm text-gray-600">1 year</span>
                  <input
                    type="text"
                    value={sipPeriod}
                    onChange={(e) => setSIPPeriod(e.target.value)}
                    className="w-32 text-center border rounded py-1 bg-gray-50"
                  />
                  <span className="text-sm text-gray-600">40 years</span>
                </div>
              </div>
            </div>

            {/* Results Card */}
            <div className="lg:row-span-2">
              <div className="space-y-6">
                <div className="bg-[#113262] text-white p-6 rounded-lg">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg">SIP Amount</span>
                    <button onClick={handleShare}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                      </svg>
                    </button>
                  </div>
                  
                  <div className="text-sm text-center text-white/80 mb-2">Required amount (With Delay)</div>
              <div className="text-4xl font-bold mb-6">₹{results.amountWithDelay.toLocaleString('en-IN')}</div>

                  <div className="space-y-4">
                    <div className="flex justify-between py-2 border-t border-white/20">
                      <span>Without Delay</span>
                      <span>₹{results.projectedValue.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between py-2 border-t border-white/20">
                      <span>Cost of Delay</span>
                      <span>₹{results.costOfDelay.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between py-2 border-t border-white/20">
                      <span>Projected Value</span>
                      <span>₹{results.amountWithoutDelay.toLocaleString('en-IN')}</span>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-[#F49611] hover:bg-[#F6A839] text-white font-semibold py-3 px-8 rounded-lg transition duration-300">
                  Start SIP Now →
                </button>
              </div>
            </div>

            {/* Expected Returns */}
            <div>
              <div className="mb-2">
                <label className="block font-semibold text-gray-800">Expected Returns On Investment</label>
                <p className="text-sm text-gray-600 mt-1">Your expectation of returns on this planned investment</p>
              </div>
              <div className="relative mt-6">
                <input
                  type="range"
                  value={expectedReturns}
                  onChange={(e) => setExpectedReturns(e.target.value)}
                  min="5"
                  max="20"
                  step="1"
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between items-center mt-2">
                  <span className="text-sm text-gray-600">5%</span>
                  <input
                    type="text"
                    value={expectedReturns}
                    onChange={(e) => setExpectedReturns(e.target.value)}
                    className="w-32 text-center border rounded py-1 bg-gray-50"
                  />
                  <span className="text-sm text-gray-600">20%</span>
                </div>
              </div>
            </div>

            {/* Period of Delay */}
            <div>
              <div className="mb-2">
                <label className="block font-semibold text-gray-800">Period of Delay</label>
                <p className="text-sm text-gray-600 mt-1">By how many months you wish to delay your SIP?</p>
              </div>
              <div className="relative mt-6">
                <input
                  type="range"
                  value={delayPeriod}
                  onChange={(e) => setDelayPeriod(e.target.value)}
                  min="1"
                  max="100"
                  step="1"
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between items-center mt-2">
                  <span className="text-sm text-gray-600">1 month</span>
                  <input
                    type="text"
                    value={delayPeriod}
                    onChange={(e) => setDelayPeriod(e.target.value)}
                    className="w-32 text-center border rounded py-1 bg-gray-50"
                  />
                  <span className="text-sm text-gray-600">100 months</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SIPDelayCalculator;