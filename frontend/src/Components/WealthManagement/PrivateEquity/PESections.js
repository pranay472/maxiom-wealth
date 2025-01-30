import React from 'react';
import { 
  Cpu, 
  Landmark, 
  Stethoscope, 
  Building2,
  Search,
  BarChart,
  LineChart,
  ArrowRight
} from 'lucide-react';

export const FocusSectors = () => {
  const sectors = [
    {
      icon: Cpu,
      title: "Technology and Startups",
      description: "Enterprise SaaS, DeepTech, AI/ML applications",
      trend: "High growth in enterprise tech adoption"
    },
    {
      icon: Landmark,
      title: "Financial Services",
      description: "Fintech innovation, digital banking solutions",
      trend: "Rapid digital transformation in banking"
    },
    {
      icon: Stethoscope,
      title: "Healthcare and Pharmaceuticals",
      description: "Healthtech, biotech, medical devices",
      trend: "Innovation in healthcare delivery"
    },
    {
      icon: Building2,
      title: "Infrastructure and Real Estate",
      description: "Digital infrastructure, sustainable development",
      trend: "Focus on sustainable infrastructure"
    }
  ];

  return (
    <div className="bg-[#E8EEF6] py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="w-12 h-0.5 bg-[#F49611] mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-[#113262] mb-4">
            Focus Sectors
          </h2>
          <p className="text-gray-600">
            Strategic investments in high-growth sectors with significant potential
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sectors.map((sector, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-[#E8EEF6] flex items-center justify-center mb-6">
                <sector.icon className="w-6 h-6 text-[#1C52A0]" />
              </div>
              <h3 className="text-xl font-semibold text-[#113262] mb-3">
                {sector.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {sector.description}
              </p>
              <div className="text-sm text-[#1C52A0] bg-[#E8EEF6] p-3 rounded">
                {sector.trend}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const Services = () => {
  const services = [
    {
      icon: Search,
      title: "Deal Access & Evaluation",
      features: [
        "Proprietary deal flow access",
        "Detailed investment analysis",
        "Due diligence support"
      ]
    },
    {
      icon: BarChart,
      title: "PE Portfolio Construction",
      features: [
        "Stage-wise allocation strategy",
        "Sector diversification planning",
        "Investment vintage planning"
      ]
    },
    {
      icon: LineChart,
      title: "Value Creation Monitoring",
      features: [
        "Performance tracking",
        "Growth milestone monitoring",
        "Exit opportunity assessment"
      ]
    }
  ];

  return (
    <div className="bg-white py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="w-12 h-0.5 bg-[#F49611] mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-[#113262] mb-4">
            PE-Specific Services
          </h2>
          <p className="text-gray-600">
            Comprehensive support throughout your private equity investment journey
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#113262] to-[#1C52A0] opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300" />
              
              <div className="relative bg-[#E8EEF6] p-8 rounded-lg group-hover:transform group-hover:translate-y-1 transition-transform duration-300">
                <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center mb-6">
                  <service.icon className="w-6 h-6 text-[#1C52A0]" />
                </div>
                
                <h3 className="text-xl font-semibold text-[#113262] mb-6">
                  {service.title}
                </h3>
                
                <ul className="space-y-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#F49611]" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="mt-8 text-[#1C52A0] group-hover:text-[#F49611] font-medium flex items-center gap-2 transition-colors">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const PESections = () => {
  return (
    <>
      <FocusSectors />
      <Services />
    </>
  );
};

export default PESections;