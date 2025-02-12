import React from "react";
import Header from "../../../../Header";
import Footer from "../../../../Footer";
import BFCCalculator from "./BFCCalculator";

const BFCInformation = () => {
  return (
    <div className="bg-gray-50 py-12 px-4 md:px-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Understanding Mutual Fund Selection</h2>
          <p className="text-gray-600 leading-relaxed">
            Selecting the right mutual funds is crucial for achieving your financial goals. The Better Funds Checker is a sophisticated tool designed to help investors 
            navigate the complex world of mutual fund investments by providing comprehensive, data-driven insights into fund performance and suitability.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-700 mb-3">How Fund Selection Works</h3>
          <p className="text-gray-600 leading-relaxed">
            Mutual fund selection involves analyzing multiple parameters such as historical returns, risk metrics, expense ratios, fund manager performance, 
            and alignment with your investment objectives. The Better Funds Checker simplifies this complex process by providing a holistic evaluation of potential investments.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-700 mb-3">Why Use a Fund Checker?</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Objective fund performance analysis</li>
            <li>Comprehensive risk assessment</li>
            <li>Personalized investment recommendations</li>
            <li>Compare funds across different categories</li>
            <li>Make informed investment decisions</li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-700 mb-3">Understanding the Better Funds Checker</h3>
          <p className="text-gray-600 leading-relaxed">
            Our Better Funds Checker is a powerful analytical tool that helps you evaluate and compare mutual funds. 
            By inputting your investment preferences and risk tolerance, you can receive tailored recommendations and insights to optimize your investment strategy.
          </p>
        </section>
      </div>
    </div>
  );
};

const BFC = () => {
    return (
      <>
        <Header />
        <main className="overflow-x-hidden">
          <div className="relative z-20">
            <BFCCalculator/>
          </div>
          <BFCInformation/>
        </main>
        <div className="relative z-20">
          <Footer />
        </div>
      </>
    );
  };
  
  export default BFC;