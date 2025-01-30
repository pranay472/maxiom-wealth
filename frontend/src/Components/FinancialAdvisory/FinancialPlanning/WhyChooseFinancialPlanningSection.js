import React from 'react';
import { CheckCircle, Calculator, Users, Clock, Award } from 'lucide-react';

const SectionTitle = ({ subtitle, title }) => (
  <div className="mb-8">
    <div className="text-[#F49611] font-semibold uppercase tracking-wider mb-2">{subtitle}</div>
    <h2 className="text-3xl md:text-4xl font-bold text-[#113262]">{title}</h2>
  </div>
);

const WhyChooseFinancialPlanningSection = () => {
  const valuePropositions = [
    "Personalized financial strategies aligned with your life goals",
    "Comprehensive planning covering investments, tax, insurance & estate",
    "Regular review and plan adjustment based on life changes",
    "Team of certified financial planners with deep expertise"
  ];

  const features = [
    {
      icon: Calculator,
      title: "1000+",
      description: "Financial Plans Created"
    },
    {
      icon: Users,
      title: "98%",
      description: "Client Retention Rate"
    },
    {
      icon: Clock,
      title: "25+",
      description: "Years Experience"
    },
    {
      icon: Award,
      title: "SEBI",
      description: "Registered Advisor"
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <SectionTitle
              subtitle="Why Choose Us"
              title="Expert Financial Planning with a Personal Touch"
            />
            <p className="text-lg text-gray-600 mb-8">
              Our comprehensive financial planning approach combines deep expertise with 
              personalized attention. We don't just create plans; we build long-term 
              relationships, ensuring your financial strategy evolves as your life does. 
              With our team of certified planners, you get institutional-grade expertise 
              with boutique-level service.
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
                Our Financial Planning Approach
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
                Get Your Financial Plan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseFinancialPlanningSection;