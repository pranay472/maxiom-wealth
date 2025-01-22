import React from 'react';
import { TrendingUp, Shield, LineChart, Award } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#113262] to-[#1C52A0]">
        {/* Abstract pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute transform -rotate-45 left-0 right-0 h-full">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className="h-px bg-white"
                style={{
                  top: `${i * 10}%`,
                  position: 'absolute',
                  left: 0,
                  right: 0,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-7xl mx-auto">
          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="text-white space-y-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#F49611]/20 text-[#F49611]">
                <Award className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">SEBI Registered Portfolio Manager</span>
              </div>
              
              <h1 className="text-5xl font-bold leading-tight">
                Direct Stock 
                <span className="relative">
                  <span className="relative z-10">Investments</span>
                  <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#F49611]/30" viewBox="0 0 100 12" preserveAspectRatio="none">
                    <path d="M0,0 Q50,12 100,0" stroke="currentColor" strokeWidth="8" fill="none" />
                  </svg>
                </span>
              </h1>
              
              <p className="text-xl text-gray-200">
                Unlock your portfolio's potential with our scientific Roots & Wings philosophy. 
                Experience data-driven investment strategies tailored for long-term wealth creation.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="px-8 py-4 bg-[#F49611] hover:bg-[#F6A839] rounded-lg font-semibold transition-colors">
                  Start Investing
                </button>
                <button className="px-8 py-4 border-2 border-white hover:bg-white hover:text-[#113262] rounded-lg font-semibold transition-all">
                  Book Consultation
                </button>
              </div>

              {/* Trust Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-8">
                <div className="space-y-1">
                  <div className="text-2xl font-bold">₹450+ Cr</div>
                  <div className="text-sm text-gray-300">Assets Advised</div>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl font-bold">1000+</div>
                  <div className="text-sm text-gray-300">Client Families</div>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl font-bold">15%+</div>
                  <div className="text-sm text-gray-300">Avg. CAGR Returns</div>
                </div>
              </div>
            </div>

            {/* Right Column - Feature Cards */}
            <div className="relative">
              {/* Decorative background circle */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#F49611]/10 rounded-full blur-3xl" />
              
              <div className="relative grid gap-6">
                {/* Feature Cards */}
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 transform hover:scale-105 transition-transform">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-lg bg-[#F49611]/20">
                      <Shield className="w-6 h-6 text-[#F49611]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Roots Philosophy</h3>
                      <p className="text-gray-300 mt-1">Strong fundamentals with focus on low debt and high integrity</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 transform hover:scale-105 transition-transform">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-lg bg-[#F49611]/20">
                      <TrendingUp className="w-6 h-6 text-[#F49611]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Wings Philosophy</h3>
                      <p className="text-gray-300 mt-1">Growth focus with market leadership and strong cash flows</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 transform hover:scale-105 transition-transform">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-lg bg-[#F49611]/20">
                      <LineChart className="w-6 h-6 text-[#F49611]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Scientific Approach</h3>
                      <p className="text-gray-300 mt-1">Data-driven decisions with continuous monitoring</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Logos */}
          <div className="mt-20 pt-8 border-t border-white/20">
            <div className="flex flex-wrap justify-center gap-8 items-center text-white/60">
              <span className="text-sm">Trusted By</span>
              <img src="https://jamaappprod.s3.ap-south-1.amazonaws.com/Website/new/amfi.jpg" alt="AMFI Logo" className="h-8" />
              <img src="https://jamaappprod.s3.ap-south-1.amazonaws.com/jama_wealth_website/New-SEBI-Logo.jpg" alt="SEBI Logo" className="h-8" />
              <img src="https://jamaappprod.s3.ap-south-1.amazonaws.com/Website/new/static/img/bse.PNG" alt="Startup India Logo" className="h-8" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;