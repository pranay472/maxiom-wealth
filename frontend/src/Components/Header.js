import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Header.css';
import Navbar from './Navbar';
import WealthHorizonLogo from './WealthHorizon.svg';

const Header = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.pageYOffset;
      const scrollPercentage = (currentScroll / totalScroll) * 100;
      setScrollProgress(scrollPercentage);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="header">
      <div className="scroll-progress">
        <div 
          className="scroll-progress-bar" 
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      
      {/* Delicate floating elements */}
      <div className="particle-1" />
      <div className="particle-2" />
      <div className="particle-3" />
      <div className="particle-4" />
      <div className="particle-5" />
      <div className="particle-6" />

      <div className="header-container">
        <Link to="/" className="logo">
          <img src={WealthHorizonLogo} alt="Wealth Horizon" style={{ marginLeft: '1rem' }} />
        </Link>
        
        <Navbar />

        <div className="header-buttons">
          <button className="book-meeting">
            <span className="arrow-icon">↗</span>
            Book Meeting
          </button>
          <button className="login-btn">Login</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
