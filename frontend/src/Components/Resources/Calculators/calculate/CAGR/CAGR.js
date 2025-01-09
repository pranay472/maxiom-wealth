import React from "react";
import Header from "../../../../Header";
import Footer from "../../../../Footer";
import CAGRCalculator from "./CAGRCalculator";

const CAGRInfo = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="space-y-12">
        {/* Understanding CAGR Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding CAGR (Compound Annual Growth Rate)</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            CAGR represents the steady rate at which an investment would have grown if it had increased at a constant rate. 
            This powerful metric accounts for the compounding effect of returns over time, making it an essential tool for 
            evaluating investment performance and comparing different opportunities.
          </p>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-3">Practical Example</h3>
            <p className="text-gray-600">
              Consider an initial investment of ₹50,000 that grows to ₹82,000 over three years. While the total growth is 64%, 
              the CAGR provides a more nuanced view by calculating the consistent annual rate needed to achieve this growth. 
              In this case, the CAGR would be approximately 18% per year.
            </p>
          </div>
        </section>

        {/* Significance of CAGR Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Value of CAGR in Investment Analysis</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            CAGR serves as a vital tool in investment analysis for several reasons:
          </p>
          <ul className="list-disc list-inside space-y-3 text-gray-600 ml-4">
            <li>It smooths out investment returns, providing a clearer picture of performance over time</li>
            <li>Enables meaningful comparisons between different investment options</li>
            <li>Helps in setting realistic growth expectations and investment goals</li>
            <li>Accounts for the power of compound growth in long-term investments</li>
          </ul>
        </section>

        {/* CAGR Calculator Usage Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Using Our CAGR Calculator</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Our calculator simplifies the process of determining your investment's compound annual growth rate. Simply input:
          </p>
          <ul className="list-disc list-inside space-y-3 text-gray-600 ml-4">
            <li>Your initial investment amount</li>
            <li>The final value of your investment</li>
            <li>The investment period in years</li>
          </ul>
          <p className="text-gray-600 mt-4">
            The calculator instantly computes the CAGR, helping you make informed investment decisions based on historical performance.
          </p>
        </section>

        {/* CAGR Formula and Calculation Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">CAGR Calculation Method</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            The CAGR formula takes into account three key elements:
          </p>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-600 mb-4">
              CAGR = (Final Value / Initial Value)^(1/n) - 1
              <br />
              Where 'n' represents the number of years
            </p>
            <p className="text-gray-600">
              While this formula might seem complex, our calculator handles all the mathematical work, 
              providing you with instant, accurate results.
            </p>
          </div>
        </section>

        {/* Benefits Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Advantages of CAGR Analysis</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-3">For Individual Investors</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Track portfolio performance effectively</li>
                <li>Make data-driven investment decisions</li>
                <li>Set realistic investment goals</li>
                <li>Compare different investment options</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-3">For Financial Professionals</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Evaluate investment products objectively</li>
                <li>Create comprehensive client reports</li>
                <li>Develop investment strategies</li>
                <li>Benchmark performance metrics</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

const CAGR = () => {
  return (
    <>
      <Header/>
      <main className="overflow-x-hidden">
        <div className="relative z-20">
          <CAGRCalculator/>
        </div>
        <div className="relative bg-white z-10">
          <CAGRInfo />
        </div>
      </main>
      <div className="relative z-20">
        <Footer />
      </div>
    </>
  );
};

export default CAGR;