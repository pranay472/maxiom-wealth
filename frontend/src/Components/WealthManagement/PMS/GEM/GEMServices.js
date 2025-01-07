import React, { useState } from 'react';
import { ArrowUpRight, Shield, BarChart4, PieChart, TrendingUp } from 'lucide-react';

const GEMServices = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  const services = [
    {
      icon: <PieChart className="w-6 h-6" />,
      title: "Diverse Investment Portfolio",
      description: "Investment spread across equity shares of selected companies, Exchange Traded Funds (ETFs), liquid mutual funds, and other market instruments for optimal returns.",
      accent: "bg-purple-400",
      gradient: "from-purple-400/20 to-purple-600/20",
      borderColor: "border-purple-200",
      hoverBorder: "hover:border-purple-400",
      iconColor: "text-purple-500",
      hoverBg: "hover:bg-purple-100"
    },
    {
      icon: <BarChart4 className="w-6 h-6" />,
      title: "Investment Process",
      description: "Comprehensive 5-step process: screening quality companies, identifying momentum indicators, analyzing market trends, regular monitoring, and making changes based on momentum shifts.",
      accent: "bg-indigo-400",
      gradient: "from-indigo-400/20 to-indigo-600/20",
      borderColor: "border-indigo-200",
      hoverBorder: "hover:border-indigo-400",
      iconColor: "text-indigo-500",
      hoverBg: "hover:bg-indigo-100"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Special Features",
      description: "Emphasis on momentum-driven companies with strong fundamental backing, regular portfolio review process, and early risk detection system for dynamic portfolio management.",
      accent: "bg-orange-400",
      gradient: "from-orange-400/20 to-orange-600/20",
      borderColor: "border-orange-200",
      hoverBorder: "hover:border-orange-400",
      iconColor: "text-orange-500",
      hoverBg: "hover:bg-orange-100"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Risk Management",
      description: "Focus on fundamentally strong companies with regular monitoring of momentum indicators, quick action on reversals, and diversification across sectors.",
      accent: "bg-teal-400",
      gradient: "from-teal-400/20 to-teal-600/20",
      borderColor: "border-teal-200",
      hoverBorder: "hover:border-teal-400",
      iconColor: "text-teal-500",
      hoverBg: "hover:bg-teal-100"
    }
  ];

  // SVG Pattern for background
  const backgroundPattern = `
    <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0h40v40H0z" fill="none"/>
      <path d="M0 20h40M20 0v40" stroke="currentColor" stroke-width="0.5" stroke-opacity="0.1"/>
      <circle cx="20" cy="20" r="1" fill="currentColor" fill-opacity="0.1"/>
    </svg>
  `;

  const encodedPattern = btoa(backgroundPattern);

  return (
    <div className="py-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50"
        style={{
          backgroundImage: `url("data:image/svg+xml;base64,${encodedPattern}")`,
          backgroundSize: '40px 40px'
        }}
      >
        {/* Animated gradient orbs */}
        <div className="absolute w-96 h-96 -top-48 -left-48 rounded-full bg-gradient-to-r from-primary-300/30 to-primary-500/30 blur-3xl animate-pulse" />
        <div className="absolute w-96 h-96 -bottom-48 -right-48 rounded-full bg-gradient-to-r from-secondary-300/30 to-secondary-500/30 blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="mb-16">
          <div className="relative mb-16 text-center lg:text-left">
            <div className="inline-block">
              <p className="text-lg font-medium text-secondary-500 mb-2">Professional Investment Management</p>
              <h2 className="text-5xl font-bold text-primary-500 mb-4">
                GEM Investment Services
                <div className="h-2 w-full bg-gradient-to-r from-secondary-300 to-secondary-500 mt-2 rounded-full transform transition-all duration-300 hover:scale-x-110 origin-left" />
              </h2>
              <div className="absolute -right-8 top-0 w-16 h-16 bg-secondary-300/10 rounded-full blur-xl animate-ping" />
            </div>
            <p className="text-xl text-neutral-600 mt-4 max-w-2xl">Elevating Your Investment Journey with Professional Equity Portfolio Management Services</p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Service Navigation */}
          <div className="lg:w-1/3">
            <div className="sticky top-8 space-y-4">
              {services.map((service, idx) => (
                <div
                  key={idx}
                  className={`group cursor-pointer transition-all duration-500 transform ${
                    activeIndex === idx 
                      ? `bg-white shadow-lg scale-105 border-2 ${service.borderColor}` 
                      : `hover:scale-102 border ${service.borderColor} ${service.hoverBorder} ${service.hoverBg}`
                  } rounded-xl backdrop-blur-sm`}
                  onClick={() => setActiveIndex(idx)}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="p-6 flex items-center gap-4 relative overflow-hidden">
                    <div className={`w-12 h-12 rounded-lg ${service.accent} bg-opacity-20 flex items-center justify-center
                      transition-all duration-300 ${hoveredIndex === idx ? 'scale-110' : ''} ${service.iconColor} 
                      group-hover:bg-opacity-30 group-hover:${service.iconColor}`}>
                      {service.icon}
                    </div>
                    <h3 className={`font-semibold transition-colors duration-300 ${
                      activeIndex === idx ? service.iconColor : 'text-neutral-700 group-hover:' + service.iconColor
                    }`}>
                      {service.title}
                    </h3>
                    <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} 
                      transition-opacity duration-300 opacity-0 ${hoveredIndex === idx ? 'opacity-100' : ''}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Service Details */}
          <div className="lg:w-2/3">
            <div className="relative min-h-[400px]">
              {services.map((service, idx) => (
                <div
                  key={idx}
                  className={`transition-all duration-700 absolute w-full ${
                    activeIndex === idx 
                      ? 'opacity-100 translate-x-0 translate-y-0 rotate-0'
                      : idx < activeIndex
                        ? 'opacity-0 -translate-x-8 -translate-y-4 -rotate-6'
                        : 'opacity-0 translate-x-8 translate-y-4 rotate-6'
                  }`}
                  style={{ zIndex: activeIndex === idx ? 10 : 0 }}
                >
                  <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-lg
                    transition-all duration-500 hover:scale-[1.02] border-2 ${service.borderColor} ${service.hoverBorder}">
                    <div className={`w-16 h-16 rounded-xl ${service.accent} bg-opacity-20 flex items-center justify-center mb-6
                      transform transition-transform duration-500 hover:rotate-12`}>
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-neutral-800 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-lg text-neutral-600 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="mt-8 flex items-center gap-2 text-primary-500 font-semibold
                      group cursor-pointer">
                      <span className="transition-transform duration-300 group-hover:translate-x-1">Learn more</span>
                      <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GEMServices;