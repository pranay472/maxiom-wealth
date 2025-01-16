import React from "react";
import Header from "../../../../Header";
import Footer from "../../../../Footer";
import HomeRenovationCalculator from "./HomeRenovationCalculator";

const HomeRenovation = () => {
  return (
    <>
      <Header/>
      <main className="overflow-x-hidden bg-gray-100">
        <div className="container mx-auto px-4 py-8">
          <div className="relative z-20">
            <HomeRenovationCalculator/>
          </div>
          
          <div className="mt-12">
            <h1 className="text-3xl font-bold mb-6">Understanding Home Renovation Planning</h1>
            <div className="prose max-w-none mb-8">
              <p>Planning a home renovation project requires careful budgeting and consideration of various factors. A well-structured renovation budget helps you transform your living space while maintaining financial control and ensuring quality results.</p>
      
              <h2 className="text-2xl font-semibold mt-6 mb-4">Key Benefits of Renovation Planning:</h2>
              <ul className="list-disc pl-6 mb-6">
                <li>Ensures realistic cost expectations for your renovation project</li>
                <li>Helps prioritize improvements based on budget constraints</li>
                <li>Prevents cost overruns and unexpected expenses</li>
                <li>Maximizes return on investment for home improvements</li>
              </ul>
      
              <h2 className="text-2xl font-semibold mb-4">Essential Steps for Renovation Planning:</h2>
              
              <div className="mb-4">
                <h3 className="text-xl font-medium mb-2">1. Project Assessment</h3>
                <ul className="list-disc pl-6">
                  <li>Evaluate the scope of renovation needed</li>
                  <li>Identify priority areas for improvement</li>
                  <li>Consider structural requirements and permissions</li>
                </ul>
              </div>
      
              <div className="mb-4">
                <h3 className="text-xl font-medium mb-2">2. Cost Estimation</h3>
                <ul className="list-disc pl-6">
                  <li>Research material and labor costs</li>
                  <li>Get multiple contractor quotes</li>
                  <li>Include permits and inspection fees</li>
                </ul>
              </div>
      
              <div className="mb-4">
                <h3 className="text-xl font-medium mb-2">3. Financial Planning</h3>
                <ul className="list-disc pl-6">
                  <li>Set aside contingency funds for unexpected issues</li>
                  <li>Consider financing options if needed</li>
                  <li>Plan for temporary accommodation if required</li>
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

export default HomeRenovation;