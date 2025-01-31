import React from 'react';
import { 
  Home,
  Building,
  Wallet,
  HandshakeIcon
} from 'lucide-react';

const FeatureCard = ({ Icon, title, description }) => (
  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
    <Icon className="w-6 h-6 text-[#F49611] mb-4" />
    <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
    <p className="text-white/80 text-sm">{description}</p>
  </div>
);

const DreamHomeHero = () => {
  return (
    <div className="relative bg-[#113262] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#1C52A0] opacity-50 transform -skew-y-12"></div>
      </div>
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center pt-12">
          {/* Left Column */}
          <div>
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-12 h-0.5 bg-[#F49611]"></div>
                <span className="text-[#F49611] font-medium uppercase tracking-wider text-sm">
                  Dream Home Purchase
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Expertise Meets Your Dream Home
              </h1>
              <p className="text-xl text-white/80">
                With expert guidance tailored to buying your dream home, our financial 
                planning strategies help in finding, financing, and negotiating the best 
                deal for your dream house, supported by real estate advisors dedicated 
                to dream home buyers.
              </p>
            </div>
            <div className="flex gap-4">
              <button className="bg-[#F49611] hover:bg-[#F6A839] text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Start Planning
              </button>
              <button className="border border-white/30 hover:bg-white/10 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Explore Services
              </button>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FeatureCard 
              Icon={Home}
              title="Property Selection"
              description="Expert guidance on choosing the right property based on your needs and budget"
            />
            <FeatureCard 
              Icon={Wallet}
              title="Financial Planning"
              description="Comprehensive strategies for down payment, EMI planning, and tax benefits"
            />
            <FeatureCard 
              Icon={HandshakeIcon}
              title="Deal Negotiation"
              description="Professional support in negotiating the best price and terms for your dream home"
            />
            <FeatureCard 
              Icon={Building}
              title="Market Insights"
              description="Access to detailed market analysis and property valuations for informed decisions"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DreamHomeHero;