import React, { useState, useEffect } from 'react';
import { Share } from 'lucide-react';

const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount).replace(/^(₹)/, '₹');
};

const SIPCalculator = () => {
  const [investmentType, setInvestmentType] = useState('sip');
  const [investment, setInvestment] = useState(5000);
  const [returnRate, setReturnRate] = useState(12);
  const [timePeriod, setTimePeriod] = useState(5);
  const [includeStepUp, setIncludeStepUp] = useState(false);
  const [stepUpRate, setStepUpRate] = useState(5);

  const [results, setResults] = useState({
    investedAmount: 0,
    totalReturn: 0,
    estimatedReturns: 0
  });

  const calculateSIPReturns = () => {
    let monthlyInvestment = investment;
    const monthlyRate = returnRate / (12 * 100);
    const months = timePeriod * 12;
    let totalInvestment = 0;
    let futureValue = 0;

    for (let i = 0; i < months; i++) {
      if (includeStepUp && i > 0 && i % 12 === 0) {
        monthlyInvestment += monthlyInvestment * (stepUpRate / 100);
      }
      totalInvestment += monthlyInvestment;
      futureValue = (monthlyInvestment + futureValue) * (1 + monthlyRate);
    }

    return {
      investedAmount: totalInvestment,
      totalReturn: futureValue,
      estimatedReturns: futureValue - totalInvestment
    };
  };

  const calculateLumpsumReturns = () => {
    const principal = investment;
    const rate = returnRate / 100;
    const time = timePeriod;
    
    const totalValue = principal * Math.pow(1 + rate, time);
    const investedAmount = principal;
    const estimatedReturns = totalValue - investedAmount;

    return {
      investedAmount,
      totalReturn: totalValue,
      estimatedReturns
    };
  };

  useEffect(() => {
    const results = investmentType === 'lumpsum' 
      ? calculateLumpsumReturns() 
      : calculateSIPReturns();
    setResults(results);
  }, [investment, returnRate, timePeriod, includeStepUp, stepUpRate, investmentType]);

  const CircleChart = ({ ratio }) => {
    const startAngle = 90; // Start from top
    const maxAngle = 360;
    const gap = 4; // Gap angle in degrees
    
    const calculateCoordinates = (angle) => {
      const angleInRadians = ((angle - 90) * Math.PI) / 180;
      const radius = 36; // SVG coordinate system
      const x = 50 + radius * Math.cos(angleInRadians);
      const y = 50 + radius * Math.sin(angleInRadians);
      return { x, y };
    };

    const createArc = (startAngle, endAngle, color) => {
      const start = calculateCoordinates(startAngle);
      const end = calculateCoordinates(endAngle);
      const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

      return (
        <path
          d={`M ${start.x} ${start.y} A 36 36 0 ${largeArcFlag} 1 ${end.x} ${end.y}`}
          fill="none"
          stroke={color}
          strokeWidth="15"
          strokeLinecap="round"
        />
      );
    };

    const investedRatio = ratio;
    const returnsRatio = 1 - ratio;

    const investedEndAngle = startAngle + (maxAngle * investedRatio) - gap;
    const returnsStartAngle = startAngle + (maxAngle * investedRatio) + gap;
    const returnsEndAngle = startAngle + maxAngle - gap;

    return (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <circle cx="50" cy="50" r="36" stroke="#E6E6E6" strokeWidth="15" fill="none" />
        {investedRatio > 0 && createArc(startAngle, investedEndAngle, "#1C52A0")}
        {returnsRatio > 0 && createArc(returnsStartAngle, returnsEndAngle, "#F49611")}
      </svg>
    );
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white">
      <h2 className="text-2xl font-semibold mb-2">SIP Calculator</h2>
      <p className="text-gray-600 mb-8">Calculate your return on investment on SIP over time</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-8">

          {/* Investment Amount */}
          <div>
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-medium text-gray-800">
                  {investmentType === 'sip' ? 'Monthly Investment' : 'Total Investment'}
                </h3>
                <p className="text-sm text-gray-600">
                  {investmentType === 'sip' 
                    ? 'What is your monthly investment' 
                    : 'Lump sum amount you wish to invest'}
                </p>
              </div>
              <input
                type="number"
                value={investment}
                onChange={(e) => setInvestment(Number(e.target.value))}
                className="w-24 p-2 text-right bg-gray-50 border rounded"
              />
            </div>
            <div className="flex justify-between text-sm text-gray-600 mb-1">
              <span>500</span>
              <span>{investmentType === 'sip' ? '1L' : '10L'}</span>
            </div>
            <input
              type="range"
              min={500}
              max={investmentType === 'sip' ? 100000 : 1000000}
              value={investment}
              onChange={(e) => setInvestment(Number(e.target.value))}
              className="w-full"
            />
          </div>

          {/* Expected Return Rate */}
          <div>
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-medium text-gray-800">Expected Return Rate</h3>
                <p className="text-sm text-gray-600">What is your expected rate of return every year</p>
              </div>
              <input
                type="number"
                value={returnRate}
                onChange={(e) => setReturnRate(Number(e.target.value))}
                className="w-24 p-2 text-right bg-gray-50 border rounded"
              />
            </div>
            <div className="flex justify-between text-sm text-gray-600 mb-1">
              <span>5%</span>
              <span>30%</span>
            </div>
            <input
              type="range"
              min={5}
              max={30}
              value={returnRate}
              onChange={(e) => setReturnRate(Number(e.target.value))}
              className="w-full"
            />
          </div>

          {/* Time Period */}
          <div>
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-medium text-gray-800">Time Period</h3>
                <p className="text-sm text-gray-600">Total number of years you want to invest</p>
              </div>
              <input
                type="number"
                value={timePeriod}
                onChange={(e) => setTimePeriod(Number(e.target.value))}
                className="w-24 p-2 text-right bg-gray-50 border rounded"
              />
            </div>
            <div className="flex justify-between text-sm text-gray-600 mb-1">
              <span>1 year</span>
              <span>40 years</span>
            </div>
            <input
              type="range"
              min={1}
              max={40}
              value={timePeriod}
              onChange={(e) => setTimePeriod(Number(e.target.value))}
              className="w-full"
            />
          </div>

          {/* Step Up Option (only for SIP) */}
          {investmentType === 'sip' && (
            <div className="space-y-6">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={includeStepUp}
                  onChange={(e) => setIncludeStepUp(e.target.checked)}
                  className="w-4 h-4 rounded border-gray-300"
                />
                <span>Include Step Up?</span>
              </label>

              {includeStepUp && (
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-medium text-gray-800">Annual Step Up</h3>
                      <p className="text-sm text-gray-600">Growth in investment per annum</p>
                    </div>
                    <input
                      type="number"
                      value={stepUpRate}
                      onChange={(e) => setStepUpRate(Number(e.target.value))}
                      className="w-24 p-2 text-right bg-gray-50 border rounded"
                    />
                  </div>
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>1%</span>
                    <span>50%</span>
                  </div>
                  <input
                    type="range"
                    min={1}
                    max={50}
                    value={stepUpRate}
                    onChange={(e) => setStepUpRate(Number(e.target.value))}
                    className="w-full"
                  />
                </div>
              )}
            </div>
          )}
        </div>

        {/* Results Section */}
        <div className="bg-gray-50 p-6 rounded-lg">
          {/* Investment Type Toggle */}
          <div className="flex justify-end gap-2 mb-6">
            <button
              onClick={() => setInvestmentType('sip')}
              className={`px-6 py-2 rounded ${
                investmentType === 'sip' 
                  ? 'bg-[#1C52A0] text-white' 
                  : 'bg-gray-50 border border-gray-200'
              }`}
            >
              SIP
            </button>
            <button
              onClick={() => setInvestmentType('lumpsum')}
              className={`px-6 py-2 rounded ${
                investmentType === 'lumpsum' 
                  ? 'bg-[#1C52A0] text-white' 
                  : 'bg-gray-50 border border-gray-200'
              }`}
            >
              Lumpsum
            </button>
          </div>

          <div className="flex justify-between items-center mb-6">
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#F49611]"></div>
                <span className="text-sm">Estimated Returns</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#1C52A0]"></div>
                <span className="text-sm">Amount Invested</span>
              </div>
            </div>
            <Share className="text-gray-600 cursor-pointer" size={20} />
          </div>

          <div className="w-48 h-48 mx-auto mb-6">
            <CircleChart ratio={results.investedAmount / results.totalReturn} />
          </div>

          <div className="space-y-4">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Invested Amount</span>
              <span className="font-medium">{formatCurrency(Math.round(results.investedAmount))}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Total Return</span>
              <span className="font-medium">{formatCurrency(Math.round(results.totalReturn))}</span>
            </div>
            <div className="flex justify-between text-lg">
              <span className="font-medium">Estimated Returns</span>
              <span className="font-bold">{formatCurrency(Math.round(results.estimatedReturns))}</span>
            </div>
          </div>

          <button className="w-full mt-6 py-3 bg-[#1C52A0] text-white rounded-lg hover:bg-[#143970] transition-colors">
            Get Started →
          </button>
        </div>
      </div>
    </div>
  );
};

export default SIPCalculator;