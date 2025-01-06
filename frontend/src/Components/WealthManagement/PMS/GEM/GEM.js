import React from "react";
import Header from "../../../Header";
import Footer from "../../../Footer";
import GEMHero from "./GEMHero";
import GEMFeatures from "./GEMFeatures";
import GEMServices from "./GEMServices";
import GEMBenefits from "./GEMBenefits";
import GEMBottomline from "./GEMBottomline";
import GEMFAQ from "./GEMFAQ";

const GEM = () => {
    return (
        <div className="relative isolate">
      <Header/>
      <main className="relative">
        <div className="relative z-0">
          <GEMHero/>
        </div>
        <div className="relative bg-white z-10">
          <GEMFeatures/>
          <GEMServices/>
          <GEMBenefits/>
          <GEMBottomline/>
          <GEMFAQ/>
        </div>
      </main>
      <div className="relative z-20">
        <Footer />
      </div>
    </div>
    );
};

export default GEM;