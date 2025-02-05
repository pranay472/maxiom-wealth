import React, { useState, useEffect } from 'react';
import { Share, ChevronDown, Plus, Minus } from 'lucide-react';

const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
};

const formatPercentage = (value) => {
  return `${value.toFixed(1)}%`;
};

const PRCalculator = () => {
  const [totalPortfolio, setTotalPortfolio] = useState(1000000);
  const [assetClasses, setAssetClasses] = useState([
    { name: 'Equity', currentAllocation: 65, targetAllocation: 60, amount: 650000 },
    { name: 'Debt', currentAllocation: 25, targetAllocation: 30, amount: 250000 },
    { name: 'Gold', currentAllocation: 10, targetAllocation: 10, amount: 100000 }
  ]);
  const [rebalancingThreshold, setRebalancingThreshold] = useState(5);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [showShareToast, setShowShareToast] = useState(false);

  const calculateRebalancing = () => {
    const results = assetClasses.map(asset => {
      const targetAmount = (totalPortfolio * asset.targetAllocation) / 100;
      const difference = targetAmount - asset.amount;
      const isRebalancingNeeded = Math.abs(asset.currentAllocation - asset.targetAllocation) >= rebalancingThreshold;
      
      return {
        ...asset,
        targetAmount,
        difference,
        isRebalancingNeeded
      };
    });

    return {
      needsRebalancing: results.some(r => r.isRebalancingNeeded),
      assets: results
    };
  };

  const handleAssetChange = (index, field, value) => {
    const newAssets = [...assetClasses];
    newAssets[index][field] = value;

    if (field === 'amount') {
      // Recalculate current allocations based on new amount
      const total = newAssets.reduce((sum, asset) => sum + asset.amount, 0);
      newAssets.forEach(asset => {
        asset.currentAllocation = (asset.amount / total) * 100;
      });
      setTotalPortfolio(total);
    }

    setAssetClasses(newAssets);
  };

  const addAssetClass = () => {
    if (assetClasses.length < 6) {
      setAssetClasses([...assetClasses, {
        name: 'New Asset',
        currentAllocation: 0,
        targetAllocation: 0,
        amount: 0
      }]);
    }
  };

  const removeAssetClass = (index) => {
    if (assetClasses.length > 2) {
      const newAssets = assetClasses.filter((_, i) => i !== index);
      setAssetClasses(newAssets);
    }
  };

  const results = calculateRebalancing();

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
        <h1 className="text-2xl font-semibold text-[#113262] mb-2">Portfolio Rebalancing Calculator</h1>
        <h2 className="text-lg text-gray-600">Optimize Your Investment Allocation</h2>
      </div>

      <div className="max-w-5xl mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Input Sections */}
          <div className="lg:col-span-2 space-y-8">
            {/* Portfolio Value */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Total Portfolio Value</h2>
              <div>
                <input
                  type="number"
                  value={totalPortfolio}
                  onChange={(e) => setTotalPortfolio(Number(e.target.value))}
                  className="w-full p-1.5 border rounded text-sm"
                />
                <input
                  type="range"
                  min={100000}
                  max={10000000}
                  step={100000}
                  value={totalPortfolio}
                  onChange={(e) => setTotalPortfolio(Number(e.target.value))}
                  className="w-full mt-2"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>₹1L</span>
                  <span>₹1Cr</span>
                </div>
              </div>
            </div>

            {/* Current Allocation */}
            <div className="bg-white rounded-lg shadow p-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold text-gray-900">Current Allocation</h2>
                <button 
                  onClick={addAssetClass}
                  className="p-1 hover:bg-gray-100 rounded"
                  disabled={assetClasses.length >= 6}
                >
                  <Plus size={20} />
                </button>
              </div>
              <div className="space-y-4">
                {assetClasses.map((asset, index) => (
                  <div key={index} className="grid grid-cols-12 gap-4 items-center">
                    <div className="col-span-3">
                      <input
                        type="text"
                        value={asset.name}
                        onChange={(e) => handleAssetChange(index, 'name', e.target.value)}
                        className="w-full p-1.5 border rounded text-sm"
                        placeholder="Asset Name"
                      />
                    </div>
                    <div className="col-span-7">
                      <input
                        type="number"
                        value={asset.amount}
                        onChange={(e) => handleAssetChange(index, 'amount', Number(e.target.value))}
                        className="w-full p-1.5 border rounded text-sm"
                        placeholder="Amount"
                      />
                    </div>
                    <div className="col-span-1 text-sm text-gray-600">
                      {formatPercentage(asset.currentAllocation)}
                    </div>
                    <div className="col-span-1">
                      {assetClasses.length > 2 && (
                        <button 
                          onClick={() => removeAssetClass(index)}
                          className="p-1 hover:bg-gray-100 rounded"
                        >
                          <Minus size={16} />
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Target Allocation */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Target Allocation</h2>
              <div className="space-y-4">
                {assetClasses.map((asset, index) => (
                  <div key={index} className="grid grid-cols-12 gap-4 items-center">
                    <div className="col-span-3">
                      <span className="text-sm">{asset.name}</span>
                    </div>
                    <div className="col-span-8">
                      <input
                        type="range"
                        min={0}
                        max={100}
                        value={asset.targetAllocation}
                        onChange={(e) => handleAssetChange(index, 'targetAllocation', Number(e.target.value))}
                        className="w-full"
                      />
                    </div>
                    <div className="col-span-1 text-sm text-gray-600">
                      {formatPercentage(asset.targetAllocation)}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Advanced Settings */}
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
                  <div>
                    <label className="block font-medium text-sm mb-1.5">Rebalancing Threshold (%)</label>
                    <input
                      type="number"
                      value={rebalancingThreshold}
                      onChange={(e) => setRebalancingThreshold(Number(e.target.value))}
                      className="w-full p-1.5 border rounded text-sm"
                    />
                    <input
                      type="range"
                      min={1}
                      max={10}
                      value={rebalancingThreshold}
                      onChange={(e) => setRebalancingThreshold(Number(e.target.value))}
                      className="w-full mt-2"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>1%</span>
                      <span>10%</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Results Section */}
          <div className="bg-[#113262] text-white rounded-lg h-[500px] sticky top-6">
            <div className="p-4 border-b border-white/20">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold">Rebalancing Summary</h3>
                <button onClick={handleShare} className="p-1 hover:bg-blue-700 rounded">
                  <Share size={18} />
                </button>
              </div>
            </div>

            <div className="p-4 flex flex-col h-[calc(100%-68px)] justify-between">
              <div className="space-y-4">
                <div className="text-center mb-6">
                  <div className="text-2xl font-bold mb-1">
                    {results.needsRebalancing ? 'Rebalancing Needed' : 'Portfolio Balanced'}
                  </div>
                  <div className="text-sm text-gray-300">
                    {results.needsRebalancing 
                      ? `Deviation exceeds ${rebalancingThreshold}% threshold`
                      : 'All allocations within target range'}
                  </div>
                </div>

                <div className="space-y-3">
                  {results.assets.map((asset, index) => (
                    <div key={index} className="py-2 border-t border-white/20">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium">{asset.name}</span>
                        <span className="text-sm">{formatPercentage(asset.targetAllocation)}</span>
                      </div>
                      {asset.isRebalancingNeeded && (
                        <div className="text-sm">
                          {asset.difference > 0 ? 'Buy' : 'Sell'} {formatCurrency(Math.abs(asset.difference))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <button className="w-full bg-orange-400 text-white py-2 rounded-lg mt-4 hover:bg-orange-500 transition-colors text-sm">
                Download Rebalancing Plan →
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

export default PRCalculator;