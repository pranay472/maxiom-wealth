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
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
          <div className="w-20 h-1 bg-gradient-to-r from-secondary-300 to-secondary-200"></div>
        </div>
        <h2 className="text-[32px] leading-[38px] font-bold text-primary-500 mb-3">
          Frequently Asked Questions
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary-300 to-primary-100 mx-auto mb-4"></div>
        <p className="text-neutral-300 text-lg max-w-2xl mx-auto">
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
              <span className="text-secondary-300 ml-4">
                {openIndex === index ? (
                  <div className="relative w-6 h-6 transform transition-transform duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-secondary-300 to-secondary-200 opacity-10 rounded-full"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="w-4 h-4 relative">
                        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-0.5 bg-secondary-300 rounded-full transform rotate-0"></span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="relative w-6 h-6 transform transition-transform duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-secondary-300 to-secondary-200 opacity-10 rounded-full"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="w-4 h-4 relative">
                        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-0.5 bg-secondary-300 rounded-full transform rotate-90"></span>
                        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-0.5 bg-secondary-300 rounded-full"></span>
                      </div>
                    </div>
                    <div className="absolute -inset-1 bg-gradient-to-br from-secondary-300/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                  </div>
                )}
              </span>
            </button>
            
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? 'max-h-96' : 'max-h-0'
              }`}
            >
              <p className="text-neutral-300 text-[16px] leading-[26px] px-6 pb-6">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <button className="bg-gradient-to-r from-secondary-300 to-secondary-200 text-white px-8 py-3 rounded-lg font-semibold hover:from-secondary-400 hover:to-secondary-300 transition-all duration-300">
          Schedule a Consultation
        </button>
      </div>
    </div>
  );
};

export default PMSFaqs;