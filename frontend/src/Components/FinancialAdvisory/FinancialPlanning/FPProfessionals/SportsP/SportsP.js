import React from "react";
import Header from "../../../../Header";
import Footer from "../../../../Footer";
import SportsPHero from "./SportsPHero";
import SportsPSolutions from "./SportsPSolutions";
import MainContent from "./MainContent";
import FAQ from "./FAQ";




const SportsP = () => {
    return (
      <div className="min-h-screen flex flex-col">
        <Header/>
        <main className="flex-grow">
            <SportsPHero/>
            <SportsPSolutions/>
            <MainContent/>
            <FAQ/>
        </main>
        <Footer/>
      </div>
    );
  };
  
  export default SportsP;