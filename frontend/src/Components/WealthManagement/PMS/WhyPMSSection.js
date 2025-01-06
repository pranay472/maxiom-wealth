import React from 'react';
import { Diamond, Sparkles, Gem, Award, TrendingUp } from 'lucide-react';

const WhyPMSSection = () => {
  const features = [
    {
      icon: <Diamond className="w-6 h-6 text-secondary-300" />,
      title: "Jewel PMS",
      description: "Premium portfolio management focusing on Top 350 companies for optimal returns."
    },
    {
      icon: <Sparkles className="w-6 h-6 text-secondary-300" />,
      title: "Spark PMS",
      description: "Specialized portfolio targeting 351-1000 ranked market cap companies for growth potential."
    },
    {
      icon: <Gem className="w-6 h-6 text-secondary-300" />,
      title: "GEM Strategy",
      description: "Advanced portfolio strategy with momentum and quality focus for superior returns."
    },
    {
      icon: <Award className="w-6 h-6 text-secondary-300" />,
      title: "Emerald Equity MF",
      description: "Expert-managed mutual fund portfolio for diversified equity exposure."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-secondary-300" />,
      title: "Diamond - Retirement Planning",
      description: "Comprehensive hybrid portfolio designed for long-term retirement security."
    }
  ];

  return (
    <div className="w-full bg-gradient-to-br from-white via-white to-primary-50/5 relative overflow-hidden">
      {/* Premium Background SVG Pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.02]" width="100%" height="100%">
        <pattern id="diamondPattern" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
          <path d="M25 0L50 25L25 50L0 25Z" fill="currentColor" className="text-primary-200" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#diamondPattern)" />
      </svg>

      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary-600 tracking-tight mb-2">
            Premium Portfolio Management Services
          </h2>
          <div className="flex justify-center items-center gap-2">
            <div className="h-1 w-16 bg-[#113262]"></div>
            <div className="h-1 w-3 bg-[#113262]"></div>
          </div>
          <p className="mt-4 text-lg text-neutral-600 max-w-3xl mx-auto">
            Experience excellence in wealth management with our diverse range of premium portfolio services
            designed to meet your unique investment goals.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Custom Investment Growth Illustration */}
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden bg-white p-8 shadow-lg">
              <svg viewBox="0 0 400 300" className="w-full h-full">
                {/* Background Gradient */}
                <defs>
                  <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor: '#E8EEF6'}} />
                    <stop offset="100%" style={{stopColor: '#FEF5E7'}} />
                  </linearGradient>
                </defs>
                <rect width="400" height="300" fill="url(#bgGradient)" />
                
                {/* Investment Growth Bars */}
                <g transform="translate(50, 250)">
                  {[
                    {height: 150, width: 40, x: 40, fill: '#113262'},
                    {height: 180, width: 40, x: 100, fill: '#1C52A0'},
                    {height: 200, width: 40, x: 160, fill: '#F49611'},
                    {height: 220, width: 40, x: 220, fill: '#955C0A'},
                    {height: 240, width: 40, x: 280, fill: '#113262'}
                  ].map((bar, i) => (
                    <rect
                      key={i}
                      x={bar.x}
                      y={-bar.height}
                      width={bar.width}
                      height={bar.height}
                      fill={bar.fill}
                      opacity="0.8"
                    />
                  ))}
                </g>
                
                {/* Decorative Elements */}
                <circle cx="320" cy="60" r="30" fill="#F49611" opacity="0.2" />
                {/* Removed the line */}
              </svg>
　　 　　 　 <div className="absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4">
                <div className="grid grid-cols-6 gap-2">
                  {[...Array(36)].map((_, i) => (
                    <div key={i} className="w-2 h-2 bg-secondary-300 bg-opacity-20 rounded-full" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Services List */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="flex items-start space-x-4 p-4 rounded-lg hover:bg-white hover:shadow-md transition-all duration-200"
              >
                <div className="flex-shrink-0 p-2 bg-primary-50 rounded-lg">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary-500">
                    {feature.title}
                  </h3>
                  <p className="mt-1 text-neutral-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyPMSSection;