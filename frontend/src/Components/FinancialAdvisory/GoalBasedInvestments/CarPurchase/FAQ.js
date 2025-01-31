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
      question: "How does financial planning help in car buying?",
      answer: "Financial planning offers a clear budget, understands the implications of loans and insurance, and ensures the purchase aligns with other financial goals. Essentially, it ensures you buy smartly."
    },
    {
      question: "Is taking a car loan advisable?",
      answer: "Loans depend on individual financial health. While they can help spread costs, it's essential to understand interest implications. Our advisors can provide tailored recommendations."
    },
    {
      question: "How does total cost of ownership impact purchase?",
      answer: "Beyond the sticker price, cars have maintenance, insurance, and depreciation costs. Understanding these ensures you're prepared for the actual cost over the car's life."
    },
    {
      question: "Why is insurance advisory essential?",
      answer: "Insurance protects your investment. However, navigating options can be daunting. Expert advice ensures you get the best coverage without overspending."
    },
    {
      question: "Can I use my stock investments for buying a car?",
      answer: "While stocks can be liquidated, it's essential to see if selling aligns with your overall financial goals. Consultation can offer a clearer picture."
    },
    {
      question: "Do I need a car purchase plan for a second-hand car?",
      answer: "Absolutely. Second-hand cars have their financial considerations. From evaluating the car's value to future maintenance costs, planning is crucial."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-24">
      <div className="flex flex-col md:flex-row gap-16">
        <div className="md:w-1/3">
          <div className="sticky top-8">
            <div className="w-12 h-0.5 bg-[#F49611] mb-3"></div>
            <h2 className="text-4xl font-bold text-[#113262] mb-6">
              Frequently Asked Questions About Car Purchase
            </h2>
            <p className="text-gray-600 mb-8">
              Get answers to common questions about our car purchase planning services. 
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