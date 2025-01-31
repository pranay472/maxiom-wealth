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
      question: "How does financial planning aid in buying a home?",
      answer: "Proper financial planning ensures you buy a home without compromising other financial goals. Our advice makes the journey smoother and financially sound."
    },
    {
      question: "Why choose a SEBI-registered advisor?",
      answer: "A SEBI-registered advisor, like us, ensures transparency, trustworthiness, and adherence to strict guidelines for your benefit."
    },
    {
      question: "Can I get help with loan strategies?",
      answer: "Absolutely! We guide you in finding and financing your ideal home, ensuring you get the best terms."
    },
    {
      question: "How do you ensure the best deal?",
      answer: "Our negotiation strategies, backed by extensive market research, guarantee you get the best deal for your dream house."
    },
    {
      question: "Is my financial data secure with your web app?",
      answer: "Our integrated platforms are designed with the highest security measures, safeguarding your data at all times."
    },
    {
      question: "What if my property goals change?",
      answer: "Our continuous support and client-first approach ensure we adapt to your evolving needs and goals."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-24">
      <div className="flex flex-col md:flex-row gap-16">
        <div className="md:w-1/3">
          <div className="sticky top-8">
            <div className="w-12 h-0.5 bg-[#F49611] mb-3"></div>
            <h2 className="text-4xl font-bold text-[#113262] mb-6">
              Frequently Asked Questions About Home Purchase
            </h2>
            <p className="text-gray-600 mb-8">
              Get answers to common questions about our home purchase planning services. 
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