import React from 'react';
import { Check, TrendingUp, Target, Shield, BarChart3, Gem } from 'lucide-react';

// Custom Card Component
const Card = ({ children, className = '', ...props }) => (
  <div 
    className={`rounded-2xl ${className}`} 
    {...props}
  >
    {children}
  </div>
);

// Custom CardHeader Component
const CardHeader = ({ children, className = '', ...props }) => (
  <div 
    className={`p-6 ${className}`} 
    {...props}
  >
    {children}
  </div>
);

// Custom CardContent Component
const CardContent = ({ children, className = '', ...props }) => (
  <div 
    className={`px-6 pb-6 ${className}`} 
    {...props}
  >
    {children}
  </div>
);

// Motion Component Simulation
const MotionDiv = ({ children, className = '', ...props }) => (
  <div 
    className={`transform transition-all duration-500 ease-out ${className}`}
    {...props}
  >
    {children}
  </div>
);

const PMSDifference = () => {
  const servicesData = [
    {
      title: "Jewel PMS",
      subtitle: "Premium Large Cap Portfolio",
      description: "Strategic investments in top 350 companies, crafted for sustainable long-term wealth creation with proven track records.",
      icon: <Gem className="w-8 h-8" />,
      stats: ["25%+ Annual Returns", "Top 350 Companies", "Active Management"]
    },
    {
      title: "Spark PMS",
      subtitle: "High-Growth Mid Cap Focus",
      description: "Dynamic portfolio of 351-1000 ranked market cap companies, designed to capture emerging market opportunities.",
      icon: <TrendingUp className="w-8 h-8" />,
      stats: ["High Growth Potential", "Emerging Leaders", "Research Driven"]
    },
    {
      title: "GEM",
      subtitle: "Momentum & Quality Strategy",
      description: "Best-in-class portfolio combining momentum and quality factors for optimal risk-adjusted returns.",
      icon: <BarChart3 className="w-8 h-8" />,
      stats: ["Quality Focus", "Momentum Strategy", "Risk Managed"]
    }
  ];

  return (
    <div className="w-full bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Elegant Header Section */}
        <MotionDiv className="text-center mb-20">
          <span className="text-secondary-300 font-semibold text-sm tracking-wider uppercase mb-4 block">
            Portfolio Management Services
          </span>
          <h2 className="text-5xl font-bold text-primary-500 mb-6 tracking-tight relative">
            Exceptional Investment Strategies
            <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-32 h-1.5 bg-secondary-300"></span>
          </h2>
          <div className="w-24 h-1 bg-secondary-300 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Experience institutional-grade portfolio management with our signature investment approaches
          </p>
        </MotionDiv>

        {/* Premium Service Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-24">
          {servicesData.map((service, index) => (
            <MotionDiv key={index}>
              <Card 
                className="relative overflow-hidden bg-white backdrop-blur-sm bg-opacity-90"
              >
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-50 rounded-full -mr-16 -mt-16 opacity-50"></div>
                
                <CardHeader className="relative z-10">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-primary-100 to-primary-50 text-primary-500">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-primary-500">{service.title}</h3>
                      <p className="text-secondary-300">{service.subtitle}</p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="relative z-10">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="pt-6">
                    <div className="grid grid-cols-1 gap-4">
                      {service.stats.map((stat, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <Check className="w-5 h-5 text-secondary-300" />
                          <span className="text-gray-700">{stat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </MotionDiv>
          ))}
        </div>

        {/* Premium Feature Section */}
        <MotionDiv className="bg-white rounded-3xl shadow-xl p-12 relative overflow-hidden">
          {/* Decorative Background */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-50 rounded-full -mr-32 -mt-32 opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-50 rounded-full -ml-32 -mb-32 opacity-20"></div>

          <div className="relative z-10">
            <div className="text-center mb-16">
              <span className="text-secondary-300 font-semibold text-sm tracking-wider uppercase block mb-4">
                Why Choose Us
              </span>
              <h3 className="text-4xl font-bold text-primary-500 tracking-tight relative inline-block">
                The Maxiom Wealth Advantage
                <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-32 h-1.5 bg-secondary-300"></span>
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {[
                {
                  title: "Scientific Investment Process",
                  description: "Proprietary LSG Framework combined with Three Eye Fund Selection methodology for optimal portfolio construction",
                  icon: <Target className="w-6 h-6" />
                },
                {
                  title: "Risk-Intelligent Growth",
                  description: "Sophisticated risk management protocols ensuring balanced portfolio performance across market cycles",
                  icon: <Shield className="w-6 h-6" />
                },
                {
                  title: "Research Excellence",
                  description: "Deep fundamental research backed by quantitative analysis and proprietary screening models",
                  icon: <BarChart3 className="w-6 h-6" />
                },
                {
                  title: "Personalized Strategy",
                  description: "Tailored investment approaches aligned with your specific financial goals and risk tolerance",
                  icon: <TrendingUp className="w-6 h-6" />
                }
              ].map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 rounded-lg bg-primary-50 text-primary-500">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-primary-500 mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </MotionDiv>
      </div>
    </div>
  );
};

export default PMSDifference;