import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const GoalBasedInvestment = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      title: "Use our OmniMax tool to plan all goals",
      description: "Comprehensive goal planning with our advanced OmniMax technology"
    },
    {
      title: "Auto allocate portfolio investment to goals",
      description: "Smart allocation of your investments across different financial goals"
    },
    {
      title: "Add SIPs to goals to achieve financial freedom",
      description: "Systematic investment plans aligned with your goal-based strategy"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-white p-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content - Info Card */}
          <div className="hidden md:block">
            <div className="bg-[#F5F5F5] rounded-xl p-6 shadow-lg space-y-6">
              <div className="flex items-center space-x-4 border-b border-gray-100 pb-4">
                <div className="h-12 w-12 bg-[#E8EEF6] rounded-full flex items-center justify-center">
                  <svg className="h-6 w-6 text-[#1C52A0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-[#113262]">OmniMax Benefits</h4>
                  <p className="text-sm text-[#436FB0]">Smart Goal Planning Tool</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <div className="text-sm text-[#436FB0]">Investment Period</div>
                  <div className="text-lg font-medium text-[#113262] mt-1">1-30 Years</div>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <div className="text-sm text-[#436FB0]">Min. Investment</div>
                  <div className="text-lg font-medium text-[#113262] mt-1">₹5,000</div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <svg className="h-5 w-5 text-[#1C52A0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-[#262626]">Smart Goal Tracking</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="h-5 w-5 text-[#1C52A0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-[#262626]">Auto Portfolio Rebalancing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="h-5 w-5 text-[#1C52A0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-[#262626]">Regular Progress Updates</span>
                </div>
              </div>

              <div className="text-xs text-center text-gray-500 mt-4">
                AI-powered goal planning for optimal returns
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8 md:order-last">
            <h2 className="text-[#113262] text-4xl font-bold leading-tight">
              Start a Goal Based Investment
            </h2>
            
            <div className="space-y-6 relative">
              {/* Progress Indicators Container */}
              <div className="absolute right-0 h-full flex flex-col">
                {[0, 1, 2].map((index) => (
                  <div
                    key={index}
                    className={`w-1 flex-1 transition-all duration-300 rounded-none ${
                      index === activeSlide ? 'bg-[#1C52A0]' : 'bg-[#E8EEF6]'
                    }`}
                  />
                ))}
              </div>

              {slides.map((slide, index) => (
                <div
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  className={`pr-6 transition-all duration-500 h-24 cursor-pointer hover:opacity-90 text-right ${
                    index === activeSlide
                      ? 'opacity-100 transform translate-y-0 scale-105'
                      : 'opacity-60 transform translate-y-2'
                  }`}
                >
                  <h3 className={`text-lg font-medium ${
                    index === activeSlide ? 'text-[#113262]' : 'text-[#436FB0]'
                  }`}>
                    {slide.title}
                  </h3>
                  <p className={`mt-2 ${
                    index === activeSlide ? 'text-[#262626]' : 'text-[#545454]'
                  }`}>
                    {slide.description}
                  </p>
                </div>
              ))}
            </div>

            <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#1C52A0] to-[#0A1E3A] text-white rounded-lg hover:scale-105 hover:shadow-xl shadow-lg transition-all duration-300">
              Start Goal Based Investment
              <ArrowRight className="ml-3 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoalBasedInvestment;
