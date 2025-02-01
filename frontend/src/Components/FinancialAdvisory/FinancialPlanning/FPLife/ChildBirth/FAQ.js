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
      question: "How do I start my Childbirth Financial Planning?",
      answer: "Start by assessing current finances and future goals. Our experts then tailor a plan specifically for you, ensuring all bases are covered."
    },
    {
      question: "Is insurance necessary for my child?",
      answer: "Absolutely. Insurance provides a safety net against unforeseen events, ensuring your child's needs are always met."
    },
    {
      question: "How can I prepare for education costs?",
      answer: "Begin early. By setting aside funds now and investing wisely, you can grow a substantial education fund over time."
    },
    {
      question: "Are there specific investments for children?",
      answer: "Yes, there are child-specific mutual funds and insurance policies. Our advisors can guide you through the best choices."
    },
    {
      question: "What if my financial situation changes?",
      answer: "Financial plans aren't static. As situations evolve, we adapt your plan, ensuring it always aligns with your goals."
    },
    {
      question: "Do you provide tax-saving advice?",
      answer: "Yes, we advise on tax-efficient investments and savings, maximising benefits while securing your child's future."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-24">
      <div className="flex flex-col md:flex-row gap-16">
        <div className="md:w-1/3">
          <div className="sticky top-8">
            <div className="w-12 h-0.5 bg-[#F49611] mb-3"></div>
            <h2 className="text-4xl font-bold text-[#113262] mb-6">
              Frequently Asked Questions About Childbirth Financial Planning
            </h2>
            <p className="text-gray-600 mb-8">
              Get answers to common questions about financial planning for childbirth. 
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
