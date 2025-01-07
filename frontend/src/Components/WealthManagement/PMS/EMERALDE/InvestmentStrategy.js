import React, { useState } from 'react';
import { 
  BarChart, 
  Shield, 
  Building, 
  LineChart,
  DollarSign,
  CircleDot,
  PieChart,
  ArrowRight,
  RefreshCcw
} from 'lucide-react';

const InvestmentStrategy = () => {
  const [activeTab, setActiveTab] = useState('selection');

  return (
    <div className="bg-[#E8EEF6] relative overflow-hidden py-20">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMxLjY1NyAwIDMgMS4zNDMgMyAzdjE4YzAgMS42NTctMS4zNDMgMy0zIDNoLTEyYy0xLjY1NyAwLTMtMS4zNDMtMy0zdi0xOGMwLTEuNjU3IDEuMzQzLTMgMy0zaDF6IiBzdHJva2U9IiMxMTMyNjIwOCIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#113262] mb-4">Investment Strategy</h2>
          <div className="w-24 h-1 bg-[#F49611] mx-auto rounded-full"></div>
        </div>

        {/* Strategy Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-white shadow-lg p-1 rounded-lg inline-flex">
            <button
              onClick={() => setActiveTab('selection')}
              className={`px-6 py-3 rounded-md transition-all duration-300 ${
                activeTab === 'selection'
                  ? 'bg-[#F49611] text-white'
                  : 'text-[#113262] hover:bg-[#F49611]/10'
              }`}
            >
              Fund Selection
            </button>
            <button
              onClick={() => setActiveTab('risk')}
              className={`px-6 py-3 rounded-md transition-all duration-300 ${
                activeTab === 'risk'
                  ? 'bg-[#F49611] text-white'
                  : 'text-[#113262] hover:bg-[#F49611]/10'
              }`}
            >
              Risk Management
            </button>
          </div>
        </div>

        {/* Content Section */}
        <div className="relative">
          {/* Selection Framework */}
          <div className={`transition-all duration-500 ${
            activeTab === 'selection' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full absolute'
          }`}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: BarChart,
                  title: "Performance Tracking",
                  description: "Comprehensive analysis of risk-adjusted returns and performance metrics"
                },
                {
                  icon: Shield,
                  title: "Manager Experience",
                  description: "Evaluation of fund manager track record and investment expertise"
                },
                {
                  icon: Building,
                  title: "Fund House Reputation",
                  description: "Assessment of fund house stability and market standing"
                },
                {
                  icon: LineChart,
                  title: "Portfolio Quality",
                  description: "Analysis of portfolio concentration and holdings quality"
                },
                {
                  icon: DollarSign,
                  title: "Cost Efficiency",
                  description: "Optimization of expense ratios and evaluation of AUM size"
                },
                {
                  icon: CircleDot,
                  title: "Market Analysis",
                  description: "Deep dive into market trends and opportunities"
                }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="bg-white shadow-lg p-6 rounded-xl border border-[#113262]/10 hover:border-[#F49611] transition-all duration-300 group hover:shadow-xl"
                >
                  <div className="bg-[#E8EEF6] p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-[#F49611]/10 transition-all duration-300">
                    <item.icon className="w-6 h-6 text-[#113262] group-hover:text-[#F49611]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#113262] mb-2">{item.title}</h3>
                  <p className="text-[#436FB0]">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Risk Management */}
          <div className={`transition-all duration-500 ${
            activeTab === 'risk' ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full absolute'
          }`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: LineChart,
                  title: "Performance Monitoring",
                  description: "Continuous tracking of fund performance against benchmarks and peers"
                },
                {
                  icon: PieChart,
                  title: "Strategic Diversification",
                  description: "Optimal allocation across sectors, styles, and market caps"
                },
                {
                  icon: ArrowRight,
                  title: "Exit Strategy",
                  description: "Well-defined criteria for fund replacement and portfolio adjustments"
                },
                {
                  icon: RefreshCcw,
                  title: "Regular Rebalancing",
                  description: "Periodic portfolio realignment to maintain optimal asset allocation"
                }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="bg-white shadow-lg p-8 rounded-xl border border-[#113262]/10 hover:border-[#F49611] transition-all duration-300 group hover:shadow-xl"
                >
                  <div className="bg-[#E8EEF6] p-4 rounded-lg w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-[#F49611]/10 transition-all duration-300">
                    <item.icon className="w-8 h-8 text-[#113262] group-hover:text-[#F49611]" />
                  </div>
                  <h3 className="text-2xl font-semibold text-[#113262] mb-4">{item.title}</h3>
                  <p className="text-[#436FB0] text-lg">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentStrategy;