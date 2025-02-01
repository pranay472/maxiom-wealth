import React from "react";
import Header from "../../../Header";
import Footer from "../../../Footer";
import DiamondHero from "./DiamondHero";
import DiamondFeatures from "./DiamondFeatures";
import DiamondBenefits from "./DiamondBenefits";
import DiamondBottomline from "./DiamondBottomline";
import FAQ from "./FAQ";


const Diamond = () => {
    return (
        <div className="relative isolate">
      <Header/>
      <main className="relative">
        <div className="relative z-0">
          <DiamondHero/>
        </div>
        <div className="relative bg-white z-10">
          <DiamondFeatures/>
          <DiamondBenefits/>
          <DiamondBottomline/>
          <FAQ/>
        </div>
      </main>
      <div className="relative z-20">
        <Footer />
      </div>
    </div>
    );
};

export default Diamond;