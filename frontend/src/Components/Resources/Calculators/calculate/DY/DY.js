import React from "react";
import Header from "../../../../Header";
import Footer from "../../../../Footer";
import DYCalculator from "./DYCalculator";

const DYInformation = () => {
  return (
    <div className="bg-gray-50 py-12 px-4 md:px-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Understanding Dividend Yield</h2>
          <p className="text-gray-600 leading-relaxed">
            Dividend Yield is a crucial financial metric that helps investors assess the potential income generation from their stock investments. 
            It represents the annual dividend income as a percentage of a stock's current market price, providing insights into the stock's income-generating potential.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-700 mb-3">How Dividend Yield Works</h3>
          <p className="text-gray-600 leading-relaxed">
            Think of dividend yield as a measure of the cash return you can expect from a stock. By dividing the annual dividends per share by the current stock price, 
            investors can quickly understand the potential income relative to the stock's value. A higher dividend yield might indicate a more attractive income-generating investment.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-700 mb-3">Why Analyze Dividend Yield?</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Assess potential income from stock investments</li>
            <li>Compare income potential across different stocks</li>
            <li>Understand a company's financial health</li>
            <li>Identify potential long-term investment opportunities</li>
            <li>Supplement investment strategy with regular income</li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-700 mb-3">Understanding the Dividend Yield Calculator</h3>
          <p className="text-gray-600 leading-relaxed">
            Our Dividend Yield Calculator is a powerful tool designed to help you quickly compute and analyze the dividend yield of your stocks. 
            By inputting the annual dividend per share and the current stock price, you can instantly calculate the dividend yield and make informed investment decisions.
          </p>
        </section>
      </div>
    </div>
  );
};

const DY = () => {
    return (
      <>
        <Header />
        <main className="overflow-x-hidden">
          <div className="relative z-20">
            <DYCalculator/>
          </div>
          <DYInformation/>
        </main>
        <div className="relative z-20">
          <Footer />
        </div>
      </>
    );
  };
  
  export default DY;