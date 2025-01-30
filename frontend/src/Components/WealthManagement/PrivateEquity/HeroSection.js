import React from 'react';
import { ArrowRight, BarChart2, TrendingUp, LineChart, Building } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-br from-[#113262] to-[#1C52A0] overflow-hidden">
      {/* Skewed overlay */}
      <div className="absolute inset-0 bg-black/10 transform -skew-y-6 scale-110 origin-top-left" />
      
      <div className="container mx-auto px-4 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10 pt-12">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="w-12 h-0.5 bg-[#F49611]" />
            <div className="space-y-4">
              <h4 className="text-[#F49611] uppercase tracking-wider font-medium">Private Equity</h4>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Strategic Private Equity Investment Solutions
              </h1>
              <p className="text-xl text-white/80">
                Access exclusive private equity opportunities with expert guidance across growth stages.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-6 py-3 bg-[#F49611] hover:bg-[#F6A839] text-white rounded-lg flex items-center justify-center gap-2 transition-colors">
                Explore Opportunities
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-6 py-3 border border-white text-white rounded-lg hover:bg-white/10 flex items-center justify-center gap-2 transition-colors">
                Schedule Consultation
              </button>
            </div>
          </div>

          {/* Right Column - Feature Cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 rounded-lg bg-white/10 backdrop-blur text-white">
              <BarChart2 className="w-8 h-8 text-[#F49611] mb-4" />
              <h3 className="font-semibold mb-2">Early Stage</h3>
              <p className="text-sm text-white/80">Emerging technologies and high-growth potential ventures</p>
            </div>

            <div className="p-6 rounded-lg bg-white/10 backdrop-blur text-white">
              <TrendingUp className="w-8 h-8 text-[#F49611] mb-4" />
              <h3 className="font-semibold mb-2">Growth Stage</h3>
              <p className="text-sm text-white/80">Scale-up capital for proven business models</p>
            </div>

            <div className="p-6 rounded-lg bg-white/10 backdrop-blur text-white">
              <LineChart className="w-8 h-8 text-[#F49611] mb-4" />
              <h3 className="font-semibold mb-2">Late Stage</h3>
              <p className="text-sm text-white/80">Pre-IPO investments in established businesses</p>
            </div>

            <div className="p-6 rounded-lg bg-white/10 backdrop-blur text-white">
              <Building className="w-8 h-8 text-[#F49611] mb-4" />
              <h3 className="font-semibold mb-2">Strategic Exits</h3>
              <p className="text-sm text-white/80">Value realization through planned exit strategies</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;