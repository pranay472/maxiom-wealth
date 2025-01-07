import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'What is the investment objective of JEWEL PMS?',
    answer: 'To achieve long-term capital appreciation by investing in a mix of large, mid-cap and the larger among small-cap companies that meet the Roots & Wings investment criteria.'
  },
  {
    question: 'What is the Roots & Wings investment philosophy?',
    answer: 'Our philosophy combines "Roots" (focus on wealth preservation through low debt companies, consistent ROE/ROCE, and strong promoter integrity) with "Wings" (emphasis on growth in sales, profits, cash flows, business resilience, and market leadership).'
  },
  {
    question: 'What is your investment horizon?',
    answer: '3 to 5 years and above, focusing on long-term capital appreciation through quality growth companies.'
  },
  {
    question: 'What is your benchmark?',
    answer: 'We use Nifty 50 TRI as our benchmark for comprehensive market performance reference and effective evaluation of investment returns.'
  },
  {
    question: 'What has been your recent performance?',
    answer: 'For Discretionary PMS: Current Year (April 2024 - September 2024): 20.31%, FY 2023-24: 7.07%. For Non-Discretionary PMS: Current Year: 23.19%, FY 2023-24: 17.73%. Note: Past performance is not indicative of future returns.'
  },
  {
    question: 'How do you manage investment risks?',
    answer: 'We manage market risk, liquidity risk, and concentration risk through our early risk detection system and dynamic portfolio management approach.'
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#113262] text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full flex items-center justify-between p-4 bg-[#F8F9FA] rounded-lg hover:bg-[#E8EEF6] transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-left font-semibold text-[#113262]">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-[#1C52A0]" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-[#1C52A0]" />
                )}
              </button>
              {openIndex === index && (
                <div className="p-4 bg-white border border-[#E8EEF6] rounded-b-lg">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;