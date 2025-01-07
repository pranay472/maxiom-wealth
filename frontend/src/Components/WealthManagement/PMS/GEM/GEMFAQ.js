import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full py-4 text-left hover:bg-gray-50 transition-colors duration-200"
      >
        <span className="font-medium text-lg text-gray-900">{question}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-gray-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500" />
        )}
      </button>
      {isOpen && (
        <div className="pb-4 px-4">
          <p className="text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  );
};

const GEMFAQ = () => {
  const faqs = [
    {
      question: "What is GEM?",
      answer: "GEM is our investment strategy that combines quality companies with strong market momentum. We invest in companies that are not just fundamentally strong but are also showing positive price trends in the market."
    },
    {
      question: "What is your investment process?",
      answer: "We follow a 5-step process: 1) Screen for quality companies using Roots & Wings, 2) Identify strong momentum indicators, 3) Analyze market trends, 4) Regular monitoring of momentum factors, 5) Make changes based on momentum shifts."
    },
    {
      question: "What are the investment details?",
      answer: "The minimum investment is Rs. 50 lakhs, and the time horizon is best suited for 3-5 years or longer. We focus on companies across market sizes showing strong momentum."
    },
    {
      question: "How do you protect investments?",
      answer: "We focus on fundamentally strong companies, regularly monitor momentum indicators, take quick action if momentum reverses, ensure diversification across sectors, and maintain a balance between quality and momentum factors."
    },
    {
      question: "What are the risk factors to consider?",
      answer: "Momentum strategies can be more volatile, market trends can change quickly, there's a possibility of momentum reversal, and it may lead to temporary underperformance. Investment value can fluctuate significantly."
    },
    {
      question: "Who should invest in GEM?",
      answer: "GEM is ideal for investors who want to capture market trends, can invest for at least 3-5 years, understand market momentum concepts, are comfortable with moderate to high risk, and want a blend of quality and momentum in their portfolio."
    }
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <div className="space-y-2">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default GEMFAQ;