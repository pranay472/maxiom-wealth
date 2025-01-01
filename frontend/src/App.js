import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import WhyMaxiom from './Components/WhyMaxiom/WhyMaxiom';
import NavBar from './Components/Navbar';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/test')
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => console.error('Error:', error));
  }, []);


  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/why-maxiom" element={<WhyMaxiom />} />
          <Route path="/" element={
            <>
              <Header />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
