import React from "react";
import Header from "../../../../Header";
import Footer from "../../../../Footer";
import SingleMHero from "../SingleMother/SingleMHero";
import SingleMSolutions from "./SingleMSolutions";
import MainContent from "./MainContent";
import FAQ from "./FAQ";



const SingleMother = () => {
    return (
      <div className="min-h-screen flex flex-col">
        <Header/>
        <main className="flex-grow">
            <SingleMHero/>
            <SingleMSolutions/>
            <MainContent/>
            <FAQ/>
        </main>
        <Footer/>
      </div>
    );
  };
  
  export default SingleMother;