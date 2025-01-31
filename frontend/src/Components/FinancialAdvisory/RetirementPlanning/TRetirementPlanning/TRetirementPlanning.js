import React from 'react';
import Header from '../../../Header';
import Footer from '../../../Footer';
import RetirementPlanningHero from './RetirementPlanningHero';
import WhyChooseRetirementSection from './WhyChooseRetirementSection';
import RetirementServices from './RetirementServices';
import FAQ from './FAQ';
import MainContent from './MainContent';




const TRetirementPlanning = () => {
    return (
      <div className="min-h-screen flex flex-col">
        <Header/>
        <main className="flex-grow">
        <RetirementPlanningHero/>
        <WhyChooseRetirementSection/>
        <RetirementServices/>
        <MainContent/>
        <FAQ/>
        </main>
        <Footer/>
      </div>
    );
  };
  
  export default TRetirementPlanning;