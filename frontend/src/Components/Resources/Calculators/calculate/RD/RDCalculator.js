import React, { useState, useEffect } from 'react';

const RDCalculator = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState('1,00,000');
  const [months, setMonths] = useState('18');
  const [rateOfInterest, setRateOfInterest] = useState('8');
  const [totalInvested, setTotalInvested] = useState(0);
  const [interestAccrued, setInterestAccrued] = useState(0);
  const [maturityAmount, setMaturityAmount] = useState(0);
  const [showShareToast, setShowShareToast] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const investment = urlParams.get('investment');
    const period = urlParams.get('months');
    const rate = urlParams.get('rate');

    if (investment) setMonthlyInvestment(investment);
    if (period) setMonths(period);
    if (rate) setRateOfInterest(rate);
  }, []);

  const calculateRD = () => {
    const monthlyInstallment = Number(monthlyInvestment.replace(/,/g, '')); // P
    const period = Number(months);
    const rateOfInterestPerYear = Number(rateOfInterest); // R
    const numberOfQuarters = Math.ceil(period / 3); // N
    
    if (monthlyInstallment <= 0 || period <= 0 || rateOfInterestPerYear <= 0) {
      return { totalInvested: 0, interest: 0, maturity: 0 };
    }

    const totalInvested = monthlyInstallment * period;
    
    // Calculate using the standard RD formula:
    // A = P * [(1 + R/(1*00))^N - 1] / (1 - (1 + R/(4*100))^(-1/3))
    
    const quarterlyRate = rateOfInterestPerYear / (4 * 100); // R/(4*100)
    const denominatorBase = 1 + quarterlyRate;
    const numerator = Math.pow(denominatorBase, numberOfQuarters) - 1;
    const denominator = 1 - Math.pow(denominatorBase, -1/3);
    
    const maturityAmount = monthlyInstallment * (numerator / denominator);
    const interestAccrued = maturityAmount - totalInvested;
    
    return {
      totalInvested,
      interest: interestAccrued,
      maturity: maturityAmount
    };
  };

  useEffect(() => {
    const { totalInvested: invested, interest, maturity } = calculateRD();
    setTotalInvested(invested);
    setInterestAccrued(interest);
    setMaturityAmount(maturity);

    const newUrl = new URL(window.location.href);
    if (monthlyInvestment) newUrl.searchParams.set('investment', monthlyInvestment);
    if (months) newUrl.searchParams.set('months', months);
    if (rateOfInterest) newUrl.searchParams.set('rate', rateOfInterest);
    window.history.replaceState({}, '', newUrl);
  }, [monthlyInvestment, months, rateOfInterest]);

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
        <h1 className="text-3xl font-bold text-gray-900">RD Calculator</h1>
        <p className="text-gray-600 mt-2">Plan your finances wisely with our recurring deposit calculator</p>

        <div className="mt-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Monthly Investment */}
            <div>
              <div className="mb-2">
                <label className="block font-semibold text-gray-800">Monthly Investment</label>
                <p className="text-sm text-gray-600 mt-1">What is the amount you wish to invest every month?</p>
              </div>
              <div className="relative mt-6">
                <input
                  type="range"
                  value={monthlyInvestment.replace(/,/g, '')}
                  onChange={(e) => {
                    const value = Number(e.target.value).toLocaleString('en-IN');
                    setMonthlyInvestment(value);
                  }}
                  min="100000"
                  max="10000000"
                  step="10000"
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between items-center mt-2">
                  <span className="text-sm text-gray-600">1L</span>
                  <input
                    type="text"
                    value={monthlyInvestment}
                    onChange={(e) => setMonthlyInvestment(e.target.value)}
                    className="w-32 text-center border rounded py-1 bg-gray-50"
                  />
                  <span className="text-sm text-gray-600">1Cr</span>
                </div>
              </div>
            </div>

            {/* Rate of Interest */}
            <div>
              <div className="mb-2">
                <label className="block font-semibold text-gray-800">Rate Of Interest</label>
                <p className="text-sm text-gray-600 mt-1">Interest rate on your RD every year?</p>
              </div>
              <div className="relative mt-6">
                <input
                  type="range"
                  value={rateOfInterest}
                  onChange={(e) => setRateOfInterest(e.target.value)}
                  min="5"
                  max="20"
                  step="0.1"
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between items-center mt-2">
                  <span className="text-sm text-gray-600">5%</span>
                  <input
                    type="text"
                    value={rateOfInterest}
                    onChange={(e) => setRateOfInterest(e.target.value)}
                    className="w-32 text-center border rounded py-1 bg-gray-50"
                  />
                  <span className="text-sm text-gray-600">20%</span>
                </div>
              </div>
            </div>

            {/* Result Card */}
            <div className="lg:row-span-3">
              <div className="space-y-6">
                <div className="bg-[#113262] text-white p-6 rounded-lg">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg">AMOUNT INVESTED</span>
                    <button onClick={handleShare}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                      </svg>
                    </button>
                  </div>
                  
                  <div className="text-4xl font-bold mb-6">₹{Math.round(totalInvested).toLocaleString('en-IN')}</div>

                  <div className="space-y-4">
                    <div className="flex justify-between py-2 border-t border-white/20">
                      <span>Interest Accrued</span>
                      <span>₹{Math.round(interestAccrued).toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between py-2 border-t border-white/20">
                      <span>Maturity Amount</span>
                      <span>₹{Math.round(maturityAmount).toLocaleString('en-IN')}</span>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-[#F49611] hover:bg-[#F6A839] text-white font-semibold py-3 px-8 rounded-lg transition duration-300">
                  Get Started →
                </button>
              </div>
            </div>

            {/* Investment Period */}
            <div className="lg:col-span-1">
              <div className="mb-2">
                <label className="block font-semibold text-gray-800">Investment Period</label>
                <p className="text-sm text-gray-600 mt-1">How many months wish to invest?</p>
              </div>
              <div className="relative mt-6">
                <input
                  type="range"
                  value={months}
                  onChange={(e) => setMonths(e.target.value)}
                  min="12"
                  max="60"
                  step="1"
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between items-center mt-2">
                  <span className="text-sm text-gray-600">12 months</span>
                  <input
                    type="text"
                    value={months}
                    onChange={(e) => setMonths(e.target.value)}
                    className="w-32 text-center border rounded py-1 bg-gray-50"
                  />
                  <span className="text-sm text-gray-600">60 months</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RDCalculator;