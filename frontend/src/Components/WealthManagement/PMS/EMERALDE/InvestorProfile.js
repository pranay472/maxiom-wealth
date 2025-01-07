import React, { useState } from 'react';
import { Shield, Target, Coins, Clock, Users, AlertCircle } from 'lucide-react';

const InvestorProfile = () => {
  const [activeTab, setActiveTab] = useState('requirements');

  const tabs = [
    {
      id: 'requirements',
      label: 'Investment Requirements',
      icon: Target,
      content: [
        { icon: Coins, title: 'Investment Size', value: '₹50 Lakhs', desc: 'Minimum initial investment' },
        { icon: Clock, title: 'Time Horizon', value: '3-5 Years', desc: 'Recommended holding period' },
        { icon: Users, title: 'Risk Profile', value: 'Growth-Focused', desc: 'Moderate to high risk tolerance' }
      ]
    },
    {
      id: 'suitable',
      label: 'Ideal Investor Profile',
      icon: Shield,
      content: [
        'Long-term wealth creation focus (3-5 years)',
        'Comfortable with market fluctuations',
        'Seeking professional portfolio management',
        'Values diversified investment approach'
      ]
    },
    {
      id: 'caution',
      label: 'Consider Alternatives If',
      icon: AlertCircle,
      content: [
        'Seeking short-term trading opportunities',
        'Requiring immediate liquidity access',
        'Expecting guaranteed returns'
      ]
    }
  ];

  return (
    <div className="bg-[#E8EEF6] relative overflow-hidden py-20">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMxLjY1NyAwIDMgMS4zNDMgMyAzdjE4YzAgMS42NTctMS4zNDMgMy0zIDNoLTEyYy0xLjY1NyAwLTMtMS4zNDMtMy0zdi0xOGMwLTEuNjU3IDEuMzQzLTMgMy0zaDF6IiBzdHJva2U9IiMxMTMyNjIwOCIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-10 pointer-events-none" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center justify-center">
            <Shield className="mr-2 text-blue-600" />
            Investor Fit Assessment
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Understanding if our investment approach aligns with your goals
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center px-6 py-3 rounded-full transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-blue-50 text-blue-600 shadow-sm'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              <tab.icon className={`w-4 h-4 mr-2 ${
                activeTab === tab.id ? 'text-blue-600' : 'text-gray-400'
              }`} />
              <span className="text-sm font-medium">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          {activeTab === 'requirements' && (
            <div className="grid md:grid-cols-3 gap-8">
              {tabs[0].content.map((item, index) => (
                <div key={index} className="flex flex-col items-center text-center p-6 rounded-xl bg-gray-50 transition-all duration-300 hover:bg-blue-50">
                  <div className="p-3 rounded-full bg-blue-100 mb-4">
                    <item.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-1">{item.value}</h3>
                  <p className="text-sm text-gray-600 mb-2">{item.title}</p>
                  <p className="text-xs text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'suitable' && (
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                {tabs[1].content.slice(0, 2).map((item, index) => (
                  <div key={index} className="flex items-center p-4 rounded-lg bg-gray-50 transition-all duration-300 hover:bg-blue-50">
                    <div className="h-2 w-2 rounded-full bg-blue-600 mr-4"></div>
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                {tabs[1].content.slice(2).map((item, index) => (
                  <div key={index} className="flex items-center p-4 rounded-lg bg-gray-50 transition-all duration-300 hover:bg-blue-50">
                    <div className="h-2 w-2 rounded-full bg-blue-600 mr-4"></div>
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'caution' && (
            <div className="grid md:grid-cols-3 gap-6">
              {tabs[2].content.map((item, index) => (
                <div key={index} className="p-4 rounded-lg bg-gray-50 border-l-4 border-amber-400 transition-all duration-300 hover:bg-amber-50">
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            This assessment serves as a general guide. We recommend consulting with our advisors for a personalized evaluation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InvestorProfile;