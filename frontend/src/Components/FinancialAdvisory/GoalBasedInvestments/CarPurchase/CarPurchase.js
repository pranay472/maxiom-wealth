import React from 'react';
import Header from '../../../Header';
import Footer from '../../../Footer';
import CarPurchaseHero from '../CarPurchaseHero';
import CarPurchaseSolutions from './CarPurchaseSolutions';
import MainContent from './MainContent';
import FAQ from './FAQ';



const CarPurchase = () => {
    return (
      <div className="min-h-screen flex flex-col">
        <Header/>
        <main className="flex-grow">
            <CarPurchaseHero/>
            <CarPurchaseSolutions/>
            <MainContent/>
            <FAQ/>
        </main>
        <Footer/>
      </div>
    );
  };
  
  export default CarPurchase;