import React, { useState } from 'react';
import { Droplets, ShieldCheck, TrendingUp } from 'lucide-react';

const LSG = () => {
  const [activeSection, setActiveSection] = useState(0);

  const frameworks = [
    {
      icon: Droplets,
      title: "Liquidity",
      description: "Ensure sufficient cash flow for your immediate needs and emergencies while maintaining flexibility in your investment portfolio.",
      color: "#1C52A0",
      highlights: [
        "Emergency fund allocation",
        "Short-term investment options",
        "Quick access to capital"
      ]
    },
    {
      icon: ShieldCheck,
      title: "Safety",
      description: "Protect your wealth through diversification and risk management strategies tailored to your risk tolerance.",
      color: "#F49611",
      highlights: [
        "Portfolio diversification",
        "Risk assessment",
        "Capital preservation"
      ]
    },
    {
      icon: TrendingUp,
      title: "Growth",
      description: "Strategic long-term investments aimed at growing your wealth through carefully selected opportunities.",
      color: "#113262",
      highlights: [
        "Long-term wealth creation",
        "Strategic asset allocation",
        "Compound returns focus"
      ]
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-8 relative overflow-hidden">
      {/* Background Patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-[#1C52A0]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#F49611]" />
      </div>

      {/* Header Section */}
      <div className="relative text-center mb-16">
        <div className="inline-block">
          <h2 className="text-4xl font-bold text-[#113262] mb-4 relative">
            LSG Framework
            <div className="absolute -top-6 -right-6 w-12 h-12 rounded-full border-4 border-[#F49611] opacity-20" />
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-[#1C52A0] via-[#F49611] to-[#113262] mx-auto" />
        </div>
      </div>

      {/* Main Framework Display */}
      <div className="relative">
        {/* Central Hexagon */}
        <div className="w-full aspect-square max-w-3xl mx-auto relative">
          {frameworks.map((item, index) => {
            const isActive = activeSection === index;
            const angle = (index * 120 - 90) * (Math.PI / 180);
            const radius = 180; // Adjust this value to change the distance from center
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            return (
              <div
                key={item.title}
                className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 cursor-pointer
                  ${isActive ? 'scale-110 z-20' : 'scale-100 z-10 hover:scale-105'}`}
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                }}
                onClick={() => setActiveSection(index)}
              >
                {/* Framework Item */}
                <div className="w-64 backdrop-blur-sm">
                  <div className={`
                    p-6 rounded-lg shadow-lg transition-all duration-300
                    ${isActive 
                      ? 'bg-white border-2' 
                      : 'bg-white/90 border border-gray-200'
                    }
                  `}
                  style={{
                    borderColor: isActive ? item.color : 'transparent'
                  }}>
                    {/* Icon */}
                    <div className="flex items-center justify-center mb-4">
                      <div className={`
                        w-16 h-16 rounded-full flex items-center justify-center
                        transition-transform duration-300 ${isActive ? 'scale-110' : ''}
                      `}
                      style={{ backgroundColor: item.color }}>
                        <item.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-[#113262] mb-2">
                        {item.title}
                      </h3>
                      <p className={`text-gray-600 text-sm transition-all duration-300 overflow-hidden
                        ${isActive ? 'h-20 opacity-100' : 'h-0 opacity-0'}`}>
                        {item.description}
                      </p>
                    </div>

                    {/* Highlights */}
                    <div className={`mt-4 space-y-2 transition-all duration-300 overflow-hidden
                      ${isActive ? 'h-auto opacity-100' : 'h-0 opacity-0'}`}>
                      {item.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <div 
                            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{ backgroundColor: item.color }}
                          />
                          <span className="ml-2 text-gray-700">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Center Connecting Lines */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 rounded-full border-2 border-gray-200 opacity-20" />
            <div className="absolute w-40 h-40 rounded-full border-2 border-gray-200 opacity-10" />
            <div className="absolute w-48 h-48 rounded-full border-2 border-gray-200 opacity-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LSG;