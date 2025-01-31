import React from 'react';
import { 
  BarChart, 
  Briefcase, 
  ClipboardList, 
  Shield, 
  Target, 
  Wallet,
  TrendingUp,
  Clock
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
      {/* Car Purchase Planning Services Section */}
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle
          subtitle="Our Services"
          title="Car Purchase Planning Services"
        />
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              icon: BarChart,
              title: "Portfolio Management",
              description: "Diversify and manage your investments efficiently to accommodate your car purchase without disrupting your wealth growth trajectory. Our experts ensure a balanced portfolio that considers all major expenditures."
            },
            {
              icon: Briefcase,
              title: "Investment Advisory",
              description: "Navigate your car purchase with sound investment strategies, ensuring your other financial goals remain intact. We provide tailored advice that prioritizes your overall financial health."
            },
            {
              icon: ClipboardList,
              title: "Personalised Financial Planning",
              description: "Delve deep into a comprehensive financial plan that integrates your dream car purchase while ensuring other aspirations aren't sidelined. Our holistic approach provides clarity and confidence."
            },
            {
              icon: Shield,
              title: "Insurance Advisory",
              description: "While diving into car ownership, it's essential to ensure it's protected. Navigate the complex world of car insurance with our expert guidance, ensuring optimum coverage."
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
            title="Benefits of Car Purchase Planning"
            align="center"
          />
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Target,
                title: "Strategic Financial Path",
                description: "Seamlessly integrate your car buying dream into your larger financial journey. Expert strategies ensure no financial goal is overlooked."
              },
              {
                icon: Wallet,
                title: "Wealth Preservation",
                description: "Even as you spend on your car, your wealth continues to grow without hiccups. Efficient portfolio management ensures this balance."
              },
              {
                icon: TrendingUp,
                title: "Clear Financial Forecast",
                description: "With personalized financial planning, foresee potential challenges and be prepared. Experience a hassle-free car buying process."
              },
              {
                icon: Shield,
                title: "Protection Assurance",
                description: "As you drive home your dream car, drive stress-free knowing it's protected with the best insurance advice."
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