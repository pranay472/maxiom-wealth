import React from 'react';
import { Circle } from 'lucide-react';
import '../../Styles/WhyMaxiomCss/OurJourney.css';

const OurJourney = () => {
  const milestones = [
    {
      year: '2016',
      events: ['Obtained our first SEBI RIA registration.']
    },
    {
      year: '2017',
      events: [
        'Investment App launched',
        'Reached the first milestone of 25,000 users on our investment advisory platform',
        'Started Equity advisory service'
      ]
    },
    {
      year: '2018',
      events: [
        "Soft launched equity research service, 'JEWEL' focused on top 350 companies by market cap."
      ]
    },
    {
      year: '2019',
      events: [
        'Launched Equity advisory portfolio with our investment philosophy "Roots & Wings, powered by Machines".'
      ]
    },
    {
      year: '2020',
      events: [
        'Obtained our Corporate RIA registration',
        'Certified as per ISO9001 and ISO270001 standards'
      ]
    },
    {
      year: '2021',
      events: [
        "Launched 'Spark' strategy which expands equity portfolio coverage to top 1000 companies"
      ]
    }
  ];

  return (
    <div className="journey-container">
      <div className="journey-header">
        <h2>Our Journey</h2>
        <p>
          Maxiom Wealth founded with a vision to "To be India's most trusted and client-centric wealth advisory, helping people achieve financial independence & financial well-being, grow & preserve wealth."
        </p>
      </div>

      <div className="timeline-wrapper">
        <div className="curved-line"></div>
        {milestones.map((milestone, index) => (
          <div 
            key={milestone.year} 
            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
            style={{ '--index': index }}
          >
            <div className="timeline-year-container">
              <div className="year-bubble">
                <span className="year-text">{milestone.year}</span>
              </div>
              <div className="timeline-dot">
                <Circle className="timeline-icon" />
              </div>
            </div>
            <div className="timeline-content">
              <div className="content-card">
                <ul>
                  {milestone.events.map((event, eventIndex) => (
                    <li key={eventIndex}>{event}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurJourney;


// import '../../Styles/WhyMaxiomCss/OurJourney.css';