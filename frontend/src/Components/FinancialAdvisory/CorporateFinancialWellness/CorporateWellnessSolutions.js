import React from 'react';
import { 
  GraduationCap, 
  Users, 
  ClipboardCheck, 
  PiggyBank,
  LineChart,
  ShieldCheck 
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

const CorporateWellnessSolutions = () => {
  return (
    <div className="relative bg-[#113262]">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        {/* Main heading with accent */}
        <div className="flex items-center gap-4 mb-16">
          <div className="w-20 h-1 bg-[#F49611]" />
          <h2 className="text-4xl md:text-5xl font-bold text-white">Solutions Offered</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="md:col-span-2">
            <p className="text-2xl text-white/90 leading-relaxed">
              Empower your workforce with comprehensive financial wellness solutions. Our programs combine educational workshops, personalized assessments, and ongoing support to create a financially savvy and productive workforce.
            </p>
          </div>
          
          {/* Statistics cards */}
          <div className="grid grid-cols-2 gap-4">
            <StatisticCard value="1000+" label="Employees Trained" />
            <StatisticCard value="93%" label="Satisfaction Rate" />
          </div>
        </div>

        {/* Feature grid with mixed sizes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Large feature */}
          <FeatureCard
            icon={GraduationCap}
            title="Financial Education Workshops"
            description="Comprehensive workshops covering essential financial topics from basic budgeting to advanced investment strategies. Our interactive sessions are designed to engage employees at all levels, providing practical knowledge they can immediately apply. Topics include debt management, tax planning, retirement preparation, and investment fundamentals."
            isLarge={true}
          />
          
          {/* Regular features */}
          <FeatureCard
            icon={Users}
            title="Employee Benefits Advisory"
            description="Expert guidance to help employees maximize their benefit packages and make informed financial decisions."
          />
          
          <FeatureCard
            icon={ClipboardCheck}
            title="Personal Financial Assessments"
            description="Individual financial health checks and personalized action plans for each employee."
          />
          
          <FeatureCard
            icon={PiggyBank}
            title="Retirement Planning Services"
            description="Structured retirement planning programs to secure your employees' financial future."
          />
          
          <FeatureCard
            icon={LineChart}
            title="Investment Advisory"
            description="Professional guidance on investment options and portfolio management strategies."
          />
        </div>
      </div>
    </div>
  );
};

export default CorporateWellnessSolutions;