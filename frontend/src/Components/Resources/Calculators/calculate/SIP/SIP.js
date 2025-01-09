import React from "react";
import Header from "../../../../Header";
import Footer from "../../../../Footer";
import SIPCalculator from "./SIPCalculator";

const SIPInformation = () => {
  return (
    <div className="bg-gray-50 py-12 px-4 md:px-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Understanding Systematic Investment Plans (SIPs)</h2>
          <p className="text-gray-600 leading-relaxed">
            A Systematic Investment Plan (SIP) is a smart, disciplined approach to wealth creation that allows investors to build their financial future incrementally. 
            Unlike traditional lump-sum investments, SIPs enable you to invest small, consistent amounts at regular intervals, typically monthly.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-700 mb-3">How SIPs Work</h3>
          <p className="text-gray-600 leading-relaxed">
            Imagine planting a financial seed and nurturing it gradually. With a SIP, you commit to investing a fixed amount into mutual funds or other investment vehicles. 
            This approach helps you leverage the power of rupee-cost averaging, where market fluctuations work in your favor by allowing you to buy more units when prices are low.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-700 mb-3">Why Choose SIP?</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Flexibility to start with small investments</li>
            <li>Reduces impact of market volatility</li>
            <li>Promotes financial discipline</li>
            <li>Potential for long-term wealth accumulation</li>
            <li>Convenient and automated investment process</li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-700 mb-3">Understanding the SIP Calculator</h3>
          <p className="text-gray-600 leading-relaxed">
            Our SIP calculator is a powerful tool designed to help you visualize your financial journey. By inputting your investment amount, duration, and expected returns, 
            you can forecast potential wealth creation and make informed investment decisions tailored to your financial goals.
          </p>
        </section>
      </div>
    </div>
  );
};

const SIP = () => {
    return (
      <>
        <Header />
        <main className="overflow-x-hidden">
          <div className="relative z-20">
            <SIPCalculator/>
          </div>
          <SIPInformation/>
        </main>
        <div className="relative z-20">
          <Footer />
        </div>
      </>
    );
  };
  
  export default SIP;