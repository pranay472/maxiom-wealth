import React, { useState, useEffect } from 'react';

const CAGRCalculator = () => {
  const [initialInvestment, setInitialInvestment] = useState('2,57,00,000');
  const [futureValue, setFutureValue] = useState('14,44,00,000');
  const [years, setYears] = useState('12');
  const [cagr, setCAGR] = useState(15.47);
  const [showShareToast, setShowShareToast] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const initial = urlParams.get('initial');
    const future = urlParams.get('future');
    const period = urlParams.get('years');

    if (initial) setInitialInvestment(initial);
    if (future) setFutureValue(future);
    if (period) setYears(period);
  }, []);

  const calculateCAGR = () => {
    const init = Number(initialInvestment.replace(/,/g, ''));
    const final = Number(futureValue.replace(/,/g, ''));
    const period = Number(years);
    
    if (init <= 0 || final <= 0 || period <= 0) return 0;
    return (Math.pow(final / init, 1 / period) - 1) * 100;
  };

  useEffect(() => {
    const result = calculateCAGR();
    setCAGR(Number.isFinite(result) ? result : 0);

    const newUrl = new URL(window.location.href);
    if (initialInvestment) newUrl.searchParams.set('initial', initialInvestment);
    if (futureValue) newUrl.searchParams.set('future', futureValue);
    if (years) newUrl.searchParams.set('years', years);
    window.history.replaceState({}, '', newUrl);
  }, [initialInvestment, futureValue, years]);

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
    <div className="w-full bg-white py-12">
      {showShareToast && (
        <div className="fixed top-4 right-4 bg-green-600 text-white px-6 py-3 rounded shadow-lg">
          Link copied!
        </div>
      )}

      <div className="max-w-6xl mx-auto px-6 pt-20">
        <h1 className="text-3xl font-bold text-gray-900">CAGR Calculator</h1>
        <p className="text-gray-600 mt-2">Calculate the compound annual growth rate of your investment</p>

        <div className="mt-8">
          {/* First Row - Two inputs and result */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* Initial Investment */}
            <div>
              <div className="mb-2">
                <label className="block font-semibold text-gray-800">Initial Investment Amount</label>
                <p className="text-sm text-gray-600 mt-1">What is the amount you wish to invest today?</p>
              </div>
              <div className="relative mt-6">
                <input
                  type="range"
                  value={initialInvestment.replace(/,/g, '')}
                  onChange={(e) => {
                    const value = Number(e.target.value).toLocaleString('en-IN');
                    setInitialInvestment(value);
                  }}
                  min="100000"
                  max="100000000"
                  step="100000"
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between items-center mt-2">
                  <span className="text-sm text-gray-600">1L</span>
                  <input
                    type="text"
                    value={initialInvestment}
                    onChange={(e) => setInitialInvestment(e.target.value)}
                    className="w-32 text-center border rounded py-1 bg-gray-50"
                  />
                  <span className="text-sm text-gray-600">10Cr</span>
                </div>
              </div>
            </div>

            {/* Future Value */}
            <div>
              <div className="mb-2">
                <label className="block font-semibold text-gray-800">Future Value of Investment</label>
                <p className="text-sm text-gray-600 mt-1">What is the expected amount of your investment?</p>
              </div>
              <div className="relative mt-6">
                <input
                  type="range"
                  value={futureValue.replace(/,/g, '')}
                  onChange={(e) => {
                    const value = Number(e.target.value).toLocaleString('en-IN');
                    setFutureValue(value);
                  }}
                  min="100000"
                  max="500000000"
                  step="100000"
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between items-center mt-2">
                  <span className="text-sm text-gray-600">1L</span>
                  <input
                    type="text"
                    value={futureValue}
                    onChange={(e) => setFutureValue(e.target.value)}
                    className="w-32 text-center border rounded py-1 bg-gray-50"
                  />
                  <span className="text-sm text-gray-600">50Cr</span>
                </div>
              </div>
            </div>

            {/* CAGR Result Card */}
            <div>
              <div className="space-y-6">
                <div className="bg-[#113262] text-white p-6 rounded-lg relative overflow-hidden">
                  {/* Premium Background Pattern */}
                  <div className="absolute inset-0" style={{
                    backgroundImage: `
                      linear-gradient(45deg, transparent 25%, rgba(255,255,255,0.05) 25%), 
                      linear-gradient(-45deg, transparent 25%, rgba(255,255,255,0.05) 25%),
                      linear-gradient(45deg, rgba(255,255,255,0.05) 75%, transparent 75%),
                      linear-gradient(-45deg, rgba(255,255,255,0.05) 75%, transparent 75%)
                    `,
                    backgroundSize: '40px 40px',
                    backgroundPosition: '0 0, 0 20px, 20px -20px, -20px 0px'
                  }}></div>
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0" style={{
                    background: 'linear-gradient(135deg, rgba(66,153,225,0.1) 0%, rgba(49,130,206,0) 100%)'
                  }}></div>

                  {/* Animated Lines */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `
                        repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)
                      `,
                      animation: 'slide 20s linear infinite'
                    }}></div>
                  </div>

                  <style jsx>{`
                    @keyframes slide {
                      0% { background-position: 0 0; }
                      100% { background-position: 40px 40px; }
                    }
                  `}</style>
                  
                  <div className="relative z-10">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-lg">CAGR</span>
                      <button onClick={handleShare} className="text-white hover:opacity-80">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                        </svg>
                      </button>
                    </div>
                    <div className="text-4xl font-bold">{cagr.toFixed(2)}%</div>
                  </div>
                </div>

                {/* Get Started Button */}
                <button className="w-full bg-[#F49611] hover:bg-[#F6A839] text-white font-semibold py-3 px-8 rounded-lg transition duration-300">
                  Get Started →
                </button>
              </div>
            </div>
          </div>

          {/* Second Row - Investment Period */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Investment Period */}
            <div>
              <div className="mb-2">
                <label className="block font-semibold text-gray-800">Investment Period</label>
                <p className="text-sm text-gray-600 mt-1">How many years till you wish to invest?</p>
              </div>
              <div className="relative mt-6">
                <input
                  type="range"
                  value={years}
                  onChange={(e) => setYears(e.target.value)}
                  min="5"
                  max="25"
                  step="1"
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between items-center mt-2">
                  <span className="text-sm text-gray-600">5 years</span>
                  <input
                    type="text"
                    value={years}
                    onChange={(e) => setYears(e.target.value)}
                    className="w-32 text-center border rounded py-1 bg-gray-50"
                  />
                  <span className="text-sm text-gray-600">25 years</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CAGRCalculator;