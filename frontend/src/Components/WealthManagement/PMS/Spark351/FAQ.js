import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQItem = ({ question, answer, isOpen, toggleOpen }) => {
  return (
    <div className="border-b border-[#E6E6E6]">
      <button
        className="w-full flex justify-between items-center py-4 px-6 text-left focus:outline-none"
        onClick={toggleOpen}
      >
        <span className="text-[#113262] font-medium">{question}</span>
        {isOpen ? (
          <ChevronUp className="text-[#113262] w-5 h-5 flex-shrink-0" />
        ) : (
          <ChevronDown className="text-[#113262] w-5 h-5 flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 pb-4 text-[#545454]">
          {answer}
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqData = [
    {
      question: "What is SPARK?",
      answer: "SPARK is our investment strategy that focuses on discovering and investing in promising small companies that show strong potential for growth. Think of it as investing in tomorrow's market leaders while they're still in their growth phase."
    },
    {
      question: "What is the minimum investment and time horizon?",
      answer: "The minimum investment is Rs. 50 lakhs, and the investment horizon is best suited for 3-5 years or longer. This longer horizon allows for the growth potential of small companies to materialize."
    },
    {
      question: "How do you choose companies for investment?",
      answer: "We look for companies that have strong financial health with low debt, consistent track record of returns, trustworthy management, and clear growth opportunities ahead."
    },
    {
      question: "What are the risk factors to consider?",
      answer: "Small company stocks can be more volatile and might be harder to buy or sell quickly. Investment values can fluctuate significantly, making this strategy best suited for those comfortable with market ups and downs."
    },
    {
      question: "How do you protect investments?",
      answer: "We employ regular monitoring of companies, take quick action if we spot any risks, ensure diversification across different types of businesses, and maintain a strong focus on companies with solid fundamentals."
    },
    {
      question: "What has been your recent performance?",
      answer: "For the period April 2024 - September 2024, we achieved 22.11% returns, and in the previous year (2023-24), we delivered 23.69% returns. However, please note that past performance doesn't guarantee future returns."
    }
  ];

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg">
      <div className="p-6 bg-[#E8EEF6] rounded-t-lg">
        <h2 className="text-2xl font-semibold text-[#113262]">
          Frequently Asked Questions
        </h2>
      </div>
      <div className="divide-y divide-[#E6E6E6]">
        {faqData.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={index === openIndex}
            toggleOpen={() => setOpenIndex(index === openIndex ? -1 : index)}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQ;