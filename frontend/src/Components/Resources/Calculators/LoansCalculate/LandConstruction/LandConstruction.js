import React from 'react';
import Header from '../../../../Header';
import Footer from '../../../../Footer';
import LandConstructionCalculator from './LandConstructionCalculator';

export const LandConstructionInfo = {
  title: "What is a Land Construction Loan?",
  description: "Build your dream home from the ground up with our comprehensive guide to land and construction financing",
  sections: [
    {
      title: "Understanding Land Construction Loans",
      content: `A land construction loan is a specialized financing option that combines the purchase of land with construction funding. This dual-purpose loan helps you acquire property and build your dream home through a single financial instrument.

These loans typically finance up to 80% of the total project cost (land + construction), with loan amounts ranging from ₹20 lakhs to several crores based on the project scope, location, and your eligibility. The loan is usually disbursed in stages as construction progresses.`
    },
    {
      title: "Key Features and Benefits",
      content: `Land construction loans offer unique advantages:

• Single Application: One loan for both land purchase and construction
• Stage-wise Disbursement: Funds released according to construction progress
• Tax Benefits: Interest qualifies for tax deductions
• Flexible Repayment: Interest-only payments during construction
• Extended Tenure: Longer repayment periods (up to 30 years)
• Better Rates: Lower interest rates compared to separate loans
• Customizable: Tailor the loan to your construction timeline`
    },
    {
      title: "Loan Components",
      content: `The loan covers two main aspects:

1. Land Purchase
• Plot cost financing
• Registration charges
• Legal fee coverage
• Development charges

2. Construction Funding
• Foundation work
• Structural construction
• Interior finishing
• External development

Additional Coverage:
• Architect fees
• Municipal approvals
• Labor costs
• Material expenses
• Utility connections`
    },
    {
      title: "Eligibility Criteria",
      content: `Key requirements for land construction loans:

• Age: 21-65 years during loan tenure
• Income: Stable source with minimum annual earnings
• Credit Score: 750+ preferred
• Property Criteria:
  - Clear title deed
  - Approved building plans
  - Legal clearances
  - Proper zoning

Documentation Needed:
• Identity and address proof
• Income documents
• Property papers
• Construction estimates
• Approved building plans
• Contractor agreements`
    },
    {
      title: "Disbursement Process",
      content: `The loan is released in stages based on construction progress:

1. Initial Stage
• Land purchase amount
• Initial construction costs
• Basic documentation expenses

2. Foundation Stage
• Excavation costs
• Foundation laying
• Basic structure work

3. Construction Phases
• Structural completion
• Walls and roofing
• Electrical and plumbing
• Interior work

4. Final Stage
• Finishing work
• External development
• Utility connections
• Completion certificate`
    },
    {
      title: "Using Maxiom's Land Construction Calculator",
      content: `Our specialized calculator helps plan your construction project:

• Total Cost Estimation: Land and construction cost analysis
• Stage-wise Planning: Calculate phase-wise fund requirements
• EMI Projection: Plan payments during and after construction
• Interest Calculation: Understand pre-EMI interest during construction
• Cost Breakdown: Detailed split of various expenses
• Affordability Check: Assess loan viability based on income

Use our calculator to make informed decisions about your construction project financing.`
    }
  ]
};

const LandConstruction = () => {
  return (
    <>
      <Header />
      <main className="bg-[#F5F5F5] relative">
        <div className="container mx-auto">
          <div className="relative z-20">
            <LandConstructionCalculator />
            <div className="px-4 py-12">
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{LandConstructionInfo.title}</h2>
                  <p className="text-gray-600 mb-4">{LandConstructionInfo.description}</p>
                </section>
                {LandConstructionInfo.sections.map((section, index) => (
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

export default LandConstruction;