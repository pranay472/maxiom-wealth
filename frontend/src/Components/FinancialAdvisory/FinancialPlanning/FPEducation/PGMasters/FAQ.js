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
      question: "How do I start my Master's abroad financial planning?",
      answer: "Initiate a consultation with us. We'll understand your goals and provide tailored advice. Our experts ensure a smooth financial transition for your academic journey."
    },
    {
      question: "Can I secure scholarships abroad?",
      answer: "Yes, with our scholarship consulting, we help you identify and apply for suitable opportunities, increasing your chances of success."
    },
    {
      question: "Is my investment secure?",
      answer: "Your investments are strategically planned with SEBI registered processes, prioritising safety and growth."
    },
    {
      question: "What if my plans change?",
      answer: "Our advisors ensure flexibility in your financial plans, accommodating any changes in your academic decisions."
    },
    {
      question: "How can technology aid me?",
      answer: "Our integrated app allows for real-time tracking and seamless financial planning, keeping you updated always."
    },
    {
      question: "What makes your approach unique?",
      answer: "Our client-centric approach, SEBI registration, and proprietary data analytics platform set us apart. We're dedicated to your global educational success."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-24">
      <div className="flex flex-col md:flex-row gap-16">
        <div className="md:w-1/3">
          <div className="sticky top-8">
            <div className="w-12 h-0.5 bg-[#F49611] mb-3"></div>
            <h2 className="text-4xl font-bold text-[#113262] mb-6">
              Frequently Asked Questions About Master's Abroad
            </h2>
            <p className="text-gray-600 mb-8">
              Get answers to common questions about financial planning for master's education abroad. 
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