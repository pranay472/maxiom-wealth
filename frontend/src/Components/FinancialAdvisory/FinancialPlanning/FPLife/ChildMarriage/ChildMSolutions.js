import React from 'react';
import { 
  Globe, 
  GraduationCap, 
  Calculator, 
  Users,
  TrendingUp,
  Shield,
  Target,
  Clock,
  ShieldCheck
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

const ChildMSolutions = () => {
  return (
    <div className="relative bg-[#113262]">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        {/* Main heading with accent */}
        <div className="flex items-center gap-4 mb-16">
          <div className="w-20 h-1 bg-[#F49611]" />
          <h2 className="text-4xl md:text-5xl font-bold text-white">Why Prioritize Wedding Financial Planning?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="md:col-span-2">
            <p className="text-2xl text-white/90 leading-relaxed">
              Weddings, with their multifaceted nature, can lead to unexpected costs.
            </p>
          </div>
        </div>

        {/* Feature grid with mixed sizes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Large feature */}
          <FeatureCard
            icon={TrendingUp}
            title="Unpredictable Expenses"
            description="Weddings, with their multifaceted nature, can lead to unexpected costs."
            isLarge={true}
          />
          
          {/* Regular features */}
          <FeatureCard
            icon={Shield}
            title="Future Security"
            description="Ensuring wedding expenses don't eat into funds meant for future endeavours."
          />
          
          <FeatureCard
            icon={Target}
            title="Tailored Celebrations"
            description="Planning finances for a celebration that matches your child's dream."
          />
          
          <FeatureCard
            icon={Clock}
            title="Avoiding Last-minute Hassles"
            description="Financial preparedness keeps last-minute financial stress at bay."
          />

          <FeatureCard
            icon={Calculator}
            title="Tax-Efficiency"
            description="Leveraging strategies to make wedding spending more tax-efficient."
          />

          <FeatureCard
            icon={ShieldCheck}
            title="Asset Protection"
            description="Guarding against draining all savings or assets for the wedding."
          />
        </div>
      </div>
    </div>
  );
};

export default ChildMSolutions;