import React from "react";
import Header from "../../../../Header";
import Footer from "../../../../Footer";
import DeathIncHero from "./DeathIncHero";
import DeathIncSolutions from "./DeathIncSolutions";
import MainContent from "./MainContent";
import FAQ from "./FAQ";





const DeathIncomeEarner = () => {
    return (
      <div className="min-h-screen flex flex-col">
        <Header/>
        <main className="flex-grow">
            <DeathIncHero/>
            <DeathIncSolutions/>
            <MainContent/>
            <FAQ/>
        </main>
        <Footer/>
      </div>
    );
  };
  
  export default DeathIncomeEarner;