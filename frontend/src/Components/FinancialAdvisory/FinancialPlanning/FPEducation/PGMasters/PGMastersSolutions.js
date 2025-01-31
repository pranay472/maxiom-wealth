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

const PGMastersSolutions = () => {
  return (
    <div className="relative bg-[#113262]">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        {/* Main heading with accent */}
        <div className="flex items-center gap-4 mb-16">
          <div className="w-20 h-1 bg-[#F49611]" />
          <h2 className="text-4xl md:text-5xl font-bold text-white">Why Choose Master's Abroad Financial Planning?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="md:col-span-2">
            <p className="text-2xl text-white/90 leading-relaxed">
              Realise your dream of studying abroad without compromising your financial stability. Secure your future today.
            </p>
          </div>
          
          {/* Statistics cards */}
          <div className="grid grid-cols-2 gap-4">
            <StatisticCard value="1000+" label="Masters Students" />
            <StatisticCard value="95%" label="Success Rate" />
          </div>
        </div>

        {/* Feature grid with mixed sizes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Large feature */}
          <FeatureCard
            icon={Globe}
            title="Global Ambitions"
            description="Realise your dream of studying abroad without compromising your financial stability. Secure your future today."
            isLarge={true}
          />
          
          {/* Regular features */}
          <FeatureCard
            icon={GraduationCap}
            title="Scholarship Avenues"
            description="Untangle the web of scholarship opportunities available for international students, and find the best fit."
          />
          
          <FeatureCard
            icon={Calculator}
            title="Budgeting Expertise"
            description="Navigate the complexities of overseas expenses with expert budgeting tailored for international education."
          />
          
          <FeatureCard
            icon={Users}
            title="Overseas Advisors"
            description="Engage with advisors experienced in international educational finance, helping you make informed decisions."
          />

          <FeatureCard
            icon={TrendingUp}
            title="ROI-Centric Plans"
            description="Ensure your investment in global education yields desired returns with our ROI-centric planning approach."
          />

          <FeatureCard
            icon={Shield}
            title="Peace of Mind"
            description="Free yourself from financial worries and focus on your academic journey abroad."
          />
        </div>
      </div>
    </div>
  );
};

export default PGMastersSolutions;