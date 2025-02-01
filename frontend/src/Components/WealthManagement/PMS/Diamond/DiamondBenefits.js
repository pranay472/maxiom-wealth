import React, { useState } from 'react';
import { ArrowUpRight, Shield, Target, Brain, BarChart3, HeartHandshake } from 'lucide-react';

const DiamondBenefits = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const benefits = [
    {
      icon: <Target className="w-10 h-10" />,
      title: "Retirement Focus",
      description: "Specialized strategy for retirement planning with emphasis on stable income generation and capital preservation for long-term sustainability"
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Risk Management",
      description: "Focus on high credit quality investments, stable yields, and low volatility to protect your retirement corpus"
    },
    {
      icon: <Brain className="w-10 h-10" />,
      title: "Diversified Portfolio",
      description: "Investment across multiple asset classes including equity, debt, REITs, InvITs, and gold for balanced returns"
    },
    {
      icon: <ArrowUpRight className="w-10 h-10" />,
      title: "Fiduciary Commitment",
      description: "Registered with SEBI, we prioritise your retirement needs, offering transparent advice and portfolio management"
    },
    {
      icon: <BarChart3 className="w-10 h-10" />,
      title: "Regular Income",
      description: "Strategy designed to provide dependable income streams for retirees through careful asset selection"
    },
    {
      icon: <HeartHandshake className="w-10 h-10" />,
      title: "Customer-Centric Service",
      description: "Dedicated support for retirement planning needs with responsive and personalized service"
    }
  ];

  return (
    <div className="relative bg-[#113262] py-20 overflow-x-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#1C52A0]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F49611]/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4">
        {/* Heading Section */}
        <div className="mb-16 relative">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="h-px w-12 bg-[#F49611]"></div>
            <span className="text-[#F6A839] uppercase tracking-wider text-sm font-medium">DIAMOND PMS Benefits</span>
            <div className="h-px w-12 bg-[#F49611]"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-center leading-tight max-w-4xl mx-auto">
            <span className="text-[#E8EEF6]">Secure Your Retirement Journey</span>
            <span className="block text-[#F6A839] mt-2">with Maxiom Wealth DIAMOND PMS</span>
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: Interactive List */}
          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`group cursor-pointer transition-all duration-300 ${
                  activeIndex === index 
                    ? 'bg-[#1C52A0]/20 scale-102 transform' 
                    : 'hover:bg-[#1C52A0]/10 hover:scale-102 transform'
                } rounded-lg p-6`}
                onMouseEnter={() => setActiveIndex(index)}
              >
                <div className="flex items-start space-x-4">
                  <div className={`flex-shrink-0 p-2 rounded-lg transition-colors duration-300 ${
                    activeIndex === index ? 'bg-[#F49611]/20' : 'bg-[#F49611]/10'
                  }`}>
                    <div className={`transition-colors duration-300 ${
                      activeIndex === index ? 'text-[#F6A839]' : 'text-[#F49611] group-hover:text-[#F6A839]'
                    }`}>
                      {benefit.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#E8EEF6] mb-2 group-hover:text-white transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-[#A2B8D8] group-hover:text-[#E8EEF6] transition-colors duration-300 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Dynamic Display */}
          <div className="hidden lg:block relative">
            <div className="sticky top-8">
              <div className="relative rounded-xl bg-gradient-to-br from-[#143970] to-[#113262] p-8 border border-[#1C52A0]">
                <div className="flex flex-col items-center text-center p-8">
                  <div className="text-[#F6A839] transform transition-all duration-500 scale-125">
                    {benefits[activeIndex].icon}
                  </div>
                  <h4 className="text-2xl font-bold text-white mt-6 mb-4 transition-all duration-300">
                    {benefits[activeIndex].title}
                  </h4>
                  <p className="text-[#E8EEF6] max-w-md transition-all duration-300">
                    {benefits[activeIndex].description}
                  </p>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#F49611]/10 rounded-full blur-xl" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#1C52A0]/10 rounded-full blur-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiamondBenefits;