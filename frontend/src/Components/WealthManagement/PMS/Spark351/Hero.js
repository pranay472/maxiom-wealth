import React from 'react';
import { Play } from 'lucide-react';
import ParticlesBackground from './ParticlesBackground';
import PerformanceChart from './PerformanceChart';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#1C52A0] to-[#0A1E3A] isolate">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <ParticlesBackground />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-32 pb-16 flex flex-col lg:flex-row items-center">
          {/* Text Column */}
          <div className="w-full lg:w-1/2 text-white space-y-8">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight bg-gradient-to-r from-white to-[#A2B8D8] bg-clip-text text-transparent animate-slideUp">
              Maxiom PMS - SPARK Emerging Companies Quality-Growth
            </h1>
            
            <p className="text-xl md:text-2xl text-[#A2B8D8] animate-fadeIn opacity-0" style={{ animationDelay: '0.3s' }}>
              Faster growth from small-cap and quality companies
            </p>
            
            <p className="text-[#E8EEF6] leading-relaxed animate-fadeIn opacity-0" style={{ animationDelay: '0.6s' }}>
              Achieve long-term capital appreciation by investing in a mix of small-cap companies that meet the Roots & Wings investment criteria...
            </p>
            
            <div className="flex flex-wrap gap-4 animate-fadeIn opacity-0" style={{ animationDelay: '0.9s' }}>
              <button className="bg-[#F49611] text-white px-8 py-4 rounded-lg hover:transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                Start Investing
              </button>
　　 　 　 　
              <button className="border-2 border-[#A2B8D8] text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors duration-300 flex items-center gap-2">
                <Play size={20} />
                Watch Demo
              </button>
            </div>
          </div>
          
          {/* Chart Column */}
          <div className="w-full lg:w-1/2 mt-12 lg:mt-0 animate-fadeIn opacity-0" style={{ animationDelay: '1.2s' }}>
            <div className="bg-white/5 rounded-2xl p-6">
              <PerformanceChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;