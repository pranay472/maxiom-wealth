import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full py-4 text-left hover:bg-gray-50 transition-colors duration-200"
      >
        <span className="font-medium text-lg text-gray-900">{question}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-gray-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500" />
        )}
      </button>
      {isOpen && (
        <div className="pb-4 px-4">
          <p className="text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "What is DIAMOND?",
      answer: "DIAMOND (Dependable Income And Managed Outcomes for Next Decades) is our retirement-focused investment strategy that aims to provide stable income and capital preservation through diversified investments across multiple asset classes."
    },
    {
      question: "What is your investment approach?",
      answer: "We follow a balanced approach focusing on: 1) High credit quality investments, 2) Stable yields, 3) Low volatility assets, 4) Strategic diversification across equity, debt, REITs, InvITs, and gold, 5) Regular portfolio monitoring to ensure retirement goals are met."
    },
    {
      question: "What are the investment details?",
      answer: "The minimum investment is Rs. 50 lakhs, and the recommended time horizon is 5 years or longer. We focus on creating a balanced portfolio suitable for retirement needs with emphasis on regular income generation and capital preservation."
    },
    {
      question: "How do you protect retirement savings?",
      answer: "We protect retirement savings through diversification across asset classes, focus on high credit quality investments, maintaining stable yields, ensuring low volatility, and regular monitoring of the portfolio to align with retirement goals."
    },
    {
      question: "What are the risk factors to consider?",
      answer: "Key risks include market risk, interest rate risk, credit risk depending on underlying investments, liquidity risk, and the impact of inflation on retirement corpus. However, our diversified approach aims to minimize these risks."
    },
    {
      question: "Who should invest in DIAMOND?",
      answer: "DIAMOND is ideal for investors approaching retirement or already retired, looking for stable income, focusing on capital preservation, seeking inflation-beating returns, and wanting a professionally managed retirement portfolio with regular income streams."
    }
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <div className="space-y-2">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;