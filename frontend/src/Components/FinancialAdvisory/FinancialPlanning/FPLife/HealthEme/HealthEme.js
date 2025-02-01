import React from "react";
import Header from "../../../../Header";
import Footer from "../../../../Footer";
import HealthHero from "./HealthHero";
import HealthSolutions from "./HealthSolutions";
import MainContent from "./MainContent";
import FAQ from "./FAQ";




const HealthEme = () => {
    return (
      <div className="min-h-screen flex flex-col">
        <Header/>
        <main className="flex-grow">
            <HealthHero/>
            <HealthSolutions/>
            <MainContent/>
            <FAQ/>
        </main>
        <Footer/>
      </div>
    );
  };
  
  export default HealthEme;