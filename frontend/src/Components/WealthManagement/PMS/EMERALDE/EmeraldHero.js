import React from 'react';
import { Play } from 'lucide-react';

const EmeraldHero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#1C52A0] to-[#0A1E3A] isolate">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMxLjY1NyAwIDMgMS4zNDMgMyAzdjE4YzAgMS42NTctMS4zNDMgMy0zIDNoLTEyYy0xLjY1NyAwLTMtMS4zNDMtMy0zdi0xOGMwLTEuNjU3IDEuMzQzLTMgMy0zaDF6IiBzdHJva2U9IiNmZmZmZmYwNSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-10" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-32 pb-16 flex flex-col lg:flex-row items-center">
          {/* Text Column */}
          <div className="w-full lg:w-1/2 text-white space-y-8">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight bg-gradient-to-r from-white to-[#A2B8D8] bg-clip-text text-transparent animate-slideUp">
              EMERALD-E Equity MF
            </h1>
            
            <p className="text-xl md:text-2xl text-[#A2B8D8] animate-fadeIn opacity-0" style={{ animationDelay: '0.3s' }}>
              Professional Mutual Fund Portfolio Management
            </p>
            
            <p className="text-[#E8EEF6] leading-relaxed animate-fadeIn opacity-0" style={{ animationDelay: '0.6s' }}>
              Expert selection and management of equity mutual funds for long-term wealth creation through our Roots & Wings philosophy.
            </p>
            
            <div className="flex flex-col gap-6 animate-fadeIn opacity-0" style={{ animationDelay: '0.9s' }}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold text-[#F49611]">₹50L</div>
                  <div className="text-sm text-white/90">Min Investment</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold text-[#F49611]">3-5 Yr</div>
                  <div className="text-sm text-white/90">Time Horizon</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold text-[#F49611]">Equity</div>
                  <div className="text-sm text-white/90">Fund Focus</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold text-[#F49611]">Moderate</div>
                  <div className="text-sm text-white/90">Risk Level</div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <button className="bg-[#F49611] text-white px-8 py-4 rounded-lg hover:transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300 font-semibold">
                  Get Started
                </button>
                <button className="border-2 border-[#A2B8D8] text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors duration-300 flex items-center gap-2 font-semibold">
                  <Play size={20} />
                  View Strategy
                </button>
              </div>
            </div>
          </div>
          
          {/* Chart Column */}
          <div className="w-full lg:w-1/2 mt-12 lg:mt-0 animate-fadeIn opacity-0" style={{ animationDelay: '1.2s' }}>
            <div className="bg-white/5 rounded-2xl p-6">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" className="w-full h-full">
                <defs>
                  <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#F49611" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#F49611" stopOpacity="0.1" />
                  </linearGradient>
                </defs>

                {/* Main Circular Chart */}
                <g transform="translate(400, 300)">
                  {/* Background circle */}
                  <circle cx="0" cy="0" r="200" fill="none" stroke="#1C52A0" strokeWidth="40" strokeOpacity="0.2" />
                  
                  {/* Portfolio segments */}
                  <path d="M 0 -180 A 180 180 0 0 1 155.88 -90 L 0 0 Z" fill="#F49611" fillOpacity="0.8" />
                  <path d="M 155.88 -90 A 180 180 0 0 1 155.88 90 L 0 0 Z" fill="#436FB0" fillOpacity="0.6" />
                  <path d="M 155.88 90 A 180 180 0 0 1 0 180 L 0 0 Z" fill="#7B9BC8" fillOpacity="0.5" />
                  <path d="M 0 180 A 180 180 0 0 1 -155.88 90 L 0 0 Z" fill="#A2B8D8" fillOpacity="0.4" />
                  <path d="M -155.88 90 A 180 180 0 1 1 0 -180 L 0 0 Z" fill="#E8EEF6" fillOpacity="0.3" />

                  {/* Center decoration */}
                  <circle cx="0" cy="0" r="100" fill="#1C52A0" fillOpacity="0.3" />
                  <circle cx="0" cy="0" r="80" fill="#F49611" fillOpacity="0.2" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmeraldHero;




// import React from 'react';
// import { PieChart, Target, ShieldCheck, TrendingUp } from 'lucide-react';

// const EmeraldHero = () => {
//   return (
//     <div className="relative overflow-hidden bg-gradient-to-br from-[#113262] via-[#1C52A0] to-[#436FB0]">
//       {/* Background Pattern */}
//       <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMxLjY1NyAwIDMgMS4zNDMgMyAzdjE4YzAgMS42NTctMS4zNDMgMy0zIDNoLTEyYy0xLjY1NyAwLTMtMS4zNDMtMy0zdi0xOGMwLTEuNjU3IDEuMzQzLTMgMy0zaDF6IiBzdHJva2U9IiNmZmZmZmYwNSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-10" />

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
//           {/* Content Section */}
//           <div className="space-y-8">
//             {/* Header */}
//             <div className="space-y-4">
//               <h1 className="text-5xl font-bold text-white">
//                 EMERALD-E
//               </h1>
//               <h2 className="text-2xl font-medium text-[#A2B8D8]">
//                 Professional Mutual Fund Portfolio Management
//               </h2>
//             </div>

//             {/* Description */}
//             <p className="text-lg text-[#E8EEF6]">
//               Expert selection and management of equity mutual funds for long-term wealth creation
//             </p>

//             {/* Key Metrics Grid */}
//             <div className="grid grid-cols-2 gap-6">
//               <div className="bg-[#1C52A0]/30 rounded-lg p-4 backdrop-blur-sm border border-[#7B9BC8]/20">
//                 <p className="text-sm text-[#A2B8D8]">Minimum Investment</p>
//                 <p className="text-lg font-semibold text-white">₹50 Lakhs</p>
//               </div>
//               <div className="bg-[#1C52A0]/30 rounded-lg p-4 backdrop-blur-sm border border-[#7B9BC8]/20">
//                 <p className="text-sm text-[#A2B8D8]">Investment Horizon</p>
//                 <p className="text-lg font-semibold text-white">3-5 Years</p>
//               </div>
//               <div className="bg-[#1C52A0]/30 rounded-lg p-4 backdrop-blur-sm border border-[#7B9BC8]/20">
//                 <p className="text-sm text-[#A2B8D8]">Focus</p>
//                 <p className="text-lg font-semibold text-white">Equity Mutual Funds</p>
//               </div>
//               <div className="bg-[#1C52A0]/30 rounded-lg p-4 backdrop-blur-sm border border-[#7B9BC8]/20">
//                 <p className="text-sm text-[#A2B8D8]">Risk Level</p>
//                 <p className="text-lg font-semibold text-white">Moderate to High</p>
//               </div>
//             </div>

//             {/* Quick Description */}
//             <p className="text-[#E8EEF6] text-lg border-l-4 border-[#F49611] pl-4">
//               A professionally managed mutual fund portfolio strategy focusing on quality equity funds selected through our Roots & Wings philosophy
//             </p>

//             {/* Feature Icons */}
//             <div className="grid grid-cols-4 gap-4 pt-6">
//               {[
//                 { name: 'Professional Management', icon: ShieldCheck },
//                 { name: 'Strategic Selection', icon: Target },
//                 { name: 'Portfolio Focus', icon: PieChart },
//                 { name: 'Growth Driven', icon: TrendingUp }
//               ].map((feature, index) => (
//                 <div key={index} className="text-center">
//                   <div className="mx-auto w-12 h-12 bg-[#1C52A0]/30 backdrop-blur-sm border border-[#7B9BC8]/20 rounded-lg flex items-center justify-center mb-2">
//                     {React.createElement(feature.icon, { className: "w-6 h-6 text-[#F49611]" })}
//                   </div>
//                   <p className="text-sm text-[#E8EEF6]">{feature.name}</p>
//                 </div>
//               ))}
//             </div>

//             {/* CTA Button */}
//             <button className="px-8 py-4 bg-[#F49611] hover:bg-[#F6A839] text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
//               Start Your Investment Journey
//             </button>
//           </div>

//           {/* Visualization Section */}
//           <div className="hidden lg:block">
//             <div className="relative">
//               <div className="w-full h-[600px] bg-[#1C52A0]/20 backdrop-blur-sm border border-[#7B9BC8]/20 rounded-2xl overflow-hidden p-8">
//                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" className="w-full h-full">
//                   {/* SVG Definitions */}
//                   <defs>
//                     <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
//                       <stop offset="0%" stopColor="#F49611" stopOpacity="0.3" />
//                       <stop offset="100%" stopColor="#F49611" stopOpacity="0.1" />
//                     </linearGradient>
//                   </defs>

//                   {/* Main Circular Chart */}
//                   <g transform="translate(400, 300)">
//                     {/* Background circle */}
//                     <circle cx="0" cy="0" r="200" fill="none" stroke="#1C52A0" strokeWidth="40" strokeOpacity="0.2" />
                    
//                     {/* Portfolio segments */}
//                     <path d="M 0 -180 A 180 180 0 0 1 155.88 -90 L 0 0 Z" fill="#F49611" fillOpacity="0.8" />
//                     <path d="M 155.88 -90 A 180 180 0 0 1 155.88 90 L 0 0 Z" fill="#436FB0" fillOpacity="0.6" />
//                     <path d="M 155.88 90 A 180 180 0 0 1 0 180 L 0 0 Z" fill="#7B9BC8" fillOpacity="0.5" />
//                     <path d="M 0 180 A 180 180 0 0 1 -155.88 90 L 0 0 Z" fill="#A2B8D8" fillOpacity="0.4" />
//                     <path d="M -155.88 90 A 180 180 0 1 1 0 -180 L 0 0 Z" fill="#E8EEF6" fillOpacity="0.3" />

//                     {/* Center decoration */}
//                     <circle cx="0" cy="0" r="100" fill="#1C52A0" fillOpacity="0.3" />
//                     <circle cx="0" cy="0" r="80" fill="#F49611" fillOpacity="0.2" />
//                   </g>

//                   {/* Performance Chart */}
//                   <g transform="translate(100, 100)">
//                     {/* Bar chart showing fund performance */}
//                     <rect x="0" y="100" width="40" height="200" fill="#F49611" fillOpacity="0.8" rx="4" />
//                     <rect x="60" y="150" width="40" height="150" fill="#F49611" fillOpacity="0.6" rx="4" />
//                     <rect x="120" y="200" width="40" height="100" fill="#F49611" fillOpacity="0.4" rx="4" />
//                   </g>

//                   {/* Decorative Elements */}
//                   <g transform="translate(600, 100)">
//                     <circle cx="0" cy="0" r="40" fill="#F49611" fillOpacity="0.2" />
//                     <circle cx="60" cy="60" r="30" fill="#1C52A0" fillOpacity="0.2" />
//                     <circle cx="-60" cy="60" r="20" fill="#7B9BC8" fillOpacity="0.2" />
//                   </g>
//                 </svg>
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default EmeraldHero;