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
      question: "How do single mothers benefit from tailored financial planning?",
      answer: "Tailored planning addresses specific challenges and goals of single moms, ensuring stability and future security. Our expertise is in making this journey smoother."
    },
    {
      question: "What investment strategies do you recommend?",
      answer: "For single mothers, we blend safety with returns, ensuring a stable financial future without undue risks."
    },
    {
      question: "Is tax planning different for single moms?",
      answer: "Yes, single mothers can access specific tax-efficient strategies which maximise savings."
    },
    {
      question: "How do you prioritise child-centric budgeting?",
      answer: "We emphasise milestones like education, healthcare, and overall well-being in our financial strategies for single mothers."
    },
    {
      question: "Do single mothers need specific insurance plans?",
      answer: "Insurance needs for single mothers differ. We guide you to ensure comprehensive protection for both mother and child."
    },
    {
      question: "How can I ensure my child's financial security?",
      answer: "Our goal-driven plans, coupled with expert advice, aim at securing your child's future every step of the way."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-24">
      <div className="flex flex-col md:flex-row gap-16">
        <div className="md:w-1/3">
          <div className="sticky top-8">
            <div className="w-12 h-0.5 bg-[#F49611] mb-3"></div>
            <h2 className="text-4xl font-bold text-[#113262] mb-6">
              Frequently Asked Questions About Single Mother Financial Planning
            </h2>
            <p className="text-gray-600 mb-8">
              Get answers to common questions about financial planning for single mothers. 
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
