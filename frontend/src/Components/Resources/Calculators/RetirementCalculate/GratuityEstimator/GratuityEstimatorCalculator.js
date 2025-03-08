import React, { useState, useEffect } from 'react';
import { Share, ChevronDown } from 'lucide-react';

const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
};

const GratuityEstimatorCalculator = () => {
  // Basic inputs
  const [currentSalary, setCurrentSalary] = useState(50000);
  const [yearsOfService, setYearsOfService] = useState(5);
  const [expectedSalaryAtExit, setExpectedSalaryAtExit] = useState(80000);
  const [expectedTotalYears, setExpectedTotalYears] = useState(10);
  
  // Advanced settings
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [annualSalaryGrowth, setAnnualSalaryGrowth] = useState(8);
  const [showShareToast, setShowShareToast] = useState(false);
  const [isExemptFromTax, setIsExemptFromTax] = useState(true);
  const [taxRate, setTaxRate] = useState(30);

  // Calculate results
  const [results, setResults] = useState({
    currentGratuity: 0,
    expectedGratuity: 0,
    taxableAmount: 0,
    taxAmount: 0,
    netGratuity: 0
  });

  const calculateGratuity = () => {
    // Maximum tax exempt gratuity amount as per Indian law
    const MAX_TAX_EXEMPT_GRATUITY = 2000000; // 20 Lakhs
    
    // Calculate current gratuity (15 days of last drawn salary for each year of service)
    // Formula: (Basic Salary / 26) * 15 * Years of Service
    const currentBasicSalary = currentSalary * 0.5; // Assuming Basic+DA is 50% of current salary
    const currentGratuity = (currentBasicSalary / 26) * 15 * yearsOfService;
    
    // Calculate expected final salary if not provided
    let finalSalary = expectedSalaryAtExit;
    if (annualSalaryGrowth > 0) {
      const remainingYears = expectedTotalYears - yearsOfService;
      finalSalary = currentSalary * Math.pow((1 + annualSalaryGrowth / 100), remainingYears);
    }
    
    // Calculate expected gratuity
    const finalBasicSalary = finalSalary * 0.5; // Assuming Basic+DA is 50% of final salary
    const expectedGratuity = (finalBasicSalary / 26) * 15 * expectedTotalYears;
    
    // Calculate tax
    let taxableAmount = 0;
    let taxAmount = 0;
    
    if (!isExemptFromTax) {
      // If gratuity exceeds the maximum tax exempt amount
      if (expectedGratuity > MAX_TAX_EXEMPT_GRATUITY) {
        taxableAmount = expectedGratuity - MAX_TAX_EXEMPT_GRATUITY;
        taxAmount = taxableAmount * (taxRate / 100);
      }
    }
    
    // Calculate net gratuity (after tax)
    const netGratuity = expectedGratuity - taxAmount;
    
    return {
      currentGratuity,
      expectedGratuity,
      taxableAmount,
      taxAmount,
      netGratuity
    };
  };

  useEffect(() => {
    const calculatedResults = calculateGratuity();
    setResults(calculatedResults);
  }, [
    currentSalary, 
    yearsOfService, 
    expectedSalaryAtExit, 
    expectedTotalYears, 
    annualSalaryGrowth,
    isExemptFromTax,
    taxRate
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
        <h1 className="text-2xl font-semibold text-[#113262] mb-2">Gratuity Estimator</h1>
        <h2 className="text-lg text-gray-600">Calculate your gratuity benefits as per Indian labor laws</h2>
      </div>

      <div className="max-w-5xl mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Input Sections */}
          <div className="lg:col-span-2 space-y-8">
            {/* Current Details */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Current Employment Details</h2>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block font-medium text-sm mb-1.5">Current Monthly Salary</label>
                  <input
                    type="number"
                    value={currentSalary}
                    onChange={(e) => setCurrentSalary(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={10000}
                    max={500000}
                    step={5000}
                    value={currentSalary}
                    onChange={(e) => setCurrentSalary(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>₹10K</span>
                    <span>₹5L</span>
                  </div>
                </div>

                <div>
                  <label className="block font-medium text-sm mb-1.5">Years of Service (Current)</label>
                  <input
                    type="number"
                    value={yearsOfService}
                    onChange={(e) => setYearsOfService(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={0}
                    max={40}
                    step={1}
                    value={yearsOfService}
                    onChange={(e) => setYearsOfService(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>0 years</span>
                    <span>40 years</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Future Projections */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Future Projections</h2>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block font-medium text-sm mb-1.5">Expected Monthly Salary at Exit</label>
                  <input
                    type="number"
                    value={expectedSalaryAtExit}
                    onChange={(e) => setExpectedSalaryAtExit(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={10000}
                    max={1000000}
                    step={10000}
                    value={expectedSalaryAtExit}
                    onChange={(e) => setExpectedSalaryAtExit(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>₹10K</span>
                    <span>₹10L</span>
                  </div>
                </div>

                <div>
                  <label className="block font-medium text-sm mb-1.5">Expected Total Years of Service</label>
                  <input
                    type="number"
                    value={expectedTotalYears}
                    onChange={(e) => setExpectedTotalYears(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={5}
                    max={40}
                    step={1}
                    value={expectedTotalYears}
                    onChange={(e) => setExpectedTotalYears(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>5 years</span>
                    <span>40 years</span>
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
                      <label className="block font-medium text-sm mb-1.5">Annual Salary Growth (%)</label>
                      <input
                        type="number"
                        value={annualSalaryGrowth}
                        onChange={(e) => setAnnualSalaryGrowth(Number(e.target.value))}
                        className="w-full p-1.5 border rounded text-sm"
                      />
                      <input
                        type="range"
                        min={0}
                        max={20}
                        step={0.5}
                        value={annualSalaryGrowth}
                        onChange={(e) => setAnnualSalaryGrowth(Number(e.target.value))}
                        className="w-full mt-2"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>0%</span>
                        <span>20%</span>
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <label className="block font-medium text-sm mb-1.5">Tax Settings</label>
                      <div className="flex items-center mt-2">
                        <input
                          type="checkbox"
                          id="isExemptFromTax"
                          checked={isExemptFromTax}
                          onChange={(e) => setIsExemptFromTax(e.target.checked)}
                          className="w-4 h-4"
                        />
                        <label htmlFor="isExemptFromTax" className="ml-2 text-sm">
                          Tax exempt (up to ₹20 lakhs)
                        </label>
                      </div>
                      
                      {!isExemptFromTax && (
                        <div className="mt-4">
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
                            max={40}
                            step={1}
                            value={taxRate}
                            onChange={(e) => setTaxRate(Number(e.target.value))}
                            className="w-full mt-2"
                          />
                          <div className="flex justify-between text-xs text-gray-500 mt-1">
                            <span>0%</span>
                            <span>40%</span>
                          </div>
                        </div>
                      )}
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
                <h3 className="text-xl font-bold">Gratuity Estimates</h3>
                <button onClick={handleShare} className="p-1 hover:bg-blue-700 rounded">
                  <Share size={18} />
                </button>
              </div>
            </div>

            <div className="p-4 flex flex-col h-[calc(100%-68px)] justify-between">
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">
                    {formatCurrency(results.expectedGratuity)}
                  </div>
                  <div className="text-sm text-gray-300">Expected Final Gratuity</div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-t border-white/20">
                    <span className="text-sm">Current Gratuity</span>
                    <span className="font-bold">{formatCurrency(results.currentGratuity)}</span>
                  </div>
                  
                  {!isExemptFromTax && results.taxableAmount > 0 && (
                    <>
                      <div className="flex justify-between items-center py-2 border-t border-white/20">
                        <span className="text-sm">Taxable Amount</span>
                        <span className="font-bold">{formatCurrency(results.taxableAmount)}</span>
                      </div>
                      
                      <div className="flex justify-between items-center py-2 border-t border-white/20">
                        <span className="text-sm">Tax Amount</span>
                        <span className="font-bold">{formatCurrency(results.taxAmount)}</span>
                      </div>
                      
                      <div className="flex justify-between items-center py-2 border-t border-white/20">
                        <span className="text-sm">Net Gratuity (After Tax)</span>
                        <span className="font-bold">{formatCurrency(results.netGratuity)}</span>
                      </div>
                    </>
                  )}
                  
                  <div className="flex justify-between items-center py-2 border-t border-white/20">
                    <span className="text-sm">Growth in Gratuity</span>
                    <span className="font-bold">{formatCurrency(results.expectedGratuity - results.currentGratuity)}</span>
                  </div>
                </div>
              </div>

              <button className="w-full bg-orange-400 text-white py-2 rounded-lg mt-4 hover:bg-orange-500 transition-colors text-sm">
                Talk to an Expert →
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

export default GratuityEstimatorCalculator;