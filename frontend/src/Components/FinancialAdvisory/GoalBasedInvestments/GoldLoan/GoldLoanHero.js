import React from 'react';
import { 
  ClipboardList,
  Calculator,
  DollarSign,
  ShieldCheck
} from 'lucide-react';

const FeatureCard = ({ Icon, title, description }) => (
  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
    <Icon className="w-6 h-6 text-[#F49611] mb-4" />
    <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
    <p className="text-white/80 text-sm">{description}</p>
  </div>
);

const GoldLoanHero = () => {
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
                  Gold Loan Foreclosure
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Foreclosure Of Gold Loan
              </h1>
              <p className="text-xl text-white/80">
                Foreclosing a gold loan can be a daunting task, laden with multiple intricacies. Whether it's understanding financial implications or ensuring a cost-effective process, our expert guidance simplifies every step, making your gold loan foreclosure transparent and hassle-free.
              </p>
            </div>
            <div className="flex gap-4">
              <button className="bg-[#F49611] hover:bg-[#F6A839] text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Start Planning
              </button>
              <button className="border border-white/30 hover:bg-white/10 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Explore Services
              </button>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FeatureCard 
              Icon={ClipboardList}
              title="Foreclosure Facilitation"
              description="Step-by-step guidance through the foreclosure process, ensuring its completion without hitches."
            />
            <FeatureCard 
              Icon={Calculator}
              title="Financial Implications Review"
              description="Detailed analysis of the financial consequences linked to foreclosing your gold loan."
            />
            <FeatureCard 
              Icon={DollarSign}
              title="Cost Minimization Consultation"
              description="Expert strategies to minimise costs and secure the best foreclosure terms."
            />
            <FeatureCard 
              Icon={ShieldCheck}
              title="Gold Retrieval Assistance"
              description="Aiding in the seamless and secure retrieval of your gold assets post foreclosure."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoldLoanHero;