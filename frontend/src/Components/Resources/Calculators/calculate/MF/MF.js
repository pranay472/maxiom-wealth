import React from "react";
import Header from "../../../../Header";
import Footer from "../../../../Footer";
import MFCalculator from "./MFCalculator";

const MFInfo = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">What are Mutual Funds?</h2>
      <p className="mb-4">Mutual Funds are investment vehicles that pool money from multiple investors to invest in diversified portfolios of stocks, bonds, or other securities. They offer professional management, liquidity, and the benefit of diversification. Investments in Mutual Funds qualify for tax benefits under Section 80C of the Income Tax Act, 1961, and long-term capital gains have favorable tax treatment.</p>

      <h3 className="text-xl font-semibold mb-3">Investment Options</h3>
      <p className="mb-4">Mutual Funds offer various investment plans including Systematic Investment Plans (SIPs) and Lumpsum investments. SIPs allow regular investments starting from ₹500 per month, while Lumpsum investments typically start from ₹5,000. Investors can choose between equity, debt, hybrid, or sector-specific funds based on their risk appetite.</p>

      <h3 className="text-xl font-semibold mb-3">Investment Horizon</h3>
      <p className="mb-4">Equity Mutual Funds are ideal for long-term goals (5+ years), while debt funds suit short to medium-term objectives. Most funds have no lock-in period except ELSS (Tax-saving) funds which have a 3-year lock-in. Systematic Withdrawal Plans (SWPs) allow periodic redemptions after investment maturity.</p>

      <h3 className="text-xl font-semibold mb-3">How to start investing?</h3>
      <p className="mb-2">To begin your Mutual Fund journey, you'll need:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>PAN Card</li>
        <li>KYC documents</li>
        <li>Bank account details</li>
        <li>Investment plan selection</li>
      </ul>

      <h3 className="text-xl font-semibold mb-3">Why invest in Mutual Funds?</h3>
      <ul className="list-disc pl-6 mb-4">
        <li>Professional fund management by experts</li>
        <li>Diversification across assets and sectors</li>
        <li>Flexible investment amounts and frequencies</li>
        <li>Transparent NAV-based pricing</li>
        <li>Options for different risk profiles</li>
      </ul>

      <h3 className="text-xl font-semibold mb-3">How are returns calculated?</h3>
      <p className="mb-4">Mutual Fund returns are calculated using Compounded Annual Growth Rate (CAGR). For SIPs, returns are calculated using XIRR to account for multiple investments at different times. Returns depend on market performance and are subject to capital market risks.</p>

      <h3 className="text-xl font-semibold mb-3">Using the Maxiom Wealth MF Calculator</h3>
      <p className="mb-4">Input your investment amount, expected return rate, and investment duration. Our calculator will project potential returns for both SIP and Lumpsum investments. This tool helps compare scenarios, understand compounding benefits, and make informed investment decisions aligned with your financial goals.</p>
    </div>
  );
};

const MF = () => {
  return (
    <>
      <Header/>
      <main className="overflow-x-hidden">
        <div className="relative z-20">
          <MFCalculator/>
        </div>
          <MFInfo />
      </main>
      <div className="relative z-20">
        <Footer />
      </div>
    </>
  );
};

export default MF;