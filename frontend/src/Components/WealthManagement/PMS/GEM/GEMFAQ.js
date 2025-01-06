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

const GEMFAQ = () => {
  const faqs = [
    {
      question: "How Does GEM Enhance Equity Growth?",
      answer: "GEM capitalises on stock momentum, aligning investments with market trends for enhanced growth. Our data-driven approach ensures that these trends are leveraged effectively for your benefit."
    },
    {
      question: "How Often is the Portfolio Rebalanced?",
      answer: "Our GEM portfolios are rebalanced monthly even though we add a new stock for atleast four months. This frequency allows us to effectively capitalise on market momentum while keeping churn under control."
    },
    {
      question: "What Makes GEM Different?",
      answer: "Our GEM strategy is unique due to its monthly rebalancing, quality checks, and focus on top-tier stocks. This disciplined approach minimises risk while maximising potential returns."
    },
    {
      question: "What is the 'Roots & Wings' Philosophy?",
      answer: "Our 'Roots & Wings' philosophy combines foundational stability (Roots) with innovative growth strategies (Wings). It's integral to our approach, ensuring balanced and forward-thinking investment planning."
    },
    {
      question: "Is Momentum Investing Risky?",
      answer: "While all investments carry some risk, our comprehensive risk management strategies in GEM mitigate these effectively. Continuous monitoring and adaptive strategies ensure safer investment choices."
    },
    {
      question: "How Do You Handle Market Volatility?",
      answer: "In volatile markets, our GEM strategy focuses on increasing cash positions and closely monitoring for momentum reversals. This proactive approach helps in navigating market fluctuations effectively."
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

export default GEMFAQ;