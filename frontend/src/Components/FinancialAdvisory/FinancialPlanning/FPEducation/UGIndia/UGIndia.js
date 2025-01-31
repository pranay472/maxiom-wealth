import React from "react";
import Header from "../../../../Header";
import Footer from "../../../../Footer";
import UGIndiaHero from "./UGIndiaHero";
import UGIndiaSolutions from "./UGIndiaSolutions";
import MainContent from "./MainContent";
import FAQ from "./FAQ";


const UGIndia = () => {
    return (
      <div className="min-h-screen flex flex-col">
        <Header/>
        <main className="flex-grow">
            <UGIndiaHero/>
            <UGIndiaSolutions/>
            <MainContent/>
            <FAQ/>
        </main>
        <Footer/>
      </div>
    );
  };
  
  export default UGIndia;