import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import WhyChooseUs from './WhyChooseUs';
import Header from '../Header';
import Footer from '../Footer';
import OurTeam from './OurTeam';
import RootsWings from './RootsWings';
import OurJourney from './OurJourney';
import LSG from './LSG';
import ThreeEye from './ThreeEye';
import ClientTestimonials from './ClientTestimonials';

const WhyMaxiom = () => {
  const location = useLocation();

  useEffect(() => {
    // Function to scroll to section
    const scrollToSection = () => {
      const hash = location.hash.replace('#', '');
      if (hash) {
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      }
    };

    // Call on mount and when location changes
    scrollToSection();

    // Listen for hash changes
    window.addEventListener('hashchange', scrollToSection);
    return () => window.removeEventListener('hashchange', scrollToSection);
  }, [location]);

  return (
    <div className="why-maxiom-container">
      <Header />
      <div className="why-maxiom-content space-y-24"> {/* Add vertical spacing between sections */}
        <div id="whyChooseUs">
          <WhyChooseUs />
        </div>
        <div id="rootsWings">
          <RootsWings />
        </div>
        <div id="lsg">
          <LSG />
        </div>
        <div id="threeEye" className="mb-24">
          <ThreeEye />
        </div>
        <div id="ourTeam" className="pt-12">
          <OurTeam />
        </div>
        <div id="ourJourney">
          <OurJourney />
        </div>
        <div id="clientTestimonials">
          <ClientTestimonials/>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WhyMaxiom;