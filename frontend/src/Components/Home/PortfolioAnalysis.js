import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const PortfolioAnalysis = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      title: "Evaluate your portfolio against market benchmarks",
      description: "Compare your investments with established market indices like Nifty 50 TRI",
      stats: {
        portfolio: "+22.11%",
        benchmark: "+16.58%"
      }
    },
    {
      title: "Check your portfolio for risk and diversification",
      description: "Get detailed analysis of your portfolio's risk metrics and diversification status across market caps",
      stats: {
        portfolio: "+20.31%",
        benchmark: "+16.58%"
      }
    },
    {
      title: "Get expert guidance through a personal consultation",
      description: "Schedule a 1-on-1 call with our investment experts to discuss your portfolio strategy",
      stats: {
        portfolio: "+13.30%",
        benchmark: "+16.58%"
      }
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
          
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-4xl font-bold text-gray-900">
              Analyse & improve your current portfolio
            </h1>
            
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
                  <h3 className={`text-lg font-extrabold ${
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

            <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#1C52A0] to-[#0A1E3A] text-white rounded-lg hover:scale-105 hover:shadow-xl shadow-lg transition-all duration-300 group">
              <span className="font-semibold">Review my portfolio</span>
              <ArrowRight className="ml-3 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>

          {/* Right Content - Stats Card */}
          <div className="bg-gray-50 rounded-xl p-6 shadow-lg">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <span className="font-medium">Your Portfolio</span>
                </div>
                <span className={`font-semibold ${
                  parseFloat(slides[activeSlide].stats.portfolio) > parseFloat(slides[activeSlide].stats.benchmark) 
                    ? 'text-green-500' 
                    : 'text-red-500'
                }`}>
                  {slides[activeSlide].stats.portfolio}
                </span>
              </div>

              <div className="flex items-center justify-center">
                <span className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm">
                  vs
                </span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 bg-gray-100 rounded-full flex items-center justify-center">
                    <svg className="h-6 w-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <span className="font-medium">Nifty 50 TRI</span>
                </div>
                <span className="text-gray-600 font-semibold">
                  {slides[activeSlide].stats.benchmark}
                </span>
              </div>
            </div>

            <div className="mt-6 text-center text-sm text-gray-500">
              For illustrative purposes only. Past performance does not guarantee future returns.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioAnalysis;