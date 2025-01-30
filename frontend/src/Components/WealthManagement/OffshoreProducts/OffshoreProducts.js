import React from 'react';
import Header from '../../Header';
import Footer from '../../Footer';
import OffshoreProductsIntro from './OffshoreProductsIntro';
import MainSections from './MainSections';
import FinalSections from './FinalSections';


const OffshoreProducts = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header/>
      <main className="flex-grow">
       <OffshoreProductsIntro/>
       <MainSections/>
       <FinalSections/>
      </main>
      <Footer/>
    </div>
  );
};

export default OffshoreProducts;