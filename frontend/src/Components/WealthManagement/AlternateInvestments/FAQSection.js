import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        className="w-full py-8 px-6 flex justify-between items-center text-left focus:outline-none hover:bg-Primary-50"
        onClick={onClick}
      >
        <h3 className="text-lg font-semibold text-[#113262] pr-8">{question}</h3>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-[#1C52A0] flex-shrink-0" />
        ) : (
          <ChevronDown className="h-5 w-5 text-[#1C52A0] flex-shrink-0" />
        )}
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 px-6 ${
          isOpen ? 'max-h-96 pb-8' : 'max-h-0'
        }`}
      >
        <p className="text-gray-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What are the minimum investment requirements?",
      answer: "For Alternative Investment Funds (AIFs), the minimum investment typically starts at ₹1 crore. However, this can vary based on the specific fund and investment strategy. We can work with you to find the most suitable investment option based on your portfolio size and objectives."
    },
    {
      question: "How liquid are alternative investments?",
      answer: "Liquidity varies by investment type. While some strategies offer quarterly redemption windows, others may have longer lock-in periods of 3-5 years. Each fund's liquidity terms are clearly outlined in the investment documentation, and we'll help you understand these terms before making any investment decisions."
    },
    {
      question: "What are the tax implications?",
      answer: "Tax treatment varies by investment type. For example, our Equity AIFs handle the tax surcharge at the fund level, making returns tax-free for individual investors. We recommend consulting with your tax advisor for specific advice based on your situation."
    },
    {
      question: "How are alternative investments regulated in India?",
      answer: "Alternative investments in India are regulated by SEBI under the AIF Regulations. These regulations provide a robust framework for investor protection, fund governance, and disclosure requirements. All our funds comply with SEBI regulations and guidelines."
    },
    {
      question: "How do you manage investment risks?",
      answer: "We employ a multi-layered risk management approach including diversification, professional fund management, regular monitoring, and strict investment guidelines. Our team conducts thorough due diligence on all investments and provides regular risk assessment reports."
    },
    {
      question: "What kind of returns can I expect?",
      answer: "Returns vary based on the investment strategy, market conditions, and risk profile. While we aim to deliver superior risk-adjusted returns, it's important to note that past performance is not indicative of future results. We focus on long-term value creation while managing downside risks."
    }
  ];

  return (
    <div className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#113262]">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Get answers to common questions about alternative investments
          </p>
        </div>

        {/* FAQ Items */}
        <div className="bg-white rounded-lg shadow-lg divide-y divide-gray-200">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>

        {/* Bottom Text */}
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Have more questions? Our investment experts are here to help.
          </p>
          <button className="mt-6 px-6 py-3 bg-[#1C52A0] text-white rounded-lg hover:bg-[#113262] transition-colors">
            Contact Our Team
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;