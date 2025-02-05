import React from "react";
import Header from "../../../../Header";
import Footer from "../../../../Footer";
import PRCalculator from "./PRCalculator";

const PRInfo = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">What is Portfolio Rebalancing?</h2>
      <p className="mb-4">Portfolio rebalancing is the process of realigning the weightings of a portfolio of assets. This involves periodically buying or selling assets in your portfolio to maintain your desired level of asset allocation and risk. It helps investors manage risk and ensure that their investment strategy remains aligned with their financial goals.</p>

      <h3 className="text-xl font-semibold mb-3">Key Features</h3>
      <p className="mb-4">Rebalancing helps in maintaining the intended risk level of your portfolio. It can be done on a regular schedule (e.g., quarterly or annually) or based on specific thresholds (e.g., when an asset class deviates by a certain percentage). This strategy can enhance returns and reduce risk over time.</p>

      <h3 className="text-xl font-semibold mb-3">Rebalancing Strategies</h3>
      <p className="mb-4">Common strategies include:<br/>
      - Time-based rebalancing: Adjusting the portfolio at regular intervals.<br/>
      - Threshold-based rebalancing: Rebalancing when asset allocation deviates from the target by a specified percentage.<br/>
      - Tactical rebalancing: Making adjustments based on market conditions and forecasts.</p>

      <h3 className="text-xl font-semibold mb-3">How to maximize Portfolio Performance?</h3>
      <p className="mb-2">Enhance your portfolio performance by:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>Regularly reviewing your investment goals</li>
        <li>Staying informed about market trends</li>
        <li>Adjusting your asset allocation based on risk tolerance</li>
        <li>Utilizing a systematic rebalancing approach</li>
      </ul>

      <h3 className="text-xl font-semibold mb-3">Tax Implications</h3>
      <ul className="list-disc pl-6 mb-4">
        <li>Gains from rebalancing may be subject to capital gains tax</li>
        <li>Long-term capital gains are taxed at a lower rate</li>
        <li>Consider tax-efficient funds to minimize tax impact</li>
        <li>Consult a tax advisor for personalized strategies</li>
      </ul>

      <h3 className="text-xl font-semibold mb-3">Using the Portfolio Rebalancing Calculator</h3>
      <p className="mb-4">Input your current asset allocation, target allocation, and investment horizon. The calculator helps you determine how much to buy or sell to achieve your desired portfolio balance. Use it to ensure your investments align with your financial objectives and risk tolerance.</p>
    </div>
  );
};

const PR = () => {
  return (
    <>
      <Header/>
      <main className="overflow-x-hidden">
        <div className="relative z-20">
          <PRCalculator/>
        </div>
          <PRInfo />
      </main>
      <div className="relative z-20">
        <Footer />
      </div>
    </>
  );
};

export default PR;