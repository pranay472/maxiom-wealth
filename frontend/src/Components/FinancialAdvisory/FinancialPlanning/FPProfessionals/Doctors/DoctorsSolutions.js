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

const DoctorsSolutions = () => {
  return (
    <div className="relative bg-[#113262]">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        {/* Main heading with accent */}
        <div className="flex items-center gap-4 mb-16">
          <div className="w-20 h-1 bg-[#F49611]" />
          <h2 className="text-4xl md:text-5xl font-bold text-white">Why is Athlete Financial Planning Crucial?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="md:col-span-2">
            <p className="text-2xl text-white/90 leading-relaxed">
              Professional athletes need specialized financial planning to maximize their unique earning potential and secure their future.
            </p>
          </div>
          
          {/* Statistics cards */}
          <div className="grid grid-cols-2 gap-4">
            <StatisticCard value="15+" label="Years Experience" />
            <StatisticCard value="500+" label="Athletes Served" />
          </div>
        </div>

        {/* Feature grid with mixed sizes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Large feature */}
          <FeatureCard
            icon={TrendingUp}
            title="Peaking Earnings"
            description="Sportspersons often have unpredictable and sometimes short-lived peak earning periods that require smart financial strategies."
            isLarge={true}
          />
          
          {/* Regular features */}
          <FeatureCard
            icon={Shield}
            title="Sustaining Wealth"
            description="A well-thought-out plan ensures sustained prosperity even after retiring from active sports."
          />
          
          <FeatureCard
            icon={Calculator}
            title="Risk Management"
            description="Injuries or sudden breaks can impact earnings, making a stable financial base vital."
          />
          
          <FeatureCard
            icon={Globe}
            title="Legacy Creation"
            description="Beyond immediate needs, athletes often wish to build legacies, necessitating expert financial guidance."
          />

          <FeatureCard
            icon={Users}
            title="Tax Optimisation"
            description="Unique earnings structures in sports call for tax-efficient financial strategies."
          />

          <FeatureCard
            icon={GraduationCap}
            title="Lifestyle Maintenance"
            description="To maintain a comfortable lifestyle post-retirement, forward-thinking planning is essential."
          />
        </div>
      </div>
    </div>
  );
};

export default DoctorsSolutions;