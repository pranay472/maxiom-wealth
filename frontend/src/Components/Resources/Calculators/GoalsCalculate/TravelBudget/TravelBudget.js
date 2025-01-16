import React from "react";
import Header from "../../../../Header";
import Footer from "../../../../Footer";
import TravelBudgetCalculator from "./TravelBudgetCalculator";

const TravelBudget = () => {
  return (
    <>
      <Header/>
      <main className="overflow-x-hidden bg-gray-100">
        <div className="container mx-auto px-4 py-8">
          <div className="relative z-20">
            <TravelBudgetCalculator/>
          </div>
          
          <div className="mt-12">
            <h1 className="text-3xl font-bold mb-6">Understanding Travel Budget Planning</h1>
            <div className="prose max-w-none mb-8">
              <p>Planning your travel budget is essential for a stress-free and enjoyable vacation. A well-structured travel budget ensures you can make the most of your trip without worrying about overspending or compromising on experiences.</p>
      
              <h2 className="text-2xl font-semibold mt-6 mb-4">Key Benefits of Travel Budget Planning:</h2>
              <ul className="list-disc pl-6 mb-6">
                <li>Ensures financial preparedness for your dream vacation</li>
                <li>Helps manage travel expenses through proper planning</li>
                <li>Provides flexibility in choosing activities and accommodations</li>
                <li>Protects against unexpected travel costs and emergencies</li>
              </ul>
      
              <h2 className="text-2xl font-semibold mb-4">Essential Steps for Travel Budget Planning:</h2>
              
              <div className="mb-4">
                <h3 className="text-xl font-medium mb-2">1. Destination Planning</h3>
                <ul className="list-disc pl-6">
                  <li>Research potential destinations and best times to visit</li>
                  <li>Estimate costs for flights, accommodations, and activities</li>
                  <li>Set realistic travel dates and duration</li>
                </ul>
              </div>
      
              <div className="mb-4">
                <h3 className="text-xl font-medium mb-2">2. Cost Breakdown</h3>
                <ul className="list-disc pl-6">
                  <li>Calculate transportation costs including flights and local travel</li>
                  <li>Account for accommodation expenses</li>
                  <li>Budget for food, activities, and shopping</li>
                </ul>
              </div>
      
              <div className="mb-4">
                <h3 className="text-xl font-medium mb-2">3. Saving Strategy</h3>
                <ul className="list-disc pl-6">
                  <li>Create a monthly savings plan</li>
                  <li>Start saving early to avoid financial strain</li>
                  <li>Consider travel insurance and emergency funds</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default TravelBudget;