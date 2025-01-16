import React, { useState } from 'react';

const DropdownMenu = ({ items, onItemClick }) => {
  const [activeSubsection, setActiveSubsection] = useState(0);

  const handleSubsectionClick = (index, e) => {
    e.stopPropagation();
    setActiveSubsection(index);
  };

  const handleNestedItemClick = (item, e) => {
    e.stopPropagation();
    onItemClick && onItemClick(item);
  };

  return (
    <div className="fixed top-[80px] left-0 right-0 bottom-0 bg-gradient-to-b from-[#FFFFFF] to-[#E8EEF6] z-50 shadow-lg overflow-y-auto">
      <div className="flex h-full max-w-[1400px] mx-auto p-8">
        {/* First column for parallel subsections toggle menu */}
        <div className="w-1/3 border-r border-[#E6E6E6] pr-8 flex flex-col">
          <div className="flex flex-col space-y-2 mb-8">
            {items?.map((section, index) => (
              <button
                key={index}
                onClick={(e) => handleSubsectionClick(index, e)}
                className={`w-full text-left px-6 py-4 rounded-xl transition-all duration-300 ${
                  activeSubsection === index
                    ? 'bg-gradient-to-r from-[#113262] to-[#1C52A0] text-white shadow-md'
                    : 'hover:bg-[#E8EEF6] text-[#262626] hover:shadow-sm'
                }`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-lg">{section.title}</h3>
                  {section.subItems && (
                    <svg 
                      className={`w-5 h-5 transition-transform duration-300 ${
                        activeSubsection === index ? 'text-[#FAD49D] rotate-90' : 'text-[#8A8A8A]'
                      }`}
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  )}
                </div>
              </button>
            ))}
          </div>
          {/* Additional content area below toggle menu */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-[#E8EEF6] to-[#FFFFFF] border border-[#E6E6E6] min-h-[160px] flex flex-col justify-between">
            <div>
              <h4 className="text-[#113262] font-semibold text-lg mb-3">Need Help?</h4>
              <p className="text-[#545454] text-sm leading-relaxed mb-4">
                Our team is ready to assist you with any questions.
              </p>
            </div>
            <div className="flex items-center gap-2 text-[#1C52A0] hover:text-[#113262] transition-colors duration-300 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              <span className="text-sm font-medium whitespace-nowrap">Contact Support</span>
            </div>
          </div>
        </div>
        
        {/* Second and third columns for nested subsections */}
        <div className="w-2/3 pl-8 overflow-y-auto">
          {items[activeSubsection]?.subItems && (
            <div className="grid grid-cols-2 gap-6 pb-8">
              {items[activeSubsection].subItems.map((item, index) => (
                <div 
                  key={index}
                  onClick={(e) => handleNestedItemClick(item, e)}
                  className="group relative p-6 rounded-xl bg-white border border-[#E6E6E6] hover:border-[#1C52A0] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg cursor-pointer overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1C52A0] to-[#0A1E3A] opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                  <div className="relative">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-6 h-6 text-[#1C52A0] group-hover:text-[#113262] transition-colors duration-300">
                        {item.icon}
                      </div>
                      <h4 className="text-lg font-semibold text-[#113262] group-hover:text-[#0C131C] transition-colors duration-300">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-[#545454] text-sm leading-relaxed group-hover:text-[#262626] transition-colors duration-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;
