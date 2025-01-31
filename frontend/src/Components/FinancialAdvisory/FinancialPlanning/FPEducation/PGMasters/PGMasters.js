import React from "react";
import Header from "../../../../Header";
import Footer from "../../../../Footer";
import PGMastersHero from "./PGMastersHero";
import PGMastersSolutions from "./PGMastersSolutions";
import MainContent from "./MainContent";
import FAQ from "./FAQ";


const PGMasters = () => {
    return (
      <div className="min-h-screen flex flex-col">
        <Header/>
        <main className="flex-grow">
            <PGMastersHero/>
            <PGMastersSolutions/>
            <MainContent/>
            <FAQ/>
        </main>
        <Footer/>
      </div>
    );
  };
  
  export default PGMasters;