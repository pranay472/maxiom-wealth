import React from "react";
import Header from "../../../../Header";
import Footer from "../../../../Footer";
import ChildEducationCalculator from "./ChildEducationCalculator";

const ChildEducation = () => {
  return (
    <>
      <Header/>
      <main className="overflow-x-hidden bg-gray-100">
        <div className="container mx-auto px-4 py-8">
          <div className="relative z-20">
            <ChildEducationCalculator/>
          </div>
          
          <div className="mt-12">
            <h1 className="text-3xl font-bold mb-6">Understanding Child Education Planning</h1>
            <div className="prose max-w-none mb-8">
              <p>Planning for your child's education is one of the most important financial decisions you'll make. A well-structured education plan ensures your child has access to quality education without compromising on their dreams or your financial stability.</p>
      
              <h2 className="text-2xl font-semibold mt-6 mb-4">Key Benefits of Education Planning:</h2>
              <ul className="list-disc pl-6 mb-6">
                <li>Ensures financial readiness for your child's education</li>
                <li>Helps manage rising education costs through early planning</li>
                <li>Provides flexibility in choosing the best educational opportunities</li>
                <li>Protects educational goals from financial uncertainties</li>
              </ul>
      
              <h2 className="text-2xl font-semibold mb-4">Essential Steps for Education Planning:</h2>
              
              <div className="mb-4">
                <h3 className="text-xl font-medium mb-2">1. Goal Setting</h3>
                <ul className="list-disc pl-6">
                  <li>Identify potential education paths and institutions</li>
                  <li>Research current education costs and estimate future expenses</li>
                  <li>Set a realistic timeline for when funds will be needed</li>
                </ul>
              </div>
      
              <div className="mb-4">
                <h3 className="text-xl font-medium mb-2">2. Financial Planning</h3>
                <ul className="list-disc pl-6">
                  <li>Calculate total education costs including tuition and living expenses</li>
                  <li>Account for inflation in education costs</li>
                  <li>Consider various investment options and their returns</li>
                </ul>
              </div>
      
              <div className="mb-4">
                <h3 className="text-xl font-medium mb-2">3. Investment Strategy</h3>
                <ul className="list-disc pl-6">
                  <li>Create a balanced investment portfolio</li>
                  <li>Start early to benefit from compound growth</li>
                  <li>Regularly review and adjust your investment plan</li>
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

export default ChildEducation;