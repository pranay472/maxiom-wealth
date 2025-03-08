import React, { useState, useEffect } from 'react';
import { Share, ChevronDown } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
};

const SuperannuationCalculator = () => {
  const [currentAge, setCurrentAge] = useState(30);
  const [retirementAge, setRetirementAge] = useState(60);
  const [currentBalance, setCurrentBalance] = useState(500000);
  const [annualSalary, setAnnualSalary] = useState(800000);
  const [employerContribution, setEmployerContribution] = useState(10);
  const [personalContribution, setPersonalContribution] = useState(5);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [showShareToast, setShowShareToast] = useState(false);
  const [investmentReturn, setInvestmentReturn] = useState(7);
  const [inflationRate, setInflationRate] = useState(2.5);
  const [chartData, setChartData] = useState([]);
  const [result, setResult] = useState({
    projectedBalance: 0,
    yearlyContribution: 0,
    totalContributions: 0,
    totalReturns: 0
  });

  useEffect(() => {
    const result = calculateSuperannuation();
    setChartData(result.chartData);
    setResult(result);
  }, [
    currentAge, 
    retirementAge, 
    currentBalance, 
    annualSalary, 
    employerContribution, 
    personalContribution, 
    investmentReturn, 
    inflationRate
  ]);

  const calculateSuperannuation = () => {
    const yearsToRetirement = retirementAge - currentAge;
    let balance = currentBalance;
    let yearlyData = [];

    // Calculate data points at larger intervals for smoother rendering
    const interval = Math.max(1, Math.floor(yearsToRetirement / 20)); // Show max 20 points
    
    for (let year = 0; year <= yearsToRetirement; year += interval) {
      const totalSalary = annualSalary * Math.pow(1 + inflationRate / 100, year);
      const yearlyEmployerContribution = totalSalary * (employerContribution / 100);
      const yearlyPersonalContribution = totalSalary * (personalContribution / 100);
      const returns = balance * (investmentReturn / 100);
      
      balance = balance + yearlyEmployerContribution + yearlyPersonalContribution + returns;
      
      yearlyData.push({
        age: currentAge + year,
        balance: Math.round(balance),
        salary: Math.round(totalSalary)
      });
    }

    // Always include the final year if not already included
    if (yearlyData[yearlyData.length - 1].age !== retirementAge) {
      const year = yearsToRetirement;
      const totalSalary = annualSalary * Math.pow(1 + inflationRate / 100, year);
      const yearlyEmployerContribution = totalSalary * (employerContribution / 100);
      const yearlyPersonalContribution = totalSalary * (personalContribution / 100);
      const returns = balance * (investmentReturn / 100);
      
      balance = balance + yearlyEmployerContribution + yearlyPersonalContribution + returns;
      
      yearlyData.push({
        age: currentAge + year,
        balance: Math.round(balance),
        salary: Math.round(totalSalary)
      });
    }

    return {
      projectedBalance: balance,
      yearlyContribution: (employerContribution + personalContribution) * annualSalary / 100,
      totalContributions: yearlyData.reduce((acc, curr) => acc + (curr.salary * (employerContribution + personalContribution) / 100), 0),
      totalReturns: balance - currentBalance - yearlyData.reduce((acc, curr) => acc + (curr.salary * (employerContribution + personalContribution) / 100), 0),
      chartData: yearlyData
    };
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

  return (
    <div className="calculator-container pt-24">
      <div className="calculator-header text-center mb-8">
        <h1 className="text-2xl font-semibold text-[#113262] mb-2">Superannuation Calculator</h1>
        <h2 className="text-lg text-gray-600">Plan your retirement with our superannuation calculator</h2>
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
                    max={75}
                    value={currentAge}
                    onChange={(e) => setCurrentAge(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>18 years</span>
                    <span>75 years</span>
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
                    max={75}
                    value={retirementAge}
                    onChange={(e) => setRetirementAge(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>45 years</span>
                    <span>75 years</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Financial Details */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Financial Details</h2>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block font-medium text-sm mb-1.5">Current Balance</label>
                  <input
                    type="number"
                    value={currentBalance}
                    onChange={(e) => setCurrentBalance(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={0}
                    max={10000000}
                    step={10000}
                    value={currentBalance}
                    onChange={(e) => setCurrentBalance(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>₹0</span>
                    <span>₹1Cr</span>
                  </div>
                </div>

                <div>
                  <label className="block font-medium text-sm mb-1.5">Annual Salary</label>
                  <input
                    type="number"
                    value={annualSalary}
                    onChange={(e) => setAnnualSalary(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={100000}
                    max={10000000}
                    step={10000}
                    value={annualSalary}
                    onChange={(e) => setAnnualSalary(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>₹1L</span>
                    <span>₹1Cr</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contribution Details */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Contribution Details</h2>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block font-medium text-sm mb-1.5">Employer Contribution (%)</label>
                  <input
                    type="number"
                    value={employerContribution}
                    onChange={(e) => setEmployerContribution(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={0}
                    max={30}
                    step={0.5}
                    value={employerContribution}
                    onChange={(e) => setEmployerContribution(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>0%</span>
                    <span>30%</span>
                  </div>
                </div>

                <div>
                  <label className="block font-medium text-sm mb-1.5">Personal Contribution (%)</label>
                  <input
                    type="number"
                    value={personalContribution}
                    onChange={(e) => setPersonalContribution(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={0}
                    max={30}
                    step={0.5}
                    value={personalContribution}
                    onChange={(e) => setPersonalContribution(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>0%</span>
                    <span>30%</span>
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
                      <label className="block font-medium text-sm mb-1.5">Investment Return (%)</label>
                      <input
                        type="number"
                        value={investmentReturn}
                        onChange={(e) => setInvestmentReturn(Number(e.target.value))}
                        className="w-full p-1.5 border rounded text-sm"
                      />
                      <input
                        type="range"
                        min={1}
                        max={15}
                        step={0.5}
                        value={investmentReturn}
                        onChange={(e) => setInvestmentReturn(Number(e.target.value))}
                        className="w-full mt-2"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>1%</span>
                        <span>15%</span>
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
                        min={1}
                        max={10}
                        step={0.5}
                        value={inflationRate}
                        onChange={(e) => setInflationRate(Number(e.target.value))}
                        className="w-full mt-2"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>1%</span>
                        <span>10%</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Chart */}
            <div className="bg-white rounded-lg shadow p-4 lg:col-span-2">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Balance Progression Over Time</h2>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart 
                    data={chartData} 
                    margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
                    <XAxis 
                      dataKey="age" 
                      label={{ 
                        value: 'Age (Years)', 
                        position: 'bottom', 
                        offset: 0,
                        style: { textAnchor: 'middle' }
                      }}
                      tick={{ fontSize: 12 }}
                      tickMargin={10}
                      interval="preserveStartEnd"
                    />
                    <YAxis 
                      tickFormatter={(value) => {
                        if (value === 0) return '₹0';
                        const formattedValue = (value / 100000).toFixed(1);
                        return `₹${formattedValue}L`;
                      }}
                      tick={{ fontSize: 12 }}
                      tickMargin={10}
                    />
                    <Tooltip 
                      formatter={(value) => {
                        return [formatCurrency(value), 'Balance'];
                      }}
                      labelFormatter={(value) => `Age: ${value} years`}
                      contentStyle={{
                        backgroundColor: '#fff',
                        border: '1px solid #e5e7eb',
                        padding: '8px',
                        fontSize: '12px'
                      }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="balance" 
                      stroke="#113262" 
                      strokeWidth={2}
                      dot={false}
                      activeDot={{ r: 6, fill: "#113262" }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="bg-[#113262] text-white rounded-lg h-[500px] sticky top-6">
            <div className="p-4 border-b border-white/20">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold">Retirement Projection</h3>
                <button onClick={handleShare} className="p-1 hover:bg-blue-700 rounded">
                  <Share size={18} />
                </button>
              </div>
            </div>

            <div className="p-4 flex flex-col h-[calc(100%-68px)] justify-between">
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">
                    {formatCurrency(result.projectedBalance)}
                  </div>
                  <div className="text-sm text-gray-300">Projected balance at retirement</div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-t border-white/20">
                    <span className="text-sm">Yearly Contribution</span>
                    <span className="font-bold">{formatCurrency(result.yearlyContribution)}</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-2 border-t border-white/20">
                    <span className="text-sm">Total Contributions</span>
                    <span className="font-bold">{formatCurrency(result.totalContributions)}</span>
                  </div>

                  <div className="flex justify-between items-center py-2 border-t border-white/20">
                    <span className="text-sm">Investment Returns</span>
                    <span className="font-bold">{formatCurrency(result.totalReturns)}</span>
                  </div>
                </div>
              </div>

              <button className="w-full bg-orange-400 text-white py-2 rounded-lg mt-4 hover:bg-orange-500 transition-colors text-sm">
                Start Planning →
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

export default SuperannuationCalculator;