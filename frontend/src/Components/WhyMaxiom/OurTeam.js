import React from 'react';
import { Trophy, Briefcase, GraduationCap, Mail, Link } from 'lucide-react';
import '../../Styles/WhyMaxiomCss/OurTeam.css';

const OurTeam = () => {
    return (
      <div className="team-container">
        <div className="team-header">
          <h2 className="team-title">Our Team</h2>
          <h3 className="team-subtitle">Founders</h3>
        </div>
        
        <div className="team-grid">
          {/* Ram Kalyan Medury */}
          <div className="team-card">
            <div className="team-member">
              <div className="member-photo-container">
                <div className="member-photo-wrapper">
                  <img 
                    src="https://jama-wp.s3.ap-south-1.amazonaws.com/about-us/ram-kalyan-medury.jpeg"
                    alt="Ram Kalyan Medury"
                    className="member-photo"
                  />
                </div>
              </div>
              
              <div className="member-details">
                <div className="member-header">
                  <h3 className="member-name">Ram Kalyan Medury</h3>
                  <p className="member-position">Founder-CEO</p>
                </div>
                
                <div className="member-info">
                  <div className="info-item">
                    <div className="info-icon">
                      <span>💼</span>
                    </div>
                    <div className="info-content">
                      <h4>25+ Years Experience</h4>
                      <p>Finance, Investments & Technology Leadership</p>
                    </div>
                  </div>
                  
                  <div className="info-item">
                    <div className="info-icon">
                      <span>🎓</span>
                    </div>
                    <div className="info-content">
                      <h4>Education</h4>
                      <p>MBA (IIM Bangalore)</p>
                      <p>B.Tech in Computer Science</p>
                    </div>
                  </div>
                  
                  <div className="info-item">
                    <div className="info-icon">
                      <span>🏆</span>
                    </div>
                    <div className="info-content">
                      <h4>Achievements</h4>
                      <p>Twice awarded "Best CIOs of India"</p>
                    </div>
                  </div>
                </div>
                
                <div className="member-social">
                  <button className="social-button">
                    <span>✉️</span>
                  </button>
                  <button className="social-button">
                    <span>🔗</span>
                  </button>
                </div>
              </div>
            </div>
            
            <div className="member-bio">
              <p>Ram Medury is the Founder-CEO of MaxiomWealth.com. Over his 25+ year career, he has held leadership roles spanning Finance, Investments & Technology at Infosys, ICICI Group, and Poonawalla Fincorp.</p>
            </div>
          </div>
  
          {/* Manoj Trivedi */}
          <div className="team-card">
            <div className="team-member">
              <div className="member-photo-container">
                <div className="member-photo-wrapper">
                  <img 
                    src="https://jama-wp.s3.ap-south-1.amazonaws.com/about-us/manoj-trivedi.png"
                    alt="Manoj Trivedi"
                    className="member-photo"
                  />
                </div>
              </div>
              
              <div className="member-details">
                <div className="member-header">
                  <h3 className="member-name">Manoj Trivedi</h3>
                  <p className="member-position">Director of Strategy</p>
                </div>
                
                <div className="member-info">
                  <div className="info-item">
                    <div className="info-icon">
                      <span>💼</span>
                    </div>
                    <div className="info-content">
                      <h4>30+ Years Experience</h4>
                      <p>Investment Advisory & Management Consulting</p>
                    </div>
                  </div>
                  
                  <div className="info-item">
                    <div className="info-icon">
                      <span>🎓</span>
                    </div>
                    <div className="info-content">
                      <h4>Education</h4>
                      <p>MBA Finance & Strategy (IIM Bangalore)</p>
                      <p>Chartered Accountant (ICAI)</p>
                    </div>
                  </div>
                  
                  <div className="info-item">
                    <div className="info-icon">
                      <span>🎯</span>
                    </div>
                    <div className="info-content">
                      <h4>Impact</h4>
                      <p>Trained 100,000+ professionals in investing</p>
                    </div>
                  </div>
                </div>
                
                <div className="member-social">
                  <button className="social-button">
                    <span>✉️</span>
                  </button>
                  <button className="social-button">
                    <span>🔗</span>
                  </button>
                </div>
              </div>
            </div>
            
            <div className="member-bio">
              <p>Manoj Trivedi is the Director of Strategy at Maxiom Wealth. With more than 30 years of experience spanning Investment Advisory, Management Consulting, Information Technology, Project Finance, and FinTech.</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default OurTeam;
