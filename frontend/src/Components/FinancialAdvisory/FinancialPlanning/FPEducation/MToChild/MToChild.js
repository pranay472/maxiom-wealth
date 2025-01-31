import React from "react";
import Header from "../../../../Header";
import Footer from "../../../../Footer";
import MToChildHero from "./MToChildHero";
import MToSolutions from "./MToSolutions";
import MainContent from "./MainContent";
import FAQ from "./FAQ";



const MToChild = () => {
    return (
      <div className="min-h-screen flex flex-col">
        <Header/>
        <main className="flex-grow">
            <MToChildHero/>
            <MToSolutions/>
            <MainContent/>
            <FAQ/>
        </main>
        <Footer/>
      </div>
    );
  };
  
  export default MToChild;