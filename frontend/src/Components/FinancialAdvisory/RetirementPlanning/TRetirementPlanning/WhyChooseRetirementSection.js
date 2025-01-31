import React from 'react';
import {
  CheckCircle,
  PiggyBank,
  TrendingUp,
  Users,
  ShieldCheck
} from 'lucide-react';

const SectionTitle = ({ subtitle, title }) => (
  <div className="mb-8">
    <div className="text-[#F49611] font-semibold uppercase tracking-wider mb-2">{subtitle}</div>
    <h2 className="text-3xl md:text-4xl font-bold text-[#113262]">{title}</h2>
  </div>
);

const WhyChooseRetirementSection = () => {
  const valuePropositions = [
    "Customized retirement strategies aligned with your life goals",
    "Tax-efficient investment planning to maximize your savings",
    "Regular portfolio monitoring and rebalancing for optimal performance",
    "Comprehensive estate planning and wealth transfer strategies"
  ];

  const features = [
    {
      icon: PiggyBank,
      title: "95%",
      description: "Client Satisfaction"
    },
    {
      icon: TrendingUp,
      title: "40%",
      description: "Average Portfolio Growth"
    },
    {
      icon: Users,
      title: "2000+",
      description: "Families Served"
    },
    {
      icon: ShieldCheck,
      title: "90%",
      description: "Goal Achievement"
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <SectionTitle
              subtitle="Why Choose Professional Planning"
              title="Secure Your Tomorrow with Expert Retirement Planning"
            />
            <p className="text-lg text-gray-600 mb-8">
              Retirement planning is more than just saving money - it's about ensuring your financial 
              security and maintaining your lifestyle after your working years. Our expert retirement 
              advisory services help you navigate complex financial decisions, optimize your investments, 
              and create a robust plan for a comfortable retirement.
            </p>
            <div className="grid grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-4">
                  <feature.icon className="w-8 h-8 text-[#F49611]" />
                  <div>
                    <div className="text-3xl font-bold text-[#113262] mb-1">{feature.title}</div>
                    <div className="text-gray-600">{feature.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#E8EEF6] rounded-2xl p-8 md:p-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-[#113262] mb-6">
                Benefits of Professional Retirement Planning
              </h3>
              {valuePropositions.map((point, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#F49611] flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700">{point}</span>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <button className="w-full bg-[#113262] hover:bg-[#1C52A0] text-white px-8 py-4 rounded-xl font-semibold transition-colors duration-300">
                Start Your Retirement Planning Journey
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseRetirementSection;