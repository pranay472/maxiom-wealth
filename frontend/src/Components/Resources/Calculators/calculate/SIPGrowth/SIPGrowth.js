import React from "react";
import Header from "../../../../Header";
import Footer from "../../../../Footer";
import SIPGrowthCalculator from "./SIPGrowthCalculator";

const SIPGrowthExplanation = () => {
  return (
    <div className="sip-growth-explanation bg-gray-50 p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold mb-4 border-b-2 border-gray-300 pb-2">
        Understanding SIP Growth
      </h3>
      <p className="text-black mb-4 leading-relaxed">
        <span className="font-semibold">SIP (Systematic Investment Plan)</span> growth 
        represents how your savings can grow over a period assuming a fixed average return on your 
        total investments. SIP growth depends on several critical factors such as market conditions, 
        the company's growth, and investment duration.
      </p>

      <h4 className="text-xl font-semibold mt-6 mb-3">
        Why Should You Opt for SIP for Growth?
      </h4>
      <ul className="list-disc list-inside space-y-2">
        {[
          {
            title: "Rupee-Cost Averaging",
            desc: "When you invest in SIP, you automatically buy units at different prices. This helps lower the average price per unit you pay for your investment."
          },
          {
            title: "Convenience and Discipline",
            desc: "SIPs allow you to invest small sums of money at regular intervals, helping maintain financial discipline."
          },
          {
            title: "Flexibility",
            desc: "You can start or stop SIPs at any time based on your financial requirements."
          },
          {
            title: "Tax Benefits",
            desc: "Some SIP investments offer tax benefits under Section 80C of the Income Tax Act, 1961."
          },
          {
            title: "Growth Potential",
            desc: "Long-term SIP investments can provide substantial returns through compounding."
          }
        ].map((item, index) => (
          <li key={index} className="mb-2">
            <span className="font-bold">{item.title}:</span> {item.desc}
          </li>
        ))}
      </ul>

      <h4 className="text-xl font-semibold mt-6 mb-3">
        Factors Influencing SIP Growth
      </h4>
      <p className="text-black mb-3">
        Key factors that impact SIP investment growth include:
      </p>
      <ul className="list-disc list-inside space-y-1 bg-white p-4 rounded-md shadow-sm">
        {[
          "Investment amount",
          "Investment frequency",
          "Length of investment period",
          "Type of investment fund",
          "Current and future market conditions"
        ].map((factor, index) => (
          <li key={index}>{factor}</li>
        ))}
      </ul>

      <h4 className="text-xl font-semibold mt-6 mb-3">
        Selecting the Right SIP Investment Plan
      </h4>
      <p className="text-black mb-3">
        When choosing an SIP plan, consider:
      </p>
      <ul className="list-disc list-inside space-y-1 bg-white p-4 rounded-md shadow-sm mb-4">
        {[
          "Your investment time horizon",
          "Monthly affordable investment amount",
          "Specific investment goals",
          "Alignment with retirement or long-term financial planning"
        ].map((consideration, index) => (
          <li key={index}>{consideration}</li>
        ))}
      </ul>

      <p className="text-black italic border-l-4 border-gray-500 pl-4 py-2 bg-gray-50">
        Always research different SIP options and consult a financial advisor to find 
        the most suitable investment plan for your specific needs.
      </p>
    </div>
  );
};

const SIPGrowth = () => {
  return (
    <div>
      <Header />
      <div className="calculator-container">
        <div className="calculator-content">
          <h2>SIP Growth Calculator</h2>
          <SIPGrowthCalculator />
          <SIPGrowthExplanation />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SIPGrowth;