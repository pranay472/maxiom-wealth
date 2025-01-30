import React from 'react';
import { TrendingUp, Globe, Wallet, Building, LineChart, Shield, ArrowRight, CheckCircle2 } from 'lucide-react';

const SectionTitle = ({ subtitle, title, align = 'left' }) => (
  <div className={`mb-12 ${align === 'center' ? 'text-center' : ''}`}>
    <div className={`flex items-center gap-2 mb-3 ${align === 'center' ? 'justify-center' : ''}`}>
      <div className="w-12 h-0.5 bg-[#F49611]"></div>
      <span className="text-[#F49611] font-medium uppercase tracking-wider text-sm">{subtitle}</span>
      <div className="w-12 h-0.5 bg-[#F49611]"></div>
    </div>
    <h2 className="text-3xl font-bold text-[#113262]">{title}</h2>
  </div>
);

const InvestmentOptionCard = ({ Icon, title, description, features }) => (
  <div className="bg-white rounded-xl p-8 border border-gray-100 hover:border-[#1C52A0] transition-colors group">
    <div className="w-14 h-14 rounded-lg bg-[#E8EEF6] flex items-center justify-center mb-6 group-hover:bg-[#1C52A0] transition-colors">
      <Icon className="w-7 h-7 text-[#1C52A0] group-hover:text-white transition-colors" />
    </div>
    <h3 className="text-xl font-bold text-[#113262] mb-4">{title}</h3>
    <p className="text-gray-600 mb-6">{description}</p>
    <ul className="space-y-3">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-[#F49611] mt-0.5" />
          <span className="text-gray-700">{feature}</span>
        </li>
      ))}
    </ul>
  </div>
);

const VehicleCard = ({ Icon, title, description, points }) => (
  <div className="bg-gradient-to-br from-white to-[#E8EEF6] rounded-xl p-8 hover:to-[#F49611]/10 transition-colors">
    <div className="w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center mb-6">
      <Icon className="w-7 h-7 text-[#F49611]" />
    </div>
    <h3 className="text-xl font-bold text-[#113262] mb-4">{title}</h3>
    <p className="text-gray-600 mb-6">{description}</p>
    <ul className="space-y-3">
      {points.map((point, index) => (
        <li key={index} className="flex items-start gap-3">
          <div className="w-2 h-2 rounded-full bg-[#F49611] mt-2" />
          <span className="text-gray-700">{point}</span>
        </li>
      ))}
    </ul>
  </div>
);

const ProcessStep = ({ number, title, description, Icon }) => (
  <div className="relative flex flex-col items-center">
    <div className="flex items-start gap-6">
      <div className="relative">
        <div className="w-16 h-16 rounded-xl bg-[#113262] text-white flex items-center justify-center">
          <Icon className="w-8 h-8" />
        </div>
        {number !== '4' && (
          <div className="absolute top-16 left-1/2 w-0.5 h-24 bg-gradient-to-b from-[#113262] to-transparent"></div>
        )}
      </div>
      <div className="flex-1 pt-3">
        <div className="text-sm font-medium text-[#F49611] mb-2">Step {number}</div>
        <h3 className="text-xl font-bold text-[#113262] mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  </div>
);

const MainSections = () => {
  return (
    <div className="space-y-24 py-24">
      {/* Investment Options Section */}
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle 
          subtitle="Investment Markets"
          title="Global Market Opportunities"
        />
        <div className="grid md:grid-cols-3 gap-8">
          <InvestmentOptionCard 
            Icon={TrendingUp}
            title="US Equities"
            description="Access the world's largest equity market through regulated investment vehicles"
            features={[
              "Large-cap US stocks exposure",
              "ETF-based investments",
              "Technology sector focus",
              "Dollar-denominated returns"
            ]}
          />
          <InvestmentOptionCard 
            Icon={Globe}
            title="Emerging Markets"
            description="Diversified exposure to high-growth emerging market opportunities"
            features={[
              "Multi-country exposure",
              "Growth market access",
              "Sector diversification",
              "Professional management"
            ]}
          />
          <InvestmentOptionCard 
            Icon={Wallet}
            title="Global Bonds"
            description="Access international fixed-income opportunities for stable returns"
            features={[
              "Government securities",
              "Corporate bonds",
              "Yield optimization",
              "Risk management"
            ]}
          />
        </div>
      </div>

      {/* Investment Vehicles Section */}
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle 
          subtitle="Investment Structures"
          title="Regulated Investment Vehicles"
        />
        <div className="grid md:grid-cols-2 gap-8">
          <VehicleCard 
            Icon={Building}
            title="GIFT City AIFs"
            description="Alternative Investment Funds operating in Gujarat International Finance Tec-City"
            points={[
              "IFSCA regulated framework",
              "Tax-efficient structure",
              "Dollar-denominated investments",
              "Professional fund management"
            ]}
          />
          <VehicleCard 
            Icon={LineChart}
            title="Singapore Jurisdiction Funds"
            description="Access global markets through Singapore-based investment vehicles"
            points={[
              "MAS regulated framework",
              "Established financial ecosystem",
              "Strong investor protection",
              "International market access"
            ]}
          />
        </div>
      </div>

      {/* Process Section */}
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle 
          subtitle="Investment Process"
          title="Getting Started with Offshore Investments"
          align="center"
        />
        <div className="space-y-16 flex flex-col items-center">
          <ProcessStep 
            number="1"
            Icon={Shield}
            title="Initial Documentation"
            description="Complete the required KYC and regulatory documentation for international investments through our guided process"
          />
          <ProcessStep 
            number="2"
            Icon={Globe}
            title="Vehicle Selection"
            description="Choose the appropriate investment vehicle (GIFT City AIF or Singapore Fund) based on your objectives"
          />
          <ProcessStep 
            number="3"
            Icon={Wallet}
            title="Investment Execution"
            description="Systematic deployment of funds through the selected vehicle into chosen international markets"
          />
          <ProcessStep 
            number="4"
            Icon={LineChart}
            title="Portfolio Monitoring"
            description="Regular portfolio tracking, performance reporting, and rebalancing as needed"
          />
        </div>
      </div>
    </div>
  );
};

export default MainSections;