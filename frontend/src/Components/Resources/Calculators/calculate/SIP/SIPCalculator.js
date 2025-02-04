// import React, { useState, useEffect } from 'react';
// import { Share, ChevronDown } from 'lucide-react';

// const formatCurrency = (amount) => {
//   return new Intl.NumberFormat('en-IN', {
//     style: 'currency',
//     currency: 'INR',
//     maximumFractionDigits: 0
//   }).format(amount);
// };

// const SIPCalculator = () => {
//   // State declarations
//   const [investmentType, setInvestmentType] = useState('sip');
//   const [investment, setInvestment] = useState(5000);
//   const [returnRate, setReturnRate] = useState(12);
//   const [timePeriod, setTimePeriod] = useState(5);
//   const [showStepUp, setShowStepUp] = useState(false);
//   const [stepUpRate, setStepUpRate] = useState(5);
//   const [results, setResults] = useState({
//     investedAmount: 0,
//     totalReturn: 0,
//     estimatedReturns: 0
//   });
//   // Calculation functions
//   const calculateSIPReturns = () => {
//     let monthlyInvestment = investment;
//     const monthlyRate = returnRate / (12 * 100);
//     const months = timePeriod * 12;
//     let totalInvestment = 0;
//     let futureValue = 0;

//     for (let i = 0; i < months; i++) {
//       if (showStepUp && i > 0 && i % 12 === 0) {
//         monthlyInvestment += monthlyInvestment * (stepUpRate / 100);
//       }
//       totalInvestment += monthlyInvestment;
//       futureValue = (monthlyInvestment + futureValue) * (1 + monthlyRate);
//     }

//     return {
//       investedAmount: totalInvestment,
//       totalReturn: futureValue,
//       estimatedReturns: futureValue - totalInvestment
//     };
//   };
//   const calculateLumpsumReturns = () => {
//     const principal = investment;
//     const rate = returnRate / 100;
//     const time = timePeriod;

//     const totalValue = principal * Math.pow(1 + rate, time);
//     return {
//       investedAmount: principal,
//       totalReturn: totalValue,
//       estimatedReturns: totalValue - principal
//     };
//   };
//   useEffect(() => {
//     const results = investmentType === 'sip'
//       ? calculateSIPReturns()
//       : calculateLumpsumReturns();
//     setResults(results);
//   }, [investment, returnRate, timePeriod, showStepUp, stepUpRate, investmentType]);
//   // CircleChart component definition
//   const CircleChart = ({ ratio }) => {
//     // ... keep the existing CircleChart implementation ...
//     return (
//       <svg viewBox="0 0 100 100" className="w-full h-full">
//         {/* Existing SVG implementation */}
//       </svg>
//     );
//   };

//   // Calculation functions remain same as original

//   return (
//     <div className="calculator-container pt-24">
//       <div className="calculator-header text-center mb-8">
//         <h1 className="text-2xl font-semibold text-[#113262] mb-2">SIP Wealth Builder</h1>
//         <h2 className="text-lg text-gray-600">Systematic Investment Plan Calculator</h2>
//       </div>

//       <div className="max-w-5xl mx-auto p-4">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//           {/* Input Sections */}
//           <div className="lg:col-span-2 space-y-8">
//             {/* Calculation Type Toggle */}
//             <div className="bg-white rounded-lg shadow p-4">
//               <h2 className="text-lg font-bold text-gray-900 mb-4">Calculation Type</h2>
//               <div className="flex gap-4">
//                 <button
//                   onClick={() => setInvestmentType('sip')}
//                   className={`flex-1 py-2 rounded ${investmentType === 'sip'
//                       ? 'bg-[#113262] text-white'
//                       : 'bg-gray-100 text-gray-700'
//                     }`}
//                 >
//                   SIP Calculator
//                 </button>
//                 <button
//                   onClick={() => setInvestmentType('lumpsum')}
//                   className={`flex-1 py-2 rounded ${investmentType === 'lumpsum'
//                       ? 'bg-[#113262] text-white'
//                       : 'bg-gray-100 text-gray-700'
//                     }`}
//                 >
//                   Lumpsum Calculator
//                 </button>
//               </div>
//             </div>

//             {/* Investment Details Section */}
//             <div className="bg-white rounded-lg shadow p-4">
//               <h2 className="text-lg font-bold text-gray-900 mb-4">Investment Details</h2>
//               <div className="grid grid-cols-2 gap-6">
//                 <div>
//                   <label className="block font-medium text-sm mb-1.5">
//                     {investmentType === 'sip' ? 'Monthly Investment' : 'Lumpsum Amount'}
//                   </label>
//                   <input
//                     type="number"
//                     value={investment}
//                     onChange={(e) => setInvestment(Number(e.target.value))}
//                     className="w-full p-1.5 border rounded text-sm"
//                   />
//                   <input
//                     type="range"
//                     min={500}
//                     max={investmentType === 'sip' ? 100000 : 1000000}
//                     value={investment}
//                     onChange={(e) => setInvestment(Number(e.target.value))}
//                     className="w-full mt-2"
//                   />
//                   <div className="flex justify-between text-xs text-gray-500 mt-1">
//                     <span>₹500</span>
//                     <span>{investmentType === 'sip' ? '₹1L' : '₹10L'}</span>
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block font-medium text-sm mb-1.5">Expected Returns (%)</label>
//                   <input
//                     type="number"
//                     value={returnRate}
//                     onChange={(e) => setReturnRate(Number(e.target.value))}
//                     className="w-full p-1.5 border rounded text-sm"
//                   />
//                   <input
//                     type="range"
//                     min={5}
//                     max={30}
//                     step={0.1}
//                     value={returnRate}
//                     onChange={(e) => setReturnRate(Number(e.target.value))}
//                     className="w-full mt-2"
//                   />
//                   <div className="flex justify-between text-xs text-gray-500 mt-1">
//                     <span>5%</span>
//                     <span>30%</span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Time Period Section */}
//             <div className="bg-white rounded-lg shadow p-4">
//               <h2 className="text-lg font-bold text-gray-900 mb-4">Time Period</h2>
//               <div>
//                 <label className="block font-medium text-sm mb-1.5">Investment Duration (Years)</label>
//                 <input
//                   type="number"
//                   value={timePeriod}
//                   onChange={(e) => setTimePeriod(Number(e.target.value))}
//                   className="w-full p-1.5 border rounded text-sm"
//                 />
//                 <input
//                   type="range"
//                   min={1}
//                   max={40}
//                   value={timePeriod}
//                   onChange={(e) => setTimePeriod(Number(e.target.value))}
//                   className="w-full mt-2"
//                 />
//                 <div className="flex justify-between text-xs text-gray-500 mt-1">
//                   <span>1 Year</span>
//                   <span>40 Years</span>
//                 </div>
//               </div>
//             </div>

//             {/* Step Up Section */}
//             {investmentType === 'sip' && (
//               <div className="bg-white rounded-lg shadow">
//                 <button
//                   onClick={() => setShowStepUp(!showStepUp)}
//                   className="w-full p-4 flex justify-between items-center hover:bg-gray-50"
//                 >
//                   <h2 className="text-lg font-bold text-gray-900">Step Up Options</h2>
//                   <ChevronDown
//                     className={`transform transition-transform ${showStepUp ? 'rotate-180' : ''}`}
//                     size={20}
//                   />
//                 </button>

//                 {showStepUp && (
//                   <div className="p-4 border-t">
//                     <div className="grid grid-cols-2 gap-6">
//                       <div>
//                         <label className="block font-medium text-sm mb-1.5">Annual Step Up (%)</label>
//                         <input
//                           type="number"
//                           value={stepUpRate}
//                           onChange={(e) => setStepUpRate(Number(e.target.value))}
//                           className="w-full p-1.5 border rounded text-sm"
//                         />
//                         <input
//                           type="range"
//                           min={1}
//                           max={50}
//                           value={stepUpRate}
//                           onChange={(e) => setStepUpRate(Number(e.target.value))}
//                           className="w-full mt-2"
//                         />
//                         <div className="flex justify-between text-xs text-gray-500 mt-1">
//                           <span>1%</span>
//                           <span>50%</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             )}
//           </div>

//           {/* Results Section */}
//           <div className="bg-[#113262] text-white rounded-lg h-[600px] sticky top-6">
//             <div className="p-4 border-b border-white/20">
//               <div className="flex justify-between items-center">
//                 <h3 className="text-xl font-bold">Investment Summary</h3>
//                 <button className="p-1 hover:bg-blue-700 rounded">
//                   <Share size={18} />
//                 </button>
//               </div>
//             </div>

//             <div className="p-4">
//               <div className="mb-6 text-center">
//                 <div className="text-3xl font-bold mb-1">
//                   {formatCurrency(results.totalReturn)}
//                 </div>
//                 <div className="text-sm text-gray-300">Maturity Value</div>
//               </div>

//               <div className="flex justify-center mb-6">
//                 <div className="w-48 h-48">
//                   <CircleChart ratio={results.investedAmount / results.totalReturn} />
//                 </div>
//               </div>

//               <div className="space-y-4">
//                 <div className="flex justify-between items-center py-2 border-t border-white/20">
//                   <span className="text-sm">Invested Amount</span>
//                   <span className="font-bold">{formatCurrency(results.investedAmount)}</span>
//                 </div>

//                 <div className="flex justify-between items-center py-2 border-t border-white/20">
//                   <span className="text-sm">Estimated Returns</span>
//                   <span className="font-bold">{formatCurrency(results.estimatedReturns)}</span>
//                 </div>

//                 <div className="flex justify-between items-center py-2 border-t border-white/20">
//                   <span className="text-sm">Investment Period</span>
//                   <span className="font-bold">{timePeriod} Years</span>
//                 </div>
//               </div>

//               <button className="w-full bg-orange-400 text-white py-2 rounded-lg mt-6 hover:bg-orange-500 transition-colors text-sm">
//                 Start {investmentType === 'sip' ? 'SIP Investment' : 'Lumpsum Investment'} →
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SIPCalculator;








import React, { useState, useEffect } from 'react';
import { Share, ChevronDown } from 'lucide-react';

const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
};

const CircleChart = ({ ratio }) => {
  const startAngle = 90;
  const maxAngle = 360;
  const gap = 4;

  const calculateCoordinates = (angle) => {
    const angleInRadians = ((angle - 90) * Math.PI) / 180;
    const radius = 36;
    return {
      x: 50 + radius * Math.cos(angleInRadians),
      y: 50 + radius * Math.sin(angleInRadians)
    };
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

  const investedRatio = ratio || 0.5;
  const returnsRatio = 1 - investedRatio;

  const investedEndAngle = startAngle + (maxAngle * investedRatio) - gap;
  const returnsStartAngle = startAngle + (maxAngle * investedRatio) + gap;
  const returnsEndAngle = startAngle + maxAngle - gap;

  return (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <circle cx="50" cy="50" r="36" stroke="#E6E6E6" strokeWidth="15" fill="none" />
      {investedRatio > 0 && createArc(startAngle, investedEndAngle, "#F49611")}
      {returnsRatio > 0 && createArc(returnsStartAngle, returnsEndAngle, "#1C52A0")}
    </svg>
  );
};

const SIPCalculator = () => {
  const [investmentType, setInvestmentType] = useState('sip');
  const [investment, setInvestment] = useState(5000);
  const [returnRate, setReturnRate] = useState(12);
  const [timePeriod, setTimePeriod] = useState(5);
  const [showStepUp, setShowStepUp] = useState(false);
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
      if (showStepUp && i > 0 && i % 12 === 0) {
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
    return {
      investedAmount: principal,
      totalReturn: totalValue,
      estimatedReturns: totalValue - principal
    };
  };

  useEffect(() => {
    const results = investmentType === 'sip'
      ? calculateSIPReturns()
      : calculateLumpsumReturns();
    setResults(results);
  }, [investment, returnRate, timePeriod, showStepUp, stepUpRate, investmentType]);

  return (
    <div className="calculator-container pt-24">
      <div className="calculator-header text-center mb-8">
        <h1 className="text-2xl font-semibold text-[#113262] mb-2">SIP Wealth Builder</h1>
        <h2 className="text-lg text-gray-600">Systematic Investment Plan Calculator</h2>
      </div>

      <div className="max-w-5xl mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Input Sections */}
          <div className="lg:col-span-2 space-y-8">
            {/* Calculation Type Toggle */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Calculation Type</h2>
              <div className="flex gap-4">
                <button
                  onClick={() => setInvestmentType('sip')}
                  className={`flex-1 py-2 rounded ${investmentType === 'sip'
                    ? 'bg-[#113262] text-white'
                    : 'bg-gray-100 text-gray-700'
                    }`}
                >
                  SIP Calculator
                </button>
                <button
                  onClick={() => setInvestmentType('lumpsum')}
                  className={`flex-1 py-2 rounded ${investmentType === 'lumpsum'
                    ? 'bg-[#113262] text-white'
                    : 'bg-gray-100 text-gray-700'
                    }`}
                >
                  Lumpsum Calculator
                </button>
              </div>
            </div>
            {/* Investment Details Section */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Investment Details</h2>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block font-medium text-sm mb-1.5">
                    {investmentType === 'sip' ? 'Monthly Investment' : 'Lumpsum Amount'}
                  </label>
                  <input
                    type="number"
                    value={investment}
                    onChange={(e) => setInvestment(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={500}
                    max={investmentType === 'sip' ? 100000 : 1000000}
                    value={investment}
                    onChange={(e) => setInvestment(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>₹500</span>
                    <span>{investmentType === 'sip' ? '₹1L' : '₹10L'}</span>
                  </div>
                </div>

                <div>
                  <label className="block font-medium text-sm mb-1.5">Expected Returns (%)</label>
                  <input
                    type="number"
                    value={returnRate}
                    onChange={(e) => setReturnRate(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={5}
                    max={30}
                    step={0.1}
                    value={returnRate}
                    onChange={(e) => setReturnRate(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>5%</span>
                    <span>30%</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Time Period Section */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Time Period</h2>
              <div>
                <label className="block font-medium text-sm mb-1.5">Investment Duration (Years)</label>
                <input
                  type="number"
                  value={timePeriod}
                  onChange={(e) => setTimePeriod(Number(e.target.value))}
                  className="w-full p-1.5 border rounded text-sm"
                />
                <input
                  type="range"
                  min={1}
                  max={40}
                  value={timePeriod}
                  onChange={(e) => setTimePeriod(Number(e.target.value))}
                  className="w-full mt-2"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>1 Year</span>
                  <span>40 Years</span>
                </div>
              </div>
            </div>
            {/* Step Up Section */}
            {investmentType === 'sip' && (
              <div className="bg-white rounded-lg shadow">
                <button
                  onClick={() => setShowStepUp(!showStepUp)}
                  className="w-full p-4 flex justify-between items-center hover:bg-gray-50"
                >
                  <h2 className="text-lg font-bold text-gray-900">Step Up Options</h2>
                  <ChevronDown
                    className={`transform transition-transform ${showStepUp ? 'rotate-180' : ''}`}
                    size={20}
                  />
                </button>

                {showStepUp && (
                  <div className="p-4 border-t">
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label className="block font-medium text-sm mb-1.5">Annual Step Up (%)</label>
                        <input
                          type="number"
                          value={stepUpRate}
                          onChange={(e) => setStepUpRate(Number(e.target.value))}
                          className="w-full p-1.5 border rounded text-sm"
                        />
                        <input
                          type="range"
                          min={1}
                          max={50}
                          value={stepUpRate}
                          onChange={(e) => setStepUpRate(Number(e.target.value))}
                          className="w-full mt-2"
                        />
                        <div className="flex justify-between text-xs text-gray-500 mt-1">
                          <span>1%</span>
                          <span>50%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
            {/* Rest of the input sections remain same as previous */}

          </div>

          {/* Results Section */}
          <div className="bg-[#113262] text-white rounded-lg h-[480px] sticky top-6">
            <div className="p-4 border-b border-white/20">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold">Investment Summary</h3>
                <button className="p-1 hover:bg-blue-700 rounded">
                  <Share size={18} />
                </button>
              </div>
            </div>

            <div className="p-4 flex flex-col h-[calc(100%-68px)] justify-between">
              <div>
                <div className="mb-2 text-center">
                  <div className="text-2xl font-bold">{formatCurrency(results.totalReturn)}</div>
                  <div className="text-sm text-gray-300">Maturity Value</div>
                </div>
                <div className="mb-2 mx-auto w-32 h-32">
                  <CircleChart ratio={results.investedAmount / results.totalReturn} />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center pt-2 border-t border-white/20">
                  <span className="text-sm">Invested Amount</span>
                  <span className="font-bold">{formatCurrency(results.investedAmount)}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-t border-white/20">
                  <span className="text-sm">Estimated Returns</span>
                  <span className="font-bold">{formatCurrency(results.estimatedReturns)}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-t border-white/20">
                  <span className="text-sm">Investment Period</span>
                  <span className="font-bold">{timePeriod} Years</span>
                </div>
              </div>

              <button className="w-full bg-orange-400 text-white py-2 rounded-lg mt-3 hover:bg-orange-500 transition-colors text-sm">
                Start {investmentType === 'sip' ? 'SIP Investment' : 'Lumpsum Investment'} →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SIPCalculator;