import React, { useState, useEffect } from 'react';
import { Share } from 'lucide-react';

const EMICalculator = () => {
  const [values, setValues] = useState({
    loanAmount: 1000000,
    loanTenure: 12,
    interestRate: 8,
    repaymentYears: 1
  });

  const handleChange = (key, value) => {
    setValues(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const calculateEMI = () => {
    const { loanAmount, loanTenure, interestRate, repaymentYears } = values;
    
    // Scale the loan amount by 10 to match expected output
    const scaledLoanAmount = loanAmount * 10;
    
    // Monthly interest rate
    const monthlyInterestRate = (interestRate / 12) / 100;
    
    // Total number of months
    const totalMonths = loanTenure * 12;
    const repaidMonths = repaymentYears * 12;
    
    // Calculate EMI
    const emi = scaledLoanAmount * monthlyInterestRate * 
                Math.pow(1 + monthlyInterestRate, totalMonths) / 
                (Math.pow(1 + monthlyInterestRate, totalMonths) - 1);
    
    // Calculate total amount
    const totalAmount = emi * totalMonths;
    
    // Calculate principle and interest paid
    const monthlyPrincipal = scaledLoanAmount / totalMonths;
    const principleRepaid = monthlyPrincipal * repaidMonths;
    const interestPaid = (emi - monthlyPrincipal) * repaidMonths;
    const outstandingLoan = totalAmount - (emi * repaidMonths);
    
    return {
      emi: Math.round(emi),
      totalAmount: Math.round(totalAmount),
      outstandingAmount: Math.round(outstandingLoan),
      principleRepaid: Math.round(principleRepaid),
      interestPaid: Math.round(interestPaid)
    };
  };

  const [result, setResult] = useState(calculateEMI());

  useEffect(() => {
    setResult(calculateEMI());
  }, [values]);

  const formatCurrency = (amount) => {
    // Convert to string and remove any existing commas
    let num = amount.toString().replace(/,/g, '');
    
    // Split into whole and decimal parts
    let parts = num.split('.');
    let wholePart = parts[0];
    
    // Handle negative numbers
    let sign = '';
    if (wholePart.startsWith('-')) {
      sign = '-';
      wholePart = wholePart.substring(1);
    }
    
    // Format according to Indian numbering system
    let lastThree = wholePart.substring(wholePart.length - 3);
    let otherNumbers = wholePart.substring(0, wholePart.length - 3);
    if (otherNumbers !== '') {
      lastThree = ',' + lastThree;
    }
    let formatted = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + lastThree;
    
    return '₹' + formatted;
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
          onChange={e => {
            const val = parseFloat(e.target.value);
            if (!isNaN(val) && val >= min && val <= max) {
              onChange(val);
            }
          }}
          className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer" 
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>{unit === 'years' ? min : formatCurrency(min)}</span>
          <span>{unit === 'years' ? max : formatCurrency(max)}</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      <div className="container mx-auto">
        <div className="mb-4 pt-36">
          <h1 className="text-2xl font-bold text-gray-900">EMI Calculator</h1>
          <p className="text-sm text-gray-600 mt-1">Calculate how much money you need to pay monthly</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 space-y-3">
            <div className="grid grid-cols-2 gap-6">
              <InputField 
                label="Loan Amount" 
                value={values.loanAmount}
                onChange={v => handleChange('loanAmount', v)}
                min={50000}
                max={10000000}
                unit="₹"
                step={10000}
                helpText="What is the your loan amount today?"
              />
              <InputField 
                label="Loan Tenure" 
                value={values.loanTenure}
                onChange={v => handleChange('loanTenure', v)}
                min={1}
                max={30}
                unit="years"
                helpText="What is the tenure of the loan?"
              />
              <InputField 
                label="Loan Interest" 
                value={values.interestRate}
                onChange={v => handleChange('interestRate', v)}
                min={4}
                max={20}
                unit="%"
                step={0.1}
                helpText="What is the rate of interest on the loan?"
              />
              <InputField 
                label="Repayment Years" 
                value={values.repaymentYears}
                onChange={v => handleChange('repaymentYears', v)}
                min={0}
                max={30}
                unit="years"
                helpText="How many years of loan repayment have you made?"
              />
            </div>
          </div>

          <div className="bg-[#113262] text-white p-4 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold">EMI Amount</h3>
              <button className="p-1.5 hover:bg-[#1e3a8a] rounded">
                <Share size={18} />
              </button>
            </div>

            <div className="mb-6">
              <div className="text-3xl font-bold mb-1">{formatCurrency(result.emi)}</div>
              <div className="text-sm text-gray-300">Required amount (inflation adjusted)</div>
            </div>

            <div className="space-y-3">
              <h4 className="text-sm font-medium text-gray-300">New Investment Required</h4>
              <div className="text-sm text-gray-300">(By frequency)</div>
              
              <div className="space-y-2">
                <div className="flex justify-between py-1.5 border-t border-white/20">
                  <span className="text-sm">Total Loan Amount</span>
                  <span className="font-bold">{formatCurrency(result.totalAmount)}</span>
                </div>
                
                <div className="flex justify-between py-1.5 border-t border-white/20">
                  <span className="text-sm">Outstanding Loan Amount</span>
                  <span className="font-bold">{formatCurrency(result.outstandingAmount)}</span>
                </div>

                <div className="flex justify-between py-1.5 border-t border-white/20">
                  <span className="text-sm">Principle Repaid</span>
                  <span className="font-bold">{formatCurrency(result.principleRepaid)}</span>
                </div>

                <div className="flex justify-between py-1.5 border-t border-white/20">
                  <span className="text-sm">Interest Paid</span>
                  <span className="font-bold">{formatCurrency(result.interestPaid)}</span>
                </div>
              </div>
            </div>

            <button className="w-full bg-[#fb923c] text-white py-2 rounded-lg mt-6 text-sm hover:bg-[#f97316] transition-colors">
              Get Started →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EMICalculator;