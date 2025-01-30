import React from 'react';
import { 
  Rocket, 
  Building2, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck,
  BarChart2,
  PieChart,
  LineChart
} from 'lucide-react';

export const InvestmentOpportunities = () => {
  const opportunities = [
    {
      icon: Rocket,
      title: "Venture Debt",
      description: "Early stage companies seeking growth capital",
      features: [
        "Complementary to equity funding",
        "Lower dilution for founders",
        "Structured returns with equity kicker"
      ],
      bgColor: "from-[#113262] to-[#1C52A0]"
    },
    {
      icon: Building2,
      title: "Private Credit Placement",
      description: "Mid-size companies seeking strategic financing",
      features: [
        "Private equity exits",
        "Acquisitions financing",
        "Business expansion",
        "Debt consolidation"
      ],
      bgColor: "from-[#955C0A] to-[#F49611]"
    }
  ];

  return (
    <div className="bg-white py-24 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[#E8EEF6]/30">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(#113262 1px, transparent 1px)',
          backgroundSize: '20px 20px',
          opacity: 0.1
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="w-12 h-0.5 bg-[#F49611] mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-[#113262] mb-4">
            Investment Opportunities
          </h2>
          <p className="text-gray-600">
            Strategic private credit investments across different stages and needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {opportunities.map((opp, index) => (
            <div key={index} className="relative group">
              {/* Card */}
              <div className={`bg-gradient-to-br ${opp.bgColor} rounded-lg p-8 text-white h-full`}>
                <div className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center mb-6">
                  <opp.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold mb-4">{opp.title}</h3>
                <p className="text-white/80 mb-6">{opp.description}</p>

                <div className="space-y-3">
                  {opp.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#F49611]" />
                      <span className="text-white/90">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="mt-8 flex items-center gap-2 text-white/90 hover:text-white group-hover:gap-3 transition-all">
                  Learn More <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const InvestmentVehicle = () => {
    const features = [
      {
        icon: ShieldCheck,
        title: "Professional Fund Management",
        description: "Expert team managing investments with institutional-grade processes",
        color: "bg-blue-50"
      },
      {
        icon: PieChart,
        title: "Portfolio Diversification",
        description: "Risk-optimized exposure across sectors and credit types",
        color: "bg-orange-50"
      },
      {
        icon: BarChart2,
        title: "Regular Income Distribution",
        description: "Periodic interest payments providing steady cash flow",
        color: "bg-green-50"
      },
      {
        icon: LineChart,
        title: "Risk Management Framework",
        description: "Comprehensive monitoring and risk mitigation strategies",
        color: "bg-purple-50"
      }
    ];
  
    return (
      <div className="bg-[#E8EEF6] py-24">
        <div className="container mx-auto px-4">
          {/* Main Content Card */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Top Banner */}
            <div className="bg-gradient-to-r from-[#113262] to-[#1C52A0] px-8 py-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Investment Vehicle</h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Access private credit opportunities through Category II Alternative Investment Funds (AIF)
              </p>
            </div>
  
            {/* Content Area */}
            <div className="px-8 py-16">
              {/* Introduction */}
              <div className="max-w-3xl mx-auto text-center mb-16">
                <p className="text-gray-600">
                  Our structured investment approach provides institutional-quality access to private credit 
                  opportunities while maintaining strong risk management practices.
                </p>
              </div>
  
              {/* Features Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className="group hover:scale-105 transition-transform duration-300"
                  >
                    <div className={`${feature.color} rounded-xl p-6 h-full group-hover:shadow-md transition-shadow`}>
                      <feature.icon className="w-8 h-8 text-[#1C52A0] mb-4" />
                      <h3 className="text-[#113262] font-semibold mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
  
              {/* Bottom CTA */}
              <div className="mt-16 text-center">
                <button className="inline-flex items-center gap-2 py-4 px-6 bg-gradient-to-r from-[#1C52A0] to-[#0A1E3A] text-white text-lg font-medium rounded-lg hover:bg-gradient-to-r hover:from-[#0A1E3A] hover:to-[#1C52A0] transition-all duration-300">
                  Download Fund Presentation
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

const InvestmentSections = () => {
  return (
    <>
      <InvestmentOpportunities />
      <InvestmentVehicle />
    </>
  );
};

export default InvestmentSections;