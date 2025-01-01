import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/Navbar.css';

const NavBar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSection, setActiveSection] = useState('investments');
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleDropdownClick = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const handleWhyChooseUsClick = () => {
    navigate('/why-maxiom#why-choose-us');
    setActiveDropdown(null);
  };

  const toggleSection = (section) => {
    setActiveSection(section);
  };

  return (
    <nav className="nav-links" ref={dropdownRef}>
      <div className={`dropdown ${activeDropdown === 0 ? 'active' : ''}`} onClick={() => handleDropdownClick(0)}>
        <span>Why Us <img src="https://cdn-icons-png.flaticon.com/128/10503/10503084.png" alt="dropdown" className="dropdown-arrow" /></span>
        {activeDropdown === 0 && (
          <div className="card-style-dropdown">
            <div className="dropdown-grid">
              <div className="dropdown-card" onClick={handleWhyChooseUsClick}>
                <div className="card-icon">
                  <img src="https://cdn-icons-png.flaticon.com/128/3176/3176298.png" alt="icon" />
                </div>
                <div className="card-content">
                  <h4>Why Choose Us</h4>
                  <p>Discover the Equirus advantage and what sets us apart</p>
                </div>
              </div>
              <div className="dropdown-card">
                <div className="card-icon">
                  <img src="https://cdn-icons-png.flaticon.com/128/3176/3176293.png" alt="icon" />
                </div>
                <div className="card-content">
                  <h4>Our Team</h4>
                  <p>Meet our experienced team of financial experts</p>
                </div>
              </div>
              <div className="dropdown-card">
                <div className="card-icon">
                  <img src="https://cdn-icons-png.flaticon.com/128/3176/3176293.png" alt="icon" />
                </div>
                <div className="card-content">
                  <h4>Our Journey</h4>
                  <p>Learn about our history and milestones</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className={`dropdown ${activeDropdown === 1 ? 'active' : ''}`} onClick={() => handleDropdownClick(1)}>
        <span>Private Wealth <img src="https://cdn-icons-png.flaticon.com/128/10503/10503084.png" alt="dropdown" className="dropdown-arrow" /></span>
        {activeDropdown === 1 && (
          <div className="card-style-dropdown">
            <div className="dropdown-grid">
              <div className="dropdown-card">
                <div className="card-icon">
                  <img src="https://cdn-icons-png.flaticon.com/512/1584/1584961.png" alt="Portfolio" />
                </div>
                <div className="card-content">
                  <h4>Portfolio Management Services</h4>
                  <p>Comprehensive portfolio management designed to meet your unique financial needs.</p>
                </div>
              </div>
              <div className="dropdown-card">
                <div className="card-icon">
                  <img src="https://cdn-icons-png.flaticon.com/512/2942/2942269.png" alt="Tax" />
                </div>
                <div className="card-content">
                  <h4>Tax Planning</h4>
                  <p>Invest or withdraw your money tax efficiently with our planning strategies.</p>
                </div>
              </div>
              <div className="dropdown-card">
                <div className="card-icon">
                  <img src="https://cdn-icons-png.flaticon.com/512/3297/3297952.png" alt="Offshore" />
                </div>
                <div className="card-content">
                  <h4>Offshore Products</h4>
                  <p>Diversify your wealth with offshore investments and foreign funds.</p>
                </div>
              </div>
              <div className="dropdown-card">
                <div className="card-icon">
                  <img src="https://cdn-icons-png.flaticon.com/512/1087/1087927.png" alt="Estate" />
                </div>
                <div className="card-content">
                  <h4>Estate Planning</h4>
                  <p>Plan and manage your assets to protect your legacy for generations.</p>
                </div>
              </div>
              <div className="dropdown-card">
                <div className="card-icon">
                  <img src="https://cdn-icons-png.flaticon.com/512/4256/4256900.png" alt="AIF" />
                </div>
                <div className="card-content">
                  <h4>AIF & Structured Products</h4>
                  <p>Access alternative investment opportunities and structured solutions.</p>
                </div>
              </div>
              <div className="dropdown-card">
                <div className="card-icon">
                  <img src="https://cdn-icons-png.flaticon.com/512/6009/6009864.png" alt="Private Equity" />
                </div>
                <div className="card-content">
                  <h4>Private Equity</h4>
                  <p>Invest in high-potential private market opportunities.</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className={`dropdown ${activeDropdown === 2 ? 'active' : ''}`} onClick={() => handleDropdownClick(2)}>
        <span>Digital Wealth <img src="https://cdn-icons-png.flaticon.com/128/10503/10503084.png" alt="dropdown" className="dropdown-arrow" /></span>
        {activeDropdown === 2 && (
          <div className="card-style-dropdown">
            <div className="dropdown-grid">
              <div className="dropdown-card">
                <div className="card-icon">
                  <img src="https://cdn-icons-png.flaticon.com/512/2936/2936690.png" alt="Mutual Funds" />
                </div>
                <div className="card-content">
                  <h4>Mutual Funds</h4>
                  <p>Access a wide range of professionally managed investment funds.</p>
                </div>
              </div>
              <div className="dropdown-card">
                <div className="card-icon">
                  <img src="https://cdn-icons-png.flaticon.com/512/2037/2037619.png" alt="SIP" />
                </div>
                <div className="card-content">
                  <h4>SIPs</h4>
                  <p>Build wealth systematically through regular investments.</p>
                </div>
              </div>
              <div className="dropdown-card">
                <div className="card-icon">
                  <img src="https://cdn-icons-png.flaticon.com/512/4222/4222019.png" alt="Stocks" />
                </div>
                <div className="card-content">
                  <h4>Stocks / Direct Equity</h4>
                  <p>Invest directly in the stock market with our expert guidance.</p>
                </div>
              </div>
              <div className="dropdown-card">
                <div className="card-icon">
                  <img src="https://cdn-icons-png.flaticon.com/512/1006/1006555.png" alt="Goals" />
                </div>
                <div className="card-content">
                  <h4>Goal Based Investments</h4>
                  <p>Customize your investment strategy to achieve specific financial goals.</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className={`dropdown ${activeDropdown === 3 ? 'active' : ''}`} onClick={() => handleDropdownClick(3)}>
        <span>Free Tools <img src="https://cdn-icons-png.flaticon.com/128/10503/10503084.png" alt="dropdown" className="dropdown-arrow" /></span>
        {activeDropdown === 3 && (
          <div className="card-style-dropdown">
            <div className="dropdown-grid">
              <div className="dropdown-card">
                <div className="card-icon">
                  <img src="https://cdn-icons-png.flaticon.com/512/2936/2936690.png" alt="Mutual Funds" />
                </div>
                <div className="card-content">
                  <h4>Mutual Fund Browser</h4>
                  <p>Explore and compare various mutual funds to find the best fit for your investments.</p>
                </div>
              </div>
              <div className="dropdown-card">
                <div className="card-icon">
                  <img src="https://cdn-icons-png.flaticon.com/512/2037/2037619.png" alt="SIP" />
                </div>
                <div className="card-content">
                  <h4>Calculators</h4>
                  <p>Use our financial calculators to plan and manage your investments effectively.</p>
                </div>
              </div>
              <div className="dropdown-card">
                <div className="card-icon">
                  <img src="https://cdn-icons-png.flaticon.com/512/4222/4222019.png" alt="Stocks" />
                </div>
                <div className="card-content">
                  <h4>Wealth Tracker</h4>
                  <p>Monitor and track your investments with our comprehensive wealth tracker tool.</p>
                </div>
              </div>
              <div className="dropdown-card">
                <div className="card-icon">
                  <img src="https://cdn-icons-png.flaticon.com/512/1006/1006555.png" alt="Goals" />
                </div>
                <div className="card-content">
                  <h4>Learning Center</h4>
                  <p>Access educational resources and insights to enhance your financial knowledge.</p>
                </div>
              </div>
              <div className="dropdown-card">
                <div className="card-icon">
                  <img src="https://cdn-icons-png.flaticon.com/512/1087/1087927.png" alt="Estate" />
                </div>
                <div className="card-content">
                  <h4>Will Maker</h4>
                  <p>Create a will and plan your estate with our expert guidance and support.</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className={`dropdown ${activeDropdown === 4 ? 'active' : ''}`} onClick={() => handleDropdownClick(4)}>
        <span>Blogs & Podcast <img src="https://cdn-icons-png.flaticon.com/128/10503/10503084.png" alt="dropdown" className="dropdown-arrow" /></span>
        {activeDropdown === 4 && (
          <div className="card-style-dropdown">
            <div className="dropdown-grid">
              <div className="dropdown-card">
                <div className="card-icon">
                  <img src="https://cdn-icons-png.flaticon.com/512/2936/2936690.png" alt="Mutual Funds" />
                </div>
                <div className="card-content">
                  <h4>Insights on Wealth Creation</h4>
                  <p>Stay updated with the latest insights and trends in wealth creation.</p>
                </div>
              </div>
              <div className="dropdown-card">
                <div className="card-icon">
                  <img src="https://cdn-icons-png.flaticon.com/512/2037/2037619.png" alt="SIP" />
                </div>
                <div className="card-content">
                  <h4>Financial Planning Compass</h4>
                  <p>Navigate the world of finance with our expert guidance and insights.</p>
                </div>
              </div>
              <div className="dropdown-card">
                <div className="card-icon">
                  <img src="https://cdn-icons-png.flaticon.com/512/4222/4222019.png" alt="Stocks" />
                </div>
                <div className="card-content">
                  <h4>Askguru - trends in finance</h4>
                  <p>Get answers to your financial questions and stay updated with the latest trends.</p>
                </div>
              </div>
              <div className="dropdown-card">
                <div className="card-icon">
                  <img src="https://cdn-icons-png.flaticon.com/512/1006/1006555.png" alt="Goals" />
                </div>
                <div className="card-content">
                  <h4>Maxiom Markets Podcast</h4>
                  <p>Listen to our podcast for expert insights and analysis on the markets.</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
