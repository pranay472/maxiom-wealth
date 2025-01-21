import React, { useEffect } from 'react';
import WhyChooseUs from './WhyChooseUs';
import Header from '../Header';
import Footer from '../Footer';
import OurTeam from './OurTeam';
import OurJourney from './OurJourney';

const WhyMaxiom = () => {
  useEffect(() => {
    // Handle hash navigation when component mounts
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        // Extract just the fragment identifier part after the last #
        const fragmentId = hash.split('#').pop();
        if (fragmentId) {
          const element = document.getElementById(fragmentId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      }, 100);
    }
  }, []);

  return (
    <div className="why-maxiom-container">
      <Header/>
      <div className="why-maxiom-content">
        <div id="whyChooseUs">
          <WhyChooseUs />
        </div>
        <OurTeam/>
        <OurJourney/>
      </div>
      <Footer/>
    </div>
  );
};

export default WhyMaxiom;