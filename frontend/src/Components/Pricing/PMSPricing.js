import React from 'react';
import { Check, HelpCircle } from 'lucide-react';
import Header from '../Header';
import Footer from '../Footer';
import PMSFAQ from './PMSFAQ';

const PMSPricing = () => {
  return (
    <>
      <Header />
      <div className="w-full max-w-6xl mx-auto p-6 bg-white">
        {/* Header Section */}
        <div className="text-center mb-12 pt-24">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Choose Your PMS Fee Structure</h2>
          <p className="text-gray-600">Select the portfolio management fee model that aligns with your investment goals</p>
        </div>

        <div className="grid grid-cols-4 gap-8">
          {/* Benefits Column */}
          <div className="border rounded-lg p-6 border-transparent">
            <h3 className="text-xl font-bold mb-2 text-blue-900">Benefits</h3>
            <div className="mb-6">
              <span className="text-3xl font-bold text-transparent">0</span>
              <span className="text-transparent">placeholder</span>
            </div>
            <div className="h-8 mb-8"></div>
            <div className="space-y-6">
              <div className="h-12">Fee structure</div>
              <div className="h-12">Management fee</div>
              <div className="h-12">Performance fee</div>
              <div className="h-12">Minimum investment</div>
              <div className="h-12 flex items-center">
                <span>Dedicated portfolio manager</span>
              </div>
              <div className="h-12 flex items-center">
                <span>Customized portfolio strategy</span>
              </div>
              <div className="h-12 flex items-center">
                <span>Monthly portfolio review</span>
              </div>
              <div className="h-12 flex items-center">
                <span>Risk management</span>
              </div>
              <div className="h-12 flex items-center">
                <span>Tax-efficient investing</span>
              </div>
              <div className="h-12 flex items-center">
                <span>Quarterly performance reports</span>
              </div>
              <div className="h-12 flex items-center">
                <span>Research insights access</span>
              </div>
              <div className="h-12 flex items-center">
                <span>Corporate action handling</span>
              </div>
              <div className="h-12 flex items-center">
                <span>Real-time portfolio tracking</span>
              </div>
            </div>
          </div>

          {/* Hybrid Plan */}
          <div className="border rounded-lg p-6 bg-blue-50 border-blue-200">
            <h3 className="text-xl font-bold mb-2 text-blue-900">Hybrid</h3>
            <div className="mb-6">
              <span className="text-3xl font-bold text-blue-900">1%</span>
              <span className="text-gray-600"> + performance fee</span>
            </div>
            <button className="w-full bg-blue-900 text-white py-2 px-4 rounded-md mb-8 hover:bg-blue-800 transition-colors">
              Choose Hybrid Plan
            </button>
            <div className="space-y-6">
              <div className="h-12 text-center">Combined fee structure</div>
              <div className="h-12 text-center">1% per annum</div>
              <div className="h-12 text-center">10% profits above hurdle rate</div>
              <div className="h-12 text-center">₹50 lakhs</div>
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
            <div className="mt-6 text-sm text-gray-600">
              Balanced approach with lower fixed fee plus performance incentive
            </div>
          </div>

          {/* Fixed Fee Plan */}
          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2 text-blue-900">Fixed Fee</h3>
            <div className="mb-6">
              <span className="text-3xl font-bold text-blue-900">2.25%</span>
              <span className="text-gray-600"> per annum</span>
            </div>
            <button className="w-full border border-blue-900 text-blue-900 py-2 px-4 rounded-md mb-8 hover:bg-blue-50 transition-colors">
              Choose Fixed Fee Plan
            </button>
            <div className="space-y-6">
              <div className="h-12 text-center">Fixed management fee</div>
              <div className="h-12 text-center">2.25% per annum</div>
              <div className="h-12 text-center">No performance fee</div>
              <div className="h-12 text-center">₹50 lakhs</div>
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
            <div className="mt-6 text-sm text-gray-600">
              Predictable fixed fee structure with no additional charges
            </div>
          </div>

          {/* Performance-Based Plan */}
          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2 text-blue-900">Performance-Based</h3>
            <div className="mb-6">
              <span className="text-3xl font-bold text-blue-900">0%</span>
              <span className="text-gray-600"> management fee</span>
            </div>
            <button className="w-full border border-blue-900 text-blue-900 py-2 px-2 rounded-md mb-8 hover:bg-blue-50 transition-colors">
              Choose Performance Plan
            </button>
            <div className="space-y-6">
              <div className="h-12 text-center">Pure performance-based</div>
              <div className="h-12 text-center">0% per annum</div>
              <div className="h-12 text-center">20% of profits above hurdle rate</div>
              <div className="h-12 text-center">₹50 lakhs</div>
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
            <div className="mt-6 text-sm text-gray-600">
              We earn only when you profit above the threshold
            </div>
          </div>
        </div>

        {/* Footer Notes */}
        <div className="mt-12 space-y-2 text-sm text-gray-600">
          <p className="flex items-center gap-2">
            <HelpCircle className="h-4 w-4 text-blue-600" />
            SEBI registered portfolio manager (INP000007881)
          </p>
          <p className="flex items-center gap-2">
            <HelpCircle className="h-4 w-4 text-blue-600" />
            Hurdle rate applies before performance fee calculation
          </p>
          <p className="flex items-center gap-2">
            <HelpCircle className="h-4 w-4 text-blue-600" />
            Minimum investment period recommended: 3 years
          </p>
        </div>
        <PMSFAQ/>
      </div>
      <Footer />
    </>
  );
};

export default PMSPricing;