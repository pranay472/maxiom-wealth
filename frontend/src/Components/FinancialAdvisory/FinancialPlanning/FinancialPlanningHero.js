import React from 'react';
import { PieChart, Compass, TrendingUp, ShieldCheck } from 'lucide-react';

const FeatureCard = ({ Icon, title, description }) => (
  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
    <Icon className="w-6 h-6 text-[#F49611] mb-4" />
    <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
    <p className="text-white/80 text-sm">{description}</p>
  </div>
);

const FinancialPlanningHero = () => {
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
                <span className="text-[#F49611] font-medium uppercase tracking-wider text-sm">
                  Comprehensive Financial Planning
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Secure Your Financial Future with Expert Guidance
              </h1>
              <p className="text-xl text-white/80">
                Create a robust financial roadmap with our personalized planning services. From retirement planning to tax optimization, we help you make informed decisions for lasting financial security.
              </p>
            </div>
            <div className="flex gap-4">
              <button className="bg-[#F49611] hover:bg-[#F6A839] text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Get Your Financial Plan
              </button>
              <button className="border border-white/30 hover:bg-white/10 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Schedule Consultation
              </button>
            </div>
          </div>

          {/* Right Column */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FeatureCard
              Icon={PieChart}
              title="Asset Allocation"
              description="Strategic distribution of investments across multiple asset classes"
            />
            <FeatureCard
              Icon={Compass}
              title="Retirement Planning"
              description="Build a secure retirement corpus with systematic investing"
            />
            <FeatureCard
              Icon={TrendingUp}
              title="Wealth Creation"
              description="Long-term wealth building strategies aligned with your goals"
            />
            <FeatureCard
              Icon={ShieldCheck}
              title="Risk Management"
              description="Comprehensive protection through insurance and diversification"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialPlanningHero;