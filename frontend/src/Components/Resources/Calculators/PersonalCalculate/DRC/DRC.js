import React from "react";
import Header from "../../../../Header";
import Footer from "../../../../Footer";
import DebtRepaymentCalculator from "./DebtRepaymentCalculator";

const DRCInformation = () => {
  return (
    <div className="bg-gray-50 py-12 px-4 md:px-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Understanding Debt Repayment</h2>
          <p className="text-gray-600 leading-relaxed">
            Debt can be a significant financial burden that impacts your long-term financial health. The Debt Repayment Calculator is a strategic tool designed to help you 
            develop a clear, personalized plan to systematically reduce and eliminate your outstanding debts.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-700 mb-3">How Debt Repayment Works</h3>
          <p className="text-gray-600 leading-relaxed">
            Effective debt repayment involves understanding your total debt, interest rates, and creating a structured payment strategy. 
            Different approaches like the snowball or avalanche methods can help you prioritize and systematically reduce your debt burden.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-700 mb-3">Why Use a Debt Repayment Calculator?</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Create a personalized debt elimination strategy</li>
            <li>Understand total interest paid over time</li>
            <li>Compare different repayment approaches</li>
            <li>Estimate time to become debt-free</li>
            <li>Improve overall financial planning</li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-700 mb-3">Understanding the Debt Repayment Calculator</h3>
          <p className="text-gray-600 leading-relaxed">
            Our Debt Repayment Calculator is a powerful tool that helps you map out your path to financial freedom. 
            By inputting your debt details, interest rates, and monthly payment capabilities, you can visualize multiple repayment scenarios and make informed decisions.
          </p>
        </section>
      </div>
    </div>
  );
};

const DRC = () => {
    return (
      <>
        <Header />
        <main className="overflow-x-hidden">
          <div className="relative z-20">
            <DebtRepaymentCalculator/>
          </div>
          <DRCInformation/>
        </main>
        <div className="relative z-20">
          <Footer />
        </div>
      </>
    );
  };
  
  export default DRC;