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
      question: "When should I start planning for retirement?",
      answer: "The best time to start retirement planning is as early as possible. Early planning allows you to harness the power of compounding and build a substantial retirement corpus. Our expertise shows that starting in your 30s or earlier can significantly reduce the monthly investment needed to achieve your retirement goals. We factor in inflation, life expectancy, and your desired lifestyle to create a personalized retirement roadmap."
    },
    {
      question: "How do you help generate regular income post-retirement?",
      answer: "We create structured investment solutions designed to provide steady post-retirement income streams. Our approach combines multiple strategies including systematic withdrawal plans, dividend-yielding investments, and fixed-income securities. We help you build a balanced portfolio that not only generates regular income but also maintains growth potential to counter inflation."
    },
    {
      question: "What's the minimum investment amount for retirement planning?",
      answer: "While our portfolio management services require a minimum investment of ₹50 lakhs as per SEBI regulations, we offer flexible retirement planning solutions within this framework. We can create customized strategies that address both your retirement goals and other financial objectives simultaneously, optimizing your investment for maximum efficiency."
    },
    {
      question: "How do you protect retirement savings from market volatility?",
      answer: "We employ a multi-layered capital preservation approach. This includes strategic asset allocation, regular portfolio rebalancing, and risk management techniques. Our protected growth strategies are designed to safeguard your retirement savings while still maintaining growth potential. As you near retirement, we gradually shift to more conservative investments to protect your accumulated wealth."
    },
    {
      question: "How do you account for inflation in retirement planning?",
      answer: "Inflation is a crucial factor in our retirement planning process. We use sophisticated financial modeling that incorporates projected inflation rates to ensure your retirement corpus maintains its purchasing power. Our inflation-adjusted planning considers both general inflation and specific cost increases in healthcare and lifestyle expenses to create a future-proof retirement strategy."
    },
    {
      question: "Can I modify my retirement plan as my circumstances change?",
      answer: "Yes, our retirement planning framework is designed to be flexible and adaptable. Life circumstances, financial goals, and market conditions can change, and we adjust your retirement strategy accordingly. We conduct regular reviews to ensure your portfolio remains aligned with your retirement goals while maintaining optimal risk-return characteristics. Our team proactively suggests adjustments based on changing market conditions and your evolving needs."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-24">
      <div className="flex flex-col md:flex-row gap-16">
        <div className="md:w-1/3">
          <div className="sticky top-8">
            <div className="w-12 h-0.5 bg-[#F49611] mb-3"></div>
            <h2 className="text-4xl font-bold text-[#113262] mb-6">
              Common Questions About Retirement Planning
            </h2>
            <p className="text-gray-600 mb-8">
              Get answers to frequently asked questions about our retirement planning services and strategies. 
              For personalized retirement advice, our financial experts are ready to help.
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