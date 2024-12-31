import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './Components/Header';
import ColorPalette from './Components/ColorPalette';

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
      <ColorPalette/>
    </div>
  );
}

export default App;
