import React, { useState, useEffect } from 'react';
import { Share, ChevronDown } from 'lucide-react';

const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
};

const CareerGrowthCalculator = () => {
  // Basic inputs
  const [currentSalary, setCurrentSalary] = useState(600000);
  const [currentAge, setCurrentAge] = useState(25);
  const [retirementAge, setRetirementAge] = useState(60);
  const [industry, setIndustry] = useState("technology");
  
  // Growth parameters
  const [annualGrowthRate, setAnnualGrowthRate] = useState(8);
  const [promotionFrequency, setPromotionFrequency] = useState(3);
  const [promotionBonus, setPromotionBonus] = useState(20);
  
  // Advanced settings
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [inflationRate, setInflationRate] = useState(6);
  const [jobChanges, setJobChanges] = useState(5);
  const [jobChangeSalaryBoost, setJobChangeSalaryBoost] = useState(30);
  const [skillUpgrades, setSkillUpgrades] = useState(4);
  const [skillUpgradeBonus, setSkillUpgradeBonus] = useState(15);
  const [bonusPercentage, setBonusPercentage] = useState(10);
  const [showShareToast, setShowShareToast] = useState(false);
  
  // Results
  const [results, setResults] = useState({
    careerEarnings: 0,
    peakSalary: 0,
    averageSalary: 0,
    realTermsEarnings: 0,
    averageAnnualGrowth: 0,
    promotions: 0,
    skillUpgradeImpact: 0,
    jobChangeImpact: 0,
    salaryByYear: [],
    promotionYears: [],
    jobChangeYears: [],
    skillUpgradeYears: []
  });

  // Industry growth rate presets
  const industryGrowthRates = {
    technology: { base: 8, promotion: 20, jobChange: 30 },
    finance: { base: 7, promotion: 22, jobChange: 25 },
    healthcare: { base: 6, promotion: 15, jobChange: 20 },
    manufacturing: { base: 5, promotion: 15, jobChange: 18 },
    retail: { base: 4, promotion: 12, jobChange: 15 },
    education: { base: 3, promotion: 10, jobChange: 12 },
    government: { base: 3, promotion: 8, jobChange: 10 }
  };

  // Update rates when industry changes
  useEffect(() => {
    if (industryGrowthRates[industry]) {
      setAnnualGrowthRate(industryGrowthRates[industry].base);
      setPromotionBonus(industryGrowthRates[industry].promotion);
      setJobChangeSalaryBoost(industryGrowthRates[industry].jobChange);
    }
  }, [industry]);

  const calculateCareerGrowth = () => {
    // Calculate total working years
    const totalYears = retirementAge - currentAge;
    
    // Initialize variables for tracking metrics
    let cumulativeEarnings = 0;
    let peakSalary = currentSalary;
    let salaryByYear = [];
    let promotionYears = [];
    let jobChangeYears = [];
    let skillUpgradeYears = [];
    
    // Set intervals for job changes and skill upgrades
    const jobChangeInterval = totalYears / (jobChanges + 1);
    const skillUpgradeInterval = totalYears / (skillUpgrades + 1);
    
    // Calculate career trajectory year by year
    let currentYearSalary = currentSalary;
    for (let year = 1; year <= totalYears; year++) {
      let yearlyGrowth = annualGrowthRate / 100;
      let promotionIncrease = 0;
      let jobChangeIncrease = 0;
      let skillUpgradeIncrease = 0;
      let yearlyBonus = 0;
      
      // Check for promotion
      if (year % promotionFrequency === 0) {
        promotionIncrease = currentYearSalary * (promotionBonus / 100);
        promotionYears.push(year + currentAge);
      }
      
      // Check for job change (approximate intervals)
      if (Math.round(year % jobChangeInterval) === 0 && year > 1) {
        jobChangeIncrease = currentYearSalary * (jobChangeSalaryBoost / 100);
        jobChangeYears.push(year + currentAge);
      }
      
      // Check for skill upgrade (approximate intervals)
      if (Math.round(year % skillUpgradeInterval) === 0 && year > 1) {
        skillUpgradeIncrease = currentYearSalary * (skillUpgradeBonus / 100);
        skillUpgradeYears.push(year + currentAge);
      }
      
      // Calculate yearly bonus
      yearlyBonus = currentYearSalary * (bonusPercentage / 100);
      
      // Update salary for this year with all increases
      let newSalary = currentYearSalary * (1 + yearlyGrowth) + 
                      promotionIncrease + jobChangeIncrease + skillUpgradeIncrease;
      
      // Round to nearest thousand
      newSalary = Math.round(newSalary / 1000) * 1000;
      
      // Update cumulative earnings (including bonus)
      cumulativeEarnings += currentYearSalary + yearlyBonus;
      
      // Track salary for this year
      salaryByYear.push({
        age: year + currentAge,
        salary: newSalary,
        bonus: yearlyBonus,
        nominal: newSalary + yearlyBonus,
        real: (newSalary + yearlyBonus) / Math.pow(1 + inflationRate/100, year)
      });
      
      // Update current salary for next year
      currentYearSalary = newSalary;
      
      // Update peak salary if this year's is higher
      if (currentYearSalary > peakSalary) {
        peakSalary = currentYearSalary;
      }
    }
    
    // Calculate average salary
    const averageSalary = cumulativeEarnings / totalYears;
    
    // Calculate compound annual growth rate (CAGR)
    const cagr = (Math.pow(peakSalary / currentSalary, 1 / totalYears) - 1) * 100;
    
    // Calculate inflation-adjusted (real) earnings
    const realTermsEarnings = salaryByYear.reduce((sum, yr) => sum + yr.real, 0);
    
    // Calculate impact of skill upgrades and job changes on earnings
    const skillUpgradeImpact = skillUpgrades * (skillUpgradeBonus / 100) * averageSalary;
    const jobChangeImpact = jobChanges * (jobChangeSalaryBoost / 100) * averageSalary;
    
    return {
      careerEarnings: cumulativeEarnings,
      peakSalary,
      averageSalary,
      realTermsEarnings,
      averageAnnualGrowth: cagr,
      promotions: Math.floor(totalYears / promotionFrequency),
      skillUpgradeImpact,
      jobChangeImpact,
      salaryByYear,
      promotionYears,
      jobChangeYears,
      skillUpgradeYears
    };
  };

  useEffect(() => {
    const calculatedResults = calculateCareerGrowth();
    setResults(calculatedResults);
  }, [
    currentSalary,
    currentAge,
    retirementAge,
    industry,
    annualGrowthRate,
    promotionFrequency,
    promotionBonus,
    inflationRate,
    jobChanges,
    jobChangeSalaryBoost,
    skillUpgrades,
    skillUpgradeBonus,
    bonusPercentage
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
        <h1 className="text-2xl font-semibold text-[#113262] mb-2">Career Growth Planner</h1>
        <h2 className="text-lg text-gray-600">Plan your career trajectory and financial growth</h2>
      </div>

      <div className="max-w-5xl mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Input Sections */}
          <div className="lg:col-span-2 space-y-8">
            {/* Current Details */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Current Status</h2>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block font-medium text-sm mb-1.5">Current Annual Salary</label>
                  <input
                    type="number"
                    value={currentSalary}
                    onChange={(e) => setCurrentSalary(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={300000}
                    max={10000000}
                    step={50000}
                    value={currentSalary}
                    onChange={(e) => setCurrentSalary(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>₹3L</span>
                    <span>₹1Cr</span>
                  </div>
                </div>

                <div>
                  <label className="block font-medium text-sm mb-1.5">Industry</label>
                  <select
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    className="w-full p-1.5 border rounded text-sm"
                  >
                    <option value="technology">Technology</option>
                    <option value="finance">Finance</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="retail">Retail</option>
                    <option value="education">Education</option>
                    <option value="government">Government</option>
                  </select>
                </div>
              </div>
            </div>

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
                    max={50}
                    step={1}
                    value={currentAge}
                    onChange={(e) => setCurrentAge(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>18 years</span>
                    <span>50 years</span>
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
                    min={45}
                    max={70}
                    step={1}
                    value={retirementAge}
                    onChange={(e) => setRetirementAge(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>45 years</span>
                    <span>70 years</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Growth Parameters */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Growth Parameters</h2>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block font-medium text-sm mb-1.5">Annual Growth Rate (%)</label>
                  <input
                    type="number"
                    value={annualGrowthRate}
                    onChange={(e) => setAnnualGrowthRate(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={2}
                    max={15}
                    step={0.5}
                    value={annualGrowthRate}
                    onChange={(e) => setAnnualGrowthRate(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>2%</span>
                    <span>15%</span>
                  </div>
                </div>

                <div>
                  <label className="block font-medium text-sm mb-1.5">Promotion Frequency (years)</label>
                  <input
                    type="number"
                    value={promotionFrequency}
                    onChange={(e) => setPromotionFrequency(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={1}
                    max={10}
                    step={1}
                    value={promotionFrequency}
                    onChange={(e) => setPromotionFrequency(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>1 year</span>
                    <span>10 years</span>
                  </div>
                </div>

                <div>
                  <label className="block font-medium text-sm mb-1.5">Promotion Salary Boost (%)</label>
                  <input
                    type="number"
                    value={promotionBonus}
                    onChange={(e) => setPromotionBonus(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={5}
                    max={50}
                    step={1}
                    value={promotionBonus}
                    onChange={(e) => setPromotionBonus(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>5%</span>
                    <span>50%</span>
                  </div>
                </div>

                <div>
                  <label className="block font-medium text-sm mb-1.5">Annual Bonus (% of salary)</label>
                  <input
                    type="number"
                    value={bonusPercentage}
                    onChange={(e) => setBonusPercentage(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={0}
                    max={50}
                    step={1}
                    value={bonusPercentage}
                    onChange={(e) => setBonusPercentage(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>0%</span>
                    <span>50%</span>
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
                      <label className="block font-medium text-sm mb-1.5">Number of Job Changes</label>
                      <input
                        type="number"
                        value={jobChanges}
                        onChange={(e) => setJobChanges(Number(e.target.value))}
                        className="w-full p-1.5 border rounded text-sm"
                      />
                      <input
                        type="range"
                        min={0}
                        max={10}
                        step={1}
                        value={jobChanges}
                        onChange={(e) => setJobChanges(Number(e.target.value))}
                        className="w-full mt-2"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>0</span>
                        <span>10</span>
                      </div>
                    </div>

                    <div>
                      <label className="block font-medium text-sm mb-1.5">Job Change Salary Boost (%)</label>
                      <input
                        type="number"
                        value={jobChangeSalaryBoost}
                        onChange={(e) => setJobChangeSalaryBoost(Number(e.target.value))}
                        className="w-full p-1.5 border rounded text-sm"
                      />
                      <input
                        type="range"
                        min={0}
                        max={70}
                        step={5}
                        value={jobChangeSalaryBoost}
                        onChange={(e) => setJobChangeSalaryBoost(Number(e.target.value))}
                        className="w-full mt-2"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>0%</span>
                        <span>70%</span>
                      </div>
                    </div>

                    <div>
                      <label className="block font-medium text-sm mb-1.5">Number of Skill Upgrades</label>
                      <input
                        type="number"
                        value={skillUpgrades}
                        onChange={(e) => setSkillUpgrades(Number(e.target.value))}
                        className="w-full p-1.5 border rounded text-sm"
                      />
                      <input
                        type="range"
                        min={0}
                        max={10}
                        step={1}
                        value={skillUpgrades}
                        onChange={(e) => setSkillUpgrades(Number(e.target.value))}
                        className="w-full mt-2"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>0</span>
                        <span>10</span>
                      </div>
                    </div>

                    <div>
                      <label className="block font-medium text-sm mb-1.5">Skill Upgrade Salary Boost (%)</label>
                      <input
                        type="number"
                        value={skillUpgradeBonus}
                        onChange={(e) => setSkillUpgradeBonus(Number(e.target.value))}
                        className="w-full p-1.5 border rounded text-sm"
                      />
                      <input
                        type="range"
                        min={0}
                        max={40}
                        step={1}
                        value={skillUpgradeBonus}
                        onChange={(e) => setSkillUpgradeBonus(Number(e.target.value))}
                        className="w-full mt-2"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>0%</span>
                        <span>40%</span>
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
                <h3 className="text-xl font-bold">Career Projection</h3>
                <button onClick={handleShare} className="p-1 hover:bg-blue-700 rounded">
                  <Share size={18} />
                </button>
              </div>
            </div>

            <div className="p-4 flex flex-col h-[calc(100%-68px)] justify-between">
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">
                    {formatCurrency(results.peakSalary)}
                  </div>
                  <div className="text-sm text-gray-300">Peak Annual Salary</div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-t border-white/20">
                    <span className="text-sm">Lifetime Earnings</span>
                    <span className="font-bold">{formatCurrency(results.careerEarnings)}</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-2 border-t border-white/20">
                    <span className="text-sm">Average Annual Salary</span>
                    <span className="font-bold">{formatCurrency(results.averageSalary)}</span>
                  </div>

                  <div className="flex justify-between items-center py-2 border-t border-white/20">
                    <span className="text-sm">Average Annual Growth</span>
                    <span className="font-bold">{results.averageAnnualGrowth.toFixed(1)}%</span>
                  </div>

                  <div className="flex justify-between items-center py-2 border-t border-white/20">
                    <span className="text-sm">Number of Promotions</span>
                    <span className="font-bold">{results.promotions}</span>
                  </div>

                  <div className="flex justify-between items-center py-2 border-t border-white/20">
                    <span className="text-sm">Job Change Impact</span>
                    <span className="font-bold">{formatCurrency(results.jobChangeImpact)}</span>
                  </div>

                  <div className="flex justify-between items-center py-2 border-t border-white/20">
                    <span className="text-sm">Skill Upgrade Impact</span>
                    <span className="font-bold">{formatCurrency(results.skillUpgradeImpact)}</span>
                  </div>
                </div>
              </div>

              <button className="w-full bg-orange-400 text-white py-2 rounded-lg mt-4 hover:bg-orange-500 transition-colors text-sm">
                Build Your Career Plan →
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

export default CareerGrowthCalculator;