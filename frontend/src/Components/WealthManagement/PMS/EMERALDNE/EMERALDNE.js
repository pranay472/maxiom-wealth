import React from "react";
import Footer from "../../../Footer";
import Header from "../../../Header";
import EmeraldNEHero from "./EmeraldNEHero";
import InvestmentStrategy from "./InvestmentStrategy";
import PortfolioStructure from "./PortfolioStructure";
import PerformanceMetrics from "./PerformanceMetrics";
import InvestorProfile from "./InvestorProfile";
import FAQInformation from "./FAQInformation";



const EMERALDNE = () => {
    return (
      <>
        <Header/>
        <main className="overflow-x-hidden">
          <div className="relative z-20">
            <EmeraldNEHero/>
          </div>
          <div className="relative bg-white z-10">
            <InvestmentStrategy/>
            <PortfolioStructure/>
            <PerformanceMetrics/>
            <InvestorProfile/>
            <FAQInformation/>
          </div>
        </main>
        <div className="relative z-20">
          <Footer />
        </div>
      </>
    );
};

export default EMERALDNE;