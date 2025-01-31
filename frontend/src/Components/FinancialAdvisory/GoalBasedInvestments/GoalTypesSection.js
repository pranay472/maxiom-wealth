import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Car, Home, Building2, Briefcase, CircleDollarSign, GraduationCap, Plane, HeartPulse } from 'lucide-react';

const goals = [
  {
    id: 'car-purchase',
    title: 'Car Purchase',
    icon: Car,
    description: 'Strategic investment plans for your dream car, considering depreciation and optimal financing.',
    timeframe: '2-5 Years',
    riskProfile: 'Low to Medium',
    minInvestment: '₹10L'
  },
  {
    id: 'home-loan',
    title: 'Home Loan Repayment',
    icon: Home,
    description: 'Accelerate your home loan closure through structured investments and tax-efficient planning.',
    timeframe: '5-15 Years',
    riskProfile: 'Medium',
    minInvestment: '₹25L'
  },
  {
    id: 'dream-home',
    title: 'Dream Home Purchase',
    icon: Building2,
    description: 'Long-term investment strategy to accumulate the corpus needed for your dream home.',
    timeframe: '7-15 Years',
    riskProfile: 'Medium to High',
    minInvestment: '₹50L'
  },
  {
    id: 'business',
    title: 'Starting A Business',
    icon: Briefcase,
    description: 'Build your capital base systematically for your entrepreneurial journey.',
    timeframe: '5-10 Years',
    riskProfile: 'High',
    minInvestment: '₹40L'
  },
  {
    id: 'education',
    title: 'Child Education',
    icon: GraduationCap,
    description: 'Secure your child\'s future with our education-focused investment strategies.',
    timeframe: '10-15 Years',
    riskProfile: 'Medium to High',
    minInvestment: '₹30L'
  },
  {
    id: 'retirement',
    title: 'Retirement Planning',
    icon: HeartPulse,
    description: 'Create a robust retirement corpus with our scientific investment approach.',
    timeframe: '15-30 Years',
    riskProfile: 'Balanced',
    minInvestment: '₹50L'
  },
  {
    id: 'vacation',
    title: 'Dream Vacation',
    icon: Plane,
    description: 'Plan your perfect getaway with structured short-term investments.',
    timeframe: '1-3 Years',
    riskProfile: 'Low',
    minInvestment: '₹5L'
  },
  {
    id: 'gold-loan',
    title: 'Gold Loan Foreclosure',
    icon: CircleDollarSign,
    description: 'Strategic planning to release your gold collateral through systematic investments.',
    timeframe: '1-3 Years',
    riskProfile: 'Low',
    minInvestment: '₹5L'
  }
];

const GoalCard = ({ goal }) => {
  const navigate = useNavigate();
  const { icon: Icon, title, description, timeframe, riskProfile, minInvestment, id } = goal;
  
  const handleLearnMore = () => {
    switch(id) {
      case 'car-purchase':
        navigate('/financial-advisory/goal-based-investments/car-purchase');
        break;
      case 'home-loan':
        navigate('/financial-advisory/goal-based-investments/home-loan');
        break;
      case 'dream-home':
        navigate('/financial-advisory/goal-based-investments/dream-home');
        break;
      case 'business':
        navigate('/financial-advisory/goal-based-investments/business');
        break;
      case 'education':
        navigate('/financial-advisory/goal-based-investments/education');
        break;
      case 'retirement':
        navigate('/financial-advisory/goal-based-investments/retirement');
        break;
      case 'vacation':
        navigate('/financial-advisory/goal-based-investments/vacation');
        break;
      case 'gold-loan':
        navigate('/financial-advisory/goal-based-investments/gold-loan');
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
        <button 
          onClick={handleLearnMore}
          className="mt-6 w-full bg-white/10 hover:bg-white/20 text-white py-3 rounded-xl font-semibold transition-colors duration-300"
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

const GoalTypesSection = () => {
  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-12 h-0.5 bg-[#F49611]"></div>
              <span className="text-[#F49611] font-medium uppercase tracking-wider">Investment Goals</span>
              <div className="w-12 h-0.5 bg-[#F49611]"></div>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#113262] mb-6">
            Transform Your Dreams into Reality
          </h2>
          <p className="text-xl text-gray-600">
            Explore our comprehensive range of goal-based investment strategies, 
            each crafted to align with your unique life objectives.
          </p>
        </div>

        {/* Goals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {goals.map((goal) => (
            <GoalCard key={goal.id} goal={goal} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <button className="w-full max-w-md py-4 px-6 bg-gradient-to-r from-[#1C52A0] to-[#0A1E3A] text-white text-lg font-medium rounded-lg hover:bg-gradient-to-r hover:from-[#0A1E3A] hover:to-[#1C52A0] transition-all duration-300">
            Schedule a Goal Planning Session
          </button>
        </div>
      </div>
    </div>
  );
};

export default GoalTypesSection;