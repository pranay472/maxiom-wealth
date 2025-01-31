import React from 'react';
import { 
  Globe, 
  DollarSign, 
  Calculator, 
  GraduationCap,
  TrendingUp,
  Bell
} from 'lucide-react';

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

const UGAbroadSolutions = () => {
  return (
    <div className="relative bg-[#113262]">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        {/* Main heading with accent */}
        <div className="flex items-center gap-4 mb-16">
          <div className="w-20 h-1 bg-[#F49611]" />
          <h2 className="text-4xl md:text-5xl font-bold text-white">Why Prioritize Undergraduate Abroad Financial Planning?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="md:col-span-2">
            <p className="text-2xl text-white/90 leading-relaxed">
              Overseas education involves navigating a distinct financial ecosystem. Be prepared.
            </p>
          </div>
          
          {/* Statistics cards */}
          <div className="grid grid-cols-2 gap-4">
            <StatisticCard value="2000+" label="Global Students" />
            <StatisticCard value="98%" label="Success Rate" />
          </div>
        </div>

        {/* Feature grid with mixed sizes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Large feature */}
          <FeatureCard
            icon={Globe}
            title="Diverse Financial Landscape"
            description="Overseas education involves navigating a distinct financial ecosystem. Be prepared."
            isLarge={true}
          />
          
          {/* Regular features */}
          <FeatureCard
            icon={DollarSign}
            title="Currency Dynamics"
            description="Exchange rates and currency volatilities can significantly impact your education budget."
          />
          
          <FeatureCard
            icon={Calculator}
            title="Hidden Costs"
            description="Understand the comprehensive costs, from tuition to living expenses and beyond."
          />
          
          <FeatureCard
            icon={GraduationCap}
            title="Scholarship Landscape"
            description="Maximising scholarship opportunities can significantly alleviate financial burdens."
          />

          <FeatureCard
            icon={TrendingUp}
            title="Return on Investment"
            description="Secure the best education without compromising on future financial health."
          />

          <FeatureCard
            icon={Bell}
            title="Emerging Opportunities"
            description="Stay updated on the ever-evolving landscape of overseas undergraduate financial aids."
          />
        </div>
      </div>
    </div>
  );
};

export default UGAbroadSolutions;