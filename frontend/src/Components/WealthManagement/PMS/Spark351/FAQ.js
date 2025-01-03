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
      question: "How does Spark PMS select small-cap stocks?",
      answer: "Our deep expertise, combined with proprietary data analytics, guides our selection. Each pick aligns with our commitment to growth and safety."
    },
    {
      question: "Is investing in small-cap stocks risky?",
      answer: "While they can be volatile, our diversified and risk-controlled approach ensures a balanced portfolio to navigate market challenges."
    },
    {
      question: "How often is the portfolio rebalanced?",
      answer: "Regular rebalancing is key. We adjust portfolios in line with market dynamics and your financial goals. This happens atleast once quarterly."
    },
    {
      question: "Are my investments secure with Spark PMS?",
      answer: "Absolutely. As a SEBI Registered PMS, we do not hold your stocks or funds. These are under the custodial services of a large and reputed bank."
    },
    {
      question: "How does Spark PMS ensure diversified portfolios?",
      answer: "Our expert management curates a mix of promising stocks, ensuring diversification to spread across sectors, sub-market-cap-classes and manage risk."
    },
    {
      question: "What makes Spark PMS different from other portfolio services?",
      answer: "Our holistic approach, from financial planning to execution, combined with our unique features and client-centric value system, sets us apart."
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