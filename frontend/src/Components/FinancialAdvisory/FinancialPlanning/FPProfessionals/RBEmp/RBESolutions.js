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

const RBESolutions = () => {
  return (
    <div className="relative bg-[#113262]">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        {/* Main heading with accent */}
        <div className="flex items-center gap-4 mb-16">
          <div className="w-20 h-1 bg-[#F49611]" />
          <h2 className="text-4xl md:text-5xl font-bold text-white">Why Bank Retirees Need Specialised Financial Guidance?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="md:col-span-2">
            <p className="text-2xl text-white/90 leading-relaxed">
              Bank retirees have a distinct financial situation, different from other professions. They require specialised strategies.
            </p>
          </div>
          
          {/* Statistics cards */}
          <div className="grid grid-cols-2 gap-4">
            <StatisticCard value="25+" label="Years Experience" />
            <StatisticCard value="2000+" label="Retirees Served" />
          </div>
        </div>

        {/* Feature grid with mixed sizes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Large feature */}
          <FeatureCard
            icon={TrendingUp}
            title="Unique Financial Landscape"
            description="Bank retirees have a distinct financial situation, different from other professions. They require specialised strategies."
            isLarge={true}
          />
          
          {/* Regular features */}
          <FeatureCard
            icon={Shield}
            title="Pension Maximisation"
            description="Ensuring the most from pensions and other retirement benefits requires expert navigation."
          />
          
          <FeatureCard
            icon={Calculator}
            title="Taxation Nuances"
            description="Bank retirees have specific tax situations. Tax-efficient strategies can save a lot."
          />
          
          <FeatureCard
            icon={Globe}
            title="Legacy Planning"
            description="Many bank retirees look to leave a legacy. Proper planning ensures it's done right."
          />

          <FeatureCard
            icon={Users}
            title="Investment Strategies"
            description="The right investments can make post-retirement comfortable and secure."
          />

          <FeatureCard
            icon={GraduationCap}
            title="Changing Financial Goals"
            description="Retirement often brings changed financial goals. Expert guidance ensures they're met."
          />
        </div>
      </div>
    </div>
  );
};

export default RBESolutions;