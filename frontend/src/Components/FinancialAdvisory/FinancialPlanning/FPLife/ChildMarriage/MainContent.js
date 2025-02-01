import React from 'react';
import { 
  TrendingUp, 
  Smartphone, 
  Award, 
  ShieldCheck, 
  Target, 
  BarChart3,
  LineChart,
  DollarSign
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
      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle
          subtitle="Our Approach"
          title="How our unique approach benefits your wedding"
        />
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              icon: TrendingUp,
              title: "Stellar Market Insights",
              description: "Leverage our expertise in stocks and mutual funds tailored for wedding objectives."
            },
            {
              icon: Smartphone,
              title: "Integrated Digital Suite",
              description: "Manage, track, and adjust your wedding finances through our cohesive app."
            },
            {
              icon: Award,
              title: "Certified Excellence",
              description: "Rely on our ISO 9001 certified processes for transparent, effective planning."
            },
            {
              icon: ShieldCheck,
              title: "Unwavering Commitment",
              description: "As a SEBI registered entity, your financial well-being remains our top priority."
            },
            {
              icon: Target,
              title: "End-to-End Assurance",
              description: "Align every financial element with your wedding vision and aspirations."
            },
            {
              icon: LineChart,
              title: "Objective Recommendations",
              description: "With data-driven insights, our suggestions are unbiased and purely in your interest."
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
            title="Wedding Financial Planning Benefits"
            align="center"
          />
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: BarChart3,
                title: "Holistic Financial Blueprint",
                description: "A well-rounded financial strategy ensures every aspect of the wedding is accounted for."
              },
              {
                icon: ShieldCheck,
                title: "Tax-Savvy Approach",
                description: "Optimized methods to handle wedding expenses in a tax-efficient manner."
              },
              {
                icon: Target,
                title: "Personalised Strategy",
                description: "Tailored plans that resonate with your family's aspirations and the wedding's scale."
              },
              {
                icon: DollarSign,
                title: "Dedicated Financial Expertise",
                description: "Our team provides unwavering support, ensuring the best financial decisions for the occasion."
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