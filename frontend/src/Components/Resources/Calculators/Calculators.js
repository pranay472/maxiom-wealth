import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Header from '../../Header';
import Footer from '../../Footer';
import CalculatorCard from './CalculatorCard';
import { calculatorData } from './calculatorData';
import { Search } from 'lucide-react';

const Calculators = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { section } = useParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSection, setActiveSection] = useState(null);
  const sectionRefs = useRef({});

  // Debug logging function
  const debugLog = (message, data) => {
    console.log(`[Calculators Navigation Debug] ${message}`, data || '');
  };

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
    debugLog('Navigation effect triggered', { section, hash: location.hash });

    // Function to determine target section
    const getTargetSection = () => {
      // First try URL parameter
      if (section) {
        debugLog('Using section from URL params', { section });
        return section;
      }
      // Then try hash (for backward compatibility)
      if (location.hash) {
        const hashSection = location.hash.replace('#', '');
        debugLog('Using section from hash', { hashSection });
        return hashSection;
      }
      // Default to investment section if no section specified
      debugLog('Using default section');
      return 'investment-calculators';
    };

    // Handle navigation with delay to ensure refs are ready
    const handleNavigation = () => {
      const targetSection = getTargetSection();
      if (targetSection) {
        // Small delay to ensure DOM is ready
        setTimeout(() => {
          debugLog('Navigating to section', { targetSection });
          scrollToSection(targetSection);
        }, 100);
      }
    };

    // Initial navigation
    handleNavigation();

    // Listen for hash changes (for backward compatibility)
    window.addEventListener('hashchange', handleNavigation);
    return () => window.removeEventListener('hashchange', handleNavigation);
  }, [location, section, scrollToSection]);

  // Function to handle section navigation
  const handleSectionClick = useCallback((sectionId) => {
    debugLog('Section clicked', { sectionId });
    
    // Update URL to reflect new section
    navigate(`/resources/calculators/${sectionId}`);
    
    // Scroll to section with a small delay
    setTimeout(() => {
      scrollToSection(sectionId);
    }, 50);
  }, [navigate, scrollToSection]);

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
                onClick={() => handleSectionClick(
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
                )}
                style={{ cursor: 'pointer' }}
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
                } hover:text-[#F49611] transition-colors duration-300`}
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