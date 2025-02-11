import React from 'react';
import Header from '../../../Header';
import Footer from '../../../Footer';
import FPPHero from './FPPHero';
import WhyFPP from './WhyFPP';
import WhyChooseFPP from './WhyChooseFPP';
import FPPTypes from './FPPTypes';
import FAQ from './FAQ';



const FPP = () => {
    return (
      <div className="min-h-screen flex flex-col">
        <Header/>
        <main className="flex-grow">
          <FPPHero/>
          <WhyFPP/>
          <WhyChooseFPP/>
          <FPPTypes/>
          <FAQ/>
        </main>
        <Footer/>
      </div>
    );
  };
  
  export default FPP;