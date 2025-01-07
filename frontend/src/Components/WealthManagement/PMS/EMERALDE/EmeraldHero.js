// Import required dependencies from React and Lucide icons
import React from 'react';
import { PieChart, TrendingUp, RefreshCw } from 'lucide-react';

// EmeraldHero component - Hero section for the EMERALD Equity MF product
const EmeraldHero = () => {
  return (
    // Main container with gradient background
    <div className="relative overflow-hidden bg-gradient-to-br from-primary-500 via-primary-400 to-primary-300 text-white pt-24">
      {/* Content wrapper with responsive padding */}
      <div className="relative max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Two-column grid layout for desktop, single column for mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Content Section */}
          <div className="space-y-8">
            {/* Header Section */}
            <div className="space-y-4">
              <h1 className="text-4xl font-bold">EMERALD Equity MF</h1>
              <h2 className="text-xl font-medium text-primary-50">Maxiom PMS - EMERALD Diversified Mutual Funds</h2>
            </div>
            
            {/* Product Description */}
            <p className="text-lg text-primary-50">
              Build Wealth through a curated portfolio of funds across market caps and asset classes.
            </p>
            
            {/* Detailed Description */}
            <p className="text-base text-primary-50">
              Achieve growth and stability by tapping into the expertise of a variety of fund managers, all in one PMS portfolio. Our algorithms scan thousands of mutual fund schemes and calibrate the quality of their stock & bond holdings. With timely rebalancing, this is a recipe for long term wealth creation.
            </p>

            {/* Feature Icons Section - 3 column grid */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              {/* Diversified Portfolio Feature */}
              <div className="text-center">
                <div className="mx-auto w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-2">
                  <PieChart className="w-6 h-6" />
                </div>
                <p className="text-sm">Diversified Portfolio</p>
              </div>
              {/* Algorithmic Selection Feature */}
              <div className="text-center">
                <div className="mx-auto w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-2">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <p className="text-sm">Algorithmic Selection</p>
              </div>
              {/* Regular Rebalancing Feature */}
              <div className="text-center">
                <div className="mx-auto w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-2">
                  <RefreshCw className="w-6 h-6" />
                </div>
                <p className="text-sm">Regular Rebalancing</p>
              </div>
            </div>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Primary CTA Button */}
              <button className="px-6 py-3 bg-secondary-300 hover:bg-secondary-400 text-primary-500 font-semibold rounded-lg transition-colors">
                Start Investing
              </button>
              {/* Secondary CTA Button */}
              <button className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-colors">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Column: Illustration Section (hidden on mobile) */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* SVG Container with background styling */}
              <div className="w-full h-96 bg-white/5 rounded-2xl overflow-hidden p-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" className="w-full h-full">
                  {/* SVG Definitions */}
                  <defs>
                    {/* Background gradient definition */}
                    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{stopColor: "#1C52A0", stopOpacity: 0.1}}/>
                      <stop offset="100%" style={{stopColor: "#436FB0", stopOpacity: 0.1}}/>
                    </linearGradient>
                    {/* Chart elements gradient */}
                    <linearGradient id="chartGrad" x1="0%" y1="100%" x2="0%" y2="0%">
                      <stop offset="0%" style={{stopColor: "#F49611"}}/>
                      <stop offset="100%" style={{stopColor: "#F6A839"}}/>
                    </linearGradient>
                  </defs>
                  
                  {/* SVG Background */}
                  <rect width="800" height="600" fill="url(#bgGrad)"/>
                  
                  {/* Central Donut Chart Group */}
                  <g transform="translate(400, 300)">
                    {/* Outer decorative ring */}
                    <circle cx="0" cy="0" r="200" fill="none" stroke="#1C52A0" stroke-width="40" stroke-opacity="0.1"/>
                    
                    {/* Portfolio allocation segments */}
                    <path d="M 0 -200 A 200 200 0 0 1 173.2 -100 L 0 0 Z" fill="#1C52A0" opacity="0.8"/>
                    <path d="M 173.2 -100 A 200 200 0 0 1 173.2 100 L 0 0 Z" fill="#436FB0" opacity="0.7"/>
                    <path d="M 173.2 100 A 200 200 0 0 1 0 200 L 0 0 Z" fill="#7B9BC8" opacity="0.6"/>
                    <path d="M 0 200 A 200 200 0 0 1 -173.2 100 L 0 0 Z" fill="#A2B8D8" opacity="0.5"/>
                    <path d="M -173.2 100 A 200 200 0 0 1 -173.2 -100 L 0 0 Z" fill="#E8EEF6" opacity="0.4"/>
                    <path d="M -173.2 -100 A 200 200 0 0 1 0 -200 L 0 0 Z" fill="#F49611" opacity="0.6"/>
                    
                    {/* Center highlight */}
                    <circle cx="0" cy="0" r="120" fill="white" opacity="0.1"/>
                    
                    {/* Growth indicator arrows */}
                    <path d="M -40 40 L 0 0 L 40 40" fill="none" stroke="#F49611" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M -20 20 L 20 -20 L 60 20" fill="none" stroke="#F49611" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" transform="translate(0, -20)"/>
                  </g>
                  
                  {/* Performance Metrics Visualization */}
                  <g transform="translate(100, 100)">
                    {/* Bar chart elements */}
                    <rect x="0" y="0" width="60" height="100" fill="url(#chartGrad)" rx="4"/>
                    <rect x="80" y="20" width="60" height="80" fill="url(#chartGrad)" rx="4"/>
                    <rect x="160" y="40" width="60" height="60" fill="url(#chartGrad)" rx="4"/>
                  </g>
                  
                  {/* Investment Categories Grid */}
                  <g transform="translate(540, 400)">
                    {/* 3x2 grid of investment type indicators */}
                    <rect x="0" y="0" width="40" height="40" fill="#1C52A0" opacity="0.2" rx="4"/>
                    <rect x="50" y="0" width="40" height="40" fill="#1C52A0" opacity="0.3" rx="4"/>
                    <rect x="100" y="0" width="40" height="40" fill="#1C52A0" opacity="0.4" rx="4"/>
                    <rect x="0" y="50" width="40" height="40" fill="#F49611" opacity="0.2" rx="4"/>
                    <rect x="50" y="50" width="40" height="40" fill="#F49611" opacity="0.3" rx="4"/>
                    <rect x="100" y="50" width="40" height="40" fill="#F49611" opacity="0.4" rx="4"/>
                  </g>
                </svg>
              </div>
              {/* Decorative background elements */}
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-secondary-300/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary-300/20 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Export the component for use in other parts of the application
export default EmeraldHero;