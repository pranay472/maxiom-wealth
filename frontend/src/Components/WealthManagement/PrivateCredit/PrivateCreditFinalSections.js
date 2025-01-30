import React, { useState } from 'react';
import { 
  TrendingUp, 
  BarChart2, 
  Shield, 
  PieChart,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  MessageSquare,
  CircleDot
} from 'lucide-react';

export const Advantages = () => {
  const advantages = [
    {
      icon: TrendingUp,
      title: "Higher Yields",
      description: "Potential for higher returns compared to traditional fixed income",
      stats: "12-15%",
      statsLabel: "Target IRR"
    },
    {
      icon: BarChart2,
      title: "Regular Income",
      description: "Periodic interest payments providing steady cash flow",
      stats: "Quarterly",
      statsLabel: "Distributions"
    },
    {
      icon: PieChart,
      title: "Portfolio Diversification",
      description: "Low correlation with traditional asset classes",
      stats: "Low",
      statsLabel: "Market Correlation"
    },
    {
      icon: Shield,
      title: "Downside Protection",
      description: "Structured deals with security and covenants",
      stats: "100%",
      statsLabel: "Secured Lending"
    }
  ];

  return (
    <div className="bg-white py-24">
      <div className="container mx-auto px-4">
        {/* Header with Side Line */}
        <div className="flex items-center gap-6 mb-16">
          <div className="w-24 h-0.5 bg-[#F49611]" />
          <div>
            <h2 className="text-3xl font-bold text-[#113262]">
              Advantages of Private Credit
            </h2>
            <p className="text-gray-600 mt-2">
              Strategic benefits of private credit investments
            </p>
          </div>
        </div>

        {/* Advantages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <div 
              key={index}
              className="group relative"
            >
              {/* Card Front */}
              <div className="bg-[#E8EEF6] rounded-lg p-8 relative z-10 group-hover:translate-y-1 transition-transform duration-300">
                <advantage.icon className="w-8 h-8 text-[#1C52A0] mb-6" />
                <div className="text-3xl font-bold text-[#113262] mb-2">
                  {advantage.stats}
                </div>
                <div className="text-sm text-gray-600 mb-4">
                  {advantage.statsLabel}
                </div>
                <h3 className="text-xl font-semibold text-[#113262] mb-3">
                  {advantage.title}
                </h3>
                <p className="text-gray-600">
                  {advantage.description}
                </p>
              </div>
              
              {/* Background Decoration */}
              <div className="absolute inset-0 bg-[#1C52A0] rounded-lg transform translate-y-2 group-hover:translate-y-3 transition-transform duration-300" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const InvestmentProcess = () => {
  const steps = [
    {
      title: "Initial Consultation",
      description: "Understanding your investment objectives and risk profile",
      features: [
        "Risk assessment",
        "Investment horizon planning",
        "Return expectations"
      ]
    },
    {
      title: "Strategy Development",
      description: "Creating a customized private credit investment strategy",
      features: [
        "Portfolio allocation",
        "Risk management framework",
        "Investment guidelines"
      ]
    },
    {
      title: "Due Diligence",
      description: "Thorough evaluation of investment opportunities",
      features: [
        "Credit analysis",
        "Risk assessment",
        "Structure optimization"
      ]
    },
    {
      title: "Portfolio Construction",
      description: "Building a diversified private credit portfolio",
      features: [
        "Investment execution",
        "Portfolio monitoring",
        "Performance tracking"
      ]
    },
    {
      title: "Ongoing Monitoring",
      description: "Regular portfolio review and risk management",
      features: [
        "Performance reporting",
        "Risk monitoring",
        "Portfolio rebalancing"
      ]
    }
  ];

  return (
    <div className="bg-[#E8EEF6] py-24 relative">
      <div className="container mx-auto px-4">
        {/* Center Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="w-12 h-0.5 bg-[#F49611] mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-[#113262] mb-4">
            Investment Process
          </h2>
          <p className="text-gray-600">
            Our systematic approach to private credit investments
          </p>
        </div>

        {/* Process Steps */}
        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="group relative"
            >
              {/* Connecting Line */}
              {index !== steps.length - 1 && (
                <div className="absolute left-[27px] top-14 bottom-0 w-0.5 bg-[#1C52A0]/20 group-hover:bg-[#1C52A0] transition-colors" />
              )}
              
              <div className="flex gap-8 mb-8">
                {/* Step Number */}
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#1C52A0] text-white flex items-center justify-center font-bold text-xl group-hover:bg-[#F49611] transition-colors">
                  {index + 1}
                </div>

                {/* Content Card */}
                <div className="flex-grow bg-white rounded-lg p-8 shadow-sm group-hover:shadow-md transition-all">
                  <h3 className="text-xl font-semibold text-[#113262] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {step.description}
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4">
                    {step.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-gray-600">
                        <CircleDot className="w-4 h-4 text-[#F49611]" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
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
      question: "What is the minimum investment requirement?",
      answer: "Our private credit investments typically require a minimum investment of ₹1 crore, allowing investors to access institutional-quality opportunities while maintaining appropriate portfolio diversification."
    },
    {
      question: "What are the expected returns?",
      answer: "While returns vary based on specific opportunities and market conditions, our private credit investments typically target returns in the range of 12-15% IRR. However, past performance is not indicative of future returns."
    },
    {
      question: "How long is the investment horizon?",
      answer: "The typical investment horizon ranges from 3-5 years, depending on the specific strategy and opportunity. Some investments may have shorter or longer durations based on the underlying credit structure."
    },
    {
      question: "How do you manage risks in private credit investments?",
      answer: "We employ a comprehensive risk management framework including thorough due diligence, diversification, security structures, and ongoing monitoring. All investments are secured and include various covenants for investor protection."
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
            Common questions about private credit investments
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
              Start Your Private Credit Investment Journey
            </h2>
            <p className="text-white/80 text-lg">
              Connect with our experts to explore private credit opportunities that align with your investment goals.
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
                  <CheckCircle2 className="w-5 h-5 text-[#F49611]" />
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

const PrivateCreditFinalSections = () => {
  return (
    <>
      <Advantages />
      <InvestmentProcess />
      <FAQ />
      <CTA />
    </>
  );
};

export default PrivateCreditFinalSections;