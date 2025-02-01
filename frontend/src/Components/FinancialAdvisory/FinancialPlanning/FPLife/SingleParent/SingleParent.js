import React from "react";
import Header from "../../../../Header";
import Footer from "../../../../Footer";
import SinglePHero from "./SinglePHero";
import SinglePSolutions from "./SinglePSolutions";
import MainContent from "./MainContent";
import FAQ from "./FAQ";




const SingleParent = () => {
    return (
      <div className="min-h-screen flex flex-col">
        <Header/>
        <main className="flex-grow">
            <SinglePHero/>
            <SinglePSolutions/>
            <MainContent/>
            <FAQ/>
        </main>
        <Footer/>
      </div>
    );
  };
  
  export default SingleParent;