import React, { useState, useEffect } from 'react';

const FDCalculator = () => {
  const [principalAmount, setPrincipalAmount] = useState('1,00,000');
  const [interestRate, setInterestRate] = useState('8');
  const [years, setYears] = useState('6');
  const [compoundingFrequency, setCompoundingFrequency] = useState('annually');
  const [maturityAmount, setMaturityAmount] = useState(0);
  const [interestAccrued, setInterestAccrued] = useState(0);
  const [showShareToast, setShowShareToast] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const principal = urlParams.get('principal');
    const rate = urlParams.get('rate');
    const period = urlParams.get('years');
    const frequency = urlParams.get('frequency');

    if (principal) setPrincipalAmount(principal);
    if (rate) setInterestRate(rate);
    if (period) setYears(period);
    if (frequency) setCompoundingFrequency(frequency);
  }, []);

  const calculateFDInterest = () => {
    const frequencies = {
      'annually': 1,
      'semi-annually': 2,
      'quarterly': 4,
      'monthly': 12
    };

    const p = Number(principalAmount.replace(/,/g, ''));
    const r = Number(interestRate);
    const t = Number(years);
    const n = frequencies[compoundingFrequency];
    
    if (p <= 0 || r <= 0 || t <= 0) return { maturity: 0, interest: 0 };
    
    const amount = p * Math.pow(1 + (r / (100 * n)), n * t);
    const interest = amount - p;
    return { maturity: amount, interest };
  };

  useEffect(() => {
    const { maturity, interest } = calculateFDInterest();
    setMaturityAmount(maturity);
    setInterestAccrued(interest);

    const newUrl = new URL(window.location.href);
    if (principalAmount) newUrl.searchParams.set('principal', principalAmount);
    if (interestRate) newUrl.searchParams.set('rate', interestRate);
    if (years) newUrl.searchParams.set('years', years);
    if (compoundingFrequency) newUrl.searchParams.set('frequency', compoundingFrequency);
    window.history.replaceState({}, '', newUrl);
  }, [principalAmount, interestRate, years, compoundingFrequency]);

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
        <h1 className="text-3xl font-bold text-gray-900">FD Calculator</h1>
        <p className="text-gray-600 mt-2">Calculate the returns on a fixed deposit over a period.</p>

        <div className="mt-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Principal Amount */}
            <div>
              <div className="mb-2">
                <label className="block font-semibold text-gray-800">Principal Amount</label>
                <p className="text-sm text-gray-600 mt-1">What is the amount you wish to invest today?</p>
              </div>
              <div className="relative mt-6">
                <input
                  type="range"
                  value={principalAmount.replace(/,/g, '')}
                  onChange={(e) => {
                    const value = Number(e.target.value).toLocaleString('en-IN');
                    setPrincipalAmount(value);
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
                    value={principalAmount}
                    onChange={(e) => setPrincipalAmount(e.target.value)}
                    className="w-32 text-center border rounded py-1 bg-gray-50"
                  />
                  <span className="text-sm text-gray-600">10Cr</span>
                </div>
              </div>
            </div>

            {/* Interest Rate */}
            <div>
              <div className="mb-2">
                <label className="block font-semibold text-gray-800">Rate Of Interest</label>
                <p className="text-sm text-gray-600 mt-1">Interest rate on your FD</p>
              </div>
              <div className="relative mt-6">
                <input
                  type="range"
                  value={interestRate}
                  onChange={(e) => setInterestRate(e.target.value)}
                  min="5"
                  max="20"
                  step="0.1"
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between items-center mt-2">
                  <span className="text-sm text-gray-600">5%</span>
                  <input
                    type="text"
                    value={interestRate}
                    onChange={(e) => setInterestRate(e.target.value)}
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
                  
                  <div className="text-4xl font-bold mb-6">₹{principalAmount}</div>

                  <select 
                    value={compoundingFrequency}
                    onChange={(e) => setCompoundingFrequency(e.target.value)}
                    className="w-full bg-[#1C52A0] text-white p-2 rounded mb-6"
                  >
                    <option value="monthly">Invested Monthly</option>
                    <option value="quarterly">Invested Quarterly</option>
                    <option value="semi-annually">Invested Semi Annually</option>
                    <option value="annually">Invested Annually</option>
                  </select>

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

export default FDCalculator;