import React from "react";
import Footer from "../../../Footer";
import Hero from "./Hero";
import SparkFeatures from "./SparkFeatures";
import SparkPMS from "./SparkPMS";
import FAQ from "./FAQ";
import Header from "../../../Header";

const Spark351 = () => {
  return (
    <div className="relative isolate">
      <Header/>
      <main className="relative">
        <div className="relative z-0">
          <Hero />
        </div>
        <div className="relative bg-white z-10">
          <SparkFeatures />
          <SparkPMS />
          <FAQ />
        </div>
      </main>
      <div className="relative z-20">
        <Footer />
      </div>
    </div>
  );
};

export default Spark351;