import React, { useState, useEffect, useRef, MouseEvent } from 'react';
import '../Styles/Navbar.css';

interface CustomStyle extends React.CSSProperties {
  '--item-index': number;
}

const NavBar: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState<'investments' | 'goals'>('investments');
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside as unknown as EventListener);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside as unknown as EventListener);
    };
  }, []);

  const handleDropdownClick = (index: number): void => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const toggleSection = (section: 'investments' | 'goals'): void => {
    setActiveSection(section);
  };

  return (
    <nav className="nav-links" ref={dropdownRef}>
      <div className={`dropdown ${activeDropdown === 0 ? 'active' : ''}`} onClick={() => handleDropdownClick(0)}>
        <span>Why Maxiom <img src="https://cdn-icons-png.flaticon.com/128/10503/10503084.png" alt="dropdown" className="dropdown-arrow" /></span>
        <div className="dropdown-content simple-dropdown">
          {['About Us', 'Our Team', 'Why Choose Us'].map((item, index) => (
            <a href="#" key={item} style={{ '--item-index': index } as CustomStyle}>{item}</a>
          ))}
        </div>
      </div>

      <div className={`dropdown ${activeDropdown === 1 ? 'active' : ''}`} onClick={() => handleDropdownClick(1)}>
        <span>Wealth Management <img src="https://cdn-icons-png.flaticon.com/128/10503/10503084.png" alt="dropdown" className="dropdown-arrow" /></span>
        <div className="dropdown-content simple-dropdown">
          {[
            'Portfolio Management Services',
            'Tax Planning',
            'Offshore Products',
            'Estate Planning',
            'AIF',
            'Private Equity',
            'Private Credit'
          ].map((item, index) => (
            <a href="#" key={item} style={{ '--item-index': index } as CustomStyle}>{item}</a>
          ))}
        </div>
      </div>

      <div className={`dropdown ${activeDropdown === 2 ? 'active' : ''}`} onClick={() => handleDropdownClick(2)}>
        <span>Financial Advisory <img src="https://cdn-icons-png.flaticon.com/128/10503/10503084.png" alt="dropdown" className="dropdown-arrow" /></span>
        <div className="dropdown-content nested-dropdown">
          <div className="section-toggle">
            <button 
              className={activeSection === 'investments' ? 'active' : ''} 
              onClick={(e) => {
                e.stopPropagation();
                toggleSection('investments');
              }}
            >
              Investments
            </button>
            <button 
              className={activeSection === 'goals' ? 'active' : ''} 
              onClick={(e) => {
                e.stopPropagation();
                toggleSection('goals');
              }}
            >
              Goals
            </button>
          </div>
          <div className="section-content">
            {activeSection === 'investments' && (
              <div className="dropdown-section">
                <div className="section-items">
                  {[
                    'Mutual Funds',
                    'SIPs',
                    'Stocks / Direct Equity',
                    'Goal based investments'
                  ].map((item, index) => (
                    <a href="#" key={item} style={{ '--item-index': index } as CustomStyle}>{item}</a>
                  ))}
                </div>
              </div>
            )}
            {activeSection === 'goals' && (
              <div className="dropdown-section">
                <div className="section-items">
                  {[
                    'First Car',
                    'First Crore',
                    'Dream Wedding',
                    'Child Education',
                    'Overseas Travel',
                    'First Home',
                    'Retirement',
                    'Ageing Parents'
                  ].map((item, index) => (
                    <a href="#" key={item} style={{ '--item-index': index } as CustomStyle}>{item}</a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className={`dropdown ${activeDropdown === 3 ? 'active' : ''}`} onClick={() => handleDropdownClick(3)}>
        <span>Free Tools <img src="https://cdn-icons-png.flaticon.com/128/10503/10503084.png" alt="dropdown" className="dropdown-arrow" /></span>
        <div className="dropdown-content simple-dropdown">
          {[
            'Mutual Fund Browser',
            'Calculators',
            'Wealth Tracker',
            'Learning Center',
            'Will Maker'
          ].map((item, index) => (
            <a href="#" key={item} style={{ '--item-index': index } as CustomStyle}>{item}</a>
          ))}
        </div>
      </div>

      <div className={`dropdown ${activeDropdown === 4 ? 'active' : ''}`} onClick={() => handleDropdownClick(4)}>
        <span>Blogs & Podcast <img src="https://cdn-icons-png.flaticon.com/128/10503/10503084.png" alt="dropdown" className="dropdown-arrow" /></span>
        <div className="dropdown-content simple-dropdown">
          {[
            'Insights on Wealth Creation',
            'Financial Planning Compass',
            'Askguru - trends in finance',
            'Maxiom Markets Podcast'
          ].map((item, index) => (
            <a href="#" key={item} style={{ '--item-index': index } as CustomStyle}>{item}</a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
