import React, { useState, useEffect } from 'react';
import { Share } from 'lucide-react';

const EducationLoanCalculator = () => {
  const [values, setValues] = useState({
    loanAmount: 1000000,
    loanTenure: 6,
    interestRate: 8,
    repaymentYears: 1,
    moratoriumPeriod: 1 // Course duration plus 6 months to 1 year
  });

  const handleChange = (key, value) => {
    setValues(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const calculateEMI = () => {
    const { loanAmount, loanTenure, interestRate, repaymentYears, moratoriumPeriod } = values;
    
    // Scale loan amount for correct calculations as per UI requirements
    const scaledLoanAmount = loanAmount * 10;
    
    // Monthly interest rate
    const monthlyRate = interestRate / (12 * 100);
    
    // Total number of monthly payments
    const totalMonths = loanTenure * 12;
    const repaidMonths = repaymentYears * 12;
    const moratoriumMonths = moratoriumPeriod * 12;
    
    // Interest accumulated during moratorium
    const moratoriumInterest = scaledLoanAmount * monthlyRate * moratoriumMonths;
    const totalPrincipal = scaledLoanAmount + moratoriumInterest;
    
    // Calculate EMI
    const numerator = totalPrincipal * monthlyRate * Math.pow(1 + monthlyRate, totalMonths);
    const denominator = Math.pow(1 + monthlyRate, totalMonths) - 1;
    const emi = numerator / denominator;
    
    // Total amount payable
    const totalAmount = emi * totalMonths;
    
    // Monthly principal = Total loan amount / Total months
    const monthlyPrincipal = totalPrincipal / totalMonths;
    
    // Calculate repayment details
    const principleRepaid = monthlyPrincipal * repaidMonths;
    const interestPaid = (emi - monthlyPrincipal) * repaidMonths;
    const outstandingLoan = totalAmount - (emi * repaidMonths);
    
    return {
      emi: Math.round(emi),
      totalAmount: Math.round(totalAmount),
      outstandingAmount: Math.round(outstandingLoan),
      principleRepaid: Math.round(principleRepaid),
      interestPaid: Math.round(interestPaid),
      moratoriumInterest: Math.round(moratoriumInterest)
    };
  };

  const [result, setResult] = useState(calculateEMI());

  useEffect(() => {
    setResult(calculateEMI());
  }, [values]);

  const formatCurrency = (amount) => {
    const numStr = Math.abs(amount).toFixed(0);
    const lastThree = numStr.substring(numStr.length - 3);
    const otherNums = numStr.substring(0, numStr.length - 3);
    const formatted = otherNums !== '' 
      ? otherNums.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + ',' + lastThree 
      : lastThree;
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
          <h1 className="text-2xl font-bold text-gray-900">Education Loan EMI Calculator</h1>
          <p className="text-sm text-gray-600 mt-1">Calculate your education loan EMI with moratorium period</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 space-y-3">
            <div className="grid grid-cols-2 gap-6">
              <InputField 
                label="Education Loan Amount" 
                value={values.loanAmount}
                onChange={v => handleChange('loanAmount', v)}
                min={100000}
                max={10000000}
                unit="₹"
                step={10000}
                helpText="What is your education loan amount?"
              />
              <InputField 
                label="Loan Tenure" 
                value={values.loanTenure}
                onChange={v => handleChange('loanTenure', v)}
                min={1}
                max={15}
                unit="years"
                helpText="What is the repayment tenure?"
              />
              <InputField 
                label="Interest Rate" 
                value={values.interestRate}
                onChange={v => handleChange('interestRate', v)}
                min={6}
                max={16}
                unit="%"
                step={0.1}
                helpText="What is the rate of interest?"
              />
              <InputField 
                label="Moratorium Period" 
                value={values.moratoriumPeriod}
                onChange={v => handleChange('moratoriumPeriod', v)}
                min={0}
                max={5}
                unit="years"
                step={0.5}
                helpText="Course duration plus grace period"
              />
              <InputField 
                label="Repayment Years" 
                value={values.repaymentYears}
                onChange={v => handleChange('repaymentYears', v)}
                min={0}
                max={15}
                unit="years"
                helpText="Years of loan repayment completed"
              />
            </div>
          </div>

          <div className="bg-[#113262] text-white p-4 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold">Education Loan EMI</h3>
              <button className="p-1.5 hover:bg-[#1e3a8a] rounded">
                <Share size={18} />
              </button>
            </div>

            <div className="mb-6">
              <div className="text-3xl font-bold mb-1">{formatCurrency(result.emi)}</div>
              <div className="text-sm text-gray-300">Required monthly payment after moratorium</div>
            </div>

            <div className="space-y-3">
              <h4 className="text-sm font-medium text-gray-300">Loan Details</h4>
              <div className="text-sm text-gray-300">(Including moratorium interest)</div>
              
              <div className="space-y-2">
                <div className="flex justify-between py-1.5 border-t border-white/20">
                  <span className="text-sm">Total Loan Amount</span>
                  <span className="font-bold">{formatCurrency(result.totalAmount)}</span>
                </div>
                
                <div className="flex justify-between py-1.5 border-t border-white/20">
                  <span className="text-sm">Outstanding Amount</span>
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

                <div className="flex justify-between py-1.5 border-t border-white/20">
                  <span className="text-sm">Moratorium Interest</span>
                  <span className="font-bold">{formatCurrency(result.moratoriumInterest)}</span>
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

export default EducationLoanCalculator;