import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './Components/Header';

function App() {
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    fetch('/api/test')
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => console.error('Error:', error));
  }, []);

  const blueShades = [
    { name: 'Royal Blue', hex: '#1E4D8C' },
    { name: 'Ocean Blue', hex: '#006BA6' },
    { name: 'Azure Blue', hex: '#0088CC' },
    { name: 'Sky Blue', hex: '#3AA5DC' },
    { name: 'Ice Blue', hex: '#7BC4E5' }
  ];

  const orangeShades = [
    { name: 'Burnt Orange', hex: '#CC4E00' },
    { name: 'Amber', hex: '#FF7A00' },
    { name: 'Tangerine', hex: '#FF9233' },
    { name: 'Peach', hex: '#FFAD66' },
    { name: 'Soft Orange', hex: '#FFC599' }
  ];

  const greyShades = [
    { name: 'Charcoal', hex: '#2C3E50' },
    { name: 'Slate Grey', hex: '#4A6072' },
    { name: 'Medium Grey', hex: '#768894' },
    { name: 'Silver', hex: '#A2AEB8' },
    { name: 'Light Grey', hex: '#D0D6DC' }
  ];

  return (
    <div className="App">
      <Header/>
      
      <div className="color-showcase">
        <div className="color-section professional">
          <h2>Professional Theme</h2>
          <div className="color-palette">
            <div className="color-box" style={{ backgroundColor: '#0066CC' }}>
              <span>Primary Blue</span>
              <span>#0066CC</span>
            </div>
            <div className="color-box" style={{ backgroundColor: '#FFD700' }}>
              <span>Gold</span>
              <span>#FFD700</span>
            </div>
            <div className="color-box" style={{ backgroundColor: '#FFFFFF', border: '1px solid #ddd' }}>
              <span>White</span>
              <span>#FFFFFF</span>
            </div>
          </div>
          <div className="button-showcase">
            <button className="btn primary-prof">Primary Button</button>
            <button className="btn secondary-prof">Secondary Button</button>
            <button className="btn outline-prof">Outline Button</button>
          </div>
        </div>

        <div className="color-section modern">
          <h2>Modern Theme</h2>
          <div className="color-palette">
            <div className="color-box" style={{ backgroundColor: '#1E88E5' }}>
              <span>Primary Blue</span>
              <span>#1E88E5</span>
            </div>
            <div className="color-box" style={{ backgroundColor: '#FF7F50' }}>
              <span>Coral</span>
              <span>#FF7F50</span>
            </div>
            <div className="color-box" style={{ backgroundColor: '#F5F5F5', border: '1px solid #ddd' }}>
              <span>Light Gray</span>
              <span>#F5F5F5</span>
            </div>
          </div>
          <div className="button-showcase">
            <button className="btn primary-mod">Primary Button</button>
            <button className="btn secondary-mod">Secondary Button</button>
            <button className="btn outline-mod">Outline Button</button>
          </div>
        </div>
      </div>

      <div className="premium-colors">
        <h1>Premium Color Palettes</h1>
        
        <div className="color-category">
          <h2>Premium Blue Shades</h2>
          <div className="color-grid">
            {blueShades.map((color) => (
              <div className="color-item" key={color.hex}>
                <div 
                  className="color-preview" 
                  style={{ backgroundColor: color.hex }}
                />
                <div className="color-info">
                  <span className="color-name">{color.name}</span>
                  <span className="color-hex">{color.hex}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="color-category">
          <h2>Premium Orange Shades</h2>
          <div className="color-grid">
            {orangeShades.map((color) => (
              <div className="color-item" key={color.hex}>
                <div 
                  className="color-preview" 
                  style={{ backgroundColor: color.hex }}
                />
                <div className="color-info">
                  <span className="color-name">{color.name}</span>
                  <span className="color-hex">{color.hex}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="color-category">
          <h2>Premium Grey Shades</h2>
          <div className="color-grid">
            {greyShades.map((color) => (
              <div className="color-item" key={color.hex}>
                <div 
                  className="color-preview" 
                  style={{ backgroundColor: color.hex }}
                />
                <div className="color-info">
                  <span className="color-name">{color.name}</span>
                  <span className="color-hex">{color.hex}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="color-combinations">
          <h2>Recommended Combinations</h2>
          <div className="combination-grid">
            <div className="combination">
              <h3>Corporate Trust</h3>
              <div className="combo-colors">
                <div className="combo-color" style={{ backgroundColor: '#1E4D8C' }}></div>
                <div className="combo-color" style={{ backgroundColor: '#4A6072' }}></div>
                <div className="combo-color" style={{ backgroundColor: '#FF7A00' }}></div>
              </div>
            </div>
            <div className="combination">
              <h3>Modern Professional</h3>
              <div className="combo-colors">
                <div className="combo-color" style={{ backgroundColor: '#0088CC' }}></div>
                <div className="combo-color" style={{ backgroundColor: '#2C3E50' }}></div>
                <div className="combo-color" style={{ backgroundColor: '#FF9233' }}></div>
              </div>
            </div>
            <div className="combination">
              <h3>Light & Fresh</h3>
              <div className="combo-colors">
                <div className="combo-color" style={{ backgroundColor: '#3AA5DC' }}></div>
                <div className="combo-color" style={{ backgroundColor: '#D0D6DC' }}></div>
                <div className="combo-color" style={{ backgroundColor: '#FFAD66' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
