import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Plus, Minus, ArrowRight, Shield, Target, TrendingUp } from 'lucide-react';

const ServiceSelector = () => {
  const [selectedService, setSelectedService] = useState('investment');
  const [isHovered, setIsHovered] = useState(null);

  const services = {
    investment: {
      icon: TrendingUp,
      title: "Investment Planning",
      description: "Strategic tax-efficient investment solutions",
      features: [
        "Personalized portfolio structuring",
        "Tax-loss harvesting strategies",
        "Strategic asset location"
      ],
      gradient: "from-[#113262] to-[#1C52A0]"
    },
    estate: {
      icon: Shield,
      title: "Estate Planning",
      description: "Comprehensive wealth transfer strategies",
      features: [
        "Trust structuring & optimization",
        "Generational wealth planning",
        "Tax-efficient succession"
      ],
      gradient: "from-[#1C52A0] to-[#436FB0]"
    },
    retirement: {
      icon: Target,
      title: "Retirement Planning",
      description: "Long-term retirement optimization",
      features: [
        "Tax-optimized withdrawal strategies",
        "Pension & benefits planning",
        "Income stream diversification"
      ],
      gradient: "from-[#436FB0] to-[#7B9BC8]"
    }
  };

  const ServiceIcon = services[selectedService].icon;

  return (
    <div className="p-8">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden backdrop-blur-lg">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
          <div className="lg:border-r border-gray-100">
            {Object.entries(services).map(([key, service]) => {
              const ServiceIcon = service.icon;
              return (
                <button
                  key={key}
                  className={`w-full p-6 text-left transition-all duration-300 relative ${
                    selectedService === key 
                      ? 'bg-gradient-to-r from-[#E8EEF6] to-white' 
                      : 'hover:bg-gray-50'
                  }`}
                  onClick={() => setSelectedService(key)}
                  onMouseEnter={() => setIsHovered(key)}
                  onMouseLeave={() => setIsHovered(null)}
                >
                  <div className="flex items-center">
                    <div className={`p-3 rounded-lg ${
                      selectedService === key 
                        ? 'bg-gradient-to-br ' + service.gradient
                        : 'bg-[#E8EEF6]'
                    }`}>
                      <ServiceIcon className={`h-6 w-6 ${
                        selectedService === key ? 'text-white' : 'text-[#1C52A0]'
                      }`} />
                    </div>
                    <div className="ml-4">
                      <h3 className={`font-semibold transition-colors ${
                        selectedService === key ? 'text-[#113262]' : 'text-gray-600'
                      }`}>
                        {service.title}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  {selectedService === key && (
                    <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-[#1C52A0] to-[#436FB0]" />
                  )}
                </button>
              );
            })}
          </div>

          <div className="col-span-2 p-8 bg-gradient-to-br from-white to-[#F8FAFC]">
            <div className="max-w-2xl">
              <div className="flex items-center">
                <div className="p-4 bg-gradient-to-br from-[#113262] to-[#1C52A0] rounded-2xl">
                  <ServiceIcon className="h-8 w-8 text-white" />
                </div>
                <h2 className="ml-6 text-2xl font-bold text-[#113262]">
                  {services[selectedService].title}
                </h2>
              </div>

              <p className="mt-6 text-gray-600 leading-relaxed">
                {services[selectedService].description}
              </p>

              <div className="mt-8 space-y-4">
                {services[selectedService].features.map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="h-2 w-2 rounded-full bg-[#1C52A0]" />
                    <span className="ml-4 text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="mt-8 px-6 py-3 bg-gradient-to-r from-[#113262] to-[#1C52A0] text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5">
                Learn More About {services[selectedService].title}
                <ArrowRight className="inline-block ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FAQAccordion = () => {
  const [openQuestion, setOpenQuestion] = useState(null);
  const [hoveredQuestion, setHoveredQuestion] = useState(null);

  const faqs = [
    {
      id: 1,
      category: "Investment",
      question: "How can tax-efficient investing enhance my returns?",
      answer: "Tax-efficient investing strategically minimizes tax impact while maximizing returns through careful asset location, loss harvesting, and timing of realizations. This approach can significantly improve long-term after-tax wealth accumulation."
    },
    {
      id: 2,
      category: "Strategy",
      question: "What are the key tax planning strategies for high net worth individuals?",
      answer: "Our comprehensive approach includes strategic asset allocation, tax-loss harvesting, charitable giving strategies, and estate planning optimization, all tailored to your specific financial situation and goals."
    },
    {
      id: 3,
      category: "Process",
      question: "How frequently should tax planning strategies be reviewed?",
      answer: "We conduct quarterly strategy reviews, with comprehensive annual assessments and additional reviews triggered by significant life events or tax law changes to ensure optimal alignment with your goals."
    }
  ];

  return (
    <div className="p-8">
      <div className="max-w-3xl mx-auto space-y-6">
        {faqs.map((faq) => (
          <div 
            key={faq.id}
            className={`bg-white rounded-xl shadow-lg transition-all duration-300 ${
              hoveredQuestion === faq.id ? 'shadow-xl transform -translate-y-1' : ''
            }`}
            onMouseEnter={() => setHoveredQuestion(faq.id)}
            onMouseLeave={() => setHoveredQuestion(null)}
          >
            <button
              className="w-full text-left px-8 py-6 flex items-center justify-between"
              onClick={() => setOpenQuestion(openQuestion === faq.id ? null : faq.id)}
            >
              <div className="pr-8">
                <span className="text-sm font-medium text-[#436FB0] mb-2 block">
                  {faq.category}
                </span>
                <h3 className="text-lg font-semibold text-[#113262]">
                  {faq.question}
                </h3>
              </div>
              <div className={`flex-shrink-0 p-3 rounded-full border-2 transition-all duration-300 ${
                openQuestion === faq.id 
                  ? 'bg-[#1C52A0] border-[#1C52A0]' 
                  : 'border-gray-200'
              }`}>
                {openQuestion === faq.id ? (
                  <Minus className={`h-4 w-4 ${
                    openQuestion === faq.id ? 'text-white' : 'text-gray-400'
                  }`} />
                ) : (
                  <Plus className={`h-4 w-4 ${
                    openQuestion === faq.id ? 'text-white' : 'text-gray-400'
                  }`} />
                )}
              </div>
            </button>
            
            <div className={`px-8 transition-all duration-500 ease-in-out overflow-hidden ${
              openQuestion === faq.id ? 'max-h-96' : 'max-h-0'
            }`}>
              <div className="py-6 border-t border-gray-100">
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
                <button className="mt-4 text-[#1C52A0] font-medium hover:text-[#113262] transition-colors flex items-center">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { ServiceSelector, FAQAccordion };