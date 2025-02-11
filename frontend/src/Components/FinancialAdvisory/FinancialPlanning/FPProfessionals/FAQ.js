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
      question: "What is professional financial planning and why is it important?",
      answer: "Professional financial planning is a strategic approach to managing finances specifically tailored for career-driven individuals. It helps professionals proactively prepare for career challenges, income fluctuations, investment opportunities, and long-term wealth creation by developing comprehensive and adaptive financial strategies."
    },
    {
      question: "How early should professionals start financial planning?",
      answer: "The earlier, the better. Ideally, professionals should start financial planning at the beginning of their career. This allows for strategic wealth accumulation, tax optimization, risk management, and creating a robust financial foundation that supports career growth and personal aspirations."
    },
    {
      question: "What professional scenarios does your financial planning cover?",
      answer: "Our professional financial planning comprehensively covers various scenarios including career transitions, entrepreneurial ventures, income optimization, professional liability protection, retirement planning, and strategic wealth management across different professional stages and industries."
    },
    {
      question: "How do you help manage financial risks for professionals?",
      answer: "We employ a multi-faceted risk management approach. This includes diversified investment strategies, creating adaptive financial plans, building professional emergency funds, providing liability insurance guidance, and offering personalized advice that evolves with your professional journey."
    },
    {
      question: "Can you help plan for different types of professional scenarios?",
      answer: "Absolutely. Our financial planning is highly customizable. Whether you're a sportsperson, doctor, retired bank employee, entrepreneur, or in any other professional field, we create tailored strategies that align with your specific professional challenges and financial goals."
    },
    {
      question: "What makes Maxiom Wealth's professional financial planning unique?",
      answer: "Our approach combines deep financial expertise with professional insights. We use advanced financial modeling to project career-based financial needs, leverage tax-efficient investment vehicles, and provide continuous portfolio monitoring. With experience across diverse professional domains, we offer strategic approaches tailored to your unique professional journey."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-24">
      <div className="flex flex-col md:flex-row gap-16">
        <div className="md:w-1/3">
          <div className="sticky top-8">
            <div className="w-12 h-0.5 bg-[#F49611] mb-3"></div>
            <h2 className="text-4xl font-bold text-[#113262] mb-6">
              Frequently Asked Questions About Professional Financial Planning
            </h2>
            <p className="text-gray-600 mb-8">
              Get answers to common questions about our professional financial planning services. 
              For personalized guidance, our financial planning experts are here to help.
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