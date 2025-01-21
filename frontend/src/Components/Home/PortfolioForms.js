import React, { useState } from 'react';

const PortfolioForms = () => {
  const [selectedForm, setSelectedForm] = useState(0);

  const formInfo = {
    portfolio: {
      title: "Get Your Portfolio Health Check",
      description: "Our expert team will analyze your current investment portfolio to:",
      points: [
        "Identify potential risks and inefficiencies",
        "Evaluate your asset allocation strategy",
        "Suggest optimizations to improve returns",
        "Provide a detailed report with actionable insights"
      ]
    },
    goals: {
      title: "Plan Your Financial Future",
      description: "Let us help you create a personalized investment strategy:",
      points: [
        "Map your financial goals to realistic timelines",
        "Design a customized investment plan",
        "Regular progress tracking and adjustments",
        "Professional guidance throughout your journey"
      ]
    }
  };

  return (
    <div className="w-full bg-gradient-to-b from-[#E8EEF6] to-[#FFFFFF] min-h-screen">
      {/* Header Section */}
      <div className="w-full text-center py-16 bg-white">
        <div className="relative inline-block">
          <h1 className="text-4xl font-bold text-[#113262] mb-2">
            Transform Your Investment Journey
          </h1>
          <div className="h-[3px] bg-[#1C52A0] w-full mt-1"></div>
        </div>
        <p className="text-[#545454] text-lg mt-6">
          Choose your path to financial success
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-center space-x-8 mb-16">
          <button
            onClick={() => setSelectedForm(0)}
            className={`relative py-4 px-8 text-lg font-medium transition-all duration-300
              ${selectedForm === 0 
                ? 'text-[#113262]'
                : 'text-[#545454] hover:text-[#113262]'}`}
          >
            Get Free Portfolio Check
            <div className={`absolute bottom-0 left-0 w-full h-1 transform transition-all duration-300
              ${selectedForm === 0 
                ? 'bg-[#113262] scale-x-100'
                : 'bg-[#E6E6E6] scale-x-0'}`} 
            />
          </button>
          <button
            onClick={() => setSelectedForm(1)}
            className={`relative py-4 px-8 text-lg font-medium transition-all duration-300
              ${selectedForm === 1 
                ? 'text-[#113262]'
                : 'text-[#545454] hover:text-[#113262]'}`}
          >
            Start Goal Based Investment
            <div className={`absolute bottom-0 left-0 w-full h-full transform transition-all duration-300
              ${selectedForm === 1 
                ? 'bg-[#113262] scale-x-100 opacity-5'
                : 'bg-[#E6E6E6] scale-x-0'}`} 
            />
            <div className={`absolute bottom-0 left-0 w-full h-1 transform transition-all duration-300
              ${selectedForm === 1 
                ? 'bg-[#113262] scale-x-100'
                : 'bg-[#E6E6E6] scale-x-0'}`} 
            />
          </button>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          {/* Left side - Information */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-[#113262]">
                {selectedForm === 0 ? formInfo.portfolio.title : formInfo.goals.title}
              </h2>
              <p className="text-[#545454] text-lg">
                {selectedForm === 0 ? formInfo.portfolio.description : formInfo.goals.description}
              </p>
            </div>
            
            <ul className="space-y-6">
              {(selectedForm === 0 ? formInfo.portfolio.points : formInfo.goals.points).map((point, index) => (
                <li key={index} className="flex items-center space-x-4 transform hover:translate-x-2 transition-transform">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-[#E8EEF6]">
                    <svg className="h-6 w-6 text-[#113262]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[#333333] text-lg">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right side - Forms */}
          <div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-[#E6E6E6]">
              {selectedForm === 0 ? (
                <form className="space-y-6">
                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-[#333333]">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-lg border border-[#E6E6E6] focus:ring-2 focus:ring-[#E8EEF6] focus:border-[#1C52A0] transition-all" 
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-[#333333]">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 rounded-lg border border-[#E6E6E6] focus:ring-2 focus:ring-[#E8EEF6] focus:border-[#1C52A0] transition-all" 
                      placeholder="Enter your email address"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-[#333333]">Mobile Number</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 rounded-lg border border-[#E6E6E6] focus:ring-2 focus:ring-[#E8EEF6] focus:border-[#1C52A0] transition-all" 
                      placeholder="Enter your mobile number"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-[#333333]">Current Portfolio Value</label>
                    <div className="relative">
                      <span className="absolute left-4 top-3 text-[#545454]">₹</span>
                      <input 
                        type="text" 
                        className="w-full pl-8 pr-4 py-3 rounded-lg border border-[#E6E6E6] focus:ring-2 focus:ring-[#E8EEF6] focus:border-[#1C52A0] transition-all" 
                        placeholder="Enter your current portfolio value"
                      />
                    </div>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full py-4 px-6 bg-gradient-to-r from-[#1C52A0] to-[#0A1E3A] text-white text-lg font-medium rounded-lg hover:bg-gradient-to-r hover:from-[#0A1E3A] hover:to-[#1C52A0] transition-all duration-300"
                  >
                    Get Free Analysis
                  </button>
                </form>
              ) : (
                <form className="space-y-6">
                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-[#333333]">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-lg border border-[#E6E6E6] focus:ring-2 focus:ring-[#E8EEF6] focus:border-[#1C52A0] transition-all" 
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-[#333333]">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 rounded-lg border border-[#E6E6E6] focus:ring-2 focus:ring-[#E8EEF6] focus:border-[#1C52A0] transition-all" 
                      placeholder="Enter your email address"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-[#333333]">Investment Goal</label>
                    <select className="w-full px-4 py-3 rounded-lg border border-[#E6E6E6] focus:ring-2 focus:ring-[#E8EEF6] focus:border-[#1C52A0] transition-all">
                      <option value="">Choose your investment goal</option>
                      <option value="retirement">Retirement Planning</option>
                      <option value="education">Children's Education</option>
                      <option value="wealth">Wealth Creation</option>
                      <option value="tax">Tax Planning</option>
                      <option value="real-estate">Real Estate Investment</option>
                      <option value="other">Other Goals</option>
                    </select>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full py-4 px-6 bg-gradient-to-r from-[#1C52A0] to-[#0A1E3A] text-white text-lg font-medium rounded-lg hover:bg-gradient-to-r hover:from-[#0A1E3A] hover:to-[#1C52A0] transition-all duration-300"
                  >
                    Start Planning
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioForms;
