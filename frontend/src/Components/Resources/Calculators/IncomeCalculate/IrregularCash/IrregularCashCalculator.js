import React, { useState, useEffect, useCallback } from 'react';
import { Share, ChevronDown, HelpCircle, Plus, Trash2 } from 'lucide-react';

const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
};

const formatPercentage = (value) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'percent',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value / 100);
};

const IrregularCashCalculator = () => {
  // Initial cash flow and outflow
  const [initialInvestment, setInitialInvestment] = useState(1000000);
  
  // Discount rate
  const [discountRate, setDiscountRate] = useState(10);
  
  // Cash flows
  const [cashFlows, setCashFlows] = useState([
    { year: 1, amount: 200000 },
    { year: 2, amount: 300000 },
    { year: 3, amount: 250000 },
    { year: 5, amount: 400000 },
    { year: 7, amount: 500000 }
  ]);
  
  // Advanced settings
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [terminal, setTerminal] = useState(false);
  const [terminalValue, setTerminalValue] = useState(2000000);
  const [terminalYear, setTerminalYear] = useState(10);
  const [inflationRate, setInflationRate] = useState(5);
  
  // Tooltip
  const [showToolTip, setShowToolTip] = useState('');
  
  // Share toast
  const [showShareToast, setShowShareToast] = useState(false);
  
  // Result state
  const [result, setResult] = useState({
    npv: 0,
    irr: 0,
    totalCashInflows: 0,
    presentValues: [],
    paybackPeriod: 0,
    profitabilityIndex: 0,
    breakEvenYear: 0
  });

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

  // Add new cash flow
  const addCashFlow = () => {
    // Find the next available year
    const usedYears = cashFlows.map(cf => cf.year);
    let nextYear = 1;
    while (usedYears.includes(nextYear)) {
      nextYear++;
    }
    
    setCashFlows([...cashFlows, { year: nextYear, amount: 100000 }]);
  };

  // Remove cash flow
  const removeCashFlow = (index) => {
    const newCashFlows = [...cashFlows];
    newCashFlows.splice(index, 1);
    setCashFlows(newCashFlows);
  };

  // Update cash flow
  const updateCashFlow = (index, field, value) => {
    const newCashFlows = [...cashFlows];
    newCashFlows[index][field] = value;
    setCashFlows(newCashFlows);
  };

  // Sort cash flows by year
  const sortedCashFlows = [...cashFlows].sort((a, b) => a.year - b.year);

  // Calculate NPV
  const calculateNPV = useCallback(() => {
    // Sort cash flows by year
    const sorted = [...cashFlows].sort((a, b) => a.year - b.year);
    
    // Add terminal value if applicable
    let allFlows = [...sorted];
    if (terminal && terminalValue > 0) {
      // Check if there's already a cash flow in terminal year
      const existingTerminalFlow = allFlows.find(cf => cf.year === terminalYear);
      
      if (existingTerminalFlow) {
        existingTerminalFlow.amount += terminalValue;
      } else {
        allFlows.push({ year: terminalYear, amount: terminalValue });
        // Re-sort after adding
        allFlows = allFlows.sort((a, b) => a.year - b.year);
      }
    }
    
    // Calculate present values and NPV
    let npv = -initialInvestment;
    let totalCashInflows = 0;
    let cumulativeCashFlow = -initialInvestment;
    let breakEvenYear = null;
    let paybackPeriod = null;
    
    const presentValues = allFlows.map(cf => {
      // Apply inflation adjustment if enabled
      let adjustedAmount = cf.amount;
      if (inflationRate > 0) {
        adjustedAmount = cf.amount / Math.pow(1 + (inflationRate / 100), cf.year);
      }
      
      // Calculate present value
      const presentValue = adjustedAmount / Math.pow(1 + (discountRate / 100), cf.year);
      
      // Add to total cash inflows
      totalCashInflows += adjustedAmount;
      
      // Track cumulative cash flow for payback period
      cumulativeCashFlow += presentValue;
      
      // Check if this is the break-even point
      if (cumulativeCashFlow >= 0 && breakEvenYear === null) {
        breakEvenYear = cf.year;
        
        // Calculate more precise payback period
        if (cf.year > 1) {
          const previousFlow = allFlows.find(f => f.year === cf.year - 1);
          if (previousFlow) {
            const previousPV = previousFlow.amount / Math.pow(1 + (discountRate / 100), previousFlow.year);
            const previousCumulative = cumulativeCashFlow - presentValue;
            const fraction = (0 - previousCumulative) / (presentValue - previousCumulative);
            paybackPeriod = (cf.year - 1) + fraction;
          } else {
            paybackPeriod = cf.year;
          }
        } else {
          paybackPeriod = cf.year;
        }
      }
      
      // Add to NPV
      npv += presentValue;
      
      return {
        year: cf.year,
        originalAmount: cf.amount,
        adjustedAmount,
        presentValue
      };
    });
    
    // Calculate IRR
    // We'll use a simple approximation for IRR
    let irr = 0;
    let step = 5;
    let testNPV = calculateTestNPV(allFlows, irr);
    
    // Iterative approach to find IRR (when NPV = 0)
    for (let iterations = 0; iterations < 100; iterations++) {
      if (Math.abs(testNPV) < 1) {
        break;
      }
      
      if (testNPV > 0) {
        irr += step;
      } else {
        irr -= step;
        step /= 2;
        irr += step;
      }
      
      testNPV = calculateTestNPV(allFlows, irr);
    }
    
    // Calculate profitability index
    const sumOfPVs = presentValues.reduce((sum, pv) => sum + pv.presentValue, 0);
    const profitabilityIndex = sumOfPVs / initialInvestment;
    
    return {
      npv,
      irr,
      totalCashInflows,
      presentValues,
      paybackPeriod: paybackPeriod || 0,
      profitabilityIndex,
      breakEvenYear: breakEvenYear || 0
    };
  }, [cashFlows, initialInvestment, discountRate, terminal, terminalValue, terminalYear, inflationRate]);

  // Helper function for IRR calculation
  const calculateTestNPV = (flows, rate) => {
    let npv = -initialInvestment;
    
    for (const flow of flows) {
      npv += flow.amount / Math.pow(1 + (rate / 100), flow.year);
    }
    
    return npv;
  };

  // Calculate results when inputs change
  useEffect(() => {
    setResult(calculateNPV());
  }, [calculateNPV]);

  return (
    <div className="calculator-container pt-24">
      <div className="calculator-header text-center mb-8">
        <h1 className="text-2xl font-semibold text-[#113262] mb-2">Irregular Cash Flow Calculator</h1>
        <h2 className="text-lg text-gray-600">Analyze the value of investments with uneven cash flows</h2>
      </div>

      <div className="max-w-5xl mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Input Sections */}
          <div className="lg:col-span-2 space-y-8">
            {/* Initial Investment */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Initial Investment</h2>
              <div className="grid grid-cols-2 gap-6">
                <div className="col-span-2">
                  <label className="block font-medium text-sm mb-1.5 flex items-center">
                    Initial Investment Amount
                    <div className="relative ml-1">
                      <HelpCircle 
                        size={14} 
                        className="text-gray-400 cursor-pointer"
                        onMouseEnter={() => setShowToolTip('initialInvestment')}
                        onMouseLeave={() => setShowToolTip('')}
                      />
                      {showToolTip === 'initialInvestment' && (
                        <div className="absolute z-10 left-6 -top-2 w-60 p-2 bg-gray-800 text-white text-xs rounded shadow-lg">
                          The initial amount you invest (outflow) at the beginning of the period
                        </div>
                      )}
                    </div>
                  </label>
                  <input
                    type="number"
                    value={initialInvestment}
                    onChange={(e) => setInitialInvestment(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={100000}
                    max={10000000}
                    step={100000}
                    value={initialInvestment}
                    onChange={(e) => setInitialInvestment(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>₹1L</span>
                    <span>₹1Cr</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Discount Rate */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Discount Rate</h2>
              <div className="grid grid-cols-2 gap-6">
                <div className="col-span-2">
                  <label className="block font-medium text-sm mb-1.5 flex items-center">
                    Discount Rate (%)
                    <div className="relative ml-1">
                      <HelpCircle 
                        size={14} 
                        className="text-gray-400 cursor-pointer"
                        onMouseEnter={() => setShowToolTip('discountRate')}
                        onMouseLeave={() => setShowToolTip('')}
                      />
                      {showToolTip === 'discountRate' && (
                        <div className="absolute z-10 left-6 -top-2 w-60 p-2 bg-gray-800 text-white text-xs rounded shadow-lg">
                          Your required rate of return or the opportunity cost of capital
                        </div>
                      )}
                    </div>
                  </label>
                  <input
                    type="number"
                    value={discountRate}
                    onChange={(e) => setDiscountRate(Number(e.target.value))}
                    step="0.1"
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={1}
                    max={30}
                    step={0.1}
                    value={discountRate}
                    onChange={(e) => setDiscountRate(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>1%</span>
                    <span>30%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Cash Flows */}
            <div className="bg-white rounded-lg shadow p-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold text-gray-900">Cash Flows</h2>
                <button 
                  onClick={addCashFlow}
                  className="flex items-center text-sm bg-blue-50 text-blue-700 px-3 py-1 rounded hover:bg-blue-100"
                >
                  <Plus size={14} className="mr-1" /> Add Cash Flow
                </button>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="py-2 px-3 text-left text-xs font-medium text-gray-500 uppercase">Year</th>
                      <th className="py-2 px-3 text-left text-xs font-medium text-gray-500 uppercase">Amount (₹)</th>
                      <th className="py-2 px-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sortedCashFlows.map((cashFlow, index) => (
                      <tr key={index} className="border-t">
                        <td className="py-2 px-3">
                          <input
                            type="number"
                            min="1"
                            value={cashFlow.year}
                            onChange={(e) => updateCashFlow(index, 'year', parseInt(e.target.value) || 1)}
                            className="w-full p-1.5 border rounded text-sm"
                          />
                        </td>
                        <td className="py-2 px-3">
                          <input
                            type="number"
                            value={cashFlow.amount}
                            onChange={(e) => updateCashFlow(index, 'amount', Number(e.target.value))}
                            className="w-full p-1.5 border rounded text-sm"
                          />
                        </td>
                        <td className="py-2 px-3 text-right">
                          <button 
                            onClick={() => removeCashFlow(index)}
                            className="text-red-600 hover:text-red-800"
                          >
                            <Trash2 size={16} />
                          </button>
                        </td>
                      </tr>
                    ))}
                    {sortedCashFlows.length === 0 && (
                      <tr>
                        <td colSpan="3" className="py-3 text-center text-gray-500">
                          No cash flows added yet. Click "Add Cash Flow" to begin.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
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
                    <div className="col-span-2">
                      <div className="flex items-center mb-2">
                        <input
                          type="checkbox"
                          id="terminal"
                          checked={terminal}
                          onChange={(e) => setTerminal(e.target.checked)}
                          className="mr-2"
                        />
                        <label htmlFor="terminal" className="text-sm font-medium flex items-center">
                          Include Terminal Value
                          <div className="relative ml-1">
                            <HelpCircle 
                              size={14} 
                              className="text-gray-400 cursor-pointer"
                              onMouseEnter={() => setShowToolTip('terminal')}
                              onMouseLeave={() => setShowToolTip('')}
                            />
                            {showToolTip === 'terminal' && (
                              <div className="absolute z-10 left-6 -top-2 w-60 p-2 bg-gray-800 text-white text-xs rounded shadow-lg">
                                The estimated value of the investment at the end of a specific future period
                              </div>
                            )}
                          </div>
                        </label>
                      </div>
                    </div>
                    
                    {terminal && (
                      <>
                        <div>
                          <label className="block font-medium text-sm mb-1.5">Terminal Value</label>
                          <input
                            type="number"
                            value={terminalValue}
                            onChange={(e) => setTerminalValue(Number(e.target.value))}
                            className="w-full p-1.5 border rounded text-sm"
                          />
                          <input
                            type="range"
                            min={0}
                            max={10000000}
                            step={100000}
                            value={terminalValue}
                            onChange={(e) => setTerminalValue(Number(e.target.value))}
                            className="w-full mt-2"
                          />
                          <div className="flex justify-between text-xs text-gray-500 mt-1">
                            <span>₹0</span>
                            <span>₹1Cr</span>
                          </div>
                        </div>
                        <div>
                          <label className="block font-medium text-sm mb-1.5">Terminal Year</label>
                          <input
                            type="number"
                            min="1"
                            value={terminalYear}
                            onChange={(e) => setTerminalYear(Number(e.target.value) || 1)}
                            className="w-full p-1.5 border rounded text-sm"
                          />
                          <input
                            type="range"
                            min={1}
                            max={30}
                            value={terminalYear}
                            onChange={(e) => setTerminalYear(Number(e.target.value))}
                            className="w-full mt-2"
                          />
                          <div className="flex justify-between text-xs text-gray-500 mt-1">
                            <span>1 year</span>
                            <span>30 years</span>
                          </div>
                        </div>
                      </>
                    )}

                    <div className="col-span-2">
                      <label className="block font-medium text-sm mb-1.5 flex items-center">
                        Inflation Rate (%)
                        <div className="relative ml-1">
                          <HelpCircle 
                            size={14} 
                            className="text-gray-400 cursor-pointer"
                            onMouseEnter={() => setShowToolTip('inflation')}
                            onMouseLeave={() => setShowToolTip('')}
                          />
                          {showToolTip === 'inflation' && (
                            <div className="absolute z-10 left-6 -top-2 w-60 p-2 bg-gray-800 text-white text-xs rounded shadow-lg">
                              Adjusts future cash flows for the decreasing purchasing power of money
                            </div>
                          )}
                        </div>
                      </label>
                      <input
                        type="number"
                        value={inflationRate}
                        onChange={(e) => setInflationRate(Number(e.target.value))}
                        step="0.1"
                        className="w-full p-1.5 border rounded text-sm"
                      />
                      <input
                        type="range"
                        min={0}
                        max={20}
                        step={0.1}
                        value={inflationRate}
                        onChange={(e) => setInflationRate(Number(e.target.value))}
                        className="w-full mt-2"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>0%</span>
                        <span>20%</span>
                      </div>
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
                <h3 className="text-xl font-bold">Investment Analysis</h3>
                <button onClick={handleShare} className="p-1 hover:bg-blue-700 rounded">
                  <Share size={18} />
                </button>
              </div>
            </div>

            <div className="p-4 flex flex-col h-[calc(100%-68px)] justify-between">
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">
                    {formatCurrency(result.npv)}
                  </div>
                  <div className="text-sm text-gray-300">Net Present Value (NPV)</div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-t border-white/20">
                    <span className="text-sm">IRR</span>
                    <span className="font-bold">{result.irr.toFixed(2)}%</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-2 border-t border-white/20">
                    <span className="text-sm">Payback Period</span>
                    <span className="font-bold">{result.paybackPeriod.toFixed(2)} years</span>
                  </div>

                  <div className="flex justify-between items-center py-2 border-t border-white/20">
                    <span className="text-sm">Profitability Index</span>
                    <span className="font-bold">{result.profitabilityIndex.toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between items-center py-2 border-t border-white/20">
                    <span className="text-sm">Total Cash Inflows</span>
                    <span className="font-bold">{formatCurrency(result.totalCashInflows)}</span>
                  </div>

                  <div className="flex justify-between items-center py-2 border-t border-white/20">
                    <span className="text-sm">Break-even Year</span>
                    <span className="font-bold">{result.breakEvenYear === 0 ? 'Never' : result.breakEvenYear}</span>
                  </div>
                </div>
              </div>

              <button className="w-full bg-orange-400 text-white py-2 rounded-lg mt-4 hover:bg-orange-500 transition-colors text-sm">
                Consult Financial Advisor →
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

export default IrregularCashCalculator;