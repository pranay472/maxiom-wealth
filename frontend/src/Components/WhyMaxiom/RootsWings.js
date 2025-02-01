import React from 'react';
import { Sprout, Wind } from 'lucide-react';

const RootsWings = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#113262] to-[#1C52A0] py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#F49611]/10 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#1C52A0]/20 to-transparent rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="container max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative">
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center mb-16">
          <div className="w-12 h-0.5 bg-[#F49611] mb-6"></div>
          <h2 className="text-4xl font-bold text-white relative mb-8 drop-shadow-md group">
            Our Investment Philosophy
            <span className="absolute -bottom-2 left-1/2 w-3/5 h-[3px] bg-gradient-to-r from-transparent via-[#F49611] to-transparent -translate-x-1/2 group-hover:w-4/5 transition-all duration-300"></span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Roots Section */}
          <div className="group">
            <div className="relative bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 hover:border-[#F49611] transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#1C52A0]/20 to-transparent rounded-bl-full transform translate-x-8 -translate-y-8"></div>
              
              <div className="flex items-center mb-8">
                <div className="p-4 bg-gradient-to-br from-[#1C52A0] to-[#0A1E3A] rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <Sprout className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white ml-6 drop-shadow-sm">Roots</h3>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start group/item hover:translate-x-2 transition-transform duration-300">
                  <div className="w-2 h-2 rounded-full bg-[#F49611] mt-2.5 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-300"></div>
                  <p className="ml-4 text-white/90 text-lg">Strong Balance sheets with low debt for longevity</p>
                </div>
                <div className="flex items-start group/item hover:translate-x-2 transition-transform duration-300">
                  <div className="w-2 h-2 rounded-full bg-[#F49611] mt-2.5 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-300"></div>
                  <p className="ml-4 text-white/90 text-lg">High Return on Equity for shareholder alignment</p>
                </div>
                <div className="flex items-start group/item hover:translate-x-2 transition-transform duration-300">
                  <div className="w-2 h-2 rounded-full bg-[#F49611] mt-2.5 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-300"></div>
                  <p className="ml-4 text-white/90 text-lg">Promoters with significant shareholding</p>
                </div>
              </div>
            </div>
          </div>

          {/* Wings Section */}
          <div className="group">
            <div className="relative bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 hover:border-[#F49611] transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#F49611]/20 to-transparent rounded-bl-full transform translate-x-8 -translate-y-8"></div>
              
              <div className="flex items-center mb-8">
                <div className="p-4 bg-gradient-to-br from-[#F49611] to-[#955C0A] rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <Wind className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white ml-6 drop-shadow-sm">Wings</h3>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start group/item hover:translate-x-2 transition-transform duration-300">
                  <div className="w-2 h-2 rounded-full bg-[#F49611] mt-2.5 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-300"></div>
                  <p className="ml-4 text-white/90 text-lg">Businesses with growing sales and earnings</p>
                </div>
                <div className="flex items-start group/item hover:translate-x-2 transition-transform duration-300">
                  <div className="w-2 h-2 rounded-full bg-[#F49611] mt-2.5 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-300"></div>
                  <p className="ml-4 text-white/90 text-lg">Cash flows that grow steadily</p>
                </div>
                <div className="flex items-start group/item hover:translate-x-2 transition-transform duration-300">
                  <div className="w-2 h-2 rounded-full bg-[#F49611] mt-2.5 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-300"></div>
                  <p className="ml-4 text-white/90 text-lg">Resilient: low drawdown and high recovery</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RootsWings;