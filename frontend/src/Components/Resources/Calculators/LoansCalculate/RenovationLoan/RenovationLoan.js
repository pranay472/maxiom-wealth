import React from 'react';
import Header from '../../../../Header';
import Footer from '../../../../Footer';
import RenovationLoanCalculator from './RenovationLoanCalculator';

export const RenovationLoanInfo = {
  title: "What is a Home Renovation Loan?",
  description: "Transform your living space with our comprehensive guide to home renovation financing",
  sections: [
    {
      title: "Understanding Home Renovation Loans",
      content: `A home renovation loan is a specialized financial product designed to fund home improvements, repairs, and modifications. This loan type helps homeowners enhance their property's value and living conditions without depleting their savings.

These loans can cover various renovation projects, from basic repairs to major structural changes, with amounts typically ranging from ₹2 lakhs to ₹50 lakhs depending on the project scope and property value. The loan can be either secured against your property or unsecured based on your creditworthiness.`
    },
    {
      title: "Benefits of Renovation Financing",
      content: `Home renovation loans offer several key advantages:

• Property Value Enhancement: Increase your home's market worth
• Tax Benefits: Interest may qualify for tax deductions
• Flexible Usage: Fund various improvement projects
• Cost-Effective: Lower interest rates than personal loans
• Extended Tenure: Longer repayment periods available
• Quick Processing: Faster approval for existing home loan customers
• Project-Based Disbursement: Funds released as per renovation stages`
    },
    {
      title: "Eligible Renovation Projects",
      content: `Common renovation works covered under the loan:

• Structural Modifications
  - Room additions or extensions
  - Floor additions
  - Wall modifications
  - Roof repairs or replacement

• Interior Improvements
  - Kitchen remodeling
  - Bathroom upgrades
  - Flooring replacement
  - Electrical system updates

• External Enhancements
  - Facade improvements
  - Garden landscaping
  - Driveway construction
  - External painting

• Essential Repairs
  - Waterproofing
  - Plumbing work
  - Foundation repairs
  - Weather damage restoration`
    },
    {
      title: "Loan Requirements",
      content: `Key eligibility criteria for renovation loans:

• Property Ownership: Clear title to the property
• Age: 21-65 years during loan tenure
• Income Stability: Regular income source
• Credit Score: Minimum 700+ preferred
• Property Age: Usually less than 40 years
• Documentation Requirements:
  - Property ownership papers
  - Income proof
  - Renovation cost estimates
  - Building plan approvals (if required)
  - Contractor agreements

Meeting these criteria improves your chances of loan approval with favorable terms.`
    },
    {
      title: "Application Process",
      content: `Steps to obtain a renovation loan:

1. Planning Phase
• Assess renovation requirements
• Obtain detailed cost estimates
• Check property eligibility
• Gather necessary documents

2. Application
• Submit loan application
• Provide property documents
• Present renovation plans
• Share cost estimates

3. Verification
• Property evaluation
• Document verification
• Plan approval check
• Technical assessment

4. Disbursement
• Loan approval
• Agreement signing
• Stage-wise fund release
• Work commencement`
    },
    {
      title: "Using Maxiom's Renovation Loan Calculator",
      content: `Our renovation loan calculator helps plan your home improvement financing:

• Loan Amount Estimation: Based on property value and renovation scope
• EMI Calculation: Plan monthly payments effectively
• Cost Analysis: Compare different loan terms and amounts
• Repayment Schedule: View detailed payment timelines
• Tax Benefit Estimation: Calculate potential tax savings
• Affordability Check: Assess loan feasibility based on income

Make informed decisions about your renovation financing using our comprehensive calculator tool.`
    }
  ]
};

const RenovationLoan = () => {
  return (
    <>
      <Header />
      <main className="bg-[#F5F5F5] relative">
        <div className="container mx-auto">
          <div className="relative z-20">
            <RenovationLoanCalculator />
            <div className="px-4 py-12">
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{RenovationLoanInfo.title}</h2>
                  <p className="text-gray-600 mb-4">{RenovationLoanInfo.description}</p>
                </section>
                {RenovationLoanInfo.sections.map((section, index) => (
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

export default RenovationLoan;