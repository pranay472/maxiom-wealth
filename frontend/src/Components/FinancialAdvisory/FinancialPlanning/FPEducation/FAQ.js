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
      question: "What is education financial planning and why is it important?",
      answer: "Education financial planning is a strategic approach to saving and investing for your child's educational expenses. It helps you proactively manage the rising costs of education, whether in India or abroad, by creating a dedicated financial strategy that covers tuition, living expenses, study materials, and potential additional costs like entrance exams and skill development programs."
    },
    {
      question: "How early should I start planning for my child's education?",
      answer: "The earlier, the better. Ideally, you should start planning for your child's education as soon as possible, preferably when they are very young. This allows you to leverage the power of compounding, spread out your investments, and build a substantial corpus with lower monthly contributions. Our experts recommend starting at least 5-10 years before the expected education timeline."
    },
    {
      question: "What educational expenses does your financial planning cover?",
      answer: "Our education financial planning comprehensively covers various expenses including undergraduate and postgraduate tuition fees, accommodation costs, study materials, international exam preparations (like GMAT, GRE, SAT), travel expenses, living costs, and even emergency funds. We create a holistic plan that considers both domestic and international educational opportunities."
    },
    {
      question: "How do you help manage the financial risks of education planning?",
      answer: "We employ a multi-faceted risk management approach. This includes diversified investment strategies, creating inflation-adjusted education funds, considering currency fluctuations for overseas education, and building contingency funds. We also provide guidance on education loans, scholarships, and alternative funding options to minimize financial strain."
    },
    {
      question: "Can you help plan for different types of educational goals?",
      answer: "Absolutely. Our education financial planning is highly customizable. Whether you're planning for undergraduate studies in India, postgraduate education abroad, professional courses, or specialized skill development programs, we create tailored strategies. We consider factors like your child's academic interests, potential career paths, and your financial capabilities."
    },
    {
      question: "What makes Maxiom Wealth's education financial planning unique?",
      answer: "Our approach combines deep financial expertise with personalized guidance. We use advanced financial modeling to project future education costs, leverage tax-efficient investment vehicles, and provide continuous portfolio monitoring. With experience in planning for over 500 families, we offer insights into emerging educational trends, scholarship opportunities, and strategic investment approaches."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-24">
      <div className="flex flex-col md:flex-row gap-16">
        <div className="md:w-1/3">
          <div className="sticky top-8">
            <div className="w-12 h-0.5 bg-[#F49611] mb-3"></div>
            <h2 className="text-4xl font-bold text-[#113262] mb-6">
              Frequently Asked Questions About Education Financial Planning
            </h2>
            <p className="text-gray-600 mb-8">
              Get answers to common questions about our education financial planning services. 
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