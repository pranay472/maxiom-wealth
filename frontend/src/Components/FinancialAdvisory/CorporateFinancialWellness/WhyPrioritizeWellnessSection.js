import React from 'react';
import { 
  CheckCircle, 
  Brain, 
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

const WhyPrioritizeWellnessSection = () => {
  const valuePropositions = [
    "Enhanced employee productivity through reduced financial stress",
    "Higher workforce retention and improved company culture",
    "Better utilization of employee benefits and compensation",
    "Increased employee engagement and job satisfaction"
  ];

  const features = [
    {
      icon: Users,
      title: "93%",
      description: "Employee Satisfaction"
    },
    {
      icon: TrendingUp,
      title: "45%",
      description: "Productivity Boost"
    },
    {
      icon: Brain,
      title: "1000+",
      description: "Employees Trained"
    },
    {
      icon: ShieldCheck,
      title: "85%",
      description: "Retention Rate"
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <SectionTitle
              subtitle="Why Prioritize"
              title="Empower Your Workforce with Financial Wellness"
            />
            <p className="text-lg text-gray-600 mb-8">
              Financial stress significantly impacts employee productivity and overall workplace 
              performance. Our corporate financial wellness solutions address these challenges 
              head-on, creating a more engaged, focused, and productive workforce. By investing 
              in employee financial well-being, you're investing in your company's future success.
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
                Benefits of Financial Wellness Programs
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
                Start Your Corporate Wellness Program
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyPrioritizeWellnessSection;