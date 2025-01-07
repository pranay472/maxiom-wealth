import React from "react";
import Footer from "../../../Footer";
import Header from "../../../Header";
import EmeraldHero from "./EmeraldHero";
import InvestmentStrategy from "./InvestmentStrategy";
import PortfolioComposition from "./PortfolioComposition";
import PerformanceDashboard from "./PerformanceDashboard";
import InvestorProfile from "./InvestorProfile";
import FAQComponent from "./FAQComponent";


const EMERALDE = () => {
    return (
        <div className="relative isolate">
      <Header/>
      <main className="relative">
        <div className="relative z-0">
          <EmeraldHero/>
        </div>
        <div className="relative bg-white z-10">
          <InvestmentStrategy/>
          <PortfolioComposition/>
          <PerformanceDashboard/>
          <InvestorProfile/>
          <FAQComponent/>
        </div>
      </main>
      <div className="relative z-20">
        <Footer />
      </div>
    </div>
    );
};

export default EMERALDE;