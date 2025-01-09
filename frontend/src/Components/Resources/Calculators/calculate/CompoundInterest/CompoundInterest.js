import React from "react";
import Header from "../../../../Header";
import Footer from "../../../../Footer";
import CompoundInterestCalculator from "./CompoundInterestCalculator";

const CompoundInterestContent = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="space-y-12">
        {/* Introduction Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding Compound Interest</h2>
          <p className="text-gray-600 leading-relaxed">
            Compound interest is a fundamental concept in wealth building where you earn returns not only on your initial investment 
            but also on the accumulated interest over time. This powerful financial mechanism accelerates wealth growth by reinvesting 
            earnings, creating a snowball effect that can significantly boost your investment returns over the long term.
          </p>
        </section>

        {/* How It Works Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Power of Compound Interest</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Consider this example: If you invest ₹10,000 with an annual interest rate of 10%, after the first year you'll earn ₹1,000, 
            bringing your total to ₹11,000. In the second year, you'll earn interest on ₹11,000, not just your initial ₹10,000. This 
            means you'll earn ₹1,100 in interest, bringing your total to ₹12,100. This compounding effect continues to accelerate your 
            wealth growth over time.
          </p>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Key Components:</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Principal Amount - Your initial investment</li>
              <li>Interest Rate - Annual percentage return on investment</li>
              <li>Time Period - Duration of investment</li>
              <li>Compounding Frequency - How often interest is calculated (annually, monthly, etc.)</li>
            </ul>
          </div>
        </section>

        {/* Formula Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Compound Interest Formula</h2>
          <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
            <p className="text-gray-600 mb-4">The formula used to calculate compound interest is:</p>
            <div className="bg-gray-50 p-4 rounded-md font-mono text-sm">
              A = P(1 + r/n)^(nt)
            </div>
            <div className="mt-4 space-y-2 text-gray-600">
              <p>Where:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>A = Final amount</li>
                <li>P = Principal (initial investment)</li>
                <li>r = Annual interest rate (in decimal form)</li>
                <li>n = Number of times interest is compounded per year</li>
                <li>t = Time period in years</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Benefits of Using Our Calculator</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Practical Benefits</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Accurate calculation of future investment value</li>
                <li>• Compare different investment scenarios</li>
                <li>• Understand the impact of different compounding frequencies</li>
                <li>• Plan your long-term financial goals effectively</li>
              </ul>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Strategic Advantages</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Make informed investment decisions</li>
                <li>• Visualize the power of long-term investing</li>
                <li>• Optimize your investment strategy</li>
                <li>• Track progress towards financial goals</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Calculator Usage Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use the Calculator</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <ol className="list-decimal list-inside space-y-3 text-gray-600">
              <li>Enter your principal amount (initial investment)</li>
              <li>Specify the interest rate you expect to earn</li>
              <li>Choose your investment time period</li>
              <li>Select how often you want interest to be compounded</li>
              <li>The calculator will instantly show you:
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li>Total amount after the investment period</li>
                  <li>Total interest earned</li>
                  <li>Detailed breakdown of year-by-year growth</li>
                </ul>
              </li>
            </ol>
          </div>
        </section>
      </div>
    </div>
  );
};

const CompoundInterest = () => {
  return (
    <>
      <Header/>
      <main className="overflow-x-hidden">
        <div className="relative z-20">
          <CompoundInterestCalculator/>
          <CompoundInterestContent/>
        </div>
        <div className="relative bg-white z-10">
        </div>
      </main>
      <div className="relative z-20">
        <Footer />
      </div>
    </>
  );
};

export default CompoundInterest;