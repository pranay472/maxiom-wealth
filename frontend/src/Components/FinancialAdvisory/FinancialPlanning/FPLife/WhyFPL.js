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

const WhyFPL = () => {
  return (
    <div className="relative bg-[#113262]">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        {/* Main heading with accent */}
        <div className="flex items-center gap-4 mb-16">
          <div className="w-20 h-1 bg-[#F49611]" />
          <h2 className="text-4xl md:text-5xl font-bold text-white">Financial Planning for Life's Journey</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="md:col-span-2">
            <p className="text-2xl text-white/90 leading-relaxed">
              Life is a series of unique financial challenges and opportunities. Our personalized financial planning adapts to your specific life stage, helping you navigate each milestone with confidence and strategic foresight.
            </p>
          </div>
          
          {/* Statistics cards */}
          <div className="grid grid-cols-2 gap-4">
            <StatisticCard value="25+" label="Years Experience" />
            <StatisticCard value="1000+" label="Families Served" />
          </div>
        </div>

        {/* Feature grid with mixed sizes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Large feature */}
          <FeatureCard
            icon={Calculator}
            title="Life Stage Financial Planning"
            description="Whether you're starting your career, getting married, having children, or approaching retirement, we create tailored financial strategies that align with your unique life circumstances and evolving goals."
            isLarge={true}
          />
          
          {/* Regular features */}
          <FeatureCard
            icon={PieChart}
            title="Career Transition Support"
            description="Financial guidance during job changes, career shifts, or entrepreneurial ventures to ensure financial stability and growth."
          />
          
          <FeatureCard
            icon={TrendingUp}
            title="Family Financial Security"
            description="Comprehensive planning for marriage, childbirth, education funding, and protecting your family's financial future."
          />
          
          <FeatureCard
            icon={ShieldCheck}
            title="Wealth Preservation"
            description="Strategies for managing inheritance, protecting assets, and creating generational wealth transfer plans."
          />
          
          <FeatureCard
            icon={Wallet}
            title="Retirement and Legacy Planning"
            description="Personalized retirement strategies that consider your lifestyle, health, and long-term family financial goals."
          />
        </div>
      </div>
    </div>
  );
};

export default WhyFPL;