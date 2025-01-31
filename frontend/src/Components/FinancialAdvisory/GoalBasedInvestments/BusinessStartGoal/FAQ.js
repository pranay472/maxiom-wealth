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
      question: "How vital is a business plan?",
      answer: "An effective business plan is your roadmap, guiding every aspect of the startup. It's indispensable for success and attracting investors."
    },
    {
      question: "Is legal advice necessary for all startups?",
      answer: "Absolutely. Every business, irrespective of its size, needs to understand and adhere to specific laws and regulations."
    },
    {
      question: "How do you validate a business idea?",
      answer: "Through meticulous research, market study, and consumer feedback, we assess if your idea has the potential to succeed."
    },
    {
      question: "What's the importance of feasibility analysis?",
      answer: "It ensures your business concept aligns with market realities, avoiding potential financial pitfalls in the future."
    },
    {
      question: "Does every entrepreneur need guidance?",
      answer: "While entrepreneurial spirit is commendable, expert guidance ensures that enthusiasm is channeled in the right direction."
    },
    {
      question: "How does your service differ from others?",
      answer: "Our holistic approach, combining expert guidance with strategic, legal, and financial insights, ensures your startup's comprehensive growth."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-24">
      <div className="flex flex-col md:flex-row gap-16">
        <div className="md:w-1/3">
          <div className="sticky top-8">
            <div className="w-12 h-0.5 bg-[#F49611] mb-3"></div>
            <h2 className="text-4xl font-bold text-[#113262] mb-6">
              Frequently Asked Questions About Business Startups
            </h2>
            <p className="text-gray-600 mb-8">
              Get answers to common questions about our business startup advisory services. 
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