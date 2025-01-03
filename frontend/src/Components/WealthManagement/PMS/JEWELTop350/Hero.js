import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-[600px] bg-gradient-to-br from-[#113262] to-[#1C52A0] overflow-hidden">
      <div className="absolute inset-0" style={{ opacity: 0.1 }}>
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="2" fill="currentColor"/>
            <circle cx="18" cy="2" r="2" fill="currentColor"/>
            <circle cx="10" cy="10" r="2" fill="currentColor"/>
            <circle cx="2" cy="18" r="2" fill="currentColor"/>
            <circle cx="18" cy="18" r="2" fill="currentColor"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>
      <div className="container mx-auto px-4 py-20 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-[slideUp_0.8s_cubic-bezier(0.16,1,0.3,1)]">
            Build wealth steadily through a judicious mix of high quality Large and Midcap Stocks
          </h1>
          <p className="text-lg md:text-xl text-[#A2B8D8] max-w-2xl mx-auto animate-[slideUp_0.8s_cubic-bezier(0.16,1,0.3,1)_0.2s]">
            Achieve capital appreciation by investing in a mix of large and mid-cap companies that have strong balance sheets and growing earnings. These companies typically have ₹10,000 crore market cap (roughly $1.5B+) and offer steady growth over the long term.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;