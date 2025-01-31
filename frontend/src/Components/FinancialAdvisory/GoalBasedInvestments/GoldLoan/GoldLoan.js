import React from 'react';
import Header from '../../../Header';
import Footer from '../../../Footer';
import GoldLoanHero from './GoldLoanHero';
import GoldLoanSolutions from './GoldLoanSolutions';
import MainContent from './MainContent';
import FAQ from './FAQ';


const GoldLoan = () => {
    return (
      <div className="min-h-screen flex flex-col">
        <Header/>
        <main className="flex-grow">
            <GoldLoanHero/>
            <GoldLoanSolutions/>
            <MainContent/>
            <FAQ/>
        </main>
        <Footer/>
      </div>
    );
  };
  
  export default GoldLoan;