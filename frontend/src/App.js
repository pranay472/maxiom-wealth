import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import WhyMaxiom from './Components/WhyMaxiom/WhyMaxiom';
import Header from './Components/Header';
import JEWELTop350 from './Components/WealthManagement/PMS/JEWELTop350/JEWELTop350';
import Spark351 from './Components/WealthManagement/PMS/Spark351/Spark351';
import PMS from './Components/WealthManagement/PMS/PMS';
import GEM from './Components/WealthManagement/PMS/GEM/GEM';
import EMERALDE from './Components/WealthManagement/PMS/EMERALDE/EMERALDE';

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
        <Routes>
          <Route path="/why-maxiom" element={<WhyMaxiom />} />
          <Route path="/pms" element={<PMS />} />
          <Route path="/pms/jewel" element={<JEWELTop350 />} />
          <Route path="/pms/spark" element={<Spark351 />} />
          <Route path="/pms/gem" element={<GEM />} />
          <Route path="/pms/emerald-equity" element={<EMERALDE />} />
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
