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
      question: "How important is financial planning for health emergencies?",
      answer: "Preparing financially for unexpected health scenarios is crucial. It prevents debt, ensures peace of mind, and offers a safeguard for your loved ones."
    },
    {
      question: "Can I adjust my existing financial plan for health emergencies?",
      answer: "Absolutely. Our expert advisors can tailor your current plan to include strategies for potential health crises, ensuring comprehensive coverage."
    },
    {
      question: "Is health insurance enough for health emergencies?",
      answer: "While health insurance is essential, having a robust financial plan ensures all contingencies are covered, including those not covered by insurance."
    },
    {
      question: "How do I start with health emergency financial planning?",
      answer: "Begin with a consultation. Our experts will assess your needs and craft a plan aligned with your health and financial situation."
    },
    {
      question: "How often should I review my health emergency financial plan?",
      answer: "Regularly. As health risks and financial goals evolve, it's imperative to update your plan to reflect current needs and circumstances."
    },
    {
      question: "Do I need a separate emergency fund for health?",
      answer: "It's wise to have a dedicated health emergency fund. This ensures other financial goals remain unaffected during health crises."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-24">
      <div className="flex flex-col md:flex-row gap-16">
        <div className="md:w-1/3">
          <div className="sticky top-8">
            <div className="w-12 h-0.5 bg-[#F49611] mb-3"></div>
            <h2 className="text-4xl font-bold text-[#113262] mb-6">
              Frequently Asked Questions About Health Emergency Financial Planning
            </h2>
            <p className="text-gray-600 mb-8">
              Get answers to common questions about financial planning for health emergencies. 
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
