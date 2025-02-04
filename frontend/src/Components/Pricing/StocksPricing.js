import React from 'react';
import { Check, Minus, HelpCircle } from 'lucide-react';
import Header from '../Header';
import Footer from '../Footer';
import StocksFAQ from './StocksFAQ';

const StocksPricing = () => {
  return (
    <>
      <Header />
      <div className="w-full max-w-6xl mx-auto p-6 bg-white">
        {/* Header Section */}
        <div className="text-center mb-12 pt-24">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Choose Your Stock Market Journey</h2>
          <p className="text-gray-600">Select the plan that fits your trading and investment style</p>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {/* Benefits Column */}
          <div className="pt-20">
            <h3 className="text-lg font-semibold mb-8 text-blue-900">Benefits</h3>
            <div className="space-y-6">
              <div className="h-12">Account type</div>
              <div className="h-12">Minimum investment</div>
              <div className="h-12">Trading platform access</div>
              <div className="h-12 flex items-center">
                <span>Stock recommendations</span>
              </div>
              <div className="h-12 flex items-center">
                <span>Portfolio construction guidance</span>
              </div>
              <div className="h-12 flex items-center">
                <span>Quarterly portfolio review</span>
              </div>
              <div className="h-12 flex items-center">
                <span>Stock monitoring alerts</span>
              </div>
              <div className="h-12 flex items-center">
                <span>Sector allocation strategy</span>
              </div>
              <div className="h-12 flex items-center">
                <span>Risk management consultation</span>
              </div>
              <div className="h-12 flex items-center">
                <span>Tax harvesting guidance</span>
              </div>
              <div className="h-12 flex items-center">
                <span>Research reports access</span>
              </div>
              <div className="h-12 flex items-center">
                <span>Technical analysis</span>
              </div>
              <div className="h-12 flex items-center">
                <span>Fundamental analysis</span>
              </div>
              <div className="h-12 flex items-center">
                <span>Market insights newsletter</span>
              </div>
            </div>
          </div>

          {/* Advisory Plan */}
          <div className="border rounded-lg p-6 bg-blue-50 border-blue-200">
            <h3 className="text-xl font-bold mb-2 text-blue-900">Advisory Plan</h3>
            <div className="mb-6">
              <span className="text-3xl font-bold text-blue-900">₹499</span>
              <span className="text-gray-600">/month</span>
            </div>
            <button className="w-full bg-blue-900 text-white py-2 px-4 rounded-md mb-8 hover:bg-blue-800 transition-colors">
              Start With Advisory
            </button>
            <div className="space-y-6">
              <div className="h-12 text-center">SEBI RIA guided investing</div>
              <div className="h-12 text-center">₹5,00,000</div>
              <div className="h-12 text-center">Advanced platform</div>
              <div className="h-12 flex items-center justify-center">
                <Check className="text-blue-600 h-5 w-5" />
              </div>
              <div className="h-12 flex items-center justify-center">
                <Check className="text-blue-600 h-5 w-5" />
              </div>
              <div className="h-12 flex items-center justify-center">
                <Check className="text-blue-600 h-5 w-5" />
              </div>
              <div className="h-12 flex items-center justify-center">
                <Check className="text-blue-600 h-5 w-5" />
              </div>
              <div className="h-12 flex items-center justify-center">
                <Check className="text-blue-600 h-5 w-5" />
              </div>
              <div className="h-12 flex items-center justify-center">
                <Check className="text-blue-600 h-5 w-5" />
              </div>
              <div className="h-12 flex items-center justify-center">
                <Check className="text-blue-600 h-5 w-5" />
              </div>
              <div className="h-12 flex items-center justify-center">
                <Check className="text-blue-600 h-5 w-5" />
              </div>
              <div className="h-12 flex items-center justify-center">
                <Check className="text-blue-600 h-5 w-5" />
              </div>
              <div className="h-12 flex items-center justify-center">
                <Check className="text-blue-600 h-5 w-5" />
              </div>
            </div>
            <div className="mt-6 text-sm text-blue-700">
              Professional guidance from SEBI registered investment advisor
            </div>
          </div>

          {/* Basic Plan */}
          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2 text-blue-900">Basic Plan</h3>
            <div className="mb-6">
              <span className="text-3xl font-bold text-blue-900">₹0</span>
              <span className="text-gray-600">/month</span>
            </div>
            <button className="w-full border border-blue-900 text-blue-900 py-2 px-4 rounded-md mb-8 hover:bg-blue-50 transition-colors">
              Start Basic Trading
            </button>
            <div className="space-y-6">
              <div className="h-12 text-center">Self-directed trading</div>
              <div className="h-12 text-center">₹0</div>
              <div className="h-12 text-center">Basic platform</div>
              <div className="h-12 flex items-center justify-center">
                <Minus className="text-gray-400 h-5 w-5" />
              </div>
              <div className="h-12 flex items-center justify-center">
                <Minus className="text-gray-400 h-5 w-5" />
              </div>
              <div className="h-12 flex items-center justify-center">
                <Minus className="text-gray-400 h-5 w-5" />
              </div>
              <div className="h-12 flex items-center justify-center">
                <Check className="text-blue-600 h-5 w-5" />
              </div>
              <div className="h-12 flex items-center justify-center">
                <Minus className="text-gray-400 h-5 w-5" />
              </div>
              <div className="h-12 flex items-center justify-center">
                <Minus className="text-gray-400 h-5 w-5" />
              </div>
              <div className="h-12 flex items-center justify-center">
                <Minus className="text-gray-400 h-5 w-5" />
              </div>
              <div className="h-12 flex items-center justify-center">
                <Minus className="text-gray-400 h-5 w-5" />
              </div>
              <div className="h-12 flex items-center justify-center">
                <Minus className="text-gray-400 h-5 w-5" />
              </div>
              <div className="h-12 flex items-center justify-center">
                <Check className="text-blue-600 h-5 w-5" />
              </div>
            </div>
            <div className="mt-6 text-sm text-gray-600">
              Zero-fee basic trading with essential market updates
            </div>
          </div>
        </div>

        {/* Footer Notes */}
        <div className="mt-12 space-y-2 text-sm text-gray-600">
          <p className="flex items-center gap-2">
            <HelpCircle className="h-4 w-4 text-blue-600" />
            SEBI registered investment advisor (INA200015583)
          </p>
          <p className="flex items-center gap-2">
            <HelpCircle className="h-4 w-4 text-blue-600" />
            Standard brokerage charges apply as per exchange guidelines
          </p>
          <p className="flex items-center gap-2">
            <HelpCircle className="h-4 w-4 text-blue-600" />
            Recommended investment horizon: Long-term wealth creation
          </p>
        </div>
        <StocksFAQ/>
      </div>
      <Footer />
    </>
  );
};

export default StocksPricing;