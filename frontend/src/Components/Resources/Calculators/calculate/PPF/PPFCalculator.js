import React, { useState, useEffect } from 'react';

const PPFCalculator = () => {
  const [annualInvestment, setAnnualInvestment] = useState('86,500');
  const [years, setYears] = useState('15');
  const [expectedReturns, setExpectedReturns] = useState('6');
  const [totalInvested, setTotalInvested] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [maturityValue, setMaturityValue] = useState(0);
  const [showShareToast, setShowShareToast] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const investment = urlParams.get('investment');
    const period = urlParams.get('years');
    const returns = urlParams.get('returns');

    if (investment) setAnnualInvestment(investment);
    if (period) setYears(period);
    if (returns) setExpectedReturns(returns);
  }, []);

  const calculatePPF = () => {
    const principal = Number(annualInvestment.replace(/,/g, ''));
    const period = Number(years);
    const rate = Number(expectedReturns) / 100;
    
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
      totalInvested,
      totalInterest,
      maturity: balance
    };
  };

  useEffect(() => {
    const { totalInvested: invested, totalInterest: interest, maturity } = calculatePPF();
    setTotalInvested(invested);
    setTotalInterest(interest);
    setMaturityValue(maturity);

    const newUrl = new URL(window.location.href);
    if (annualInvestment) newUrl.searchParams.set('investment', annualInvestment);
    if (years) newUrl.searchParams.set('years', years);
    if (expectedReturns) newUrl.searchParams.set('returns', expectedReturns);
    window.history.replaceState({}, '', newUrl);
  }, [annualInvestment, years, expectedReturns]);

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
        <h1 className="text-3xl font-bold text-gray-900">PPF Calculator</h1>
        <p className="text-gray-600 mt-2">Calculate the present and future value of your pension fund</p>

        <div className="mt-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Annual Investment */}
            <div>
              <div className="mb-2">
                <label className="block font-semibold text-gray-800">Annual Investment</label>
                <p className="text-sm text-gray-600 mt-1">What is the annual amount you wish to invest?</p>
              </div>
              <div className="relative mt-6">
                <input
                  type="range"
                  value={annualInvestment.replace(/,/g, '')}
                  onChange={(e) => {
                    const value = Number(e.target.value).toLocaleString('en-IN');
                    setAnnualInvestment(value);
                  }}
                  min="500"
                  max="150000"
                  step="500"
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between items-center mt-2">
                  <span className="text-sm text-gray-600">500</span>
                  <input
                    type="text"
                    value={annualInvestment}
                    onChange={(e) => setAnnualInvestment(e.target.value)}
                    className="w-32 text-center border rounded py-1 bg-gray-50"
                  />
                  <span className="text-sm text-gray-600">1.5L</span>
                </div>
              </div>
            </div>

            {/* Investment Period */}
            <div>
              <div className="mb-2">
                <label className="block font-semibold text-gray-800">Investment Period</label>
                <p className="text-sm text-gray-600 mt-1">How many years you wish to invest?</p>
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

            {/* Result Card */}
            <div className="lg:row-span-3">
              <div className="space-y-6">
                <div className="bg-[#113262] text-white p-6 rounded-lg">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg">INVESTED AMOUNT</span>
                    <button onClick={handleShare}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                      </svg>
                    </button>
                  </div>
                  
                  <div className="text-4xl font-bold mb-6">₹{Math.round(totalInvested).toLocaleString('en-IN')}</div>

                  <div className="space-y-4">
                    <div className="flex justify-between py-2 border-t border-white/20">
                      <span>Total Interest</span>
                      <span>₹{Math.round(totalInterest).toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between py-2 border-t border-white/20">
                      <span>Maturity Value</span>
                      <span>₹{Math.round(maturityValue).toLocaleString('en-IN')}</span>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-[#F49611] hover:bg-[#F6A839] text-white font-semibold py-3 px-8 rounded-lg transition duration-300">
                  Get Started →
                </button>
              </div>
            </div>

            {/* Expected Returns */}
            <div className="lg:col-span-1">
              <div className="mb-2">
                <label className="block font-semibold text-gray-800">Expected Returns On Investment</label>
                <p className="text-sm text-gray-600 mt-1">Current PPF interest rate is 6% per annum</p>
              </div>
              <div className="relative mt-6">
                <input
                  type="range"
                  value={expectedReturns}
                  onChange={(e) => setExpectedReturns(e.target.value)}
                  min="5"
                  max="8"
                  step="0.1"
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
                  <span className="text-sm text-gray-600">8%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PPFCalculator;