import React from 'react';
import { 
  Users, 
  ArrowUpRight, 
  Settings2, 
  Shield, 
  BarChart3, 
  Clock, 
  Network,
  BadgeCheck,
  ArrowDown
} from 'lucide-react';

const ComparisonTable = () => {
  const comparisons = [
    {
      aspect: "Nature of Investment",
      pms: {
        text: "Tailored to individual preferences and requirements",
        icon: <BadgeCheck className="w-6 h-6 text-[#113262]" />
      },
      mutualFunds: {
        text: "Pooled funds from multiple investors",
        icon: <Users className="w-6 h-6 text-[#113262]" />
      },
      icon: <Users className="w-6 h-6 text-[#113262]" />
    },
    {
      aspect: "Investment Size",
      pms: {
        text: "Typically, higher minimum investment requirement",
        icon: <ArrowUpRight className="w-6 h-6 text-[#113262]" />
      },
      mutualFunds: {
        text: "Lower minimum investment amounts",
        icon: <ArrowDown className="w-6 h-6 text-[#113262]" />
      },
      icon: <ArrowUpRight className="w-6 h-6 text-[#113262]" />
    },
    {
      aspect: "Customization",
      pms: {
        text: "Highly customizable portfolios",
        icon: <Settings2 className="w-6 h-6 text-[#113262]" />
      },
      mutualFunds: {
        text: "Limited customization based on fund objectives",
        icon: <Settings2 className="w-6 h-6 text-[#113262]" />
      },
      icon: <Settings2 className="w-6 h-6 text-[#113262]" />
    },
    {
      aspect: "Management Control",
      pms: {
        text: "Investor has direct control over investment decisions",
        icon: <Shield className="w-6 h-6 text-[#113262]" />
      },
      mutualFunds: {
        text: "Fund manager makes decisions for all investors",
        icon: <Shield className="w-6 h-6 text-[#113262]" />
      },
      icon: <Shield className="w-6 h-6 text-[#113262]" />
    },
    {
      aspect: "Transparency",
      pms: {
        text: "More transparency in holdings and transactions",
        icon: <BarChart3 className="w-6 h-6 text-[#113262]" />
      },
      mutualFunds: {
        text: "Holdings disclosed periodically",
        icon: <BarChart3 className="w-6 h-6 text-[#113262]" />
      },
      icon: <BarChart3 className="w-6 h-6 text-[#113262]" />
    },
    {
      aspect: "Risk & Returns",
      pms: {
        text: "Potential for higher risk and returns",
        icon: <Clock className="w-6 h-6 text-[#113262]" />
      },
      mutualFunds: {
        text: "Risk and returns depend on fund's investment style",
        icon: <Clock className="w-6 h-6 text-[#113262]" />
      },
      icon: <Clock className="w-6 h-6 text-[#113262]" />
    },
    {
      aspect: "Investor Base",
      pms: {
        text: "Individual investors with higher net worth",
        icon: <Network className="w-6 h-6 text-[#113262]" />
      },
      mutualFunds: {
        text: "Retail investors, institutions, and individuals",
        icon: <Network className="w-6 h-6 text-[#113262]" />
      },
      icon: <Network className="w-6 h-6 text-[#113262]" />
    }
  ];

  return (
    <div className="relative w-full py-16 overflow-hidden">
      {/* Premium Background with Gradient Overlay */}
      <div className="absolute inset-0 bg-[#113262] opacity-5 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-300/10 to-secondary-300/10" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4">
        {/* Header Section with enhanced visibility */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4 text-primary-500">
            PMS vs Mutual Funds
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-primary-300 to-secondary-300 mx-auto rounded-full mb-4" />
          <p className="text-neutral-600 text-lg font-medium">Understanding Key Investment Differences</p>
        </div>

        {/* Comparison Table */}
        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-primary-100">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-primary-100">
                  <th className="px-6 py-5 text-left text-base font-semibold text-primary-500 w-1/4">Aspect</th>
                  <th className="px-6 py-5 text-left text-base font-semibold text-primary-500 w-2/5 border-l border-r border-primary-100">
                    Portfolio Management Services (PMS)
                  </th>
                  <th className="px-6 py-5 text-left text-base font-semibold text-primary-500 w-2/5">
                    Mutual Funds
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((item, index) => (
                  <tr key={index} className="border-b border-primary-50 hover:bg-primary-50/30 transition-colors">
                    <td className="px-6 py-5 flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary-50 text-[#113262]">
                        {item.icon}
                      </div>
                      <span className="font-medium text-base text-primary-400">{item.aspect}</span>
                    </td>
                    <td className="px-6 py-5 text-base text-neutral-700 border-l border-r border-primary-100">
                      <div className="flex items-center gap-3">
                        {item.pms.icon}
                        <span>{item.pms.text}</span>
                      </div>
                    </td>
                    <td className="px-6 py-5 text-base text-neutral-700">
                      <div className="flex items-center gap-3">
                        {item.mutualFunds.icon}
                        <span>{item.mutualFunds.text}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonTable;