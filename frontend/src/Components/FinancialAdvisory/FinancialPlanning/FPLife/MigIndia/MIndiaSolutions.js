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
  Heart,
  DollarSign
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

const MIndiaSolutions = () => {
  return (
    <div className="relative bg-[#113262]">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        {/* Main heading with accent */}
        <div className="flex items-center gap-4 mb-16">
          <div className="w-20 h-1 bg-[#F49611]" />
          <h2 className="text-4xl md:text-5xl font-bold text-white">Why Prioritise Emigration Financial Planning?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="md:col-span-2">
            <p className="text-2xl text-white/90 leading-relaxed">
              Changing Economies
              Understand diverse financial landscapes and adjust your investment strategies accordingly.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Large feature */}
          <FeatureCard
            icon={Shield}
            title="Protecting Assets"
            description="While emigrating, secure your investments and assets in India and your new home country."
            isLarge={true}
          />
          
          <FeatureCard
            icon={Calculator}
            title="Tax Complications"
            description="Moving countries can lead to complex tax situations; proactive planning is vital."
          />
          
          <FeatureCard
            icon={DollarSign}
            title="Currency Fluctuations"
            description="Protect your wealth against potential currency risks while moving and investing."
          />
          
          <FeatureCard
            icon={FileText}
            title="Estate Planning"
            description="Ensure your assets are well-managed and passed on efficiently across borders."
          />

          <FeatureCard
            icon={Globe}
            title="New Financial Products"
            description="Explore and understand financial products in your new country, ensuring best choices."
          />
        </div>
      </div>
    </div>
  );
};

export default MIndiaSolutions;