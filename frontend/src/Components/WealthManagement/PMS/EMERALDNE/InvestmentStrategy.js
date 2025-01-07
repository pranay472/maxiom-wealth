import React, { useState } from 'react';
import { Shield, Cpu, LineChart, ArrowRight, Shuffle, Scale, Clock, Droplet, ChevronRight } from 'lucide-react';

const InvestmentStrategy = () => {
  const [activeTab, setActiveTab] = useState('framework');
  
  return (
    <div className="relative bg-white py-24">
      {/* Elegant geometric background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="hexagons" width="10" height="17.32" patternUnits="userSpaceOnUse">
              <path d="M5 0L9.33 2.5V7.5L5 10L0.67 7.5V2.5L5 0Z M5 17.32L9.33 14.82V9.82L5 7.32L0.67 9.82V14.82L5 17.32Z" 
                fill="none" 
                stroke="rgba(28, 82, 160, 0.1)" 
                strokeWidth="0.2" />
            </pattern>
            <rect width="100" height="100" fill="url(#hexagons)" />
          </svg>
        </div>
        <div className="absolute inset-0">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="circles" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1.5" 
                fill="none" 
                stroke="rgba(28, 82, 160, 0.05)" 
                strokeWidth="0.5" />
            </pattern>
            <rect width="100" height="100" fill="url(#circles)" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <span className="inline-block px-4 py-1 mb-6 text-[#1C52A0] bg-[#1C52A0] bg-opacity-5 rounded-full text-sm font-semibold">
              Our Approach
            </span>
          </div>
          <h2 className="text-5xl font-bold text-[#113262] mb-6 relative">
            Investment Strategy
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#1C52A0]" />
          </h2>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto">
            A sophisticated blend of quantitative analysis and risk management
          </p>
        </div>

        {/* Strategy Navigation Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          {['framework', 'risk'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === tab 
                  ? 'bg-[#1C52A0] text-white shadow-lg' 
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {tab === 'framework' ? 'Selection Framework' : 'Risk Management'}
            </button>
          ))}
        </div>

        {/* Dynamic Content Section */}
        <div className="min-h-[600px] relative">
          {/* Framework Content */}
          <div className={`absolute w-full transition-all duration-500 ${
            activeTab === 'framework' 
              ? 'opacity-100 transform translate-x-0' 
              : 'opacity-0 transform -translate-x-full'
          }`}>
            <div className="grid lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Shield,
                  title: "Credit Quality Assessment",
                  description: "Rigorous evaluation of underlying bonds and issuer creditworthiness",
                  points: ["Issuer analysis", "Credit rating trends", "Default risk assessment"]
                },
                {
                  icon: LineChart,
                  title: "Quantitative Analysis",
                  description: "Advanced metrics and proprietary scoring systems",
                  points: ["Fragility scoring", "Performance attribution", "Risk-adjusted returns"]
                },
                {
                  icon: Scale,
                  title: "Fund House Evaluation",
                  description: "Comprehensive assessment of fund management capabilities",
                  points: ["Research strength", "Risk management framework", "Track record analysis"]
                }
              ].map((item, index) => (
                <div key={index} className="group relative">
                  <div className="bg-white border border-slate-200 rounded-2xl p-8 h-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="p-3 bg-[#1C52A0] bg-opacity-5 rounded-xl w-fit mb-6">
                      <item.icon className="w-6 h-6 text-[#1C52A0]" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#113262] mb-4">{item.title}</h3>
                    <p className="text-slate-600 mb-6">{item.description}</p>
                    <ul className="space-y-3">
                      {item.points.map((point, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-slate-600">
                          <ChevronRight className="w-4 h-4 text-[#1C52A0]" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Risk Management Content */}
          <div className={`absolute w-full transition-all duration-500 ${
            activeTab === 'risk' 
              ? 'opacity-100 transform translate-x-0' 
              : 'opacity-0 transform translate-x-full'
          }`}>
            <div className="grid lg:grid-cols-2 gap-8">
              {[
                {
                  icon: Shield,
                  title: "Credit Risk Monitoring",
                  description: "Real-time monitoring of credit events and rating changes",
                  metrics: ["Credit spread analysis", "Rating migration tracking", "Default probability assessment"]
                },
                {
                  icon: Clock,
                  title: "Duration Management",
                  description: "Active management of interest rate sensitivity",
                  metrics: ["Yield curve analysis", "Duration positioning", "Interest rate scenarios"]
                },
                {
                  icon: LineChart,
                  title: "Market Risk Analysis",
                  description: "Comprehensive market risk assessment framework",
                  metrics: ["Value at Risk (VaR)", "Stress testing", "Scenario analysis"]
                },
                {
                  icon: Droplet,
                  title: "Liquidity Management",
                  description: "Strategic approach to maintain optimal liquidity",
                  metrics: ["Liquidity scoring", "Trading volume analysis", "Asset concentration"]
                }
              ].map((item, index) => (
                <div key={index} className="group relative">
                  <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-[#1C52A0] bg-opacity-5 rounded-xl">
                        <item.icon className="w-6 h-6 text-[#1C52A0]" />
                      </div>
                      <h3 className="text-2xl font-bold text-[#113262]">{item.title}</h3>
                    </div>
                    <p className="text-slate-600 mb-6">{item.description}</p>
                    <div className="space-y-4">
                      {item.metrics.map((metric, idx) => (
                        <div key={idx} className="flex items-center gap-3 group-hover:transform group-hover:translate-x-2 transition-transform duration-300">
                          <div className="w-2 h-2 rounded-full bg-[#1C52A0]" />
                          <span className="text-slate-600">
                            {metric}
                          </span>
                        </div>
                      ))}
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

export default InvestmentStrategy;