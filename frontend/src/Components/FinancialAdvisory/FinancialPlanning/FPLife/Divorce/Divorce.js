import React from "react";
import Header from "../../../../Header";
import Footer from "../../../../Footer";
import DivorceHero from "./DivorceHero";
import DivorceSolutions from "./DivorceSolutions";
import MainContent from "./MainContent";
import FAQ from "./FAQ";




const Divorce = () => {
    return (
      <div className="min-h-screen flex flex-col">
        <Header/>
        <main className="flex-grow">
            <DivorceHero/>
            <DivorceSolutions/>
            <MainContent/>
            <FAQ/>
        </main>
        <Footer/>
      </div>
    );
  };
  
  export default Divorce;