import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../../Header';
import Footer from '../../Footer';
import CalculatorCard from './CalculatorCard';
import { calculatorData } from './calculatorData';
import { Search } from 'lucide-react';

const Calculators = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSection, setActiveSection] = useState(null);
  const sectionRefs = useRef({});

  // Debug logging function
  const debugLog = (message, data) => {
    console.log(`[Calculators Navigation Debug] ${message}`, data || '');
  };

  // Comprehensive hash extraction and mapping
  const extractAndNormalizeHash = useCallback(() => {
    debugLog('Extracting hash from location', { 
      pathname: location.pathname, 
      hash: location.hash, 
      search: location.search 
    });

    let rawHash = location.hash || window.location.hash;
    
    // Remove leading # and any preceding path
    rawHash = rawHash.replace(/^#\/resources\/calculators#/, '');
    rawHash = rawHash.replace(/^#/, '');
    
    // Mapping to handle potential mismatches
    const hashMap = {
      'personal-fin': 'personal-finance-calculators',
      'investment': 'investment-calculators',
      'family': 'family-calculators',
      'retirement': 'retirement-calculators',
      'educationcareer': 'education-career-calculators',
      'goals': 'goal-planning-calculators',
      'tax': 'tax-calculators',
      'incomeflow': 'income-cashflow-calculators',
      'trading': 'trading-calculators',
      'loan': 'loan-calculators',
      'miscellaneous': 'miscellaneous-calculators'
    };

    const normalizedHash = hashMap[rawHash.toLowerCase()] || rawHash;
    debugLog('Normalized hash', { rawHash, normalizedHash });
    return normalizedHash;
  }, [location]);

  // Scroll to section function with enhanced logging and error handling
  const scrollToSection = useCallback((sectionId) => {
    debugLog('Attempting to scroll to section', { 
      sectionId, 
      availableRefs: Object.keys(sectionRefs.current) 
    });

    const element = sectionRefs.current[sectionId];
    
    if (element) {
      const offset = 150;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      
      debugLog('Scrolling details', { 
        elementPosition, 
        offset, 
        windowScrollY: window.pageYOffset 
      });

      window.scrollTo({
        top: Math.max(0, elementPosition - offset),
        behavior: 'smooth'
      });

      // Update active section state
      setActiveSection(sectionId);
    } else {
      debugLog('Section element NOT FOUND', { 
        sectionId, 
        allRefs: Object.keys(sectionRefs.current) 
      });
    }
  }, []);

  // Navigation effect
  useEffect(() => {
    // Prevent default navigation behavior
    const handleLinkClick = (event) => {
      const href = event.target.getAttribute('href');
      if (href && href.startsWith('#')) {
        event.preventDefault();
        event.stopPropagation();

        // Update URL without page reload
        navigate(href, { replace: true });

        // Extract and scroll to section
        const sectionId = href.replace(/^#/, '');
        scrollToSection(sectionId);
      }
    };

    // Handle hash changes
    const handleHashChange = (event) => {
      debugLog('Hash change event', { 
        oldURL: event.oldURL, 
        newURL: event.newURL 
      });

      // Prevent default browser navigation
      event.preventDefault();
      
      const normalizedHash = extractAndNormalizeHash();
      if (normalizedHash) {
        scrollToSection(normalizedHash);
      }
    };

    // Add event listeners
    document.addEventListener('click', handleLinkClick, true);
    window.addEventListener('hashchange', handleHashChange, { passive: false });

    // Initial navigation
    const initialHash = extractAndNormalizeHash();
    if (initialHash) {
      // Use microtask to ensure refs are populated
      Promise.resolve().then(() => {
        debugLog('Performing initial scroll', { initialHash });
        scrollToSection(initialHash);
      });
    }

    // Cleanup
    return () => {
      document.removeEventListener('click', handleLinkClick, true);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [extractAndNormalizeHash, scrollToSection, navigate]);

  const filteredCalculators = calculatorData.filter(calculator => {
    const searchTerm = searchQuery.toLowerCase();
    return (
      calculator.title.toLowerCase().includes(searchTerm) ||
      calculator.description.toLowerCase().includes(searchTerm) ||
      calculator.category.toLowerCase().includes(searchTerm)
    );
  });

  const groupedCalculators = {
    Investment: filteredCalculators.filter(calc => calc.category === 'Investment'),
    'personal-fin': filteredCalculators.filter(calc => calc.category === 'personal-fin'),
    Family: filteredCalculators.filter(calc => calc.category === 'Family'),
    Retirement: filteredCalculators.filter(calc => calc.category === 'Retirement'),
    EducationCareer: filteredCalculators.filter(calc => calc.category === 'EducationCareer'),
    Goals: filteredCalculators.filter(calc => calc.category === 'Goals'),
    Tax: filteredCalculators.filter(calc => calc.category === 'Tax'),
    Incomeflow: filteredCalculators.filter(calc => calc.category === 'Incomeflow'),
    Trading: filteredCalculators.filter(calc => calc.category === 'Trading'),
    Loan: filteredCalculators.filter(calc => calc.category === 'Loan'),
    Miscellaneous: filteredCalculators.filter(calc => calc.category === 'Miscellaneous')
  };

  return (
    <div>
      <Header />
      <div className="calculators-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8 relative">
          <div className="absolute right-0 top-16 w-64">
            <input
              type="text"
              placeholder="Search calculators..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 pl-10 bg-white border-2 border-[#E6E6E6] rounded-lg 
                         text-sm text-[#262626] placeholder-[#8A8A8A]
                         focus:outline-none focus:ring-2 focus:ring-[#1C52A0] focus:border-transparent
                         transition-all duration-300"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#1C52A0]" />
          </div>
          <h1 className="text-4xl font-bold text-[#113262] mb-4 relative inline-block pt-24">
            Calculators
            <span className="absolute -bottom-2 left-1/2 w-3/5 h-[3px] bg-gradient-to-r from-transparent via-[#1C52A0] to-transparent -translate-x-1/2"></span>
          </h1>
          <p className="text-lg text-[#666666] mt-4">Try our free calculators to plan your investments</p>
        </div>

        {Object.entries(groupedCalculators).map(([category, calculators]) => (
          calculators.length > 0 && (
            <div key={category} className="space-y-8 mb-12">
              <h2 
                ref={el => {
                  const sectionId = 
                    category === 'personal-fin' ? 'personal-finance-calculators' : 
                    category === 'Family' ? 'family-calculators' : 
                    category === 'Retirement' ? 'retirement-calculators' : 
                    category === 'EducationCareer' ? 'education-career-calculators' : 
                    category === 'Goals' ? 'goal-planning-calculators' : 
                    category === 'Tax' ? 'tax-calculators' : 
                    category === 'Incomeflow' ? 'income-cashflow-calculators' : 
                    category === 'Trading' ? 'trading-calculators' : 
                    category === 'Loan' ? 'loan-calculators' : 
                    category === 'Miscellaneous' ? 'miscellaneous-calculators' : 
                    'investment-calculators';
                  
                  sectionRefs.current[sectionId] = el;
                }}
                id={
                  category === 'personal-fin' ? 'personal-finance-calculators' : 
                  category === 'Family' ? 'family-calculators' : 
                  category === 'Retirement' ? 'retirement-calculators' : 
                  category === 'EducationCareer' ? 'education-career-calculators' : 
                  category === 'Goals' ? 'goal-planning-calculators' : 
                  category === 'Tax' ? 'tax-calculators' : 
                  category === 'Incomeflow' ? 'income-cashflow-calculators' : 
                  category === 'Trading' ? 'trading-calculators' : 
                  category === 'Loan' ? 'loan-calculators' : 
                  category === 'Miscellaneous' ? 'miscellaneous-calculators' : 
                  'investment-calculators'
                }
                className={`text-2xl font-semibold ${
                  activeSection === 
                  (category === 'personal-fin' ? 'personal-finance-calculators' : 
                   category === 'Family' ? 'family-calculators' : 
                   category === 'Retirement' ? 'retirement-calculators' : 
                   category === 'EducationCareer' ? 'education-career-calculators' : 
                   category === 'Goals' ? 'goal-planning-calculators' : 
                   category === 'Tax' ? 'tax-calculators' : 
                   category === 'Incomeflow' ? 'income-cashflow-calculators' : 
                   category === 'Trading' ? 'trading-calculators' : 
                   category === 'Loan' ? 'loan-calculators' : 
                   category === 'Miscellaneous' ? 'miscellaneous-calculators' : 
                   'investment-calculators')
                  ? 'text-[#F49611]' : 'text-[#113262]'
                }`}
              >
                {category === 'personal-fin' ? 'Personal Finance Calculators' : 
                 category === 'Family' ? 'Children & Family Calculators' : 
                 category === 'Retirement' ? 'Retirement Calculators' : 
                 category === 'EducationCareer' ? 'Education and Career Calculators' : 
                 category === 'Goals' ? 'Lifestyle and Goal Planning Calculators' : 
                 category === 'Tax' ? 'Tax Calculators' : 
                 category === 'Incomeflow' ? 'Income & Cashflow Calculators' : 
                 category === 'Trading' ? 'Trading Calculators' : 
                 category === 'Loan' ? 'Loan Calculators' : 
                 category === 'Miscellaneous' ? 'Miscellaneous Calculators' : 
                 'Investment Calculators'}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {calculators.map((calculator) => (
                  <CalculatorCard
                    key={calculator.id}
                    title={calculator.title}
                    description={calculator.description}
                    Icon={calculator.Icon}
                    path={calculator.path}
                  />
                ))}
              </div>
            </div>
          )
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Calculators;