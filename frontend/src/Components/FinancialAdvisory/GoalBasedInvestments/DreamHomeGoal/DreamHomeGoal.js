import React from 'react';
import Header from '../../../Header';
import Footer from '../../../Footer';
import DreamHomeHero from './DreamHomeHero';
import DreamHomeSolutions from './DreamHomeSolutions';
import MainContent from './MainContent';
import FAQ from './FAQ';



const DreamHomeGoal = () => {
    return (
      <div className="min-h-screen flex flex-col">
        <Header/>
        <main className="flex-grow">
            <DreamHomeHero/>
            <DreamHomeSolutions/>
            <MainContent/>
            <FAQ/>
        </main>
        <Footer/>
      </div>
    );
  };
  
  export default DreamHomeGoal;