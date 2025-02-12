import React from "react";
import Header from "../../../../Header";
import Footer from "../../../../Footer";
import GICalculator from "./GICalculator";

const GIInformation = () => {
  return (
    <div className="bg-gray-50 py-12 px-4 md:px-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Understanding Gold Investment</h2>
          <p className="text-gray-600 leading-relaxed">
            Gold investment is a time-honored strategy for wealth preservation and diversification. As a tangible asset with intrinsic value, 
            gold has been a reliable store of wealth across cultures and economic cycles, offering investors a hedge against inflation and market volatility.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-700 mb-3">How Gold Investment Works</h3>
          <p className="text-gray-600 leading-relaxed">
            Investing in gold can take multiple forms, including physical gold, gold ETFs, sovereign gold bonds, and gold mutual funds. 
            The value of your gold investment depends on factors like current market prices, purity, weight, and the specific investment vehicle you choose.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-700 mb-3">Why Invest in Gold?</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Portfolio diversification</li>
            <li>Protection against economic uncertainty</li>
            <li>Hedge against inflation</li>
            <li>Potential for long-term capital appreciation</li>
            <li>Globally recognized store of value</li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-700 mb-3">Understanding the Gold Investment Calculator</h3>
          <p className="text-gray-600 leading-relaxed">
            Our Gold Investment Calculator is a powerful tool designed to help you analyze potential gold investments. 
            By inputting details like investment amount, gold price, and investment duration, you can estimate potential returns and make informed investment decisions.
          </p>
        </section>
      </div>
    </div>
  );
};

const GI = () => {
    return (
      <>
        <Header />
        <main className="overflow-x-hidden">
          <div className="relative z-20">
            <GICalculator/>
          </div>
          <GIInformation/>
        </main>
        <div className="relative z-20">
          <Footer />
        </div>
      </>
    );
  };
  
  export default GI;