import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import HeroSection from './HeroSection';
import PortfolioForms from './PortfolioForms';
import InvestmentApproach from './InvestmentApproach';
import PortfolioAnalysis from './PortfolioAnalysis';
import PortfolioXray from './PortfolioXray';
import GoalBasedInvestment from './GoalBasedInvestment';
import Testimonials from './Testimonials';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection/>
        <PortfolioForms/>
        <InvestmentApproach/>
        <PortfolioAnalysis/>
        <PortfolioXray/>
        <GoalBasedInvestment/>
        <Testimonials/>
      </main>
      <Footer />
    </div>
  );
};

export default Home;