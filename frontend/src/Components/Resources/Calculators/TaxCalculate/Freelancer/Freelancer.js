import React from 'react';
import Header from '../../../../Header';
import Footer from '../../../../Footer';
import FreelancerCalculator from './FreelancerCalculator';

const FreelancerInfo = () => {
  return (
    <div className="bg-[#FFFFFF] rounded-lg shadow-lg p-6">
      <h2 className="text-[#1C52A0] text-2xl font-semibold mb-4">Freelancer Taxation</h2>
      <p className="mb-4 text-[#0D0D0D]">Freelance taxation is a complex area of financial management that requires careful understanding of income reporting, deductions, and tax obligations for self-employed professionals across various industries.</p>

      <h3 className="text-[#1C52A0] text-xl font-semibold mb-3">Key Tax Considerations</h3>
      <p className="mb-4 text-[#0D0D0D]">Freelancers must navigate unique tax challenges, including self-employment tax, estimated tax payments, and tracking business expenses. Proper tax planning is crucial for maximizing income and minimizing tax liability.</p>

      <h3 className="text-[#1C52A0] text-xl font-semibold mb-3">Types of Freelance Income</h3>
      <ul className="list-disc pl-6 mb-4 text-[#0D0D0D]">
        <li>Professional Services Income</li>
        <li>Consulting Fees</li>
        <li>Royalties and Licensing</li>
        <li>Digital Product Sales</li>
        <li>Gig Economy Earnings</li>
      </ul>

      <h3 className="text-[#1C52A0] text-xl font-semibold mb-3">Important Deductions</h3>
      <ul className="list-disc pl-6 mb-4 text-[#0D0D0D]">
        <li>Home Office Expenses</li>
        <li>Equipment and Software</li>
        <li>Professional Development</li>
        <li>Travel and Transportation</li>
        <li>Health Insurance Premiums</li>
      </ul>

      <h3 className="text-[#1C52A0] text-xl font-semibold mb-3">Tax Compliance Strategies</h3>
      <ul className="list-disc pl-6 mb-4 text-[#0D0D0D]">
        <li>Maintain Detailed Records</li>
        <li>Separate Business and Personal Finances</li>
        <li>Make Quarterly Estimated Tax Payments</li>
        <li>Understand Self-Employment Tax</li>
        <li>Consult with a Tax Professional</li>
      </ul>

      <h3 className="text-[#1C52A0] text-xl font-semibold mb-3">Using the Freelancer Tax Calculator</h3>
      <p className="mb-4 text-[#0D0D0D]">Calculate your potential tax liability by entering your freelance income, business expenses, and other relevant financial details. Gain insights into your tax obligations and potential deductions to optimize your financial planning.</p>
    </div>
  );
};

const Freelancer = () => {
  return (
    <>
      <Header/>
      <main className="overflow-x-hidden">
        <div className="relative z-20">
          <FreelancerCalculator/>
        </div>
        <FreelancerInfo />
      </main>
      <div className="relative z-20">
        <Footer />
      </div>
    </>
  );
};

export default Freelancer;