import React from 'react';
import Header from '../../../../Header';
import Footer from '../../../../Footer';
import EducationLoanCalculator from './EducationLoanCalculator';

export const EducationLoanInfo = {
  title: "What is an Education Loan?",
  description: "Invest in your future with our comprehensive guide to education financing",
  sections: [
    {
      title: "Understanding Education Loans",
      content: `An education loan is a specialized financial product designed to fund academic pursuits, covering expenses like tuition fees, books, accommodation, and other education-related costs. These loans support both domestic and international education, helping students achieve their academic goals without immediate financial burden.

The loan amount varies based on the course and institution, typically ranging from ₹4 lakhs for domestic studies to ₹40 lakhs or more for international education. Repayment usually begins after course completion, providing students time to secure employment.`
    },
    {
      title: "Benefits of Education Loans",
      content: `Education loans offer several unique advantages:

• Tax Benefits: Interest payments qualify for tax deduction under Section 80E
• Moratorium Period: Repayment starts after course completion plus 6-12 months
• Collateral-Free Options: Available for loans up to certain limits
• Coverage: Includes tuition fees, living expenses, and study materials
• Flexible Repayment: Extended tenure options of 5-15 years
• Merit-Based Terms: Better rates for students with strong academic records
• Career Development: Focus on studies without financial stress`
    },
    {
      title: "Eligibility and Requirements",
      content: `Key criteria for education loan approval:

• Academic Record: Strong academic performance in previous studies
• Admission Status: Confirmed admission in recognized institution
• Course Selection: Approved professional/technical courses
• Age: Generally 18-35 years during application
• Co-Applicant: Parent/Guardian as co-borrower
• Income Proof: Co-applicant's income documentation
• Collateral: May be required for loans above ₹4-7 lakhs

Additional requirements may vary based on loan amount and institution.`
    },
    {
      title: "Application Process",
      content: `Follow these steps for education loan application:

1. Pre-Application
• Research course and institution requirements
• Obtain admission confirmation
• Gather necessary documents
• Calculate loan requirement

2. Documentation
• Academic records and certificates
• Admission proof and fee structure
• Identity and address proof
• Income documents of co-applicant
• Collateral documents (if applicable)

3. Loan Processing
• Submit loan application
• Undergo credential verification
• Complete interview (if required)
• Receive sanction letter

4. Disbursement
• Accept loan terms
• Complete mortgage formalities (if applicable)
• Receive funds directly to institution`
    },
    {
      title: "Using Maxiom's Education Loan Calculator",
      content: `Our education loan calculator helps plan your academic financing:

• EMI Estimation: Calculate monthly payments based on loan amount
• Moratorium Impact: Understand interest accrual during study period
• Repayment Analysis: View detailed repayment schedules
• Tax Benefit Calculator: Estimate potential tax savings
• Multiple Scenarios: Compare different loan terms
• User-Friendly Interface: Easy to understand and navigate

Plan your education financing effectively with our comprehensive calculator tool.`
    }
  ]
};

const EducationLoan = () => {
  return (
    <>
      <Header />
      <main className="bg-[#F5F5F5] relative">
        <div className="container mx-auto">
          <div className="relative z-20">
            <EducationLoanCalculator />
            <div className="px-4 py-12">
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{EducationLoanInfo.title}</h2>
                  <p className="text-gray-600 mb-4">{EducationLoanInfo.description}</p>
                </section>
                {EducationLoanInfo.sections.map((section, index) => (
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

export default EducationLoan;