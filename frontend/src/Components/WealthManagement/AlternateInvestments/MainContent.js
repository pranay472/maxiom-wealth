import React, { useState } from 'react';
import { ChevronDown, ChevronUp, TrendingUp, Coins, BarChart2, Clock, Target, Shield } from 'lucide-react';

const InvestmentCard = ({ title, description, features, isExpanded, onToggle, icon: Icon }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300">
      <div 
        className="p-6 cursor-pointer hover:bg-gray-50"
        onClick={onToggle}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-[#E8EEF6] rounded-lg">
              <Icon className="h-6 w-6 text-[#1C52A0]" />
            </div>
            <h3 className="text-xl font-semibold text-[#113262]">{title}</h3>
          </div>
          {isExpanded ? (
            <ChevronUp className="h-5 w-5 text-[#1C52A0]" />
          ) : (
            <ChevronDown className="h-5 w-5 text-[#1C52A0]" />
          )}
        </div>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
      
      {isExpanded && (
        <div className="px-6 pb-6 bg-[#F8FAFC]">
          <div className="pt-4 border-t border-gray-200">
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-[#F49611]">•</div>
                  <p className="ml-2 text-gray-600">{feature}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

const MainContent = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const investmentOptions = [
    {
      id: 'equity-aif',
      title: 'Equity AIF',
      icon: TrendingUp,
      description: 'Tax-efficient equity investments through Alternative Investment Funds with professional management.',
      features: [
        'Fund handles tax surcharge, making returns tax-free for individuals',
        'Professional portfolio management by experienced fund managers',
        'Access to sophisticated investment strategies',
        'Regular performance monitoring and reporting'
      ]
    },
    {
      id: 'debt-aif',
      title: 'Debt AIFs',
      icon: Coins,
      description: 'Fixed-income alternative investments designed to deliver superior returns with capital preservation.',
      features: [
        'Treasury Plus Funds for inflation-beating returns',
        'Long-term debt funds with 3-5 year fixed maturity',
        'Investment in high-quality debentures',
        'Focus on regular income generation'
      ]
    },
    {
      id: 'long-short-aif',
      title: 'Long Short AIFs / Hedge AIFs',
      icon: BarChart2,
      description: 'Sophisticated investment strategies aimed at optimizing risk-adjusted returns.',
      features: [
        'Equity Minus: Lower volatility with better risk-adjusted returns',
        'Debt Plus: Enhanced fixed income returns with limited equity exposure',
        'Professional risk management',
        'Diversification benefits through multiple strategies'
      ]
    }
  ];

  return (
    <div className="bg-gradient-to-b from-white to-[#E8EEF6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Section Introduction */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-[#113262] mb-4">
            Our Alternative Investment Solutions
          </h2>
          <p className="text-lg text-gray-600">
            Discover sophisticated investment opportunities designed to enhance your portfolio's performance through diversification and professional management.
          </p>
        </div>

        {/* Investment Options */}
        <div className="space-y-6">
          {investmentOptions.map((option) => (
            <InvestmentCard
              key={option.id}
              {...option}
              isExpanded={expandedCard === option.id}
              onToggle={() => setExpandedCard(expandedCard === option.id ? null : option.id)}
            />
          ))}
        </div>

        {/* Key Benefits Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-[#113262] text-center mb-12">
            Why Choose Alternative Investments?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="p-3 bg-[#E8EEF6] rounded-lg inline-block">
                <Target className="h-6 w-6 text-[#1C52A0]" />
              </div>
              <h4 className="text-lg font-semibold text-[#113262] mt-4">
                Portfolio Diversification
              </h4>
              <p className="mt-2 text-gray-600">
                Reduce portfolio correlation with traditional markets and enhance risk-adjusted returns.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="p-3 bg-[#E8EEF6] rounded-lg inline-block">
                <Clock className="h-6 w-6 text-[#1C52A0]" />
              </div>
              <h4 className="text-lg font-semibold text-[#113262] mt-4">
                Long-term Growth
              </h4>
              <p className="mt-2 text-gray-600">
                Access unique opportunities for capital appreciation through professional management.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="p-3 bg-[#E8EEF6] rounded-lg inline-block">
                <Shield className="h-6 w-6 text-[#1C52A0]" />
              </div>
              <h4 className="text-lg font-semibold text-[#113262] mt-4">
                Risk Management
              </h4>
              <p className="mt-2 text-gray-600">
                Sophisticated strategies to protect capital while pursuing enhanced returns.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="bg-[#113262] rounded-lg p-8 md:p-12">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Explore Alternative Investments?
            </h3>
            <p className="text-lg text-gray-300 mb-8">
              Speak with our investment experts to learn how alternative investments can enhance your portfolio.
            </p>
            <button className="bg-[#F49611] text-white px-8 py-3 rounded-lg hover:bg-[#AB690C] transition-colors">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;