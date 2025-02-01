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
      question: "How is financial planning for doctors unique?",
      answer: "Medical professionals often have varied income streams and longer educational paths. Tailored financial planning understands these nuances, ensuring optimal financial health."
    },
    {
      question: "Can I protect against malpractice suits?",
      answer: "Definetly. Our insurance advisory can guide you on policies that safeguard against potential liabilities, giving you peace of mind."
    },
    {
      question: "How do regulatory changes impact me?",
      answer: "The healthcare sector has its regulations. We stay updated, ensuring your financial plans remain compliant and advantageous."
    },
    {
      question: "Is retirement planning necessary?",
      answer: "Absolutely. Ensuring a comfortable retirement after years of service is crucial. Our strategies make this a reality."
    },
    {
      question: "Do you offer digital solutions?",
      answer: "Yes. Our integrated mobile and webapp offers a seamless experience from planning to execution and tracking."
    },
    {
      question: "How are investment decisions made?",
      answer: "Without third-party bias, our proprietary data analytics platform rates stocks and mutual funds, ensuring your interests are paramount."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-24">
      <div className="flex flex-col md:flex-row gap-16">
        <div className="md:w-1/3">
          <div className="sticky top-8">
            <div className="w-12 h-0.5 bg-[#F49611] mb-3"></div>
            <h2 className="text-4xl font-bold text-[#113262] mb-6">
              Frequently Asked Questions About Doctors' Financial Planning
            </h2>
            <p className="text-gray-600 mb-8">
              Get answers to common questions about financial planning for medical professionals. 
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
