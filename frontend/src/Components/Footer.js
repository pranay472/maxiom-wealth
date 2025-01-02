import React, { useState, useRef, useEffect } from 'react';
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  Apple,
  PlaySquare,
  ArrowRight,
  ChevronDown,
  HelpCircle
} from 'lucide-react';
import '../Styles/Footer.css';
import FAQ from './FAQ';

const Footer = () => {
  const [isFaqOpen, setIsFaqOpen] = useState(false);
  const faqRef = useRef(null);


  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (faqRef.current && !faqRef.current.contains(event.target)) {
        setIsFaqOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* FAQ Dropdown */}
        <FAQ/>

        <div className="footer-grid">
          {/* Column 1: Company Info & App Downloads */}
          <div className="footer-column">
            <div>
              <h3 className="column-title">Download Our App</h3>
              <div className="app-buttons">
                <button className="app-button">
                  <Apple size={24} />
                  <span>App Store</span>
                </button>
                <button className="app-button">
                  <PlaySquare size={24} />
                  <span>Play Store</span>
                </button>
              </div>
            </div>
            
            <div>
              <h3 className="column-title">Stay Updated</h3>
              <form className="newsletter-form">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="newsletter-input"
                />
                <button type="submit" className="newsletter-button">
                  <ArrowRight size={20} />
                </button>
              </form>
            </div>
          </div>

          {/* Column 2: Financial Planning Services */}
          <div className="footer-column">
            <h3 className="column-title">Financial Planning</h3>
            <ul className="links-list">
              <li><a href="#">Retirement Planning</a></li>
              <li><a href="#">Tax Planning</a></li>
              <li><a href="#">Estate Planning</a></li>
              <li><a href="#">Investment Advisory</a></li>
              <li><a href="#">Portfolio Management</a></li>
              <li><a href="#">Goal-Based Planning</a></li>
            </ul>
          </div>

          {/* Column 3: Mutual Funds */}
          <div className="footer-column">
            <h3 className="column-title">Mutual Funds</h3>
            <ul className="links-list">
              <li><a href="#">Equity Funds</a></li>
              <li><a href="#">Debt Funds</a></li>
              <li><a href="#">Hybrid Funds</a></li>
              <li><a href="#">Index Funds</a></li>
              <li><a href="#">Most Purchased Funds</a></li>
              <li><a href="#">View All Categories</a></li>
            </ul>
          </div>

          {/* Column 4: Direct Stocks */}
          <div className="footer-column">
            <h3 className="column-title">Direct Stocks</h3>
            <ul className="links-list">
              <li><a href="#">Technology Sector</a></li>
              <li><a href="#">Banking & Finance</a></li>
              <li><a href="#">Healthcare</a></li>
              <li><a href="#">Consumer Goods</a></li>
              <li><a href="#">Trending Stocks</a></li>
              <li><a href="#">View All Sectors</a></li>
            </ul>
          </div>
        </div>

        {/* Standard Footer */}
        <div className="standard-footer">
          <div className="footer-links">
            <a href="#">Contact</a>
            <a href="#">Careers</a>
          </div>
          <div className="social-links">
            <a href="#" className="social-link"><Facebook size={20} /></a>
            <a href="#" className="social-link"><Twitter size={20} /></a>
            <a href="#" className="social-link"><Linkedin size={20} /></a>
            <a href="#" className="social-link"><Instagram size={20} /></a>
          </div>
        </div>

        {/* Compliance Section */}
        <div className="compliance">
          <p className="compliance-text">
            MaxiomWealth is a SEBI registered Investment Advisor (Registration No. INA000000000).
            All investments are subject to market risks. Please read all scheme related documents carefully.
          </p>
          <div className="compliance-footer">
            <p>&copy; 2025 MaxiomWealth. All rights reserved.</p>
            <div className="legal-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;