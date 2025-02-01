import React from 'react';
import { Trophy, Target, Shield, Users, TrendingUp, BadgeCheck } from 'lucide-react';

const WhyChooseUs = () => {
  const stats = [
    { icon: Users, label: '1000+ Families', sublabel: 'Trust Our Expertise' },
    { icon: TrendingUp, label: '450+ Crores', sublabel: 'Assets Under Management' },
    { icon: BadgeCheck, label: 'SEBI Registered', sublabel: 'Licensed & Regulated' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#113262] to-[#1C52A0]">
      {/* Hero Section with Stats */}
      <section className="relative pt-24 pb-32 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#F49611]/10 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#1C52A0]/20 to-transparent rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="container max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative">
          {/* Main Content */}
          <div className="max-w-3xl mb-20">
            <div className="w-12 h-0.5 bg-[#F49611] mb-6"></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Why Choose Maxiom
              <span className="block text-[#F49611] text-2xl md:text-3xl mt-2">Your Path to Financial Excellence</span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Your trusted partner in building and preserving wealth through scientific and process-driven investing.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="group">
                <div className="relative bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 hover:border-[#F49611] transition-all duration-300">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#F49611]/10 to-transparent rounded-bl-full transform translate-x-6 -translate-y-6"></div>
                  
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-4 bg-gradient-to-br from-[#F49611] to-[#955C0A] rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{stat.label}</h3>
                      <p className="text-white/70">{stat.sublabel}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-24 bg-white">
        <div className="container max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col items-center justify-center mb-16">
            <div className="w-12 h-0.5 bg-[#F49611] mb-6"></div>
            <h2 className="text-4xl font-bold text-[#113262] relative mb-8 drop-shadow-md group">
              Our Core Values
              <span className="absolute -bottom-2 left-1/2 w-3/5 h-[3px] bg-gradient-to-r from-transparent via-[#1C52A0] to-transparent -translate-x-1/2 group-hover:w-4/5 transition-all duration-300"></span>
            </h2>
          </div>

          {/* Values Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision Card */}
            <div className="group">
              <div className="h-full relative bg-gradient-to-br from-[#E8EEF6] to-white p-8 rounded-xl border-2 border-[#E8EEF6] hover:border-[#1C52A0] transition-all duration-300">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#1C52A0]/20 to-transparent rounded-bl-full transform translate-x-8 -translate-y-8"></div>
                
                <div className="flex items-center mb-6">
                  <div className="p-4 bg-gradient-to-br from-[#1C52A0] to-[#0A1E3A] rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#113262] ml-6">Vision</h3>
                </div>
                
                <p className="text-gray-700 leading-relaxed">
                  To be India's most trusted and client-centric wealth advisory, helping people achieve financial independence & financial well-being, grow & preserve wealth.
                </p>
              </div>
            </div>

            {/* Mission Card */}
            <div className="group">
              <div className="h-full relative bg-gradient-to-br from-[#E8EEF6] to-white p-8 rounded-xl border-2 border-[#E8EEF6] hover:border-[#1C52A0] transition-all duration-300">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#F49611]/20 to-transparent rounded-bl-full transform translate-x-8 -translate-y-8"></div>
                
                <div className="flex items-center mb-6">
                  <div className="p-4 bg-gradient-to-br from-[#F49611] to-[#955C0A] rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <Trophy className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#113262] ml-6">Mission</h3>
                </div>
                
                <p className="text-gray-700 leading-relaxed">
                  Enable better investing advised by industry experts & unbiased research powered by machine learning algorithms, operating on a transparent & fee-based model free of hidden costs.
                </p>
              </div>
            </div>
          </div>

          {/* Values Description */}
          <div className="mt-12 relative bg-gradient-to-br from-[#113262] to-[#1C52A0] p-8 rounded-xl text-white overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#F49611]/10 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="relative">
              <div className="flex items-center mb-6">
                <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white ml-6">Our Values</h3>
              </div>
              
              <p className="text-white/90 leading-relaxed text-lg">
                Founded on the principles of transparency and client-first philosophy, Maxiom Wealth emerged as a response to the need for honest, effective wealth management. Our journey began with a simple question: How can we make investing more rewarding for our clients? This quest led to the creation of a company that puts clients' interests at the heart of everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;