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
      question: "How does financial planning aid during divorce?",
      answer: "A proper financial plan ensures assets division clarity, maximises post-divorce security, and optimises tax benefits. It acts as a roadmap during tumultuous times."
    },
    {
      question: "Do I need to re-evaluate my investments?",
      answer: "Yes, post-divorce financial circumstances change. It's essential to realign investments based on new goals and aspirations."
    },
    {
      question: "How does tax come into play during settlements?",
      answer: "Divorce settlements can have tax implications. Our strategies ensure that you make decisions that are tax-efficient."
    },
    {
      question: "What about joint investments and accounts?",
      answer: "Our expert advisors guide you on dividing joint assets, ensuring a fair distribution and minimising financial disruptions."
    },
    {
      question: "Is insurance essential post-divorce?",
      answer: "Absolutely. Especially if you have dependents, ensuring adequate coverage is crucial for unforeseen circumstances."
    },
    {
      question: "Can I trust the advice to be unbiased?",
      answer: "Yes, our recommendations are data-driven and unbiased, focusing solely on your financial well-being."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-24">
      <div className="flex flex-col md:flex-row gap-16">
        <div className="md:w-1/3">
          <div className="sticky top-8">
            <div className="w-12 h-0.5 bg-[#F49611] mb-3"></div>
            <h2 className="text-4xl font-bold text-[#113262] mb-6">
              Frequently Asked Questions About Divorce Financial Planning
            </h2>
            <p className="text-gray-600 mb-8">
              Get answers to common questions about financial planning during and after divorce.
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
