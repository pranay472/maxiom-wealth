import React, { useState, useEffect } from 'react';
import { Share } from 'lucide-react';

const CarLoanCalculator = () => {
  const [values, setValues] = useState({
    loanAmount: 1000000,
    loanTenure: 6,
    interestRate: 8,
    repaymentYears: 1
  });

  const handleChange = (key, value) => {
    setValues(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const calculateLoan = () => {
    const { loanAmount, loanTenure, interestRate, repaymentYears } = values;
    
    // Calculate EMI
    const monthlyInterestRate = (interestRate / 12) / 100;
    const totalMonths = loanTenure * 12;
    const repaidMonths = repaymentYears * 12;
    
    // Multiply loan amount by 10 to match the scale
    const scaledLoanAmount = loanAmount * 10;
    
    const emi = scaledLoanAmount * monthlyInterestRate * 
                Math.pow(1 + monthlyInterestRate, totalMonths) / 
                (Math.pow(1 + monthlyInterestRate, totalMonths) - 1);
    
    // Calculate total amount
    const totalAmount = emi * totalMonths;
    
    // Calculate principle and interest paid
    const totalInterest = totalAmount - scaledLoanAmount;
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

  const [result, setResult] = useState(calculateLoan());

  useEffect(() => {
    setResult(calculateLoan());
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
    
    return formatted;
  }; // Added missing closing brace

  const InputField = ({ label, value, onChange, min, max, unit, step = 1, helpText }) => (
    <div className="mb-3">
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
          className="w-24 px-2 py-1 border rounded text-sm" 
        />
        <span className="text-sm text-gray-600">{unit}</span>
      </div>
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
        className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer mt-1" 
      />
      <div className="flex justify-between text-xs text-gray-500 mt-1">
        <span>{formatCurrency(min)}</span>
        <span>{formatCurrency(max)}</span>
      </div>
    </div>
  );

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      <div className="container mx-auto">
        <div className="mb-4 pt-36">
          <h1 className="text-2xl font-bold text-gray-900">Car Loan EMI Calculator</h1>
          <p className="text-sm text-gray-600 mt-1">Easy to own a car now. Calculate how much you need to pay monthly for a car.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <InputField 
                label="Car Loan Amount" 
                value={values.loanAmount}
                onChange={v => handleChange('loanAmount', v)}
                min={50000}
                max={10000000}
                unit="₹"
                step={50000}
                helpText="What is the your car loan amount today?"
              />
              <InputField 
                label="Car Loan Tenure" 
                value={values.loanTenure}
                onChange={v => handleChange('loanTenure', v)}
                min={1}
                max={8}
                unit="years"
                helpText="What is the tenure of the car loan?"
              />
              <InputField 
                label="Car Loan Interest" 
                value={values.interestRate}
                onChange={v => handleChange('interestRate', v)}
                min={4}
                max={20}
                unit="%"
                step={0.1}
                helpText="What is the rate of interest on the car loan?"
              />
              <InputField 
                label="Repayment Years" 
                value={values.repaymentYears}
                onChange={v => handleChange('repaymentYears', v)}
                min={0}
                max={8}
                unit="years"
                helpText="How many years of car loan repayment have you made?"
              />
            </div>
          </div>

          <div className="bg-[#113262] text-white p-4 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold">Car Loan EMI</h3>
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
                  <span className="font-bold">₹{formatCurrency(result.outstandingAmount)}</span>
                </div>

                <div className="flex justify-between py-1.5 border-t border-white/20">
                  <span className="text-sm">Principle Repaid</span>
                  <span className="font-bold">₹{formatCurrency(result.principleRepaid)}</span>
                </div>

                <div className="flex justify-between py-1.5 border-t border-white/20">
                  <span className="text-sm">Interest Paid</span>
                  <span className="font-bold">₹{formatCurrency(result.interestPaid)}</span>
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

export default CarLoanCalculator;