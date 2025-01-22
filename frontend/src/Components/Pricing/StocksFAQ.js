import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        className="w-full py-6 flex justify-between items-center text-left hover:text-blue-700 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-blue-900">{question}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-blue-600" />
        ) : (
          <ChevronDown className="h-5 w-5 text-blue-600" />
        )}
      </button>
      {isOpen && (
        <div className="pb-6 text-gray-600 text-base leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
};

const StocksFAQ = () => {
  const faqs = [
    {
      question: "What is your brokerage fee structure?",
      answer: "We offer a flat fee structure of ₹20 per executed order, regardless of the trade value. This transparent pricing ensures you know exactly what you're paying for each trade, whether it's a small or large transaction. There are no hidden charges or percentage-based fees."
    },
    {
      question: "Do you provide research and trading recommendations?",
      answer: "Yes, we provide comprehensive research reports, real-time market analysis, and actionable trading recommendations. Our research team covers various sectors and stocks listed on NSE and BSE, offering both fundamental and technical analysis to help you make informed investment decisions."
    },
    {
      question: "What trading platforms do you offer?",
      answer: "We offer multiple trading platforms including a web-based platform, mobile app, and desktop terminal. All platforms feature real-time quotes, advanced charting tools, research insights, and seamless order execution. Our platforms are designed for both beginners and experienced traders."
    },
    {
      question: "How do I open a trading account?",
      answer: "Opening a trading account is simple and fully digital. You'll need your PAN card, Aadhaar card, and a bank account. The entire process can be completed online in about 15 minutes. Our team will guide you through the e-KYC process and account activation."
    },
    {
      question: "What types of orders can I place?",
      answer: "We support various order types including Market, Limit, Stop Loss, and Bracket Orders. You can trade in Cash, Futures & Options, Intraday, and Delivery segments. Our platforms also support Good Till Cancelled (GTC) and Good Till Date (GTD) orders."
    },
    {
      question: "Is there any account maintenance charge?",
      answer: "We charge a nominal Annual Maintenance Charge (AMC) of ₹300 for your demat account. There are no additional maintenance charges for your trading account. The AMC is billed annually and covers all depository participant services."
    },
    {
      question: "What about margin trading facilities?",
      answer: "We offer margin trading with competitive leverage ratios based on SEBI guidelines. The margin requirements vary by segment and security. We provide clear margin calculators and real-time margin information through our trading platforms."
    },
    {
      question: "How secure is trading with you?",
      answer: "We implement bank-grade security measures including 2-factor authentication, encryption, and secure socket layer (SSL) protection. Your funds and securities are held in segregated accounts, and we're regulated by SEBI, NSE, and BSE."
    },
    {
      question: "What educational resources do you provide?",
      answer: "We offer comprehensive educational resources including webinars, video tutorials, trading guides, and market insights. Our learning center covers topics from basic stock market concepts to advanced trading strategies, suitable for all experience levels."
    },
    {
      question: "What is your customer support availability?",
      answer: "Our customer support is available from 9 AM to 6 PM on all trading days. You can reach us through multiple channels including phone, email, and chat. We also provide dedicated relationship managers for premium accounts."
    }
  ];

  return (
    <div className="mt-24 py-16 bg-gradient-to-br from-[#F5F5F5] via-white to-[#E8EEF6] relative overflow-hidden w-full">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-30 translate-x-1/2 translate-y-1/2"></div>
      
      <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">
        Frequently Asked Questions
      </h2>
      <div className="max-w-[1200px] mx-auto px-6">
        {faqs.map((faq, index) => (
          <FAQItem key={index} {...faq} />
        ))}
      </div>
    </div>
  );
};

export default StocksFAQ;