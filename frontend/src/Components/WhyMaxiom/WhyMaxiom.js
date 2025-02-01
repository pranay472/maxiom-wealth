import React, { useEffect } from 'react';
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
      <Header />
      <div className="why-maxiom-content space-y-24"> {/* Add vertical spacing between sections */}
        <div id="whyChooseUs">
          <WhyChooseUs />
        </div>
        <RootsWings />
        <LSG />
        <div className="mb-24"> {/* Add bottom margin to create separation */}
          <ThreeEye />
        </div>
        <div className="pt-12">
          <OurTeam />
        </div>
        <OurJourney />
        <ClientTestimonials/>
      </div>
      <Footer />
    </div>
  );
};

export default WhyMaxiom;