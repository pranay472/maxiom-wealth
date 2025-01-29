import React, { useState } from 'react';
import { Shield, Target, TrendingUp, Award, Users, BarChart2, LineChart } from 'lucide-react';

const BenefitCard = ({ title, description, icon: Icon }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative bg-white rounded-xl p-8 shadow-lg transition-all duration-500 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#113262]/5 to-transparent rounded-xl transition-opacity duration-500 opacity-0 group-hover:opacity-100" />
      <div className="absolute right-0 top-0 w-32 h-32 bg-[#E8EEF6] rounded-full blur-3xl transition-opacity duration-500 opacity-0 group-hover:opacity-20" />
      
      <div className="relative">
        {/* Icon Container with Animation */}
        <div className="relative inline-block">
          <div className="p-4 bg-gradient-to-br from-[#113262] to-[#1C52A0] rounded-lg transform transition-transform duration-500 group-hover:scale-110">
            <Icon className="h-6 w-6 text-white transform transition-transform duration-500 group-hover:rotate-12" />
          </div>
          {/* Animated Ring */}
          <div className="absolute -inset-2 rounded-lg border-2 border-[#1C52A0] opacity-0 scale-50 transition-all duration-500 group-hover:opacity-20 group-hover:scale-100" />
        </div>
        
        <h3 className="mt-6 text-xl font-semibold text-[#113262] transition-all duration-500 group-hover:translate-x-2">
          {title}
        </h3>
        <p className="mt-3 text-gray-600 leading-relaxed">
          {description}
        </p>

        {/* Interactive Line Decoration */}
        <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#113262] to-[#1C52A0] transition-all duration-500 opacity-0 group-hover:opacity-100" style={{ width: isHovered ? '100%' : '0%' }} />
      </div>
    </div>
  );
};

const ExpertisePoint = ({ title, description, stats, icon: Icon }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-xl">
      <div className="p-8 relative overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 bg-[#E8EEF6] opacity-0 hover:opacity-5 transition-opacity duration-500">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #113262 1px, transparent 0)',
            backgroundSize: '24px 24px'
          }} />
        </div>

        <div className="relative">
          <div className="flex items-center">
            <div className="p-4 bg-gradient-to-br from-[#113262] to-[#1C52A0] rounded-lg transform transition-transform duration-500 hover:scale-105 hover:rotate-3">
              <Icon className="h-6 w-6 text-white" />
            </div>
            <h3 className="ml-6 text-xl font-semibold text-[#113262] transform transition-all duration-500 hover:translate-x-2">
              {title}
            </h3>
          </div>
          <p className="mt-4 text-gray-600 leading-relaxed max-w-2xl">
            {description}
          </p>
        </div>
      </div>
      
      {stats && (
        <div className="px-8 py-6 bg-gradient-to-br from-[#E8EEF6] to-white relative overflow-hidden">
          <div className="grid grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center group relative"
              >
                {/* Stat Value with Animation */}
                <div className="text-3xl font-bold text-[#1C52A0] transform transition-all duration-500 group-hover:scale-110 group-hover:translate-y-1">
                  {stat.value}
                </div>
                {/* Label with Underline Animation */}
                <div className="relative mt-1">
                  <div className="text-sm text-gray-600">
                    {stat.label}
                  </div>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-[#1C52A0] transition-all duration-500 opacity-0 group-hover:w-full group-hover:opacity-20" />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const ServiceDetail = ({ service }) => {
  const [activeFeature, setActiveFeature] = useState(null);

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl">
      <div className="p-8 relative">
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#E8EEF6] rounded-full blur-3xl opacity-20 transform -translate-y-1/2 translate-x-1/2" />
        
        <div className="relative">
          <div className="flex items-center">
            <div className="relative">
              <div className="p-4 bg-gradient-to-br from-[#113262] to-[#1C52A0] rounded-xl transform transition-transform duration-500 hover:scale-105 hover:rotate-3">
                {service.icon && <service.icon className="h-8 w-8 text-white" />}
              </div>
              {/* Animated Rings */}
              <div className="absolute -inset-2 rounded-xl border-2 border-[#1C52A0] opacity-0 scale-50 transition-all duration-500 group-hover:opacity-20 group-hover:scale-100" />
            </div>
            <div className="ml-6">
              <h2 className="text-2xl font-bold text-[#113262] transition-transform duration-500 hover:translate-x-2">
                {service.title}
              </h2>
              <p className="text-[#436FB0] mt-1">{service.subtitle}</p>
            </div>
          </div>

          <p className="mt-6 text-gray-600 leading-relaxed relative">
            {service.description}
          </p>

          {service.features && (
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.features.map((feature, index) => (
                <div
                  key={index}
                  className="group relative p-6 bg-[#F8FAFC] rounded-lg transition-all duration-500 hover:bg-white hover:shadow-lg"
                  onMouseEnter={() => setActiveFeature(index)}
                  onMouseLeave={() => setActiveFeature(null)}
                >
                  <div className="flex items-start">
                    <div className="p-3 bg-white rounded-lg shadow-sm transition-all duration-500 group-hover:shadow-md group-hover:scale-110 group-hover:rotate-3">
                      <feature.icon className="h-5 w-5 text-[#1C52A0]" />
                    </div>
                    <div className="ml-4">
                      <h4 className="font-medium text-[#113262] transition-all duration-500 group-hover:translate-x-2">
                        {feature.title}
                      </h4>
                      <p className="mt-2 text-sm text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                  {/* Interactive Border */}
                  <div 
                    className="absolute inset-0 border-2 border-[#1C52A0] rounded-lg opacity-0 scale-95 transition-all duration-500 group-hover:opacity-10 group-hover:scale-100" 
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {service.benefits && (
        <div className="px-8 py-6 bg-gradient-to-r from-[#E8EEF6] to-white border-t border-gray-100">
          <h3 className="text-lg font-semibold text-[#113262] mb-6">
            Key Benefits
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {service.benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="flex items-center group"
              >
                <div className="relative">
                  <div className="h-2 w-2 rounded-full bg-[#1C52A0] transform transition-all duration-500 group-hover:scale-150 group-hover:opacity-50" />
                  <div className="absolute top-1/2 left-1/2 h-2 w-2 rounded-full bg-[#1C52A0] transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 group-hover:scale-100 opacity-0 group-hover:opacity-100" />
                </div>
                <span className="ml-3 text-gray-600 transition-all duration-500 group-hover:translate-x-2">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export { BenefitCard, ExpertisePoint, ServiceDetail };