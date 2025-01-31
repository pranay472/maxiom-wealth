import React from 'react';
import Header from '../../../Header';
import Footer from '../../../Footer';
import HomeLoanHero from './HomeLoanHero';
import HomeLoanSolutions from './HomeLoanSolutions';
import MainContent from './MainContent';
import FAQ from './FAQ';

const HomeLoan = () => {
    return (
      <div className="min-h-screen flex flex-col">
        <Header/>
        <main className="flex-grow">
           <HomeLoanHero/>
           <HomeLoanSolutions/>
           <MainContent/>
           <FAQ/>
        </main>
        <Footer/>
      </div>
    );
  };
  
  export default HomeLoan;