import React from 'react';
import ParticlesBackground from './ParticlesBackground'; // Assuming ParticlesBackground is in the same directory

const HeroSection = () => {
  return (
    <div className="w-full min-h-screen relative bg-gradient-to-br from-[#F8FAFF] via-[#FFF5EB] to-[#EDF2FF] font-['General Sans'] overflow-hidden">
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzExMzI2MiIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            {/* Main Heading - Using H1 typography scale: 32/38 */}
            <h1 className="text-[#113262] text-[32px] leading-[38px] font-bold max-w-xl">
              Grow & Protect Wealth. Through Scientific Investment Strategies.
            </h1>
            
            {/* Subheading - Using grey from neutral color palette */}
            <p className="text-[#8A8A8A] text-[20px] leading-[26px] max-w-lg">
              Join 10,000+ families who trust our independent research-backed approach to achieve their financial goals.
            </p>
            
            {/* Services - Using Primary 300 color */}
            <p className="text-[#1C52A0] text-[16px] leading-[26px] font-medium">
              Expertly managed Mutual Funds • Stocks • Portfolio Management Services
            </p>
            
            <div className="flex flex-col sm:flex-col space-y-4 pt-4">
              {/* Primary CTA Button - Using Primary 500 color */}
              <button className="w-full sm:w-auto bg-[#113262] border-2 border-[#113262] text-white px-12 py-4 rounded-lg text-[16px] leading-[26px] font-medium hover:bg-[#143970] transition-colors duration-300 shadow-sm">
                Get free portfolio health check
              </button>
              
              {/* Secondary CTA Button - Outlined style */}
              <button className="w-full sm:w-auto border-2 border-[#113262] text-[#113262] px-12 py-4 rounded-lg text-[16px] leading-[26px] font-medium hover:bg-[#E8EEF6] transition-colors duration-300">
                Start Goal Based Investment
              </button>
            </div>
          </div>
          
          {/* Right Column - Mobile App Screenshot */}
          <div className="relative flex flex-col items-center">
            {/* Mobile mockup with dark theme */}
            <div className="w-[320px] h-[650px] bg-[#0C131C] rounded-3xl shadow-xl overflow-hidden relative">
              {/* Bottom gradient overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0C131C] via-[#0C131C]/80 to-transparent pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
              {/* Status bar */}
              <div className="bg-black h-6 flex items-center justify-between px-4">
                <span className="text-white text-xs">09:41</span>
                <div className="flex items-center">
                  {/* Signal icon */}
                  <div className="flex items-end h-2.5 gap-[0.5px] mr-1">
                    <div className="w-[2px] h-[4px] bg-white rounded-sm"></div>
                    <div className="w-[2px] h-[6px] bg-white rounded-sm"></div>
                    <div className="w-[2px] h-[8px] bg-white rounded-sm"></div>
                    <div className="w-[2px] h-[10px] bg-white rounded-sm"></div>
                  </div>
                  {/* WiFi icon */}
                  <svg className="w-3.5 h-2.5 text-white mr-1" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/>
                  </svg>
                  {/* Battery icon with percentage */}
                  <div className="flex items-center">
                    <svg className="w-5 h-2.5 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <rect x="2" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
                      <rect x="4" y="8" width="14" height="8" fill="currentColor"/>
                      <rect x="21" y="10" width="1" height="4" fill="currentColor"/>
                    </svg>
                  </div>
                </div>
              </div>
              {/* App content */}
              <div className="p-4 space-y-4">
                {/* Header */}
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-full bg-[#1C52A0] flex items-center justify-center text-white text-xs">
                      DA
                    </div>
                    <div>
                      <div className="text-white/60 text-xs">Hello</div>
                      <div className="text-white text-sm">Dhirubhai Ambani</div>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <div className="w-8 h-8 rounded-full bg-[#131C2B] flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#131C2B] flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* At a Glance section */}
                <div className="text-white text-[16px] leading-[26px] mt-6">
                  At a Glance
                </div>
                
                {/* Investment Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#131C2B] p-4 rounded-xl">
                    <div className="text-white text-sm">Top 10 stocks to invest in</div>
                    <div className="text-white/60 text-xs mt-1">Start by investing only ₹500 / month</div>
                    <button className="mt-4 bg-[#1C52A0] text-white text-xs px-4 py-2 rounded-lg">
                      Start investing now
                    </button>
                  </div>
                  <div className="bg-[#131C2B] p-4 rounded-xl">
                    <div className="text-white text-sm">Get started with your Goals</div>
                    <div className="text-white/60 text-xs mt-1">Set up goals to secure your future</div>
                    <button className="mt-4 bg-[#1C52A0] text-white text-xs px-4 py-2 rounded-lg">
                      Continue to Goals
                    </button>
                  </div>
                </div>
                
                {/* Investment Options */}
                <div className="space-y-4 mt-8">
                  <div className="text-white text-[16px] leading-[26px]">
                    Start your investments with Maxiom
                  </div>
                  <div className="bg-[#131C2B] p-4 rounded-xl flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 rounded-lg bg-[#1C52A0] flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-white text-sm">Invest in Stocks</div>
                        <div className="text-white/60 text-xs">Get Started in 2 mins</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="bg-[#F49611]/20 text-[#F49611] text-xs px-2 py-1 rounded">
                        1000 Crores+ invested
                      </div>
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                  <div className="bg-[#131C2B] p-4 rounded-xl flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 rounded-lg bg-[#1C52A0] flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-white text-sm">Invest in MFs</div>
                        <div className="text-white/60 text-xs">Get Started in 2 mins</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="bg-[#F49611]/20 text-[#F49611] text-xs px-2 py-1 rounded">
                        1000 Crores+ invested
                      </div>
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* App Store Buttons */}
            <div className="flex justify-center gap-6 mt-8">
              <button className="bg-[#545454]/90 border-2 border-[#545454] text-white px-8 py-2.5 rounded-lg hover:bg-[#333333] transition-colors duration-300 text-[14px] leading-[20px] font-medium">
                App Store
              </button>
              <button className="bg-[#545454]/90 border-2 border-[#545454] text-white px-8 py-2.5 rounded-lg hover:bg-[#333333] transition-colors duration-300 text-[14px] leading-[20px] font-medium">
                Play Store
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;