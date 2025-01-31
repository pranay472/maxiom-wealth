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
      question: "How can a Corporate Financial Wellness program benefit my employees?",
      answer: "A Corporate Financial Wellness program can significantly improve employee productivity and satisfaction by reducing financial stress. Our program provides personalized financial education, retirement planning guidance, and investment advisory services. This comprehensive approach helps employees better manage their finances, leading to improved focus at work, reduced absenteeism, and higher retention rates."
    },
    {
      question: "What services are included in your Corporate Financial Wellness program?",
      answer: "Our program includes a wide range of services: personalized financial planning sessions, group workshops on key financial topics, retirement planning guidance, investment advisory services, debt management strategies, and digital tools for financial tracking. We also provide regular financial health check-ups and customized reports to track program effectiveness."
    },
    {
      question: "How do you implement the program across different employee levels?",
      answer: "We design our programs to be inclusive and relevant across all employee levels. For entry-level employees, we focus on basic financial literacy and budgeting. For mid-level employees, we emphasize investment strategies and wealth creation. For senior employees, we provide advanced portfolio management and retirement planning. All programs are customizable to match your organization's specific needs."
    },
    {
      question: "What makes Equirus's Corporate Financial Wellness program unique?",
      answer: "Our program stands out through its personalized approach, expertise, and comprehensive coverage. We combine digital solutions with personal guidance, offer bilingual support, and provide regular progress tracking. Our team of experienced financial advisors ensures that each employee receives tailored advice while maintaining confidentiality. Additionally, we offer integrated solutions that align with your existing employee benefits programs."
    },
    {
      question: "How do you measure the success of the wellness program?",
      answer: "We use multiple metrics to measure program success: employee participation rates, financial wellness scores, program satisfaction surveys, and behavioral change indicators. We provide regular reports showing improvements in financial literacy, retirement readiness, and overall financial well-being. We also track broader organizational impacts like employee retention and productivity improvements."
    },
    {
      question: "Can the program be customized for our company's specific needs?",
      answer: "Yes, our Corporate Financial Wellness program is highly customizable. We begin with a thorough assessment of your organization's needs, employee demographics, and existing benefits structure. Based on this analysis, we create a tailored program that aligns with your company culture and objectives. The program can be scaled and modified as your organization's needs evolve."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-24">
      <div className="flex flex-col md:flex-row gap-16">
        <div className="md:w-1/3">
          <div className="sticky top-8">
            <div className="w-12 h-0.5 bg-[#F49611] mb-3"></div>
            <h2 className="text-4xl font-bold text-[#113262] mb-6">
              Common Questions About Corporate Financial Wellness
            </h2>
            <p className="text-gray-600 mb-8">
              Get answers to frequently asked questions about our Corporate Financial Wellness programs and services. 
              For detailed program information, our experts are ready to help.
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