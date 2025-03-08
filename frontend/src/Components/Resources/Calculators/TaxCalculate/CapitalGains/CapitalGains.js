import React from 'react';
import Header from '../../../../Header';
import Footer from '../../../../Footer';
import CapitalGainsCalculator from './CapitalGainsCalculator';

const CapitalGainsInfo = () => {
  return (
    <div className="bg-[#FFFFFF] rounded-lg shadow-lg p-6">
      <h2 className="text-[#1C52A0] text-2xl font-semibold mb-4">Capital Gains Taxation</h2>
      <p className="mb-4 text-[#0D0D0D]">Capital gains tax is a crucial aspect of investment taxation, levied on the profit earned from selling capital assets such as stocks, bonds, real estate, and other investment properties. Understanding capital gains taxation is essential for effective investment strategy and tax planning.</p>

      <h3 className="text-[#1C52A0] text-xl font-semibold mb-3">Types of Capital Gains</h3>
      <ul className="list-disc pl-6 mb-4 text-[#0D0D0D]">
        <li>Short-Term Capital Gains (Held less than 1 year)</li>
        <li>Long-Term Capital Gains (Held more than 1 year)</li>
        <li>Equity Capital Gains</li>
        <li>Real Estate Capital Gains</li>
        <li>Cryptocurrency Capital Gains</li>
      </ul>

      <h3 className="text-[#1C52A0] text-xl font-semibold mb-3">Key Taxation Principles</h3>
      <p className="mb-4 text-[#0D0D0D]">Capital gains are taxed based on the holding period and the type of asset. Different tax rates apply to short-term and long-term gains, with long-term gains typically receiving more favorable tax treatment.</p>

      <h3 className="text-[#1C52A0] text-xl font-semibold mb-3">Important Considerations</h3>
      <ul className="list-disc pl-6 mb-4 text-[#0D0D0D]">
        <li>Cost Basis Calculation</li>
        <li>Holding Period Determination</li>
        <li>Tax Rate Variations</li>
        <li>Offsetting Capital Gains and Losses</li>
        <li>Exemptions and Deductions</li>
      </ul>

      <h3 className="text-[#1C52A0] text-xl font-semibold mb-3">Tax Optimization Strategies</h3>
      <ul className="list-disc pl-6 mb-4 text-[#0D0D0D]">
        <li>Tax-Loss Harvesting</li>
        <li>Long-Term Investment Holding</li>
        <li>Utilizing Tax-Advantaged Accounts</li>
        <li>Timing of Asset Sales</li>
        <li>Consulting with Tax Professionals</li>
      </ul>

      <h3 className="text-[#1C52A0] text-xl font-semibold mb-3">Using the Capital Gains Tax Calculator</h3>
      <p className="mb-4 text-[#0D0D0D]">Calculate your potential capital gains tax liability by entering details such as purchase price, selling price, holding period, and asset type. Gain insights into your tax obligations and explore strategies to optimize your investment tax planning.</p>
    </div>
  );
};

const CapitalGains = () => {
  return (
    <>
      <Header/>
      <main className="overflow-x-hidden">
        <div className="relative z-20">
          <CapitalGainsCalculator/>
        </div>
        <CapitalGainsInfo />
      </main>
      <div className="relative z-20">
        <Footer />
      </div>
    </>
  );
};

export default CapitalGains;