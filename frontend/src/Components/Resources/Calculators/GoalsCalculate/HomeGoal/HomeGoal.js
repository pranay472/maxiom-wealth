import React from 'react';
import Header from '../../../../Header';
import Footer from '../../../../Footer';
import HomeGoalCalculator from './HomeGoalCalculator';

const HomeGoalInfo = () => {
    return (
      <div className="px-4 py-12">
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Planning Your Dream Home Journey</h2>
            <p className="text-gray-600 mb-4">
              Owning a home is more than just a financial decision - it's about creating a space for your future. Smart planning 
              and systematic saving can turn this dream into reality. Understanding your needs, financial capacity, and market 
              conditions is crucial for making informed decisions.
            </p>
          </section>
  
          <section>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Essential Planning Steps</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-800">Budget Assessment</h4>
                <p className="text-gray-600">
                  Begin by evaluating your financial capacity, including current income, expenses, and potential for future earnings. 
                  Consider factors like location preferences, property type, and additional costs such as maintenance and taxes.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-800">Family Requirements</h4>
                <p className="text-gray-600">
                  Your home should accommodate both current and future needs. Consider aspects like number of bedrooms, 
                  proximity to schools or workplace, and community facilities that align with your lifestyle.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-800">Investment Planning</h4>
                <p className="text-gray-600">
                  Create a robust investment strategy using a mix of financial instruments. Regular investments in mutual funds, 
                  fixed deposits, and other vehicles can help accumulate the required corpus systematically.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-800">Progress Tracking</h4>
                <p className="text-gray-600">
                  Monitor your investments regularly and adjust your strategy based on market conditions and changing needs. 
                  Stay committed to your saving goals while maintaining flexibility in your approach.
                </p>
              </div>
            </div>
          </section>
  
          <section>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Documentation Checklist</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-800 mb-2">Personal Documents</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>Valid ID proof (Aadhaar/Passport)</li>
                  <li>PAN Card</li>
                  <li>Income proof (Salary slips, Form 16)</li>
                  <li>Bank statements (6 months)</li>
                  <li>Address proof</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 mb-2">Property Documents</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>Property ownership documents</li>
                  <li>NOC from housing society</li>
                  <li>Building approval plan</li>
                  <li>Property tax receipts</li>
                  <li>Occupancy certificate</li>
                </ul>
              </div>
            </div>
          </section>
  
          <section>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Calculator Features</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-800 mb-2">How It Works</h4>
                <p className="text-gray-600 mb-3">
                  Our calculator employs comprehensive financial modeling to help plan your home purchase effectively:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>Factors in property value appreciation</li>
                  <li>Considers inflation impact</li>
                  <li>Accounts for investment returns</li>
                  <li>Includes existing savings growth</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 mb-2">Key Benefits</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>Clear monthly saving targets</li>
                  <li>Multiple investment options</li>
                  <li>Real-time goal tracking</li>
                  <li>Adjustable parameters</li>
                  <li>Inflation-adjusted projections</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  };

const HomeGoal = () => {
  return (
    <>
      <Header />
      <main className="bg-[#F5F5F5] relative">
        <div className="container mx-auto">
          <div className="relative z-20">
            <HomeGoalCalculator />
            <HomeGoalInfo/>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default HomeGoal;