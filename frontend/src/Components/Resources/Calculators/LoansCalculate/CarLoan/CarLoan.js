import React from 'react';
import Header from '../../../../Header';
import Footer from '../../../../Footer';
import CarLoanCalculator from './CarLoanCalculator';

export const CarLoanInfo = {
  title: "Understanding Car Loans",
  description: "Navigate the world of auto financing with confidence using our comprehensive guide and calculator",
  sections: [
    {
      title: "Understanding Auto Financing",
      content: `Purchasing a vehicle represents a significant financial decision that requires careful planning. Auto financing through a car loan offers a structured way to acquire your desired vehicle while maintaining financial stability.

A car loan is a financial product where a lender provides funds for vehicle purchase, with the vehicle itself serving as security. This arrangement allows for systematic repayment through monthly installments, making vehicle ownership more accessible while helping you maintain a healthy cash flow.`
    },
    {
      title: "Strategic Benefits of Car Financing",
      content: `Choosing car financing over an outright purchase offers several strategic advantages:

• Preserve your savings for other important financial goals
• Build your credit history through regular, timely payments
• Take advantage of promotional interest rates and dealer incentives
• Maintain financial flexibility with structured monthly payments
• Option to upgrade your vehicle more frequently

Consider these benefits alongside your personal financial situation when making your decision.`
    },
    {
      title: "Key Factors in Car Loan Approval",
      content: `Several factors influence your car loan eligibility:

• Income Stability: Consistent income source with minimum annual earnings
• Credit Profile: Your credit score and repayment history
• Age: Typically between 21 and 65 years
• Employment Status: Regular employment or business ownership
• Residency: Stable residential status
• Documentation: Valid identification and financial documents

Understanding these factors helps you prepare better for the loan application process.`
    },
    {
      title: "Application Process Simplified",
      content: `The car loan application process involves these key steps:

1. Initial Assessment
• Evaluate your budget and preferred vehicle category
• Research current interest rates and loan terms
• Calculate potential EMIs using our calculator

2. Documentation
• Prepare identity and address proof
• Gather income documentation
• Collect vehicle-related documents

3. Loan Processing
• Submit application with required documents
• Undergo credit assessment
• Receive loan approval and terms

4. Disbursement
• Review and accept loan agreement
• Complete vehicle purchase formalities
• Begin EMI payments`
    },
    {
      title: "Making the Most of Our Calculator",
      content: `Our Car Loan Calculator helps you make informed decisions by:

• Computing monthly EMI based on loan amount and tenure
• Showing the total interest payable over the loan term
• Calculating the total amount you'll pay
• Providing a clear breakdown of principal and interest
• Helping compare different loan scenarios

Use these insights to choose loan terms that align with your financial capacity.`
    },
    {
      title: "Smart Car Loan Management",
      content: `Maximize the benefits of your car loan with these strategies:

• Choose an appropriate loan tenure balancing EMI size with total interest
• Consider making a larger down payment to reduce the loan burden
• Maintain timely EMI payments to build a strong credit history
• Look for opportunities to prepay when possible
• Keep track of your loan statements and payment schedule

These practices ensure a smooth loan repayment experience while maintaining financial health.`
    }
  ]
};

const CarLoan = () => {
  return (
    <>
      <Header />
      <main className="bg-[#F5F5F5] relative">
        <div className="container mx-auto">
          <div className="relative z-20">
            <CarLoanCalculator />
            <div className="px-4 py-12">
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{CarLoanInfo.title}</h2>
                  <p className="text-gray-600 mb-4">{CarLoanInfo.description}</p>
                </section>
                {CarLoanInfo.sections.map((section, index) => (
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

export default CarLoan;