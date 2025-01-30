import React from 'react';
import { Rocket, TrendingUp, Building } from 'lucide-react';

const InvestmentCategories = () => {
  const categories = [
    {
      icon: Rocket,
      title: "Early Stage Investing",
      description: "Investment in emerging technology and business models with high growth potential",
      examples: "Current focus: AI, India Semiconductors, Deep Tech",
      color: "bg-blue-50"
    },
    {
      icon: TrendingUp,
      title: "Mid Stage Investing",
      description: "Companies with proven business models ready for scaling operations",
      examples: "Revenue-generating businesses needing growth capital",
      color: "bg-orange-50"
    },
    {
      icon: Building,
      title: "Late Stage Pre-IPO",
      description: "Established businesses with positive EBITDA seeking expansion capital",
      examples: "Funding for acquisitions, market expansion, technology upgrades",
      color: "bg-green-50"
    }
  ];

  return (
    <div className="bg-white py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="w-12 h-0.5 bg-[#F49611] mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-[#113262] mb-4">
            Investment Categories
          </h2>
          <p className="text-gray-600">
            Strategic private equity investments across different growth stages
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-8">
                <div className={`w-16 h-16 rounded-xl ${category.color} flex items-center justify-center mb-6`}>
                  <category.icon className="w-8 h-8 text-[#1C52A0]" />
                </div>
                
                <h3 className="text-xl font-semibold text-[#113262] mb-4">
                  {category.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {category.description}
                </p>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500">
                    {category.examples}
                  </p>
                </div>

                <div className="mt-6">
                  <button className="text-[#1C52A0] hover:text-[#F49611] font-medium flex items-center gap-2 transition-colors">
                    Learn More
                    <TrendingUp className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InvestmentCategories;