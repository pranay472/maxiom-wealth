import React from 'react';
import { 
  Briefcase, 
  LineChart, 
  Calculator, 
  ShieldCheck,
  Globe,
  FileText
} from 'lucide-react';

const FeatureCard = ({ Icon, title, description }) => (
  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
    <Icon className="w-6 h-6 text-[#F49611] mb-4" />
    <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
    <p className="text-white/80 text-sm">{description}</p>
  </div>
);

const SinglePHero = () => {
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
                  Securing Futures, Strengthening Families.
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Financial Planning For Single Parent
              </h1>
              <p className="text-xl text-white/80">
                Single parenting poses unique financial challenges. With tailored strategies, expert advisories, and tax-efficient planning, we help single parents build a resilient financial foundation for their households.
              </p>
            </div>
            <div className="flex gap-4">
              <button className="bg-[#F49611] hover:bg-[#F6A839] text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Start Planning
              </button>
              <button className="border border-white/30 hover:bg-white/10 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Learn More
              </button>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FeatureCard 
              Icon={Globe}
              title="Portfolio Advisory"
              description="Achieve an optimal mix of investments that secure your child's financial future, with our guidance."
            />
            <FeatureCard 
              Icon={FileText}
              title="Investment Counselling"
              description="Our expert advisors offer precise recommendations designed for the financial needs of single parents."
            />
            <FeatureCard 
              Icon={Calculator}
              title="Custom Financial Plans"
              description="Get bespoke financial blueprints that address the unique challenges faced by single parent households."
            />
            <FeatureCard 
              Icon={ShieldCheck}
              title="Insurance Consultation"
              description="Comprehensive coverage solutions ensuring peace of mind"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePHero;