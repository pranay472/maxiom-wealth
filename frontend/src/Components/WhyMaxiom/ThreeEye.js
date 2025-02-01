import React, { useState } from 'react';
import { Eye, ArrowRight, Search, Brain, TrendingUp, ShieldCheck, BarChart2, Target, AlertCircle } from 'lucide-react';

const ThreeEye = () => {
  const [activeEye, setActiveEye] = useState(0);

  const eyeFrameworks = [
    {
      title: "Insight",
      icon: Search,
      color: "#1C52A0",
      description: "Deep analysis of fund performance and potential",
      elements: [
        {
          icon: BarChart2,
          title: "Performance Analysis",
          description: "Historical returns and risk metrics evaluation"
        },
        {
          icon: Brain,
          title: "Fund Manager Assessment",
          description: "Track record and investment style analysis"
        },
        {
          icon: Target,
          title: "Investment Objective",
          description: "Alignment with stated goals and strategy"
        }
      ]
    },
    {
      title: "Implementation",
      icon: TrendingUp,
      color: "#F49611",
      description: "Strategic execution and portfolio integration",
      elements: [
        {
          icon: ShieldCheck,
          title: "Risk Management",
          description: "Portfolio risk assessment and mitigation"
        },
        {
          icon: AlertCircle,
          title: "Compliance Check",
          description: "Regulatory and mandate compliance"
        },
        {
          icon: ArrowRight,
          title: "Execution Strategy",
          description: "Optimal entry and allocation planning"
        }
      ]
    },
    {
      title: "Intelligence",
      icon: Brain,
      color: "#113262",
      description: "Smart monitoring and adaptation",
      elements: [
        {
          icon: Eye,
          title: "Continuous Monitoring",
          description: "Regular performance and risk tracking"
        },
        {
          icon: TrendingUp,
          title: "Market Intelligence",
          description: "Industry trends and market dynamics"
        },
        {
          icon: Target,
          title: "Strategic Adjustments",
          description: "Dynamic portfolio rebalancing"
        }
      ]
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-8 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full opacity-5"
              style={{
                width: `${400 + i * 100}px`,
                height: `${400 + i * 100}px`,
                left: `${-100 + i * 50}px`,
                top: `${-100 + i * 30}px`,
                background: eyeFrameworks[i].color,
              }}
            />
          ))}
        </div>
      </div>

      {/* Header */}
      <div className="relative text-center mb-16">
        <h2 className="text-4xl font-bold text-[#113262] mb-4">
          Three-Eye Framework
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Our comprehensive approach to mutual fund selection and monitoring
        </p>
        <div className="w-32 h-1 bg-gradient-to-r from-[#1C52A0] via-[#F49611] to-[#113262] mx-auto mt-4" />
      </div>

      {/* Main Display */}
      <div className="relative">
        {/* Eye Selection Circles */}
        <div className="flex justify-center gap-8 mb-12">
          {eyeFrameworks.map((framework, index) => (
            <div
              key={framework.title}
              className={`relative cursor-pointer transition-all duration-500 transform
                ${activeEye === index ? 'scale-110' : 'scale-100 hover:scale-105'}`}
              onClick={() => setActiveEye(index)}
            >
              <div className="relative">
                {/* Outer Ring */}
                <div
                  className={`w-24 h-24 rounded-full transition-all duration-500
                    ${activeEye === index ? 'opacity-100' : 'opacity-30'}`}
                  style={{
                    background: `conic-gradient(${framework.color} 0deg, transparent 60deg)`
                  }}
                />
                
                {/* Inner Circle */}
                <div
                  className={`absolute inset-2 rounded-full flex items-center justify-center
                    transition-all duration-300 backdrop-blur-sm
                    ${activeEye === index ? 'bg-white' : 'bg-white/80'}`}
                >
                  <framework.icon
                    className="w-8 h-8"
                    style={{ color: framework.color }}
                  />
                </div>

                {/* Title */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                  <span className={`font-semibold transition-colors duration-300
                    ${activeEye === index ? 'text-[#113262]' : 'text-gray-500'}`}>
                    {framework.title}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Content Display */}
        <div className="relative mt-16">
          <div className="max-w-4xl mx-auto">
            {eyeFrameworks.map((framework, index) => (
              <div
                key={framework.title}
                className={`transition-all duration-500 absolute w-full
                  ${activeEye === index 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 translate-x-8 pointer-events-none'}`}
              >
                <div className="grid md:grid-cols-3 gap-6">
                  {framework.elements.map((element, idx) => (
                    <div
                      key={idx}
                      className="bg-white/90 backdrop-blur-sm rounded-lg p-6 shadow-lg
                        border-2 border-transparent hover:border-[#1C52A0] transition-all duration-300"
                    >
                      <element.icon className="w-8 h-8 mb-4" style={{ color: framework.color }} />
                      <h4 className="text-lg font-semibold text-[#113262] mb-2">
                        {element.title}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {element.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeEye;