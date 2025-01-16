import React from 'react';
import Header from '../../Header';
import Footer from '../../Footer';
import CalculatorCard from './CalculatorCard';
import { calculatorData } from './calculatorData';

const Calculators = () => {
  return (
    <div>
      <Header />
      <div className="calculators-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 relative inline-block">
            Calculators
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-green-400 transform -translate-y-2"></span>
          </h1>
          <p className="text-lg text-gray-600">Try our free calculators to plan your investments</p>
        </div>
        
        <div className="space-y-8">
          <h2 className="text-2xl font-semibold text-gray-800">Investment Calculators</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {calculatorData.filter((calculator) => calculator.category === 'Investment').map((calculator) => (
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
        <div className="space-y-8 pt-24">
          <h2 className="text-2xl font-semibold text-gray-800">Children & Family Calculators</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {calculatorData.filter((calculator) => calculator.category === 'Family').map((calculator) => (
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
        <div className="space-y-8 pt-24">
          <h2 className="text-2xl font-semibold text-gray-800">Lifestyle and Goal Planning Calculators</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {calculatorData.filter((calculator) => calculator.category === 'Goals').map((calculator) => (
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
        <div className="space-y-8 pt-24">
          <h2 className="text-2xl font-semibold text-gray-800">Loan Calculators</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {calculatorData.filter((calculator) => calculator.category === 'Loan').map((calculator) => (
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
        <div className="space-y-8 pt-24">
          <h2 className="text-2xl font-semibold text-gray-800">Miscellaneous Calculators</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {calculatorData.filter((calculator) => calculator.category === 'Miscellaneous').map((calculator) => (
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
        <div className="space-y-8 pt-24">
          <h2 className="text-2xl font-semibold text-gray-800">Retirement Calculators</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {calculatorData.filter((calculator) => calculator.category === 'Retirement').map((calculator) => (
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
      </div>
      <Footer />
    </div>
  );
};

export default Calculators;