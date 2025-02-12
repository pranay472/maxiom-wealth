import React from "react";
import Header from "../../../../Header";
import Footer from "../../../../Footer";
import CreditCardPayoffCalculator from "./CreditCardPayoffCalculator";

const CCPCInformation = () => {
  return (
    <div className="bg-gray-50 py-12 px-4 md:px-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Understanding Credit Card Debt</h2>
          <p className="text-gray-600 leading-relaxed">
            Credit card debt can quickly become a financial burden if not managed strategically. The Credit Card Payoff Calculator is a powerful tool designed to help you 
            develop a clear, actionable plan to eliminate credit card debt and regain financial freedom.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-700 mb-3">How Credit Card Debt Works</h3>
          <p className="text-gray-600 leading-relaxed">
            Credit card debt accumulates through unpaid balances, with high interest rates compounding over time. Understanding your total debt, interest rates, 
            and potential repayment strategies is crucial to breaking free from the cycle of revolving credit and minimizing long-term financial strain.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-700 mb-3">Why Use a Credit Card Payoff Calculator?</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Visualize your debt repayment journey</li>
            <li>Understand total interest paid</li>
            <li>Compare different repayment strategies</li>
            <li>Create a personalized debt elimination plan</li>
            <li>Improve your financial health</li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-700 mb-3">Understanding the Credit Card Payoff Calculator</h3>
          <p className="text-gray-600 leading-relaxed">
            Our Credit Card Payoff Calculator helps you map out the most efficient path to becoming debt-free. 
            By inputting your current balance, interest rate, and monthly payment, you can explore multiple scenarios and find the fastest route to financial freedom.
          </p>
        </section>
      </div>
    </div>
  );
};

const CCPC = () => {
    return (
      <>
        <Header />
        <main className="overflow-x-hidden">
          <div className="relative z-20">
            <CreditCardPayoffCalculator/>
          </div>
          <CCPCInformation/>
        </main>
        <div className="relative z-20">
          <Footer />
        </div>
      </>
    );
  };
  
  export default CCPC;