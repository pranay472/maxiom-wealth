import React from 'react';
import Header from '../../../Header';
import Footer from '../../../Footer';
import BusinessStartHero from './BusinessStartHero';
import BusinessStartSolutions from './BusinessStartSolutions';
import MainContent from './MainContent';
import FAQ from './FAQ';

const BusinessStartGoal = () => {
    return (
      <div className="min-h-screen flex flex-col">
        <Header/>
        <main className="flex-grow">
            <BusinessStartHero/>
            <BusinessStartSolutions/>
            <MainContent/>
            <FAQ/>
        </main>
        <Footer/>
      </div>
    );
  };
  
  export default BusinessStartGoal;