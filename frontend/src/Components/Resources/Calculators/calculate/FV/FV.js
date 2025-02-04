import React from "react";
import Header from "../../../../Header";
import Footer from "../../../../Footer";
import FVCalculator from "./FVCalculator";

const FVInfo = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">What is Future Value?</h2>
      <p className="mb-4">Future Value (FV) is the projected value of a current investment at a specified date in the future, considering compound interest. This calculation helps investors understand how their money can grow over time, accounting for factors like rate of return and investment duration. It's essential for setting realistic financial goals and retirement planning.</p>

      <h3 className="text-xl font-semibold mb-3">Key Components</h3>
      <p className="mb-4">Future Value calculations consider three main elements: initial principal amount, annual interest rate, and investment period. The formula also factors in compounding frequency - how often interest is added to the principal. Common compounding intervals include annual, quarterly, monthly, and daily.</p>

      <h3 className="text-xl font-semibold mb-3">Compounding Effects</h3>
      <p className="mb-4">Compound interest accelerates growth by earning interest on both the initial principal and accumulated interest. For example, ₹1 lakh invested at 8% annually grows to ₹2.16 lakh in 10 years. With monthly compounding, it becomes ₹2.22 lakh - demonstrating how frequent compounding enhances returns.</p>

      <h3 className="text-xl font-semibold mb-3">How to calculate manually?</h3>
      <p className="mb-2">Use the Future Value formula:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>FV = P × (1 + r/n)^(n×t)</li>
        <li>P = Principal amount</li>
        <li>r = Annual interest rate (decimal)</li>
        <li>n = Compounding periods per year</li>
        <li>t = Investment period in years</li>
      </ul>

      <h3 className="text-xl font-semibold mb-3">Why calculate Future Value?</h3>
      <ul className="list-disc pl-6 mb-4">
        <li>Plan long-term financial goals effectively</li>
        <li>Compare different investment options</li>
        <li>Understand compounding benefits</li>
        <li>Adjust for inflation's impact</li>
        <li>Make informed asset allocation decisions</li>
      </ul>

      <h3 className="text-xl font-semibold mb-3">Factors Affecting Future Value</h3>
      <p className="mb-4">Three key variables influence FV calculations: principal amount (higher investments grow more), interest rate (higher returns accelerate growth), and time horizon (longer durations leverage compounding). Even small increases in rate or duration create significant differences over time.</p>

      <h3 className="text-xl font-semibold mb-3">Using the Equirus Wealth FV Calculator</h3>
      <p className="mb-4">Input your initial investment, expected annual return, investment duration, and compounding frequency. The calculator will project your corpus growth, show wealth accumulation timelines, and help compare different compounding scenarios. Use it to set realistic savings targets and retirement goals.</p>
    </div>
  );
};

const FV = () => {
  return (
    <>
      <Header/>
      <main className="overflow-x-hidden">
        <div className="relative z-20">
          <FVCalculator/>
        </div>
          <FVInfo />
      </main>
      <div className="relative z-20">
        <Footer />
      </div>
    </>
  );
};

export default FV;