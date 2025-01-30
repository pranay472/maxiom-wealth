import React from 'react';
import { CheckCircle, ChartBar, Shield, Target, TrendingUp } from 'lucide-react';

const SectionTitle = ({ subtitle, title }) => (
  <div className="mb-8">
    <div className="text-[#F49611] font-semibold uppercase tracking-wider mb-2">{subtitle}</div>
    <h2 className="text-3xl md:text-4xl font-bold text-[#113262]">{title}</h2>
  </div>
);

const WhyChooseSection = () => {
  const valuePropositions = [
    "Roots & Wings philosophy ensuring capital preservation with growth",
    "Scientific approach to goal-based portfolio construction",
    "Regular rebalancing with stringent risk monitoring",
    "Dedicated relationship manager for personalized service"
  ];

  const features = [
    {
      icon: Target,
      title: "99.8%",
      description: "Goal Achievement Rate"
    },
    {
      icon: ChartBar,
      title: "12.6%",
      description: "Average Annual Returns"
    },
    {
      icon: Shield,
      title: "15+",
      description: "Years Market Experience"
    },
    {
      icon: TrendingUp,
      title: "₹450Cr+",
      description: "Assets Under Advisory"
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <SectionTitle
              subtitle="Why Choose Us"
              title="Scientific Investment Approach with Proven Results"
            />
            <p className="text-lg text-gray-600 mb-8">
              Our differentiated investment methodology combines deep market expertise with sophisticated analytics. 
              We bring institutional-grade investment strategies to individual investors, ensuring each portfolio 
              is precisely engineered to achieve specific life goals while managing risks.
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
              <h3 className="text-2xl font-bold text-[#113262] mb-6">Our Value Propositions</h3>
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
                Schedule a Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseSection;