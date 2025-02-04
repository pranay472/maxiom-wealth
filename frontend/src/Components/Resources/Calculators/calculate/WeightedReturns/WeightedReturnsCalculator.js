import React, { useState } from 'react';
import { Share, ChevronDown } from 'lucide-react';

const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
};

const WeightedReturnsCalculator = () => {
  const [investmentPeriod, setInvestmentPeriod] = useState(10);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [investments, setInvestments] = useState([
    { id: 1, amount: 10000, returns: 12 },
    { id: 2, amount: 10000, returns: 12 }
  ]);

  const calculateWeightedReturns = () => {
    const totalAmount = investments.reduce((sum, inv) => sum + inv.amount, 0);
    const weightedReturn = investments.reduce((sum, inv) => 
      sum + (inv.amount * inv.returns / totalAmount), 0
    );
    const requiredAmount = totalAmount * Math.pow(1 + weightedReturn/100, investmentPeriod);

    return {
      totalAmount,
      weightedReturn: Number(weightedReturn.toFixed(2)),
      requiredAmount: Math.round(requiredAmount)
    };
  };

  const results = calculateWeightedReturns();

  const handleAddInvestment = () => {
    const newId = investments.length > 0 ? Math.max(...investments.map(i => i.id)) + 1 : 1;
    setInvestments([...investments, { id: newId, amount: 10000, returns: 12 }]);
  };

  const handleRemoveInvestment = (id) => {
    if (investments.length > 1) {
      setInvestments(investments.filter(inv => inv.id !== id));
    }
  };

  const updateInvestment = (id, field, value) => {
    setInvestments(investments.map(inv => 
      inv.id === id ? { ...inv, [field]: Number(value) } : inv
    ));
  };

  return (
    <div className="calculator-container pt-24">
      <div className="calculator-header text-center mb-8">
        <h1 className="text-2xl font-semibold text-[#113262] mb-2">Weighted Returns Tool</h1>
        <h2 className="text-lg text-gray-600">Achieve Financial Goals with Weighted Average Returns Calculator</h2>
      </div>

      <div className="max-w-5xl mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Input Sections */}
          <div className="lg:col-span-2 space-y-8">
            {/* Investment Period */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Investment Horizon</h2>
              <div>
                <label className="block font-medium text-sm mb-1.5">Years</label>
                <input
                  type="number"
                  value={investmentPeriod}
                  onChange={(e) => setInvestmentPeriod(Number(e.target.value))}
                  className="w-full p-1.5 border rounded text-sm"
                />
                <input
                  type="range"
                  min={1}
                  max={50}
                  value={investmentPeriod}
                  onChange={(e) => setInvestmentPeriod(Number(e.target.value))}
                  className="w-full mt-2"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>1 Year</span>
                  <span>50 Years</span>
                </div>
              </div>
            </div>

            {/* Investment List */}
            <div className="space-y-4">
              {investments.map((inv) => (
                <div key={inv.id} className="bg-white rounded-lg shadow p-4 relative">
                  {investments.length > 1 && (
                    <button
                      onClick={() => handleRemoveInvestment(inv.id)}
                      className="absolute top-4 right-4 text-red-500 hover:text-red-700"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  )}
                  
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block font-medium text-sm mb-1.5">Investment Amount</label>
                      <input
                        type="number"
                        value={inv.amount}
                        onChange={(e) => updateInvestment(inv.id, 'amount', e.target.value)}
                        className="w-full p-1.5 border rounded text-sm"
                      />
                      <input
                        type="range"
                        min={1000}
                        max={100000}
                        step={1000}
                        value={inv.amount}
                        onChange={(e) => updateInvestment(inv.id, 'amount', e.target.value)}
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
                        value={inv.returns}
                        onChange={(e) => updateInvestment(inv.id, 'returns', e.target.value)}
                        className="w-full p-1.5 border rounded text-sm"
                      />
                      <input
                        type="range"
                        min={0}
                        max={20}
                        step={1}
                        value={inv.returns}
                        onChange={(e) => updateInvestment(inv.id, 'returns', e.target.value)}
                        className="w-full mt-2"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>0%</span>
                        <span>20%</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <button
                onClick={handleAddInvestment}
                className="w-full bg-white border-2 border-dashed border-gray-300 rounded-lg p-4 text-gray-500 hover:text-gray-700 hover:border-gray-400 transition-colors"
              >
                + Add Investment
              </button>
            </div>

            {/* Additional Modifications */}
            <div className="bg-white rounded-lg shadow">
              <button
                onClick={() => setShowAdvanced(!showAdvanced)}
                className="w-full p-4 flex justify-between items-center hover:bg-gray-50"
              >
                <h2 className="text-lg font-bold text-gray-900">Advanced Settings</h2>
                <ChevronDown 
                  className={`transform transition-transform ${showAdvanced ? 'rotate-180' : ''}`}
                  size={20}
                />
              </button>
              
              {showAdvanced && (
                <div className="p-4 border-t">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block font-medium text-sm mb-1.5">Inflation Rate (%)</label>
                      <input
                        type="number"
                        value={0}
                        disabled
                        className="w-full p-1.5 border rounded text-sm bg-gray-50"
                      />
                    </div>
                    <div>
                      <label className="block font-medium text-sm mb-1.5">Tax Rate (%)</label>
                      <input
                        type="number"
                        value={0}
                        disabled
                        className="w-full p-1.5 border rounded text-sm bg-gray-50"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Results Section */}
          <div className="bg-[#113262] text-white rounded-lg h-[300px] sticky top-6">
            <div className="p-4 border-b border-white/20">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold">Portfolio Summary</h3>
                <button className="p-1 hover:bg-blue-700 rounded">
                  <Share size={18} />
                </button>
              </div>
            </div>

            <div className="p-4 flex flex-col h-[calc(100%-68px)] justify-between">
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">
                    {formatCurrency(results.requiredAmount)}
                  </div>
                  <div className="text-sm text-gray-300">Projected Value</div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-t border-white/20">
                    <span className="text-sm">Weighted Returns</span>
                    <span className="font-bold">{results.weightedReturn}%</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-2 border-t border-white/20">
                    <span className="text-sm">Total Invested</span>
                    <span className="font-bold">{formatCurrency(results.totalAmount)}</span>
                  </div>
                </div>
              </div>

              <button className="w-full bg-orange-400 text-white py-2 rounded-lg mt-4 hover:bg-orange-500 transition-colors text-sm">
                Analyze Portfolio →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeightedReturnsCalculator;