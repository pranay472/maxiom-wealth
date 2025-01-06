import React from 'react';
import { Zap, TrendingUp, RefreshCw, Shield, Award, BarChart2 } from 'lucide-react';

const GEMFeatures = () => {
  const features = [
    {
      icon: <Zap className="w-12 h-12" />,
      title: "ACTIVE MOMENTUM",
      description: "Stocks which have performed exceptionally well in the recent past, tend to retain their momentum into the near future. GEM taps this."
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "HIGHER GROWTH",
      description: "By buying the 'strongest' performers and cutting losers, GEM aims to exploit market trends to generate maximal returns."
    },
    {
      icon: <RefreshCw className="w-12 h-12" />,
      title: "ADAPTIVE MODEL",
      description: "GEM strategy dynamically adjusts to market conditions and bear markets. By managing drawdowns, portfolios can be more resilient."
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "RISK MANAGEMENT",
      description: "Our approach includes rigorous risk mitigation, safeguarding investments against market volatility with stop losses and cash positions."
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: "QUALITY MATTERS",
      description: "GEM combines quality with momentum for delivering results. Quality is powered by our proven 'Roots & Wings' Investment Philosophy."
    },
    {
      icon: <BarChart2 className="w-12 h-12" />,
      title: "VERIFIED STRATEGIES",
      description: "GEM's approach is research-backed and uses proven quant techniques. It has done well in numerous simulations and also since launch by beating broad market indices."
    }
  ];

  return (
    <div className="w-full bg-gradient-to-br from-[#113262] to-[#1C52A0] py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          Why Trust Maxiom Wealth's GEM PMS
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