import React from 'react';
import { ArrowRight, TrendingUp, Globe, BarChart3, LineChart } from 'lucide-react';

export const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-br from-[#113262] to-[#1C52A0] overflow-hidden">
      {/* Skewed overlay */}
      <div className="absolute inset-0 bg-black/10 transform -skew-y-6 scale-110 origin-top-left" />
      
      <div className="container mx-auto px-4 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="w-12 h-0.5 bg-[#F49611]" />
            <div className="space-y-4">
              <h4 className="text-[#F49611] uppercase tracking-wider font-medium">
                Private Credit
              </h4>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Private Credit Investment Opportunities
              </h1>
              <p className="text-xl text-white/80">
                Access India's emerging private credit market with strategic investment solutions across various lending opportunities.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <div className="text-3xl font-bold text-white mb-2">5L Cr</div>
                <div className="text-white/80 text-sm">Expected market size by 2030</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <div className="text-3xl font-bold text-white mb-2">20-25%</div>
                <div className="text-white/80 text-sm">Target returns*</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-6 py-3 bg-[#F49611] hover:bg-[#F6A839] text-white rounded-lg flex items-center justify-center gap-2 transition-colors">
                Explore Opportunities
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-6 py-3 border border-white text-white rounded-lg hover:bg-white/10 flex items-center justify-center gap-2 transition-colors">
                Schedule Consultation
              </button>
            </div>
          </div>

          {/* Right Column - Feature Cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 bg-white/10 backdrop-blur rounded-lg text-white">
              <TrendingUp className="w-8 h-8 text-[#F49611] mb-4" />
              <h3 className="font-semibold mb-2">Higher Yields</h3>
              <p className="text-sm text-white/80">Superior returns compared to traditional fixed income</p>
            </div>

            <div className="p-6 bg-white/10 backdrop-blur rounded-lg text-white">
              <BarChart3 className="w-8 h-8 text-[#F49611] mb-4" />
              <h3 className="font-semibold mb-2">Regular Income</h3>
              <p className="text-sm text-white/80">Periodic interest payments for steady cash flow</p>
            </div>

            <div className="p-6 bg-white/10 backdrop-blur rounded-lg text-white">
              <LineChart className="w-8 h-8 text-[#F49611] mb-4" />
              <h3 className="font-semibold mb-2">Risk Adjusted</h3>
              <p className="text-sm text-white/80">Structured deals with security and covenants</p>
            </div>

            <div className="p-6 bg-white/10 backdrop-blur rounded-lg text-white">
              <Globe className="w-8 h-8 text-[#F49611] mb-4" />
              <h3 className="font-semibold mb-2">Market Growth</h3>
              <p className="text-sm text-white/80">Rapidly expanding private credit landscape</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const MarketOverview = () => {
  const highlights = [
    {
      icon: Globe,
      title: "Global Recognition",
      description: "Private credit is a well-established asset class globally, now gaining momentum in India"
    },
    {
      icon: TrendingUp,
      title: "Market Growth",
      description: "Expected to reach 5 lakh crore by 2030, showing significant growth potential"
    },
    {
      icon: BarChart3,
      title: "Opportunity Landscape",
      description: "Expanding opportunities in venture debt and mid-size company financing"
    }
  ];

  return (
    <div className="bg-[#E8EEF6] py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="w-12 h-0.5 bg-[#F49611] mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-[#113262] mb-4">
            India's Private Credit Market
          </h2>
          <p className="text-gray-600">
            A rapidly growing asset class with significant potential
          </p>
        </div>

        {/* Market Highlights */}
        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-[#E8EEF6] flex items-center justify-center mb-6">
                <highlight.icon className="w-7 h-7 text-[#1C52A0]" />
              </div>
              
              <h3 className="text-xl font-semibold text-[#113262] mb-4">
                {highlight.title}
              </h3>
              
              <p className="text-gray-600">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-12 text-center text-sm text-gray-500">
          * Past performance is not indicative of future returns. Investment in private credit involves risks including the possible loss of principal.
        </div>
      </div>
    </div>
  );
};

const PrivateCreditSections = () => {
  return (
    <>
      <HeroSection />
      <MarketOverview />
    </>
  );
};

export default PrivateCreditSections;