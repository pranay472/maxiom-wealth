import React from 'react';
import Header from '../../Header';
import Footer from '../../Footer';
import PrivateCreditSections from './PrivateCreditSections';
import InvestmentSections from './InvestmentSections';
import PrivateCreditFinalSections from './PrivateCreditFinalSections';



const PrivateCredit = () => {
    return (
      <div className="min-h-screen flex flex-col">
        <Header/>
        <main className="flex-grow">
            <PrivateCreditSections/>
            <InvestmentSections/>
            <PrivateCreditFinalSections/>
        </main>
        <Footer/>
      </div>
    );
  };
  
  export default PrivateCredit;