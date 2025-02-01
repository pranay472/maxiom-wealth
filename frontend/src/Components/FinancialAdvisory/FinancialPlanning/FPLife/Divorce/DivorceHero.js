import React from 'react';
import { 
  Briefcase, 
  LineChart, 
  Calculator, 
  ShieldCheck
} from 'lucide-react';

const FeatureCard = ({ Icon, title, description }) => (
  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
    <Icon className="w-6 h-6 text-[#F49611] mb-4" />
    <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
    <p className="text-white/80 text-sm">{description}</p>
  </div>
);

const DivorceHero = () => {
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
                  Securing Finances, Post-Divorce.
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Financial Planning For Divorce
              </h1>
              <p className="text-xl text-white/80">
                Navigating through divorce requires robust financial strategies. Tailored financial planning for divorcees ensures maximised financial security, optimised tax benefits, and expert advisory support, aiding a smoother transition.
              </p>
            </div>
            <div className="flex gap-4">
              <button className="bg-[#F49611] hover:bg-[#F6A839] text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Start Planning
              </button>
              <button className="border border-white/30 hover:bg-white/10 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Learn More
              </button>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FeatureCard 
              Icon={Briefcase}
              title="Portfolio Management"
              description="Restructure and realign your investment portfolio post-divorce. Let's adapt to your evolving financial goals and needs."
            />
            <FeatureCard 
              Icon={LineChart}
              title="Investment Advisory"
              description="Navigate the post-divorce investment landscape with our seasoned expertise. We provide insights tailored to your new financial horizon."
            />
            <FeatureCard 
              Icon={Calculator}
              title="Comprehensive Financial Planning"
              description="Chart a post-divorce financial pathway tailored for your independence. Get a holistic plan that mirrors your aspirations."
            />
            <FeatureCard 
              Icon={ShieldCheck}
              title="Insurance Reassessment"
              description="Re-evaluate your insurance needs post-divorce to secure your future."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DivorceHero;