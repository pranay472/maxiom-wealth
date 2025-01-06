import React from 'react';
import { BarChart2, Users, Clock, Trophy, LineChart, Wallet } from 'lucide-react';

const HighlightsReel = () => {
  const stats = [
    {
      icon: <Wallet className="w-5 h-5" />,
      value: "$1000+ M",
      label: "Wealth Under Management"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      value: "17+",
      label: "Years Of Experience"
    },
    {
      icon: <Users className="w-5 h-5" />,
      value: "100+",
      label: "Wealth Experts"
    },
    {
      icon: <BarChart2 className="w-5 h-5" />,
      value: "250+",
      label: "Stock Under Coverage"
    }
  ];

  return (
    <div className="w-full bg-[#113262] overflow-hidden py-4">
      <div className="relative flex overflow-x-hidden">
        {/* Base scroll track */}
        <div className="flex animate-scroll whitespace-nowrap">
          {[...Array(8)].map((_, i) => (
            stats.map((stat, index) => (
              <div 
                key={`${i}-${index}`} 
                className="inline-flex items-center"
              >
                <div className="flex items-center gap-2 px-3">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1C52A0]">
                    <div className="text-[#F49611]">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="whitespace-nowrap">
                    <div className="text-white text-sm font-semibold">
                      {stat.value}
                    </div>
                    <div className="text-gray-300 text-xs">
                      {stat.label}
                    </div>
                  </div>
                </div>
                <div className="w-4 h-[1px] bg-gradient-to-r from-[#1C52A0] to-[#F49611]/20" />
              </div>
            ))
          ))}
        </div>

        {/* Clone for seamless loop */}
        <div className="flex animate-scroll whitespace-nowrap" aria-hidden="true">
          {[...Array(8)].map((_, i) => (
            stats.map((stat, index) => (
              <div 
                key={`clone-${i}-${index}`} 
                className="inline-flex items-center"
              >
                <div className="flex items-center gap-2 px-3">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1C52A0]">
                    <div className="text-[#F49611]">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="whitespace-nowrap">
                    <div className="text-white text-sm font-semibold">
                      {stat.value}
                    </div>
                    <div className="text-gray-300 text-xs">
                      {stat.label}
                    </div>
                  </div>
                </div>
                <div className="w-4 h-[1px] bg-gradient-to-r from-[#1C52A0] to-[#F49611]/20" />
              </div>
            ))
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
        }

        /* Ensure smooth animation */
        @media (prefers-reduced-motion: no-preference) {
          .animate-scroll {
            will-change: transform;
          }
        }
      `}</style>
    </div>
  );
};

export default HighlightsReel;