import React from 'react';
import { 
  Layout,
  Smartphone,
  BookOpen,
  Share2,
  Sliders,
  Mail,
  PhoneCall,
  MessageCircle
} from 'lucide-react';

const StockFeatures = () => {
  const platforms = [
    {
      icon: <Layout className="w-6 h-6" />,
      title: "Web Trading Platform",
      description: "Feature-rich web platform for sophisticated trading",
      points: [
        "Advanced charting tools",
        "Real-time market data",
        "Multi-screen workspace"
      ]
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile Trading App",
      description: "Trade and track investments on the go",
      points: [
        "Quick order placement",
        "Portfolio monitoring",
        "Instant notifications"
      ]
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Learning Center",
      description: "Comprehensive educational resources",
      points: [
        "Video tutorials",
        "Training webinars",
        "Market education"
      ]
    },
    {
      icon: <Share2 className="w-6 h-6" />,
      title: "Smart Tools",
      description: "Innovative tools for informed decisions",
      points: [
        "Stock screeners",
        "Strategy builder",
        "Watchlist management"
      ]
    }
  ];

  return (
    <section className="py-24 bg-[#E8EEF6]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center mb-20">
          <h2 className="text-4xl font-bold text-[#113262] relative mb-8 drop-shadow-md group">
            Trading Platforms & Tools
            <span className="absolute -bottom-2 left-1/2 w-3/5 h-[3px] bg-gradient-to-r from-transparent via-[#1C52A0] to-transparent -translate-x-1/2 group-hover:w-4/5 transition-all duration-300"></span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl text-center">
            Access powerful trading platforms and innovative tools designed for both new and experienced investors
          </p>
        </div>

        {/* Platforms Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {platforms.map((platform, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
            >
              {/* Icon */}
              <div className="p-3 bg-[#F49611]/10 rounded-lg w-fit mb-6">
                <div className="text-[#F49611]">
                  {platform.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-[#113262] mb-3">
                {platform.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {platform.description}
              </p>

              {/* Points */}
              <ul className="space-y-2">
                {platform.points.map((point, idx) => (
                  <li 
                    key={idx} 
                    className="flex items-center text-sm text-gray-600"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F49611] mr-2"></span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Tools Showcase */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-[#113262] text-center mb-10">
            Additional Trading Features
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg text-center">
              <Sliders className="w-6 h-6 mx-auto mb-3 text-[#F49611]" />
              <h4 className="font-semibold text-[#113262]">Customizable Dashboard</h4>
            </div>
            
            <div className="bg-white p-6 rounded-lg text-center">
              <PhoneCall className="w-6 h-6 mx-auto mb-3 text-[#F49611]" />
              <h4 className="font-semibold text-[#113262]">Dedicated Dealing Desk</h4>
            </div>

            <div className="bg-white p-6 rounded-lg text-center">
              <Mail className="w-6 h-6 mx-auto mb-3 text-[#F49611]" />
              <h4 className="font-semibold text-[#113262]">Email Alerts</h4>
            </div>

            <div className="bg-white p-6 rounded-lg text-center">
              <MessageCircle className="w-6 h-6 mx-auto mb-3 text-[#F49611]" />
              <h4 className="font-semibold text-[#113262]">In-App Support</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StockFeatures;