import React from 'react';

const DiamondBottomline = () => {
  const benefits = [
    {
      title: "Stable Retirement Income",
      description: "Our DIAMOND approach ensures consistent income generation through diversified investments suited for retirement needs."
    },
    {
      title: "Multi-Asset Strategy",
      description: "DIAMOND diversifies across multiple asset classes including equity, debt, REITs, InvITs, and gold to provide balanced returns while managing risks effectively."
    },
    {
      title: "Capital Preservation",
      description: "Focus on high credit quality investments and stable yields to protect your retirement corpus while beating inflation."
    },
    {
      title: "Transparent Retirement Planning",
      description: "Clear and honest approach to retirement planning with regular portfolio monitoring and personalized support."
    }
  ];

  return (
    <div className="w-full bg-gradient-to-br from-[#113262] to-[#1C52A0] py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-white text-3xl font-semibold mb-2">
            Bottomline: Benefits of Retirement Planning with DIAMOND PMS
          </h2>
          <div className="w-24 h-1 bg-[#F49611] mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="relative">
              {/* Decorative number */}
              <div className="absolute -left-8 top-0 text-6xl font-bold text-[#F49611] opacity-10">
                {index + 1}
              </div>
              
              {/* Content */}
              <div className="relative">
                <div className="flex items-start space-x-4">
                  {/* Vertical line decoration */}
                  <div className="hidden md:block w-1 h-full bg-gradient-to-b from-[#F49611] to-transparent"></div>
                  
                  <div className="flex-1">
                    <h3 className="text-[#F49611] text-xl font-semibold mb-4">
                      {benefit.title}
                    </h3>
                    <p className="text-white/80 text-base leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiamondBottomline;