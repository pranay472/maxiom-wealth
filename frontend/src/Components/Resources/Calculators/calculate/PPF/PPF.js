import React from "react";
import Header from "../../../../Header";
import Footer from "../../../../Footer";
import PPFCalculator from "./PPFCalculator";

const PPFInfo = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">What is PPF (Public Provident Fund)?</h2>
      <p className="mb-4">A Public Provident Fund (PPF) account is a savings account that offers Indian residents a tax-free and flexible way to save money. Not only contributions made to a PPF account are tax deductible, but under Section 80C of the Income Tax Act, 1961, the earnings on the account are also tax-free. The account can be used to save for retirement, children's education, or other expenses.</p>

      <h3 className="text-xl font-semibold mb-3">Contribution Limit</h3>
      <p className="mb-4">Contributions to a PPF account must be made in multiples of ₹500 and can be as low as ₹500 per year. The maximum contribution that can be made in a year is ₹1,50,000. The minimum amount that must be maintained in the account is ₹500.</p>

      <h3 className="text-xl font-semibold mb-3">Tenure</h3>
      <p className="mb-4">The maturity period for a PPF account is 15 years, but the account can be extended for another five years after the maturity date. Partial withdrawals from a PPF account are allowed, but only after the account has been active for at least five years.</p>

      <h3 className="text-xl font-semibold mb-3">How to open a PPF account?</h3>
      <p className="mb-2">Want to open a PPF account? Get the following documents ready:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>Identity proof</li>
        <li>Address proof</li>
        <li>Photograph</li>
        <li>Application form</li>
      </ul>

      <h3 className="text-xl font-semibold mb-3">Why opt for PPF?</h3>
      <ul className="list-disc pl-6 mb-4">
        <li>Safe and secure investment in government securities</li>
        <li>High returns (around 8% annualized return in recent years)</li>
        <li>Tax-deductible investment up to ₹1.5 lakhs per year</li>
        <li>Flexible withdrawal options</li>
        <li>Easy account transferability between banks</li>
      </ul>

      <h3 className="text-xl font-semibold mb-3">How is PPF calculated?</h3>
      <p className="mb-4">PPF interest is calculated using the formula: Interest = Principal × Rate × Time / 100. The interest is calculated yearly and credited at the end of each financial year. For example, a deposit of ₹1 lakh at 7% interest would earn ₹7,000 in interest after one year.</p>

      <h3 className="text-xl font-semibold mb-3">How to use the Equirus Wealth PPF calculator?</h3>
      <p className="mb-4">Simply enter your investment amount, interest rate, and investment duration in our calculator above. The calculator will show you the maturity value and help you plan your PPF investments effectively. It's a useful tool for estimating returns and making informed investment decisions.</p>
    </div>
  );
};

const PPF = () => {
  return (
    <>
      <Header/>
      <main className="overflow-x-hidden">
        <div className="relative z-20">
          <PPFCalculator/>
        </div>
          <PPFInfo />
      </main>
      <div className="relative z-20">
        <Footer />
      </div>
    </>
  );
};

export default PPF;