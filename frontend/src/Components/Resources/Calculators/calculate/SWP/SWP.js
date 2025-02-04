import React from "react";
import Header from "../../../../Header";
import Footer from "../../../../Footer";
import SWPCalculator from "./SWPCalculator";

const SWPInfo = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">What is SWP?</h2>
      <p className="mb-4">Systematic Withdrawal Plan (SWP) allows investors to withdraw a fixed amount from their investments at regular intervals. This strategy is ideal for generating regular income from mutual fund investments while keeping the remaining corpus invested. SWP helps in managing cash flow needs during retirement or for periodic expenses.</p>

      <h3 className="text-xl font-semibold mb-3">Withdrawal Options</h3>
      <p className="mb-4">SWP offers flexible withdrawal frequencies - monthly, quarterly, or annually. Minimum withdrawal amounts typically start from ₹1,000 for most mutual funds. Investors can choose between withdrawing only gains (growth SWP) or a mix of principal and gains, depending on their income needs.</p>

      <h3 className="text-xl font-semibold mb-3">Investment Horizon</h3>
      <p className="mb-4">SWP is effective for both short-term (1-3 years) and long-term (10+ years) income needs. The duration depends on the corpus size and withdrawal amount. Equity funds are preferred for long-term SWPs to combat inflation, while debt funds suit short-term needs with stable returns.</p>

      <h3 className="text-xl font-semibold mb-3">How to start SWP?</h3>
      <p className="mb-2">To set up a Systematic Withdrawal Plan:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>Hold units in growth option of mutual fund</li>
        <li>Submit SWP request to fund house</li>
        <li>Choose withdrawal amount and frequency</li>
        <li>Specify bank account for credits</li>
      </ul>

      <h3 className="text-xl font-semibold mb-3">Why choose SWP?</h3>
      <ul className="list-disc pl-6 mb-4">
        <li>Regular income without redeeming entire investment</li>
        <li>Potential for capital appreciation on remaining corpus</li>
        <li>Tax-efficient withdrawals compared to fixed deposits</li>
        <li>Flexibility to modify withdrawal amounts</li>
        <li>Automated process with minimal paperwork</li>
      </ul>

      <h3 className="text-xl font-semibold mb-3">How are withdrawals calculated?</h3>
      <p className="mb-4">SWP calculations use the annuity formula considering:<br/>
      <strong>Monthly Withdrawal = [P × r × (1 + r)^n] / [(1 + r)^n - 1]</strong><br/>
      Where P = Principal, r = monthly return rate, n = number of months. This ensures corpus lasts for desired period.</p>

      <h3 className="text-xl font-semibold mb-3">Using the Equirus Wealth SWP Calculator</h3>
      <p className="mb-4">Input your investment corpus, desired monthly income, expected returns, and duration. The calculator will show withdrawal sustainability, remaining balance over time, and help balance between income needs and corpus preservation. Use it to plan retirement income or education funding.</p>
    </div>
  );
};

const SWP = () => {
  return (
    <>
      <Header/>
      <main className="overflow-x-hidden">
        <div className="relative z-20">
          <SWPCalculator/>
        </div>
          <SWPInfo />
      </main>
      <div className="relative z-20">
        <Footer />
      </div>
    </>
  );
};

export default SWP;