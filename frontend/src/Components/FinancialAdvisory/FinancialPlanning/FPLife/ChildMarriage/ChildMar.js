import React from "react";
import Header from "../../../../Header";
import Footer from "../../../../Footer";
import ChildMarHero from "./ChildMarHero";
import ChildMSolutions from "./ChildMSolutions";
import MainContent from "./MainContent";
import FAQ from "./FAQ";





const ChildMar = () => {
    return (
      <div className="min-h-screen flex flex-col">
        <Header/>
        <main className="flex-grow">
            <ChildMarHero/>
            <ChildMSolutions/>
            <MainContent/>
            <FAQ/>
        </main>
        <Footer/>
      </div>
    );
  };
  
  export default ChildMar;