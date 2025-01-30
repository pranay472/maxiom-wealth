import React from 'react';
import { Globe, TrendingUp, Shield, DollarSign } from 'lucide-react';

const FeatureCard = ({ Icon, title, description }) => (
  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
    <Icon className="w-6 h-6 text-[#F49611] mb-4" />
    <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
    <p className="text-white/80 text-sm">{description}</p>
  </div>
);

const HeroSection = () => {
  return (
    <div className="relative bg-[#113262] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#1C52A0] opacity-50 transform -skew-y-12"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center pt-12">
          {/* Left Column */}
          <div>
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-12 h-0.5 bg-[#F49611]"></div>
                <span className="text-[#F49611] font-medium uppercase tracking-wider text-sm">Global Opportunities</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Access International Markets
              </h1>
              <p className="text-xl text-white/80">
                Diversify your portfolio with dollar-denominated investments across US equities, emerging markets, and global bonds through regulated investment vehicles.
              </p>
            </div>
            <div className="flex gap-4">
              <button className="bg-[#F49611] hover:bg-[#F6A839] text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Explore Opportunities
              </button>
              <button className="border border-white/30 hover:bg-white/10 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Column */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FeatureCard 
              Icon={Globe}
              title="Geographic Diversification"
              description="Access diverse markets including US equities and emerging markets"
            />
            <FeatureCard 
              Icon={DollarSign}
              title="Dollar Denomination"
              description="Invest in dollar-denominated assets for currency diversification"
            />
            <FeatureCard 
              Icon={Shield}
              title="Regulated Vehicles"
              description="Investment through GIFT City AIFs and Singapore jurisdiction funds"
            />
            <FeatureCard 
              Icon={TrendingUp}
              title="Global Growth"
              description="Participate in international market opportunities"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const IntroSection = () => {
  const marketStats = [
    { label: "US Market Access", value: "60%", subtext: "of global market cap" },
    { label: "Emerging Markets", value: "30+", subtext: "countries coverage" },
    { label: "Global Bonds", value: "$128T", subtext: "market size" }
  ];

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Left Column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-12 h-0.5 bg-[#F49611]"></div>
              <span className="text-[#F49611] font-medium uppercase tracking-wider text-sm">Why Offshore Investments</span>
            </div>
            <h2 className="text-3xl font-bold text-[#113262] mb-6">
              Expand Your Investment Horizon
            </h2>
            <p className="text-gray-600 mb-8">
              Our offshore investment solutions provide access to international markets through regulated investment vehicles. Benefit from geographic diversification while maintaining compliance with Indian regulations through GIFT City AIFs and Singapore jurisdiction funds.
            </p>
            <div className="space-y-4">
              {[
                "Access to US equities and emerging markets",
                "Dollar-denominated investment opportunities",
                "Regulated investment structures",
                "Professional portfolio management"
              ].map((point, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#F49611]"></div>
                  <span className="text-gray-700">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="bg-[#E8EEF6] rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-[#113262] mb-8">Global Market Opportunities</h3>
            <div className="grid gap-8">
              {marketStats.map((stat, index) => (
                <div key={index} className="flex items-center gap-6">
                  <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center">
                    <span className="text-3xl font-bold text-[#F49611]">{stat.value}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-[#113262]">{stat.label}</div>
                    <div className="text-gray-600">{stat.subtext}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const OffshoreProductsIntro = () => {
  return (
    <>
      <HeroSection />
      <IntroSection />
    </>
  );
};

export default OffshoreProductsIntro;