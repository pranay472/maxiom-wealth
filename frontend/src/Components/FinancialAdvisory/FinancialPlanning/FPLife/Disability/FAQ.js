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
      question: "How do you tailor financial plans for disabled individuals?",
      answer: "We dive deep into understanding every client's unique situation. Our tailored solutions ensure the best strategies for individuals with disabilities."
    },
    {
      question: "Do you assist in understanding government benefits?",
      answer: "Yes, navigating government benefits for disabled individuals is one of our specialities. We help optimise what you're entitled to."
    },
    {
      question: "Is portfolio management different for those with disabilities?",
      answer: "Yes, considering special needs and priorities, we customize portfolios to offer stability and growth."
    },
    {
      question: "How do you ensure the security of our investments?",
      answer: "Registered with SEBI, our fiduciary role guarantees unbiased advice, aiming for your success without any external influence."
    },
    {
      question: "Do you offer insurance advice for families with disabled members?",
      answer: "Absolutely, insurance planning is crucial, and we guide families to the best policies that cater to their needs."
    },
    {
      question: "How does technology aid in your financial planning process?",
      answer: "Our integrated app ensures seamless transition from planning to execution, tracking, and rebalancing – all at your fingertips."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-24">
      <div className="flex flex-col md:flex-row gap-16">
        <div className="md:w-1/3">
          <div className="sticky top-8">
            <div className="w-12 h-0.5 bg-[#F49611] mb-3"></div>
            <h2 className="text-4xl font-bold text-[#113262] mb-6">
              Frequently Asked Questions About Disability Financial Planning
            </h2>
            <p className="text-gray-600 mb-8">
              Get answers to common questions about financial planning for individuals with disabilities. 
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
