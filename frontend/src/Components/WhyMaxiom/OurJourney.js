import React from 'react';
import '../../Styles/WhyMaxiomCss/OurJourney.css';

const OurJourney = () => {
  return (
    <div className="journey-container">
      <div className="journey-header">
        <h2>Our Journey</h2>
        <p>
          Maxiom Wealth founded with a vision to "To be India's most trusted and client-centric wealth advisory, helping people achieve financial independence & financial well-being, grow & preserve wealth."
        </p>
      </div>

      <div className="journey-image-container">
        <img src={require('./Journey.png')} alt="Our Journey Timeline" className="journey-image" />
      </div>
    </div>
  );
};

export default OurJourney;

// import '../../Styles/WhyMaxiomCss/OurJourney.css';