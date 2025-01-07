import React from 'react';
import { Zap, TrendingUp, RefreshCw, Shield, Award, BarChart2 } from 'lucide-react';

const GEMFeatures = () => {
  const features = [
    {
      icon: <Zap className="w-12 h-12" />,
      title: "QUALITY & MOMENTUM",
      description: "Combines two powerful investment approaches: quality and momentum, built on our trusted Roots & Wings philosophy."
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "MARKET LEADERSHIP",
      description: "Focus on companies with strong fundamental qualities, positive price trends, and market leadership in their segments."
    },
    {
      icon: <RefreshCw className="w-12 h-12" />,
      title: "DYNAMIC MANAGEMENT",
      description: "Regular monitoring of momentum indicators and quick action if momentum reverses, ensuring portfolio optimization."
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "RISK PROTECTION",
      description: "Focus on fundamentally strong companies with diversification across sectors and balance between quality and momentum factors."
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: "SCIENTIFIC APPROACH",
      description: "Scientific approach to stock selection with comprehensive screening for quality companies using Roots & Wings principles."
    },
    {
      icon: <BarChart2 className="w-12 h-12" />,
      title: "PROFESSIONAL MANAGEMENT",
      description: "Early risk detection system and dynamic portfolio management with regular portfolio review process."
    }
  ];

  return (
    <div className="w-full bg-gradient-to-br from-[#113262] to-[#1C52A0] py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          Why Choose GEM Strategy
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#F49611] transition-all duration-300"
            >
              <div className="absolute -top-6 left-6 bg-gradient-to-r from-[#F49611] to-[#F6A839] p-3 rounded-xl transform group-hover:scale-110 transition-transform duration-300">
                {React.cloneElement(feature.icon, {
                  className: "w-8 h-8 text-white"
                })}
              </div>
              
              <div className="mt-8">
                <h3 className="text-lg font-bold text-[#F49611] mb-4">
                  {feature.title}
                </h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GEMFeatures;