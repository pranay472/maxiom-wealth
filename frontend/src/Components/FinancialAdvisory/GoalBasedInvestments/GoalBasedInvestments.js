import React from 'react';
import Header from '../../Header';
import Footer from '../../Footer';
import HeroSection from './HeroSection';
import WhyGoalSection from './WhyGoalSection';
import WhyChooseSection from './WhyChooseSection';
import GoalTypesSection from './GoalTypesSection';
import FAQ from './FAQ';



const GoalBasedInvestments = () => {
    return (
      <div className="min-h-screen flex flex-col">
        <Header/>
        <main className="flex-grow">
          <HeroSection/>
          <WhyGoalSection/>
          <WhyChooseSection/>
          <GoalTypesSection/>
          <FAQ/>
        </main>
        <Footer/>
      </div>
    );
  };
  
  export default GoalBasedInvestments;