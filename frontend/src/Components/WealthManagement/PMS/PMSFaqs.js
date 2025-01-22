import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const PMSFaqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is Portfolio Management Service (PMS)?",
      answer: "PMS is a professional investment service where experienced portfolio managers handle your investment portfolio with a personalized approach. At Maxiom Wealth, we offer various PMS options like Jewel PMS (Top 350 companies), Spark PMS (351-1000 ranked companies), and GEM (momentum and quality focus)."
    },
    {
      question: "What is the minimum investment amount for PMS?",
      answer: "As per SEBI regulations, the minimum investment amount for PMS is Rs. 50 lakhs. This allows us to create a well-diversified portfolio that aligns with your investment objectives and risk profile."
    },
    {
      question: "How is PMS different from Mutual Funds?",
      answer: "Unlike mutual funds where investments are pooled, PMS offers personalized portfolio management with direct ownership of securities. You get transparency in holdings, customization options, and tax-efficient investing strategies tailored to your needs."
    },
    {
      question: "What is the investment approach in Maxiom's PMS?",
      answer: "We follow a scientific and process-driven approach using our proprietary LSG (Liquidity Safety Growth) Framework and Three Eye Fund Selection Framework. Our investment philosophy focuses on creating sustainable wealth through disciplined investing."
    },
    {
      question: "How can I track my PMS investments?",
      answer: "You get access to our advanced portfolio tracking system with detailed reports, real-time updates, and performance analytics. Our dedicated relationship managers also provide regular portfolio reviews and updates."
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto py-16 px-4">
      <div className="text-center mb-16 relative">
        <h2 className="text-[32px] leading-[38px] font-bold text-primary-500 mb-6">
          Frequently Asked Questions
        </h2>
        <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
          Everything you need to know about our premium Portfolio Management Services
        </p>
      </div>

      <div className="divide-y divide-primary-100">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-transparent"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-6 py-6 flex justify-between items-center text-left hover:bg-primary-50/30 transition-colors duration-200"
            >
              <span className="text-[18px] leading-[24px] font-semibold text-primary-500">
                {faq.question}
              </span>
              <span className="text-primary-400 ml-4">
                {openIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-primary-400" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-primary-400" />
                )}
              </span>
            </button>
            
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? 'max-h-96' : 'max-h-0'
              }`}
            >
              <p className="text-neutral-600 text-[16px] leading-[26px] px-6 pb-6">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <button className="w-full max-w-md py-4 px-6 bg-gradient-to-r from-[#1C52A0] to-[#0A1E3A] text-white text-lg font-medium rounded-lg hover:bg-gradient-to-r hover:from-[#0A1E3A] hover:to-[#1C52A0] transition-all duration-300">
          Schedule a Consultation
        </button>
      </div>
    </div>
  );
};

export default PMSFaqs;