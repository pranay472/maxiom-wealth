import React from 'react';
import '../Styles/ColorPalette.css';

const ColorPalette = () => {
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
    </div>
  );
};

export default ColorPalette;
