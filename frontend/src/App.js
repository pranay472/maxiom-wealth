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
import AgingParents from './Components/Resources/Calculators/GoalsCalculate/AgingParents/AgingParents';
import ChildEducation from './Components/Resources/Calculators/GoalsCalculate/ChildEducation/ChildEducation';
import ChildMarriage from './Components/Resources/Calculators/GoalsCalculate/ChildMarriage/ChildMarriage';
import CustomGoals from './Components/Resources/Calculators/calculate/CustomGoals/CustomGoals';
import DreamWedding from './Components/Resources/Calculators/GoalsCalculate/DreamWedding/DreamWedding';
import FirstCar from './Components/Resources/Calculators/GoalsCalculate/FirstCar/FirstCar';
import FirstCrore from './Components/Resources/Calculators/GoalsCalculate/FirstCrore/FirstCrore';
import HomeGoal from './Components/Resources/Calculators/GoalsCalculate/HomeGoal/HomeGoal';
import OverseasVacation from './Components/Resources/Calculators/GoalsCalculate/OverseasVacation/OverseasVacation';
import RecurringWorldTour from './Components/Resources/Calculators/GoalsCalculate/RecurringWorldTour/RecurringWorldTour';
import CarLoan from './Components/Resources/Calculators/LoansCalculate/CarLoan/CarLoan';
import EMI from './Components/Resources/Calculators/LoansCalculate/EMI/EMI';
import HomeLoan from './Components/Resources/Calculators/LoansCalculate/HomeLoan/HomeLoan';
import PersonalLoan from './Components/Resources/Calculators/LoansCalculate/PersonalLoan/PersonalLoan';
import EducationLoan from './Components/Resources/Calculators/LoansCalculate/EducationLoan/EducationLoan';
import RenovationLoan from './Components/Resources/Calculators/LoansCalculate/RenovationLoan/RenovationLoan';
import LandConstruction from './Components/Resources/Calculators/LoansCalculate/LandConstruction/LandConstruction';
import MarriageLoan from './Components/Resources/Calculators/LoansCalculate/MarriageLoan/MarriageLoan';
import RetirementPlan from './Components/Resources/Calculators/RetirementCalculate/RetirementPlan/RetirementPlan';
import Superannuation from './Components/Resources/Calculators/RetirementCalculate/Superannuation/Superannuation';
import FIRE from './Components/Resources/Calculators/RetirementCalculate/FIRE/FIRE';
import TravelBudget from './Components/Resources/Calculators/GoalsCalculate/TravelBudget/TravelBudget';
import WeddingBudget from './Components/Resources/Calculators/GoalsCalculate/WeddingBudget/WeddingBudget';
import HomeRenovation from './Components/Resources/Calculators/GoalsCalculate/HomeRenovation/HomeRenovation';

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
          <Route path="/resources/calculators/aging-parents" element={<AgingParents />} />
          <Route path="/resources/calculators/child-education" element={<ChildEducation />} />
          <Route path="/resources/calculators/child-marriage" element={<ChildMarriage />} />
          <Route path="/resources/calculators/custom-goals" element={<CustomGoals />} />
          <Route path="/resources/calculators/dream-wedding" element={<DreamWedding />} />
          <Route path="/resources/calculators/first-car" element={<FirstCar />} />
          <Route path="/resources/calculators/first-crore" element={<FirstCrore />} />
          <Route path="/resources/calculators/home-goal" element={<HomeGoal />} />
          <Route path="/resources/calculators/overseas-vacation" element={<OverseasVacation />} />
          <Route path="/resources/calculators/recurring-world-tour" element={<RecurringWorldTour />} />
          <Route path="/resources/calculators/car-loan-emi" element={<CarLoan />} />
          <Route path="/resources/calculators/emi" element={<EMI />} />
          <Route path="/resources/calculators/home-loan-emi" element={<HomeLoan />} />
          <Route path="/resources/calculators/personal-loan-emi" element={<PersonalLoan />} />
          <Route path="/resources/calculators/education-loan-emi" element={<EducationLoan />} />
          <Route path="/resources/calculators/home-extension-loan" element={<RenovationLoan />} />
          <Route path="/resources/calculators/land-construction-loan" element={<LandConstruction />} />
          <Route path="/resources/calculators/marriage-loan" element={<MarriageLoan />} />
          <Route path="/resources/calculators/retirement-plan" element={<RetirementPlan />} />
          <Route path="/resources/calculators/superannuation" element={<Superannuation />} />
          <Route path="/resources/calculators/fire" element={<FIRE />} />
          <Route path="/resources/calculators/travel-budget" element={<TravelBudget />} />
          <Route path="/resources/calculators/wedding-budget" element={<WeddingBudget />} />
          <Route path="/resources/calculators/home-renovation-budget" element={<HomeRenovation />} />
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
