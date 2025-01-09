import React from "react";
import Header from "../../../../Header";
import Footer from "../../../../Footer";
import WeightedReturnsCalculator from "./WeightedReturnsCalculator";

const WeightedReturnsExplanation = () => {
  return (
    <div className="weighted-returns-explanation bg-gray-50 p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold mb-4 border-b-2 border-gray-300 pb-2">
        Understanding Weighted Average Returns
      </h3>
      
      <p className="text-black mb-4 leading-relaxed">
        Weighted average returns provide a comprehensive method to evaluate the performance of an 
        investment portfolio by considering the relative importance of each investment.
      </p>

      <h4 className="text-xl font-semibold mt-6 mb-3">
        What Are Weighted Average Returns?
      </h4>
      <p className="text-black mb-4">
        A weighted average return calculates the overall portfolio performance by assigning 
        different weights to investments based on their market value or capital allocation. 
        This approach recognizes that not all investments contribute equally to the portfolio's performance.
      </p>

      <h4 className="text-xl font-semibold mt-6 mb-3">
        Calculation Method
      </h4>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <strong>Weighting Process:</strong> Each investment is assigned a weight proportional 
          to its size in the total portfolio.
        </li>
        <li>
          <strong>Return Calculation:</strong> Multiply each investment's return by its specific weight.
        </li>
        <li>
          <strong>Aggregation:</strong> Sum the weighted returns to determine the overall portfolio performance.
        </li>
      </ul>

      <h4 className="text-xl font-semibold mt-6 mb-3">
        Benefits of Weighted Average Returns Analysis
      </h4>
      <ul className="list-disc list-inside space-y-2 bg-white p-4 rounded-md shadow-sm">
        <li>Provides a more accurate representation of portfolio performance</li>
        <li>Highlights the impact of larger investments on overall returns</li>
        <li>Enables more informed investment decision-making</li>
        <li>Allows comparison of performance across different investment periods</li>
        <li>Helps in understanding portfolio diversification and risk management</li>
      </ul>

      <p className="text-black italic border-l-4 border-gray-500 pl-4 py-2 bg-gray-50 mt-4">
        Use this calculator to gain insights into your investment portfolio's true performance 
        by considering the relative significance of each investment.
      </p>
    </div>
  );
};

const WeightedReturns = () => {
  return (
    <div>
      <Header />
      <div className="calculator-container">
        <div className="calculator-content">
          <h2>Weighted Average Returns Calculator</h2>
          <WeightedReturnsCalculator />
          <WeightedReturnsExplanation />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WeightedReturns;