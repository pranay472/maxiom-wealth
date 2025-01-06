import React from "react";
import Footer from "../../Footer";
import Header from "../../Header";
import PMSHero from "./PMSHero";
import HighlightsReel from "./HighlightsReel";
import PerformanceChart from "./PerformanceChart";
import WhyPMSSection from "./WhyPMSSection";
import InvestmentPhilosophy from "./InvestmentPhilosophy";
import PMSDifference from "./PMSDifference";
import ComparisonTable from "./ComparisonTable";
import PMSFaqs from "./PMSFaqs";


const PMS = () => {
    return (
        <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <PMSHero/>
        <HighlightsReel/>
        <PerformanceChart/>
        <WhyPMSSection/>
        <InvestmentPhilosophy/>
        <PMSDifference/>
        <ComparisonTable/>
        <PMSFaqs/>
      </main>
      <Footer />
    </div>
    );
};

export default PMS;