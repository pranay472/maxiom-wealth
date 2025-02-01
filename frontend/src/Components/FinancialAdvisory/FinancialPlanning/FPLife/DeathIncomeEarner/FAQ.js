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
      question: "How can I prepare for such unforeseen events?",
      answer: "Regular financial reviews, having an emergency fund, and adequate insurance coverage are foundational steps."
    },
    {
      question: "What's the first financial step post such a loss?",
      answer: "Access immediate liquidity, review current debts, and start the insurance claim process at the earliest."
    },
    {
      question: "Can I manage assets and debts alone?",
      answer: "It's advisable to seek expert guidance to ensure smooth management and avoid potential pitfalls."
    },
    {
      question: "How soon should insurance be claimed?",
      answer: "Initiating the process promptly is crucial, though timeframes can vary based on policy stipulations."
    },
    {
      question: "Is there tax implication on insurance payouts?",
      answer: "Generally, life insurance proceeds are tax-free in India, but it's good to verify specifics."
    },
    {
      question: "How can you assist in this challenging time?",
      answer: "We offer compassionate, expert guidance, from immediate financial strategies to long-term planning, ensuring a secure future."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-24">
      <div className="flex flex-col md:flex-row gap-16">
        <div className="md:w-1/3">
          <div className="sticky top-8">
            <div className="w-12 h-0.5 bg-[#F49611] mb-3"></div>
            <h2 className="text-4xl font-bold text-[#113262] mb-6">
              Frequently Asked Questions About Sudden Loss Financial Planning
            </h2>
            <p className="text-gray-600 mb-8">
              Get answers to common questions about financial planning in case of sudden loss of income earner.
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
