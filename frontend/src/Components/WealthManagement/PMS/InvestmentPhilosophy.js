import React from 'react';
import { useEffect, useState } from 'react';

const InvestmentPhilosophy = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('investment-philosophy');
      if (element) {
        const rect = element.getBoundingClientRect();
        setIsVisible(rect.top < window.innerHeight * 0.75);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="investment-philosophy" className="relative w-full overflow-hidden bg-[#113262]"> {/* Primary 500 */}
      {/* Premium Background with Multiple Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#113262] via-[#1C52A0] to-[#436FB0]" /> {/* Primary 500 to 300 to 200 */}
      <div className="absolute inset-0 opacity-5 bg-[linear-gradient(45deg,#113262_25%,transparent_25%),linear-gradient(-45deg,#113262_25%,transparent_25%),linear-gradient(45deg,transparent_75%,#113262_75%),linear-gradient(-45deg,transparent_75%,#113262_75%)] bg-[length:20px_20px]" />
      
      {/* Animated Accent Lines */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#F49611]/30 to-transparent transform -skew-x-12" /> {/* Secondary 300 */}
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#F49611]/30 to-transparent transform skew-x-12" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Header Section with Premium Animation */}
        <div className={`text-center mb-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-block">
            <div className="flex items-center justify-center mb-4">
              <div className="h-px w-8 bg-[#F49611]" /> {/* Secondary 300 */}
              <span className="mx-4 text-[#F49611] uppercase tracking-widest text-sm font-semibold">Our Approach</span>
              <div className="h-px w-8 bg-[#F49611]" />
            </div>
          </div>
          <h2 className="text-5xl font-bold text-white mb-6 tracking-tight">Investment Philosophy</h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto font-light leading-relaxed">
            Scientific and Process Driven Investing powered by our proprietary Roots & Wings Philosophy 
            and advanced LSG Framework
          </p>
        </div>

        {/* Premium Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: (
                <svg className="w-7 h-7 text-[#F49611]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              ),
              title: 'Scientific Process',
              description: 'Three Eye Fund Selection Framework ensuring systematic and data-driven investment decisions'
            },
            {
              icon: (
                <svg className="w-7 h-7 text-[#F49611]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              ),
              title: 'Sustainable Growth',
              description: 'Focus on businesses with high incremental return on capital and long growth runways'
            },
            {
              icon: (
                <svg className="w-7 h-7 text-[#F49611]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
              title: 'Risk Management',
              description: 'Strategic implementation of LSG Framework balancing Liquidity, Safety, and Growth'
            },
            {
              icon: (
                <svg className="w-7 h-7 text-[#F49611]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
              title: 'Long-Term Vision',
              description: 'Building sustainable competitive advantages over medium to long term horizons'
            }
          ].map((card, index) => (
            <div 
              key={index}
              className={`group relative transform transition-all duration-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative z-10 h-full p-8 rounded-2xl bg-[#1C52A0]/50 backdrop-blur-lg border border-white/10 transition-all duration-300 group-hover:bg-[#1C52A0]/70">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="mb-6 relative">
                    <div className="w-14 h-14 rounded-xl bg-[#113262]/80 flex items-center justify-center backdrop-blur-sm border border-[#F49611]/20">
                      {card.icon}
                    </div>
                    <div className="absolute -inset-2 rounded-xl bg-[#F49611]/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{card.title}</h3>
                  <p className="text-white/80 leading-relaxed">{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InvestmentPhilosophy;