import React from 'react';
import Header from '../../../Header';
import Footer from '../../../Footer';
import FPLHero from './FPLHero';
import WhyFPL from './WhyFPL';
import WhyChooseFPL from './WhyChooseFPL';
import FPLTypes from './FPLTypes';
import FAQ from './FAQ';


const FPLife = () => {
    return (
      <div className="min-h-screen flex flex-col">
        <Header/>
        <main className="flex-grow">
          <FPLHero/>
          <WhyFPL/>
          <WhyChooseFPL/>
          <FPLTypes/>
          <FAQ/>
        </main>
        <Footer/>
      </div>
    );
  };
  
  export default FPLife;