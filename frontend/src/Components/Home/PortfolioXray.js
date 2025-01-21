import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const PortfolioXray = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      title: "Find stocks and funds with low returns, with reasons",
      description: "Identify underperforming investments in your portfolio and understand the factors behind their performance"
    },
    {
      title: "Get detailed risk analysis with 20 factors",
      description: "Comprehensive evaluation of your portfolio using advanced risk metrics and analytical tools"
    },
    {
      title: "Expert answers your queries in a 1x1 call",
      description: "Schedule a personal consultation with our investment experts to discuss your portfolio strategy"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-[#F5F5F5] p-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h2 className="text-[#113262] text-4xl font-bold leading-tight">
              X-Ray Your Portfolio For Risks & Opportunities
            </h2>
            
            <div className="space-y-6 relative">
              {/* Progress Indicators Container */}
              <div className="absolute left-0 h-full flex flex-col">
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
                  className={`pl-6 transition-all duration-500 h-24 cursor-pointer hover:opacity-90 ${
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
              Get Portfolio Health Check
              <ArrowRight className="ml-3 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>

          {/* Right Content - Info Card */}
          <div className="hidden md:block">
            <div className="bg-white rounded-xl p-6 shadow-lg space-y-6">
              <div className="flex items-center space-x-4 border-b border-gray-100 pb-4">
                <div className="h-12 w-12 bg-[#E8EEF6] rounded-full flex items-center justify-center">
                  <svg className="h-6 w-6 text-[#1C52A0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-[#113262]">X-Ray Analysis Features</h4>
                  <p className="text-sm text-[#436FB0]">Comprehensive Portfolio Review</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#F5F5F5] p-4 rounded-lg">
                  <div className="text-sm text-[#436FB0]">Analysis Time</div>
                  <div className="text-lg font-medium text-[#113262] mt-1">24-48 hrs</div>
                </div>
                <div className="bg-[#F5F5F5] p-4 rounded-lg">
                  <div className="text-sm text-[#436FB0]">Success Rate</div>
                  <div className="text-lg font-medium text-[#113262] mt-1">98%</div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <svg className="h-5 w-5 text-[#1C52A0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-[#262626]">20+ Risk Factors Analysis</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="h-5 w-5 text-[#1C52A0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-[#262626]">Performance Benchmarking</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="h-5 w-5 text-[#1C52A0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-[#262626]">Expert Consultation</span>
                </div>
              </div>

              <div className="text-xs text-center text-gray-500 mt-4">
                Trusted by 10,000+ investors
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioXray;
