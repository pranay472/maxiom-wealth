import React, { useState, useEffect } from 'react';
import { ChevronRight, Shield, TrendingUp, LineChart } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#113262] via-[#1C52A0] to-[#113262] overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-[length:400%_400%] animate-gradient bg-gradient-to-br from-[#113262]/30 via-[#1C52A0]/30 to-[#113262]/30" />
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-[#E8A355]/10 to-transparent rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-tl from-[#1C52A0]/20 to-transparent rounded-full blur-3xl animate-float-delayed" />
      </div>

      {/* Main content */}
      <div className="container mx-auto px-6 py-24 relative">
        <div className="max-w-5xl mx-auto">
          {/* Premium badge */}
          <div className={`flex items-center justify-center mb-8 opacity-0 ${isVisible ? 'animate-fadeIn' : ''}`}>
            <span className="px-4 py-2 bg-gradient-to-r from-[#E8A355] to-[#F3B778] rounded-full text-white text-sm font-semibold tracking-wider">
              PREMIUM WEALTH MANAGEMENT
            </span>
          </div>

          {/* Main heading */}
          <h1 className={`text-5xl md:text-6xl font-bold text-center text-white mb-8 opacity-0 leading-tight ${isVisible ? 'animate-slideUp' : ''}`}>
            Build Lasting Wealth Through
            <span className="bg-gradient-to-r from-[#F49611] to-[#F6A839] text-transparent bg-clip-text"> Strategic Investments</span>
          </h1>

          {/* Subheading */}
          <p className={`text-xl md:text-2xl text-[#A2B8D8] text-center max-w-3xl mx-auto mb-12 opacity-0 ${isVisible ? 'animate-slideUpDelayed' : ''}`}>
            Achieve exceptional capital appreciation through our curated portfolio of large and mid-cap companies with proven track records.
          </p>

          {/* CTA buttons */}
          <div className={`flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 opacity-0 ${isVisible ? 'animate-slideUpMore' : ''}`}>
            <button className="px-8 py-4 bg-gradient-to-r from-[#F49611] to-[#F6A839] rounded-lg text-white font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-[#E8A355]/20 transition-all">
              Start Investing Now
              <ChevronRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 bg-white/10 rounded-lg text-white font-semibold backdrop-blur-sm hover:bg-white/20 transition-all">
              Schedule Consultation
            </button>
          </div>

          {/* Features grid */}
          <div className={`grid md:grid-cols-3 gap-8 opacity-0 ${isVisible ? 'animate-slideUpMost' : ''}`}>
            {[
              { icon: Shield, title: "Secure Investment", desc: "Bank-grade security protocols" },
              { icon: TrendingUp, title: "Proven Growth", desc: "15%+ historical returns" },
              { icon: LineChart, title: "Expert Management", desc: "Professional portfolio oversight" }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 hover:bg-white/10 transition-all">
                <feature.icon className="w-10 h-10 text-[#E8A355] mb-4" />
                <h3 className="text-white text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-[#A2B8D8]">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;



