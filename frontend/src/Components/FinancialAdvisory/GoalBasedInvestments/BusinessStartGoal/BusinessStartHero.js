import React from 'react';
import { 
  Briefcase,
  Brain,
  Scale,
  BarChart
} from 'lucide-react';

const FeatureCard = ({ Icon, title, description }) => (
  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
    <Icon className="w-6 h-6 text-[#F49611] mb-4" />
    <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
    <p className="text-white/80 text-sm">{description}</p>
  </div>
);

const BusinessStartHero = () => {
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
                  Business Advisory
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Launch Your Business Vision With Expert Guidance
              </h1>
              <p className="text-xl text-white/80">
                Venturing into the entrepreneurial world? Secure your startup's future with expert guidance, 
                strategic business planning, legal insights, and thorough feasibility analysis. From idea 
                validation to execution, we're here to assist.
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
              Icon={Brain}
              title="Deep Expertise"
              description="Deep knowledge in startup ecosystems ensures you get the best guidance."
            />
            <FeatureCard 
              Icon={Briefcase}
              title="Strategic Vision"
              description="Our business planning approach is tailored for long-term success."
            />
            <FeatureCard 
              Icon={Scale}
              title="Legal Mastery"
              description="Being abreast with legal nuances ensures you stay compliant."
            />
            <FeatureCard 
              Icon={BarChart}
              title="Market Analysis"
              description="Our thorough research determines if your idea will resonate with the target audience."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessStartHero;