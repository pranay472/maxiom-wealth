import React from "react";
import Header from "../../../../Header";
import Footer from "../../../../Footer";
import RBEmpHero from "./RBEmpHero";
import RBESolutions from "./RBESolutions";
import MainContent from "./MainContent";
import FAQ from "./FAQ";



const RBEmp = () => {
    return (
      <div className="min-h-screen flex flex-col">
        <Header/>
        <main className="flex-grow">
            <RBEmpHero/>
            <RBESolutions/>
            <MainContent/>
            <FAQ/>
        </main>
        <Footer/>
      </div>
    );
  };
  
  export default RBEmp;