import React from "react";
import Header from "../../../../Header";
import Footer from "../../../../Footer";
import MIndiaHero from "./MIndiaHero";
import MIndiaSolutions from "./MIndiaSolutions";
import MainContent from "./MainContent";
import FAQ from "./FAQ";

const MigIndia = () => {
    return (
      <div className="min-h-screen flex flex-col">
        <Header/>
        <main className="flex-grow">
            <MIndiaHero/>
            <MIndiaSolutions/>
            <MainContent/>
            <FAQ/>
        </main>
        <Footer/>
      </div>
    );
  };
  
  export default MigIndia;