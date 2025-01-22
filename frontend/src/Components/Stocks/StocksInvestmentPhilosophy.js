import React from 'react';
import { BarChart, Target, FileText, LineChart, ArrowRight } from 'lucide-react';

const StocksInvestmentPhilosophy = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#FFFFFF] to-[#E8EEF6]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 animate-fadeIn">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-4xl font-bold text-[#113262] relative mb-8 drop-shadow-md group">
              Investment Philosophy
              <span className="absolute -bottom-2 left-1/2 w-3/5 h-[3px] bg-gradient-to-r from-transparent via-[#1C52A0] to-transparent -translate-x-1/2 group-hover:w-4/5 transition-all duration-300"></span>
            </h2>
          </div>
          <p className="text-lg text-[#545454]">
            Our research-driven approach to stock selection and portfolio management
          </p>
        </div>

        {/* Investment Approach Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Research */}
          <div className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl border border-[#E6E6E6] transition-all duration-300 hover:border-[#1C52A0] animate-fadeIn">
            <div className="p-4 bg-[#E8EEF6] rounded-lg w-fit mb-6 group-hover:bg-[#1C52A0]/10 transition-colors duration-300">
              <FileText className="w-6 h-6 text-[#1C52A0]" />
            </div>
            <h3 className="text-xl font-bold text-[#113262] mb-4 group-hover:text-[#1C52A0] transition-colors duration-300">Research-Backed</h3>
            <ul className="space-y-3 text-[#545454]">
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1C52A0]"></span>
                <span>In-depth company analysis</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1C52A0]"></span>
                <span>Industry research reports</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1C52A0]"></span>
                <span>Quarterly updates</span>
              </li>
            </ul>
          </div>

          {/* Stock Selection */}
          <div className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl border border-[#E6E6E6] transition-all duration-300 hover:border-[#1C52A0] animate-fadeIn animation-delay-200">
            <div className="p-4 bg-[#E8EEF6] rounded-lg w-fit mb-6 group-hover:bg-[#1C52A0]/10 transition-colors duration-300">
              <Target className="w-6 h-6 text-[#1C52A0]" />
            </div>
            <h3 className="text-xl font-bold text-[#113262] mb-4 group-hover:text-[#1C52A0] transition-colors duration-300">Stock Selection</h3>
            <ul className="space-y-3 text-[#545454]">
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1C52A0]"></span>
                <span>Fundamental analysis</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1C52A0]"></span>
                <span>Technical analysis</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1C52A0]"></span>
                <span>Risk assessment</span>
              </li>
            </ul>
          </div>

          {/* Portfolio Tracking */}
          <div className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl border border-[#E6E6E6] transition-all duration-300 hover:border-[#1C52A0] animate-fadeIn animation-delay-300">
            <div className="p-4 bg-[#E8EEF6] rounded-lg w-fit mb-6 group-hover:bg-[#1C52A0]/10 transition-colors duration-300">
              <BarChart className="w-6 h-6 text-[#1C52A0]" />
            </div>
            <h3 className="text-xl font-bold text-[#113262] mb-4 group-hover:text-[#1C52A0] transition-colors duration-300">Portfolio Tracking</h3>
            <ul className="space-y-3 text-[#545454]">
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1C52A0]"></span>
                <span>Regular monitoring</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1C52A0]"></span>
                <span>Performance analytics</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1C52A0]"></span>
                <span>Rebalancing suggestions</span>
              </li>
            </ul>
          </div>

          {/* Expert Support */}
          <div className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl border border-[#E6E6E6] transition-all duration-300 hover:border-[#1C52A0] animate-fadeIn animation-delay-400">
            <div className="p-4 bg-[#E8EEF6] rounded-lg w-fit mb-6 group-hover:bg-[#1C52A0]/10 transition-colors duration-300">
              <LineChart className="w-6 h-6 text-[#1C52A0]" />
            </div>
            <h3 className="text-xl font-bold text-[#113262] mb-4 group-hover:text-[#1C52A0] transition-colors duration-300">Expert Support</h3>
            <ul className="space-y-3 text-[#545454]">
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1C52A0]"></span>
                <span>Entry/exit guidance</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1C52A0]"></span>
                <span>Market insights</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1C52A0]"></span>
                <span>Portfolio review</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Service Features */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl border border-[#E6E6E6] transition-all duration-300 hover:border-[#1C52A0] text-center animate-fadeIn animation-delay-500">
            <div className="text-2xl font-bold text-[#113262] mb-3 group-hover:text-[#1C52A0] transition-colors duration-300">Regular Updates</div>
            <p className="text-[#545454]">Timely market insights and stock recommendations</p>
          </div>
          
          <div className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl border border-[#E6E6E6] transition-all duration-300 hover:border-[#1C52A0] text-center animate-fadeIn animation-delay-600">
            <div className="text-2xl font-bold text-[#113262] mb-3 group-hover:text-[#1C52A0] transition-colors duration-300">Expert Advisory</div>
            <p className="text-[#545454]">Personalized guidance from market experts</p>
          </div>
          
          <div className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl border border-[#E6E6E6] transition-all duration-300 hover:border-[#1C52A0] text-center animate-fadeIn animation-delay-700">
            <div className="text-2xl font-bold text-[#113262] mb-3 group-hover:text-[#1C52A0] transition-colors duration-300">Risk Management</div>
            <p className="text-[#545454]">Focus on portfolio protection and diversification</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 flex justify-center animate-fadeIn animation-delay-800">
          <button className="w-full max-w-md py-4 px-6 bg-gradient-to-r from-[#1C52A0] to-[#0A1E3A] text-white text-lg font-medium rounded-lg hover:bg-gradient-to-r hover:from-[#0A1E3A] hover:to-[#1C52A0] transition-all duration-300 flex items-center justify-center space-x-2 group">
            <span>Start Investing Now</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default StocksInvestmentPhilosophy;