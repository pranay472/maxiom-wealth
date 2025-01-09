import React, { useState, useEffect } from 'react';

const WeightedReturnsCalculator = () => {
  const [investmentPeriod, setInvestmentPeriod] = useState('10');
  const [showShareToast, setShowShareToast] = useState(false);
  const [investments, setInvestments] = useState([
    { id: 1, amount: '10000', returns: '12' },
    { id: 2, amount: '10000', returns: '12' }
  ]);

  const calculateWeightedReturns = () => {
    const totalAmount = investments.reduce((sum, inv) => sum + Number(inv.amount.replace(/,/g, '')), 0);
    const weightedReturn = investments.reduce((sum, inv) => {
      const amount = Number(inv.amount.replace(/,/g, ''));
      const returns = Number(inv.returns);
      return sum + (amount * returns / totalAmount);
    }, 0);

    return {
      totalAmount,
      weightedReturn: Number(weightedReturn.toFixed(2)),
      requiredAmount: totalAmount * Math.pow(1 + weightedReturn/100, Number(investmentPeriod))
    };
  };

  const handleAddInvestment = () => {
    const newId = investments.length > 0 ? Math.max(...investments.map(i => i.id)) + 1 : 1;
    setInvestments([...investments, { id: newId, amount: '10000', returns: '12' }]);
  };

  const handleRemoveInvestment = (id) => {
    if (investments.length > 1) {
      setInvestments(investments.filter(inv => inv.id !== id));
    }
  };

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setShowShareToast(true);
      setTimeout(() => setShowShareToast(false), 3000);
    } catch (err) {
      console.error('Failed to copy URL:', err);
    }
  };

  const updateInvestment = (id, field, value) => {
    setInvestments(investments.map(inv => 
      inv.id === id ? { ...inv, [field]: value } : inv
    ));
  };

  const results = calculateWeightedReturns();

  return (
    <div className="w-full bg-white py-12">
      {showShareToast && (
        <div className="fixed top-4 right-4 bg-green-600 text-white px-6 py-3 rounded shadow-lg">
          Link copied!
        </div>
      )}

      <div className="max-w-6xl mx-auto px-6 pt-20">
        <h1 className="text-3xl font-bold text-gray-900">Weighted Average Returns Calculator</h1>
        <p className="text-gray-600 mt-2">Calculate the average weighted return of a group of investments</p>

        <div className="mt-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Investment Period */}
            <div className="lg:col-span-2">
              <div className="mb-2">
                <label className="block font-semibold text-gray-800">Investment Period</label>
                <p className="text-sm text-gray-600 mt-1">Future value after how much years?</p>
              </div>
              <div className="relative mt-6">
                <input
                  type="range"
                  value={investmentPeriod}
                  onChange={(e) => setInvestmentPeriod(e.target.value)}
                  min="1"
                  max="50"
                  step="1"
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between items-center mt-2">
                  <span className="text-sm text-gray-600">1 year</span>
                  <input
                    type="text"
                    value={investmentPeriod}
                    onChange={(e) => setInvestmentPeriod(e.target.value)}
                    className="w-32 text-center border rounded py-1 bg-gray-50"
                  />
                  <span className="text-sm text-gray-600">50 years</span>
                </div>
              </div>
            </div>

            {/* Results Card */}
            <div className="lg:row-span-2">
              <div className="space-y-6">
                <div className="bg-[#113262] text-white p-6 rounded-lg">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg">WEIGHTED AVERAGE RETURNS</span>
                    <button onClick={handleShare}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                      </svg>
                    </button>
                  </div>
                  
                  <div className="text-4xl font-bold mb-6">{Math.round(results.requiredAmount).toLocaleString('en-IN')}</div>
                  <div className="text-sm text-center text-white/80 mb-6">New Investment Required<br/>(By frequency)</div>

                  <div className="space-y-4">
                    <div className="flex justify-between py-2 border-t border-white/20">
                      <span>Weighted Average Returns</span>
                      <span>{results.weightedReturn}%</span>
                    </div>
                    <div className="flex justify-between py-2 border-t border-white/20">
                      <span>Total Invested Amount</span>
                      <span>₹{results.totalAmount.toLocaleString('en-IN')}</span>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-[#F49611] hover:bg-[#F6A839] text-white font-semibold py-3 px-8 rounded-lg transition duration-300">
                  Get Started →
                </button>
              </div>
            </div>

            {/* Dynamic Investment Rows */}
            <div className="lg:col-span-2 space-y-4">
              {investments.map((inv, index) => (
                <div key={inv.id} className="relative bg-gray-50 p-6 rounded-lg">
                  {investments.length > 2 && (
                    <button 
                      onClick={() => handleRemoveInvestment(inv.id)}
                      className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  )}
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Investment Amount */}
                    <div>
                      <label className="block font-semibold text-gray-800">Investment {inv.id}</label>
                      <p className="text-sm text-gray-600 mt-1">How much amount?</p>
                      <div className="relative mt-2">
                        <input
                          type="range"
                          value={inv.amount.replace(/,/g, '')}
                          onChange={(e) => updateInvestment(inv.id, 'amount', Number(e.target.value).toLocaleString('en-IN'))}
                          min="1000"
                          max="100000"
                          step="1000"
                          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                        />
                        <div className="flex justify-between items-center mt-2">
                          <span className="text-sm text-gray-600">1K</span>
                          <input
                            type="text"
                            value={inv.amount}
                            onChange={(e) => updateInvestment(inv.id, 'amount', e.target.value)}
                            className="w-32 text-center border rounded py-1 bg-gray-50"
                          />
                          <span className="text-sm text-gray-600">1L</span>
                        </div>
                      </div>
                    </div>

                    {/* Expected Returns */}
                    <div>
                      <label className="block font-semibold text-gray-800">Expected Returns</label>
                      <p className="text-sm text-gray-600 mt-1">What is the expected returns?</p>
                      <div className="relative mt-2">
                        <input
                          type="range"
                          value={inv.returns}
                          onChange={(e) => updateInvestment(inv.id, 'returns', e.target.value)}
                          min="0"
                          max="20"
                          step="1"
                          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                        />
                        <div className="flex justify-between items-center mt-2">
                          <span className="text-sm text-gray-600">0%</span>
                          <input
                            type="text"
                            value={inv.returns}
                            onChange={(e) => updateInvestment(inv.id, 'returns', e.target.value)}
                            className="w-32 text-center border rounded py-1 bg-gray-50"
                          />
                          <span className="text-sm text-gray-600">20%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <button 
                onClick={handleAddInvestment}
                className="w-full bg-white border-2 border-dashed border-gray-300 rounded-lg p-4 text-gray-500 hover:text-gray-700 hover:border-gray-400 transition-colors"
              >
                + Add Another Investment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeightedReturnsCalculator;