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
      question: "What is goal-based investing and how does it work?",
      answer: "Goal-based investing is a strategic approach that aligns your investment portfolio with your specific life objectives. Instead of focusing solely on returns, we create personalized investment strategies that consider your timeline, risk tolerance, and the specific amount needed to achieve each goal. This approach provides clearer direction and better measurability of your investment progress."
    },
    {
      question: "What makes your goal-based investment approach unique?",
      answer: "Our approach combines the Roots & Wings investment philosophy with sophisticated analytics. We focus on capital preservation (Roots) while seeking growth opportunities (Wings). Each portfolio is scientifically constructed using our proprietary goal-mapping system, ensuring optimal asset allocation with regular rebalancing to maintain alignment with your objectives."
    },
    {
      question: "What is the minimum investment amount required?",
      answer: "As per SEBI regulations for portfolio management services, the minimum investment amount is ₹50 lakhs. However, we can create customized goal-based strategies within this framework to address multiple financial objectives simultaneously."
    },
    {
      question: "How do you monitor progress towards my goals?",
      answer: "We implement a comprehensive monitoring system that tracks your progress using both traditional metrics and goal-specific indicators. This includes quarterly performance reviews, risk assessments, and goal-alignment checks. Our system automatically flags any deviations from the target path, allowing for timely adjustments to keep you on track."
    },
    {
      question: "Can I modify my goals or investment strategy?",
      answer: "Yes, our goal-based investment framework is designed to be flexible. Life circumstances and objectives can change, and we adjust your investment strategy accordingly. We conduct regular reviews to ensure your portfolio remains aligned with your evolving goals while maintaining optimal risk-return characteristics."
    },
    {
      question: "How do you manage risk in goal-based portfolios?",
      answer: "We employ a multi-layered risk management approach. Each goal has its own risk profile based on its timeline and importance. We use our Roots & Wings philosophy to balance capital preservation with growth, implementing sophisticated hedging strategies when necessary. Regular stress testing ensures your portfolio remains resilient under various market conditions."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-24">
      <div className="flex flex-col md:flex-row gap-16">
        <div className="md:w-1/3">
          <div className="sticky top-8">
            <div className="w-12 h-0.5 bg-[#F49611] mb-3"></div>
            <h2 className="text-4xl font-bold text-[#113262] mb-6">
              Common Questions About Goal-Based Investing
            </h2>
            <p className="text-gray-600 mb-8">
              Get answers to frequently asked questions about our goal-based investment approach. 
              For more detailed discussions, our investment experts are ready to help.
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