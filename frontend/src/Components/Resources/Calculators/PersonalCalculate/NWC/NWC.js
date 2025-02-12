import React from "react";
import Header from "../../../../Header";
import Footer from "../../../../Footer";
import NetWorthCalculator from "./NetWorthCalculator";

const NWCInformation = () => {
  return (
    <div className="bg-gray-50 py-12 px-4 md:px-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Understanding Net Worth</h2>
          <p className="text-gray-600 leading-relaxed">
            Net worth is a powerful financial metric that provides a comprehensive snapshot of your overall financial health. 
            The Net Worth Calculator helps you accurately assess your financial standing by calculating the difference between your total assets and liabilities.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-700 mb-3">How Net Worth Calculation Works</h3>
          <p className="text-gray-600 leading-relaxed">
            Net worth is calculated by summing all your assets (such as savings, investments, real estate) and subtracting your total liabilities (like loans, mortgages, credit card debt). 
            A positive net worth indicates financial strength, while a negative net worth suggests the need for financial restructuring.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-700 mb-3">Why Use a Net Worth Calculator?</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Track your financial progress</li>
            <li>Understand your overall financial health</li>
            <li>Identify areas for financial improvement</li>
            <li>Set realistic financial goals</li>
            <li>Make informed financial decisions</li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-700 mb-3">Understanding the Net Worth Calculator</h3>
          <p className="text-gray-600 leading-relaxed">
            Our Net Worth Calculator is a powerful tool that provides a clear, comprehensive view of your financial landscape. 
            By inputting details of your assets and liabilities, you can instantly calculate your net worth and gain insights into your financial standing.
          </p>
        </section>
      </div>
    </div>
  );
};

const NWC = () => {
    return (
      <>
        <Header />
        <main className="overflow-x-hidden">
          <div className="relative z-20">
            <NetWorthCalculator/>
          </div>
          <NWCInformation/>
        </main>
        <div className="relative z-20">
          <Footer />
        </div>
      </>
    );
  };
  
  export default NWC;