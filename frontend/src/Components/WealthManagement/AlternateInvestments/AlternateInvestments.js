import React from 'react';
import Header from '../../Header';
import Footer from '../../Footer';
import HeroSection from './HeroSection';
import MainContent from './MainContent';
import FAQSection from './FAQSection';


const AlternateInvestments = () => {
    return (
      <div className="min-h-screen flex flex-col">
        <Header/>
        <main className="flex-grow">
          <HeroSection/>
          <MainContent/>
          <FAQSection/>
        </main>
        <Footer/>
      </div>
    );
  };
  
  export default AlternateInvestments;