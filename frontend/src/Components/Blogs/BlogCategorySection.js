import React, { useState } from 'react';
import { TrendingUp, LineChart, Compass, Book, Newspaper, ArrowRight } from 'lucide-react';

const blogCategories = [
  {
    id: 'wealth-insights',
    title: 'Insights on Wealth Creation',
    icon: LineChart,
    description: 'Expert strategies on portfolio management, risk assessment, and wealth optimization techniques for long-term growth.',
    topics: '100+ Articles',
    focus: 'Wealth Building',
    accentColor: '#F49611'
  },
  {
    id: 'planning',
    title: 'Financial Planning Compass',
    icon: Compass,
    description: 'Comprehensive guides on retirement planning, education savings, and achieving your financial milestones.',
    topics: '75+ Articles',
    focus: 'Financial Goals',
    accentColor: '#113262'
  }
];

const BlogCategoryCard = ({ category }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { icon: Icon, title, description, topics, frequency, focus, id, accentColor } = category;

  const urlMap = {
    'trends': 'https://maxiomwealth.com/askguru/',
    'wealth-insights': 'https://maxiomwealth.com/blog/category/wealth-creation-portfolio-management-pms-investment-advisory/',
    'planning': 'https://maxiomwealth.com/blog/category/financial-planning-money-matters-investment-advisor/',
    'news': 'https://maxiomwealth.com/blog/category/investing-fundamentals-mutual-funds-guide/'
  };

  const handleRedirect = () => {
    window.location.href = urlMap[id];
  };
  
  return (
    <div 
      className="group relative cursor-pointer w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleRedirect}
    >
      {/* Card Background with animated gradient */}
      <div className="absolute inset-0 rounded-2xl transition-all duration-500 group-hover:scale-[1.02] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#113262] to-[#1C52A0]" />
        <div 
          className="absolute inset-0 bg-gradient-to-br from-transparent via-black/10 to-black/20 
          transition-opacity duration-500 opacity-0 group-hover:opacity-100" 
        />
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl">
        <div className="absolute top-0 right-0 w-32 h-32 transform translate-x-16 -translate-y-16">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent blur-xl" />
        </div>
        <div className="absolute bottom-0 left-0 w-48 h-48 transform -translate-x-24 translate-y-24">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tl from-white/5 to-transparent blur-xl" />
        </div>
      </div>
      
      {/* Card Content */}
      <div className="relative p-8 h-full flex flex-col">
        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-white/90 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-white/80 mb-6 flex-grow group-hover:text-white/70 transition-colors duration-300">
          {description}
        </p>

        {/* Metrics with hover effects */}
        <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-6 group-hover:border-white/20 transition-colors duration-300">
          <div>
            <div className="text-white/60 text-sm mb-1">Primary Focus</div>
            <div className="text-[#F49611] font-bold">{focus}</div>
          </div>
          <div>
            <div className="text-white/60 text-sm mb-1">Content Library</div>
            <div className="text-white font-semibold group-hover:text-[#F49611] transition-colors duration-300">
              {topics}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <button 
          onClick={(e) => {
            e.stopPropagation();
            handleRedirect();
          }}
          className="mt-6 w-full bg-white/10 hover:bg-white/20 text-white py-3 rounded-xl font-semibold 
            transition-all duration-300 flex items-center justify-center group/btn"
        >
          <span>Explore Articles</span>
          <ArrowRight className="ml-2 w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
        </button>
      </div>
    </div>
  );
};

const BlogCategorySection = () => {
  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 pt-12">
          <div className="inline-block">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-12 h-0.5 bg-[#F49611]"></div>
              <span className="text-[#F49611] font-medium uppercase tracking-wider">Knowledge Hub</span>
              <div className="w-12 h-0.5 bg-[#F49611]"></div>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#113262] mb-6">
            Explore Our Financial Insights
          </h2>
          <p className="text-xl text-gray-600">
            Discover comprehensive resources and expert insights across various financial domains 
            to enhance your investment knowledge and decision-making.
          </p>
        </div>

        {/* 2x2 Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {blogCategories.map((category) => (
            <BlogCategoryCard key={category.id} category={category} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <button className="group w-full max-w-md py-4 px-6 bg-gradient-to-r from-[#1C52A0] to-[#0A1E3A] 
            text-white text-lg font-medium rounded-lg hover:from-[#0A1E3A] hover:to-[#1C52A0] 
            transition-all duration-500 transform hover:scale-[1.02] relative overflow-hidden">
            <span className="relative z-10 flex items-center justify-center">
              Subscribe to Our Newsletter
              <ArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCategorySection;