import React, { useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full py-6 flex justify-between items-center text-left"
        onClick={onClick}
      >
        <h3 className="text-lg font-semibold text-[#113262] pr-8">{question}</h3>
        <ChevronDown 
          className={`w-5 h-5 text-[#F49611] transform transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-6' : 'max-h-0'
        }`}
      >
        <p className="text-gray-600">{answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Why tailored financial plans?",
      answer: "Every entrepreneur's journey is unique. Tailored financial plans cater to specific business needs, ensuring more effective outcomes. Maxiom Wealth understands these nuances and crafts strategies just for you."
    },
    {
      question: "Are tax strategies essential?",
      answer: "Absolutely. Effective tax strategies can significantly increase your net profit. With our expertise, we help entrepreneurs navigate complex tax landscapes efficiently."
    },
    {
      question: "How does Maxiom Wealth differ?",
      answer: "Our deep expertise, certified processes, and fiduciary commitments set us apart. We're in this journey with you, prioritising your success at every step."
    },
    {
      question: "Is insurance crucial for entrepreneurs?",
      answer: "Yes, insurance mitigates potential risks, ensuring business continuity. We guide you in choosing the best protection for your assets."
    },
    {
      question: "What about future financial goals?",
      answer: "Our unique assurance approach ensures that all your assets and plans align with your long-term goals, securing your business's future."
    },
    {
      question: "How unbiased is your advice?",
      answer: "Entirely. We rely on our proprietary data platform to rate investments. There's no external influence, just data-driven insights."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-24">
      <div className="flex flex-col md:flex-row gap-16">
        <div className="md:w-1/3">
          <div className="sticky top-8">
            <div className="w-12 h-0.5 bg-[#F49611] mb-3"></div>
            <h2 className="text-4xl font-bold text-[#113262] mb-6">
              Frequently Asked Questions About Entrepreneur Financial Planning
            </h2>
            <p className="text-gray-600 mb-8">
              Get answers to common questions about financial planning for entrepreneurs. 
              For more detailed guidance, our experts are here to help.
            </p>
            <button className="flex items-center text-[#F49611] font-semibold hover:gap-2 transition-all">
              <span>Speak With An Expert</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
        <div className="md:w-2/3">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={index === openIndex}
              onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
