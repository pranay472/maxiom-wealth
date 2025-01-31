import React from 'react';
import Header from '../../Header';
import Footer from '../../Footer';
import RetirementHeroSection from './RetirementHeroSection';
import WhyRetirementSection from './WhyRetirementSection';
import WhyChooseRetirementSection from './WhyChooseRetirementSection';
import FAQ from './FAQ';
import RetirementTypesSection from './RetirementTypesSection';



const RetirementPlanning = () => {
    return (
      <div className="min-h-screen flex flex-col">
        <Header/>
        <main className="flex-grow">
            <RetirementHeroSection/>
            <WhyRetirementSection/>
            <WhyChooseRetirementSection/>
            <RetirementTypesSection/>
            <FAQ/>
        </main>
        <Footer/>
      </div>
    );
  };
  
  export default RetirementPlanning;