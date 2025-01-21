import React from 'react';
import bargraph from './bargraph.png';
import multiusers from './multiusers.png';

const InvestmentApproach = () => {
  return (
    <div className="w-full min-h-screen bg-[#E8EEF6] p-12">
      {/* Main Title */}
      <h1 className="text-[#113262] text-4xl font-bold mb-16 text-center">
        Research-Backed Investment Approach
      </h1>

      {/* First Section */}
      <div className="space-y-12 mb-24">
        <div className="flex items-start gap-8">
          <div className="text-[#113262] text-8xl font-bold leading-none">01</div>
          <div className="flex-1 bg-white rounded-2xl shadow-lg p-8">
            <div className="w-1/2">
              <h2 className="text-[#1C52A0] text-3xl font-semibold mb-3">Roots and Wings Philosophy</h2>
              <p className="text-[#262626] text-xl">
                Balance stability with growth potential in every portfolio.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-8 pl-24">
          <div className="flex-1 bg-white rounded-2xl shadow-lg p-8">
            <div className="w-1/2">
              <h2 className="text-[#1C52A0] text-3xl font-semibold mb-3">LSG Framework</h2>
              <p className="text-[#262626] text-xl">
                Optimize for Liquidity, Safety, and Growth in perfect harmony.
              </p>
            </div>
          </div>
          <div className="text-[#113262] text-8xl font-bold leading-none">02</div>
        </div>
      </div>

      {/* Second Section */}
      <div className="space-y-12">
        <div className="flex items-start gap-8">
          <div className="text-[#113262] text-8xl font-bold leading-none">03</div>
          <div className="flex-1 bg-white rounded-2xl shadow-lg p-8">
            <div className="w-1/2">
              <h2 className="text-[#1C52A0] text-3xl font-semibold mb-3">Three Eye Selection</h2>
              <p className="text-[#262626] text-xl">
                Rigorous multi-lens fund analysis for superior returns.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-8 pl-24">
          <div className="flex-1 bg-white rounded-2xl shadow-lg p-4">
            <div className="flex items-center gap-6">
              <span className="text-[#1C52A0] text-5xl font-bold">100,000+</span>
              <span className="text-xl text-[#262626]">Investor fund schemes analysed</span>
            </div>
          </div>
          <div className="w-16">
            <img src={multiusers} alt="Multiuser" />
          </div>
        </div>

        <div className="flex items-center gap-8 pl-24">
          <div className="w-16">
            <img src={bargraph} alt="Bar Graph" />
          </div>
          <div className="flex-1 bg-white rounded-2xl shadow-lg p-4">
            <div className="flex items-center gap-6">
              <span className="text-[#1C52A0] text-5xl font-bold">5,000+</span>
              <span className="text-xl text-[#262626]">Stocks researched</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentApproach;