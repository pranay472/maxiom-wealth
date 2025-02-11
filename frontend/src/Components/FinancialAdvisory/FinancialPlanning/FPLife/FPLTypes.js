import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Baby, HeartHandshake, HeartPulse, Accessibility, UserRoundPlus, UserRoundMinus, Skull, Handshake, Plane, Home } from 'lucide-react';

const lifeTypes = [
  {
    id: 'child-birth',
    title: 'Financial Planning for Child Birth',
    icon: Baby,
    description: 'Comprehensive financial strategy to manage expenses related to pregnancy, childbirth, and early childhood, including medical costs, insurance, and future savings.',
    timeframe: '0-5 Years',
    riskProfile: 'Conservative',
    minInvestment: '₹10L',
    path: '/financial-advisory/life-planning/child-birth'
  },
  {
    id: 'child-marriage',
    title: 'Financial Planning for Child Marriage',
    icon: HeartHandshake,
    description: 'Strategic financial planning to cover wedding expenses, create a marriage fund, and provide financial support for your child\'s new life journey.',
    timeframe: '5-15 Years',
    riskProfile: 'Moderate',
    minInvestment: '₹25L',
    path: '/financial-advisory/life-planning/child-marriage'
  },
  {
    id: 'health-emergency',
    title: 'Financial Planning for Health Emergency',
    icon: HeartPulse,
    description: 'Robust financial protection strategy to manage unexpected medical expenses, critical illness treatments, and long-term health care needs.',
    timeframe: 'Ongoing',
    riskProfile: 'Balanced',
    minInvestment: '₹15L',
    path: '/financial-advisory/life-planning/health-emergency'
  },
  {
    id: 'disability',
    title: 'Financial Planning for Disability',
    icon: Accessibility,
    description: 'Comprehensive financial support plan addressing income replacement, medical expenses, lifestyle modifications, and long-term care needs.',
    timeframe: 'Long-term',
    riskProfile: 'Conservative',
    minInvestment: '₹20L',
    path: '/financial-advisory/life-planning/disability'
  },
  {
    id: 'single-mothers',
    title: 'Financial Planning for Single Mothers',
    icon: UserRoundPlus,
    description: 'Tailored financial strategy addressing unique challenges of single parenthood, including income stability, child education, and personal financial security.',
    timeframe: 'Ongoing',
    riskProfile: 'Moderate Conservative',
    minInvestment: '₹12L',
    path: '/financial-advisory/life-planning/single-mothers'
  },
  {
    id: 'single-parents',
    title: 'Financial Planning for Single Parents',
    icon: UserRoundMinus,
    description: 'Holistic financial planning focusing on income management, child support, education funds, and creating a secure financial future.',
    timeframe: 'Ongoing',
    riskProfile: 'Moderate',
    minInvestment: '₹15L',
    path: '/financial-advisory/life-planning/single-parents'
  },
  {
    id: 'sudden-death',
    title: 'Financial Planning In Case Of Sudden Death Of Income Earner',
    icon: Skull,
    description: 'Comprehensive financial protection strategy to secure family\'s financial future, including life insurance, emergency funds, and income replacement.',
    timeframe: 'Long-term',
    riskProfile: 'Conservative',
    minInvestment: '₹30L',
    path: '/financial-advisory/life-planning/sudden-death'
  },
  {
    id: 'divorce',
    title: 'Financial Planning for Divorce',
    icon: Handshake,
    description: 'Strategic financial guidance to manage asset division, alimony, child support, and rebuilding personal financial stability.',
    timeframe: '1-3 Years',
    riskProfile: 'Balanced',
    minInvestment: '₹20L',
    path: '/financial-advisory/life-planning/divorce'
  },
  {
    id: 'migration-from-india',
    title: 'Financial Planning for Those Migrating From India',
    icon: Plane,
    description: 'Comprehensive financial strategy addressing international relocation, currency conversion, tax implications, and global investment opportunities.',
    timeframe: '2-5 Years',
    riskProfile: 'Moderate Aggressive',
    minInvestment: '₹50L',
    path: '/financial-advisory/life-planning/migration-from-india'
  },
  {
    id: 'return-to-india',
    title: 'Financial Planning for Those Returning To India',
    icon: Home,
    description: 'Tailored financial planning to manage repatriation, asset reallocation, tax optimization, and smooth financial transition back to India.',
    timeframe: '1-3 Years',
    riskProfile: 'Moderate',
    minInvestment: '₹25L',
    path: '/financial-advisory/life-planning/return-to-india'
  }
];

const LifeTypeCard = ({ plan }) => {
  const { icon: Icon, title, description, timeframe, riskProfile, minInvestment, path } = plan;
  
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(path);
  };
  
  return (
    <div className="group relative">
      <div className="absolute inset-0 bg-gradient-to-br from-[#113262] to-[#1C52A0] rounded-2xl transform transition-transform duration-300 group-hover:scale-[1.02]" />
      
      <div className="relative p-8 h-full flex flex-col">
        <div className="mb-6">
          <div className="bg-[#F49611] w-14 h-14 rounded-xl flex items-center justify-center shadow-lg">
            <Icon className="w-7 h-7 text-white" />
          </div>
        </div>

        <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
        <p className="text-white/80 mb-6 flex-grow">{description}</p>

        <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
          <div>
            <div className="text-white/60 text-sm mb-1">Planning Horizon</div>
            <div className="text-white font-semibold">{timeframe}</div>
          </div>
          <div>
            <div className="text-white/60 text-sm mb-1">Risk Profile</div>
            <div className="text-white font-semibold">{riskProfile}</div>
          </div>
          <div className="col-span-2">
            <div className="text-white/60 text-sm mb-1">Recommended Investment</div>
            <div className="text-[#F49611] font-bold">{minInvestment}</div>
          </div>
        </div>

        <button 
          onClick={handleClick}
          className="mt-6 w-full bg-white/10 hover:bg-white/20 text-white py-3 rounded-xl font-semibold transition-colors duration-300"
        >
          Explore Plan
        </button>
      </div>
    </div>
  );
};

const FPLTypes = ({ onExplore, onSchedule }) => {
  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-12 h-0.5 bg-[#F49611]"></div>
              <span className="text-[#F49611] font-medium uppercase tracking-wider">Life Situation Solutions</span>
              <div className="w-12 h-0.5 bg-[#F49611]"></div>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#113262] mb-6">
            Personalized Financial Planning for Every Life Situation
          </h2>
          <p className="text-xl text-gray-600">
            Comprehensive financial strategies tailored to address unique challenges and opportunities across different life situations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {lifeTypes.map((plan) => (
            <LifeTypeCard 
              key={plan.id} 
              plan={plan} 
              onExplore={onExplore}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <button 
            onClick={onSchedule}
            className="w-full max-w-md py-4 px-6 bg-gradient-to-r from-[#1C52A0] to-[#0A1E3A] text-white text-lg font-medium rounded-lg hover:bg-gradient-to-r hover:from-[#0A1E3A] hover:to-[#1C52A0] transition-all duration-300"
          >
            Schedule a Personalized Financial Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default FPLTypes;