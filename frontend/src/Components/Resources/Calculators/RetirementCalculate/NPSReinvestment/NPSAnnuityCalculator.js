import React, { useState, useEffect } from 'react';
import { Share, ChevronDown } from 'lucide-react';

const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
};

const NPSReinvestmentCalculator = () => {
  // Basic inputs
  const [currentAge, setCurrentAge] = useState(55);
  const [retirementAge, setRetirementAge] = useState(60);
  const [currentNPSBalance, setCurrentNPSBalance] = useState(5000000);
  const [monthlyContribution, setMonthlyContribution] = useState(10000);
  const [annuityPercentage, setAnnuityPercentage] = useState(40);
  
  // Advanced settings
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [npsFundReturns, setNpsFundReturns] = useState(10);
  const [annuityRate, setAnnuityRate] = useState(6);
  const [lifeExpectancy, setLifeExpectancy] = useState(85);
  const [inflationRate, setInflationRate] = useState(6);
  const [taxRate, setTaxRate] = useState(20);
  const [annuityOption, setAnnuityOption] = useState('lifetime');
  const [showShareToast, setShowShareToast] = useState(false);
  
  // Results
  const [results, setResults] = useState({
    projectedNPSCorpus: 0,
    lumpSumAmount: 0,
    annuityInvestment: 0,
    monthlyPension: 0,
    effectiveReturnRate: 0,
    taxOnLumpSum: 0,
    netLumpSum: 0,
    yearsCovered: 0,
    adjustedMonthlyPension: []
  });

  const calculateNPSAnnuity = () => {
    // Calculate years to retirement
    const yearsToRetirement = retirementAge - currentAge;
    
    // Project NPS corpus at retirement
    let npsCorpus = currentNPSBalance;
    for (let year = 1; year <= yearsToRetirement; year++) {
      // Add annual contribution
      npsCorpus += monthlyContribution * 12;
      
      // Add returns
      npsCorpus *= (1 + npsFundReturns / 100);
    }
    
    // Calculate lump sum and annuity portions
    const lumpSumPercentage = 100 - annuityPercentage;
    const lumpSumAmount = npsCorpus * (lumpSumPercentage / 100);
    const annuityInvestment = npsCorpus * (annuityPercentage / 100);
    
    // Calculate tax on lump sum (60% is tax exempt, remaining 40% taxable)
    const taxableAmount = lumpSumAmount * 0.4; // 40% of lump sum is taxable
    const taxOnLumpSum = taxableAmount * (taxRate / 100);
    const netLumpSum = lumpSumAmount - taxOnLumpSum;
    
    // Calculate monthly pension based on annuity rate
    let monthlyPension = 0;
    
    if (annuityOption === 'lifetime') {
      // For lifetime annuity: Simple calculation based on annual rate
      monthlyPension = (annuityInvestment * (annuityRate / 100)) / 12;
    } else if (annuityOption === 'joint') {
      // For joint annuity (with spouse): Slightly lower rate
      const reducedRate = annuityRate * 0.9; // 10% reduction for joint life
      monthlyPension = (annuityInvestment * (reducedRate / 100)) / 12;
    } else if (annuityOption === 'guaranteed') {
      // For guaranteed period + lifetime: Also slightly lower rate
      const reducedRate = annuityRate * 0.95; // 5% reduction for guarantee
      monthlyPension = (annuityInvestment * (reducedRate / 100)) / 12;
    }
    
    // Calculate effective return rate
    // Formula: Monthly pension × 12 ÷ Annuity investment × 100
    const effectiveReturnRate = (monthlyPension * 12) / annuityInvestment * 100;
    
    // Calculate years covered by pension
    // Simple calculation: Years until life expectancy
    const yearsCovered = lifeExpectancy - retirementAge;
    
    // Calculate inflation-adjusted pension over time
    let adjustedMonthlyPension = [];
    let currentPension = monthlyPension;
    
    for (let year = 0; year <= yearsCovered; year++) {
      adjustedMonthlyPension.push({
        age: retirementAge + year,
        nominalPension: currentPension,
        realPension: monthlyPension / Math.pow(1 + inflationRate / 100, year)
      });
      
      // Pension amount remains the same in nominal terms (no inflation adjustment in annuities)
    }
    
    return {
      projectedNPSCorpus: npsCorpus,
      lumpSumAmount,
      annuityInvestment,
      monthlyPension,
      effectiveReturnRate,
      taxOnLumpSum,
      netLumpSum,
      yearsCovered,
      adjustedMonthlyPension
    };
  };

  useEffect(() => {
    const calculatedResults = calculateNPSAnnuity();
    setResults(calculatedResults);
  }, [
    currentAge,
    retirementAge,
    currentNPSBalance,
    monthlyContribution,
    annuityPercentage,
    npsFundReturns,
    annuityRate,
    lifeExpectancy,
    inflationRate,
    taxRate,
    annuityOption
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
        <h1 className="text-2xl font-semibold text-[#113262] mb-2">NPS Annuity Calculator</h1>
        <h2 className="text-lg text-gray-600">Plan your pension through NPS annuity investment</h2>
      </div>

      <div className="max-w-5xl mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Input Sections */}
          <div className="lg:col-span-2 space-y-8">
            {/* Age Details */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Age Details</h2>
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

            {/* Financial Details */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-4">NPS Account Details</h2>
              <div className="grid grid-cols-2 gap-6">
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
                    min={100000}
                    max={20000000}
                    step={100000}
                    value={currentNPSBalance}
                    onChange={(e) => setCurrentNPSBalance(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>₹1L</span>
                    <span>₹2Cr</span>
                  </div>
                </div>

                <div>
                  <label className="block font-medium text-sm mb-1.5">Monthly Contribution</label>
                  <input
                    type="number"
                    value={monthlyContribution}
                    onChange={(e) => setMonthlyContribution(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={1000}
                    max={100000}
                    step={1000}
                    value={monthlyContribution}
                    onChange={(e) => setMonthlyContribution(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>₹1K</span>
                    <span>₹1L</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Annuity Details */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Annuity Details</h2>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block font-medium text-sm mb-1.5">
                    Percentage to Invest in Annuity
                  </label>
                  <input
                    type="number"
                    value={annuityPercentage}
                    onChange={(e) => setAnnuityPercentage(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={40}
                    max={100}
                    step={5}
                    value={annuityPercentage}
                    onChange={(e) => setAnnuityPercentage(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>40%</span>
                    <span>100%</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    Note: Minimum 40% of NPS corpus must be invested in annuity
                  </p>
                </div>

                <div>
                  <label className="block font-medium text-sm mb-1.5">Annuity Option</label>
                  <select
                    value={annuityOption}
                    onChange={(e) => setAnnuityOption(e.target.value)}
                    className="w-full p-1.5 border rounded text-sm"
                  >
                    <option value="lifetime">Lifetime Pension (Subscriber)</option>
                    <option value="joint">Joint Life (Subscriber + Spouse)</option>
                    <option value="guaranteed">Guaranteed Period + Lifetime</option>
                  </select>
                  <p className="text-xs text-gray-500 mt-3">
                    Different options affect your monthly pension amount
                  </p>
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
                      <label className="block font-medium text-sm mb-1.5">NPS Fund Returns (%)</label>
                      <input
                        type="number"
                        value={npsFundReturns}
                        onChange={(e) => setNpsFundReturns(Number(e.target.value))}
                        className="w-full p-1.5 border rounded text-sm"
                      />
                      <input
                        type="range"
                        min={5}
                        max={15}
                        step={0.5}
                        value={npsFundReturns}
                        onChange={(e) => setNpsFundReturns(Number(e.target.value))}
                        className="w-full mt-2"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>5%</span>
                        <span>15%</span>
                      </div>
                    </div>

                    <div>
                      <label className="block font-medium text-sm mb-1.5">Annuity Rate (%)</label>
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
                      <label className="block font-medium text-sm mb-1.5">Life Expectancy</label>
                      <input
                        type="number"
                        value={lifeExpectancy}
                        onChange={(e) => setLifeExpectancy(Number(e.target.value))}
                        className="w-full p-1.5 border rounded text-sm"
                      />
                      <input
                        type="range"
                        min={70}
                        max={100}
                        step={1}
                        value={lifeExpectancy}
                        onChange={(e) => setLifeExpectancy(Number(e.target.value))}
                        className="w-full mt-2"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>70 years</span>
                        <span>100 years</span>
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
                      <label className="block font-medium text-sm mb-1.5">Tax Rate (%)</label>
                      <input
                        type="number"
                        value={taxRate}
                        onChange={(e) => setTaxRate(Number(e.target.value))}
                        className="w-full p-1.5 border rounded text-sm"
                      />
                      <input
                        type="range"
                        min={0}
                        max={30}
                        step={1}
                        value={taxRate}
                        onChange={(e) => setTaxRate(Number(e.target.value))}
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
                <h3 className="text-xl font-bold">NPS Annuity Results</h3>
                <button onClick={handleShare} className="p-1 hover:bg-blue-700 rounded">
                  <Share size={18} />
                </button>
              </div>
            </div>

            <div className="p-4 flex flex-col h-[calc(100%-68px)] justify-between">
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">
                    {formatCurrency(results.monthlyPension)}
                  </div>
                  <div className="text-sm text-gray-300">Monthly Pension</div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-t border-white/20">
                    <span className="text-sm">NPS Corpus at Retirement</span>
                    <span className="font-bold">{formatCurrency(results.projectedNPSCorpus)}</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-2 border-t border-white/20">
                    <span className="text-sm">Lump Sum Amount ({100 - annuityPercentage}%)</span>
                    <span className="font-bold">{formatCurrency(results.lumpSumAmount)}</span>
                  </div>

                  <div className="flex justify-between items-center py-2 border-t border-white/20">
                    <span className="text-sm">Annuity Investment ({annuityPercentage}%)</span>
                    <span className="font-bold">{formatCurrency(results.annuityInvestment)}</span>
                  </div>

                  <div className="flex justify-between items-center py-2 border-t border-white/20">
                    <span className="text-sm">Tax on Lump Sum</span>
                    <span className="font-bold">{formatCurrency(results.taxOnLumpSum)}</span>
                  </div>

                  <div className="flex justify-between items-center py-2 border-t border-white/20">
                    <span className="text-sm">Net Lump Sum</span>
                    <span className="font-bold">{formatCurrency(results.netLumpSum)}</span>
                  </div>

                  <div className="flex justify-between items-center py-2 border-t border-white/20">
                    <span className="text-sm">Effective Annuity Return</span>
                    <span className="font-bold">{results.effectiveReturnRate.toFixed(2)}%</span>
                  </div>
                </div>
              </div>

              <button className="w-full bg-orange-400 text-white py-2 rounded-lg mt-4 hover:bg-orange-500 transition-colors text-sm">
                Explore Annuity Options →
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

export default NPSReinvestmentCalculator;