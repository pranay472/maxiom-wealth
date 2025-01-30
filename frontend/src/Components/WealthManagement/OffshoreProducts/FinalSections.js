import React, { useState } from 'react';
import { Shield, ChevronDown, Mail, Phone, Calendar, Globe } from 'lucide-react';

const ComplianceSection = () => {
  return (
    <div className="bg-[#E8EEF6]">
      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-12 h-0.5 bg-[#F49611]"></div>
              <span className="text-[#F49611] font-medium uppercase tracking-wider text-sm">Regulatory Framework</span>
            </div>
            <h2 className="text-3xl font-bold text-[#113262] mb-6">
              Compliant International Investing
            </h2>
            <p className="text-gray-600 mb-8">
              Our offshore investment solutions operate within established regulatory frameworks, ensuring compliance with both Indian and international regulations.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {[
              {
                title: "GIFT City Framework",
                points: [
                  "IFSCA regulated structures",
                  "RBI approved investment routes",
                  "Regulatory reporting compliance",
                  "Transaction monitoring"
                ]
              },
              {
                title: "Singapore Framework",
                points: [
                  "MAS regulated vehicles",
                  "International compliance",
                  "Investor protection",
                  "Transparent operations"
                ]
              }
            ].map((framework, index) => (
              <div key={index} className="bg-white rounded-xl p-6">
                <h3 className="text-lg font-bold text-[#113262] mb-4">{framework.title}</h3>
                <ul className="space-y-3">
                  {framework.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-[#F49611] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What are the minimum investment requirements for offshore products?",
      answer: "Investment minimums vary by product. GIFT City AIFs typically have minimum investments of USD 150,000, while Singapore funds may have different requirements. Our team can provide specific details based on your chosen investment vehicle."
    },
    {
      question: "How are international investments taxed?",
      answer: "Taxation depends on the investment vehicle chosen. GIFT City AIFs have specific tax advantages, while Singapore-based investments follow different tax treatments. We provide detailed tax implications during consultation."
    },
    {
      question: "What is the process for repatriation of funds?",
      answer: "Fund repatriation follows RBI guidelines and varies by investment vehicle. The process is streamlined through our regulated structures, with clear documentation and compliance procedures."
    },
    {
      question: "How do you manage currency risk in offshore investments?",
      answer: "Currency risk management strategies are implemented based on the investment vehicle and market conditions. This may include natural hedges, currency overlays, or other risk management tools."
    },
    {
      question: "What types of global markets can I access?",
      answer: "Through our offshore solutions, you can access US equity markets, emerging market equities, and global bond markets. The specific access depends on the chosen investment vehicle and strategy."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-24">
      <div className="grid md:grid-cols-12 gap-16">
        <div className="md:col-span-4">
          <div className="sticky top-8">
            <div className="w-12 h-0.5 bg-[#F49611] mb-3"></div>
            <h2 className="text-3xl font-bold text-[#113262] mb-6">
              Common Questions About Offshore Investing
            </h2>
            <p className="text-gray-600">
              Find answers to frequently asked questions about our offshore investment solutions. For more specific queries, please contact our investment team.
            </p>
          </div>
        </div>

        <div className="md:col-span-8">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200">
              <button
                className="w-full py-6 flex justify-between items-start text-left"
                onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
              >
                <h3 className="text-lg font-semibold text-[#113262] pr-8">{faq.question}</h3>
                <ChevronDown 
                  className={`w-5 h-5 text-[#F49611] transform transition-transform duration-200 mt-1 ${
                    index === openIndex ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  index === openIndex ? 'max-h-48 pb-6' : 'max-h-0'
                }`}
              >
                <p className="text-gray-600 pr-8">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const CTASection = () => {
  return (
    <div className="bg-[#113262]">
      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">
              Start Your Global Investment Journey
            </h2>
            <p className="text-white/80 text-lg mb-12">
              Connect with our investment specialists to explore international market opportunities through our regulated offshore investment solutions.
            </p>
            <div className="space-y-6">
              {[
                {
                  icon: Phone,
                  text: "Schedule a Call",
                  subtext: "+91 9550290118"
                },
                {
                  icon: Mail,
                  text: "Email Us",
                  subtext: "info@maxiomwealth.com"
                },
                {
                  icon: Calendar,
                  text: "Book a Consultation",
                  subtext: "Choose a convenient time"
                }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4 text-white">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">{item.text}</div>
                    <div className="text-white/70 text-sm">{item.subtext}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-8">
            <h3 className="text-2xl font-bold text-[#113262] mb-6">Request Information</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#1C52A0] focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#1C52A0] focus:border-transparent"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Investment Amount Range</label>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#1C52A0] focus:border-transparent">
                  <option>$150,000 - $500,000</option>
                  <option>$500,000 - $1,000,000</option>
                  <option>Above $1,000,000</option>
                </select>
              </div>
              <button 
                type="submit"
                className="w-full bg-[#F49611] hover:bg-[#F6A839] text-white font-semibold py-4 rounded-lg transition-colors"
              >
                Request Consultation
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const FinalSections = () => {
  return (
    <>
      <ComplianceSection />
      <FAQSection />
      <CTASection />
    </>
  );
};

export default FinalSections;