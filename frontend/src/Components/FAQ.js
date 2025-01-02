import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openQuestions, setOpenQuestions] = useState({});

  const faqs = [
    {
      question: "What is MaxiomWealth's investment philosophy?",
      answer: "We follow a Scientific and Process Driven Investing approach based on our Roots & Wings Investment Philosophy and LSG (Liquidity Safety Growth) Framework. We focus on long-term wealth creation through disciplined, research-backed investment strategies."
    },
    {
      question: "How do I start investing with MaxiomWealth?",
      answer: "You can start by downloading our app or booking a free consultation with our experts. We'll help you create a personalized financial plan based on your goals and risk profile. You can then choose from our various investment options including mutual funds, stocks, and portfolio management services."
    },
    {
      question: "What are the minimum investment amounts?",
      answer: "The minimum investment amount varies by product. For mutual funds, you can start with as little as ₹500 per month through SIPs. For portfolio management services, the minimum investment typically starts at ₹50 lakhs. Contact our team for specific details about each investment option."
    },
    {
      question: "How is my investment secured?",
      answer: "Your investments are held directly in your name and are regulated by SEBI. We follow strict encryption protocols for data security. Your funds are never held by us - they go directly to the respective fund houses or depositories through authorized channels."
    },
    {
      question: "What types of financial planning services do you offer?",
      answer: "We offer comprehensive financial planning services including retirement planning, tax planning, estate planning, goal-based investing, portfolio management, and wealth management. Each service is customized to your specific needs and financial objectives."
    },
    {
      question: "How can I track my investments?",
      answer: "You can track all your investments through our mobile app or web portal. Our platform provides real-time portfolio updates, performance analytics, and detailed reports. You'll also receive regular updates and insights from our research team."
    }
  ];

  const toggleQuestion = (index) => {
    setOpenQuestions(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="w-full max-w-4xl mx-auto mb-12 border border-neutral-700 rounded-lg overflow-hidden">
      <button 
        className="w-full bg-neutral-800 hover:bg-neutral-700 transition-colors duration-300 text-white cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="faq-content"
      >
        <div className="p-4 flex items-center gap-3 text-lg">
          <HelpCircle className="w-5 h-5" />
          <span>Frequently Asked Questions</span>
          <ChevronDown 
            className={`w-5 h-5 ml-auto transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          />
        </div>
      </button>
      
      <div 
        id="faq-content"
        className={`overflow-hidden transition-all duration-300 bg-neutral-900 ${isOpen ? 'max-h-[2000px]' : 'max-h-0'}`}
        aria-hidden={!isOpen}
      >
        <div className="p-6 flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-neutral-800 rounded-lg overflow-hidden">
              <button 
                className="w-full p-5 hover:bg-neutral-700 transition-colors duration-300 flex justify-between items-center gap-4 cursor-pointer"
                onClick={() => toggleQuestion(index)}
                aria-expanded={openQuestions[index]}
              >
                <h3 className="text-white text-left text-base font-semibold m-0">{faq.question}</h3>
                <ChevronDown 
                  className={`w-4 h-4 text-white flex-shrink-0 transition-transform duration-300 ${openQuestions[index] ? 'rotate-180' : ''}`}
                />
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openQuestions[index] ? 'max-h-[500px] p-5' : 'max-h-0'
                }`}
              >
                <p className="text-neutral-400 m-0">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;