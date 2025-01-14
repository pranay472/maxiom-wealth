import React from 'react';
import Header from '../../../../Header';
import Footer from '../../../../Footer';
import HomeLoanCalculator from './HomeLoanCalculator';

export const HomeLoanInfo = {
  title: "Understanding Home Loans",
  description: "Navigate the path to homeownership with our comprehensive guide and calculator",
  sections: [
    {
      title: "What is a Home Loan?",
      content: `A home loan is a financial instrument designed to help individuals achieve their dream of homeownership. It's a long-term borrowing arrangement where a financial institution provides the funds needed to purchase or construct a property, with the property itself serving as collateral.

The loan amount, typically ranging from 75-90% of the property value, is repaid through structured monthly installments over an extended period, usually 15-30 years. This arrangement makes homeownership accessible to those who may not have substantial immediate savings.`
    },
    {
      title: "Benefits of Home Financing",
      content: `Home loans offer numerous advantages for aspiring homeowners:

• Tax Benefits: Interest payments often qualify for tax deductions
• Asset Creation: Build equity while paying for your residence
• Protection Against Inflation: Lock in current property prices
• Wealth Building: Real estate typically appreciates over time
• Flexible Tenure: Choose repayment periods that suit your financial capacity
• Credit Building: Regular payments help establish a strong credit history`
    },
    {
      title: "Home Loan Eligibility Criteria",
      content: `Key factors that determine your home loan eligibility:

• Age: Generally 21-65 years during the loan tenure
• Income Stability: Regular income source with minimum experience
• Credit Profile: Strong credit score and clean repayment history
• Property Assessment: Evaluation of the chosen property's market value
• Documentation: Valid identity, income, and property documents
• Debt-to-Income Ratio: Healthy balance between income and existing obligations

Meeting these criteria increases your chances of loan approval and favorable terms.`
    },
    {
      title: "Application Process Guide",
      content: `The home loan journey involves several key steps:

1. Initial Application
• Submit application form with basic details
• Provide necessary documentation
• Pay processing fees if applicable

2. Assessment Phase
• Income and credit evaluation
• Property legal verification
• Technical property assessment

3. Loan Processing
• Receive and review sanction letter
• Complete legal documentation
• Property registration and mortgage

4. Disbursement
• Meet disbursement conditions
• Coordinate with property seller
• Initiate EMI payments`
    },
    {
      title: "Using Maxiom's Home Loan Calculator",
      content: `Our advanced home loan calculator helps you plan your home purchase effectively:

• Calculate EMIs based on loan amount, interest rate, and tenure
• Understand the total interest payable
• View year-wise amortization schedule
• Compare different loan scenarios
• Estimate maximum eligible loan amount
• Plan prepayment strategies

This tool empowers you to make informed decisions about your home loan by providing clear insights into your financial commitments.`
    }
  ]
};

function HomeLoan() {
  return (
    <>
      <Header />
      <main className="bg-[#F5F5F5] relative">
        <div className="container mx-auto">
          <div className="relative z-20">
      <HomeLoanCalculator />
            <div className="px-4 py-12">
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{HomeLoanInfo.title}</h2>
                  <p className="text-gray-600 mb-4">{HomeLoanInfo.description}</p>
                </section>
                {HomeLoanInfo.sections.map((section, index) => (
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

export default HomeLoan;