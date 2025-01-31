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
      question: "How secure is the transfer?",
      answer: "Every transaction is encrypted and monitored. Our SEBI registration and ISO certification further bolster security, ensuring peace of mind."
    },
    {
      question: "Are there hidden charges?",
      answer: "No, our process is transparent. We guide you through all potential costs, ensuring no unpleasant surprises."
    },
    {
      question: "How do currency exchange strategies work?",
      answer: "Through monitoring and insights, we help you transfer when rates are most favourable, maximising the value of your money."
    },
    {
      question: "Can I set regular transfers?",
      answer: "Absolutely, regular remittance plans ensure your child has funds when needed."
    },
    {
      question: "How do you offer support to students directly?",
      answer: "We provide financial advisory for students overseas, ensuring they manage received funds optimally."
    },
    {
      question: "What sets your service apart?",
      answer: "Our unique, unbiased approach, integrated tech solutions, and deep market expertise ensure unparalleled service quality."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-24">
      <div className="flex flex-col md:flex-row gap-16">
        <div className="md:w-1/3">
          <div className="sticky top-8">
            <div className="w-12 h-0.5 bg-[#F49611] mb-3"></div>
            <h2 className="text-4xl font-bold text-[#113262] mb-6">
              Frequently Asked Questions About Money Transfer
            </h2>
            <p className="text-gray-600 mb-8">
              Get answers to common questions about sending money to your child studying abroad. 
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
