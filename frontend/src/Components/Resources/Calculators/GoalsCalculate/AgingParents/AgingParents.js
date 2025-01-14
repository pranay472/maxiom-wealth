import React from "react";
import Header from "../../../../Header";
import Footer from "../../../../Footer";
import AgingParentsCalculator from "./AgingParentsCalculator";

const AgingParentsInfo = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Understanding Aging Parents' Investment Planning</h1>
      <div className="prose max-w-none mb-8">
        <p>Securing your elderly parents' financial well-being requires a thoughtful investment strategy that safeguards their retirement years. A well-structured aging parents' investment plan ensures they can maintain their lifestyle without financial stress while having access to necessary resources for their care and comfort.</p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Key Reasons for Creating an Aging Parents' Plan:</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>Provides financial security and peace of mind for both parents and children</li>
          <li>Helps manage and anticipate future healthcare and living expenses</li>
          <li>Ensures proper allocation of resources for long-term care needs</li>
          <li>Protects against unexpected financial challenges</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Essential Steps for Financial Planning:</h2>
        
        <div className="mb-4">
          <h3 className="text-xl font-medium mb-2">1. Financial Assessment</h3>
          <ul className="list-disc pl-6">
            <li>Review current income streams and asset portfolio</li>
            <li>Evaluate existing savings, investments, and retirement accounts</li>
            <li>Assess outstanding debts and financial obligations</li>
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-medium mb-2">2. Future Planning</h3>
          <ul className="list-disc pl-6">
            <li>Project retirement lifestyle costs</li>
            <li>Account for healthcare and medical expenses</li>
            <li>Consider inflation and cost-of-living adjustments</li>
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-medium mb-2">3. Investment Management</h3>
          <ul className="list-disc pl-6">
            <li>Create a balanced, low-risk investment portfolio</li>
            <li>Focus on steady income-generating investments</li>
            <li>Implement proper asset diversification strategies</li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Benefits of Investment Planning Tools:</h2>
        <p>Our aging parents' calculator helps determine optimal savings targets and investment strategies. It provides valuable insights for:</p>
        <ul className="list-disc pl-6">
          <li>Estimating required retirement savings</li>
          <li>Projecting future care costs</li>
          <li>Planning investment allocations</li>
          <li>Tracking financial progress</li>
        </ul>
      </div>
    </div>
  );
};

const AgingParents = () => {
  return (
    <>
      <Header/>
      <main className="overflow-x-hidden">
        <div className="relative z-20">
          <AgingParentsCalculator/>
          <AgingParentsInfo />
        </div>
      </main>
      <div className="relative z-20">
        <Footer />
      </div>
    </>
  );
};

export default AgingParents;