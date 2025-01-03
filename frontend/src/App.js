import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import WhyMaxiom from './Components/WhyMaxiom/WhyMaxiom';
import Header from './Components/Header';
import NavBar from './Components/Navbar';
import JEWELTop350 from './Components/WealthManagement/PMS/JEWELTop350/JEWELTop350';

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
          <Route path="/wealth-management/pms/jewel-top-350" element={<JEWELTop350 />} />
          <Route path="/" element={
            <>
              <Header />
              <Home />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
