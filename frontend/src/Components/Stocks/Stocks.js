import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import HeroSection from './HeroSection';
import StocksInvestmentPhilosophy from './StocksInvestmentPhilosophy';
import StockFeatures from './StockFeatures';
import FAQSection from './FAQSection';

const Stocks = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection/>
        <StocksInvestmentPhilosophy/>
        <StockFeatures/>
        <FAQSection/>
      </main>
      <Footer />
    </div>
  );
};

export default Stocks;