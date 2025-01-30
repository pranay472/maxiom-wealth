import React, { useState } from 'react';
import { 
  Network, 
  Search, 
  BarChart, 
  ChevronDown, 
  ArrowRight,
  MessageSquare
} from 'lucide-react';

export const WhyChooseUs = () => {
  const features = [
    {
      icon: Network,
      title: "Deal Flow Access",
      description: "Direct access to pre-screened PE opportunities across growth stages with our extensive network of partners."
    },
    {
      icon: Search,
      title: "Due Diligence Capabilities",
      description: "Comprehensive evaluation framework combining financial, operational, and strategic assessment methodologies."
    },
    {
      icon: BarChart,
      title: "Exit Track Record",
      description: "Proven experience in timing and structuring PE exits to maximize returns while managing risks."
    }
  ];

  return (
    <div className="bg-[#E8EEF6] py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="w-12 h-0.5 bg-[#F49611] mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-[#113262] mb-4">
            Why Choose Us
          </h2>
          <p className="text-gray-600">
            Expertise and capabilities that set us apart in private equity investments
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-[#E8EEF6] flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-[#1C52A0]" />
              </div>
              
              <h3 className="text-xl font-semibold text-[#113262] mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
  
  const faqs = [
    {
      question: "What is the minimum investment requirement for PE?",
      answer: "Our private equity investments typically start from ₹5 crores, allowing investors to access institutional-quality PE opportunities while maintaining appropriate portfolio diversification."
    },
    {
      question: "How long is the typical investment horizon?",
      answer: "PE investments generally have a 5-7 year horizon, though some opportunities may have shorter or longer durations based on the investment strategy and exit opportunities."
    },
    {
      question: "How do you manage investment risks?",
      answer: "We employ a comprehensive risk management framework including thorough due diligence, diversification across sectors and stages, and active monitoring of portfolio companies."
    },
    {
      question: "What types of returns can investors expect?",
      answer: "While returns vary based on investment strategy and market conditions, we target IRR in the range of 20-25% over the investment period through a combination of operational improvements and strategic growth."
    }
  ];

  return (
    <div className="bg-white py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="w-12 h-0.5 bg-[#F49611] mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-[#113262] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600">
            Common questions about private equity investments
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full flex items-center justify-between p-6 bg-[#E8EEF6] rounded-lg text-left hover:bg-[#E8EEF6]/80 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <span className="text-lg font-medium text-[#113262]">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-[#1C52A0] transform transition-transform ${openIndex === index ? 'rotate-180' : ''}`} 
                />
              </button>
              
              {openIndex === index && (
                <div className="p-6 bg-white border border-[#E8EEF6] rounded-b-lg mt-1">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const CTA = () => {
  return (
    <div className="bg-[#113262] py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <h2 className="text-3xl font-bold">
              Ready to Explore Private Equity Investments?
            </h2>
            <p className="text-white/80 text-lg">
              Schedule a consultation with our PE experts to discuss your investment goals and explore opportunities.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-[#F49611]" />
                </div>
                <span>Expert consultation and portfolio review</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <BarChart className="w-5 h-5 text-[#F49611]" />
                </div>
                <span>Customized investment strategy</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input 
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1C52A0] focus:border-[#1C52A0] outline-none transition-colors"
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input 
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1C52A0] focus:border-[#1C52A0] outline-none transition-colors"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input 
                  type="tel"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1C52A0] focus:border-[#1C52A0] outline-none transition-colors"
                  placeholder="Enter your phone number"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#F49611] hover:bg-[#F6A839] text-white py-4 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors"
              >
                Schedule Consultation
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const AdditionalSections = () => {
  return (
    <>
      <WhyChooseUs />
      <FAQ />
      <CTA />
    </>
  );
};

export default AdditionalSections;