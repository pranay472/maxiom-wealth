import React from 'react';
import { Link } from 'react-router-dom';

const PricingCard = ({ price, title, description, link }) => {
  return (
    <div className="group flex flex-col items-center transform transition-all duration-300 hover:-translate-y-2">
      <div className="relative bg-white rounded-[20px] p-8 w-[320px] h-[380px] text-center 
                    shadow-[0_10px_30px_rgba(0,0,0,0.08)] 
                    hover:shadow-[0_20px_40px_rgba(28,82,160,0.15)]
                    transition-all duration-300 mb-5 flex flex-col
                    before:absolute before:inset-0 before:rounded-[20px] 
                    before:bg-gradient-to-b before:from-white before:to-blue-50/30 
                    before:opacity-0 before:transition-opacity before:duration-300
                    group-hover:before:opacity-100 overflow-hidden">
        
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-50 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        
        {/* Content with fixed heights for uniform alignment */}
        <div className="relative flex flex-col h-full">
          {/* Price Section - Fixed Height */}
          <div className="h-20 flex items-center justify-center">
            <div className="text-[2.5rem] text-[#1C52A0] font-bold transition-transform duration-300 group-hover:scale-110">
              ₹{price}<span className="text-[1.2rem] font-semibold">/-</span>
            </div>
          </div>
          
          {/* Title Section - Fixed Height */}
          <div className="h-16 flex flex-col items-center justify-center">
            <h3 className="text-[1.5rem] text-[#113262] font-bold relative">
              {title}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-blue-500 scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            </h3>
          </div>
          
          {/* Description Section - Fixed Height */}
          <div className="h-16 flex items-center justify-center">
            <p className="text-gray-600 text-sm">
              {description}
            </p>
          </div>
          
          {/* Button and Disclaimer Section - Fixed Height */}
          <div className="mt-auto pt-8">
            <button className="w-full bg-gradient-to-r from-[#113262] to-[#1C52A0] text-white py-3 rounded-xl
                           transform transition-all duration-300
                           hover:shadow-lg hover:scale-[1.02]
                           active:scale-[0.98] mb-4 text-sm font-semibold">
              Subscribe now
            </button>
            
            <p className="text-gray-600 text-xs leading-relaxed">
              In Mutual Fund regular plans, AMCs pay us a commission as per SEBI Regulations
            </p>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col items-center space-y-1">
        <p className="text-neutral-700 text-sm">{link.text}</p>
        <Link 
          to={link.to} 
          className="text-[#1C52A0] hover:text-blue-700 text-sm font-medium
                     relative after:absolute after:bottom-0 after:left-0 after:w-0 
                     after:h-0.5 after:bg-blue-700 hover:after:w-full
                     after:transition-all after:duration-300">
          click here
        </Link>
      </div>
    </div>
  );
};

const PricingSection = () => {
  const cards = [
    {
      price: "0",
      title: "Mutual Funds",
      description: "Regular plan",
      link: {
        text: "For direct mutual fund plans",
        to: "/mutual-funds-pricing"
      }
    },
    {
      price: "0",
      title: "Stocks",
      description: "DIY investment without advisory",
      link: {
        text: "To know more about stocks pricing",
        to: "/stocks-pricing"
      }
    },
    {
      price: "0",
      title: "PMS",
      description: "Management fee with profit share above a threshold",
      link: {
        text: "To know more about PMS pricing",
        to: "/pms-pricing"
      }
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#F5F5F5] to-white min-h-[calc(100vh-80px)] flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-30"></div>
      
      <h1 className="text-[3.2rem] text-[#113262] text-center mb-16 font-bold pt-12 relative">
        Transparent. Performance linked.
        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-blue-500"></div>
      </h1>
      
      <div className="flex justify-center gap-6 max-w-[1200px] mx-auto px-5 relative z-10">
        {cards.map((card, index) => (
          <PricingCard key={index} {...card} />
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
