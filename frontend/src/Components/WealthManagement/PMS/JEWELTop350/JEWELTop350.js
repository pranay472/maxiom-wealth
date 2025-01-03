import React from "react";
import Header from '../Header';
import Footer from '../Footer';
import Hero from "./Hero";
import TrustFactors from "./TrustFactor";
import Services from "./Services";
import FAQ from "./FAQ";

const JEWELTop350=()=>{
    return (
        <div className="JEWELTop350-container">
          <Header/>
          <div className="JEWELTop350-content">
            <Hero/>
            <TrustFactors/>
            <Services/>
            <FAQ/>
          </div>
          <Footer/>
        </div>
      );
}