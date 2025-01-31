import React from "react";
import Header from "../../../../Header";
import Footer from "../../../../Footer";
import UGAbroadHero from "./UGAbroadHero";
import UGAbroadSolutions from "./UGAbroadSolutions";
import MainContent from "./MainContent";
import FAQ from "./FAQ";


const UGAbroad = () => {
    return (
      <div className="min-h-screen flex flex-col">
        <Header/>
        <main className="flex-grow">
            <UGAbroadHero/>
            <UGAbroadSolutions/>
            <MainContent/>
            <FAQ/>
        </main>
        <Footer/>
      </div>
    );
  };
  
  export default UGAbroad;