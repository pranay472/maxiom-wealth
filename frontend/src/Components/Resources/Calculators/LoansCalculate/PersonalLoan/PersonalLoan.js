import React from 'react';
import Header from '../../../../Header';
import Footer from '../../../../Footer';
import PersonalLoanCalculator from './PersonalLoanCalculator';

export const PersonalLoanInfo = {
  title: "What is a Personal Loan?",
  description: "Understand personal loans better with our comprehensive guide and calculator",
  sections: [
    {
      title: "Understanding Personal Loans",
      content: `A personal loan is a versatile financial solution that provides quick access to funds without requiring collateral. It's an unsecured loan where approval is based on your creditworthiness, income stability, and repayment capacity rather than any assets.

The loan amount typically ranges from ₹50,000 to ₹40 lakhs, with flexible repayment terms of 12 to 60 months. While interest rates may be slightly higher than secured loans due to the absence of collateral, personal loans offer greater flexibility in fund utilization.`
    },
    {
      title: "Why Choose a Personal Loan?",
      content: `Personal loans offer several compelling advantages:

• Quick Processing: Faster approval and disbursement
• No Collateral Required: Approval based on creditworthiness
• Flexible Usage: Freedom to use funds for various needs
• Fixed EMIs: Predictable monthly payments
• Debt Consolidation: Combine multiple debts into one
• Simple Documentation: Minimal paperwork needed
• Credit Building: Regular payments improve credit score`
    },
    {
      title: "Personal Loan Eligibility",
      content: `Key requirements for personal loan qualification:

• Age: 21-58 years
• Income: Minimum ₹25,000 monthly (varies by location)
• Employment: Stable job with current employer
• Credit Score: 750+ preferred for better rates
• Work Experience: 1-3 years minimum
• Documentation: Identity, address, and income proof

Meeting these criteria increases your chances of loan approval with favorable terms.`
    },
    {
      title: "Loan Application Steps",
      content: `Follow these steps for a smooth personal loan application:

1. Initial Preparation
• Review your credit score
• Calculate affordable EMI
• Gather required documents

2. Application Process
• Submit loan application
• Provide necessary documentation
• Pay applicable processing fees

3. Verification
• Credit assessment
• Income verification
• Document validation

4. Final Steps
• Review loan offer
• Accept terms and conditions
• Receive disbursement`
    },
    {
      title: "Using Maxiom's Personal Loan Calculator",
      content: `Our calculator simplifies loan planning with these features:

• Instant EMI Calculation: Get quick estimates
• Payment Schedule: View complete repayment timeline
• Interest Breakdown: Understand total costs
• Comparison Tool: Evaluate different scenarios
• Prepayment Analysis: Calculate potential savings
• User-Friendly Interface: Easy to use and understand

Make informed decisions about your personal loan using our comprehensive calculator tool.`
    }
  ]
};

const PersonalLoan = () => {
  return (
    <>
      <Header />
      <main className="bg-[#F5F5F5] relative">
        <div className="container mx-auto">
          <div className="relative z-20">
            <PersonalLoanCalculator />
            <div className="px-4 py-12">
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{PersonalLoanInfo.title}</h2>
                  <p className="text-gray-600 mb-4">{PersonalLoanInfo.description}</p>
                </section>
                {PersonalLoanInfo.sections.map((section, index) => (
                  <section key={index}>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">{section.title}</h3>
                    <p className="text-gray-600 whitespace-pre-line mb-3">{section.content}</p>
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

export default PersonalLoan;