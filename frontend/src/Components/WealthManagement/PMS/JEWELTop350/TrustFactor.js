import React from 'react';
import { Shield, TrendingUp, PieChart, Scale, Award, Compass } from 'lucide-react';

const factors = [
  {
    icon: Shield,
    title: 'Low Debt',
    description: 'Focus on companies with low debt levels to ensure financial stability and wealth preservation.'
  },
  {
    icon: TrendingUp,
    title: 'Consistent Performance',
    description: 'Companies with consistent ROE/ROCE performance demonstrating strong financial health.'
  },
  {
    icon: PieChart,
    title: 'Strong Growth',
    description: 'Emphasis on growth in sales, profits, and cash flows with trajectory of 1.5-3x GDP.'
  },
  {
    icon: Scale,
    title: 'Market Leadership',
    description: 'Companies with strong pricing power, market sustainability, and leadership position.'
  },
  {
    icon: Award,
    title: 'Business Resilience',
    description: 'Focus on businesses with robust operating cash flows and proven resilience.'
  },
  {
    icon: Compass,
    title: 'Promoter Integrity',
    description: 'Strong emphasis on promoter integrity and focus on capital preservation.'
  }
];

const TrustFactors = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="relative z-10">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" className="rounded-2xl shadow-2xl w-full">
  {/* Background */}
  <rect width="600" height="600" fill="#F8FAFC" />
  
  {/* Background Patterns */}
  <path d="M0 300 Q 150 250, 300 300 T 600 300" fill="none" stroke="#E8EEF6" stroke-width="80" opacity="0.5" />
  <path d="M0 350 Q 150 300, 300 350 T 600 350" fill="none" stroke="#E8EEF6" stroke-width="60" opacity="0.3" />
  
  {/* Main Coins Stack Group */}
  <g transform="translate(300, 300)">
    {/* Largest Stack */}
    <g transform="translate(-180, 0)">
      {/* Base coins */}
      <circle cx="0" cy="0" r="70" fill="#113262" />
      <circle cx="0" cy="-20" r="70" fill="#1C52A0" />
      <circle cx="0" cy="-40" r="70" fill="#436FB0" />
      {/* Tree */}
      <path d="M0 -120 L30 -80 L15 -80 L35 -50 L20 -50 L40 -20 L-40 -20 L-20 -50 L-35 -50 L-15 -80 L-30 -80 Z" 
            fill="#4CAF50" />
      <rect x="-5" y="-20" width="10" height="30" fill="#795548" />
    </g>
    
    {/* Medium Stack */}
    <g transform="translate(0, 50)">
      <circle cx="0" cy="0" r="60" fill="#113262" />
      <circle cx="0" cy="-15" r="60" fill="#1C52A0" />
      <circle cx="0" cy="-30" r="60" fill="#436FB0" />
      {/* Tree */}
      <path d="M0 -100 L25 -65 L12 -65 L27 -40 L14 -40 L29 -15 L-29 -15 L-14 -40 L-27 -40 L-12 -65 L-25 -65 Z" 
            fill="#66BB6A" />
      <rect x="-4" y="-15" width="8" height="25" fill="#795548" />
    </g>
    
    {/* Smallest Stack */}
    <g transform="translate(160, 100)">
      <circle cx="0" cy="0" r="50" fill="#113262" />
      <circle cx="0" cy="-12" r="50" fill="#1C52A0" />
      <circle cx="0" cy="-24" r="50" fill="#436FB0" />
      {/* Tree */}
      <path d="M0 -80 L20 -50 L10 -50 L20 -30 L10 -30 L20 -10 L-20 -10 L-10 -30 L-20 -30 L-10 -50 L-20 -50 Z" 
            fill="#81C784" />
      <rect x="-3" y="-10" width="6" height="20" fill="#795548" />
    </g>
  </g>
  
  {/* Decorative Elements */}
  <circle cx="100" cy="100" r="20" fill="#E8A355" opacity="0.2" />
  <circle cx="500" cy="500" r="30" fill="#1C52A0" opacity="0.1" />
  <circle cx="450" cy="150" r="25" fill="#113262" opacity="0.15" />
  
  {/* Growth Line */}
  <path d="M50 550 Q 200 500, 300 450 T 550 300" 
        fill="none" 
        stroke="#E8A355" 
        stroke-width="3"
        stroke-dasharray="8,8" />
</svg>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-[#E8EEF6] rounded-2xl -z-0"></div>
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-[#1C52A0]/10 rounded-2xl -z-0"></div>
          </div>

          {/* Right Column - Content */}
          <div>
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-[#003399] mb-4 relative inline-block after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-[3px] after:bg-gradient-to-r after:from-transparent after:via-[#003399] after:to-transparent">
                Why use our portfolio management services?
              </h2>
              <p className="text-gray-600 text-lg">
                Our top-tier portfolio management services offer you above-average returns, while our
                superior customer service ensures a positive experience.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-8">
              {factors.map((factor, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-4 p-4 rounded-xl"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-[#E8EEF6] flex items-center justify-center">
                      <factor.icon className="w-6 h-6 text-[#1C52A0]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#113262] mb-2">
                      {factor.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {factor.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustFactors;