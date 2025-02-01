import React from 'react';
import { 
  Globe, 
  GraduationCap, 
  Calculator, 
  Users,
  TrendingUp,
  Shield,
  FileText,
  FileCheck,
  Lock,
  Heart
} from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, isLarge = false }) => (
  <div className={`relative bg-[#113262] rounded-xl overflow-hidden ${isLarge ? 'md:col-span-2 md:row-span-2' : ''}`}>
    {/* Accent line */}
    <div className="absolute top-0 left-0 w-full h-1 bg-[#F49611]" />
    
    <div className="p-8">
      <div className="flex flex-col h-full">
        <div className="bg-[#1C52A0] rounded-lg p-3 w-fit mb-6">
          <Icon className="w-6 h-6 text-white" />
        </div>
        
        <h3 className={`${isLarge ? 'text-2xl' : 'text-xl'} font-bold text-white mb-4`}>
          {title}
        </h3>
        
        <p className="text-white/80 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  </div>
);

const StatisticCard = ({ value, label }) => (
  <div className="bg-[#1C52A0] rounded-xl p-8">
    <div className="text-3xl font-bold text-white mb-2">{value}</div>
    <div className="text-white/80">{label}</div>
  </div>
);

const RetSolutions = () => {
  return (
    <div className="relative bg-[#113262]">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        {/* Main heading with accent */}
        <div className="flex items-center gap-4 mb-16">
          <div className="w-20 h-1 bg-[#F49611]" />
          <h2 className="text-4xl md:text-5xl font-bold text-white">Why is Repatriate Financial Planning Essential?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="md:col-span-2">
            <p className="text-2xl text-white/90 leading-relaxed">
              Repatriation can significantly impact your financial stability. Professional guidance ensures a secure transition to financial independence.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[ 
            {
              icon: TrendingUp,
              title: "Reshaping Investments",
              description: "Adjust and reshape your investments to align with the Indian financial landscape."
            },
            {
              icon: Shield,
              title: "Realignment of Assets",
              description: "Transition your foreign assets and integrate them into an Indian-centric portfolio."
            },
            {
              icon: FileText,
              title: "Repatriation Taxation",
              description: "Repatriation can introduce unique tax implications; proactive measures are crucial."
            },
            {
              icon: FileCheck,
              title: "Currency Consolidation",
              description: "Harmonize your global wealth against potential currency risks upon return."
            },
            {
              icon: Lock,
              title: "Re-establishing Roots",
              description: "Financial strategies that ensure your smooth resettlement in the Indian socio-economic milieu."
            },
            {
              icon: Heart,
              title: "Navigating Indian Financial Products",
              description: "Reacquaint and capitalise on India-centric financial opportunities."
            }
          ].map((solution, index) => (
            <FeatureCard
              key={index}
              icon={solution.icon}
              title={solution.title}
              description={solution.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RetSolutions;