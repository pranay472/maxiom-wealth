import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'Why invest in both large and midcap equities?',
    answer: 'This gives a good balance of risk and return for most investors. Large caps give steady returns whereas midcaps offer a blend of growth and resilience, potentially becoming market leaders.'
  },
  {
    question: 'How do you select stocks?',
    answer: 'Through in-depth research, data analytics, and understanding market dynamics.'
  },
  {
    question: 'How often do you review my portfolio?',
    answer: 'Regular reviews, especially post quarterly results and significant market events, ensure optimal growth.'
  },
  {
    question: 'Is midcap investing risky?',
    answer: 'While there\'s inherent market risk, our strategies are designed to mitigate them effectively.'
  },
  {
    question: 'Do you use any technology for analysis?',
    answer: 'Yes, our proprietary data analytics platform aids in objective stock evaluations.'
  },
  {
    question: 'How can Maxiom Wealth add value?',
    answer: 'With our deep expertise and client-first approach, we aim to maximise your returns.'
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#113262] text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full flex items-center justify-between p-4 bg-[#F8F9FA] rounded-lg hover:bg-[#E8EEF6] transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-left font-semibold text-[#113262]">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-[#1C52A0]" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-[#1C52A0]" />
                )}
              </button>
              {openIndex === index && (
                <div className="p-4 bg-white border border-[#E8EEF6] rounded-b-lg">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;