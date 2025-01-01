import React, { useEffect } from 'react';
import WhyChooseUs from './WhyChooseUs';
import Header from '../Header';

const WhyMaxiom = () => {
  useEffect(() => {
    // Handle hash navigation when component mounts
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <div className="why-maxiom-container">
      <Header/>
      <div className="why-maxiom-content">
        <WhyChooseUs />
      </div>
    </div>
  );
};

export default WhyMaxiom;