import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import PricingSection from './PricingSection';

const Pricing = () => {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <PricingSection/>
        </main>
        <Footer />
      </div>
    );
  };
  
  export default Pricing;