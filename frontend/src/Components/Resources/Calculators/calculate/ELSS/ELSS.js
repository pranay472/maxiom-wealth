import React from "react";
import Header from "../../../../Header";
import Footer from "../../../../Footer";
import ELSSCalculator from "./ELSSCalculator";

const ELSSInfo = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">What is ELSS?</h2>
      <p className="mb-4">Equity Linked Savings Scheme (ELSS) is a tax-saving mutual fund that offers tax benefits under Section 80C of the Income Tax Act, 1961. ELSS funds primarily invest in equity markets and come with a mandatory 3-year lock-in period, making them ideal for long-term wealth creation along with tax savings of up to ₹1.5 lakh annually.</p>

      <h3 className="text-xl font-semibold mb-3">Investment Options</h3>
      <p className="mb-4">ELSS offers both SIP (Systematic Investment Plan) and Lumpsum investment options. SIP investments start from ₹500 per month, while Lumpsum investments typically begin at ₹500. Investors can choose between growth and dividend options, with investments locked in for 3 years from each installment date.</p>

      <h3 className="text-xl font-semibold mb-3">Lock-in Period</h3>
      <p className="mb-4">ELSS has the shortest lock-in period among tax-saving instruments at 3 years. Unlike other 80C options, the lock-in is calculated per SIP installment. Partial withdrawals are allowed after 3 years, but redemption of units occurs on a First-In-First-Out (FIFO) basis.</p>

      <h3 className="text-xl font-semibold mb-3">How to start investing?</h3>
      <p className="mb-2">To invest in ELSS funds, you need:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>Completed KYC documentation</li>
        <li>PAN Card</li>
        <li>Bank account linked with PAN</li>
        <li>Investment plan selection (SIP/Lumpsum)</li>
      </ul>

      <h3 className="text-xl font-semibold mb-3">Why choose ELSS?</h3>
      <ul className="list-disc pl-6 mb-4">
        <li>Tax savings up to ₹46,800 under Section 80C</li>
        <li>Potential for higher returns through equity exposure</li>
        <li>Shortest lock-in period among tax-saving instruments</li>
        <li>Flexibility of SIP investments</li>
        <li>Long-term wealth creation potential</li>
      </ul>

      <h3 className="text-xl font-semibold mb-3">How are returns calculated?</h3>
      <p className="mb-4">ELSS returns are calculated using Compounded Annual Growth Rate (CAGR). For SIP investments, XIRR (Extended Internal Rate of Return) is used to account for multiple investments. Returns are market-linked and subject to equity risks, with historical returns ranging between 12-15% over 5+ years.</p>

      <h3 className="text-xl font-semibold mb-3">Using the Maxiom Wealth ELSS Calculator</h3>
      <p className="mb-4">Input your investment amount, expected returns, and investment horizon. Our calculator shows projected maturity value, tax savings under different slabs, and compares ELSS with other tax-saving options. It helps optimize tax planning while demonstrating long-term wealth creation potential.</p>
    </div>
  );
};

const ELSS = () => {
  return (
    <>
      <Header/>
      <main className="overflow-x-hidden">
        <div className="relative z-20">
          <ELSSCalculator/>
        </div>
          <ELSSInfo />
      </main>
      <div className="relative z-20">
        <Footer />
      </div>
    </>
  );
};

export default ELSS;