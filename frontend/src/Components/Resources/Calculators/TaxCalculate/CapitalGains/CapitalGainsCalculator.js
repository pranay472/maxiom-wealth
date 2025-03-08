import React, { useState, useEffect } from 'react';
import { Share, ChevronDown, HelpCircle } from 'lucide-react';

const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
};

const CapitalGainsCalculator = () => {
  // State for basic inputs
  const [assetType, setAssetType] = useState('equity');
  const [purchasePrice, setPurchasePrice] = useState(1000000);
  const [sellingPrice, setSellingPrice] = useState(1500000);
  const [holdingPeriod, setHoldingPeriod] = useState(24);
  
  // State for additional inputs
  const [purchaseDate, setPurchaseDate] = useState('2020-01-01');
  const [sellDate, setSellDate] = useState('2023-01-01');
  const [expenses, setExpenses] = useState(20000);
  
  // State for advanced settings
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [indexationApplicable, setIndexationApplicable] = useState(true);
  const [costInflationIndex, setCostInflationIndex] = useState({
    '2001': 100,
    '2017': 272,
    '2018': 280,
    '2019': 289,
    '2020': 301,
    '2021': 317,
    '2022': 331,
    '2023': 348,
    '2024': 365
  });
  
  // State for share toast
  const [showShareToast, setShowShareToast] = useState(false);
  
  // State for tooltips
  const [showToolTip, setShowToolTip] = useState('');
  
  // State for calculation results
  const [result, setResult] = useState({
    capitalGains: 0,
    capitalGainsType: 'Long Term',
    indexedCost: 0,
    taxRate: 0,
    taxAmount: 0,
    effectiveTaxRate: 0,
    netProceeds: 0
  });

  // Calculate capital gains tax
  const calculateCapitalGainsTax = () => {
    // Determine if gains are short-term or long-term
    // For equity and equity mutual funds: >12 months = long term
    // For other assets: >36 months = long term
    let isLongTerm = false;
    
    if (assetType === 'equity' || assetType === 'equityMF') {
      isLongTerm = holdingPeriod > 12;
    } else {
      isLongTerm = holdingPeriod > 36;
    }
    
    const capitalGainsType = isLongTerm ? 'Long Term' : 'Short Term';
    
    // Calculate acquisition cost with indexation if applicable
    let acquisitionCost = purchasePrice;
    let indexedCost = purchasePrice;
    
    // Apply indexation for long-term capital gains if applicable
    if (isLongTerm && indexationApplicable && assetType !== 'equity' && assetType !== 'equityMF') {
      const purchaseYear = new Date(purchaseDate).getFullYear();
      const sellYear = new Date(sellDate).getFullYear();
      
      if (costInflationIndex[purchaseYear] && costInflationIndex[sellYear]) {
        indexedCost = Math.round((purchasePrice * costInflationIndex[sellYear]) / costInflationIndex[purchaseYear]);
      }
      acquisitionCost = indexedCost;
    }
    
    // Calculate capital gains
    const capitalGains = sellingPrice - acquisitionCost - expenses;
    
    // Determine tax rate and calculate tax amount
    let taxRate = 0;
    let taxAmount = 0;
    
    if (isLongTerm) {
      if (assetType === 'equity' || assetType === 'equityMF') {
        // Long term equity gains are taxed at 10% for amount exceeding ₹1 lakh
        const exemptAmount = Math.min(100000, Math.max(0, capitalGains));
        const taxableAmount = Math.max(0, capitalGains - exemptAmount);
        taxRate = 10;
        taxAmount = taxableAmount * 0.1;
      } else {
        // Long term gains on other assets are taxed at 20% with indexation
        taxRate = 20;
        taxAmount = Math.max(0, capitalGains) * 0.2;
      }
    } else {
      // Short term gains
      if (assetType === 'equity' || assetType === 'equityMF') {
        // Short term equity gains are taxed at 15%
        taxRate = 15;
        taxAmount = Math.max(0, capitalGains) * 0.15;
      } else {
        // Short term gains on other assets are taxed as per income tax slab
        // Using 30% as a default maximum rate for simplicity
        taxRate = 30;
        taxAmount = Math.max(0, capitalGains) * 0.3;
      }
    }
    
    // Calculate effective tax rate
    const effectiveTaxRate = capitalGains > 0 ? (taxAmount / capitalGains) * 100 : 0;
    
    // Calculate net proceeds after tax
    const netProceeds = sellingPrice - expenses - taxAmount;
    
    return {
      capitalGains,
      capitalGainsType,
      indexedCost,
      taxRate,
      taxAmount,
      effectiveTaxRate,
      netProceeds
    };
  };

  // Update holding period when dates change
  useEffect(() => {
    if (purchaseDate && sellDate) {
      const purchaseDateTime = new Date(purchaseDate).getTime();
      const sellDateTime = new Date(sellDate).getTime();
      
      if (purchaseDateTime < sellDateTime) {
        // Calculate months between dates
        const purchaseMonth = new Date(purchaseDate).getMonth();
        const purchaseYear = new Date(purchaseDate).getFullYear();
        const sellMonth = new Date(sellDate).getMonth();
        const sellYear = new Date(sellDate).getFullYear();
        
        const months = (sellYear - purchaseYear) * 12 + (sellMonth - purchaseMonth);
        
        setHoldingPeriod(months);
      }
    }
  }, [purchaseDate, sellDate]);

  // Recalculate whenever inputs change
  useEffect(() => {
    setResult(calculateCapitalGainsTax());
  }, [
    assetType, 
    purchasePrice, 
    sellingPrice, 
    holdingPeriod,
    purchaseDate,
    sellDate,
    expenses,
    indexationApplicable
  ]);

  // Handle share button click
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
        <h1 className="text-2xl font-semibold text-[#113262] mb-2">Capital Gains Tax Calculator</h1>
        <h2 className="text-lg text-gray-600">Estimate the tax on your investment gains in India</h2>
      </div>

      <div className="max-w-5xl mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Input Sections */}
          <div className="lg:col-span-2 space-y-8">
            {/* Asset Type Section */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Asset Type</h2>
              <div className="grid grid-cols-2 gap-6">
                <div className="col-span-2">
                  <label className="block font-medium text-sm mb-1.5 flex items-center">
                    Select Asset Type
                    <div className="relative ml-1">
                      <HelpCircle 
                        size={14} 
                        className="text-gray-400 cursor-pointer"
                        onMouseEnter={() => setShowToolTip('assetType')}
                        onMouseLeave={() => setShowToolTip('')}
                      />
                      {showToolTip === 'assetType' && (
                        <div className="absolute z-10 left-6 -top-2 w-60 p-2 bg-gray-800 text-white text-xs rounded shadow-lg">
                          Different asset types have different tax implications based on Indian tax laws
                        </div>
                      )}
                    </div>
                  </label>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    <div 
                      className={`border p-3 rounded-lg cursor-pointer transition-colors text-center ${
                        assetType === 'equity' ? 'bg-blue-50 border-blue-500' : 'hover:bg-gray-50'
                      }`}
                      onClick={() => setAssetType('equity')}
                    >
                      <p className="font-medium">Equity Shares</p>
                      <p className="text-xs text-gray-500 mt-1">Listed on recognized exchange</p>
                    </div>
                    <div 
                      className={`border p-3 rounded-lg cursor-pointer transition-colors text-center ${
                        assetType === 'equityMF' ? 'bg-blue-50 border-blue-500' : 'hover:bg-gray-50'
                      }`}
                      onClick={() => setAssetType('equityMF')}
                    >
                      <p className="font-medium">Equity Mutual Funds</p>
                      <p className="text-xs text-gray-500 mt-1">65% or more in equities</p>
                    </div>
                    <div 
                      className={`border p-3 rounded-lg cursor-pointer transition-colors text-center ${
                        assetType === 'debt' ? 'bg-blue-50 border-blue-500' : 'hover:bg-gray-50'
                      }`}
                      onClick={() => setAssetType('debt')}
                    >
                      <p className="font-medium">Debt Funds</p>
                      <p className="text-xs text-gray-500 mt-1">Including debt mutual funds</p>
                    </div>
                    <div 
                      className={`border p-3 rounded-lg cursor-pointer transition-colors text-center ${
                        assetType === 'property' ? 'bg-blue-50 border-blue-500' : 'hover:bg-gray-50'
                      }`}
                      onClick={() => setAssetType('property')}
                    >
                      <p className="font-medium">Real Estate</p>
                      <p className="text-xs text-gray-500 mt-1">Property, land, buildings</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Investment Details */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Investment Details</h2>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block font-medium text-sm mb-1.5">Purchase Price</label>
                  <input
                    type="number"
                    value={purchasePrice}
                    onChange={(e) => setPurchasePrice(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={10000}
                    max={10000000}
                    step={10000}
                    value={purchasePrice}
                    onChange={(e) => setPurchasePrice(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>₹10K</span>
                    <span>₹1Cr</span>
                  </div>
                </div>

                <div>
                  <label className="block font-medium text-sm mb-1.5">Selling Price</label>
                  <input
                    type="number"
                    value={sellingPrice}
                    onChange={(e) => setSellingPrice(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={10000}
                    max={10000000}
                    step={10000}
                    value={sellingPrice}
                    onChange={(e) => setSellingPrice(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>₹10K</span>
                    <span>₹1Cr</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Time Period */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Time Period</h2>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block font-medium text-sm mb-1.5">Purchase Date</label>
                  <input
                    type="date"
                    value={purchaseDate}
                    onChange={(e) => setPurchaseDate(e.target.value)}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                </div>

                <div>
                  <label className="block font-medium text-sm mb-1.5">Selling Date</label>
                  <input
                    type="date"
                    value={sellDate}
                    onChange={(e) => setSellDate(e.target.value)}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                </div>

                <div className="col-span-2">
                  <label className="block font-medium text-sm mb-1.5 flex items-center">
                    Holding Period (months)
                    <div className="relative ml-1">
                      <HelpCircle 
                        size={14} 
                        className="text-gray-400 cursor-pointer"
                        onMouseEnter={() => setShowToolTip('holdingPeriod')}
                        onMouseLeave={() => setShowToolTip('')}
                      />
                      {showToolTip === 'holdingPeriod' && (
                        <div className="absolute z-10 left-6 -top-2 w-60 p-2 bg-gray-800 text-white text-xs rounded shadow-lg">
                          For equity: >12 months is long-term<br/>
                          For other assets: >36 months is long-term
                        </div>
                      )}
                    </div>
                  </label>
                  <input
                    type="number"
                    value={holdingPeriod}
                    onChange={(e) => setHoldingPeriod(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={1}
                    max={120}
                    value={holdingPeriod}
                    onChange={(e) => setHoldingPeriod(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>1 month</span>
                    <span>10 years</span>
                  </div>
                  <div className="mt-2 text-sm">
                    <p className={`${result.capitalGainsType === 'Long Term' ? 'text-green-600 font-medium' : 'text-orange-600 font-medium'}`}>
                      {result.capitalGainsType} Capital Gains
                    </p>
                  </div>
                </div>
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
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block font-medium text-sm mb-1.5 flex items-center">
                        Additional Expenses
                        <div className="relative ml-1">
                          <HelpCircle 
                            size={14} 
                            className="text-gray-400 cursor-pointer"
                            onMouseEnter={() => setShowToolTip('expenses')}
                            onMouseLeave={() => setShowToolTip('')}
                          />
                          {showToolTip === 'expenses' && (
                            <div className="absolute z-10 left-6 -top-2 w-60 p-2 bg-gray-800 text-white text-xs rounded shadow-lg">
                              Brokerage, stamp duty, registration, legal fees, etc.
                            </div>
                          )}
                        </div>
                      </label>
                      <input
                        type="number"
                        value={expenses}
                        onChange={(e) => setExpenses(Number(e.target.value))}
                        className="w-full p-1.5 border rounded text-sm"
                      />
                      <input
                        type="range"
                        min={0}
                        max={200000}
                        step={1000}
                        value={expenses}
                        onChange={(e) => setExpenses(Number(e.target.value))}
                        className="w-full mt-2"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>₹0</span>
                        <span>₹2L</span>
                      </div>
                    </div>

                    {(assetType === 'debt' || assetType === 'property') && (
                      <div>
                        <label className="block font-medium text-sm mb-1.5 flex items-center">
                          Apply Indexation
                          <div className="relative ml-1">
                            <HelpCircle 
                              size={14} 
                              className="text-gray-400 cursor-pointer"
                              onMouseEnter={() => setShowToolTip('indexation')}
                              onMouseLeave={() => setShowToolTip('')}
                            />
                            {showToolTip === 'indexation' && (
                              <div className="absolute z-10 left-6 -top-2 w-60 p-2 bg-gray-800 text-white text-xs rounded shadow-lg">
                                Indexation adjusts the purchase price for inflation, reducing your taxable gains
                              </div>
                            )}
                          </div>
                        </label>
                        <div className="space-y-2 p-1.5">
                          <div className="flex items-center">
                            <input
                              type="radio"
                              id="indexTrue"
                              name="indexation"
                              checked={indexationApplicable}
                              onChange={() => setIndexationApplicable(true)}
                              className="mr-2"
                            />
                            <label htmlFor="indexTrue" className="text-sm">
                              Yes, apply indexation
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              type="radio"
                              id="indexFalse"
                              name="indexation"
                              checked={!indexationApplicable}
                              onChange={() => setIndexationApplicable(false)}
                              className="mr-2"
                            />
                            <label htmlFor="indexFalse" className="text-sm">
                              No, don't apply indexation
                            </label>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Results Section */}
          <div className="bg-[#113262] text-white rounded-lg h-[500px] sticky top-6">
            <div className="p-4 border-b border-white/20">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold">Capital Gains Tax</h3>
                <button onClick={handleShare} className="p-1 hover:bg-blue-700 rounded">
                  <Share size={18} />
                </button>
              </div>
            </div>

            <div className="p-4 flex flex-col h-[calc(100%-68px)] justify-between">
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">
                    {formatCurrency(result.taxAmount)}
                  </div>
                  <div className="text-sm text-gray-300">Estimated Tax</div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-t border-white/20">
                    <span className="text-sm">Capital Gains</span>
                    <span className="font-bold">{formatCurrency(result.capitalGains)}</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-2 border-t border-white/20">
                    <span className="text-sm">Tax Rate</span>
                    <span className="font-bold">{result.taxRate}%</span>
                  </div>

                  {indexationApplicable && 
                   result.capitalGainsType === 'Long Term' && 
                   (assetType === 'debt' || assetType === 'property') && (
                    <div className="flex justify-between items-center py-2 border-t border-white/20">
                      <span className="text-sm">Indexed Cost</span>
                      <span className="font-bold">{formatCurrency(result.indexedCost)}</span>
                    </div>
                  )}

                  <div className="flex justify-between items-center py-2 border-t border-white/20">
                    <span className="text-sm">Effective Tax Rate</span>
                    <span className="font-bold">{result.effectiveTaxRate.toFixed(2)}%</span>
                  </div>

                  <div className="flex justify-between items-center py-2 border-t border-white/20">
                    <span className="text-sm">Net Proceeds</span>
                    <span className="font-bold">{formatCurrency(result.netProceeds)}</span>
                  </div>
                </div>
              </div>

              <button className="w-full bg-orange-400 text-white py-2 rounded-lg mt-4 hover:bg-orange-500 transition-colors text-sm">
                Consult Tax Expert →
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

export default CapitalGainsCalculator;