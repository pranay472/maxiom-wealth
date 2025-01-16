import React from 'react';
import LoanCalculator from '../Common/LoanCalculator';

const HomeLoanCalculator = () => {
  // Define input configurations
  const inputs = [
    {
      section: "Variables",
      key: "loanAmount",
      label: "Loan Amount",
      defaultValue: 1000000,
      prefix: "₹",
      helperText: "What is your loan amount today?",
      min: 100000,
      max: 100000000
    },
    {
      section: "Variables",
      key: "processingFee",
      label: "Processing Fee",
      defaultValue: 0,
      suffix: "%",
      min: 0,
      max: 5
    },
    {
      section: "Variables",
      key: "existingEMI",
      label: "Existing EMI (if any)",
      defaultValue: 0,
      prefix: "₹",
      min: 0,
      max: 1000000
    },
    {
      section: "Expectations",
      key: "interestRate",
      label: "Interest Rate",
      defaultValue: 8.5,
      suffix: "%",
      helperText: "What is the rate of interest on the loan?",
      min: 5,
      max: 20
    },
    {
      section: "Expectations",
      key: "tenure",
      label: "Tenure",
      defaultValue: 20,
      suffix: "Years",
      helperText: "What is the tenure of the loan?",
      min: 1,
      max: 30
    }
  ];

  // Calculate loan details
  const calculateResults = (values) => {
    const p = values.loanAmount;
    const r = values.interestRate / 12 / 100;
    const n = values.tenure * 12;
    
    const emi = p * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
    const totalPayment = emi * n;
    const totalInterest = totalPayment - p;

    return {
      monthlyEMI: emi,
      totalInterest,
      totalPayment,
      pieData: [
        { name: 'Principal', value: p },
        { name: 'Interest', value: totalInterest }
      ]
    };
  };

  return (
    <LoanCalculator
      title="Home Loan EMI Calculator"
      subtitle="Plan your home loan EMIs and understand your total payment breakdown"
      inputs={inputs}
      calculateResults={calculateResults}
      additionalFeatures={{
        enabled: false // Set to true to add additional features section
      }}
    />
  );
};

export default HomeLoanCalculator;
