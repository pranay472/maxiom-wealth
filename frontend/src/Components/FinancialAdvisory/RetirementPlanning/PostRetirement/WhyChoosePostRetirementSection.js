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

const WhyChoosePostRetirementSection = () => {
  const valuePropositions = [
    "Comprehensive post-retirement income strategies for steady cash flow",
    "Expert estate planning and wealth preservation solutions",
    "Strategic tax planning to optimize your retirement benefits",
    "Regular portfolio monitoring to ensure sustained financial security"
  ];

  const features = [
    {
      icon: PiggyBank,
      title: "98%",
      description: "Income Stability"
    },
    {
      icon: TrendingUp,
      title: "45%",
      description: "Wealth Preservation"
    },
    {
      icon: Users,
      title: "1500+",
      description: "Retirees Served"
    },
    {
      icon: ShieldCheck,
      title: "95%",
      description: "Legacy Success"
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <SectionTitle
              subtitle="Why Choose Professional Post-Retirement Planning"
              title="Enhance Your Golden Years with Expert Financial Guidance"
            />
            <p className="text-lg text-gray-600 mb-8">
              Post-retirement planning goes beyond basic financial management - it's about optimizing 
              your wealth, ensuring steady income streams, and creating a lasting legacy. Our expert 
              post-retirement advisory services help you navigate complex financial decisions, 
              preserve your wealth, and maintain your lifestyle throughout your retirement years.
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
                Benefits of Professional Post-Retirement Planning
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
                Optimize Your Post-Retirement Planning
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoosePostRetirementSection;