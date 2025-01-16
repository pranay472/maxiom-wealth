import React, { useState, useEffect } from 'react';
import { Share, ChevronDown } from 'lucide-react';

const CarLoanCalculator = () => {
  // Input states grouped by section
  const [values, setValues] = useState({
    // Variables
    loanAmount: 1000000,
    downPayment: 200000,
    
    // Expectations
    interestRate: 8,
    loanTenure: 6,
    
    // Assumptions
    processingFee: 1,
    repaymentYears: 1
  });

  const [showAssumptions, setShowAssumptions] = useState(false);

  const handleChange = (key, value) => {
    setValues(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const calculateLoan = () => {
    const { loanAmount, loanTenure, interestRate, repaymentYears } = values;
    const monthlyInterestRate = (interestRate / 12) / 100;
    const totalMonths = loanTenure * 12;
    const repaidMonths = repaymentYears * 12;
    
    const scaledLoanAmount = loanAmount * 10;
    
    const emi = scaledLoanAmount * monthlyInterestRate * 
                Math.pow(1 + monthlyInterestRate, totalMonths) / 
                (Math.pow(1 + monthlyInterestRate, totalMonths) - 1);
    
    const totalAmount = emi * totalMonths;
    const outstandingLoan = totalAmount - (emi * repaidMonths);
    
    return {
      monthlyEMI: Math.round(emi),
      totalAmount: Math.round(totalAmount),
      outstandingAmount: Math.round(outstandingLoan)
    };
  };

  const [result, setResult] = useState(calculateLoan());

  useEffect(() => {
    setResult(calculateLoan());
  }, [values]);

  const formatCurrency = (amount) => {
    let num = amount.toString().replace(/,/g, '');
    let parts = num.split('.');
    let wholePart = parts[0];
    let lastThree = wholePart.substring(wholePart.length - 3);
    let otherNumbers = wholePart.substring(0, wholePart.length - 3);
    if (otherNumbers !== '') {
      lastThree = ',' + lastThree;
    }
    return '₹' + otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + lastThree;
  };

  const InputField = ({ label, value, onChange, min, max, unit, step = 1 }) => (
    <div>
      <label className="block text-sm font-medium text-gray-800 mb-1.5">{label}</label>
      <div className="flex items-center gap-2">
        <input 
          type="number" 
          value={value} 
          onChange={e => {
            const val = parseFloat(e.target.value);
            if (!isNaN(val) && val >= min && val <= max) {
              onChange(val);
            }
          }}
          className="w-full p-1.5 border rounded text-sm" 
        />
        <span className="text-sm text-gray-600">{unit}</span>
      </div>
      <input 
        type="range" 
        min={min} 
        max={max} 
        step={step} 
        value={value}
        onChange={e => onChange(parseFloat(e.target.value))}
        className="w-full mt-2" 
      />
    </div>
  );

  return (
    <div>
      <div className="calculator-header text-center mb-8 pt-24">
        <h1 className="text-2xl font-semibold text-[#113262] mb-2">Car Loan EMI Tool</h1>
        <h2 className="text-lg text-gray-600">Plan Loan Repayments with Car Loan EMI Calculator</h2>
      </div>
      <div className="max-w-5xl mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            {/* Loan Details Section */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Loan Details</h2>
              <div className="grid grid-cols-2 gap-6">
                <InputField 
                  label="Car Loan Amount"
                  value={values.loanAmount}
                  onChange={v => handleChange('loanAmount', v)}
                  min={50000}
                  max={10000000}
                  unit="₹"
                  step={50000}
                />
                <InputField 
                  label="Down Payment"
                  value={values.downPayment}
                  onChange={v => handleChange('downPayment', v)}
                  min={0}
                  max={values.loanAmount * 0.5}
                  unit="₹"
                  step={10000}
                />
              </div>
            </div>

            {/* Loan Terms Section */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Loan Terms</h2>
              <div className="grid grid-cols-2 gap-6">
                <InputField 
                  label="Interest Rate"
                  value={values.interestRate}
                  onChange={v => handleChange('interestRate', v)}
                  min={4}
                  max={20}
                  unit="%"
                  step={0.1}
                />
                <InputField 
                  label="Loan Tenure"
                  value={values.loanTenure}
                  onChange={v => handleChange('loanTenure', v)}
                  min={1}
                  max={8}
                  unit="years"
                />
              </div>
            </div>

            {/* Additional Charges Section */}
            <div className="bg-white rounded-lg shadow">
              <button
                onClick={() => setShowAssumptions(!showAssumptions)}
                className="w-full p-4 flex justify-between items-center hover:bg-gray-50"
              >
                <h2 className="text-lg font-bold text-gray-900">Additional Charges</h2>
                <ChevronDown 
                  className={`transform transition-transform ${showAssumptions ? 'rotate-180' : ''}`}
                  size={20}
                />
              </button>
              
              {showAssumptions && (
                <div className="p-4 border-t">
                  <div className="grid grid-cols-2 gap-6">
                    <InputField 
                      label="Processing Fee"
                      value={values.processingFee}
                      onChange={v => handleChange('processingFee', v)}
                      min={0}
                      max={3}
                      unit="%"
                      step={0.1}
                    />
                    <InputField 
                      label="Repayment Years"
                      value={values.repaymentYears}
                      onChange={v => handleChange('repaymentYears', v)}
                      min={0}
                      max={values.loanTenure}
                      unit="years"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Results Section */}
          <div className="bg-[#113262] text-white rounded-lg h-[360px] sticky top-6">
            <div className="p-4 border-b border-white/20">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold">Car Loan EMI</h3>
                <button className="p-1 hover:bg-blue-700 rounded">
                  <Share size={18} />
                </button>
              </div>
            </div>

            <div className="p-4">
              <div className="mb-4">
                <div className="text-3xl font-bold mb-1">{formatCurrency(result.monthlyEMI)}</div>
                <div className="text-sm text-gray-300">Monthly EMI</div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-t border-white/20">
                  <span className="text-sm">Total Amount</span>
                  <span className="font-bold">{formatCurrency(result.totalAmount)}</span>
                </div>
                
                <div className="flex justify-between items-center py-2 border-t border-white/20">
                  <span className="text-sm">Outstanding Amount</span>
                  <span className="font-bold">{formatCurrency(result.outstandingAmount)}</span>
                </div>
              </div>

              <button className="w-full bg-orange-400 text-white py-2 rounded-lg mt-4 hover:bg-orange-500 transition-colors text-sm">
                Apply Now →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarLoanCalculator;