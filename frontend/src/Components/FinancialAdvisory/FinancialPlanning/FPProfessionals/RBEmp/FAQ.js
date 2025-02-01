import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const onClick = () => setIsOpen(!isOpen);

  return (
    <div className="border-b border-gray-200">
      <button className="w-full py-6 flex justify-between items-center text-left" onClick={onClick}>
        <h3 className="text-lg font-semibold text-[#113262] pr-8">{question}</h3>
        <ChevronDown className={`w-5 h-5 text-[#113262] transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}>
        <p className="text-gray-600">{answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "How does bank retiree financial planning differ?",
      answer: "Bank retirees have unique benefits, pensions, and financial landscapes. Tailored strategies ensure maximised benefits. We're experts in this niche."
    },
    {
      question: "Do you help in pension maximisation?",
      answer: "Yes, we guide on maximising pensions and other retirement benefits. It's a cornerstone of our service."
    },
    {
      question: "Is tax planning essential for retirees?",
      answer: "Absolutely. Especially for bank retirees, tax-efficient strategies can significantly boost savings."
    },
    {
      question: "What makes your service stand out?",
      answer: "Our deep expertise, SEBI registration, and tailored approach make us a top choice for bank retirees."
    },
    {
      question: "Do I need insurance post-retirement?",
      answer: "Insurance needs change post-retirement. We'll guide on the best options ensuring comprehensive coverage."
    },
    {
      question: "How do you ensure unbiased advice?",
      answer: "We rely on proprietary data analytics for stocks and mutual funds ratings, ensuring no third-party influences."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-24">
      <div className="flex flex-col md:flex-row gap-16">
        <div className="md:w-1/3">
          <div className="sticky top-8">
            <div className="w-12 h-0.5 bg-[#F49611] mb-3"></div>
            <h2 className="text-4xl font-bold text-[#113262] mb-6">
              Frequently Asked Questions About Bank Retiree Financial Planning
            </h2>
            <p className="text-gray-600 mb-8">
              Get answers to common questions about financial planning for retired bank employees. 
              For more detailed guidance, our experts are here to help.
            </p>
            <button className="flex items-center text-[#F49611] font-semibold hover:gap-2 transition-all">
              Contact Us
              <ChevronDown className="w-5 h-5 rotate-[-90deg]" />
            </button>
          </div>
        </div>
        <div className="md:w-2/3">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
