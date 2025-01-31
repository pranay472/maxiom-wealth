import React from 'react';
import {
  CheckCircle,
  PiggyBank,
  TrendingUp,
  Clock,
  ShieldCheck
} from 'lucide-react';

const SectionTitle = ({ subtitle, title }) => (
  <div className="mb-8">
    <div className="text-[#F49611] font-semibold uppercase tracking-wider mb-2">{subtitle}</div>
    <h2 className="text-3xl md:text-4xl font-bold text-[#113262]">{title}</h2>
  </div>
);

const WhyChooseFIRESection = () => {
  const valuePropositions = [
    "Customized early retirement strategies based on your lifestyle goals",
    "Expert investment planning for sustainable long-term passive income",
    "Advanced tax optimization strategies for early retirement scenarios",
    "Regular portfolio rebalancing to maintain growth while managing risk"
  ];

  const features = [
    {
      icon: PiggyBank,
      title: "40%",
      description: "Average Savings Rate"
    },
    {
      icon: TrendingUp,
      title: "15+",
      description: "Years Earlier Retirement"
    },
    {
      icon: Clock,
      title: "500+",
      description: "FIRE Achievers"
    },
    {
      icon: ShieldCheck,
      title: "92%",
      description: "Success Rate"
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <SectionTitle
              subtitle="Why Choose FIRE Planning"
              title="Accelerate Your Journey to Financial Independence"
            />
            <p className="text-lg text-gray-600 mb-8">
              FIRE planning isn't just about early retirement - it's about gaining the freedom to choose how you spend your time. 
              Our expert FIRE advisory services help you build sustainable passive income streams, optimize your savings rate, 
              and create a robust investment strategy that supports your lifestyle goals decades before traditional retirement age.
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
                Benefits of Professional FIRE Planning
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
                Start Your FIRE Journey Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseFIRESection;