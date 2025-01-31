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
      question: "Why should I consider gold loan foreclosure?",
      answer: "Foreclosure can provide financial relief and enable swift retrieval of your gold assets."
    },
    {
      question: "Are there any penalties for foreclosure?",
      answer: "Foreclosure charges may apply, but with our guidance, we aim to minimise these costs."
    },
    {
      question: "How soon can I retrieve my gold?",
      answer: "Post foreclosure, the retrieval process is expedited, ensuring you receive your gold promptly."
    },
    {
      question: "Is my gold safe during the process?",
      answer: "Absolutely! Your gold's security is our top priority during the entire procedure."
    },
    {
      question: "Can I refinance my gold loan?",
      answer: "Yes, refinancing is an option. It's crucial to assess the benefits with a financial expert."
    },
    {
      question: "How can you streamline my foreclosure?",
      answer: "With our deep expertise and resources, we'll navigate the intricacies, ensuring a swift and smooth process."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-24">
      <div className="flex flex-col md:flex-row gap-16">
        <div className="md:w-1/3">
          <div className="sticky top-8">
            <div className="w-12 h-0.5 bg-[#F49611] mb-3"></div>
            <h2 className="text-4xl font-bold text-[#113262] mb-6">
              Frequently Asked Questions About Gold Loan Foreclosure
            </h2>
            <p className="text-gray-600 mb-8">
              Get answers to common questions about our gold loan foreclosure services. 
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