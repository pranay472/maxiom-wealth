import React, { useState } from 'react';
import { ChevronRight, Shield, Target, TrendingUp, BarChart2, FileText } from 'lucide-react';

// Main Page Container
const TaxPlanningPage = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#E8EEF6]">
      {children}
    </div>
  );
};

// Hero Section
const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-[#113262] to-[#1C52A0] py-20">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
        <div className="absolute transform rotate-45 bg-white/10 w-96 h-96 -top-48 -right-48 rounded-full"></div>
        <div className="absolute transform -rotate-45 bg-white/10 w-96 h-96 -bottom-48 -right-48 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Strategic Tax
              <span className="block text-[#F49611] mt-2">Planning Solutions</span>
            </h1>
            <p className="mt-6 text-lg text-gray-300 max-w-2xl">
              Optimize your wealth through intelligent tax planning strategies, designed for high net worth individuals seeking long-term financial success.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="inline-flex items-center px-8 py-3 bg-[#F49611] text-white rounded-lg hover:bg-[#AB690C] transition-colors">
                Schedule Consultation
                <ChevronRight className="ml-2 h-5 w-5" />
              </button>
              <button className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors">
                Learn More
              </button>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <Shield className="h-8 w-8 text-[#F49611]" />
                <h3 className="text-white font-semibold mt-4">Tax Protection</h3>
                <p className="text-gray-300 mt-2">Strategic approaches to protect your wealth</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg mt-8">
                <Target className="h-8 w-8 text-[#F49611]" />
                <h3 className="text-white font-semibold mt-4">Targeted Planning</h3>
                <p className="text-gray-300 mt-2">Customized solutions for your goals</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Services Section
const ServicesSection = () => {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      id: 1,
      icon: TrendingUp,
      title: "Tax-Efficient Investment Strategies",
      description: "Optimize your portfolio with tax-advantaged investment approaches",
      details: [
        "ELSS and tax-saving instruments",
        "Strategic asset allocation",
        "Tax loss harvesting opportunities"
      ]
    },
    {
      id: 2,
      icon: BarChart2,
      title: "Portfolio Structuring",
      description: "Structure your investments for optimal tax efficiency",
      details: [
        "Asset location optimization",
        "Tax-efficient rebalancing",
        "Strategic withdrawal planning"
      ]
    },
    {
      id: 3,
      icon: FileText,
      title: "Tax Planning & Compliance",
      description: "Comprehensive tax planning and regulatory compliance",
      details: [
        "Regular tax assessments",
        "Compliance monitoring",
        "Tax regulation updates"
      ]
    }
  ];

  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#113262]">Our Tax Planning Services</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive tax planning solutions designed to optimize your wealth and achieve your financial goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className={`bg-white rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl ${
                activeService === service.id ? 'ring-2 ring-[#1C52A0]' : ''
              }`}
              onClick={() => setActiveService(activeService === service.id ? null : service.id)}
            >
              <div className="p-6">
                <div className="w-12 h-12 bg-[#E8EEF6] rounded-lg flex items-center justify-center">
                  <service.icon className="h-6 w-6 text-[#1C52A0]" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-[#113262]">{service.title}</h3>
                <p className="mt-2 text-gray-600">{service.description}</p>
                
                <div className={`mt-4 transition-all duration-300 ${
                  activeService === service.id ? 'max-h-48' : 'max-h-0 overflow-hidden'
                }`}>
                  <ul className="space-y-2">
                    {service.details.map((detail, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <div className="w-1.5 h-1.5 bg-[#F49611] rounded-full mr-2"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Approach Section
const ApproachSection = () => {
  const steps = [
    {
      number: "01",
      title: "Assessment",
      description: "Comprehensive evaluation of your current tax situation and financial goals"
    },
    {
      number: "02",
      title: "Strategy Development",
      description: "Creating customized tax planning strategies aligned with your objectives"
    },
    {
      number: "03",
      title: "Implementation",
      description: "Executing tax-efficient investment and planning strategies"
    },
    {
      number: "04",
      title: "Monitoring",
      description: "Continuous oversight and adjustments to optimize tax efficiency"
    }
  ];

  return (
    <div className="bg-[#F8FAFC] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#113262]">Our Approach</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            A systematic approach to tax planning that ensures comprehensive coverage and optimal results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-lg p-6 shadow-lg h-full relative z-10">
                <span className="text-4xl font-bold text-[#F49611] opacity-50">{step.number}</span>
                <h3 className="text-xl font-semibold text-[#113262] mt-4">{step.title}</h3>
                <p className="mt-2 text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 left-[calc(100%-1rem)] w-[calc(2rem+2rem)] h-[2px] bg-gradient-to-r from-[#1C52A0] to-[#0A1E3A] transform -translate-y-1/2 z-0"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { TaxPlanningPage, HeroSection, ServicesSection, ApproachSection };