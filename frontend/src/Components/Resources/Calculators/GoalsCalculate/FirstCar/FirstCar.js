import React from 'react';
import Header from '../../../../Header';
import Footer from '../../../../Footer';
import FirstCarCalculator from './FirstCarCalculator';

const FirstCarInfo = () => {
    return (
      <div className="px-4 py-12">
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Planning Your First Car Purchase</h2>
            <p className="text-gray-600 mb-4">
              Owning a car transforms daily life in meaningful ways. Beyond being a mode of transportation, 
              it provides independence, convenience, and flexibility in managing your daily schedule. Whether 
              it's commuting to work, handling daily tasks, or exploring new destinations, a personal vehicle 
              enhances your mobility and lifestyle quality.
            </p>
          </section>
  
          <section>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Essential Financial Planning Steps</h3>
            <p className="text-gray-600 mb-4">
              The journey to car ownership begins with understanding your financial capacity. Start by evaluating 
              your complete budget, including not just the purchase price but also ongoing expenses. Consider 
              insurance premiums, fuel costs, regular maintenance, and potential repairs when determining your 
              budget ceiling. This comprehensive approach ensures a sustainable financial commitment.
            </p>
            <p className="text-gray-600 mb-4">
              Explore various financing options available in the market. Research different loan providers, 
              compare interest rates, and understand the terms and conditions thoroughly before making a decision.
            </p>
          </section>
  
          <section>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Key Considerations for First-Time Buyers</h3>
            <ul className="list-disc pl-5 space-y-3 text-gray-600">
              <li>
                <span className="font-medium">Financial Assessment:</span> Evaluate your monthly budget capacity 
                and determine a comfortable down payment amount
              </li>
              <li>
                <span className="font-medium">Usage Pattern:</span> Define your primary vehicle requirements - 
                whether it's for daily commuting, family use, or occasional travel
              </li>
              <li>
                <span className="font-medium">Financial Strategy:</span> Review and compare different payment 
                options, from full payment to structured loan plans
              </li>
              <li>
                <span className="font-medium">Long-term Costs:</span> Factor in recurring expenses and 
                maintenance requirements for sustainable ownership
              </li>
            </ul>
          </section>
  
          <section>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Understanding Our Calculator</h3>
            <p className="text-gray-600 mb-4">
              Our First Car Calculator is designed to help you plan your investment strategy effectively. 
              By analyzing factors such as investment duration, monthly contribution capacity, and expected 
              returns, it provides a clear roadmap to achieve your car ownership goal.
            </p>
          </section>
  
          <section>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Calculator Benefits</h3>
            <p className="text-gray-600">
              This tool empowers you with practical insights for your car purchase journey. It helps you 
              understand the required investment amount, estimates the timeline based on market returns, 
              and enables you to adjust your savings strategy accordingly. With this information, you can 
              make well-informed decisions about your car purchase timeline and investment approach.
            </p>
          </section>
        </div>
      </div>
    );
  };

const FirstCar = () => {
  return (
    <>
      <Header/>
      <main className="overflow-x-hidden bg-gray-100">
        <div className="container mx-auto">
          <div className="relative z-20">
            <FirstCarCalculator />
            <FirstCarInfo/>
          </div>
        </div>
      </main>
      <Footer/>
    </>
  );
};

export default FirstCar;