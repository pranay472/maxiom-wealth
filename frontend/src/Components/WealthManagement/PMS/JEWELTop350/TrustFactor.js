import React from 'react';
import { Shield, TrendingUp, PieChart, Balance, Award, Compass } from 'lucide-react';

const factors = [
  {
    icon: Shield,
    title: 'STABILITY',
    description: 'Large cap companies grow well with the economy and can anchor the portfolio in turbulent times.'
  },
  {
    icon: TrendingUp,
    title: 'GROWTH',
    description: 'Midcap stocks often present robust growth prospects, being at an inflection point in their evolution.'
  },
  {
    icon: PieChart,
    title: 'DIVERSIFICATION',
    description: 'A varied equity portfolio across various sectors can provide better risk distribution.'
  },
  {
    icon: Balance,
    title: 'BALANCED APPROACH',
    description: 'Strikes a balance between the stability of large-cap and the volatility of mid-cap companies.'
  },
  {
    icon: Award,
    title: 'INDUSTRY LEADERS',
    description: 'The best large cap companies are leaders in their respective industries which augurs well for a long term portfolio.'
  },
  {
    icon: Compass,
    title: 'EMERGING TRENDS',
    description: 'Midcap companies have potential to become tomorrow\'s market leaders. JEWEL taps into these trends.'
  }
];

const TrustFactors = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#113262] text-center mb-16">
          Why Trust Maxiom Wealth's JEWEL Large & Midcap PMS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {factors.map((factor, index) => (
            <div key={index} className="p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="bg-[#E8EEF6] w-16 h-16 rounded-2xl flex items-center justify-center mb-4">
                <factor.icon className="w-8 h-8 text-[#1C52A0]" />
              </div>
              <h3 className="text-xl font-semibold text-[#113262] mb-3">{factor.title}</h3>
              <p className="text-gray-600">{factor.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustFactors;