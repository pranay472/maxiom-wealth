import React from 'react';
import { 
  FileText, 
  Calculator, 
  PiggyBank, 
  CreditCard,
  TrendingDown,
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

const GoldLoanSolutions = () => {
  return (
    <div className="relative bg-[#113262]">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        {/* Main heading with accent */}
        <div className="flex items-center gap-4 mb-16">
          <div className="w-20 h-1 bg-[#F49611]" />
          <h2 className="text-4xl md:text-5xl font-bold text-white">Why Choose Expert Guidance for Gold Loan Foreclosure?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="md:col-span-2">
            <p className="text-2xl text-white/90 leading-relaxed">
              Expert guidance ensures a smooth and efficient gold loan foreclosure process
            </p>
          </div>
          
          {/* Statistics cards */}
          <div className="grid grid-cols-2 gap-4">
            <StatisticCard value="98%" label="Success Rate" />
            <StatisticCard value="1000+" label="Happy Clients" />
          </div>
        </div>

        {/* Feature grid with mixed sizes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Large feature */}
          <FeatureCard
            icon={FileText}
            title="Financial Clarity"
            description="Comprehensive insight into the financial ramifications of loan foreclosure."
            isLarge={true}
          />
          
          {/* Regular features */}
          <FeatureCard
            icon={Calculator}
            title="Cost Efficiency"
            description="Strategies to minimise charges and secure optimal terms."
          />
          
          <FeatureCard
            icon={PiggyBank}
            title="Transparent Process"
            description="Ensuring that each step of the process is clear and fair."
          />
          
          <FeatureCard
            icon={CreditCard}
            title="Navigational Ease"
            description="Expert guidance simplifies complexities in foreclosure procedures."
          />

          <FeatureCard
            icon={TrendingDown}
            title="Retrieving Valuables"
            description="Secure and swift retrieval of your precious gold assets."
          />

          <FeatureCard
            icon={Shield}
            title="Future Financial Advice"
            description="Recommendations to improve financial standing post-foreclosure."
          />
        </div>
      </div>
    </div>
  );
};

export default GoldLoanSolutions;