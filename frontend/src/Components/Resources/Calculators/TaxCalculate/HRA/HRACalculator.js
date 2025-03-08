import React, { useState, useEffect } from 'react';
import { Share, ChevronDown, HelpCircle } from 'lucide-react';

const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
};

const HRACalculator = () => {
  // Basic inputs
  const [basicSalary, setBasicSalary] = useState(50000);
  const [hraReceived, setHraReceived] = useState(20000);
  const [rentPaid, setRentPaid] = useState(25000);
  const [cityType, setCityType] = useState('metro');
  
  // Advanced settings
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [payFrequency, setPayFrequency] = useState('monthly'); // monthly or annual
  const [showToolTip, setShowToolTip] = useState('');
  
  // State for share toast
  const [showShareToast, setShowShareToast] = useState(false);
  
  // State for calculation results
  const [result, setResult] = useState({
    exemptedHRA: 0,
    taxableHRA: 0,
    yearlyExemption: 0,
    calculationDetails: {
      calculation1: 0,
      calculation2: 0,
      calculation3: 0
    }
  });

  // Calculate HRA exemption
  const calculateHRAExemption = () => {
    // Convert all values to monthly if they are annual
    const monthlyBasic = payFrequency === 'annual' ? basicSalary / 12 : basicSalary;
    const monthlyHRA = payFrequency === 'annual' ? hraReceived / 12 : hraReceived;
    const monthlyRent = payFrequency === 'annual' ? rentPaid / 12 : rentPaid;
    
    // Calculate the three conditions for HRA exemption
    // 1. Actual HRA received
    const calculation1 = monthlyHRA;
    
    // 2. Rent paid in excess of 10% of basic salary
    const calculation2 = monthlyRent - (0.1 * monthlyBasic);
    
    // 3. 50% of basic salary for metro cities, 40% for non-metro
    const calculation3 = cityType === 'metro' ? 0.5 * monthlyBasic : 0.4 * monthlyBasic;
    
    // Exempted HRA is the minimum of the three calculations
    let monthlyExemption = Math.min(
      calculation1, 
      Math.max(0, calculation2), 
      calculation3
    );
    
    // If rent paid is zero, no exemption
    if (monthlyRent === 0) {
      monthlyExemption = 0;
    }
    
    // Calculate yearly figures
    const yearlyExemption = monthlyExemption * 12;
    
    // Calculate taxable HRA
    const taxableHRA = monthlyHRA - monthlyExemption;
    
    return {
      exemptedHRA: monthlyExemption,
      taxableHRA: taxableHRA,
      yearlyExemption: yearlyExemption,
      calculationDetails: {
        calculation1,
        calculation2: Math.max(0, calculation2),
        calculation3
      }
    };
  };

  // Recalculate whenever inputs change
  useEffect(() => {
    setResult(calculateHRAExemption());
  }, [basicSalary, hraReceived, rentPaid, cityType, payFrequency]);

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

  // Convert values based on frequency for display
  const getDisplayValue = (value) => {
    return payFrequency === 'annual' ? value : value * 12;
  };

  return (
    <div className="calculator-container pt-24">
      <div className="calculator-header text-center mb-8">
        <h1 className="text-2xl font-semibold text-[#113262] mb-2">HRA Exemption Calculator</h1>
        <h2 className="text-lg text-gray-600">Calculate your House Rent Allowance tax exemption</h2>
      </div>

      <div className="max-w-5xl mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Input Sections */}
          <div className="lg:col-span-2 space-y-8">
            {/* Salary Details */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Salary Details</h2>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block font-medium text-sm mb-1.5 flex items-center">
                    Basic Salary
                    <div className="relative ml-1">
                      <HelpCircle 
                        size={14} 
                        className="text-gray-400 cursor-pointer"
                        onMouseEnter={() => setShowToolTip('basic')}
                        onMouseLeave={() => setShowToolTip('')}
                      />
                      {showToolTip === 'basic' && (
                        <div className="absolute z-10 left-6 -top-2 w-60 p-2 bg-gray-800 text-white text-xs rounded shadow-lg">
                          Basic salary is the fixed part of your salary excluding all allowances and bonuses
                        </div>
                      )}
                    </div>
                  </label>
                  <input
                    type="number"
                    value={basicSalary}
                    onChange={(e) => setBasicSalary(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={10000}
                    max={payFrequency === 'annual' ? 3000000 : 250000}
                    step={payFrequency === 'annual' ? 50000 : 5000}
                    value={basicSalary}
                    onChange={(e) => setBasicSalary(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>{payFrequency === 'annual' ? '₹1L' : '₹10K'}</span>
                    <span>{payFrequency === 'annual' ? '₹30L' : '₹2.5L'}</span>
                  </div>
                </div>

                <div>
                  <label className="block font-medium text-sm mb-1.5 flex items-center">
                    HRA Received
                    <div className="relative ml-1">
                      <HelpCircle 
                        size={14} 
                        className="text-gray-400 cursor-pointer"
                        onMouseEnter={() => setShowToolTip('hra')}
                        onMouseLeave={() => setShowToolTip('')}
                      />
                      {showToolTip === 'hra' && (
                        <div className="absolute z-10 left-6 -top-2 w-60 p-2 bg-gray-800 text-white text-xs rounded shadow-lg">
                          House Rent Allowance provided by your employer as part of your salary structure
                        </div>
                      )}
                    </div>
                  </label>
                  <input
                    type="number"
                    value={hraReceived}
                    onChange={(e) => setHraReceived(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={0}
                    max={payFrequency === 'annual' ? basicSalary * 0.6 : basicSalary * 0.6}
                    step={payFrequency === 'annual' ? 5000 : 500}
                    value={hraReceived}
                    onChange={(e) => setHraReceived(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>₹0</span>
                    <span>{formatCurrency(payFrequency === 'annual' ? basicSalary * 0.6 : basicSalary * 0.6)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Rent Details */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Rent Details</h2>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block font-medium text-sm mb-1.5 flex items-center">
                    Rent Paid
                    <div className="relative ml-1">
                      <HelpCircle 
                        size={14} 
                        className="text-gray-400 cursor-pointer"
                        onMouseEnter={() => setShowToolTip('rent')}
                        onMouseLeave={() => setShowToolTip('')}
                      />
                      {showToolTip === 'rent' && (
                        <div className="absolute z-10 left-6 -top-2 w-60 p-2 bg-gray-800 text-white text-xs rounded shadow-lg">
                          The actual rent you pay for your accommodation each month/year
                        </div>
                      )}
                    </div>
                  </label>
                  <input
                    type="number"
                    value={rentPaid}
                    onChange={(e) => setRentPaid(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={0}
                    max={payFrequency === 'annual' ? 1200000 : 100000}
                    step={payFrequency === 'annual' ? 5000 : 500}
                    value={rentPaid}
                    onChange={(e) => setRentPaid(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>₹0</span>
                    <span>{payFrequency === 'annual' ? '₹12L' : '₹1L'}</span>
                  </div>
                </div>

                <div>
                  <label className="block font-medium text-sm mb-1.5">City Type</label>
                  <div className="space-y-2 p-1.5">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="metro"
                        name="cityType"
                        value="metro"
                        checked={cityType === 'metro'}
                        onChange={() => setCityType('metro')}
                        className="mr-2"
                      />
                      <label htmlFor="metro" className="text-sm">
                        Metro (Delhi, Mumbai, Kolkata, Chennai)
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="nonMetro"
                        name="cityType"
                        value="nonMetro"
                        checked={cityType === 'nonMetro'}
                        onChange={() => setCityType('nonMetro')}
                        className="mr-2"
                      />
                      <label htmlFor="nonMetro" className="text-sm">
                        Non-Metro (Other cities)
                      </label>
                    </div>
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
                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <label className="block font-medium text-sm mb-1.5">Pay Frequency</label>
                      <div className="space-y-2 p-1.5">
                        <div className="flex items-center">
                          <input
                            type="radio"
                            id="monthly"
                            name="payFrequency"
                            value="monthly"
                            checked={payFrequency === 'monthly'}
                            onChange={() => setPayFrequency('monthly')}
                            className="mr-2"
                          />
                          <label htmlFor="monthly" className="text-sm">
                            Monthly (Amounts per month)
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="radio"
                            id="annual"
                            name="payFrequency"
                            value="annual"
                            checked={payFrequency === 'annual'}
                            onChange={() => setPayFrequency('annual')}
                            className="mr-2"
                          />
                          <label htmlFor="annual" className="text-sm">
                            Annual (Amounts per year)
                          </label>
                        </div>
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
                <h3 className="text-xl font-bold">HRA Exemption</h3>
                <button onClick={handleShare} className="p-1 hover:bg-blue-700 rounded">
                  <Share size={18} />
                </button>
              </div>
            </div>

            <div className="p-4 flex flex-col h-[calc(100%-68px)] justify-between">
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">
                    {formatCurrency(payFrequency === 'monthly' ? result.exemptedHRA : result.yearlyExemption)}
                  </div>
                  <div className="text-sm text-gray-300">
                    {payFrequency === 'monthly' ? 'Monthly HRA Exemption' : 'Yearly HRA Exemption'}
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-t border-white/20">
                    <span className="text-sm">
                      {payFrequency === 'monthly' ? 'Yearly Exemption' : 'Monthly Exemption'}
                    </span>
                    <span className="font-bold">
                      {formatCurrency(payFrequency === 'monthly' ? result.yearlyExemption : result.exemptedHRA)}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center py-2 border-t border-white/20">
                    <span className="text-sm">Taxable HRA</span>
                    <span className="font-bold">
                      {formatCurrency(payFrequency === 'monthly' ? result.taxableHRA : result.taxableHRA * 12)}
                    </span>
                  </div>

                  <div className="py-2 border-t border-white/20">
                    <div className="text-sm font-medium mb-2">Calculation Method</div>
                    <div className="text-xs text-gray-300 space-y-1">
                      <div className="flex justify-between">
                        <span>1. Actual HRA</span>
                        <span>{formatCurrency(result.calculationDetails.calculation1)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>2. Rent - 10% of Basic</span>
                        <span>{formatCurrency(result.calculationDetails.calculation2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>3. {cityType === 'metro' ? '50%' : '40%'} of Basic</span>
                        <span>{formatCurrency(result.calculationDetails.calculation3)}</span>
                      </div>
                      <div className="mt-2 pt-1 border-t border-white/10">
                        <em>Exemption is the lowest of above 3 calculations</em>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <button className="w-full bg-orange-400 text-white py-2 rounded-lg mt-4 hover:bg-orange-500 transition-colors text-sm">
                Plan Tax Saving →
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

export default HRACalculator;