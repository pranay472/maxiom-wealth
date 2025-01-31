import React from 'react';
import Header from '../../../Header';
import Footer from '../../../Footer';
import FIREPlanningHero from './FIREPlanningHero';
import FIREServices from './FIREServices';
import WhyChooseFIRESection from './WhyChooseFIRESection';
import MainContent from './MainContent';
import FAQ from './FAQ';


const FIREPlanning = () => {
    return (
      <div className="min-h-screen flex flex-col">
        <Header/>
        <main className="flex-grow">
            <FIREPlanningHero/>
            <WhyChooseFIRESection/>
            <FIREServices/>
            <MainContent/>
            <FAQ/>
        </main>
        <Footer/>
      </div>
    );
  };
  
  export default FIREPlanning;