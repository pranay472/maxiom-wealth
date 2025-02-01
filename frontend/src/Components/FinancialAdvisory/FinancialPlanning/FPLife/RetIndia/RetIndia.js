import React from "react";
import Header from "../../../../Header";
import Footer from "../../../../Footer";
import RetHero from "./RetHero";
import RetSolutions from "./RetSolutions";
import MainContent from "./MainContent";
import FAQ from "./FAQ";




const RetIndia = () => {
    return (
      <div className="min-h-screen flex flex-col">
        <Header/>
        <main className="flex-grow">
            <RetHero/>
            <RetSolutions/>
            <MainContent/>
            <FAQ/>
        </main>
        <Footer/>
      </div>
    );
  };
  
  export default RetIndia;