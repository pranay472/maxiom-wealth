import React from "react";
import Header from "../../../../Header";
import Footer from "../../../../Footer";
import LSumCalculator from "./LSumCalculator";

const LSumInfo = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">What is Lumpsum Investment?</h2>
      <p className="mb-4">A Lumpsum Investment involves investing a significant amount of money in one go, rather than through regular installments. This investment approach is ideal for individuals with surplus funds, allowing them to potentially benefit from compounding growth over time. Lumpsum investments are common in mutual funds, stocks, and other market-linked instruments.</p>

      <h3 className="text-xl font-semibold mb-3">Investment Options</h3>
      <p className="mb-4">Lumpsum investments can be made in various financial instruments including equity mutual funds, debt funds, hybrid funds, and direct stocks. Minimum investments typically start from ₹5,000 for mutual funds, while stock market investments require larger amounts. Investors can choose between growth and dividend options in mutual funds.</p>

      <h3 className="text-xl font-semibold mb-3">Investment Horizon</h3>
      <p className="mb-4">Lumpsum investments are most effective for long-term goals (5+ years) due to market volatility. However, debt funds and fixed-income instruments can be suitable for shorter durations (1-3 years). Unlike SIPs, the entire amount is subject to market timing risk.</p>

      <h3 className="text-xl font-semibold mb-3">How to start investing?</h3>
      <p className="mb-2">To make a lumpsum investment:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>Complete KYC documentation</li>
        <li>Choose investment instrument</li>
        <li>Transfer funds from bank account</li>
        <li>Monitor investment performance</li>
      </ul>

      <h3 className="text-xl font-semibold mb-3">Why choose Lumpsum?</h3>
      <ul className="list-disc pl-6 mb-4">
        <li>Potential for higher returns through market timing</li>
        <li>Benefit from full compounding from day one</li>
        <li>Simplified portfolio management</li>
        <li>Ideal for windfall gains (bonuses, inheritance)</li>
        <li>No commitment to regular investments</li>
      </ul>

      <h3 className="text-xl font-semibold mb-3">How are returns calculated?</h3>
      <p className="mb-4">Lumpsum returns are calculated using the Compound Annual Growth Rate (CAGR) formula: <br/>
      <strong>Maturity Value = Principal × (1 + Annual Return Rate)^Years</strong><br/>
      This calculation assumes reinvestment of gains and accounts for compounding effects over time.</p>

      <h3 className="text-xl font-semibold mb-3">Using the Equirus Wealth Lumpsum Calculator</h3>
      <p className="mb-4">Input your investment amount, expected annual returns, and investment duration. The calculator will project the potential maturity value, show wealth gained, and provide inflation-adjusted returns. Use it to compare different instruments and make informed investment decisions.</p>
    </div>
  );
};

const LSum = () => {
  return (
    <>
      <Header/>
      <main className="overflow-x-hidden">
        <div className="relative z-20">
          <LSumCalculator/>
        </div>
          <LSumInfo />
      </main>
      <div className="relative z-20">
        <Footer />
      </div>
    </>
  );
};

export default LSum;