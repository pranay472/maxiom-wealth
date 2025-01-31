import React from 'react';
import { CheckCircle, Clock, PiggyBank, Shield, TrendingUp } from 'lucide-react';

const SectionTitle = ({ subtitle, title }) => (
  <div className="mb-8">
    <div className="text-[#F49611] font-semibold uppercase tracking-wider mb-2">{subtitle}</div>
    <h2 className="text-3xl md:text-4xl font-bold text-[#113262]">{title}</h2>
  </div>
);

const WhyChooseRetirementSection = () => {
  const valuePropositions = [
    "Customized retirement planning based on your lifestyle goals",
    "Strategic asset allocation with focus on long-term wealth preservation",
    "Regular portfolio monitoring and risk-adjusted rebalancing",
    "Structured solutions for steady post-retirement income"
  ];

  const features = [
    {
      icon: Clock,
      title: "25+",
      description: "Years Planning Experience"
    },
    {
      icon: PiggyBank,
      title: "₹250Cr+",
      description: "Retirement Assets Managed"
    },
    {
      icon: Shield,
      title: "93%",
      description: "Client Goal Achievement"
    },
    {
      icon: TrendingUp,
      title: "1000+",
      description: "Happy Retirees"
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <SectionTitle
              subtitle="Why Choose Us"
              title="Expert Retirement Planning with Proven Track Record"
            />
            <p className="text-lg text-gray-600 mb-8">
              Our comprehensive retirement planning approach combines decades of expertise with 
              innovative solutions. We understand that retirement isn't just about savings – it's 
              about creating a sustainable financial framework that ensures peace of mind throughout 
              your golden years. Our strategies are designed to provide both growth and income 
              security.
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
              <h3 className="text-2xl font-bold text-[#113262] mb-6">Our Retirement Solutions</h3>
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
                Plan Your Retirement Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseRetirementSection;