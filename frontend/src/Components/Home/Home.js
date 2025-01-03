import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import HeroSection from './HeroSection';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection/>
      </main>
      <Footer />
    </div>
  );
};

export default Home;