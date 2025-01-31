import React from "react";
import Header from "../../../../Header";
import Footer from "../../../../Footer";
import DoctorsHero from "./DoctorsHero";
import DoctorsSolutions from "./DoctorsSolutions";
import MainContent from "./MainContent";
import FAQ from "./FAQ";




const Doctors = () => {
    return (
      <div className="min-h-screen flex flex-col">
        <Header/>
        <main className="flex-grow">
            <DoctorsHero/>
            <DoctorsSolutions/>
            <MainContent/>
            <FAQ/>
        </main>
        <Footer/>
      </div>
    );
  };
  
  export default Doctors;