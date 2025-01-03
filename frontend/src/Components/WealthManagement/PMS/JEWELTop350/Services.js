import React from 'react';
import { Target, Settings, RefreshCw, Shield } from 'lucide-react';

const services = [
  {
    icon: Target,
    title: 'Strategic Allocation',
    description: 'Our experts manage your investments in high quality stocks allocated across large and mid caps across various sectors.'
  },
  {
    icon: Settings,
    title: 'Portfolio Customisation',
    description: 'Every investor is unique. We are able to tailor portfolios that reflect investor constraints, risk appetite and financial aspirations.'
  },
  {
    icon: RefreshCw,
    title: "'Full Service' With Rebalancing",
    description: 'The dynamic nature of the stock market necessitates regular portfolio adjustments. We keep portfolios aligned with market developments.'
  },
  {
    icon: Shield,
    title: 'Risk Mitigation',
    description: 'With proactive strategies, we ensure client investments are resilient against market uncertainties.'
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-[#F8F9FA]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#113262] text-center mb-12">
          JEWEL PMS- Equity Portfolio Management Services Offered
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <service.icon className="w-6 h-6 text-[#1C52A0] mb-4" />
              <h3 className="text-xl font-semibold text-[#113262] mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;