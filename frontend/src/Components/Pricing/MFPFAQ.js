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

const MFPFAQ = () => {
  const faqs = [
    {
      question: "What's the difference between Direct and Regular plans?",
      answer: "Direct plans have lower expense ratios as they don't include distributor commissions, potentially leading to higher returns. You pay a monthly subscription fee of ₹299. Regular plans have no direct fee but include distributor commissions in their expense ratio. Both plans require a minimum investment of ₹50,00,000."
    },
    {
      question: "What is the minimum investment period recommended?",
      answer: "We recommend an investment horizon of 3-5 years or more for optimal results. This longer timeframe allows for potential market fluctuations to smooth out over time and provides the opportunity to benefit from compound growth. However, you can withdraw your investments earlier, subject to an exit load of 1% in the first year."
    },
    {
      question: "How do you select mutual funds for investment?",
      answer: "We follow our 'Roots & Wings' philosophy for fund selection. This includes evaluating funds based on multiple criteria: credit quality assessment, calculating proprietary fragility scores, evaluating peer performance through quartile ranking and rolling rank analysis. We also consider factors like fund reputation, manager experience, and avoid funds with low AUM or high churn rates."
    },
    {
      question: "What services are included in portfolio management?",
      answer: "Our services include personalized portfolio construction, continuous fund monitoring, exit alerts, periodic portfolio reviews, asset allocation strategy, tax optimization, and regular market insights. Direct plan subscribers get additional benefits like detailed research reports, retirement planning assistance, and comprehensive credit quality assessments."
    },
    {
      question: "How often is my portfolio reviewed?",
      answer: "We conduct regular portfolio reviews to ensure alignment with your investment goals. This includes monitoring fund performance, risk metrics, and making necessary rebalancing recommendations. Direct plan subscribers receive more detailed analysis and personalized recommendations."
    },
    {
      question: "What are the tax implications?",
      answer: "Tax implications vary based on holding period and fund type. Equity funds held over 12 months are subject to long-term capital gains tax of 10% above ₹1 lakh. For debt funds, gains are taxed at 20% with indexation if held for over 36 months. We provide tax optimization strategies as part of our service, particularly for Direct plan subscribers."
    },
    {
      question: "Can I exit my investments at any time?",
      answer: "Yes, you can exit your investments at any time. However, there is a 1% exit load if you withdraw within the first year. After the first year, there are no exit charges. Redemption requests are typically processed within 2-3 business days, subject to mutual fund scheme terms."
    },
    {
      question: "How do you handle risk management?",
      answer: "We employ multiple risk management strategies including diversification across asset classes, regular monitoring of fund performance, credit quality assessment, and proprietary risk scoring models. We also provide timely exit alerts and rebalancing recommendations to help manage portfolio risk."
    },
    {
      question: "What type of support can I expect?",
      answer: "You'll have access to our team for queries and support. Direct plan subscribers receive more comprehensive support including detailed research reports, personalized portfolio reviews, and retirement planning assistance. All clients receive regular updates and alerts about their investments."
    },
    {
      question: "How are mutual fund returns calculated?",
      answer: "Returns are calculated based on the change in Net Asset Value (NAV) plus any dividends distributed. For Regular plans, returns are net of all fees including distributor commissions. For Direct plans, returns are typically higher due to lower expense ratios, even after accounting for the monthly subscription fee."
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

export default MFPFAQ;