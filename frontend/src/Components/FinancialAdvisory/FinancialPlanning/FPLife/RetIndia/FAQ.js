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
      question: "What entails repatriate financial planning?",
      answer: "It's a specialized approach to transition your finances, taking into account Indian norms, upon your return."
    },
    {
      question: "How is repatriation taxation managed?",
      answer: "There are specific tax implications for repatriates; we guide you to optimise your tax position."
    },
    {
      question: "Can I maintain foreign investments upon return?",
      answer: "Yes, with our guidance, you can make informed decisions about maintaining or reshuffling your global assets."
    },
    {
      question: "How should I approach retirement planning upon return?",
      answer: "We'll re-evaluate and adjust your retirement strategies, considering your changed geographical and financial contexts."
    },
    {
      question: "Will my foreign insurance be valid?",
      answer: "Certain policies may not be valid; we'll advise on suitable Indian policies or transitions, if feasible."
    },
    {
      question: "What about my overseas savings and currency concerns?",
      answer: "We offer strategies to manage currency risks and optimize your overseas savings for a balanced financial reintegration."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-24">
      <div className="flex flex-col md:flex-row gap-16">
        <div className="md:w-1/3">
          <div className="sticky top-8">
            <div className="w-12 h-0.5 bg-[#F49611] mb-3"></div>
            <h2 className="text-4xl font-bold text-[#113262] mb-6">
              Frequently Asked Questions About Repatriate Financial Planning
            </h2>
            <p className="text-gray-600 mb-8">
              Get answers to common questions about financial planning when returning to India. 
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
