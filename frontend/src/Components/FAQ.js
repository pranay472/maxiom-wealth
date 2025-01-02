import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import '../Styles/FAQ.css';

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
    <div className="faq-section">
      <button 
        className="faq-trigger"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="faq-content"
      >
        <div className="faq-trigger-content">
          <HelpCircle size={20} />
          <span>Frequently Asked Questions</span>
          <ChevronDown 
            size={20} 
            className={`chevron-icon ${isOpen ? 'rotate' : ''}`}
          />
        </div>
      </button>
      
      <div 
        id="faq-content"
        className={`faq-content ${isOpen ? 'open' : ''}`}
        aria-hidden={!isOpen}
      >
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button 
                className="faq-question-button"
                onClick={() => toggleQuestion(index)}
                aria-expanded={openQuestions[index]}
              >
                <h3 className="faq-question">{faq.question}</h3>
                <ChevronDown 
                  size={16} 
                  className={`faq-chevron ${openQuestions[index] ? 'rotate' : ''}`}
                />
              </button>
              <div className={`faq-answer ${openQuestions[index] ? 'show' : ''}`}>
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;




//import '../Styles/FAQ.css';