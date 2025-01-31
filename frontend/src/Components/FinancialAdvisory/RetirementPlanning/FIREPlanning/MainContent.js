import React from 'react';
import { 
  LineChart, 
  Laptop, 
  Award, 
  Shield, 
  Target, 
  HeartHandshake,
  Heart,
  Smile,
  Users,
  Palette
} from 'lucide-react';

const SectionTitle = ({ subtitle, title, align = 'left' }) => (
  <div className={`mb-12 ${align === 'center' ? 'text-center' : ''}`}>
    <div className={`flex items-center gap-2 mb-3 ${align === 'center' ? 'justify-center' : ''}`}>
      <div className="w-12 h-0.5 bg-[#F49611]"></div>
      <span className="text-[#F49611] font-medium uppercase tracking-wider text-sm">{subtitle}</span>
    </div>
    <h2 className="text-4xl font-bold text-[#113262]">{title}</h2>
  </div>
);

const ApproachCard = ({ Icon, title, description, index }) => (
  <div className="group">
    <div className="relative p-8 rounded-xl bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="absolute top-0 right-0 w-24 h-24 bg-[#E8EEF6] rounded-bl-full -z-10 group-hover:bg-[#F49611] transition-colors duration-300"></div>
      <div className="flex items-start gap-6">
        <div className="relative">
          <div className="w-12 h-12 rounded-xl bg-[#E8EEF6] group-hover:bg-[#F49611] transition-colors duration-300 flex items-center justify-center">
            <Icon className="w-6 h-6 text-[#113262] group-hover:text-white transition-colors duration-300" />
          </div>
          <span className="absolute -bottom-4 -right-4 text-4xl font-bold text-[#E8EEF6] group-hover:text-[#F49611]/10 transition-colors duration-300">
            {String(index).padStart(2, '0')}
          </span>
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-[#113262] mb-3">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  </div>
);

const BenefitCard = ({ Icon, title, description }) => (
  <div className="relative p-8 rounded-xl bg-gradient-to-br from-white to-[#E8EEF6] hover:to-[#F49611]/10 transition-colors duration-300">
    <div className="flex gap-6">
      <div className="w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center flex-shrink-0">
        <Icon className="w-6 h-6 text-[#F49611]" />
      </div>
      <div>
        <h3 className="text-xl font-bold text-[#113262] mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  </div>
);

const MainContent = () => {
  return (
    <div className="py-24 space-y-32">
      {/* Unique Approach Section */}
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle
          subtitle="Expert Analysis"
          title="Our Expertise in FIRE Planning"
        />
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              icon: LineChart,
              title: "Expert Analysis",
              description: "Our deep expertise in stocks and mutual funds ensures your investments are in good hands."
            },
            {
              icon: Laptop,
              title: "Integrated Solutions",
              description: "Benefit from our mobile and web applications for a seamless financial planning experience."
            },
            {
              icon: Award,
              title: "Certified Excellence",
              description: "Trust in our ISO 9001 certified processes for financial and investment planning."
            },
            {
              icon: Shield,
              title: "SEBI Registered",
              description: "We act in your best interest, being registered with SEBI as an investment advisor and portfolio manager."
            },
            {
              icon: Target,
              title: "Goal Mapping",
              description: "Our unique financial plan assurance approach maps all your assets and plans to your goals."
            },
            {
              icon: HeartHandshake,
              title: "Comprehensive Service",
              description: "From advisory to execution, experience responsive and friendly customer service at every step."
            }
          ].map((approach, index) => (
            <ApproachCard
              key={index}
              Icon={approach.icon}
              title={approach.title}
              description={approach.description}
              index={index + 1}
            />
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-[#113262]/5 skew-y-3"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-24">
          <SectionTitle
            subtitle="Key Benefits"
            title="Benefits of Early Retirement Planning"
            align="center"
          />
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Shield,
                title: "Financial Freedom",
                description: "Secure your future with financial stability and the freedom to make choices."
              },
              {
                icon: Smile,
                title: "Stress-Free Living",
                description: "Enjoy a relaxed lifestyle without the pressures of work-related stress."
              },
              {
                icon: Users,
                title: "More Family Time",
                description: "Cherish precious moments with your loved ones, with ample time at hand."
              },
              {
                icon: Palette,
                title: "Pursue Interests",
                description: "Unleash your potential by exploring new hobbies and interests in your free time."
              }
            ].map((benefit, index) => (
              <BenefitCard
                key={index}
                Icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;