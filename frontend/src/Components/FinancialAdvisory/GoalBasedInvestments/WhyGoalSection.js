import React from 'react';
import { Target, BarChart, TrendingUp, ShieldCheck, LineChart } from 'lucide-react';

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

const WhyGoalSection = () => {
  return (
    <div className="relative bg-[#113262]">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        {/* Main heading with accent */}
        <div className="flex items-center gap-4 mb-16">
          <div className="w-20 h-1 bg-[#F49611]" />
          <h2 className="text-4xl md:text-5xl font-bold text-white">Why Goal Based Investment?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="md:col-span-2">
            <p className="text-2xl text-white/90 leading-relaxed">
              Beyond traditional investment strategies, our goal-based approach ensures every decision is purpose-driven and measurable, backed by sophisticated analytics and years of expertise.
            </p>
          </div>
          
          {/* Statistics cards */}
          <div className="grid grid-cols-2 gap-4">
            <StatisticCard value="93%" label="Goal Achievement Rate" />
            <StatisticCard value="₹450Cr+" label="Assets Under Advisory" />
          </div>
        </div>

        {/* Feature grid with mixed sizes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Large feature */}
          <FeatureCard
            icon={Target}
            title="Scientific Goal Mapping"
            description="Our proprietary goal-mapping system transforms your life aspirations into precise financial targets. Using advanced algorithms, we create a detailed roadmap that adapts to market changes while staying focused on your objectives."
            isLarge={true}
          />
          
          {/* Regular features */}
          <FeatureCard
            icon={BarChart}
            title="Dynamic Portfolio Analytics"
            description="Real-time monitoring with advanced risk-adjusted metrics."
          />
          
          <FeatureCard
            icon={TrendingUp}
            title="Intelligent Rebalancing"
            description="Automated adjustments to maintain optimal goal alignment."
          />
          
          <FeatureCard
            icon={ShieldCheck}
            title="Risk Optimization"
            description="Sophisticated risk management using modern portfolio theory."
          />
          
          <FeatureCard
            icon={LineChart}
            title="Performance Engineering"
            description="Data-driven strategies to maximize goal-aligned returns."
          />
        </div>
      </div>
    </div>
  );
};

export default WhyGoalSection;