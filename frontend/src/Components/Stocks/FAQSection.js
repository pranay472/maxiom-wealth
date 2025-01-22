import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do I start investing in stocks with Maxiom?",
      answer: "Starting your investment journey with Maxiom is simple. Schedule a consultation with our experts, complete the KYC process, and receive personalized guidance on building your stock portfolio."
    },
    {
      question: "What is the minimum amount required to start investing?",
      answer: "You can start investing in stocks with any amount that suits your financial goals. However, we recommend maintaining a diversified portfolio based on your risk profile and investment objectives."
    },
    {
      question: "How often will I receive stock recommendations?",
      answer: "Our research team provides regular stock recommendations based on market conditions and opportunities. You'll receive timely updates through our platform and mobile app."
    },
    {
      question: "What type of stocks does Maxiom recommend?",
      answer: "We recommend stocks based on fundamental analysis, focusing on companies with strong financials, good governance, and growth potential. Our recommendations align with your risk profile and investment goals."
    },
    {
      question: "How can I track my portfolio performance?",
      answer: "You can track your portfolio performance through our web platform and mobile app. We provide detailed analytics, regular performance reports, and insights to help you make informed decisions."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-[#113262] mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Find answers to common questions about investing in stocks with Maxiom
          </p>
        </div>

        {/* Custom FAQ Accordion */}
        <div className="max-w-3xl mx-auto mb-16">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border-b border-gray-200"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between py-4 text-left focus:outline-none"
              >
                <span className="text-[#113262] font-medium">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-[#113262] transition-transform duration-200 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              
              {/* Answer */}
              <div 
                className={`overflow-hidden transition-all duration-200 ${
                  openIndex === index ? 'max-h-40 pb-4' : 'max-h-0'
                }`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <p className="text-lg text-gray-600 mb-6">
            Still have questions? We're here to help!
          </p>
          <button className="w-full max-w-md py-4 px-6 bg-gradient-to-r from-[#1C52A0] to-[#0A1E3A] text-white text-lg font-medium rounded-lg hover:bg-gradient-to-r hover:from-[#0A1E3A] hover:to-[#1C52A0] transition-all duration-300">
            Schedule a Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;