import React from "react";
import Header from "../../../../Header";
import Footer from "../../../../Footer";
import SRCalculator from "./SRCalculator";

const SRInfo = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">What is Stock Return?</h2>
      <p className="mb-4">Stock return refers to the profit or loss generated from investing in stocks over a specific period. It includes capital gains (or losses) from the change in stock price and dividends received. Calculating stock returns helps investors assess the performance of their investments and make informed decisions.</p>

      <h3 className="text-xl font-semibold mb-3">Key Features</h3>
      <p className="mb-4">Stock returns can be calculated for different time periods, such as daily, monthly, or annually. They are influenced by factors like market conditions, company performance, and economic indicators. Understanding stock returns is essential for evaluating investment strategies and achieving financial goals.</p>

      <h3 className="text-xl font-semibold mb-3">Types of Stock Returns</h3>
      <p className="mb-4">Common types include:<br/>
      - Absolute Return: The total return on investment without considering the time period.<br/>
      - Annualized Return: The average return per year over a specific period.<br/>
      - Total Return: Includes both capital gains and dividends.<br/>
      - Risk-Adjusted Return: Measures return relative to the risk taken.</p>

      <h3 className="text-xl font-semibold mb-3">How to maximize Stock Returns?</h3>
      <p className="mb-2">Enhance your stock returns by:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>Diversifying your portfolio across sectors</li>
        <li>Investing in fundamentally strong companies</li>
        <li>Regularly reviewing and rebalancing your portfolio</li>
        <li>Staying informed about market trends and news</li>
      </ul>

      <h3 className="text-xl font-semibold mb-3">Tax Implications</h3>
      <ul className="list-disc pl-6 mb-4">
        <li>Short-term capital gains are taxed as per your income slab</li>
        <li>Long-term capital gains are taxed at a lower rate (10% above ₹1 lakh)</li>
        <li>Dividends are taxable as per the applicable tax laws</li>
        <li>Consider tax-efficient investment strategies to minimize liabilities</li>
      </ul>

      <h3 className="text-xl font-semibold mb-3">Using the Stock Return Calculator</h3>
      <p className="mb-4">Input the purchase price, sale price, holding period, and dividends received. The calculator computes the total return, annualized return, and other metrics. Use it to evaluate the performance of your stock investments and make data-driven decisions.</p>
    </div>
  );
};

const SR = () => {
  return (
    <>
      <Header/>
      <main className="overflow-x-hidden">
        <div className="relative z-20">
          <SRCalculator/>
        </div>
          <SRInfo />
      </main>
      <div className="relative z-20">
        <Footer />
      </div>
    </>
  );
};

export default SR;