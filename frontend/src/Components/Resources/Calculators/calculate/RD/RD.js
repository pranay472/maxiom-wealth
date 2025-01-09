import React from "react";
import Header from "../../../../Header";
import Footer from "../../../../Footer";
import RDCalculator from "./RDCalculator";

const RDInfo = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">Understanding Recurring Deposits</h2>
      <p className="mb-4">A recurring deposit is a flexible savings instrument that allows you to build your wealth systematically. It's designed for individuals who prefer to save regularly, typically on a monthly basis, while earning competitive interest rates. This investment option is particularly beneficial for salaried professionals and regular income earners who want to cultivate a disciplined savings habit.</p>

      <h3 className="text-xl font-semibold mb-3">Understanding RD Interest Calculation</h3>
      <p className="mb-4">The interest earned on your recurring deposit is determined through a systematic calculation process. Banks employ quarterly compounding, which means your returns are reinvested every three months, potentially increasing your wealth over time. The final amount you receive depends on three key factors:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>Your monthly deposit amount</li>
        <li>The duration of your investment</li>
        <li>The interest rate offered by your bank</li>
      </ul>

      <h3 className="text-xl font-semibold mb-3">RD Maturity Amount Formula</h3>
      <p className="mb-4">The maturity amount for your recurring deposit is calculated using this formula:</p>
      <div className="bg-gray-50 p-4 rounded-lg mb-4">
        <p className="font-mono">A = P × [(1 + R/100)^N - 1] / [1 - (1 + R/400)^(-1/3)]</p>
        <p className="text-sm text-gray-600 mt-2">
          Where:<br />
          A = Final maturity amount<br />
          P = Your monthly installment<br />
          N = Total number of quarters<br />
          R = Annual interest rate
        </p>
      </div>

      <h3 className="text-xl font-semibold mb-3">Benefits of Using Our RD Calculator</h3>
      <ul className="list-disc pl-6 mb-4">
        <li>Quick and precise calculations without manual effort</li>
        <li>Accurate prediction of your maturity amount</li>
        <li>Efficient financial planning with instant results</li>
        <li>Error-free calculations for better decision making</li>
        <li>Easy comparison between different RD options</li>
        <li>Better understanding of how your savings will grow</li>
      </ul>
    </div>
  );
};

const RD = () => {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <div className="relative z-20">
          <RDCalculator />
        </div>
        <RDInfo />
      </main>
      <div className="relative z-20">
        <Footer />
      </div>
    </>
  );
};

export default RD;