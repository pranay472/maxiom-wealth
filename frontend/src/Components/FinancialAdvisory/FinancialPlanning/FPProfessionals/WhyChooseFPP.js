import React from "react";
import { CheckCircle, Calculator, Users, Clock, Award } from "lucide-react";

const SectionTitle = ({ subtitle, title }) => (
  <div className="mb-8">
    <div className="text-[#F49611] font-semibold uppercase tracking-wider mb-2">
      {subtitle}
    </div>
    <h2 className="text-3xl md:text-4xl font-bold text-[#113262]">{title}</h2>
  </div>
);

const WhyChooseFPP = () => {
  const valuePropositions = [
    "Strategic financial planning tailored to professional career trajectories",
    "Comprehensive approach addressing financial challenges for career-driven individuals",
    "Proactive strategies that adapt to professional growth and market dynamics",
    "Advanced wealth management and professional risk mitigation",
  ];

  const features = [
    {
      icon: Calculator,
      title: "25+",
      description: "Years of Professional Financial Expertise",
    },
    {
      icon: Users,
      title: "1000+",
      description: "Professionals Supported",
    },
    {
      icon: Clock,
      title: "100%",
      description: "Customized Professional Planning",
    },
    {
      icon: Award,
      title: "$500M+",
      description: "Professional Assets Managed",
    },
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <SectionTitle
              subtitle="Why Choose Us"
              title="Your Financial Partner for Professional Success"
            />
            <p className="text-lg text-gray-600 mb-8">
              Navigating the complex financial landscape of your professional career requires more than traditional financial advice. We provide a sophisticated, adaptive approach that aligns with your career goals, from early-stage professionals to senior executives. Our strategies are designed to optimize your income, manage risks, and build sustainable wealth.
            </p>
            <div className="grid grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-4">
                  <feature.icon className="w-8 h-8 text-[#F49611]" />
                  <div>
                    <div className="text-3xl font-bold text-[#113262] mb-1">
                      {feature.title}
                    </div>
                    <div className="text-gray-600">{feature.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#E8EEF6] rounded-2xl p-8 md:p-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-[#113262] mb-6">
                Our Comprehensive Professional Financial Planning
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
                Start Your Professional Financial Journey
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseFPP;
