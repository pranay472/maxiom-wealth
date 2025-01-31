import React from 'react';
import Header from '../../Header';
import Footer from '../../Footer';
import CorporateWellnessHero from './CorporateWellnessHero';
import WhyPrioritizeWellnessSection from './WhyPrioritizeWellnessSection';
import CorporateWellnessSolutions from './CorporateWellnessSolutions';
import MainContent from './MainContent';
import FAQ from './FAQ';




const CorporateFinancialWellness = () => {
    return (
      <div className="min-h-screen flex flex-col">
        <Header/>
        <main className="flex-grow">
        <CorporateWellnessHero/>
        <WhyPrioritizeWellnessSection/>
        <CorporateWellnessSolutions/>
        <MainContent/>
        <FAQ/>
        </main>
        <Footer/>
      </div>
    );
  };
  
  export default CorporateFinancialWellness;