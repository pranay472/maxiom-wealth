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
      question: "What is comprehensive financial planning and how can it benefit me?",
      answer: "Comprehensive financial planning is a holistic approach that examines all aspects of your financial life - including investments, insurance, taxes, retirement, and estate planning. Our expert team creates a detailed financial blueprint that helps you make informed decisions, optimize your resources, and achieve your life goals while managing risks effectively. This systematic approach ensures that all your financial decisions work together cohesively."
    },
    {
      question: "How do you create a personalized financial plan?",
      answer: "We follow a systematic 4-step process: First, we conduct a thorough assessment of your current financial situation, including assets, liabilities, income, and expenses. Second, we work with you to define clear financial goals and timelines. Third, we develop a comprehensive strategy using our expertise in asset allocation, tax planning, and risk management. Finally, we implement the plan and provide ongoing monitoring and adjustments as needed."
    },
    {
      question: "What services are included in your financial planning package?",
      answer: "Our financial planning service includes strategic asset allocation, tax-efficient investing strategies, comprehensive risk management, retirement planning, estate planning, and regular portfolio reviews. We also provide ongoing support through quarterly performance reviews, annual plan updates, and access to our expert team for any financial queries or concerns."
    },
    {
      question: "How often do you review and update the financial plan?",
      answer: "We conduct quarterly performance reviews and annual comprehensive plan updates. However, we also make immediate adjustments when significant life events occur (marriage, children, inheritance, etc.) or during major market changes. Our proactive approach ensures your financial plan remains aligned with your evolving needs and market conditions."
    },
    {
      question: "What makes Maxiom Wealth's financial planning approach unique?",
      answer: "Our approach combines 25+ years of experience with cutting-edge technology. We use a research-backed methodology for portfolio construction, implement tax-efficient strategies, and focus on comprehensive risk management. Our team's expertise in serving 1000+ families allows us to provide insights and solutions that address both common and unique financial challenges."
    },
    {
      question: "How do you help with retirement planning?",
      answer: "Our retirement planning process involves creating detailed projections of your retirement needs, analyzing various scenarios, and developing strategies to achieve your retirement goals. We consider factors like inflation, healthcare costs, and lifestyle expectations to create a sustainable retirement income plan. We also implement tax-efficient withdrawal strategies and regular portfolio rebalancing to help maintain your retirement lifestyle."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-24">
      <div className="flex flex-col md:flex-row gap-16">
        <div className="md:w-1/3">
          <div className="sticky top-8">
            <div className="w-12 h-0.5 bg-[#F49611] mb-3"></div>
            <h2 className="text-4xl font-bold text-[#113262] mb-6">
              Frequently Asked Questions About Financial Planning
            </h2>
            <p className="text-gray-600 mb-8">
              Get answers to common questions about our comprehensive financial planning services. 
              For personalized guidance, our financial planning experts are here to help.
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