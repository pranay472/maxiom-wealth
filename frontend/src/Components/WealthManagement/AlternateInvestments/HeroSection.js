import React from 'react';
import { ArrowRightCircle, TrendingUp, Shield, BarChart3 } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-[#113262] to-[#1C52A0]">
      {/* Decorative background elements */}
      <div className="absolute inset-0">
        <div className="absolute transform -rotate-45 bg-[#1C52A0]/10 w-96 h-96 -top-48 -left-48 rounded-full"></div>
        <div className="absolute transform rotate-45 bg-[#1C52A0]/10 w-96 h-96 -bottom-48 -right-48 rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-20 pb-24">
          {/* Main content */}
          <div className="text-center lg:text-left lg:grid lg:grid-cols-2 lg:gap-8 items-center pt-24">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Alternative
                <span className="block text-[#F49611]">Investments</span>
              </h1>
              <p className="mt-6 text-xl text-gray-300">
                Discover sophisticated investment opportunities beyond traditional assets, designed to enhance portfolio performance and diversification.
              </p>
              
              {/* CTA Buttons */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="inline-flex items-center px-6 py-3 bg-[#F49611] text-white rounded-lg hover:bg-[#AB690C] transition-colors">
                  Schedule Consultation
                  <ArrowRightCircle className="ml-2 h-5 w-5" />
                </button>
                <button className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors">
                  Learn More
                </button>
              </div>
            </div>

            {/* Stats/Features Grid */}
            <div className="mt-12 lg:mt-0">
              <div className="grid grid-cols-2 gap-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="flex items-center">
                    <TrendingUp className="h-8 w-8 text-[#F49611]" />
                    <h3 className="ml-3 text-lg font-semibold text-white">Enhanced Returns</h3>
                  </div>
                  <p className="mt-2 text-sm text-gray-300">
                    Potential for higher risk-adjusted returns through sophisticated strategies
                  </p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="flex items-center">
                    <Shield className="h-8 w-8 text-[#F49611]" />
                    <h3 className="ml-3 text-lg font-semibold text-white">Risk Management</h3>
                  </div>
                  <p className="mt-2 text-sm text-gray-300">
                    Professional management with focus on downside protection
                  </p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="flex items-center">
                    <BarChart3 className="h-8 w-8 text-[#F49611]" />
                    <h3 className="ml-3 text-lg font-semibold text-white">Tax Efficiency</h3>
                  </div>
                  <p className="mt-2 text-sm text-gray-300">
                    Optimized structure for better post-tax returns
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="flex items-center">
                    <Shield className="h-8 w-8 text-[#F49611]" />
                    <h3 className="ml-3 text-lg font-semibold text-white">Diversification</h3>
                  </div>
                  <p className="mt-2 text-sm text-gray-300">
                    Low correlation with traditional market investments
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;