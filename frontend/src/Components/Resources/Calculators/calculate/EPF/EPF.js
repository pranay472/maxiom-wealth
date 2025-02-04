import React from "react";
import Header from "../../../../Header";
import Footer from "../../../../Footer";
import EPFCalculator from "./EPFCalculator";

const EPFInfo = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">What is EPF?</h2>
      <p className="mb-4">The Employee Provident Fund (EPF) is a retirement savings scheme for salaried employees in India, managed by the Employees' Provident Fund Organisation (EPFO). Both employees and employers contribute 12% of the basic salary each month, with the accumulated corpus providing financial security post-retirement.</p>

      <h3 className="text-xl font-semibold mb-3">Key Features</h3>
      <p className="mb-4">EPF offers guaranteed returns with tax benefits under Section 80C. The current interest rate is 8.15% (FY 2023-24). The full corpus including employer contribution becomes available at retirement (58 years), with partial withdrawals allowed for specific needs like home purchase or medical emergencies.</p>

      <h3 className="text-xl font-semibold mb-3">Contribution Breakdown</h3>
      <p className="mb-4">Employee contribution: 12% of (Basic + DA)<br/>
      Employer contribution: 3.67% to EPF + 8.33% to EPS (up to ₹15,000)<br/>
      Voluntary contributions up to 100% of basic salary can be made via VPF.</p>

      <h3 className="text-xl font-semibold mb-3">How to maximize EPF?</h3>
      <p className="mb-2">Optimize your EPF savings by:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>Maintaining higher basic salary component</li>
        <li>Opting for Voluntary Provident Fund (VPF)</li>
        <li>Ensuring continuous contributions</li>
        <li>Regularly checking EPF passbook</li>
      </ul>

      <h3 className="text-xl font-semibold mb-3">Tax Implications</h3>
      <ul className="list-disc pl-6 mb-4">
        <li>Employee contributions qualify for 80C deduction</li>
        <li>Employer contributions up to 12% are tax-free</li>
        <li>Interest earned is tax-free if account active for 5+ years</li>
        <li>Premature withdrawals taxed as per income slab</li>
      </ul>

      <h3 className="text-xl font-semibold mb-3">Using the Equirus Wealth EPF Calculator</h3>
      <p className="mb-4">Input your current age, basic salary, and expected salary growth. The calculator projects your EPF maturity value, shows contribution breakdowns, and helps plan voluntary contributions. Use it to ensure your EPF corpus aligns with retirement goals.</p>
    </div>
  );
};

const EPF = () => {
  return (
    <>
      <Header/>
      <main className="overflow-x-hidden">
        <div className="relative z-20">
          <EPFCalculator/>
        </div>
          <EPFInfo />
      </main>
      <div className="relative z-20">
        <Footer />
      </div>
    </>
  );
};

export default EPF;