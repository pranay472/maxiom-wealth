import React from 'react';
import { 
  Briefcase, 
  BarChart, 
  ClipboardList, 
  Shield,
  Laptop,
  Users,
  Database,
  LineChart,
  Building,
  Wallet,
  Receipt,
  Paintbrush,
  Brain,
  Target,
  Award,
  Search
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
      {/* Home Buying Financial Services Section */}
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle
          subtitle="Our Services"
          title="Our Expertise in Home Buying Financial Services"
        />
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              icon: Briefcase,
              title: "Investment Advisory",
              description: "Tailored advice to channelise your savings for property investment. Our team ensures your investments align with real estate goals."
            },
            {
              icon: BarChart,
              title: "Portfolio Management",
              description: "We manage, diversify, and align your investment portfolio towards accumulating funds for your dream home. Seamless growth is our promise."
            },
            {
              icon: ClipboardList,
              title: "Comprehensive Financial Planning",
              description: "Structured financial blueprints designed for achieving your home buying aspirations. From down payment to registry, we've got it mapped."
            },
            {
              icon: Shield,
              title: "Home Insurance Advisory",
              description: "Safeguard your home against unforeseen events. We guide you through the best insurance policies for ultimate property protection."
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

      {/* Investment Approach Section */}
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle
          subtitle="Our Approach"
          title="How Our Unique Investment Approach Helps"
        />
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Brain,
              title: "Deep Expertise",
              description: "Leverage our knowledge in financial planning tailored for dream home buyers."
            },
            {
              icon: Target,
              title: "Goal Mapping",
              description: "Our unique financial assurance aligns your investment with long-term goals."
            },
            {
              icon: Award,
              title: "Trustworthy Advice",
              description: "As a SEBI-registered investment advisor, our advice is always in your best interest."
            },
            {
              icon: Search,
              title: "Unbiased Selection",
              description: "We rely on our proprietary data platform for unbiased property and financing advice."
            },
            {
              icon: Laptop,
              title: "Tech Integration",
              description: "Our mobile and web apps streamline the buying process from planning to purchase."
            },
            {
              icon: Users,
              title: "Client-first Approach",
              description: "Our value system ensures wealth creation without pushing unnecessary products."
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
            title="Benefits of Buying A Home"
            align="center"
          />
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Building,
                title: "Asset Appreciation",
                description: "A home typically appreciates over time, enhancing your net worth. Real estate is a tangible asset that often withstands market fluctuations."
              },
              {
                icon: Shield,
                title: "Financial Security",
                description: "Owning a home acts as a financial anchor, eliminating unpredictable rent increases. Plus, you build equity with every mortgage payment."
              },
              {
                icon: Receipt,
                title: "Tax Advantages",
                description: "Homeowners enjoy various tax benefits, including deductions on mortgage interest. These fiscal incentives can significantly reduce annual tax bills."
              },
              {
                icon: Paintbrush,
                title: "Personal Freedom",
                description: "A home provides the liberty to customize and renovate as desired. It's a space to manifest personal tastes without any restrictions."
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