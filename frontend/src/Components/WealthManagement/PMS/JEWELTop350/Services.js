import React from 'react';
import { Target, Settings, RefreshCw, Shield } from 'lucide-react';

const services = [
  {
    icon: Target,
    title: 'Equity Focused Strategy',
    description: 'Core investment approach focused on equity across market capitalizations, primarily in large-cap and midcap companies.'
  },
  {
    icon: Settings,
    title: 'Diverse Investment Universe',
    description: 'Investment across listed securities, liquid mutual funds, money market instruments, fixed deposits, and exchange traded products.'
  },
  {
    icon: RefreshCw,
    title: 'Dynamic Portfolio Management',
    description: 'Professional portfolio management with periodic reviews and early risk detection system.'
  },
  {
    icon: Shield,
    title: 'Risk Management',
    description: 'Comprehensive risk management covering market risk, liquidity risk, and concentration risk in focused portfolio.'
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-[#F8F9FA]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#113262] text-center mb-12">
          JEWEL Flexi Cap Quality-Growth PMS
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