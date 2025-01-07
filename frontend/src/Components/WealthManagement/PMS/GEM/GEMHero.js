import React from 'react';
import { Play } from 'lucide-react';
import GEMParticlesBg from './GEMParticlesBg';
import GEMChart from './GEMChart';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#1C52A0] to-[#0A1E3A] isolate">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <GEMParticlesBg />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-32 pb-16 flex flex-col lg:flex-row items-center">
          {/* Text Column */}
          <div className="w-full lg:w-1/2 text-white space-y-8">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight bg-gradient-to-r from-white to-[#A2B8D8] bg-clip-text text-transparent animate-slideUp">
              GEM: Quality Meets Momentum
            </h1>
            
            <p className="text-xl md:text-2xl text-[#A2B8D8] animate-fadeIn opacity-0" style={{ animationDelay: '0.3s' }}>
              Where Strong Fundamentals Meet Market Momentum
            </p>
            
            <p className="text-[#E8EEF6] leading-relaxed animate-fadeIn opacity-0" style={{ animationDelay: '0.6s' }}>
              GEM combines quality companies with strong market momentum, investing in fundamentally strong businesses showing positive price trends in the market.
            </p>
            
            <div className="flex flex-col gap-6 animate-fadeIn opacity-0" style={{ animationDelay: '0.9s' }}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold text-[#F49611]">13.3%</div>
                  <div className="text-sm text-white/90">Current Returns</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold text-[#F49611]">6.05%</div>
                  <div className="text-sm text-white/90">Previous Year</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold text-[#F49611]">₹50L</div>
                  <div className="text-sm text-white/90">Min Investment</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold text-[#F49611]">3-5 Yr</div>
                  <div className="text-sm text-white/90">Time Horizon</div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <button className="bg-[#F49611] text-white px-8 py-4 rounded-lg hover:transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300 font-semibold">
                  Get Started
                </button>
                <button className="border-2 border-[#A2B8D8] text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors duration-300 flex items-center gap-2 font-semibold">
                  <Play size={20} />
                  View Strategy
                </button>
              </div>
            </div>
          </div>
          
          {/* Chart Column */}
          <div className="w-full lg:w-1/2 mt-12 lg:mt-0 animate-fadeIn opacity-0" style={{ animationDelay: '1.2s' }}>
            <div className="bg-white/5 rounded-2xl p-6">
              <GEMChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;