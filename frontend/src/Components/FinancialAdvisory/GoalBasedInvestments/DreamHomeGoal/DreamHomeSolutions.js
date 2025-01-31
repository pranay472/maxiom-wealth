import React from 'react';
import { 
  Building, 
  Shield, 
  TrendingUp, 
  Receipt,
  Home,
  HeartHandshake
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

const DreamHomeSolutions = () => {
  return (
    <div className="relative bg-[#113262]">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        {/* Main heading with accent */}
        <div className="flex items-center gap-4 mb-16">
          <div className="w-20 h-1 bg-[#F49611]" />
          <h2 className="text-4xl md:text-5xl font-bold text-white">Why is Buying a Home Important?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="md:col-span-2">
            <p className="text-2xl text-white/90 leading-relaxed">
              Secure your future with a smart investment in your dream home
            </p>
          </div>
          
          {/* Statistics cards */}
          <div className="grid grid-cols-2 gap-4">
            <StatisticCard value="12%" label="Avg. Annual Appreciation" />
            <StatisticCard value="30%" label="Tax Benefits" />
          </div>
        </div>

        {/* Feature grid with mixed sizes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Large feature */}
          <FeatureCard
            icon={Building}
            title="Lifelong Investment"
            description="Buying a home is not just a purchase, but a long-term investment ensuring stability and asset appreciation."
            isLarge={true}
          />
          
          {/* Regular features */}
          <FeatureCard
            icon={Shield}
            title="Financial Security"
            description="Owning property provides financial security, guarding against unpredictable rental markets."
          />
          
          <FeatureCard
            icon={TrendingUp}
            title="Asset Creation"
            description="As property value increases, your wealth grows, strengthening your financial profile."
          />
          
          <FeatureCard
            icon={Receipt}
            title="Tax Benefits"
            description="Home loans provide tax benefits, making it a smart financial move in the long run."
          />

          <FeatureCard
            icon={HeartHandshake}
            title="Emotional Satisfaction"
            description="There's an unmatched emotional satisfaction in owning a home, a space truly your own."
          />

          <FeatureCard
            icon={Home}
            title="Retirement Assurance"
            description="A home ensures a comfortable space during retirement, reducing dependency on rent."
          />
        </div>
      </div>
    </div>
  );
};

export default DreamHomeSolutions;