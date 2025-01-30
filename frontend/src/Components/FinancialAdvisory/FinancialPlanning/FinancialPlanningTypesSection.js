import React from 'react';
import { TrendingUp, Shield, Crown, Home, Heart, GraduationCap, Leaf, Building } from 'lucide-react';

const planTypes = [
  {
    id: 'wealth-compounding',
    title: 'Wealth Compounding',
    icon: TrendingUp,
    description: 'Strategic long-term wealth creation through systematic investment and reinvestment of returns, leveraging the power of compound growth.',
    timeframe: '10-20 Years',
    riskProfile: 'Medium to High',
    minInvestment: '₹25L'
  },
  {
    id: 'wealth-preservation',
    title: 'Wealth Preservation',
    icon: Shield,
    description: 'Conservative strategies to protect and maintain accumulated wealth through diversification and risk management techniques.',
    timeframe: '5-10 Years',
    riskProfile: 'Low to Medium',
    minInvestment: '₹50L'
  },
  {
    id: 'lifestyle-preservation',
    title: 'Lifestyle Preservation',
    icon: Crown,
    description: 'Structured planning to maintain your desired lifestyle through retirement, focusing on inflation-adjusted income generation.',
    timeframe: '15-30 Years',
    riskProfile: 'Medium',
    minInvestment: '₹75L'
  },
  {
    id: 'vacation-home',
    title: 'Vacation Home',
    icon: Home,
    description: 'Strategic investment planning for acquiring and maintaining a second home while optimizing tax efficiency and rental income potential.',
    timeframe: '7-15 Years',
    riskProfile: 'Medium to High',
    minInvestment: '₹1Cr'
  },
  {
    id: 'philanthropy',
    title: 'Philanthropy',
    icon: Heart,
    description: 'Structured approach to charitable giving that maximizes social impact while optimizing tax benefits and ensuring sustainable contributions.',
    timeframe: '5-20 Years',
    riskProfile: 'Flexible',
    minInvestment: '₹50L'
  },
  {
    id: 'children-needs',
    title: 'Children\'s Needs',
    icon: GraduationCap,
    description: 'Comprehensive planning for education, marriage, and other milestone expenses for your children with inflation-adjusted goals.',
    timeframe: '10-20 Years',
    riskProfile: 'Medium to High',
    minInvestment: '₹30L'
  },
  {
    id: 'impact-investing',
    title: 'Impact Investing',
    icon: Leaf,
    description: 'Investment strategies aligned with ESG principles, focusing on companies that generate both financial returns and positive social impact.',
    timeframe: '5-15 Years',
    riskProfile: 'Medium to High',
    minInvestment: '₹25L'
  },
  {
    id: 'legacy-preservation',
    title: 'Legacy Preservation',
    icon: Building,
    description: 'Estate and succession planning to ensure seamless wealth transfer across generations while minimizing tax implications.',
    timeframe: '20+ Years',
    riskProfile: 'Conservative',
    minInvestment: '₹1Cr'
  }
];

const PlanTypeCard = ({ plan }) => {
  const { icon: Icon, title, description, timeframe, riskProfile, minInvestment } = plan;
  
  return (
    <div className="group relative">
      {/* Card Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#113262] to-[#1C52A0] rounded-2xl transform transition-transform duration-300 group-hover:scale-[1.02]" />
      
      {/* Card Content */}
      <div className="relative p-8 h-full flex flex-col">
        {/* Icon Container */}
        <div className="mb-6">
          <div className="bg-[#F49611] w-14 h-14 rounded-xl flex items-center justify-center shadow-lg">
            <Icon className="w-7 h-7 text-white" />
          </div>
        </div>

        {/* Content */}
        <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
        <p className="text-white/80 mb-6 flex-grow">{description}</p>

        {/* Metrics */}
        <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
          <div>
            <div className="text-white/60 text-sm mb-1">Timeframe</div>
            <div className="text-white font-semibold">{timeframe}</div>
          </div>
          <div>
            <div className="text-white/60 text-sm mb-1">Risk Profile</div>
            <div className="text-white font-semibold">{riskProfile}</div>
          </div>
          <div className="col-span-2">
            <div className="text-white/60 text-sm mb-1">Minimum Investment</div>
            <div className="text-[#F49611] font-bold">{minInvestment}</div>
          </div>
        </div>

        {/* CTA Button */}
        <button className="mt-6 w-full bg-white/10 hover:bg-white/20 text-white py-3 rounded-xl font-semibold transition-colors duration-300">
          Explore Plan
        </button>
      </div>
    </div>
  );
};

const FinancialPlanningTypesSection = () => {
  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-12 h-0.5 bg-[#F49611]"></div>
              <span className="text-[#F49611] font-medium uppercase tracking-wider">Financial Planning Solutions</span>
              <div className="w-12 h-0.5 bg-[#F49611]"></div>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#113262] mb-6">
            Comprehensive Financial Planning for Every Goal
          </h2>
          <p className="text-xl text-gray-600">
            Discover our range of specialized financial planning solutions, each tailored 
            to help you achieve specific life goals while building lasting wealth.
          </p>
        </div>

        {/* Planning Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {planTypes.map((plan) => (
            <PlanTypeCard key={plan.id} plan={plan} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <button className="w-full max-w-md py-4 px-6 bg-gradient-to-r from-[#1C52A0] to-[#0A1E3A] text-white text-lg font-medium rounded-lg hover:bg-gradient-to-r hover:from-[#0A1E3A] hover:to-[#1C52A0] transition-all duration-300">
            Schedule a Financial Planning Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default FinancialPlanningTypesSection;