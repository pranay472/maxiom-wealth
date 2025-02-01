import React from 'react';
import { Zap, TrendingUp, RefreshCw, Shield, Award, BarChart2 } from 'lucide-react';

const DiamondFeatures = () => {
  const features = [
    {
      icon: <Zap className="w-12 h-12" />,
      title: "STABLE INCOME",
      description: "Focus on generating consistent and stable income through diversified investments suited for retirement needs."
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "CAPITAL PRESERVATION",
      description: "Emphasis on protecting capital while generating inflation-beating returns through strategic asset allocation."
    },
    {
      icon: <RefreshCw className="w-12 h-12" />,
      title: "DIVERSIFIED APPROACH",
      description: "Investment across multiple asset classes including equity, debt, REITs, InvITs, and gold for balanced returns."
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "RISK MANAGEMENT",
      description: "Strong focus on high credit quality, stable yields, and low volatility investments to protect retirement corpus."
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: "ROOTS & WINGS",
      description: "Following our trusted Roots & Wings philosophy to select fundamentally strong companies for long-term stability."
    },
    {
      icon: <BarChart2 className="w-12 h-12" />,
      title: "RETIREMENT FOCUSED",
      description: "Tailored investment strategy focusing on regular income generation and long-term wealth sustainability."
    }
  ];

  return (
    <div className="w-full bg-gradient-to-br from-[#113262] to-[#1C52A0] py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          Why Choose DIAMOND Strategy
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

export default DiamondFeatures;