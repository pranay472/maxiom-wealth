import React from 'react';
import { Check, Minus, HelpCircle } from 'lucide-react';
import Header from '../Header';
import Footer from '../Footer';
import MFPFAQ from './MFPFAQ';

const MutualFundsPricing = () => {
  return (
    <>
      <Header />
      <div className="w-full max-w-6xl mx-auto p-6 bg-white">
        {/* Header Section */}
        <div className="text-center mb-12 pt-24">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Choose Your Investment Journey</h2>
          <p className="text-gray-600">Select the plan that best suits your investment needs</p>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {/* Benefits Column */}
          <div className="pt-20">
            <h3 className="text-lg font-semibold mb-8 text-blue-900">Benefits</h3>
            <div className="space-y-6">
              <div className="h-12">Type of mutual funds</div>
              <div className="h-12">Minimum investment</div>
              <div className="h-12">Number of investors</div>
              <div className="h-12 flex items-center">
                <span>Unbiased fund recommendations</span>
              </div>
              <div className="h-12 flex items-center">
                <span>Personalized portfolio construction</span>
              </div>
              <div className="h-12 flex items-center">
                <span>Periodic portfolio review & rebalancing</span>
              </div>
              <div className="h-12 flex items-center">
                <span>Fund monitoring & exit alerts</span>
              </div>
              <div className="h-12 flex items-center">
                <span>Asset allocation strategy</span>
              </div>
              <div className="h-12 flex items-center">
                <span>Retirement planning</span>
              </div>
              <div className="h-12 flex items-center">
                <span>Tax optimization</span>
              </div>
              <div className="h-12 flex items-center">
                <span>Research reports access</span>
              </div>
              <div className="h-12 flex items-center">
                <span>Performance rank analysis</span>
              </div>
              <div className="h-12 flex items-center">
                <span>Credit quality assessment</span>
              </div>
              <div className="h-12 flex items-center">
                <span>Regular market insights</span>
              </div>
            </div>
          </div>

          {/* Direct Plan */}
          <div className="border rounded-lg p-6 bg-blue-50 border-blue-200">
            <h3 className="text-xl font-bold mb-2 text-blue-900">Direct Plan</h3>
            <div className="mb-6">
              <span className="text-3xl font-bold text-blue-900">₹299</span>
              <span className="text-gray-600">/month</span>
            </div>
            <button className="w-full bg-blue-900 text-white py-2 px-4 rounded-md mb-8 hover:bg-blue-800 transition-colors">
              Get Started with Direct
            </button>
            <div className="space-y-6">
              <div className="h-12 text-center">Direct mutual funds</div>
              <div className="h-12 text-center">₹50,00,000</div>
              <div className="h-12 text-center">Individual investors</div>
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
              Lower expense ratios for potentially higher returns
            </div>
          </div>

          {/* Regular Plan */}
          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2 text-blue-900">Regular Plan</h3>
            <div className="mb-6">
              <span className="text-3xl font-bold text-blue-900">₹0</span>
              <span className="text-gray-600">/month</span>
            </div>
            <button className="w-full border border-blue-900 text-blue-900 py-2 px-4 rounded-md mb-8 hover:bg-blue-50 transition-colors">
              Get Started with Regular
            </button>
            <div className="space-y-6">
              <div className="h-12 text-center">Regular mutual funds</div>
              <div className="h-12 text-center">₹50,00,000</div>
              <div className="h-12 text-center">Multiple investors</div>
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
                <Minus className="text-gray-400 h-5 w-5" />
              </div>
            </div>
            <div className="mt-6 text-sm text-gray-600">
              Commission-based model with no direct fees
            </div>
          </div>
        </div>

        {/* Footer Notes */}
        <div className="mt-12 space-y-2 text-sm text-gray-600">
          <p className="flex items-center gap-2">
            <HelpCircle className="h-4 w-4 text-blue-600" />
            Regular plan includes commission from mutual fund companies
          </p>
          <p className="flex items-center gap-2">
            <HelpCircle className="h-4 w-4 text-blue-600" />
            1% exit load may apply in the first year
          </p>
          <p className="flex items-center gap-2">
            <HelpCircle className="h-4 w-4 text-blue-600" />
            Investment horizon recommended: 3-5 years
          </p>
        </div>
        <MFPFAQ/>
      </div>
      <Footer />
    </>
  );
};

export default MutualFundsPricing;