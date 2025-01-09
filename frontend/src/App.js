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
import EMERALDNE from './Components/WealthManagement/PMS/EMERALDNE/EMERALDNE';
import Calculators from './Components/Resources/Calculators/Calculators';
import CAGR from './Components/Resources/Calculators/calculate/CAGR/CAGR';
import CompoundInterest from './Components/Resources/Calculators/calculate/CompoundInterest/CompoundInterest';
import FD from './Components/Resources/Calculators/calculate/FD/FD';
import PPF from './Components/Resources/Calculators/calculate/PPF/PPF';
import RD from './Components/Resources/Calculators/calculate/RD/RD';
import SimpleInterest from './Components/Resources/Calculators/calculate/SimpleInterest/SimpleInterest';
import SIP from './Components/Resources/Calculators/calculate/SIP/SIP';
import SIPDelay from './Components/Resources/Calculators/calculate/SIPDelay/SIPDelay';
import SIPGrowth from './Components/Resources/Calculators/calculate/SIPGrowth/SIPGrowth';
import WeightedReturns from './Components/Resources/Calculators/calculate/WeightedReturns/WeightedReturns';

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
          <Route path="/pms/emerald-non-equity" element={<EMERALDNE />} />
          <Route path="/resources/calculators" element={<Calculators />} />
          <Route path="/resources/calculators/cagr" element={<CAGR />} />
          <Route path="/resources/calculators/compound-interest" element={<CompoundInterest />} />
          <Route path="/resources/calculators/fd" element={<FD />} />
          <Route path="/resources/calculators/ppf" element={<PPF />} />
          <Route path="/resources/calculators/rd" element={<RD />} />
          <Route path="/resources/calculators/simple-interest" element={<SimpleInterest />} />
          <Route path="/resources/calculators/sip" element={<SIP />} />
          <Route path="/resources/calculators/sip-delay" element={<SIPDelay />} />
          <Route path="/resources/calculators/sip-growth" element={<SIPGrowth />} />
          <Route path="/resources/calculators/weighted-returns" element={<WeightedReturns />} />
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
