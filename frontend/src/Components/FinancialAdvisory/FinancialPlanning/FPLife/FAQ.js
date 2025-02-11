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
      question: "What is life situation financial planning and why is it important?",
      answer: "Life situation financial planning is a strategic approach to managing your finances based on your unique life circumstances. It helps you proactively prepare for various life stages and challenges, whether it's marriage, childbirth, health emergencies, career transitions, or retirement, by creating a flexible and comprehensive financial strategy."
    },
    {
      question: "How early should I start planning for different life situations?",
      answer: "The earlier, the better. Ideally, you should start financial planning as soon as possible, adapting your strategy as your life evolves. This allows you to build financial resilience, leverage long-term investment opportunities, and create a safety net that can support you through various life transitions."
    },
    {
      question: "What life situations does your financial planning cover?",
      answer: "Our life situation financial planning comprehensively covers various scenarios including marriage, childbirth, health emergencies, disability support, career changes, retirement planning, and unexpected life events. We create holistic plans that consider your unique financial needs and potential challenges."
    },
    {
      question: "How do you help manage financial risks across different life stages?",
      answer: "We employ a multi-faceted risk management approach. This includes diversified investment strategies, creating adaptive financial plans, building emergency funds, providing insurance guidance, and offering personalized advice that evolves with your life circumstances."
    },
    {
      question: "Can you help plan for different types of life situations?",
      answer: "Absolutely. Our financial planning is highly customizable. Whether you're preparing for marriage, planning for a child, managing a health crisis, supporting a family member, or transitioning careers, we create tailored strategies that align with your specific life situation and financial goals."
    },
    {
      question: "What makes Maxiom Wealth's life situation financial planning unique?",
      answer: "Our approach combines deep financial expertise with personalized guidance. We use advanced financial modeling to project future needs, leverage tax-efficient investment vehicles, and provide continuous portfolio monitoring. With experience in planning for diverse life scenarios, we offer insights and strategic approaches tailored to your unique journey."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-24">
      <div className="flex flex-col md:flex-row gap-16">
        <div className="md:w-1/3">
          <div className="sticky top-8">
            <div className="w-12 h-0.5 bg-[#F49611] mb-3"></div>
            <h2 className="text-4xl font-bold text-[#113262] mb-6">
              Frequently Asked Questions About Life Situation Financial Planning
            </h2>
            <p className="text-gray-600 mb-8">
              Get answers to common questions about our life situation financial planning services. 
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