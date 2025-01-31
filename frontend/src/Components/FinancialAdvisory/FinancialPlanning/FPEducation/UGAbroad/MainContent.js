import React from 'react';
import { 
  Globe, 
  Smartphone, 
  Award, 
  ShieldCheck, 
  Target, 
  LineChart,
  BarChart3,
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
          subtitle="Our Features"
          title="How our exclusive features support aspiring International Students"
        />
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              icon: Globe,
              title: "Expertise in Global Markets",
              description: "Benefit from our deep knowledge in stocks and mutual funds for efficient savings."
            },
            {
              icon: Smartphone,
              title: "Seamless Digital Integration",
              description: "Use our app for comprehensive financial planning, from saving to spending on education."
            },
            {
              icon: Award,
              title: "Assured Processes",
              description: "ISO 9001 certified processes ensure a smooth financial planning journey."
            },
            {
              icon: ShieldCheck,
              title: "Unwavering Fiduciary Commitment",
              description: "Our SEBI registration underscores our dedication to your best interests."
            },
            {
              icon: Target,
              title: "Holistic Educational Financial Mapping",
              description: "Our unique assurance approach maps every financial plan to your education goals."
            },
            {
              icon: LineChart,
              title: "Transparent and Neutral Advisory",
              description: "We rely on proprietary analytics, free from third-party biases, ensuring authentic advice."
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
            title="Undergraduate Abroad Financial Planning Benefits"
            align="center"
          />
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: BarChart3,
                title: "Comprehensive Cost Insight",
                description: "Grasp the full spectrum of potential costs, ensuring smart financial decisions."
              },
              {
                icon: Award,
                title: "Maximized Scholarship Utilization",
                description: "Navigate the maze of scholarship opportunities, ensuring optimal benefit."
              },
              {
                icon: DollarSign,
                title: "Smooth Currency Transactions",
                description: "Simplify and safeguard your overseas transactions, shielding against currency risks."
              },
              {
                icon: Target,
                title: "Personalized Budgeting Assistance",
                description: "Tailor-make budgets suiting your unique educational journey, with no undue stresses."
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