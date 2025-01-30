import React from 'react';
import Header from '../../Header';
import Footer from '../../Footer';
import FinancialPlanningHero from './FinancialPlanningHero';
import WhyFinancialPlanningSection from './WhyFinancialPlanningSection';
import WhyChooseFinancialPlanningSection from './WhyChooseFinancialPlanningSection';
import FAQ from './FAQ';
import FinancialPlanningTypesSection from './FinancialPlanningTypesSection';



const FinancialPlanning = () => {
    return (
      <div className="min-h-screen flex flex-col">
        <Header/>
        <main className="flex-grow">
          <FinancialPlanningHero/>
          <WhyFinancialPlanningSection/>
          <WhyChooseFinancialPlanningSection/>
          <FinancialPlanningTypesSection/>
          <FAQ/>
        </main>
        <Footer/>
      </div>
    );
  };
  
  export default FinancialPlanning;