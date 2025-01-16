import React from "react";
import Header from "../../../../Header";
import Footer from "../../../../Footer";
import WeddingBudgetCalculator from "./WeddingBudgetCalculator";

const WeddingBudget = () => {
  return (
    <>
      <Header/>
      <main className="overflow-x-hidden bg-gray-100">
        <div className="container mx-auto px-4 py-8">
          <div className="relative z-20">
            <WeddingBudgetCalculator/>
          </div>
          
          <div className="mt-12">
            <h1 className="text-3xl font-bold mb-6">Understanding Wedding Budget Planning</h1>
            <div className="prose max-w-none mb-8">
              <p>Planning a wedding budget is crucial for creating your dream celebration while maintaining financial stability. A well-structured wedding budget helps you prioritize expenses and make informed decisions about your special day.</p>
      
              <h2 className="text-2xl font-semibold mt-6 mb-4">Key Benefits of Wedding Budget Planning:</h2>
              <ul className="list-disc pl-6 mb-6">
                <li>Ensures your dream wedding stays financially manageable</li>
                <li>Helps prioritize spending on what matters most</li>
                <li>Reduces stress by providing clear financial guidelines</li>
                <li>Prevents unexpected costs and overspending</li>
              </ul>
      
              <h2 className="text-2xl font-semibold mb-4">Essential Steps for Wedding Budget Planning:</h2>
              
              <div className="mb-4">
                <h3 className="text-xl font-medium mb-2">1. Initial Planning</h3>
                <ul className="list-disc pl-6">
                  <li>Determine your total budget capacity</li>
                  <li>Estimate guest count and venue requirements</li>
                  <li>Set priorities for different aspects of the wedding</li>
                </ul>
              </div>
      
              <div className="mb-4">
                <h3 className="text-xl font-medium mb-2">2. Cost Breakdown</h3>
                <ul className="list-disc pl-6">
                  <li>Allocate budget for venue and catering</li>
                  <li>Plan for attire, decorations, and entertainment</li>
                  <li>Include photography, flowers, and other services</li>
                </ul>
              </div>
      
              <div className="mb-4">
                <h3 className="text-xl font-medium mb-2">3. Financial Strategy</h3>
                <ul className="list-disc pl-6">
                  <li>Create a savings timeline leading up to the wedding</li>
                  <li>Build an emergency buffer for unexpected expenses</li>
                  <li>Track expenses and adjust plans as needed</li>
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

export default WeddingBudget;