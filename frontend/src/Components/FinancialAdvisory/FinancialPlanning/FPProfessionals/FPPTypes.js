import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Trophy, Stethoscope, Coins, Lightbulb } from 'lucide-react';

const professionalTypes = [
  {
    id: 'sportspersons',
    title: 'Financial Planning for Sportspersons',
    icon: Trophy,
    description: 'Comprehensive financial strategy tailored for athletes, addressing career longevity, income management, sponsorship planning, and post-sports career financial security.',
    timeframe: '10-15 Years',
    riskProfile: 'Moderate Aggressive',
    minInvestment: '₹25L',
    path: '/services/customised-financial-planning-for-professionals-sports-persons'
  },
  {
    id: 'doctors',
    title: 'Financial Planning for Doctors',
    icon: Stethoscope,
    description: 'Specialized financial planning for medical professionals, covering practice establishment, equipment investment, medical liability insurance, and long-term wealth creation strategies.',
    timeframe: '5-10 Years',
    riskProfile: 'Moderate',
    minInvestment: '₹20L',
    path: '/services/customised-financial-planning-for-professionals-doctors'
  },
  {
    id: 'retired-bank-employees',
    title: 'Financial Planning for Retired Bank Employees',
    icon: Coins,
    description: 'Tailored financial solutions for bank retirees, focusing on pension optimization, healthcare planning, investment diversification, and maintaining financial independence.',
    timeframe: '15-20 Years',
    riskProfile: 'Conservative',
    minInvestment: '₹15L',
    path: '/services/customised-financial-planning-for-professionals-retired-bank-employees'
  },
  {
    id: 'entrepreneurs',
    title: 'Financial Planning for Entrepreneurs',
    icon: Lightbulb,
    description: 'Dynamic financial planning for business owners, addressing business growth, personal wealth segregation, risk management, and strategic investment across business and personal portfolios.',
    timeframe: '5-10 Years',
    riskProfile: 'Moderate Aggressive',
    minInvestment: '₹30L',
    path: '/services/customised-financial-planning-for-professionals-enterpreneurs'
  }
];

const ProfessionalTypeCard = ({ plan }) => {
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

const FPPTypes = ({ onExplore, onSchedule }) => {
  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-12 h-0.5 bg-[#F49611]"></div>
              <span className="text-[#F49611] font-medium uppercase tracking-wider">Professional Solutions</span>
              <div className="w-12 h-0.5 bg-[#F49611]"></div>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#113262] mb-6">
            Secure Your Professional Future
          </h2>
          <p className="text-xl text-gray-600">
            Explore our comprehensive professional financial planning solutions, tailored to match 
            your professional aspirations and your financial goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {professionalTypes.map((plan) => (
            <ProfessionalTypeCard 
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
            Schedule a Professional Planning Session
          </button>
        </div>
      </div>
    </div>
  );
};

export default FPPTypes;