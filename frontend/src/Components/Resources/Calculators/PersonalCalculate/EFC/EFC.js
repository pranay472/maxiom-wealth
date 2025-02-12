import React from "react";
import Header from "../../../../Header";
import Footer from "../../../../Footer";
import EmergencyFundCalculator from "./EmergencyFundCalculator";

const EFCInformation = () => {
  return (
    <div className="bg-gray-50 py-12 px-4 md:px-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Understanding Emergency Funds</h2>
          <p className="text-gray-600 leading-relaxed">
            An emergency fund is a critical financial safety net designed to provide financial security during unexpected life events. 
            The Emergency Fund Calculator helps you strategically build and maintain a robust financial cushion to protect against unforeseen circumstances.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-700 mb-3">How Emergency Funds Work</h3>
          <p className="text-gray-600 leading-relaxed">
            Emergency funds act as a financial buffer, typically covering 3-6 months of living expenses. They provide peace of mind and financial stability 
            during job loss, medical emergencies, unexpected repairs, or other sudden financial challenges.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-700 mb-3">Why Use an Emergency Fund Calculator?</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Determine precise emergency fund needs</li>
            <li>Calculate optimal savings targets</li>
            <li>Plan systematic fund building</li>
            <li>Assess financial preparedness</li>
            <li>Reduce financial stress and uncertainty</li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-700 mb-3">Understanding the Emergency Fund Calculator</h3>
          <p className="text-gray-600 leading-relaxed">
            Our Emergency Fund Calculator is a powerful tool that helps you create a personalized financial safety net. 
            By inputting your monthly expenses, income, and financial goals, you can develop a clear strategy for building and maintaining your emergency fund.
          </p>
        </section>
      </div>
    </div>
  );
};

const EFC = () => {
    return (
      <>
        <Header />
        <main className="overflow-x-hidden">
          <div className="relative z-20">
            <EmergencyFundCalculator/>
          </div>
          <EFCInformation/>
        </main>
        <div className="relative z-20">
          <Footer />
        </div>
      </>
    );
  };
  
  export default EFC;