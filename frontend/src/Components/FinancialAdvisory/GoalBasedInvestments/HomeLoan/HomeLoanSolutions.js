import React from 'react';
import { 
  TrendingDown, 
  Home, 
  BadgeCheck, 
  Receipt,
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

const HomeLoanSolutions = () => {
  return (
    <div className="relative bg-[#113262]">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        {/* Main heading with accent */}
        <div className="flex items-center gap-4 mb-16">
          <div className="w-20 h-1 bg-[#F49611]" />
          <h2 className="text-4xl md:text-5xl font-bold text-white">Why Prioritize Home Loan Prepayment?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="md:col-span-2">
            <p className="text-2xl text-white/90 leading-relaxed">
              Smart strategies for faster home loan repayment
            </p>
          </div>
          
          {/* Statistics cards */}
          <div className="grid grid-cols-2 gap-4">
            <StatisticCard value="₹15L+" label="Avg. Interest Saved" />
            <StatisticCard value="98%" label="Client Satisfaction" />
          </div>
        </div>

        {/* Feature grid with mixed sizes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Large feature */}
          <FeatureCard
            icon={TrendingDown}
            title="Lowered Interest"
            description="Paying off home loans faster means reduced interest, saving lakhs over time."
            isLarge={true}
          />
          
          {/* Regular features */}
          <FeatureCard
            icon={Home}
            title="Debt-free Living"
            description="Home ownership feels more rewarding without a lingering debt cloud."
          />
          
          <FeatureCard
            icon={BadgeCheck}
            title="Enhanced Credit Score"
            description="Accelerating loan repayment can significantly boost your credit score."
          />
          
          <FeatureCard
            icon={Receipt}
            title="Tax Efficiency"
            description="Proper planning ensures you benefit most from tax deductions on home loan repayments."
          />

          <FeatureCard
            icon={TrendingUp}
            title="Financial Freedom"
            description="Channel money into investments once the home loan is settled, amplifying wealth."
          />

          <FeatureCard
            icon={Shield}
            title="Peace of Mind"
            description="A debt-free home offers unparalleled mental peace and stability."
          />
        </div>
      </div>
    </div>
  );
};

export default HomeLoanSolutions;