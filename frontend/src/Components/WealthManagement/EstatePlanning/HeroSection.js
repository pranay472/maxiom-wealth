import React from 'react';
import { Shield, Users, Scale, TrendingUp } from 'lucide-react';

const FeatureCard = ({ Icon, title, description }) => (
  <div className="flex items-start p-4 bg-white/10 rounded-lg backdrop-blur-sm">
    <Icon className="w-6 h-6 mt-1 mr-3 flex-shrink-0" />
    <div>
      <h3 className="font-semibold text-lg mb-1">{title}</h3>
      <p className="text-sm opacity-90">{description}</p>
    </div>
  </div>
);

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#113262] to-[#1C52A0]"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center pt-12">
          {/* Left column - Main content */}
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Secure Your Legacy Through Strategic Estate Planning
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Expert guidance in preserving and transferring your wealth across generations. Our comprehensive estate planning solutions ensure your assets are protected and your wishes are honored.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#F49611] hover:bg-[#F6A839] text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Start Planning Today
              </button>
              <button className="border border-white/30 hover:bg-white/10 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Learn More
              </button>
            </div>
          </div>

          {/* Right column - Feature grid */}
          <div className="grid grid-cols-1 gap-4 text-white">
            <FeatureCard 
              Icon={Shield}
              title="Asset Protection"
              description="Safeguard your wealth with robust legal structures and strategic planning"
            />
            <FeatureCard 
              Icon={Users}
              title="Family Trust Formation"
              description="Create private family trusts for efficient wealth transfer and protection"
            />
            <FeatureCard 
              Icon={Scale}
              title="Legal Compliance"
              description="Ensure all arrangements comply with current legal and tax regulations"
            />
            <FeatureCard 
              Icon={TrendingUp}
              title="Succession Planning"
              description="Develop comprehensive plans for smooth wealth transition across generations"
            />
          </div>
        </div>

        {/* Stats section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center">
          {[
            { value: "25+", label: "Years of Experience" },
            { value: "1000+", label: "Families Served" },
            { value: "₹450Cr+", label: "Assets Advised" },
            { value: "100%", label: "Client Satisfaction" }
          ].map((stat, index) => (
            <div key={index}>
              <div className="text-3xl font-bold mb-2">{stat.value}</div>
              <div className="text-sm opacity-80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;