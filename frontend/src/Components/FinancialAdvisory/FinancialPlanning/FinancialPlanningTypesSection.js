import React from 'react';
import { GraduationCap, Target, Users, Briefcase, ChevronRight } from 'lucide-react';

const planTypes = [
  {
    id: 'education-planning',
    title: 'Financial Planning for Education',
    icon: GraduationCap,
    bullets: [
      'Financial Planning for UG Education Abroad',
      'Financial Planning for UG Education in India',
      'Financial Planning for Masters Education Abroad',
      'Financial Planning for Helping Child Overseas'
    ]
  },
  {
    id: 'specific-goals',
    title: 'Financial Planning for Specific Goals',
    icon: Target,
    bullets: [
      'Financial Planning for Car Purchase',
      'Financial Planning for Home Loan Prepayment',
      'Dream Home Purchase',
      'Starting A Business',
      'Foreclosure Of Gold Loan'
    ]
  },
  {
    id: 'life-situations',
    title: 'Financial Planning for Life Situations',
    icon: Users,
    bullets: [
      'Financial Planning for Child Birth',
      'Financial Planning for Child\'s Marriage',
      'Financial Planning for Health Emergency',
      'Financial Planning for Disability',
      'Financial Planning for Single Mothers',
      'Financial Planning for Single Parents',
      'Financial Planning In Case Of Sudden Death Of Income Earner',
      'Financial Planning for Divorce',
      'Financial Planning for Those Migrating From India',
      'Financial Planning for Those Returning To India'
    ]
  },
  {
    id: 'professionals',
    title: 'Financial Planning for Professionals',
    icon: Briefcase,
    bullets: [
      'Financial Planning for Sportspersons',
      'Financial Planning for Doctors',
      'Financial Planning for Retired Bank Employees',
      'Financial Planning for Entrepreneurs'
    ]
  }
];

const PlanTypeCard = ({ plan }) => {
  const { icon: Icon, title, bullets } = plan;
  
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
        
        {/* Links List */}
        <ul className="space-y-3">
          {bullets.map((bullet, index) => (
            <li key={index} className="group/item">
              <a 
                href={`/financial-planning/${bullet.toLowerCase().replace(/\s+/g, '-')}`}
                className="flex items-center p-2 -ml-2 transition-all duration-300"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#F49611] mr-2 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300"></div>
                <span className="text-white/90 group-hover/item:text-[#F49611] text-sm transition-colors duration-300 flex-grow">
                  {bullet}
                </span>
                <ChevronRight className="w-4 h-4 text-[#F49611]/70 group-hover/item:text-[#F49611] transform group-hover/item:translate-x-1 transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const FinancialPlanningTypesSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center mb-16">
          <h2 className="text-4xl font-bold text-[#113262] relative mb-8 drop-shadow-md group">
            Types of Financial Planning
            <span className="absolute -bottom-2 left-1/2 w-3/5 h-[3px] bg-gradient-to-r from-transparent via-[#1C52A0] to-transparent -translate-x-1/2 group-hover:w-4/5 transition-all duration-300"></span>
          </h2>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {planTypes.map((plan) => (
              <PlanTypeCard key={plan.id} plan={plan} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialPlanningTypesSection;