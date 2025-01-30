import React from 'react';
import Header from '../../Header';
import Footer from '../../Footer';
import HeroSection from './HeroSection';
import InvestmentCategories from './InvestmentCategories';
import PESections from './PESections';
import AdditionalSections from './AdditionalSections';


const PrivateEquity = () => {
    return (
      <div className="min-h-screen flex flex-col">
        <Header/>
        <main className="flex-grow">
            <HeroSection/>
            <InvestmentCategories/>
            <PESections/>
            <AdditionalSections/>
        </main>
        <Footer/>
      </div>
    );
  };
  
  export default PrivateEquity;