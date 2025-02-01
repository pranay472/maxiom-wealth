import React from "react";
import Header from "../../../../Header";
import Footer from "../../../../Footer";
import DisabilityHero from "./DisabilityHero";
import DisabilitySolutions from "./DisabilitySolutions";
import MainContent from "./MainContent";
import FAQ from "./FAQ";





const Disability = () => {
    return (
      <div className="min-h-screen flex flex-col">
        <Header/>
        <main className="flex-grow">
            <DisabilityHero/>
            <DisabilitySolutions/>
            <MainContent/>
            <FAQ/>
        </main>
        <Footer/>
      </div>
    );
  };
  
  export default Disability;