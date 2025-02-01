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

const ChildBirthHero = () => {
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
                  Secure your child's future today
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Financial Planning For Child Birth
              </h1>
              <p className="text-xl text-white/80">
                Expecting a new addition to your family? Navigating the financial aspects of childbirth can be overwhelming. From prenatal care to education savings, our expert guidance ensures you're financially prepared for every step, prioritising tailored solutions for expecting parents.
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
              title="Portfolio Management"
              description="Ensure your investments are poised for growth. We monitor, manage, and rebalance your portfolio in line with childbirth financial goals."
            />
            <FeatureCard 
              Icon={LineChart}
              title="Investment Advisory"
              description="Crafting the right investment strategy is crucial for your child's future. We provide expert advice to navigate the myriad investment options efficiently."
            />
            <FeatureCard 
              Icon={Calculator}
              title="Personalised Financial Planning"
              description="Every family's needs are unique. Our personalised plans ensure your financial preparations align with your aspirations for your child's future."
            />
            <FeatureCard 
              Icon={ShieldCheck}
              title="Family Insurance Consultation"
              description="Safeguarding your family's future is paramount. Our advisors offer the best insurance recommendations tailored for your family's protection."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChildBirthHero;