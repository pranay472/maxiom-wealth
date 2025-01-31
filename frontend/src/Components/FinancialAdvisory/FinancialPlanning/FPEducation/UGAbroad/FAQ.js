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
      question: "Why is financial planning crucial for studying abroad?",
      answer: "Financial planning ensures that your overseas education journey is smooth, stress-free, and devoid of unexpected expenses."
    },
    {
      question: "Are scholarships the only financial aid available?",
      answer: "No, apart from scholarships, there are grants, assistantships, and work-study opportunities to explore."
    },
    {
      question: "How can I manage currency fluctuations?",
      answer: "We provide strategies to minimize risks associated with currency fluctuations during your study tenure."
    },
    {
      question: "What are the hidden costs of studying abroad?",
      answer: "These can range from visa fees, travel, health insurance, to unexpected living costs and inflation abroad."
    },
    {
      question: "How do you assist with scholarship applications?",
      answer: "We guide you in identifying suitable scholarships and assist in the application process for maximised success."
    },
    {
      question: "How early should I start planning my finances?",
      answer: "The sooner, the better. Early planning allows more time to save, invest, and scout for financial aids."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-24">
      <div className="flex flex-col md:flex-row gap-16">
        <div className="md:w-1/3">
          <div className="sticky top-8">
            <div className="w-12 h-0.5 bg-[#F49611] mb-3"></div>
            <h2 className="text-4xl font-bold text-[#113262] mb-6">
              Frequently Asked Questions About Studying Abroad
            </h2>
            <p className="text-gray-600 mb-8">
              Get answers to common questions about financial planning for undergraduate education abroad. 
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