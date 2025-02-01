import React from "react";
import Header from "../../../../Header";
import Footer from "../../../../Footer";
import ChildBirthHero from "./ChildBirthHero";
import ChildBSolutions from "./ChildBSolutions";
import MainContent from "./MainContent";
import FAQ from "./FAQ";





const ChildBirth = () => {
    return (
      <div className="min-h-screen flex flex-col">
        <Header/>
        <main className="flex-grow">
            <ChildBirthHero/>
            <ChildBSolutions/>
            <MainContent/>
            <FAQ/>
        </main>
        <Footer/>
      </div>
    );
  };
  
  export default ChildBirth;