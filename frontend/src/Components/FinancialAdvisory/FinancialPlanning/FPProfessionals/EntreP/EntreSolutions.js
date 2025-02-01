import React from 'react';
import { 
  Globe, 
  GraduationCap, 
  Calculator, 
  Users,
  TrendingUp,
  Shield
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

const EntreSolutions = () => {
  return (
    <div className="relative bg-[#113262]">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        {/* Main heading with accent */}
        <div className="flex items-center gap-4 mb-16">
          <div className="w-20 h-1 bg-[#F49611]" />
          <h2 className="text-4xl md:text-5xl font-bold text-white">Why is Entrepreneur Financial Planning Crucial?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="md:col-span-2">
            <p className="text-2xl text-white/90 leading-relaxed">
              Every business is distinct, and so is its financial roadmap. Customized solutions drive success.
            </p>
          </div>
          
          {/* Statistics cards */}
          <div className="grid grid-cols-2 gap-4">
            <StatisticCard value="20+" label="Years Experience" />
            <StatisticCard value="1000+" label="Entrepreneurs Served" />
          </div>
        </div>

        {/* Feature grid with mixed sizes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Large feature */}
          <FeatureCard
            icon={TrendingUp}
            title="Tailored Solutions"
            description="Every business is distinct, and so is its financial roadmap. Customized solutions drive success."
            isLarge={true}
          />
          
          {/* Regular features */}
          <FeatureCard
            icon={Shield}
            title="Wealth Maximisation"
            description="Entrepreneurs deserve their hard-earned profits. Effective planning ensures it multiplies."
          />
          
          <FeatureCard
            icon={Calculator}
            title="Tax Efficiency"
            description="Tax-efficient strategies ensure business owners retain more of their earnings."
          />
          
          <FeatureCard
            icon={Globe}
            title="Asset Protection"
            description="Safeguarding personal and business assets is paramount for long-term success."
          />

          <FeatureCard
            icon={Users}
            title="Future Security"
            description="Planning now ensures a brighter and more stable financial future."
          />

          <FeatureCard
            icon={GraduationCap}
            title="Expert Guidance"
            description="Advisors familiar with entrepreneurial needs can make all the difference."
          />
        </div>
      </div>
    </div>
  );
};

export default EntreSolutions;