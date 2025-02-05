import React from "react";
import Header from "../../../../Header";
import Footer from "../../../../Footer";
import SukanyaCalculator from "./SukanyaCalculator";

const SukanyaInfo = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">What is Sukanya Samriddhi Yojana?</h2>
      <p className="mb-4">The Sukanya Samriddhi Yojana (SSY) is a government-backed savings scheme in India, designed to secure the future of girl children. Managed by the Government of India, it encourages parents to invest in their daughter's education and marriage expenses. The scheme offers attractive interest rates and tax benefits under Section 80C.</p>

      <h3 className="text-xl font-semibold mb-3">Key Features</h3>
      <p className="mb-4">SSY offers guaranteed returns with tax benefits under Section 80C. The current interest rate is 8.2% (FY 2023-24). The account matures after 21 years from the date of opening or upon the girl's marriage after she turns 18, whichever is earlier. Partial withdrawals are allowed for higher education expenses after the girl turns 18.</p>

      <h3 className="text-xl font-semibold mb-3">Contribution Breakdown</h3>
      <p className="mb-4">Minimum annual deposit: ₹250<br/>
      Maximum annual deposit: ₹1.5 lakh<br/>
      The account can be opened in the name of a girl child below 10 years of age.</p>

      <h3 className="text-xl font-semibold mb-3">How to maximize SSY?</h3>
      <p className="mb-2">Optimize your SSY savings by:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>Starting the account as early as possible</li>
        <li>Making maximum annual contributions</li>
        <li>Ensuring continuous contributions</li>
        <li>Regularly checking the account balance</li>
      </ul>

      <h3 className="text-xl font-semibold mb-3">Tax Implications</h3>
      <ul className="list-disc pl-6 mb-4">
        <li>Contributions qualify for 80C deduction</li>
        <li>Interest earned is tax-free</li>
        <li>Maturity amount is tax-free</li>
        <li>Premature withdrawals taxed as per income slab</li>
      </ul>

      <h3 className="text-xl font-semibold mb-3">Using the Sukanya Samriddhi Yojana Calculator</h3>
      <p className="mb-4">Input the girl's current age, annual contribution, and expected interest rate. The calculator projects the maturity value, shows contribution breakdowns, and helps plan future contributions. Use it to ensure your SSY corpus aligns with your daughter's future goals.</p>
    </div>
  );
};

const Sukanya = () => {
  return (
    <>
      <Header/>
      <main className="overflow-x-hidden">
        <div className="relative z-20">
          <SukanyaCalculator/>
        </div>
          <SukanyaInfo />
      </main>
      <div className="relative z-20">
        <Footer />
      </div>
    </>
  );
};

export default Sukanya;