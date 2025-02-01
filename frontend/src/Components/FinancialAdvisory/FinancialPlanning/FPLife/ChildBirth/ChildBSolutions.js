import React from 'react';
import { 
  Globe, 
  GraduationCap, 
  Calculator, 
  Users,
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

const ChildBSolutions = () => {
  return (
    <div className="relative bg-[#113262]">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        {/* Main heading with accent */}
        <div className="flex items-center gap-4 mb-16">
          <div className="w-20 h-1 bg-[#F49611]" />
          <h2 className="text-4xl font-bold text-white mb-8">
            Why is Childbirth Financial Planning Crucial?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="md:col-span-2">
            <p className="text-2xl text-white/90 leading-relaxed">
              From hospital bills to baby essentials, childbirth comes with immediate costs. Proper financial planning ensures you're not caught off guard.
            </p>
          </div>
          
          {/* Statistics cards */}
          <div className="grid grid-cols-2 gap-4">
            <StatisticCard value="20+" label="Years Experience" />
            <StatisticCard value="1000+" label="Doctors Served" />
          </div>
        </div>

        {/* Feature grid with mixed sizes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Large feature */}
          <FeatureCard
            icon={TrendingUp}
            title="Immediate Expenses"
            description="From hospital bills to baby essentials, childbirth comes with immediate costs. Proper financial planning ensures you're not caught off guard."
            isLarge={true}
          />
          
          {/* Regular features */}
          <FeatureCard
            icon={GraduationCap}
            title="Future Education"
            description="With education costs soaring, start early. A sound financial strategy today ensures quality education tomorrow."
          />
          
          <FeatureCard
            icon={Shield}
            title="Childcare Costs"
            description="Quality childcare doesn't come cheap. Planning helps in ensuring the best for your child without strains."
          />
          
          <FeatureCard
            icon={Calculator}
            title="Lost Income"
            description="Maternity or paternity leave might mean reduced income. Financial planning bridges this temporary gap."
          />

          <FeatureCard
            icon={Users}
            title="Medical Emergencies"
            description="Unforeseen medical needs can arise. A robust financial plan ensures you're never unprepared."
          />

          <FeatureCard
            icon={Globe}
            title="Life's Uncertainties"
            description="Protect your child's future against life's uncertainties with the right insurance and financial buffers."
          />
        </div>
      </div>
    </div>
  );
};

export default ChildBSolutions;