import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import HeroSection from './HeroSection';
import PortfolioForms from './PortfolioForms';
import InvestmentApproach from './InvestmentApproach';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection/>
        <PortfolioForms/>
        <InvestmentApproach/>
      </main>
      <Footer />
    </div>
  );
};

export default Home;