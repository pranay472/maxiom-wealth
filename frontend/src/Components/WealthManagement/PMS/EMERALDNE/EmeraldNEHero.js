import React from 'react';
import { Shield, Clock, Target, BarChart3 } from 'lucide-react';

const EmeraldNEHero = () => {
  return (
    <div className="relative overflow-hidden bg-[#113262]"> {/* Primary 500 */}
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#F49611] rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2" /> {/* Secondary 300 */}
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1C52A0] rounded-full blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2" /> {/* Primary 300 */}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative">
        {/* Main Content */}
        <div className="text-center mb-12 relative">
          <div className="inline-block">
            <span className="inline-block px-4 py-1 mb-6 text-[#F49611] bg-[#FEF5E7] rounded-full text-sm font-semibold">
              EMERALD-NE Portfolio
            </span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Professional Debt Fund<br />Portfolio Management
          </h1>
          <p className="text-lg lg:text-xl text-[#A2B8D8] max-w-3xl mx-auto mb-8"> {/* Primary 75 */}
            Expert selection and management of debt mutual funds for capital preservation and stable returns, backed by our Roots & Wings philosophy
          </p>
          
          {/* Statistics Bar */}
          <div className="flex flex-wrap justify-center gap-8 mb-12 text-white">
            <div className="text-center">
              <div className="text-[#F49611] font-bold text-4xl">450+</div>
              <div className="text-[#A2B8D8] text-sm">Crores Assets Advised</div>
            </div>
            <div className="text-center">
              <div className="text-[#F49611] font-bold text-4xl">1000+</div>
              <div className="text-[#A2B8D8] text-sm">Families</div>
            </div>
            <div className="text-center">
              <div className="text-[#F49611] font-bold text-4xl">20+</div>
              <div className="text-[#A2B8D8] text-sm">Years Experience</div>
            </div>
          </div>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <MetricCard
            icon={<Shield />}
            label="Minimum Investment"
            value="₹50 Lakhs"
            description="Start your wealth journey"
          />
          <MetricCard
            icon={<Clock />}
            label="Investment Horizon"
            value="3-5 Years"
            description="Long-term wealth creation"
          />
          <MetricCard
            icon={<Target />}
            label="Investment Focus"
            value="Debt Funds & Bonds"
            description="Carefully selected portfolio"
          />
          <MetricCard
            icon={<BarChart3 />}
            label="Risk Level"
            value="Low to Moderate"
            description="Capital preservation focus"
          />
        </div>

        {/* CTA Section */}
        <div className="text-center space-x-4">
          <button className="bg-[#F49611] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#F6A839] transition-colors duration-200 shadow-lg">
            Schedule a Consultation
          </button>
          <button className="bg-transparent border-2 border-[#F49611] text-[#F49611] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#F49611] hover:text-white transition-all duration-200">
            Download Brochure
          </button>
        </div>

        {/* Trust Badges */}
        <div className="flex justify-center items-center gap-8 mt-12">
          <div className="text-[#A2B8D8] text-sm flex items-center gap-2">
            <Shield className="w-4 h-4" /> SEBI Registered
          </div>
          <div className="text-[#A2B8D8] text-sm flex items-center gap-2">
            <Shield className="w-4 h-4" /> AMFI Registered
          </div>
          <div className="text-[#A2B8D8] text-sm flex items-center gap-2">
            <Shield className="w-4 h-4" /> GOI Registered
          </div>
        </div>
      </div>
    </div>
  );
};

const MetricCard = ({ icon, label, value, description }) => {
  return (
    <div className="bg-[#1C52A0] rounded-xl p-6 border border-[#436FB0] backdrop-blur-lg bg-opacity-30 hover:bg-opacity-40 transition-all duration-200">
      <div className="text-[#F49611] mb-3">
        {icon}
      </div>
      <p className="text-[#A2B8D8] text-sm font-medium mb-1">{label}</p>
      <p className="text-white text-xl font-semibold mb-2">{value}</p>
      <p className="text-[#7B9BC8] text-sm">{description}</p>
    </div>
  );
};

export default EmeraldNEHero;