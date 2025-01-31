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

const CarPurchaseSolutions = () => {
  return (
    <div className="relative bg-[#113262]">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        {/* Main heading with accent */}
        <div className="flex items-center gap-4 mb-16">
          <div className="w-20 h-1 bg-[#F49611]" />
          <h2 className="text-4xl md:text-5xl font-bold text-white">Why Car Purchase Planning Matters?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="md:col-span-2">
            <p className="text-2xl text-white/90 leading-relaxed">
              Make informed decisions for your dream car purchase
            </p>
          </div>
          
          {/* Statistics cards */}
          <div className="grid grid-cols-2 gap-4">
            <StatisticCard value="500+" label="Happy Car Owners" />
            <StatisticCard value="97%" label="Success Rate" />
          </div>
        </div>

        {/* Feature grid with mixed sizes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Large feature */}
          <FeatureCard
            icon={FileText}
            title="Informed Decisions"
            description="Understand various financing options and their implications to make informed decisions."
            isLarge={true}
          />
          
          {/* Regular features */}
          <FeatureCard
            icon={Calculator}
            title="Budgeting Ease"
            description="Determine your budget clearly and avoid overspending with expert guidance."
          />
          
          <FeatureCard
            icon={PiggyBank}
            title="Future Savings"
            description="Analyse the total cost of ownership for long-term savings."
          />
          
          <FeatureCard
            icon={CreditCard}
            title="Loan Analysis"
            description="Know when to opt for loans, and when to avoid, ensuring a smoother car purchase journey."
          />

          <FeatureCard
            icon={TrendingDown}
            title="Depreciation Insight"
            description="Cars depreciate; understanding this can aid in choosing the right model and resale time."
          />

          <FeatureCard
            icon={Shield}
            title="Insurance Clarity"
            description="Navigate the myriad of insurance choices with clarity, ensuring your car is adequately protected."
          />
        </div>
      </div>
    </div>
  );
};

export default CarPurchaseSolutions;