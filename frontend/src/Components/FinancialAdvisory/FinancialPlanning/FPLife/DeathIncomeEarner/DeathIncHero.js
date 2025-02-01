import React from 'react';
import { 
  Briefcase, 
  LineChart, 
  Calculator, 
  ShieldCheck
} from 'lucide-react';

const FeatureCard = ({ Icon, title, description }) => (
  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
    <Icon className="w-6 h-6 text-[#F49611] mb-4" />
    <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
    <p className="text-white/80 text-sm">{description}</p>
  </div>
);

const DeathIncHero = () => {
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
                  Sudden Loss Financial Planning. Securing Futures Amidst Unforeseen Tragedies.
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Financial Planning In Case Of Sudden Death of the Income Earner
              </h1>
              <p className="text-xl text-white/80">
                The sudden loss of an income earner can throw a family into financial chaos. Our dedicated approach assists families in navigating this challenging phase, ensuring a steady financial future. From emergency planning to insurance claims assistance, we're with you every step of the way.
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
              Icon={Briefcase}
              title="Emergency Financial Blueprint"
              description="Offering immediate financial strategies to cater to immediate needs and requirements."
            />
            <FeatureCard 
              Icon={LineChart}
              title="Insurance Claims Assistance"
              description="Guiding families through the intricate and often overwhelming insurance claim process."
            />
            <FeatureCard 
              Icon={Calculator}
              title="Investment Advisory"
              description="Helping in the smooth transition and management of the deceased's investments."
            />
            <FeatureCard 
              Icon={ShieldCheck}
              title="Debt and Asset Management"
              description="Strategizing the management of debts, mortgages, and assets for long-term stability."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeathIncHero;