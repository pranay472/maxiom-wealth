import React from 'react';
import Header from '../../../../Header';
import Footer from '../../../../Footer';
import EMICalculator from './EMICalculator';

export const EMIInfo = {
  title: "What is EMI (Equated Monthly Installment)?",
  description: "Master the concept of EMIs and make informed financial decisions with our comprehensive guide and calculator",
  sections: [
    {
      title: "Understanding EMI",
      content: `An Equated Monthly Installment (EMI) represents a structured approach to loan repayment where borrowers make fixed monthly payments until their loan is fully settled. This payment system combines both principal and interest components, ensuring systematic debt reduction while maintaining consistent monthly obligations.

For instance, if you finance a Rs. 5,00,000 purchase over 5 years, your monthly commitment would be fixed, making it easier to budget and plan your finances. This predictable payment structure helps in better financial planning and management.`
    },
    {
      title: "Advantages of EMI Financing",
      content: `EMI financing offers several compelling benefits:

• Makes large purchases manageable through structured payments
• Provides better interest rates compared to credit card financing
• Helps in systematic debt management
• Enables better budget planning with fixed monthly commitments
• Offers flexibility in choosing loan tenure based on financial capacity
• Builds credit history through regular payments`
    },
    {
      title: "Understanding EMI Calculation",
      content: `EMI calculation involves three key components:
      
• Principal Amount: The initial loan amount borrowed
• Interest Rate: Annual interest rate charged by the lender
• Loan Tenure: Duration for loan repayment in months or years

The EMI formula combines these factors: EMI = P × r × (1 + r)^n / [(1 + r)^n - 1]
Where: P = Principal, r = Monthly interest rate, n = Total number of months

This calculation ensures equal monthly payments while gradually reducing the principal amount.`
    },
    {
      title: "Types of EMI Calculators",
      content: `Different EMI calculators serve various financial needs:

• Home Loan Calculator: For planning property purchases and mortgage payments
• Car Loan Calculator: Helps estimate vehicle financing costs
• Personal Loan Calculator: For calculating general purpose loan EMIs
• Education Loan Calculator: Assists in planning academic financing

Each calculator is tailored to consider specific factors relevant to the loan type.`
    },
    {
      title: "Using Maxiom's EMI Calculator",
      content: `Maxiom's EMI calculator simplifies loan planning with these features:

• Instant EMI computation for any loan amount
• Flexible interest rate and tenure options
• Clear breakdown of principal and interest components
• Multiple loan scenario comparisons
• User-friendly interface for quick calculations

This free tool helps you make informed decisions about your loan commitments and financial planning.`
    }
  ]
};

const EMI = () => {
  return (
    <>
      <Header />
      <main className="bg-[#F5F5F5] relative">
        <div className="container mx-auto">
          <div className="relative z-20">
            <EMICalculator />
            <div className="px-4 py-12">
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{EMIInfo.title}</h2>
                  <p className="text-gray-600 mb-4">{EMIInfo.description}</p>
                </section>
                {EMIInfo.sections.map((section, index) => (
                  <section key={index}>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">{section.title}</h3>
                    <p className="text-gray-600 mb-3">{section.content}</p>
                  </section>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default EMI;