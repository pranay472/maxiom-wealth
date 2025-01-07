import React, { useState } from 'react';
import { BarChart4, ShieldCheck, Target, Users, ArrowRight, TrendingUp, LineChart, BrainCircuit } from 'lucide-react';

const SparkPMS = () => {
  const [selectedTab, setSelectedTab] = useState('overview');

  const marketStats = [
    { label: 'Minimum Investment', value: '₹50 Lakhs' },
    { label: 'Investment Horizon', value: '3-5 Years' },
    { label: 'Current Returns', value: '22.11%' },
    { label: 'Previous Year', value: '23.69%' }
  ];

  return (
    <section className="relative bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Innovative Hero Section with Split Design */}
        <div className="grid lg:grid-cols-2 gap-0">
          <div className="bg-[#113262] p-12 lg:p-20 relative z-0">
            <div className="mb-12">
              <span className="text-[#F49611] font-medium tracking-wider">EXCLUSIVE OFFERING</span>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mt-4 mb-6">
                SPARK: Your Gateway to Emerging Companies
              </h1>
              <p className="text-gray-300 text-lg mb-8">
                Discover and invest in promising small companies that show strong potential for growth
              </p>
              <div className="flex flex-wrap gap-4">
                {marketStats.map((stat, index) => (
                  <div key={index} className="bg-[#1C52A0]/30 p-4 rounded-lg backdrop-blur-sm">
                    <div className="text-[#F49611] font-bold text-xl">{stat.value}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-[#E8EEF6] p-12 lg:p-20">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-[#113262] rounded-full flex items-center justify-center text-white">
                  <Target className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#113262]">Small-Cap Focus</h3>
                  <p className="text-gray-600">Investing in tomorrow's market leaders today</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-[#113262] rounded-full flex items-center justify-center text-white">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#113262]">Protected Growth</h3>
                  <p className="text-gray-600">Regular monitoring and risk management</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-[#113262] rounded-full flex items-center justify-center text-white">
                  <BrainCircuit className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#113262]">Expert Research</h3>
                  <p className="text-gray-600">Thorough analysis and company selection</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Investment Process Section */}
        <div className="py-20 px-12 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-[#113262] mb-12 text-center">
              Our Scientific Investment Process
            </h2>
            
            <div className="grid gap-8 relative">
              <div className="absolute top-[10px] bottom-[10px] left-8 w-px bg-gradient-to-b from-[#113262] to-[#F49611] lg:block hidden" />
              
              {[/* ... */].map((step, index) => (
                <div key={index} className="lg:pl-24 relative">
                  <div className="lg:absolute left-8 -translate-x-1/2 top-2 w-4 h-4 rounded-full bg-[#113262] ring-4 ring-white" />
                  <span className="text-[#F49611] font-bold tracking-wider">{step.phase}</span>
                  <h3 className="text-2xl font-bold text-[#113262] mt-2 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Performance Commitment */}
        <div className="bg-gradient-to-br from-[#113262] to-[#1C52A0] p-12 lg:p-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Elevate Your Investment Strategy
            </h2>
            <p className="text-gray-300 mb-12 text-lg">
              Join an exclusive community of investors accessing the next wave of market leaders through our scientific investment approach
            </p>
            <button className="bg-[#F49611] text-white px-8 py-4 rounded inline-flex items-center gap-2 text-lg font-semibold">
              Schedule a Strategy Session
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SparkPMS;