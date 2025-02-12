import React from "react";
import Header from "../../../../Header";
import Footer from "../../../../Footer";
import SavingsGoalCalculator from "./SavingsGoalCalculator";

const SGCInformation = () => {
  return (
    <div className="bg-gray-50 py-12 px-4 md:px-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Understanding Savings Goals</h2>
          <p className="text-gray-600 leading-relaxed">
            Achieving financial success starts with setting clear, actionable savings goals. The Savings Goal Calculator is a strategic tool designed to help you 
            transform your financial aspirations into concrete, achievable plans by providing personalized insights and realistic savings strategies.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-700 mb-3">How Savings Goal Planning Works</h3>
          <p className="text-gray-600 leading-relaxed">
            Effective savings goal planning involves understanding your financial objectives, current savings, potential investment returns, 
            and creating a structured approach to bridge the gap between your current financial state and your desired future.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-700 mb-3">Why Use a Savings Goal Calculator?</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Create a clear path to financial objectives</li>
            <li>Understand required savings and timeline</li>
            <li>Explore different saving and investment scenarios</li>
            <li>Track progress towards financial goals</li>
            <li>Make informed financial decisions</li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-700 mb-3">Understanding the Savings Goal Calculator</h3>
          <p className="text-gray-600 leading-relaxed">
            Our Savings Goal Calculator is a powerful tool that helps you map out your financial journey. 
            By inputting your savings target, current savings, monthly contributions, and expected returns, you can visualize multiple paths to achieving your financial goals.
          </p>
        </section>
      </div>
    </div>
  );
};

const SGC = () => {
    return (
      <>
        <Header />
        <main className="overflow-x-hidden">
          <div className="relative z-20">
            <SavingsGoalCalculator/>
          </div>
          <SGCInformation/>
        </main>
        <div className="relative z-20">
          <Footer />
        </div>
      </>
    );
  };
  
  export default SGC;