import React from 'react';
import Header from '../../../Header';
import Footer from '../../../Footer';
import FPEHero from './FPEHero';
import WhyFPE from './WhyFPE';
import WhyChooseFPE from './WhyChooseFPE';
import FPETypes from './FPETypes';
import FAQ from './FAQ';

const FPEducation = () => {
    return (
      <div className="min-h-screen flex flex-col">
        <Header/>
        <main className="flex-grow">
          <FPEHero/>
          <WhyFPE/>
          <WhyChooseFPE/>
          <FPETypes/>
          <FAQ/>
        </main>
        <Footer/>
      </div>
    );
  };
  
  export default FPEducation;