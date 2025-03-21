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
      question: "What is Early Retirement Planning?",
      answer: "Early retirement planning involves strategies and investments to ensure financial stability when you decide to retire before the traditional age."
    },
    {
      question: "How Do I Start Planning?",
      answer: "Begin by assessing your current financial status, set clear retirement goals, and work with our expert advisors to create a tailored plan."
    },
    {
      question: "What Investments Should I Consider?",
      answer: "Our team will help you choose the right mix of investments to maximise your returns and secure your future."
    },
    {
      question: "How Can I Ensure Financial Stability?",
      answer: "Creating diverse income streams and having a solid investment plan in place are key to ensuring long-term financial stability."
    },
    {
      question: "Can I Retire in my 40s?",
      answer: "With the right planning, investments, and financial management, retiring in your 40s is a realistic and achievable goal."
    },
    {
      question: "What is the Role of an Advisor?",
      answer: "Our advisors act as your financial guide, helping you make informed decisions to achieve your early retirement goals."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-24">
      <div className="flex flex-col md:flex-row gap-16">
        <div className="md:w-1/3">
          <div className="sticky top-8">
            <div className="w-12 h-0.5 bg-[#F49611] mb-3"></div>
            <h2 className="text-4xl font-bold text-[#113262] mb-6">
              Common Questions About FIRE Planning
            </h2>
            <p className="text-gray-600 mb-8">
              Get answers to frequently asked questions about our early retirement planning services. 
              For detailed information, our experts are ready to help.
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