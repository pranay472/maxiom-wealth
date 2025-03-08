import React, { useState, useEffect } from 'react';
import { Share, ChevronDown } from 'lucide-react';

const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
};

const NPSCalculator = () => {
  // Basic inputs
  const [currentAge, setCurrentAge] = useState(30);
  const [retirementAge, setRetirementAge] = useState(60);
  const [currentMonthlyContribution, setCurrentMonthlyContribution] = useState(5000);
  const [currentNPSBalance, setCurrentNPSBalance] = useState(200000);
  
  // Investment allocation
  const [equityAllocation, setEquityAllocation] = useState(50);
  const [corporateDebtAllocation, setCorporateDebtAllocation] = useState(30);
  const [governmentDebtAllocation, setGovernmentDebtAllocation] = useState(20);
  
  // Advanced settings
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [annualContributionIncrease, setAnnualContributionIncrease] = useState(5);
  const [equityReturns, setEquityReturns] = useState(12);
  const [corporateDebtReturns, setCorporateDebtReturns] = useState(8);
  const [governmentDebtReturns, setGovernmentDebtReturns] = useState(7);
  const [inflationRate, setInflationRate] = useState(6);
  const [annuityRate, setAnnuityRate] = useState(6);
  const [lumpSumPercentage, setLumpSumPercentage] = useState(60);
  const [taxBracket, setTaxBracket] = useState(20);
  const [showShareToast, setShowShareToast] = useState(false);
  
  // Results
  const [results, setResults] = useState({
    projectedCorpus: 0,
    lumpSumAmount: 0,
    annuityAmount: 0,
    monthlyPension: 0,
    taxSavings: 0,
    yearwiseProjections: [],
    expectedReturns: 0,
    wealthGainRatio: 0
  });

  // Validate allocation percentages
  useEffect(() => {
    // Ensure allocations sum to 100%
    const total = equityAllocation + corporateDebtAllocation + governmentDebtAllocation;
    
    if (total !== 100) {
      // Adjust government debt to make total 100%
      const newGovernmentDebt = 100 - equityAllocation - corporateDebtAllocation;
      
      if (newGovernmentDebt >= 0 && newGovernmentDebt <= 100) {
        setGovernmentDebtAllocation(newGovernmentDebt);
      } else {
        // If adjustment isn't possible, reduce equity to maintain balance
        const newEquity = Math.max(0, Math.min(100 - corporateDebtAllocation, 100));
        setEquityAllocation(newEquity);
        setGovernmentDebtAllocation(100 - newEquity - corporateDebtAllocation);
      }
    }
  }, [equityAllocation, corporateDebtAllocation]);

  const calculateNPS = () => {
    // Calculate years to retirement
    const yearsToRetirement = retirementAge - currentAge;
    
    // Calculate average expected return based on allocation
    const expectedReturns = (
      (equityAllocation / 100) * equityReturns +
      (corporateDebtAllocation / 100) * corporateDebtReturns +
      (governmentDebtAllocation / 100) * governmentDebtReturns
    );
    
    // Initialize variables for projection
    let corpus = currentNPSBalance;
    let yearlyContribution = currentMonthlyContribution * 12;
    let totalContribution = currentNPSBalance;
    const yearwiseProjections = [];
    
    // Project corpus growth year by year
    for (let year = 1; year <= yearsToRetirement; year++) {
      // Add yearly contribution
      corpus += yearlyContribution;
      totalContribution += yearlyContribution;
      
      // Add returns
      const yearlyReturn = corpus * (expectedReturns / 100);
      corpus += yearlyReturn;
      
      // Increase yearly contribution for next year
      yearlyContribution *= (1 + annualContributionIncrease / 100);
      
      // Store projection data
      yearwiseProjections.push({
        age: currentAge + year,
        corpus: corpus,
        contribution: yearlyContribution / 12, // Monthly contribution
        totalContributed: totalContribution
      });
    }
    
    // Calculate lump sum and annuity amounts
    const lumpSumAmount = corpus * (lumpSumPercentage / 100);
    const annuityAmount = corpus * ((100 - lumpSumPercentage) / 100);
    
    // Calculate monthly pension based on annuity rate
    const monthlyPension = (annuityAmount * (annuityRate / 100)) / 12;
    
    // Calculate tax savings (assuming tier 1 NPS contributions are tax deductible)
    // Maximum deduction under 80CCD(1B) is 50,000
    const maxNPSTaxDeduction = 50000;
    const currentYearContribution = currentMonthlyContribution * 12;
    const taxDeduction = Math.min(currentYearContribution, maxNPSTaxDeduction);
    const taxSavings = taxDeduction * (taxBracket / 100);
    
    // Calculate wealth gain ratio (final corpus / total contribution)
    const wealthGainRatio = corpus / totalContribution;
    
    return {
      projectedCorpus: corpus,
      lumpSumAmount,
      annuityAmount,
      monthlyPension,
      taxSavings,
      yearwiseProjections,
      expectedReturns,
      wealthGainRatio
    };
  };

  useEffect(() => {
    const calculatedResults = calculateNPS();
    setResults(calculatedResults);
  }, [
    currentAge,
    retirementAge,
    currentMonthlyContribution,
    currentNPSBalance,
    equityAllocation,
    corporateDebtAllocation,
    governmentDebtAllocation,
    annualContributionIncrease,
    equityReturns,
    corporateDebtReturns,
    governmentDebtReturns,
    inflationRate,
    annuityRate,
    lumpSumPercentage,
    taxBracket
  ]);

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
        <h1 className="text-2xl font-semibold text-[#113262] mb-2">NPS Calculator</h1>
        <h2 className="text-lg text-gray-600">Plan your retirement through the National Pension System</h2>
      </div>

      <div className="max-w-5xl mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Input Sections */}
          <div className="lg:col-span-2 space-y-8">
            {/* Basic Details */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Basic Details</h2>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block font-medium text-sm mb-1.5">Current Age</label>
                  <input
                    type="number"
                    value={currentAge}
                    onChange={(e) => setCurrentAge(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={18}
                    max={59}
                    step={1}
                    value={currentAge}
                    onChange={(e) => setCurrentAge(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>18 years</span>
                    <span>59 years</span>
                  </div>
                </div>

                <div>
                  <label className="block font-medium text-sm mb-1.5">Retirement Age</label>
                  <input
                    type="number"
                    value={retirementAge}
                    onChange={(e) => setRetirementAge(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={60}
                    max={70}
                    step={1}
                    value={retirementAge}
                    onChange={(e) => setRetirementAge(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>60 years</span>
                    <span>70 years</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contribution Details */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Contribution Details</h2>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block font-medium text-sm mb-1.5">Monthly Contribution</label>
                  <input
                    type="number"
                    value={currentMonthlyContribution}
                    onChange={(e) => setCurrentMonthlyContribution(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={500}
                    max={50000}
                    step={500}
                    value={currentMonthlyContribution}
                    onChange={(e) => setCurrentMonthlyContribution(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>₹500</span>
                    <span>₹50,000</span>
                  </div>
                </div>

                <div>
                  <label className="block font-medium text-sm mb-1.5">Current NPS Balance</label>
                  <input
                    type="number"
                    value={currentNPSBalance}
                    onChange={(e) => setCurrentNPSBalance(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={0}
                    max={5000000}
                    step={10000}
                    value={currentNPSBalance}
                    onChange={(e) => setCurrentNPSBalance(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>₹0</span>
                    <span>₹50L</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Investment Allocation */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Asset Allocation</h2>
              <p className="text-xs text-gray-500 mb-4">
                Total allocation must equal 100%. Government Securities will automatically adjust.
              </p>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <label className="block font-medium text-sm">Equity (E)</label>
                    <span className="text-sm">{equityAllocation}%</span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={75}  // Maximum limit for equity under NPS
                    step={1}
                    value={equityAllocation}
                    onChange={(e) => setEquityAllocation(Number(e.target.value))}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>0%</span>
                    <span>75%</span>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <label className="block font-medium text-sm">Corporate Debt (C)</label>
                    <span className="text-sm">{corporateDebtAllocation}%</span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={100}
                    step={1}
                    value={corporateDebtAllocation}
                    onChange={(e) => setCorporateDebtAllocation(Number(e.target.value))}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>0%</span>
                    <span>100%</span>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <label className="block font-medium text-sm">Government Securities (G)</label>
                    <span className="text-sm">{governmentDebtAllocation}%</span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={100}
                    step={1}
                    value={governmentDebtAllocation}
                    onChange={(e) => setGovernmentDebtAllocation(Number(e.target.value))}
                    className="w-full"
                    disabled  // Government Securities will auto-adjust
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>0%</span>
                    <span>100%</span>
                  </div>
                </div>
                
                <div className="pt-2 border-t">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-sm">Total</span>
                    <span className="font-medium text-sm">{equityAllocation + corporateDebtAllocation + governmentDebtAllocation}%</span>
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
                      <label className="block font-medium text-sm mb-1.5">Annual Contribution Increase (%)</label>
                      <input
                        type="number"
                        value={annualContributionIncrease}
                        onChange={(e) => setAnnualContributionIncrease(Number(e.target.value))}
                        className="w-full p-1.5 border rounded text-sm"
                      />
                      <input
                        type="range"
                        min={0}
                        max={15}
                        step={0.5}
                        value={annualContributionIncrease}
                        onChange={(e) => setAnnualContributionIncrease(Number(e.target.value))}
                        className="w-full mt-2"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>0%</span>
                        <span>15%</span>
                      </div>
                    </div>

                    <div>
                      <label className="block font-medium text-sm mb-1.5">Expected Equity Returns (%)</label>
                      <input
                        type="number"
                        value={equityReturns}
                        onChange={(e) => setEquityReturns(Number(e.target.value))}
                        className="w-full p-1.5 border rounded text-sm"
                      />
                      <input
                        type="range"
                        min={6}
                        max={15}
                        step={0.5}
                        value={equityReturns}
                        onChange={(e) => setEquityReturns(Number(e.target.value))}
                        className="w-full mt-2"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>6%</span>
                        <span>15%</span>
                      </div>
                    </div>

                    <div>
                      <label className="block font-medium text-sm mb-1.5">Expected Corporate Debt Returns (%)</label>
                      <input
                        type="number"
                        value={corporateDebtReturns}
                        onChange={(e) => setCorporateDebtReturns(Number(e.target.value))}
                        className="w-full p-1.5 border rounded text-sm"
                      />
                      <input
                        type="range"
                        min={5}
                        max={12}
                        step={0.5}
                        value={corporateDebtReturns}
                        onChange={(e) => setCorporateDebtReturns(Number(e.target.value))}
                        className="w-full mt-2"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>5%</span>
                        <span>12%</span>
                      </div>
                    </div>

                    <div>
                      <label className="block font-medium text-sm mb-1.5">Expected Govt. Securities Returns (%)</label>
                      <input
                        type="number"
                        value={governmentDebtReturns}
                        onChange={(e) => setGovernmentDebtReturns(Number(e.target.value))}
                        className="w-full p-1.5 border rounded text-sm"
                      />
                      <input
                        type="range"
                        min={4}
                        max={10}
                        step={0.5}
                        value={governmentDebtReturns}
                        onChange={(e) => setGovernmentDebtReturns(Number(e.target.value))}
                        className="w-full mt-2"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>4%</span>
                        <span>10%</span>
                      </div>
                    </div>

                    <div>
                      <label className="block font-medium text-sm mb-1.5">Lump Sum Withdrawal % at Retirement</label>
                      <input
                        type="number"
                        value={lumpSumPercentage}
                        onChange={(e) => setLumpSumPercentage(Number(e.target.value))}
                        className="w-full p-1.5 border rounded text-sm"
                      />
                      <input
                        type="range"
                        min={0}
                        max={60}
                        step={5}
                        value={lumpSumPercentage}
                        onChange={(e) => setLumpSumPercentage(Number(e.target.value))}
                        className="w-full mt-2"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>0%</span>
                        <span>60%</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">
                        Maximum 60% can be withdrawn as lump sum
                      </p>
                    </div>

                    <div>
                      <label className="block font-medium text-sm mb-1.5">Expected Annuity Rate (%)</label>
                      <input
                        type="number"
                        value={annuityRate}
                        onChange={(e) => setAnnuityRate(Number(e.target.value))}
                        className="w-full p-1.5 border rounded text-sm"
                      />
                      <input
                        type="range"
                        min={4}
                        max={10}
                        step={0.1}
                        value={annuityRate}
                        onChange={(e) => setAnnuityRate(Number(e.target.value))}
                        className="w-full mt-2"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>4%</span>
                        <span>10%</span>
                      </div>
                    </div>

                    <div>
                      <label className="block font-medium text-sm mb-1.5">Inflation Rate (%)</label>
                      <input
                        type="number"
                        value={inflationRate}
                        onChange={(e) => setInflationRate(Number(e.target.value))}
                        className="w-full p-1.5 border rounded text-sm"
                      />
                      <input
                        type="range"
                        min={2}
                        max={10}
                        step={0.5}
                        value={inflationRate}
                        onChange={(e) => setInflationRate(Number(e.target.value))}
                        className="w-full mt-2"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>2%</span>
                        <span>10%</span>
                      </div>
                    </div>

                    <div>
                      <label className="block font-medium text-sm mb-1.5">Income Tax Bracket (%)</label>
                      <input
                        type="number"
                        value={taxBracket}
                        onChange={(e) => setTaxBracket(Number(e.target.value))}
                        className="w-full p-1.5 border rounded text-sm"
                      />
                      <input
                        type="range"
                        min={0}
                        max={30}
                        step={5}
                        value={taxBracket}
                        onChange={(e) => setTaxBracket(Number(e.target.value))}
                        className="w-full mt-2"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>0%</span>
                        <span>30%</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Results Section */}
          <div className="bg-[#113262] text-white rounded-lg h-[520px] sticky top-6">
            <div className="p-4 border-b border-white/20">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold">NPS Projection</h3>
                <button onClick={handleShare} className="p-1 hover:bg-blue-700 rounded">
                  <Share size={18} />
                </button>
              </div>
            </div>

            <div className="p-4 flex flex-col h-[calc(100%-68px)] justify-between">
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">
                    {formatCurrency(results.projectedCorpus)}
                  </div>
                  <div className="text-sm text-gray-300">Projected Corpus at Retirement</div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-t border-white/20">
                    <span className="text-sm">Lump Sum (60%)</span>
                    <span className="font-bold">{formatCurrency(results.lumpSumAmount)}</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-2 border-t border-white/20">
                    <span className="text-sm">Annuity Investment (40%)</span>
                    <span className="font-bold">{formatCurrency(results.annuityAmount)}</span>
                  </div>

                  <div className="flex justify-between items-center py-2 border-t border-white/20">
                    <span className="text-sm">Monthly Pension</span>
                    <span className="font-bold">{formatCurrency(results.monthlyPension)}</span>
                  </div>

                  <div className="flex justify-between items-center py-2 border-t border-white/20">
                    <span className="text-sm">Annual Tax Saving</span>
                    <span className="font-bold">{formatCurrency(results.taxSavings)}</span>
                  </div>

                  <div className="flex justify-between items-center py-2 border-t border-white/20">
                    <span className="text-sm">Expected Returns</span>
                    <span className="font-bold">{results.expectedReturns.toFixed(2)}%</span>
                  </div>

                  <div className="flex justify-between items-center py-2 border-t border-white/20">
                    <span className="text-sm">Wealth Gain Ratio</span>
                    <span className="font-bold">{results.wealthGainRatio.toFixed(2)}x</span>
                  </div>
                </div>
              </div>

              <button className="w-full bg-orange-400 text-white py-2 rounded-lg mt-4 hover:bg-orange-500 transition-colors text-sm">
                Open an NPS Account →
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

export default NPSCalculator;