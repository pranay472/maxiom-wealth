import React from 'react';
import { HeartPulse, Wallet, Hourglass } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const retirementTypes = [
  {
    id: 'traditional-retirement',
    title: 'Traditional Retirement Planning',
    icon: HeartPulse,
    description: 'Comprehensive retirement planning designed to build a robust corpus that supports your desired lifestyle post 60. Strategic long-term investment approach with focus on wealth preservation.',
    timeframe: '15-30 Years',
    riskProfile: 'Moderate Balanced',
    minInvestment: '₹50L'
  },
  {
    id: 'post-retirement',
    title: 'Post Retirement Solutions',
    icon: Wallet,
    description: 'Structured solutions for retirees focusing on regular income generation, capital preservation, and inflation protection. Tailored to maintain your lifestyle while ensuring financial security.',
    timeframe: 'Immediate',
    riskProfile: 'Conservative',
    minInvestment: '₹1Cr'
  },
  {
    id: 'fire',
    title: 'FIRE Planning',
    icon: Hourglass,
    description: 'Financial Independence & Early Retirement Planning for individuals aiming to retire before 45. Aggressive savings and investment strategy balanced with long-term sustainability.',
    timeframe: '10-15 Years',
    riskProfile: 'Aggressive Balanced',
    minInvestment: '₹75L'
  }
];

const RetirementTypeCard = ({ plan }) => {
  const { icon: Icon, title, description, timeframe, riskProfile, minInvestment, id } = plan;
  const navigate = useNavigate();

  const handleExplore = () => {
    switch(id) {
      case 'traditional-retirement':
        navigate('/financial-advisory/retirement-planning/traditional');
        break;
      case 'post-retirement':
        navigate('/financial-advisory/retirement-planning/post');
        break;
      case 'fire':
        navigate('/financial-advisory/retirement-planning/fire');
        break;
      default:
        break;
    }
  };
  
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
            <div className="text-white/60 text-sm mb-1">Investment Horizon</div>
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

        {/* CTA Button */}
        <button 
          onClick={handleExplore}
          className="mt-6 w-full bg-white/10 hover:bg-white/20 text-white py-3 rounded-xl font-semibold transition-colors duration-300"
        >
          Explore Plan
        </button>
      </div>
    </div>
  );
};

const RetirementTypesSection = () => {
  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-12 h-0.5 bg-[#F49611]"></div>
              <span className="text-[#F49611] font-medium uppercase tracking-wider">Retirement Solutions</span>
              <div className="w-12 h-0.5 bg-[#F49611]"></div>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#113262] mb-6">
            Choose Your Path to Financial Freedom
          </h2>
          <p className="text-xl text-gray-600">
            Explore our comprehensive retirement planning solutions, each designed to match 
            your unique retirement goals, timeline, and lifestyle aspirations.
          </p>
        </div>

        {/* Retirement Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {retirementTypes.map((plan) => (
            <RetirementTypeCard key={plan.id} plan={plan} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <button className="w-full max-w-md py-4 px-6 bg-gradient-to-r from-[#1C52A0] to-[#0A1E3A] text-white text-lg font-medium rounded-lg hover:bg-gradient-to-r hover:from-[#0A1E3A] hover:to-[#1C52A0] transition-all duration-300">
            Schedule a Retirement Planning Session
          </button>
        </div>
      </div>
    </div>
  );
};

export default RetirementTypesSection;