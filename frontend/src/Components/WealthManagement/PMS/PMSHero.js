import React from 'react';
import { ArrowUpRight, Shield, Target, TrendingUp } from 'lucide-react';

const PMSHero = () => {
  return (
    <div className="relative bg-gradient-to-br from-[#113262] to-[#1C52A0] text-white overflow-hidden">
      {/* Abstract Background Patterns */}
      <div className="absolute inset-0">
        {/* Circular Gradient */}
        <div className="absolute -top-1/2 -right-1/4 w-full h-full rounded-full bg-gradient-to-br from-[#F49611]/20 to-transparent blur-3xl" />
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), 
                           linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          animation: 'backgroundMove 30s linear infinite',
        }} />

        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-[#F49611]/10 to-transparent rounded-full blur-xl animate-float" />
        <div className="absolute bottom-20 right-40 w-40 h-40 bg-gradient-to-l from-[#1C52A0]/20 to-transparent rounded-full blur-xl animate-float-delay" />
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1 text-sm">
              <span className="w-2 h-2 bg-[#F49611] rounded-full animate-pulse"></span>
              SEBI Registered Portfolio Management
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Scientific Portfolio Management for Sustainable Wealth Creation
            </h1>
            
            <p className="text-lg text-gray-200 leading-relaxed">
              Experience our research-backed investment approach combining the LSG Framework 
              with Three Eye Fund Selection to maximize your portfolio potential.
            </p>
            
            {/* Stats Grid with Hover Effects */}
            <div className="grid grid-cols-2 gap-4 py-6">
              <div className="group bg-white/10 hover:bg-white/15 backdrop-blur-sm rounded-lg p-6 transition-all duration-300 border border-white/5 hover:border-white/20">
                <p className="text-[#F49611] font-bold text-3xl group-hover:scale-105 transition-transform">₹450+ Cr</p>
                <p className="text-sm text-gray-300">Assets Advised</p>
              </div>
              <div className="group bg-white/10 hover:bg-white/15 backdrop-blur-sm rounded-lg p-6 transition-all duration-300 border border-white/5 hover:border-white/20">
                <p className="text-[#F49611] font-bold text-3xl group-hover:scale-105 transition-transform">1000+</p>
                <p className="text-sm text-gray-300">Family Offices</p>
              </div>
            </div>

            {/* Enhanced CTA Button */}
            <button className="group relative inline-flex items-center gap-2 bg-[#F49611] hover:bg-[#F6A839] px-8 py-4 rounded-lg text-white font-medium transition-all duration-300 overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                Get Portfolio Analysis
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
            </button>
          </div>

          {/* Right Content - Enhanced Features Grid */}
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                icon: <Shield className="w-8 h-8 text-[#F49611]" />,
                title: "Risk-Managed Growth",
                desc: "Strategic asset allocation with our proprietary LSG Framework"
              },
              {
                icon: <Target className="w-8 h-8 text-[#F49611]" />,
                title: "Goal Alignment",
                desc: "Customized strategies for your unique financial objectives"
              },
              {
                icon: <TrendingUp className="w-8 h-8 text-[#F49611]" />,
                title: "Active Management",
                desc: "Dynamic portfolio rebalancing based on market conditions"
              },
              {
                icon: <div className="flex items-center justify-center w-8 h-8 text-[#F49611]">
                  <span className="text-2xl font-bold">₹</span>
                </div>,
                title: "Tax Efficiency",
                desc: "Optimized investment strategies for better after-tax returns"
              }
            ].map((feature, index) => (
              <div key={index} 
                className="group bg-white/5 hover:bg-white/10 backdrop-blur-sm p-6 rounded-lg transition-all duration-300 border border-white/5 hover:border-white/20">
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="font-semibold mb-2 group-hover:text-[#F49611] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-300">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add CSS animations */}
      <style jsx>{`
        @keyframes backgroundMove {
          0% { background-position: 0 0; }
          100% { background-position: 50px 50px; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        .animate-float-delay {
          animation: float 8s ease-in-out infinite;
          animation-delay: -4s;
        }
      `}</style>
    </div>
  );
};

export default PMSHero;