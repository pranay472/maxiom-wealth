import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Blogs from './Components/Blogs/Blogs';
import WhyMaxiom from './Components/WhyMaxiom/WhyMaxiom';
import Header from './Components/Header';
import JEWELTop350 from './Components/WealthManagement/PMS/JEWELTop350/JEWELTop350';
import Spark351 from './Components/WealthManagement/PMS/Spark351/Spark351';
import Stocks from './Components/Stocks/Stocks';
import PMS from './Components/WealthManagement/PMS/PMS';
import GEM from './Components/WealthManagement/PMS/GEM/GEM';
import EMERALDE from './Components/WealthManagement/PMS/EMERALDE/EMERALDE';
import EMERALDNE from './Components/WealthManagement/PMS/EMERALDNE/EMERALDNE';
import Diamond from './Components/WealthManagement/PMS/Diamond/Diamond';
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
import MF from './Components/Resources/Calculators/calculate/MF/MF';
import ELSS from './Components/Resources/Calculators/calculate/ELSS/ELSS';
import LSum from './Components/Resources/Calculators/calculate/LSum/LSum';
import SWP from './Components/Resources/Calculators/calculate/SWP/SWP';
import FV from './Components/Resources/Calculators/calculate/FV/FV';
import EPF from './Components/Resources/Calculators/calculate/EPF/EPF';
import Sukanya from './Components/Resources/Calculators/calculate/Sukanya/Sukanya';
import PR from './Components/Resources/Calculators/calculate/PR/PR';
import SR from './Components/Resources/Calculators/calculate/SR/SR';
import AgingParents from './Components/Resources/Calculators/GoalsCalculate/AgingParents/AgingParents';
import ChildEducation from './Components/Resources/Calculators/GoalsCalculate/ChildEducation/ChildEducation';
import ChildMarriage from './Components/Resources/Calculators/GoalsCalculate/ChildMarriage/ChildMarriage';
import CustomGoals from './Components/Resources/Calculators/calculate/CustomGoals/CustomGoals';
import DreamWedding from './Components/Resources/Calculators/GoalsCalculate/DreamWedding/DreamWedding';
import FirstCar from './Components/Resources/Calculators/GoalsCalculate/FirstCar/FirstCar';
import FirstCrore from './Components/Resources/Calculators/GoalsCalculate/FirstCrore/FirstCrore';
import HomeGoal from './Components/Resources/Calculators/GoalsCalculate/HomeGoal/HomeGoal';
import OverseasVacation from './Components/Resources/Calculators/GoalsCalculate/OverseasVacation/OverseasVacation';
import MutualFundsPricing from './Components/Pricing/MutualFundsPricing';
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
import Pricing from './Components/Pricing/Pricing';
import StocksPricing from './Components/Pricing/StocksPricing';
import PMSPricing from './Components/Pricing/PMSPricing';
import AlternateInvestments from './Components/WealthManagement/AlternateInvestments/AlternateInvestments';
import TaxPlanning from './Components/WealthManagement/TaxPlanning/TaxPlanning';
import EstatePlanning from './Components/WealthManagement/EstatePlanning/EstatePlanning';
import OffshoreProducts from './Components/WealthManagement/OffshoreProducts/OffshoreProducts';
import ScrollToTop from './Components/ScrollToTop';
import PrivateEquity from './Components/WealthManagement/PrivateEquity/PrivateEquity';
import PrivateCredit from './Components/WealthManagement/PrivateCredit/PrivateCredit';
import GoalBasedInvestments from './Components/FinancialAdvisory/GoalBasedInvestments/GoalBasedInvestments';
import FinancialPlanning from './Components/FinancialAdvisory/FinancialPlanning/FInancialPlanning';
import RetirementPlanning from './Components/FinancialAdvisory/RetirementPlanning/RetirementPlanning';
import TRetirementPlanning from './Components/FinancialAdvisory/RetirementPlanning/TRetirementPlanning/TRetirementPlanning';
import PostRetirement from './Components/FinancialAdvisory/RetirementPlanning/PostRetirement/PostRetirement';
import FIREPlanning from './Components/FinancialAdvisory/RetirementPlanning/FIREPlanning/FIREPlanning';
import CorporateFinancialWellness from './Components/FinancialAdvisory/CorporateFinancialWellness/CorporateFinancialWellness';
import CarPurchase from './Components/FinancialAdvisory/GoalBasedInvestments/CarPurchase/CarPurchase';
import HomeLoanGoal from './Components/FinancialAdvisory/GoalBasedInvestments/HomeLoan/HomeLoanGoal';
import DreamHomeGoal from './Components/FinancialAdvisory/GoalBasedInvestments/DreamHomeGoal/DreamHomeGoal';
import BusinessStartGoal from './Components/FinancialAdvisory/GoalBasedInvestments/BusinessStartGoal/BusinessStartGoal';
import GoldLoan from './Components/FinancialAdvisory/GoalBasedInvestments/GoldLoan/GoldLoan';
import UGIndia from './Components/FinancialAdvisory/FinancialPlanning/FPEducation/UGIndia/UGIndia';
import UGAbroad from './Components/FinancialAdvisory/FinancialPlanning/FPEducation/UGAbroad/UGAbroad';
import MToChild from './Components/FinancialAdvisory/FinancialPlanning/FPEducation/MToChild/MToChild';
import PGMasters from './Components/FinancialAdvisory/FinancialPlanning/FPEducation/PGMasters/PGMasters';
import SportsP from './Components/FinancialAdvisory/FinancialPlanning/FPProfessionals/SportsP/SportsP';
import RBEmp from './Components/FinancialAdvisory/FinancialPlanning/FPProfessionals/RBEmp/RBEmp';
import Doctors from './Components/FinancialAdvisory/FinancialPlanning/FPProfessionals/Doctors/Doctors';
import EntreP from './Components/FinancialAdvisory/FinancialPlanning/FPProfessionals/EntreP/EntreP';
import ChildBirth from './Components/FinancialAdvisory/FinancialPlanning/FPLife/ChildBirth/ChildBirth';
import ChildMar from './Components/FinancialAdvisory/FinancialPlanning/FPLife/ChildMarriage/ChildMar';
import DeathIncomeEarner from './Components/FinancialAdvisory/FinancialPlanning/FPLife/DeathIncomeEarner/DeathIncomeEarner';
import Disability from './Components/FinancialAdvisory/FinancialPlanning/FPLife/Disability/Disability';
import Divorce from './Components/FinancialAdvisory/FinancialPlanning/FPLife/Divorce/Divorce';
import SingleParent from './Components/FinancialAdvisory/FinancialPlanning/FPLife/SingleParent/SingleParent';
import SingleMother from './Components/FinancialAdvisory/FinancialPlanning/FPLife/SingleMother/SingleMother';
import RetIndia from './Components/FinancialAdvisory/FinancialPlanning/FPLife/RetIndia/RetIndia';
import MigIndia from './Components/FinancialAdvisory/FinancialPlanning/FPLife/MigIndia/MigIndia';
import HealthEme from './Components/FinancialAdvisory/FinancialPlanning/FPLife/HealthEme/HealthEme';
import FPLife from './Components/FinancialAdvisory/FinancialPlanning/FPLife/FPLife';
import FPP from './Components/FinancialAdvisory/FinancialPlanning/FPProfessionals/FPP';
import FPEducation from './Components/FinancialAdvisory/FinancialPlanning/FPEducation/FPEducation';

const TransitionHandler = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    // If navigation is marked as instant, prevent any transition delay
    if (location.state?.instant) {
      document.body.style.overflow = 'auto';
      window.scrollTo(0, 0);
    }
  }, [location]);

  return children;
};

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Remove unused backend test
  }, []);

  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <TransitionHandler>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/why-maxiom" element={<WhyMaxiom />} />
            <Route path="/wealth-services/alternate-investments" element={<AlternateInvestments />} />
            <Route path="/wealth-services/portfolio-management" element={<PMS />}/>
            <Route path="/wealth-services/tax-planning" element={<TaxPlanning />} />
            <Route path="/wealth-services/estate-planning" element={<EstatePlanning />} />
            <Route path="/wealth-services/offshore-products" element={<OffshoreProducts />} />
            <Route path="/wealth-services/private-equity" element={<PrivateEquity />} />
            <Route path="/wealth-services/private-credit" element={<PrivateCredit />} />
            <Route path="/financial-advisory/goal-based-investments" element={<GoalBasedInvestments />} />
            <Route path="/financial-advisory/financial-planning" element={<FinancialPlanning />} />
            <Route path="/financial-advisory/retirement-planning" element={<RetirementPlanning />} />
            <Route path="/financial-advisory/retirement-planning/traditional" element={<TRetirementPlanning />} />
            <Route path="/financial-advisory/retirement-planning/post" element={<PostRetirement />} />
            <Route path="/financial-advisory/retirement-planning/fire" element={<FIREPlanning />} />
            <Route path="/financial-advisory/corporate-financial-wellness" element={<CorporateFinancialWellness />} />
            <Route path="/financial-advisory/goal-based-investments/car-purchase" element={<CarPurchase />} />
            <Route path="/financial-advisory/goal-based-investments/home-loan" element={<HomeLoanGoal />} />
            <Route path="/financial-advisory/goal-based-investments/dream-home" element={<DreamHomeGoal />} />
            <Route path="/financial-advisory/goal-based-investments/business" element={<BusinessStartGoal />} />
            <Route path="/financial-advisory/goal-based-investments/gold-loan" element={<GoldLoan />} />
            <Route path="/financial-advisory/education-planning/ug-india" element={<UGIndia />} />
            <Route path="/financial-advisory/education-planning/ug-abroad" element={<UGAbroad />} />
            <Route path="/financial-advisory/education-planning/child-overseas" element={<MToChild />} />
            <Route path="/financial-advisory/education-planning/masters-abroad" element={<PGMasters />} />
            <Route path="/financial-advisory/professionals/sportspersons" element={<SportsP />} />
            <Route path="/financial-advisory/professionals/retired-bank-employees" element={<RBEmp />} />
            <Route path="/financial-advisory/professionals/doctors" element={<Doctors />} />
            <Route path="/financial-advisory/professionals/entrepreneurs" element={<EntreP />} />
            <Route path="/financial-advisory/life-planning/child-birth" element={<ChildBirth />} />
            <Route path="/financial-advisory/life-planning/child-marriage" element={<ChildMar />} />
            <Route path="/financial-advisory/life-planning/sudden-death" element={<DeathIncomeEarner />} />
            <Route path="/financial-advisory/life-planning/disability" element={<Disability />} />
            <Route path="/financial-advisory/life-planning/divorce" element={<Divorce />} />
            <Route path="/financial-advisory/life-planning/single-parents" element={<SingleParent />} />
            <Route path="/financial-advisory/life-planning/single-mothers" element={<SingleMother />} />
            <Route path="/financial-advisory/life-planning/return-to-india" element={<RetIndia />} />
            <Route path="/financial-advisory/life-planning/migration-from-india" element={<MigIndia />} />
            <Route path="/financial-advisory/life-planning/health-emergency" element={<HealthEme />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/mutual-funds-pricing" element={<MutualFundsPricing />} />
            <Route path="/stocks" element={<Stocks />} />
            <Route path="/stocks-pricing" element={<StocksPricing />} />
            <Route path="/pms-pricing" element={<PMSPricing />} />
            <Route path="/pms" element={<PMS />} />
            <Route path="/pms/jewel" element={<JEWELTop350 />} />
            <Route path="/pms/spark" element={<Spark351 />} />
            <Route path="/pms/gem" element={<GEM />} />
            <Route path="/pms/emerald-equity" element={<EMERALDE />} />
            <Route path="/pms/emerald-non-equity" element={<EMERALDNE />} />
            <Route path="/pms/diamond" element={<Diamond />} />
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
            <Route path="/resources/calculators/mutual-fund" element={<MF/>}/>
            <Route path="/resources/calculators/elss" element={<ELSS/>}/>
            <Route path="/resources/calculators/lumpsum" element={<LSum/>}/>
            <Route path="/resources/calculators/swp" element={<SWP/>}/>
            <Route path="/resources/calculators/fv" element={<FV/>}/>
            <Route path="/resources/calculators/epf" element={<EPF/>}/>
            <Route path="/resources/calculators/sukanya" element={<Sukanya/>}/>
            <Route path="/resources/calculators/pr" element={<PR/>}/>
            <Route path="/resources/calculators/sr" element={<SR/>}/>
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
            <Route path="/resources/learning-center" element={<Blogs />} />
            <Route path="/financial-planning/education" element={<FPEducation />} />
            <Route path="/financial-planning/professionals" element={<FPP />} />
            <Route path="/financial-planning/life-situations" element={<FPLife />} />
            <Route path="/header" element={
              <>
                <Header />
                <Home />
              </>
            } />
          </Routes>
        </TransitionHandler>
      </div>
    </Router>
  );
}

export default App;
