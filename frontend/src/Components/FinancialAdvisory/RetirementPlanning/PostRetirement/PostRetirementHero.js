import React from 'react';
import { 
  ShieldCheck, 
  Wallet, 
  Scroll, 
  TrendingUp,
  HeartHandshake,
  UserCog
} from 'lucide-react';

const FeatureCard = ({ Icon, title, description }) => (
  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
    <Icon className="w-6 h-6 text-[#F49611] mb-4" />
    <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
    <p className="text-white/80 text-sm">{description}</p>
  </div>
);

const PostRetirementHero = () => {
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
                  Financial Planning For Post Retirement
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Secure Tomorrow, Today
              </h1>
              <p className="text-xl text-white/80">
                Delve into tailored post-retirement income strategies designed to assure comfort and peace of mind. 
                With a focus on wealth preservation, estate planning, and the wisdom of expert post-retirement advisors, 
                we promise a relaxed and secure golden era.
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
              Icon={ShieldCheck}
              title="Future Assurance"
              description="Retirement planning ensures your post-retirement phase is devoid of financial worries"
            />
            <FeatureCard 
              Icon={Wallet}
              title="Wealth Protection"
              description="By focusing on wealth preservation, we make sure your hard-earned money stays protected"
            />
            <FeatureCard 
              Icon={TrendingUp}
              title="Strategic Income"
              description="Tailored post-retirement strategies ascertain a steady income flow"
            />
            <FeatureCard 
              Icon={UserCog}
              title="Expert Guidance"
              description="Our post-retirement advisors carve out the path to your serene future"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostRetirementHero;