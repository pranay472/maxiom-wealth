import React from 'react';
import { 
  BookOpen, 
  GraduationCap, 
  Building, 
  Home,
  Target,
  Clock
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

const UGIndiaSolutions = () => {
  return (
    <div className="relative bg-[#113262]">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        {/* Main heading with accent */}
        <div className="flex items-center gap-4 mb-16">
          <div className="w-20 h-1 bg-[#F49611]" />
          <h2 className="text-4xl md:text-5xl font-bold text-white">Why Prioritize India Undergraduate Financial Planning?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="md:col-span-2">
            <p className="text-2xl text-white/90 leading-relaxed">
              India's diverse educational landscape calls for meticulous budgeting and planning
            </p>
          </div>
          
          {/* Statistics cards */}
          <div className="grid grid-cols-2 gap-4">
            <StatisticCard value="1000+" label="Students Guided" />
            <StatisticCard value="95%" label="Success Rate" />
          </div>
        </div>

        {/* Feature grid with mixed sizes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Large feature */}
          <FeatureCard
            icon={BookOpen}
            title="Dynamic Financial Needs"
            description="India's diverse educational landscape calls for meticulous budgeting and planning."
            isLarge={true}
          />
          
          {/* Regular features */}
          <FeatureCard
            icon={GraduationCap}
            title="Savvy Scholarship Hunting"
            description="Navigate the vast terrain of Indian scholarships to minimise tuition expenses."
          />
          
          <FeatureCard
            icon={Building}
            title="Fee Structures Variability"
            description="Understand the differences across state, central, and private institutions."
          />
          
          <FeatureCard
            icon={Home}
            title="Lifestyle and Accommodation"
            description="Budgeting for hostel, PG, or private accommodation is crucial."
          />

          <FeatureCard
            icon={Target}
            title="Future Aspirations"
            description="Ensure the degree aligns with post-graduation plans without financial hiccups."
          />

          <FeatureCard
            icon={Clock}
            title="Early Bird Advantage"
            description="Anticipating costs lets students focus on academics instead of finances."
          />
        </div>
      </div>
    </div>
  );
};

export default UGIndiaSolutions;