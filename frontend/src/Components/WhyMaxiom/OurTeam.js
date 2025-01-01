import React from 'react';
import { Trophy, Briefcase, GraduationCap, Mail, Link } from 'lucide-react';
import '../../Styles/WhyMaxiomCss/OurTeam.css';

const OurTeam = () => {
  return (
    <div className="min-h-screen p-4">
      <div className="flex flex-col items-center justify-center team-section-header">
        <h2 className="team-section-heading text-center">Our Team</h2>
        <h3 className="team-section-subheading text-center">Founders</h3>
      </div>
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Ram Kalyan Medury */}
        <div className="team-card">
          <div className="team-upper-content">
            <div className="team-image-container">
              <img 
                src="https://jama-wp.s3.ap-south-1.amazonaws.com/about-us/ram-kalyan-medury.jpeg" 
                alt="Ram Kalyan Medury" 
                className="team-image"
              />
            </div>
            <div className="team-content">
              <div className="team-header mb-6">
                <div className="team-name-container">
                  <h3 className="team-name font-semibold text-gray-900">Ram Kalyan Medury</h3>
                  <p style={{ color: '#003399' }} className="team-position font-medium">Founder-CEO</p>
                </div>
                <div className="icons-container">
                  <Mail className="h-5 w-5" style={{ color: '#003399' }} />
                  <Link className="h-5 w-5" style={{ color: '#003399' }} />
                </div>
              </div>
              <div className="team-info">
                <div className="info-row">
                  <Briefcase style={{ color: '#003399' }} className="h-5 w-5 mt-1" />
                  <div className="info-content">
                    <p className="text-gray-900 font-medium">25+ Years Experience</p>
                    <p className="text-gray-600 text-sm">Finance, Investments & Technology Leadership</p>
                  </div>
                </div>
                <div className="info-row">
                  <GraduationCap style={{ color: '#003399' }} className="h-5 w-5 mt-1" />
                  <div className="info-content">
                    <p className="text-gray-900 font-medium">Qualifications</p>
                    <p className="text-gray-600 text-sm">MBA (IIM Bangalore)</p>
                    <p className="text-gray-600 text-sm">B.Tech in Computer Science</p>
                    <p className="text-gray-600 text-sm">Pursuing M.Tech (IIT Hyderabad)</p>
                  </div>
                </div>
                <div className="info-row">
                  <Trophy style={{ color: '#003399' }} className="h-5 w-5 mt-1" />
                  <div className="info-content">
                    <p className="text-gray-900 font-medium">Achievements</p>
                    <p className="text-gray-600 text-sm">Twice awarded "Best CIOs of India"</p>
                    <p className="text-gray-600 text-sm">Industry Speaker & Publications in ET, Entrepreneur</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="team-lower-content">
            <p className="text-gray-700 leading-relaxed">
              Ram Medury is the Founder-CEO of MaxiomWealth.com. Over his 25+ year career, he has held leadership roles spanning Finance, Investments & Technology at Infosys, ICICI Group, and Poonawalla Fincorp. Ram holds an MBA from IIM Bangalore, a Bachelor's Degree in Computer Science, and is currently pursuing a Masters in Technology from IIT Hyderabad. He was twice adjudged among the "Best CIOs of India" and has been a speaker at various industry events, contributing articles to ET, Entrepreneur, and other leading publications. Along with Manoj, Ram is finishing a book on "How to invest in high quality companies". Beyond his professional achievements, Ram is a voracious reader and dabbles in Technology, Investments, Yoga, Cycling, Advaita Vedanta, Travel, and Himalayan Treks. He loves to spend time with Nature and in the great outdoors.
            </p>
          </div>
        </div>

        {/* Manoj Trivedi */}
        <div className="team-card">
          <div className="team-upper-content">
            <div className="team-image-container">
              <img 
                src="https://jama-wp.s3.ap-south-1.amazonaws.com/about-us/manoj-trivedi.png" 
                alt="Manoj Trivedi" 
                className="team-image"
              />
            </div>
            <div className="team-content">
              <div className="team-header mb-6">
                <div className="team-name-container">
                  <h3 className="team-name font-semibold text-gray-900">Manoj Trivedi</h3>
                  <p style={{ color: '#003399' }} className="team-position font-medium">Director of Strategy</p>
                </div>
                <div className="icons-container">
                  <Mail className="h-5 w-5" style={{ color: '#003399' }} />
                  <Link className="h-5 w-5" style={{ color: '#003399' }} />
                </div>
              </div>
              <div className="team-info">
                <div className="info-row">
                  <Briefcase style={{ color: '#003399' }} className="h-5 w-5 mt-1" />
                  <div className="info-content">
                    <p className="text-gray-900 font-medium">30+ Years Experience</p>
                    <p className="text-gray-600 text-sm">Investment Advisory & Management Consulting</p>
                  </div>
                </div>
                <div className="info-row">
                  <GraduationCap style={{ color: '#003399' }} className="h-5 w-5 mt-1" />
                  <div className="info-content">
                    <p className="text-gray-900 font-medium">Qualifications</p>
                    <p className="text-gray-600 text-sm">MBA Finance & Strategy (IIM Bangalore)</p>
                    <p className="text-gray-600 text-sm">Chartered Accountant (ICAI)</p>
                    <p className="text-gray-600 text-sm">Advanced Diploma in Finance (ICFAI)</p>
                  </div>
                </div>
                <div className="info-row">
                  <Trophy style={{ color: '#003399' }} className="h-5 w-5 mt-1" />
                  <div className="info-content">
                    <p className="text-gray-900 font-medium">Impact</p>
                    <p className="text-gray-600 text-sm">Trained 100,000+ professionals in investing</p>
                    <p className="text-gray-600 text-sm">Expert in FinTech & Project Finance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="team-lower-content">
            <p className="text-gray-700 leading-relaxed">
              Manoj Trivedi is the Director of Strategy at Maxiom Wealth. With more than 30 years of experience spanning Investment Advisory, Management Consulting, Information Technology, Project Finance, and FinTech, he represents an ideal blend of academics, services, professional practice, and entrepreneurship. He is a member of The Institute of Chartered Accountants of India, holds an MBA specializing in Finance & Strategy from IIM Bangalore, and an Advanced Diploma in Finance from ICFAI. He is also a member of the ICWAI. Throughout his career, Manoj has covered 100,000+ people across various Indian corporates to inculcate good investing habits. Beyond his professional life, Manoj loves to teach, read and listen to old Hindi film music.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;