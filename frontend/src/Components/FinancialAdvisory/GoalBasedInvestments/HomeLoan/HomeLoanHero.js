import React from 'react';
import { 
  Home,
  Calculator,
  TrendingDown,
  Receipt
} from 'lucide-react';

const FeatureCard = ({ Icon, title, description }) => (
  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
    <Icon className="w-6 h-6 text-[#F49611] mb-4" />
    <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
    <p className="text-white/80 text-sm">{description}</p>
  </div>
);

const HomeLoanHero = () => {
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
                  Home Loan Repayment
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Make Your Home Truly Yours
              </h1>
              <p className="text-xl text-white/80">
                Seeking strategies to fast-track your home loan repayment? 
                Harness expert guidance on reducing interest, tax-efficient planning, 
                and smart financial strategies for true homeownership.
              </p>
            </div>
            <div className="flex gap-4">
              <button className="bg-[#F49611] hover:bg-[#F6A839] text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Plan Prepayment
              </button>
              <button className="border border-white/30 hover:bg-white/10 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Calculate Savings
              </button>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FeatureCard 
              Icon={Calculator}
              title="Prepayment Strategy"
              description="Optimize your prepayment schedule to reduce total interest outgo"
            />
            <FeatureCard 
              Icon={TrendingDown}
              title="Interest Reduction"
              description="Strategic approaches to minimize interest burden through planned prepayments"
            />
            <FeatureCard 
              Icon={Receipt}
              title="Tax Planning"
              description="Maximize tax benefits while managing home loan repayments efficiently"
            />
            <FeatureCard 
              Icon={Home}
              title="Freedom Planning"
              description="Structured approach to achieve complete home ownership faster"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeLoanHero;