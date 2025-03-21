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

const ChildMarHero = () => {
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
                  Wedding Financial Planning. Crafting Dream Weddings, Financially.
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Financial Planning For Your Child's Marriage
              </h1>
              <p className="text-xl text-white/80">
                Planning your child's wedding is a monumental occasion, one that requires foresight and financial precision. Our expertise offers a holistic view, from tailored wedding expenses planning to tax-efficient strategies, ensuring the celebration remains joyous and stress-free.
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
              title="Detailed Budgeting"
              description="Comprehensive financial breakdown tailored for diverse wedding-related expenses."
            />
            <FeatureCard 
              Icon={LineChart}
              title="Tax-efficient Consultations"
              description="Smart strategies to maximize tax benefits related to wedding expenditures."
            />
            <FeatureCard 
              Icon={Calculator}
              title="Investment Advisory"
              description="Crafting a growth strategy to gather adequate funds for the wedding over time."
            />
            <FeatureCard 
              Icon={ShieldCheck}
              title="Insurance Considerations"
              description="Evaluating the need for insurance, such as event cancellation or other unforeseen events."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChildMarHero;