import React, { useState, useEffect } from 'react';
import { Share } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const SuperannuationCalculator = () => {
  const [values, setValues] = useState({
    currentAge: 30,
    retirementAge: 60,
    currentBalance: 500000,
    annualSalary: 800000,
    employerContribution: 10,
    personalContribution: 5,
    investmentReturn: 7,
    inflationRate: 2.5
  });
  const [chartData, setChartData] = useState([]);
  const [result, setResult] = useState({});

  useEffect(() => {
    const result = calculateSuperannuation();
    setChartData(result.chartData);
    setResult(result);
  }, [values]);

  const handleChange = (key, value) => {
    setValues(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const calculateSuperannuation = () => {
    const yearsToRetirement = values.retirementAge - values.currentAge;
    let balance = values.currentBalance;
    let yearlyData = [];

    // Calculate data points at larger intervals for smoother rendering
    const interval = Math.max(1, Math.floor(yearsToRetirement / 20)); // Show max 20 points
    
    for (let year = 0; year <= yearsToRetirement; year += interval) {
      const totalSalary = values.annualSalary * Math.pow(1 + values.inflationRate / 100, year);
      const yearlyEmployerContribution = totalSalary * (values.employerContribution / 100);
      const yearlyPersonalContribution = totalSalary * (values.personalContribution / 100);
      const returns = balance * (values.investmentReturn / 100);
      
      balance = balance + yearlyEmployerContribution + yearlyPersonalContribution + returns;
      
      yearlyData.push({
        age: values.currentAge + year,
        balance: Math.round(balance),
        salary: Math.round(totalSalary)
      });
    }

    // Always include the final year if not already included
    if (yearlyData[yearlyData.length - 1].age !== values.retirementAge) {
      const year = yearsToRetirement;
      const totalSalary = values.annualSalary * Math.pow(1 + values.inflationRate / 100, year);
      const yearlyEmployerContribution = totalSalary * (values.employerContribution / 100);
      const yearlyPersonalContribution = totalSalary * (values.personalContribution / 100);
      const returns = balance * (values.investmentReturn / 100);
      
      balance = balance + yearlyEmployerContribution + yearlyPersonalContribution + returns;
      
      yearlyData.push({
        age: values.currentAge + year,
        balance: Math.round(balance),
        salary: Math.round(totalSalary)
      });
    }

    return {
      projectedBalance: balance,
      yearlyContribution: (values.employerContribution + values.personalContribution) * values.annualSalary / 100,
      totalContributions: yearlyData.reduce((acc, curr) => acc + (curr.salary * (values.employerContribution + values.personalContribution) / 100), 0),
      totalReturns: balance - values.currentBalance - yearlyData.reduce((acc, curr) => acc + (curr.salary * (values.employerContribution + values.personalContribution) / 100), 0),
      chartData: yearlyData
    };
  };

  const formatCurrency = (amount) => {
    const numStr = Math.abs(amount).toFixed(0);
    const lastThree = numStr.substring(numStr.length - 3);
    const otherNums = numStr.substring(0, numStr.length - 3);
    const formatted = otherNums !== '' 
      ? otherNums.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + ',' + lastThree 
      : lastThree;
    return '₹' + (amount < 0 ? '-' : '') + formatted;
  };

  const InputField = ({ label, value, onChange, min, max, unit, step = 1, helpText }) => (
    <div className="mb-4">
      <label className="block font-semibold text-gray-800 mb-1 text-sm">{label}</label>
      {helpText && <p className="text-xs text-gray-600 mb-1">{helpText}</p>}
      <div className="flex gap-2">
        <input 
          type="number" 
          value={value} 
          onChange={e => {
            const val = parseFloat(e.target.value);
            if (!isNaN(val) && val >= min && val <= max) {
              onChange(val);
            }
          }}
          className="w-32 px-2 py-1 border rounded text-sm" 
        />
        <span className="text-sm text-gray-600">{unit}</span>
      </div>
      <div className="mt-2">
        <input 
          type="range" 
          min={min} 
          max={max} 
          step={step} 
          value={value}
          onChange={e => onChange(parseFloat(e.target.value))}
          className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer" 
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>{unit === 'years' || unit === '%' ? min : formatCurrency(min)}</span>
          <span>{unit === 'years' || unit === '%' ? max : formatCurrency(max)}</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      <div className="container mx-auto">
        <div className="mb-4 pt-24">
          <h1 className="text-2xl font-bold text-gray-900">Superannuation Calculator</h1>
          <p className="text-sm text-gray-600 mt-1">Plan your retirement with our superannuation calculator</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-start">
          <div className="lg:col-span-2 space-y-3">
            <div className="grid grid-cols-2 gap-6">
              <InputField 
                label="Current Age" 
                value={values.currentAge}
                onChange={v => handleChange('currentAge', v)}
                min={18}
                max={75}
                unit="years"
                helpText="What is your current age?"
              />
              <InputField 
                label="Retirement Age" 
                value={values.retirementAge}
                onChange={v => handleChange('retirementAge', v)}
                min={45}
                max={75}
                unit="years"
                helpText="At what age do you plan to retire?"
              />
              <InputField 
                label="Current Balance" 
                value={values.currentBalance}
                onChange={v => handleChange('currentBalance', v)}
                min={0}
                max={10000000}
                unit="₹"
                step={10000}
                helpText="What is your current superannuation balance?"
              />
              <InputField 
                label="Annual Salary" 
                value={values.annualSalary}
                onChange={v => handleChange('annualSalary', v)}
                min={100000}
                max={10000000}
                unit="₹"
                step={10000}
                helpText="What is your current annual salary?"
              />
              <InputField 
                label="Employer Contribution" 
                value={values.employerContribution}
                onChange={v => handleChange('employerContribution', v)}
                min={0}
                max={30}
                unit="%"
                step={0.5}
                helpText="What percentage does your employer contribute?"
              />
              <InputField 
                label="Personal Contribution" 
                value={values.personalContribution}
                onChange={v => handleChange('personalContribution', v)}
                min={0}
                max={30}
                unit="%"
                step={0.5}
                helpText="What percentage do you contribute personally?"
              />
              <InputField 
                label="Investment Return" 
                value={values.investmentReturn}
                onChange={v => handleChange('investmentReturn', v)}
                min={1}
                max={15}
                unit="%"
                step={0.5}
                helpText="Expected annual return on investment"
              />
              <InputField 
                label="Inflation Rate" 
                value={values.inflationRate}
                onChange={v => handleChange('inflationRate', v)}
                min={1}
                max={10}
                unit="%"
                step={0.5}
                helpText="Expected annual inflation rate"
              />
            </div>
          </div>

          <div className="bg-[#113262] text-white p-4 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold">Projected Balance at Retirement</h3>
              <button className="p-1.5 hover:bg-[#1e3a8a] rounded">
                <Share size={18} />
              </button>
            </div>

            <div className="mb-6">
              <div className="text-3xl font-bold mb-1">{formatCurrency(result.projectedBalance)}</div>
              <div className="text-sm text-gray-300">Estimated balance at retirement</div>
            </div>

            <div className="space-y-3">
              <h4 className="text-sm font-medium text-gray-300">Contribution Breakdown</h4>
              
              <div className="space-y-2">
                <div className="flex justify-between py-1.5 border-t border-white/20">
                  <span className="text-sm">Yearly Contribution</span>
                  <span className="font-bold">{formatCurrency(result.yearlyContribution)}</span>
                </div>
                
                <div className="flex justify-between py-1.5 border-t border-white/20">
                  <span className="text-sm">Total Contributions</span>
                  <span className="font-bold">{formatCurrency(result.totalContributions)}</span>
                </div>

                <div className="flex justify-between py-1.5 border-t border-white/20">
                  <span className="text-sm">Investment Returns</span>
                  <span className="font-bold">{formatCurrency(result.totalReturns)}</span>
                </div>
              </div>
            </div>

            <button className="w-full bg-[#fb923c] text-white py-2 rounded-lg mt-6 text-sm hover:bg-[#f97316] transition-colors">
              Start Planning →
            </button>
          </div>
        </div>

        <div className="mt-8 bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-bold mb-6">Balance Progression Over Time</h3>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart 
                data={chartData} 
                margin={{ top: 20, right: 30, left: 65, bottom: 20 }}
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
                    const formattedValue = (value / 100000).toFixed(2);
                    return `₹${formattedValue}L`;
                  }}
                  label={{ 
                    value: 'Balance (in Lakhs)', 
                    angle: -90, 
                    position: 'insideLeft',
                    offset: -50,
                    style: { textAnchor: 'middle' }
                  }}
                  tick={{ fontSize: 12 }}
                  tickMargin={10}
                />
                <Tooltip 
                  formatter={(value) => {
                    const formattedValue = (value / 100000).toFixed(2);
                    return [`₹${formattedValue} Lakhs`, 'Balance'];
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
    </div>
  );
};

export default SuperannuationCalculator;