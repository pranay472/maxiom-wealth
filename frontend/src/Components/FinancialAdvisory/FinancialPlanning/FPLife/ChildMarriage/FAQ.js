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
      question: "How early should I start the wedding planning?",
      answer: "The sooner, the better. Early planning ensures maximised benefits and reduced financial strain."
    },
    {
      question: "Can tax benefits be availed on wedding expenses?",
      answer: "While direct tax benefits are limited, we provide strategies to optimise tax implications surrounding the event."
    },
    {
      question: "How do you tailor the financial plan?",
      answer: "By understanding your vision, preferences, and financial capacity, we craft a bespoke wedding financial blueprint."
    },
    {
      question: "What unforeseen wedding expenses can arise?",
      answer: "From decor changes, extended guest lists to unexpected logistical needs, weddings can spring various surprises."
    },
    {
      question: "Is insurance essential for a wedding?",
      answer: "While not mandatory, it protects against financial losses from unexpected events during the wedding."
    },
    {
      question: "Do you provide post-wedding financial guidance?",
      answer: "Yes, our commitment extends beyond the wedding, ensuring a stable financial start to your child's marital life."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-24">
      <div className="flex flex-col md:flex-row gap-16">
        <div className="md:w-1/3">
          <div className="sticky top-8">
            <div className="w-12 h-0.5 bg-[#F49611] mb-3"></div>
            <h2 className="text-4xl font-bold text-[#113262] mb-6">
              Frequently Asked Questions About Wedding Financial Planning
            </h2>
            <p className="text-gray-600 mb-8">
              Get answers to common questions about financial planning for your child's wedding. 
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
