import React from 'react';
import Header from '../../../../Header';
import Footer from '../../../../Footer';
import MarriageLoanCalculator from './MarriageLoanCalculator';

export const MarriageLoanInfo = {
  title: "What is a Marriage Loan?",
  description: "Plan your dream wedding with our comprehensive guide to marriage financing",
  sections: [
    {
      title: "Understanding Marriage Loans",
      content: `A marriage loan is a specialized personal loan designed to help cover wedding expenses. This financial solution enables you to manage the various costs associated with wedding celebrations while maintaining financial stability.

These loans typically offer amounts from ₹1 lakh to ₹25 lakhs, with flexible repayment terms of 12 to 60 months. The unsecured nature of these loans means approval is based on your creditworthiness and income stability rather than collateral.`
    },
    {
      title: "Wedding Expenses Covered",
      content: `Marriage loans can finance various wedding-related costs:

1. Venue and Catering
• Wedding venue rental
• Reception location
• Catering services
• Beverage arrangements

2. Clothing and Jewelry
• Wedding attire
• Traditional jewelry
• Accessories
• Family outfits

3. Event Services
• Photography and videography
• Decoration and flowers
• Entertainment and music
• Wedding planning services

4. Additional Expenses
• Honeymoon packages
• Guest accommodations
• Transportation
• Wedding invitations
• Gift arrangements`
    },
    {
      title: "Key Benefits",
      content: `Marriage loans offer several advantages:

• Quick Processing: Faster approval for timely arrangements
• Flexible Usage: Freedom to allocate funds as needed
• No Collateral: Unsecured loan without asset requirement
• Convenient EMIs: Easy monthly repayment structure
• Digital Process: Online application and approval
• Instant Disbursal: Quick access to funds
• Pre-closure Option: Ability to repay early

These features help you focus on wedding planning while managing finances effectively.`
    },
    {
      title: "Eligibility Requirements",
      content: `Key criteria for marriage loan approval:

• Age: 21-58 years
• Income: Minimum monthly income of ₹20,000
• Employment: Stable job with current employer
• Work Experience: At least 1 year
• Credit Score: 700+ preferred
• Documentation Needed:
  - Identity proof
  - Address proof
  - Income documents
  - Bank statements
  - Wedding invitation/proof
  - Vendor quotations (if available)

Meeting these criteria improves your chances of loan approval with favorable terms.`
    },
    {
      title: "Application Process",
      content: `Steps to obtain a marriage loan:

1. Pre-Application
• Estimate wedding budget
• Check eligibility
• Compare loan options
• Gather documents

2. Application Submission
• Complete loan application
• Submit required documents
• Provide wedding details
• Share cost estimates

3. Verification
• Document verification
• Income assessment
• Credit check
• Application review

4. Approval & Disbursement
• Loan offer acceptance
• Agreement signing
• Fund disbursement
• Vendor payments`
    },
    {
      title: "Using Maxiom's Marriage Loan Calculator",
      content: `Our marriage loan calculator helps plan your wedding financing:

• Budget Planning: Estimate total wedding expenses
• EMI Calculation: Plan monthly repayments
• Interest Analysis: Understand total interest costs
• Tenure Options: Compare different repayment periods
• Affordability Check: Assess loan feasibility
• Cost Distribution: Plan expense allocation

Use our calculator to make informed decisions about your wedding financing and ensure a memorable celebration without financial stress.`
    }
  ]
};

const MarriageLoan = () => {
  return (
    <>
      <Header />
      <main className="bg-[#F5F5F5] relative">
        <div className="container mx-auto">
          <div className="relative z-20">
            <MarriageLoanCalculator />
            <div className="px-4 py-12">
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{MarriageLoanInfo.title}</h2>
                  <p className="text-gray-600 mb-4">{MarriageLoanInfo.description}</p>
                </section>
                {MarriageLoanInfo.sections.map((section, index) => (
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

export default MarriageLoan;