import React from 'react';
import { Clock, PiggyBank, TrendingUp, ShieldCheck, LineChart } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, isLarge = false }) => (
  <div className={`relative bg-[#113262] rounded-xl overflow-hidden ${isLarge ? 'md:col-span-2 md:row-span-2' : ''}`}>
    {/* Accent line */}
    <div className="absolute top-0 left-0 w-full h-1 bg-[#F49611]" />
    
    <div className="p-8">
      <div className="flex flex-col h-full">
        <div className="bg-[#1C52A0] rounded-lg p-3 w-fit mb-6">
          <Icon className="w-6 h-6 text-white" />
        </div>
        
        <h3 className={`${isLarge ? 'text-2xl' : 'text-xl'} font-bold text-white mb-4`}>
          {title}
        </h3>
        
        <p className="text-white/80 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  </div>
);

const StatisticCard = ({ value, label }) => (
  <div className="bg-[#1C52A0] rounded-xl p-8">
    <div className="text-3xl font-bold text-white mb-2">{value}</div>
    <div className="text-white/80">{label}</div>
  </div>
);

const WhyRetirementSection = () => {
  return (
    <div className="relative bg-[#113262]">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        {/* Main heading with accent */}
        <div className="flex items-center gap-4 mb-16">
          <div className="w-20 h-1 bg-[#F49611]" />
          <h2 className="text-4xl md:text-5xl font-bold text-white">Why Retirement Planning?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="md:col-span-2">
            <p className="text-2xl text-white/90 leading-relaxed">
              Secure your future with our comprehensive retirement planning approach. We combine time-tested strategies with innovative solutions to ensure your golden years are truly golden, free from financial worries.
            </p>
          </div>
          
          {/* Statistics cards */}
          <div className="grid grid-cols-2 gap-4">
            <StatisticCard value="30+" label="Years of Expertise" />
            <StatisticCard value="₹250Cr+" label="Retirement Assets Managed" />
          </div>
        </div>

        {/* Feature grid with mixed sizes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Large feature */}
          <FeatureCard
            icon={Clock}
            title="Early Planning Advantage"
            description="Start early to harness the power of compounding. Our advanced retirement calculator helps you understand exactly how much you need to save today for a comfortable tomorrow. We factor in inflation, life expectancy, and lifestyle requirements to create a personalized retirement roadmap."
            isLarge={true}
          />
          
          {/* Regular features */}
          <FeatureCard
            icon={PiggyBank}
            title="Regular Income Generation"
            description="Structured solutions for steady post-retirement income streams."
          />
          
          <FeatureCard
            icon={TrendingUp}
            title="Wealth Accumulation"
            description="Strategic asset allocation for optimal retirement corpus growth."
          />
          
          <FeatureCard
            icon={ShieldCheck}
            title="Capital Preservation"
            description="Protected growth strategies to safeguard your retirement savings."
          />
          
          <FeatureCard
            icon={LineChart}
            title="Inflation-Adjusted Planning"
            description="Future-proof strategies accounting for rising living costs."
          />
        </div>
      </div>
    </div>
  );
};

export default WhyRetirementSection;