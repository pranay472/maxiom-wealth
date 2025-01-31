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

const MToSolutions = () => {
  return (
    <div className="relative bg-[#113262]">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        {/* Main heading with accent */}
        <div className="flex items-center gap-4 mb-16">
          <div className="w-20 h-1 bg-[#F49611]" />
          <h2 className="text-4xl md:text-5xl font-bold text-white">Why Overseas Money Transfer Matters?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="md:col-span-2">
            <p className="text-2xl text-white/90 leading-relaxed">
              Ensuring your child's overseas education is supported with timely and efficient financial transfers.
            </p>
          </div>
          
          {/* Statistics cards */}
          <div className="grid grid-cols-2 gap-4">
            <StatisticCard value="10K+" label="Successful Transfers" />
            <StatisticCard value="98%" label="On-time Delivery" />
          </div>
        </div>

        {/* Feature grid with mixed sizes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Large feature */}
          <FeatureCard
            icon={Globe}
            title="Saving Rupees"
            description="By strategising currency exchanges, you can maximise the rupees sent overseas."
            isLarge={true}
          />
          
          {/* Regular features */}
          <FeatureCard
            icon={Shield}
            title="Reliability"
            description="Ensuring funds reach securely and on time is pivotal for a student's uninterrupted education."
          />
          
          <FeatureCard
            icon={Calculator}
            title="Understanding Norms"
            description="Different countries have varying regulations around receiving international funds."
          />
          
          <FeatureCard
            icon={TrendingUp}
            title="Avoiding Delays"
            description="Timely transfers mean students can pay fees, rent, and other expenses without hiccups."
          />

          <FeatureCard
            icon={Users}
            title="Financial Assurance"
            description="Knowing their finances are secure gives students the mental space to focus on studies."
          />

          <FeatureCard
            icon={GraduationCap}
            title="Expertise Matters"
            description="Navigating this process without guidance can lead to unexpected costs and setbacks."
          />
        </div>
      </div>
    </div>
  );
};

export default MToSolutions;