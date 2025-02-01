import React from "react";
import Header from "../../../../Header";
import Footer from "../../../../Footer";
import EntreHero from "./EntreHero";
import EntreSolutions from "./EntreSolutions";
import MainContent from "./MainContent";
import FAQ from "./FAQ";



const EntreP = () => {
    return (
      <div className="min-h-screen flex flex-col">
        <Header/>
        <main className="flex-grow">
            <EntreHero/>
            <EntreSolutions/>
            <MainContent/>
            <FAQ/>
        </main>
        <Footer/>
      </div>
    );
  };
  
  export default EntreP;