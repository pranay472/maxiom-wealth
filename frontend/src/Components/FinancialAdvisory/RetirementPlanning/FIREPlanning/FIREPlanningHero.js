import React from 'react';
import { 
  Target, 
  Shield, 
  Clock, 
  Heart,
  Gift,
  Compass
} from 'lucide-react';

const FeatureCard = ({ Icon, title, description }) => (
  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
    <Icon className="w-6 h-6 text-[#F49611] mb-4" />
    <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
    <p className="text-white/80 text-sm">{description}</p>
  </div>
);

const FIREPlanningHero = () => {
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
                  Early Retirement Planning Essentials
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Achieve Freedom with Smart Planning
              </h1>
              <p className="text-xl text-white/80">
                Explore the best ways to retire early, understand the fundamental rules, 
                and embrace practical tips for early retirement planning. Learn how to 
                navigate the journey towards financial independence, ensuring a secure 
                and comfortable future.
              </p>
            </div>
            <div className="flex gap-4">
              <button className="bg-[#F49611] hover:bg-[#F6A839] text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Get Started
              </button>
              <button className="border border-white/30 hover:bg-white/10 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Learn More
              </button>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FeatureCard 
              Icon={Shield}
              title="Financial Security"
              description="Ensure a stable income stream even after you stop working"
            />
            <FeatureCard 
              Icon={Clock}
              title="Time Maximisation"
              description="Gain more years to enjoy life's pleasures without work constraints"
            />
            <FeatureCard 
              Icon={Heart}
              title="Health Benefits"
              description="Reduce stress and potentially increase your lifespan with an early retirement"
            />
            <FeatureCard 
              Icon={Gift}
              title="Legacy Planning"
              description="Secure your children's future and plan your estate effectively"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FIREPlanningHero;