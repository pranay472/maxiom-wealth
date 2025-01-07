import React, { useState } from 'react';
import { TrendingUp, Wallet, Building, PieChart, ArrowRight } from 'lucide-react';

const PortfolioStructure = () => {
  const [activeInstrument, setActiveInstrument] = useState(null);

  return (
    <div className="relative bg-white min-h-screen py-24 overflow-x-hidden">
      {/* Dynamic Background Pattern */}
      <div className="absolute inset-0">
        <svg className="w-full h-full opacity-[0.03]" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="smallGrid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
          <rect width="100" height="100" fill="url(#smallGrid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-[#113262] inline-block relative">
            Portfolio Structure
            <div className="absolute -z-10 left-0 -bottom-3 w-full h-3 bg-[#F49611] opacity-20"></div>
          </h2>
        </div>

        {/* Orbital Structure */}
        <div className="relative mx-auto" style={{ height: '700px' }}>
          {/* Center Circle - Core Holdings */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              {/* Main Circle */}
              <div className="w-64 h-64 rounded-full bg-gradient-to-br from-[#113262] to-[#1C52A0] flex items-center justify-center text-white p-8 text-center cursor-pointer transform hover:scale-105 transition-all duration-300">
                <div>
                  <PieChart className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Core Holdings</h3>
                  <p className="text-sm opacity-80">High-Quality Debt Funds</p>
                </div>
              </div>

              {/* Orbital Ring */}
              <div className="absolute -inset-16 rounded-full border-2 border-dashed border-[#1C52A0] border-opacity-20 animate-spin-slow"></div>
            </div>
          </div>

          {/* Orbiting Elements */}
          {[/* eslint-disable */
            { 
              icon: TrendingUp, 
              title: "Government Bonds", 
              description: "Sovereign debt exposure",
              position: "top",
              delay: "0s"
            },
            { 
              icon: Building, 
              title: "REITs & InvITs", 
              description: "Steady income streams",
              position: "right",
              delay: "0.2s"
            },
            { 
              icon: Wallet, 
              title: "Money Market", 
              description: "Liquidity management",
              position: "bottom",
              delay: "0.4s"
            }
          ].map((item, index) => {
            const positions = {
              top: "top-0 left-1/2 -translate-x-1/2 -translate-y-0",
              right: "top-1/2 right-0 translate-x-0 -translate-y-1/2",
              bottom: "bottom-0 left-1/2 -translate-x-1/2 translate-y-0"
            };

            return (
              <div 
                key={index}
                className={`absolute ${positions[item.position]} transform transition-all duration-500 z-30`}
                style={{ animationDelay: item.delay }}
              >
                <div 
                  className="group relative"
                  onMouseEnter={() => setActiveInstrument(index)}
                  onMouseLeave={() => setActiveInstrument(null)}
                >
                  {/* Connection Line */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-40 h-0.5 bg-gradient-to-r from-transparent via-[#1C52A0] to-transparent opacity-20 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Instrument Circle */}
                  <div className="relative w-32 h-32 rounded-full bg-white shadow-xl border border-[#1C52A0] border-opacity-10 flex items-center justify-center p-4 text-center transform group-hover:scale-110 group-hover:border-opacity-20 transition-all duration-300">
                    <div>
                      <item.icon className="w-8 h-8 mx-auto mb-2 text-[#1C52A0]" />
                      <h4 className="text-sm font-bold text-[#113262]">{item.title}</h4>
                    </div>
                  </div>

                  {/* Expanded Info Panel */}
                  <div 
                    className={`
                      absolute whitespace-nowrap min-w-[220px]
                      ${item.position === 'right' 
                        ? 'left-full ml-4' 
                        : item.position === 'top'
                          ? 'left-1/2 -translate-x-1/2 top-full mt-4'
                          : 'left-1/2 -translate-x-1/2 bottom-full mb-4'
                      }
                      bg-white shadow-2xl rounded-xl p-6 z-50
                      transition-all duration-300 ease-in-out
                      ${activeInstrument === index ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}
                    `}
                  >
                    <h4 className="text-lg font-bold text-[#113262] mb-2 whitespace-normal">{item.title}</h4>
                    <p className="text-slate-600 text-sm whitespace-normal max-w-[190px]">{item.description}</p>
                    <div className="mt-4 flex items-center text-[#1C52A0] text-sm font-semibold whitespace-nowrap">
                      Learn More <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Floating Decorative Elements */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-[#1C52A0] rounded-full opacity-20"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 2}s`
                }}
              />
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 flex justify-center space-x-16">
          {[/* eslint-disable */
            { label: "Risk-Adjusted Returns", value: "12.4%" },
            { label: "Portfolio Beta", value: "0.85" },
            { label: "Sharpe Ratio", value: "1.92" }
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-3xl font-bold text-[#113262] mb-2 group-hover:text-[#1C52A0] transition-colors duration-300">
                {stat.value}
              </div>
              <div className="text-slate-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-spin-slow {
          animation: spin 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default PortfolioStructure;