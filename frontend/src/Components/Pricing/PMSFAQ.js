import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        className="w-full py-6 flex justify-between items-center text-left hover:text-blue-700 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-blue-900">{question}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-blue-600" />
        ) : (
          <ChevronDown className="h-5 w-5 text-blue-600" />
        )}
      </button>
      {isOpen && (
        <div className="pb-6 text-gray-600 text-base leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
};

const PMSFAQ = () => {
  const faqs = [
    {
      question: "What is Portfolio Management Service (PMS)?",
      answer: "Portfolio Management Service (PMS) is a professional investment management service where experienced portfolio managers handle your investment portfolio. At Maxiom, our PMS offers personalized investment strategies tailored to your financial goals, risk appetite, and investment horizon, with a focus on generating superior risk-adjusted returns."
    },
    {
      question: "What are the different fee structures available in PMS?",
      answer: "We offer flexible fee structures to align with your preferences: 1) Fixed Fee Structure - with a management fee of 2% per annum, 2) Performance-Based Structure - with 0% management fee and 20% performance fee above the hurdle rate, and 3) Hybrid Structure - combining both fixed and performance fees. Each structure is designed to align our interests with yours."
    },
    {
      question: "What is the minimum investment required for PMS?",
      answer: "As per SEBI regulations, the minimum investment amount for PMS is ₹50 lakhs. This threshold ensures that we can build a well-diversified portfolio and execute our investment strategies effectively while maintaining optimal position sizes across securities."
    },
    {
      question: "How is the performance fee calculated?",
      answer: "The performance fee is calculated on a high-water mark basis, which means we only charge performance fees on new profits above the previous highest portfolio value. This ensures you only pay for actual value creation. The fee is typically charged at 20% of returns above a predetermined hurdle rate."
    },
    {
      question: "What kind of reports and updates will I receive?",
      answer: "We provide comprehensive reporting including monthly portfolio statements, quarterly performance reports, and detailed analysis of portfolio holdings. You'll also receive regular market insights, investment rationale for portfolio changes, and access to our research team's reports. Our client portal offers real-time portfolio tracking."
    },
    {
      question: "How liquid is my PMS investment?",
      answer: "Your PMS investment offers good liquidity with the ability to withdraw funds partially or fully with proper notice. However, we recommend a minimum investment horizon of 3-5 years to fully benefit from our investment strategy. Redemption requests are typically processed within 7-15 working days."
    },
    {
      question: "What is your investment philosophy and strategy?",
      answer: "Our investment philosophy focuses on long-term wealth creation through a disciplined, research-driven approach. We employ a combination of top-down and bottom-up analysis to identify quality companies with strong growth potential, good management, and sustainable competitive advantages. Our strategy emphasizes capital preservation while seeking attractive risk-adjusted returns."
    },
    {
      question: "How is my portfolio customized?",
      answer: "Each portfolio is tailored to your specific requirements considering factors like investment objectives, risk tolerance, time horizon, and any specific restrictions you may have. Your dedicated portfolio manager works with you to create and maintain a strategy that aligns with your financial goals."
    },
    {
      question: "What about tax implications in PMS?",
      answer: "In PMS, each transaction is made in your name, providing complete transparency in tax treatment. Capital gains are calculated on individual security sales, allowing for tax-efficient investing strategies. We provide comprehensive tax reports and can work with your tax advisor to optimize tax outcomes."
    },
    {
      question: "How do you manage risk in PMS portfolios?",
      answer: "Risk management is integral to our investment process. We employ various measures including portfolio diversification, position sizing limits, regular monitoring of risk metrics, and strict buy/sell disciplines. Our risk management framework ensures adherence to both client-specific and regulatory risk parameters."
    }
  ];

  return (
    <div className="mt-24 py-16 bg-gradient-to-br from-[#F5F5F5] via-white to-[#E8EEF6] relative overflow-hidden w-full">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-30 translate-x-1/2 translate-y-1/2"></div>
      
      <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">
        Frequently Asked Questions
      </h2>
      <div className="max-w-[1200px] mx-auto px-6">
        {faqs.map((faq, index) => (
          <FAQItem key={index} {...faq} />
        ))}
      </div>
    </div>
  );
};

export default PMSFAQ;