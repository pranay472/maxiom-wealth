import React from "react";
import Header from "../../../../Header";
import Footer from "../../../../Footer";
import FDCalculator from "./FDCalculator";

const FDContent = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="space-y-12">
        {/* Introduction Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding Fixed Deposits</h2>
          <p className="text-gray-600 leading-relaxed">
            A Fixed Deposit (FD) represents a secure investment avenue where investors can place their funds with banks or NBFCs 
            for predetermined periods, typically ranging from one week to a decade. This investment vehicle offers guaranteed returns 
            through interest rates that generally outperform standard savings accounts, typically falling between 5% and 7.5% annually.
          </p>
        </section>

        {/* Benefits Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Advantages of Fixed Deposits</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Secure investment option ideal for conservative investors</li>
              <li>Competitive interest rates surpassing regular savings accounts</li>
              <li>Quarterly interest compounding with maturity payout flexibility</li>
              <li>Built-in savings discipline through fixed tenure commitments</li>
              <li>Tax benefits available under Section 80C of Income Tax Act</li>
            </ul>
          </div>
        </section>

        {/* Investment Process Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Starting Your Fixed Deposit Journey</h2>
          <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
            <ol className="list-decimal list-inside space-y-3 text-gray-600">
              <li>Select a trusted bank or NBFC as your investment partner</li>
              <li>Complete the account opening process with required documentation</li>
              <li>Choose your preferred deposit amount and tenure</li>
              <li>Receive your Fixed Deposit Receipt (FDR) with investment details</li>
              <li>Monitor your investment and plan for maturity options</li>
            </ol>
          </div>
        </section>

        {/* Types of FDs Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Fixed Deposit Varieties</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Standard & Tax-Saving FDs</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Regular FDs with fixed returns and tenure</li>
                <li>• Tax-saving options with Section 80C benefits</li>
                <li>• Flexible interest payout options</li>
                <li>• Suitable for long-term wealth building</li>
              </ul>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Special Category FDs</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Senior Citizen FDs with higher interest rates</li>
                <li>• Flexi FDs with withdrawal flexibility</li>
                <li>• Cumulative and non-cumulative options</li>
                <li>• Corporate and NRI deposit schemes</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Investment Considerations Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Investment Considerations</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <ul className="space-y-3 text-gray-600">
              <li>• Review interest rates and compare across institutions</li>
              <li>• Understand premature withdrawal terms and penalties</li>
              <li>• Consider tax implications on interest earned</li>
              <li>• Plan your investment tenure based on financial goals</li>
              <li>• Evaluate minimum deposit requirements</li>
            </ul>
          </div>
        </section>

        {/* Calculator Benefits Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Benefits of Our FD Calculator</h2>
          <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
            <p className="text-gray-600 mb-4">
              Our Fixed Deposit calculator empowers you to make informed investment decisions by providing precise calculations of your potential returns. 
              Using the simple interest formula: Principal + (Principal × Rate × Time/100), it helps you:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Project your maturity amount accurately</li>
              <li>Compare different investment scenarios</li>
              <li>Plan your investment tenure effectively</li>
              <li>Understand your potential returns before investing</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

const FD = () => {
  return (
    <>
      <Header/>
      <main className="overflow-x-hidden">
        <div className="relative z-20">
          <FDCalculator/>
          <FDContent/>
        </div>
      </main>
      <div className="relative z-20">
        <Footer />
      </div>
    </>
  );
};

export default FD;