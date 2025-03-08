import React, { useState, useEffect } from 'react';
import { Share, ChevronDown } from 'lucide-react';

const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
};

const FreelancerCalculator = () => {
  // State for basic inputs
  const [annualIncome, setAnnualIncome] = useState(1000000);
  const [totalExpenses, setTotalExpenses] = useState(300000);
  const [professionalDevelopment, setProfessionalDevelopment] = useState(50000);
  const [retirementContribution, setRetirementContribution] = useState(150000);
  
  // State for advanced settings
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [bookDepreciation, setBookDepreciation] = useState(30000);
  const [otherDeductions, setOtherDeductions] = useState(50000);
  
  // State for share toast
  const [showShareToast, setShowShareToast] = useState(false);
  
  // State for calculation results
  const [result, setResult] = useState({
    taxableIncome: 0,
    totalTaxLiability: 0,
    effectiveTaxRate: 0,
    takeHomePay: 0,
    taxSavings: 0
  });

  // Calculate tax based on the old tax regime (for simplicity)
  const calculateTax = () => {
    // Calculate net taxable income
    const businessIncome = annualIncome - totalExpenses - bookDepreciation;
    
    // Calculate deductions under Section 80C, 80D, etc.
    const totalDeductions = Math.min(retirementContribution, 150000) + 
                           Math.min(professionalDevelopment, 50000) +
                           otherDeductions;
    
    // Calculate final taxable income
    const taxableIncome = Math.max(0, businessIncome - totalDeductions);
    
    // Calculate tax liability (2023-24 income tax slabs - old regime)
    let taxLiability = 0;
    
    if (taxableIncome <= 250000) {
      taxLiability = 0;
    } else if (taxableIncome <= 500000) {
      taxLiability = (taxableIncome - 250000) * 0.05;
    } else if (taxableIncome <= 1000000) {
      taxLiability = 12500 + (taxableIncome - 500000) * 0.2;
    } else {
      taxLiability = 112500 + (taxableIncome - 1000000) * 0.3;
    }
    
    // Add 4% cess
    const cessAmount = taxLiability * 0.04;
    const totalTaxLiability = taxLiability + cessAmount;
    
    // Calculate effective tax rate
    const effectiveTaxRate = taxableIncome > 0 ? (totalTaxLiability / taxableIncome) * 100 : 0;
    
    // Calculate take-home pay
    const takeHomePay = businessIncome - totalTaxLiability;
    
    // Calculate tax savings (comparing to no deductions)
    const noDeductionTaxableIncome = businessIncome;
    let noDeductionTax = 0;
    
    if (noDeductionTaxableIncome <= 250000) {
      noDeductionTax = 0;
    } else if (noDeductionTaxableIncome <= 500000) {
      noDeductionTax = (noDeductionTaxableIncome - 250000) * 0.05;
    } else if (noDeductionTaxableIncome <= 1000000) {
      noDeductionTax = 12500 + (noDeductionTaxableIncome - 500000) * 0.2;
    } else {
      noDeductionTax = 112500 + (noDeductionTaxableIncome - 1000000) * 0.3;
    }
    
    const noDeductionCess = noDeductionTax * 0.04;
    const noDeductionTotalTax = noDeductionTax + noDeductionCess;
    
    const taxSavings = noDeductionTotalTax - totalTaxLiability;
    
    return {
      taxableIncome,
      totalTaxLiability,
      effectiveTaxRate,
      takeHomePay,
      taxSavings
    };
  };

  // Recalculate whenever inputs change
  useEffect(() => {
    setResult(calculateTax());
  }, [
    annualIncome, 
    totalExpenses, 
    professionalDevelopment, 
    retirementContribution,
    bookDepreciation,
    otherDeductions
  ]);

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

  return (
    <div className="calculator-container pt-24">
      <div className="calculator-header text-center mb-8">
        <h1 className="text-2xl font-semibold text-[#113262] mb-2">Freelancer Income Tax Calculator</h1>
        <h2 className="text-lg text-gray-600">Optimize your freelance income and minimize tax liability</h2>
      </div>

      <div className="max-w-5xl mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Input Sections */}
          <div className="lg:col-span-2 space-y-8">
            {/* Income Section */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Income Details</h2>
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="block font-medium text-sm mb-1.5">Annual Freelance Income</label>
                  <input
                    type="number"
                    value={annualIncome}
                    onChange={(e) => setAnnualIncome(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={100000}
                    max={10000000}
                    step={50000}
                    value={annualIncome}
                    onChange={(e) => setAnnualIncome(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>₹1L</span>
                    <span>₹1Cr</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Expenses */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Business Expenses</h2>
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="block font-medium text-sm mb-1.5">Total Business Expenses</label>
                  <input
                    type="number"
                    value={totalExpenses}
                    onChange={(e) => setTotalExpenses(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={0}
                    max={annualIncome * 0.8}
                    step={10000}
                    value={totalExpenses}
                    onChange={(e) => setTotalExpenses(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>₹0</span>
                    <span>{formatCurrency(annualIncome * 0.8)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Deductions */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Tax Deductions</h2>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block font-medium text-sm mb-1.5">Retirement Contributions (80C)</label>
                  <input
                    type="number"
                    value={retirementContribution}
                    onChange={(e) => setRetirementContribution(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={0}
                    max={200000}
                    step={5000}
                    value={retirementContribution}
                    onChange={(e) => setRetirementContribution(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>₹0</span>
                    <span>₹2L</span>
                  </div>
                </div>

                <div>
                  <label className="block font-medium text-sm mb-1.5">Professional Development</label>
                  <input
                    type="number"
                    value={professionalDevelopment}
                    onChange={(e) => setProfessionalDevelopment(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={0}
                    max={100000}
                    step={5000}
                    value={professionalDevelopment}
                    onChange={(e) => setProfessionalDevelopment(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>₹0</span>
                    <span>₹1L</span>
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
                      <label className="block font-medium text-sm mb-1.5">Book Depreciation</label>
                      <input
                        type="number"
                        value={bookDepreciation}
                        onChange={(e) => setBookDepreciation(Number(e.target.value))}
                        className="w-full p-1.5 border rounded text-sm"
                      />
                      <input
                        type="range"
                        min={0}
                        max={200000}
                        step={5000}
                        value={bookDepreciation}
                        onChange={(e) => setBookDepreciation(Number(e.target.value))}
                        className="w-full mt-2"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>₹0</span>
                        <span>₹2L</span>
                      </div>
                    </div>

                    <div>
                      <label className="block font-medium text-sm mb-1.5">Other Deductions</label>
                      <input
                        type="number"
                        value={otherDeductions}
                        onChange={(e) => setOtherDeductions(Number(e.target.value))}
                        className="w-full p-1.5 border rounded text-sm"
                      />
                      <input
                        type="range"
                        min={0}
                        max={150000}
                        step={5000}
                        value={otherDeductions}
                        onChange={(e) => setOtherDeductions(Number(e.target.value))}
                        className="w-full mt-2"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>₹0</span>
                        <span>₹1.5L</span>
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
                <h3 className="text-xl font-bold">Tax Liability</h3>
                <button onClick={handleShare} className="p-1 hover:bg-blue-700 rounded">
                  <Share size={18} />
                </button>
              </div>
            </div>

            <div className="p-4 flex flex-col h-[calc(100%-68px)] justify-between">
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">
                    {formatCurrency(result.totalTaxLiability)}
                  </div>
                  <div className="text-sm text-gray-300">Total tax payable</div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-t border-white/20">
                    <span className="text-sm">Taxable Income</span>
                    <span className="font-bold">{formatCurrency(result.taxableIncome)}</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-2 border-t border-white/20">
                    <span className="text-sm">Effective Tax Rate</span>
                    <span className="font-bold">{result.effectiveTaxRate.toFixed(2)}%</span>
                  </div>

                  <div className="flex justify-between items-center py-2 border-t border-white/20">
                    <span className="text-sm">Take Home Pay</span>
                    <span className="font-bold">{formatCurrency(result.takeHomePay)}</span>
                  </div>

                  <div className="flex justify-between items-center py-2 border-t border-white/20">
                    <span className="text-sm">Tax Savings</span>
                    <span className="font-bold">{formatCurrency(result.taxSavings)}</span>
                  </div>
                </div>
              </div>

              <button className="w-full bg-orange-400 text-white py-2 rounded-lg mt-4 hover:bg-orange-500 transition-colors text-sm">
                Consult Tax Expert →
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

export default FreelancerCalculator;