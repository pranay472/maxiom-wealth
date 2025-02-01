import React from 'react';
import { 
  Globe, 
  GraduationCap, 
  Calculator, 
  Users,
  TrendingUp,
  Shield,
  FileText,
  FileCheck,
  Lock,
  Heart
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

const DeathIncSolutions = () => {
  return (
    <div className="relative bg-[#113262]">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        {/* Main heading with accent */}
        <div className="flex items-center gap-4 mb-16">
          <div className="w-20 h-1 bg-[#F49611]" />
          <h2 className="text-4xl md:text-5xl font-bold text-white">Why is Sudden Loss Financial Planning Crucial?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="md:col-span-2">
            <p className="text-2xl text-white/90 leading-relaxed">
              Loss of a steady income can destabilise household finances.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Large feature */}
          <FeatureCard
            icon={TrendingUp}
            title="Immediate Financial Impact"
            description="Loss of a steady income can destabilise household finances."
            isLarge={true}
          />
          
          <FeatureCard
            icon={Shield}
            title="Future Financial Security"
            description="Ensuring the family's future financial needs are catered to."
          />
          
          <FeatureCard
            icon={FileText}
            title="Necessary Formalities"
            description="Managing financial responsibilities like bills, debts, or mortgages."
          />
          
          <FeatureCard
            icon={FileCheck}
            title="Insurance Claims"
            description="Navigating the intricate process of claiming insurance benefits."
          />

          <FeatureCard
            icon={Lock}
            title="Protection of Assets"
            description="Safeguarding assets and investments for the family's future."
          />

          <FeatureCard
            icon={Heart}
            title="Emotional Tranquility"
            description="Financial stability can offer some solace in these testing times."
          />
        </div>
      </div>
    </div>
  );
};

export default DeathIncSolutions;