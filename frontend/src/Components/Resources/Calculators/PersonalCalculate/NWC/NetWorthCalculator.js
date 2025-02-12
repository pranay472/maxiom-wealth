import React, { useState } from 'react';
import { Share, ChevronDown } from 'lucide-react';

const NetWorthCalculator = () => {
  // Assets
  const [cashAndBank, setCashAndBank] = useState(100000);
  const [equityHoldings, setEquityHoldings] = useState(200000);
  const [mutualFunds, setMutualFunds] = useState(300000);
  const [fixedDeposits, setFixedDeposits] = useState(500000);
  const [propertyValue, setPropertyValue] = useState(5000000);
  const [goldJewelry, setGoldJewelry] = useState(1000000);
  
  // Liabilities
  const [homeLoan, setHomeLoan] = useState(2000000);
  const [carLoan, setCarLoan] = useState(500000);
  const [personalLoan, setPersonalLoan] = useState(100000);
  const [creditCardDebt, setCreditCardDebt] = useState(50000);
  const [otherLoans, setOtherLoans] = useState(0);
  
  // Additional settings
  const [showAdditional, setShowAdditional] = useState(false);
  const [includeVehicles, setIncludeVehicles] = useState(false);
  const [vehicleValue, setVehicleValue] = useState(800000);
  const [showShareToast, setShowShareToast] = useState(false);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const calculateNetWorth = () => {
    // Calculate total assets
    const totalAssets = 
      cashAndBank + 
      equityHoldings + 
      mutualFunds + 
      fixedDeposits + 
      propertyValue + 
      goldJewelry + 
      (includeVehicles ? vehicleValue : 0);

    // Calculate total liabilities
    const totalLiabilities = 
      homeLoan + 
      carLoan + 
      personalLoan + 
      creditCardDebt + 
      otherLoans;

    // Calculate net worth
    const netWorth = totalAssets - totalLiabilities;

    // Calculate debt-to-asset ratio
    const debtToAssetRatio = (totalLiabilities / totalAssets) * 100;

    // Asset allocation percentages
    const liquidAssets = cashAndBank + fixedDeposits;
    const investmentAssets = equityHoldings + mutualFunds;
    const physicalAssets = propertyValue + goldJewelry + (includeVehicles ? vehicleValue : 0);

    return {
      totalAssets,
      totalLiabilities,
      netWorth,
      debtToAssetRatio,
      assetAllocation: {
        liquid: (liquidAssets / totalAssets) * 100,
        investment: (investmentAssets / totalAssets) * 100,
        physical: (physicalAssets / totalAssets) * 100
      }
    };
  };

  const results = calculateNetWorth();

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
        <h1 className="text-2xl font-semibold text-[#113262] mb-2">Net Worth Calculator</h1>
        <h2 className="text-lg text-gray-600">Assess financial health with this calculator.</h2>
      </div>

      <div className="max-w-5xl mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Input Sections */}
          <div className="lg:col-span-2 space-y-8">
            {/* Assets Section */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Assets</h2>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block font-medium text-sm mb-1.5">Cash & Bank Balance</label>
                  <input
                    type="number"
                    value={cashAndBank}
                    onChange={(e) => setCashAndBank(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={0}
                    max={1000000}
                    value={cashAndBank}
                    onChange={(e) => setCashAndBank(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                </div>

                <div>
                  <label className="block font-medium text-sm mb-1.5">Equity Holdings</label>
                  <input
                    type="number"
                    value={equityHoldings}
                    onChange={(e) => setEquityHoldings(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={0}
                    max={5000000}
                    value={equityHoldings}
                    onChange={(e) => setEquityHoldings(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                </div>

                <div>
                  <label className="block font-medium text-sm mb-1.5">Mutual Funds</label>
                  <input
                    type="number"
                    value={mutualFunds}
                    onChange={(e) => setMutualFunds(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={0}
                    max={5000000}
                    value={mutualFunds}
                    onChange={(e) => setMutualFunds(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                </div>

                <div>
                  <label className="block font-medium text-sm mb-1.5">Fixed Deposits</label>
                  <input
                    type="number"
                    value={fixedDeposits}
                    onChange={(e) => setFixedDeposits(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={0}
                    max={2000000}
                    value={fixedDeposits}
                    onChange={(e) => setFixedDeposits(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                </div>

                <div>
                  <label className="block font-medium text-sm mb-1.5">Property Value</label>
                  <input
                    type="number"
                    value={propertyValue}
                    onChange={(e) => setPropertyValue(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={0}
                    max={20000000}
                    value={propertyValue}
                    onChange={(e) => setPropertyValue(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                </div>

                <div>
                  <label className="block font-medium text-sm mb-1.5">Gold & Jewelry</label>
                  <input
                    type="number"
                    value={goldJewelry}
                    onChange={(e) => setGoldJewelry(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={0}
                    max={5000000}
                    value={goldJewelry}
                    onChange={(e) => setGoldJewelry(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                </div>
              </div>
            </div>

            {/* Liabilities Section */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Liabilities</h2>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block font-medium text-sm mb-1.5">Home Loan</label>
                  <input
                    type="number"
                    value={homeLoan}
                    onChange={(e) => setHomeLoan(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={0}
                    max={10000000}
                    value={homeLoan}
                    onChange={(e) => setHomeLoan(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                </div>

                <div>
                  <label className="block font-medium text-sm mb-1.5">Car Loan</label>
                  <input
                    type="number"
                    value={carLoan}
                    onChange={(e) => setCarLoan(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={0}
                    max={2000000}
                    value={carLoan}
                    onChange={(e) => setCarLoan(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                </div>

                <div>
                  <label className="block font-medium text-sm mb-1.5">Personal Loan</label>
                  <input
                    type="number"
                    value={personalLoan}
                    onChange={(e) => setPersonalLoan(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={0}
                    max={1000000}
                    value={personalLoan}
                    onChange={(e) => setPersonalLoan(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                </div>

                <div>
                  <label className="block font-medium text-sm mb-1.5">Credit Card Debt</label>
                  <input
                    type="number"
                    value={creditCardDebt}
                    onChange={(e) => setCreditCardDebt(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={0}
                    max={500000}
                    value={creditCardDebt}
                    onChange={(e) => setCreditCardDebt(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                </div>

                <div>
                  <label className="block font-medium text-sm mb-1.5">Other Loans</label>
                  <input
                    type="number"
                    value={otherLoans}
                    onChange={(e) => setOtherLoans(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={0}
                    max={1000000}
                    value={otherLoans}
                    onChange={(e) => setOtherLoans(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                </div>
              </div>
            </div>

            {/* Additional Settings */}
            <div className="bg-white rounded-lg shadow">
              <button
                onClick={() => setShowAdditional(!showAdditional)}
                className="w-full p-4 flex justify-between items-center hover:bg-gray-50"
              >
                <h2 className="text-lg font-bold text-gray-900">Additional Settings</h2>
                <ChevronDown
                  className={`transform transition-transform ${showAdditional ? 'rotate-180' : ''}`}
                  size={20}
                />
              </button>

              {showAdditional && (
                <div className="p-4 border-t">
                  <label className="flex items-center space-x-2 mb-4">
                    <input
                      type="checkbox"
                      checked={includeVehicles}
                      onChange={(e) => setIncludeVehicles(e.target.checked)}
                      className="rounded"
                    />
                    <span className="text-sm">Include Vehicle Value</span>
                  </label>

                  {includeVehicles && (
                    <div>
                      <label className="block font-medium text-sm mb-1.5">Vehicle Value</label>
                      <input
                        type="number"
                        value={vehicleValue}
                        onChange={(e) => setVehicleValue(Number(e.target.value))}
                        className="w-full p-1.5 border rounded text-sm"
                      />
                      <input
                        type="range"
                        min={0}
                        max={5000000}
                        value={vehicleValue}
                        onChange={(e) => setVehicleValue(Number(e.target.value))}
                        className="w-full mt-2"
                      />
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Results Section */}
          <div className="bg-[#113262] text-white rounded-lg h-[490px] sticky top-6">
            <div className="p-4 border-b border-white/20">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold">Net Worth Summary</h3>
                <button onClick={handleShare} className="p-1 hover:bg-blue-700 rounded">
                  <Share size={18} />
                </button>
              </div>
            </div>

            <div className="p-4">
              <div className="mb-4">
                <div className="text-3xl font-bold mb-1">{formatCurrency(results.netWorth)}</div>
                <div className="text-sm text-gray-300">Total Net Worth</div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-t border-white/20">
                  <span className="text-sm">Total Assets</span>
                  <span className="font-bold">{formatCurrency(results.totalAssets)}</span>
                </div>

                <div className="flex justify-between items-center py-2 border-t border-white/20">
                  <span className="text-sm">Total Liabilities</span>
                  <span className="font-bold">{formatCurrency(results.totalLiabilities)}</span>
                </div>

                <div className="flex justify-between items-center py-2 border-t border-white/20">
                  <span className="text-sm">Debt-to-Asset Ratio</span>
                  <span className="font-bold">{results.debtToAssetRatio.toFixed(1)}%</span>
                </div>

                <div className="py-2 border-t border-white/20">
                  <span className="text-sm block mb-2">Asset Allocation</span>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-xs">
                      <span>Liquid Assets</span>
                      <span>{results.assetAllocation.liquid.toFixed(1)}%</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span>Investment Assets</span>
                      <span>{results.assetAllocation.investment.toFixed(1)}%</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span>Physical Assets</span>
                      <span>{results.assetAllocation.physical.toFixed(1)}%</span>
                    </div>
                  </div>
                </div>
              </div>

              <button className="w-full bg-orange-400 text-white py-2 rounded-lg mt-4 hover:bg-orange-500 transition-colors text-sm">
                Track Progress →
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

export default NetWorthCalculator;