import React, { useState } from 'react';
import Header from '../../Header';
import Footer from '../../Footer';
import CalculatorCard from './CalculatorCard';
import { calculatorData } from './calculatorData';
import { Search } from 'lucide-react';

const Calculators = () => {
  const [searchQuery, setSearchQuery] = useState('');

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
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#113262] mb-4 relative inline-block pt-24">
            Calculators
            <span className="absolute -bottom-2 left-1/2 w-3/5 h-[3px] bg-gradient-to-r from-transparent via-[#1C52A0] to-transparent -translate-x-1/2"></span>
          </h1>
          <p className="text-lg text-[#666666]">Try our free calculators to plan your investments</p>
        </div>

        {/* Premium Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Search calculators..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 bg-white border-2 border-[#E6E6E6] rounded-lg pl-14 pr-6 
                         text-lg text-[#262626] placeholder-[#8A8A8A]
                         focus:outline-none focus:ring-2 focus:ring-[#1C52A0] focus:border-transparent
                         transition-all duration-300"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-[#1C52A0]" />
          </div>
        </div>

        {Object.entries(groupedCalculators).map(([category, calculators]) => (
          calculators.length > 0 && (
            <div key={category} className="space-y-8 mb-12">
              <h2 className="text-2xl font-semibold text-[#113262]">
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