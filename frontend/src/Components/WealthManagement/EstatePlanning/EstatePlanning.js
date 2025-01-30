import React from 'react';
import Header from '../../Header';
import Footer from '../../Footer';
import HeroSection from './HeroSection';
import MainContent from './MainContent';
import FAQAndCTA from './FAQAndCTA';

const EstatePlanning = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header/>
      <main className="flex-grow">
        <HeroSection/>
        <MainContent/>
        <FAQAndCTA/>
      </main>
      <Footer/>
    </div>
  );
};

export default EstatePlanning;