import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GraduationCap, School, Plane, Globe } from 'lucide-react';

const educationTypes = [
  {
    id: 'ug-abroad',
    title: 'Financial Planning for UG Education Abroad',
    icon: GraduationCap,
    description: 'Comprehensive financial planning for undergraduate studies abroad, covering tuition, living expenses, and contingency funds. Strategic investment approach to meet higher education costs in foreign currencies.',
    timeframe: '3-5 Years',
    riskProfile: 'Moderate Aggressive',
    minInvestment: '₹35L',
    path: '/services/financial-planning-for-education-undergraduate-education-abroad'
  },
  {
    id: 'ug-india',
    title: 'Financial Planning for UG Education in India',
    icon: School,
    description: 'Structured financial planning for premium undergraduate education in India\'s top institutions. Focused on building a corpus that covers tuition, accommodation, and additional educational expenses.',
    timeframe: '2-4 Years',
    riskProfile: 'Moderate',
    minInvestment: '₹15L',
    path: '/services/financial-planning-for-education-undergraduate-education-in-india'
  },
  {
    id: 'masters-abroad',
    title: 'Financial Planning for Masters Education Abroad',
    icon: Plane,
    description: 'Specialized planning for post-graduate studies overseas, including provisions for GMAT/GRE preparation, application costs, and living expenses. Balanced approach to meet short-term education goals.',
    timeframe: '2-3 Years',
    riskProfile: 'Moderate Balanced',
    minInvestment: '₹45L',
    path: '/services/financial-planning-for-education-masters-education-abroad'
  },
  {
    id: 'child-overseas',
    title: 'Financial Planning for Helping Child Overseas',
    icon: Globe,
    description: 'Long-term financial planning for parents aiming to support their child\'s overseas education and initial settlement. Comprehensive coverage of education, living costs, and emergency funds.',
    timeframe: '5-10 Years',
    riskProfile: 'Moderate Conservative',
    minInvestment: '₹50L',
    path: '/services/financial-planning-for-leducation-tips-on-sending-money-to-child-overseas'
  }
];

const EducationTypeCard = ({ plan }) => {
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

const FPETypes = () => {
  const navigate = useNavigate();
  
  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-12 h-0.5 bg-[#F49611]"></div>
              <span className="text-[#F49611] font-medium uppercase tracking-wider">Education Solutions</span>
              <div className="w-12 h-0.5 bg-[#F49611]"></div>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#113262] mb-6">
            Secure Your Child's Educational Future
          </h2>
          <p className="text-xl text-gray-600">
            Explore our comprehensive education financial planning solutions, tailored to match 
            your child's educational aspirations and your financial goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {educationTypes.map((plan) => (
            <EducationTypeCard 
              key={plan.id} 
              plan={plan} 
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <button 
            onClick={() => navigate('/schedule-education-planning-session')}
            className="w-full max-w-md py-4 px-6 bg-gradient-to-r from-[#1C52A0] to-[#0A1E3A] text-white text-lg font-medium rounded-lg hover:bg-gradient-to-r hover:from-[#0A1E3A] hover:to-[#1C52A0] transition-all duration-300"
          >
            Schedule an Education Planning Session
          </button>
        </div>
      </div>
    </div>
  );
};

export default FPETypes;