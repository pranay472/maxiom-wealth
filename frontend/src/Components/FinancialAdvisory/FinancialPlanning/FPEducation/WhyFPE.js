import React from 'react';
import { GraduationCap, Calculator, PiggyBank, BookOpen, Shield } from 'lucide-react';

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

const features = [
  {
    icon: Calculator,
    title: "Education Cost Calculator",
    description: "Plan ahead with our advanced calculator that estimates future education costs, taking into account inflation and different types of institutions.",
    isLarge: true
  },
  {
    icon: PiggyBank,
    title: "Savings Strategies",
    description: "Discover optimal savings plans and investment options specifically designed for education funding goals."
  },
  {
    icon: BookOpen,
    title: "Educational Resources",
    description: "Access comprehensive guides about education financing, scholarships, and financial aid opportunities."
  },
  {
    icon: Shield,
    title: "Risk Management",
    description: "Protect your education savings with smart investment strategies and insurance options tailored for education planning."
  }
];

const statistics = [
  {
    value: "$35,720",
    label: "Average Annual College Tuition"
  },
  {
    value: "529",
    label: "Tax-Advantaged Education Plans"
  }
];

const WhyFPE = () => {
  return (
    <div className="relative bg-[#113262]">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        {/* Main heading with accent */}
        <div className="flex items-center gap-4 mb-16">
          <div className="w-20 h-1 bg-[#F49611]" />
          <h2 className="text-4xl md:text-5xl font-bold text-white">Why Financial Planning?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="md:col-span-2">
            <p className="text-2xl text-white/90 leading-relaxed">
              A comprehensive financial plan acts as your roadmap to financial security. Our systematic approach combines cutting-edge technology with expert guidance to help you navigate life's financial milestones with confidence.
            </p>
          </div>
          
          {/* Statistics cards */}
          <div className="grid grid-cols-2 gap-4">
            {statistics.map((stat, index) => (
              <StatisticCard key={index} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>

        {/* Feature grid with mixed sizes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              isLarge={feature.isLarge}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyFPE;