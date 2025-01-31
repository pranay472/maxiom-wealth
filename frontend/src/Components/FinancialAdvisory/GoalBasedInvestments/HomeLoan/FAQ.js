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
      question: "Why consider home loan prepayment?",
      answer: "Accelerated loan repayment reduces interest costs and offers home ownership sooner. Our strategies further enhance these benefits."
    },
    {
      question: "Can prepayment affect tax deductions?",
      answer: "While prepayment can impact deductions, our tax-efficient planning ensures you reap maximum benefits and savings."
    },
    {
      question: "How to balance prepayment with other financial goals?",
      answer: "Our comprehensive financial planning evaluates all facets, ensuring your goals are met without compromising on important milestones."
    },
    {
      question: "Is it always beneficial to prepay?",
      answer: "Mostly, yes. But individual situations vary. Our expert consultation considers all factors to give you tailored advice."
    },
    {
      question: "How do I start the prepayment process?",
      answer: "First, evaluate your financial status. Our advisors guide you through a personalized roadmap, considering all nuances."
    },
    {
      question: "What about penalties for prepayment?",
      answer: "Some banks might charge a penalty. We help navigate these charges, ensuring your decision remains financially sound."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-24">
      <div className="flex flex-col md:flex-row gap-16">
        <div className="md:w-1/3">
          <div className="sticky top-8">
            <div className="w-12 h-0.5 bg-[#F49611] mb-3"></div>
            <h2 className="text-4xl font-bold text-[#113262] mb-6">
              Frequently Asked Questions About Home Loan Prepayment
            </h2>
            <p className="text-gray-600 mb-8">
              Get answers to common questions about our home loan prepayment planning services. 
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