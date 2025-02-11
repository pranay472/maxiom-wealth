import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GraduationCap, Target, Users, Briefcase, ChevronRight } from 'lucide-react';

const planTypes = [
  {
    id: 'education-planning',
    title: 'Financial Planning for Education',
    icon: GraduationCap,
    description: 'Comprehensive financial strategies for supporting educational goals, covering both domestic and international academic pursuits.',
    timeframe: '5-15 Years',
    riskProfile: 'Moderate Balanced',
    minInvestment: '₹25L'
  },
  {
    id: 'professionals',
    title: 'Financial Planning for Professionals',
    icon: Briefcase,
    description: 'Tailored financial solutions addressing unique challenges and opportunities for diverse professional backgrounds.',
    timeframe: '10-20 Years',
    riskProfile: 'Dynamic Balanced',
    minInvestment: '₹50L'
  },
  {
    id: 'life-situations',
    title: 'Financial Planning for Life Situations',
    icon: Users,
    description: 'Adaptive financial planning addressing critical life transitions, emergencies, and personal challenges with comprehensive support.',
    timeframe: '0-25 Years',
    riskProfile: 'Flexible Adaptive',
    minInvestment: '₹10L'
  }
];

const PlanTypeCard = ({ plan }) => {
  const { icon: Icon, title, description, timeframe, riskProfile, minInvestment, id } = plan;
  const navigate = useNavigate();

  const handleExplore = () => {
    switch(id) {
      case 'education-planning':
        navigate('/financial-planning/education');
        break;
      case 'professionals':
        navigate('/financial-planning/professionals');
        break;
      case 'life-situations':
        navigate('/financial-planning/life-situations');
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

const FinancialPlanningTypesSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-12 h-0.5 bg-[#F49611]"></div>
              <span className="text-[#F49611] font-medium uppercase tracking-wider">Financial Planning</span>
              <div className="w-12 h-0.5 bg-[#F49611]"></div>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#113262] mb-6">
            Tailored Financial Solutions for Every Journey
          </h2>
          <p className="text-xl text-gray-600">
            Discover personalized financial planning strategies designed to address your unique life stages, professional challenges, and educational aspirations.
          </p>
        </div>
        
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
    </section>
  );
};

export default FinancialPlanningTypesSection;