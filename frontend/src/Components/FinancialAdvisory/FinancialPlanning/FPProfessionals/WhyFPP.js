import React from 'react';
import { Calculator, PieChart, TrendingUp, ShieldCheck, Wallet } from 'lucide-react';

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

const WhyFPP = () => {
  return (
    <div className="relative bg-[#113262]">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        {/* Main heading with accent */}
        <div className="flex items-center gap-4 mb-16">
          <div className="w-20 h-1 bg-[#F49611]" />
          <h2 className="text-4xl md:text-5xl font-bold text-white">Financial Planning for Professionals</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="md:col-span-2">
            <p className="text-2xl text-white/90 leading-relaxed">
              Navigate the complex financial landscape of your professional journey with strategic, personalized financial planning tailored to the unique challenges and opportunities faced by career-driven individuals.
            </p>
          </div>
          
          {/* Statistics cards */}
          <div className="grid grid-cols-2 gap-4">
            <StatisticCard value="25+" label="Years Experience" />
            <StatisticCard value="1000+" label="Professionals Served" />
          </div>
        </div>

        {/* Feature grid with mixed sizes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Large feature */}
          <FeatureCard
            icon={Calculator}
            title="Professional Growth Financial Strategy"
            description="Comprehensive financial planning that supports your career trajectory, from early-stage professionals to senior executives, addressing income optimization, investment, and career transition needs."
            isLarge={true}
          />
          
          {/* Regular features */}
          <FeatureCard
            icon={PieChart}
            title="Income Optimization"
            description="Strategic financial planning to maximize your earning potential, manage variable incomes, and create sustainable wealth-building strategies."
          />
          
          <FeatureCard
            icon={TrendingUp}
            title="Career Transition Wealth Management"
            description="Financial guidance for professionals navigating job changes, entrepreneurial ventures, or international career opportunities."
          />
          
          <FeatureCard
            icon={ShieldCheck}
            title="Professional Risk Mitigation"
            description="Comprehensive financial protection strategies including professional liability coverage, emergency funds, and income protection plans."
          />
          
          <FeatureCard
            icon={Wallet}
            title="Advanced Wealth Accumulation"
            description="Sophisticated investment strategies tailored to high-performing professionals, focusing on tax efficiency, retirement planning, and long-term wealth creation."
          />
        </div>
      </div>
    </div>
  );
};

export default WhyFPP;