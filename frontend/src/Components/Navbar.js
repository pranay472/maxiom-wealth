import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/Navbar.css';
import { navbarConfig } from '../config/navbarConfig';
import DropdownMenu from './Navbar/DropdownMenu';

const NavBar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
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
    // Immediately update state for better responsiveness
    requestAnimationFrame(() => {
      setActiveDropdown(activeDropdown === index ? null : index);
    });
  };

  const handleItemClick = (item) => {
    if (item.route) {
      // Immediately close dropdown
      setActiveDropdown(null);
      
      // Get current path and target path
      const [targetPath] = item.route.split('#');
      const currentPath = window.location.pathname;

      // Navigate with replace to prevent history stack buildup
      navigate(item.route, { 
        replace: currentPath === targetPath,
        state: { instant: true }  // Add state to indicate instant navigation
      });
    }
  };

  const menuItems = Object.entries(navbarConfig);

  return (
    <nav className="nav-links" ref={dropdownRef}>
      {menuItems.map(([key, section], index) => (
        <div
          key={key}
          className={`dropdown ${activeDropdown === index ? 'active' : ''}`}
          onClick={() => section.route ? handleItemClick(section) : handleDropdownClick(index)}
        >
          <span>
            {section.title}{' '}
            {!section.route && (
              <img
                src="https://cdn-icons-png.flaticon.com/128/10503/10503084.png"
                alt="dropdown"
                className="dropdown-arrow"
              />
            )}
          </span>
          {activeDropdown === index && section.items && (
            <DropdownMenu
              items={section.items}
              onItemClick={handleItemClick}
            />
          )}
        </div>
      ))}
    </nav>
  );
};

export default NavBar;
