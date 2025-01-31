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
      question: "How does financial planning differ for Indian colleges?",
      answer: "Indian colleges have unique fee structures, scholarship opportunities, and costs that require specialized planning."
    },
    {
      question: "What scholarships can I avail?",
      answer: "India offers a plethora of scholarships based on merit, need, and specific criteria. We help identify the best fit."
    },
    {
      question: "How to manage varying college fees?",
      answer: "Insurance ensures medical and other unforeseen exigencies during your college years are taken care of."
    },
    {
      question: "Are living expenses in India predictable?",
      answer: "While some costs are fixed, others can vary. Our budgeting tools offer a comprehensive financial picture."
    },
    {
      question: "How can insurance benefit students?",
      answer: "While stocks can be liquidated, it's essential to see if selling aligns with your overall financial goals. Consultation can offer a clearer picture."
    },
    {
      question: "When should I start planning my college finances?",
      answer: "Begin as early as possible to maximize scholarship opportunities and make informed decisions."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-24">
      <div className="flex flex-col md:flex-row gap-16">
        <div className="md:w-1/3">
          <div className="sticky top-8">
            <div className="w-12 h-0.5 bg-[#F49611] mb-3"></div>
            <h2 className="text-4xl font-bold text-[#113262] mb-6">
              Frequently Asked Questions About Indian College Planning
            </h2>
            <p className="text-gray-600 mb-8">
              Get answers to common questions about financial planning for undergraduate education in India. 
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