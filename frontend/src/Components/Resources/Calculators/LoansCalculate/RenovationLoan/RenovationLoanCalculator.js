import React, { useState, useEffect } from 'react';
import { Share } from 'lucide-react';

const RenovationLoanCalculator = () => {
  const [values, setValues] = useState({
    loanAmount: 500000,
    loanTenure: 5,
    interestRate: 7.5,
    repaymentYears: 1,
    downPayment: 10
  });

  const handleChange = (key, value) => {
    setValues(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const calculateLoan = () => {
    const { loanAmount, loanTenure, interestRate, repaymentYears, downPayment } = values;
    
    // Calculate actual loan amount after down payment
    const actualLoanAmount = loanAmount * (1 - (downPayment / 100));
    
    // Monthly interest rate
    const monthlyRate = interestRate / (12 * 100);
    
    // Total number of monthly payments
    const totalMonths = loanTenure * 12;
    const repaidMonths = Math.min(repaymentYears * 12, totalMonths);
    
    // Calculate EMI using formula: P * r * (1 + r)^n / ((1 + r)^n - 1)
    const numerator = actualLoanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths);
    const denominator = Math.pow(1 + monthlyRate, totalMonths) - 1;
    const emi = numerator / denominator;
    
    // Validate EMI calculation
    if (!isFinite(emi) || isNaN(emi)) {
        return {
            emi: 0,
            totalAmount: actualLoanAmount,
            outstandingAmount: actualLoanAmount,
            principalRepaid: 0,
            interestPaid: 0,
            downPaymentAmount: loanAmount * (downPayment / 100),
            totalInterest: 0
        };
    }
    
    // Total amount payable
    const totalAmount = emi * totalMonths;
    
    // Calculate repayment details
    const totalInterest = totalAmount - actualLoanAmount;
    const principalRepaid = (actualLoanAmount / totalMonths) * repaidMonths;
    const interestPaid = (emi - (actualLoanAmount / totalMonths)) * repaidMonths;
    const outstandingLoan = totalAmount - (emi * repaidMonths);
    
    return {
      emi: Math.round(emi),
      totalAmount: Math.round(totalAmount),
      outstandingAmount: Math.round(outstandingLoan),
      principalRepaid: Math.round(principalRepaid),
      interestPaid: Math.round(interestPaid),
      downPaymentAmount: Math.round(loanAmount * (downPayment / 100)),
      totalInterest: Math.round(totalInterest)
    };
  };

  const [result, setResult] = useState(calculateLoan());

  useEffect(() => {
    setResult(calculateLoan());
  }, [values]);

  const formatCurrency = (amount) => {
    const numStr = Math.abs(amount).toFixed(0);
    const lastThree = numStr.substring(numStr.length - 3);
    const otherNums = numStr.substring(0, numStr.length - 3);
    const formatted = otherNums !== '' 
      ? otherNums.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + ',' + lastThree 
      : lastThree;
    return '$' + formatted;
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
        <div className="mb-4 pt-36">
          <h1 className="text-2xl font-bold text-gray-900">Home Renovation Loan Calculator</h1>
          <p className="text-sm text-gray-600 mt-1">Calculate your renovation loan EMI and total costs</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 space-y-3">
            <div className="grid grid-cols-2 gap-6">
              <InputField 
                label="Renovation Cost" 
                value={values.loanAmount}
                onChange={v => handleChange('loanAmount', v)}
                min={10000}
                max={1000000}
                unit="$"
                step={5000}
                helpText="Total cost of your renovation project"
              />
              <InputField 
                label="Down Payment" 
                value={values.downPayment}
                onChange={v => handleChange('downPayment', v)}
                min={0}
                max={50}
                unit="%"
                step={1}
                helpText="Initial payment percentage"
              />
              <InputField 
                label="Loan Tenure" 
                value={values.loanTenure}
                onChange={v => handleChange('loanTenure', v)}
                min={1}
                max={15}
                unit="years"
                helpText="Duration of loan repayment"
              />
              <InputField 
                label="Interest Rate" 
                value={values.interestRate}
                onChange={v => handleChange('interestRate', v)}
                min={3}
                max={15}
                unit="%"
                step={0.1}
                helpText="Annual interest rate"
              />
              <InputField 
                label="Years Repaid" 
                value={values.repaymentYears}
                onChange={v => handleChange('repaymentYears', v)}
                min={0}
                max={values.loanTenure}
                unit="years"
                helpText="Years of loan repayment completed"
              />
            </div>
          </div>

          <div className="bg-[#113262] text-white p-4 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold">Monthly Payment</h3>
              <button className="p-1.5 hover:bg-[#1e3a8a] rounded">
                <Share size={18} />
              </button>
            </div>

            <div className="mb-6">
              <div className="text-3xl font-bold mb-1">{formatCurrency(result.emi)}</div>
              <div className="text-sm text-gray-300">Required monthly payment</div>
            </div>

            <div className="space-y-3">
              <h4 className="text-sm font-medium text-gray-300">Loan Summary</h4>
              
              <div className="space-y-2">
                <div className="flex justify-between py-1.5 border-t border-white/20">
                  <span className="text-sm">Total Loan Amount</span>
                  <span className="font-bold">{formatCurrency(result.totalAmount)}</span>
                </div>

                <div className="flex justify-between py-1.5 border-t border-white/20">
                  <span className="text-sm">Down Payment</span>
                  <span className="font-bold">{formatCurrency(result.downPaymentAmount)}</span>
                </div>
                
                <div className="flex justify-between py-1.5 border-t border-white/20">
                  <span className="text-sm">Outstanding Amount</span>
                  <span className="font-bold">{formatCurrency(result.outstandingAmount)}</span>
                </div>

                <div className="flex justify-between py-1.5 border-t border-white/20">
                  <span className="text-sm">Principal Repaid</span>
                  <span className="font-bold">{formatCurrency(result.principalRepaid)}</span>
                </div>

                <div className="flex justify-between py-1.5 border-t border-white/20">
                  <span className="text-sm">Interest Paid</span>
                  <span className="font-bold">{formatCurrency(result.interestPaid)}</span>
                </div>

                <div className="flex justify-between py-1.5 border-t border-white/20">
                  <span className="text-sm">Total Interest</span>
                  <span className="font-bold">{formatCurrency(result.totalInterest)}</span>
                </div>
              </div>
            </div>

            <button className="w-full bg-[#fb923c] text-white py-2 rounded-lg mt-6 text-sm hover:bg-[#f97316] transition-colors">
              Apply Now →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RenovationLoanCalculator;