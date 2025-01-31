import React from 'react';
import { Hourglass, TrendingUp, Lock, PiggyBank } from 'lucide-react';

const FeatureCard = ({ Icon, title, description }) => (
  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
    <Icon className="w-6 h-6 text-[#F49611] mb-4" />
    <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
    <p className="text-white/80 text-sm">{description}</p>
  </div>
);

const RetirementHeroSection = () => {
  return (
    <div className="relative bg-[#113262] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#1C52A0] opacity-50 transform -skew-y-12"></div>
      </div>
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center pt-12">
          {/* Left Column */}
          <div>
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-12 h-0.5 bg-[#F49611]"></div>
                <span className="text-[#F49611] font-medium uppercase tracking-wider text-sm">Retirement Planning</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Secure Your Golden Years Today
              </h1>
              <p className="text-xl text-white/80">
                Create a robust retirement strategy that ensures financial independence and peace of mind. Let us help you build a retirement corpus that supports your desired lifestyle.
              </p>
            </div>
            <div className="flex gap-4">
              <button className="bg-[#F49611] hover:bg-[#F6A839] text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Start Planning Now
              </button>
              <button className="border border-white/30 hover:bg-white/10 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Calculate Needs
              </button>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FeatureCard 
              Icon={Hourglass}
              title="Early Planning"
              description="Start early to maximize the power of compounding and secure your future"
            />
            <FeatureCard 
              Icon={TrendingUp}
              title="Strategic Growth"
              description="Optimized portfolio allocation for sustainable long-term returns"
            />
            <FeatureCard 
              Icon={Lock}
              title="Capital Protection"
              description="Preserve your wealth with risk-managed investment strategies"
            />
            <FeatureCard 
              Icon={PiggyBank}
              title="Regular Income"
              description="Generate steady post-retirement income through structured planning"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RetirementHeroSection;