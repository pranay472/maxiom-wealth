import React from "react";
import Header from "../../../../Header";
import Footer from "../../../../Footer";
import SIPCalculator from "./SIPCalculator";

const SimpleInterest = () => {
    return (
      <>
        <Header />
        <main className="overflow-x-hidden">
          <div className="relative z-20">
            <SIPCalculator/>
          </div>
        </main>
        <div className="relative z-20">
          <Footer />
        </div>
      </>
    );
  };
  
  export default SimpleInterest;