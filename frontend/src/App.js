import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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
import DY from './Components/Resources/Calculators/calculate/DY/DY';
import GI from './Components/Resources/Calculators/calculate/GI/GI';
import BFC from './Components/Resources/Calculators/calculate/BFC/BFC';
import CCPC from './Components/Resources/Calculators/PersonalCalculate/CCPC/CCPC';
import DRC from './Components/Resources/Calculators/PersonalCalculate/DRC/DRC';
import EFC from './Components/Resources/Calculators/PersonalCalculate/EFC/EFC';
import SGC from './Components/Resources/Calculators/PersonalCalculate/SGC/SGC';
import NWC from './Components/Resources/Calculators/PersonalCalculate/NWC/NWC';
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
import GratuityEstimator from './Components/Resources/Calculators/RetirementCalculate/GratuityEstimator/GratuityEstimator';
import StudentLoan from './Components/Resources/Calculators/CareerCalculate/StudentLoan/StudentLoan';
import CareerGrowth from './Components/Resources/Calculators/CareerCalculate/CareerGrowth/CareerGrowth';
import CapitalGains from './Components/Resources/Calculators/TaxCalculate/CapitalGains/CapitalGains';
import HRA from './Components/Resources/Calculators/TaxCalculate/HRA/HRA';
import GST from './Components/Resources/Calculators/TaxCalculate/GST/GST';
import Freelancer from './Components/Resources/Calculators/TaxCalculate/Freelancer/Freelancer';
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
import Pension from './Components/Resources/Calculators/RetirementCalculate/Pension/Pension';
import PostRetirementExpenses from './Components/Resources/Calculators/RetirementCalculate/PostRetirement/PostRetirementExpenses';
import ReverseMortagage from './Components/Resources/Calculators/RetirementCalculate/ReverseMortagage/ReverseMortagage';
import NPSReinvestment from './Components/Resources/Calculators/RetirementCalculate/NPSReinvestment/NPSReinvestment';
import NPS from './Components/Resources/Calculators/RetirementCalculate/NPS/NPS';
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
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<WhyMaxiom />} />
            <Route path="/aboutus/:section" element={<WhyMaxiom />} />
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
            <Route path="/services/retirement-planning-services" element={<TRetirementPlanning />} />
            <Route path="/services/post-retirement-solutions" element={<PostRetirement />} />
            <Route path="/services/financial-independence-early-retirement-planning-fire" element={<FIREPlanning />} />
            <Route path="/services/finanacial-wellness-solutions" element={<CorporateFinancialWellness />} />
            <Route path="/services/financial-planning-for-specific-goals-car-purchase" element={<CarPurchase />} />
            <Route path="/services/financial-planning-for-life-situations-home-loan-prepayment" element={<HomeLoanGoal />} />
            <Route path="/services/financial-planning-for-specific-goals-dream-home-purchase" element={<DreamHomeGoal />} />
            <Route path="/services/invest-now-starting-a-business" element={<BusinessStartGoal />} />
            <Route path="/services/financial-planning-for-specific-goals-foreclosure-of-a-gold-loan" element={<GoldLoan />} />
            <Route path="/services/financial-planning-for-education-undergraduate-education-in-india" element={<UGIndia />} />
            <Route path="/services/financial-planning-for-education-undergraduate-education-abroad" element={<UGAbroad />} />
            <Route path="/services/financial-planning-for-leducation-tips-on-sending-money-to-child-overseas" element={<MToChild />} />
            <Route path="/services/financial-planning-for-education-masters-education-abroad" element={<PGMasters />} />
            <Route path="/services/customised-financial-planning-for-professionals-sports-persons" element={<SportsP />} />
            <Route path="/services/customised-financial-planning-for-professionals-retired-bank-employees" element={<RBEmp />} />
            <Route path="/services/customised-financial-planning-for-professionals-doctors" element={<Doctors />} />
            <Route path="/services/customised-financial-planning-for-professionals-enterpreneurs" element={<EntreP />} />
            <Route path="/services/financial-planning-for-life-situations-child-birth" element={<ChildBirth />} />
            <Route path="/services/financial-planning-for-life-situations-childs-marriage" element={<ChildMar />} />
            <Route path="/services/financial-planning-in-case-of-sudden-death-of-income-earner" element={<DeathIncomeEarner />} />
            <Route path="/services/financial-planning-for-life-situations-disability" element={<Disability />} />
            <Route path="/services/financial-planning-for-life-situations-divorce" element={<Divorce />} />
            <Route path="/services/financial-planning-for-single-parent" element={<SingleParent />} />
            <Route path="/services/financial-planning-for-life-situations-single-mothers" element={<SingleMother />} />
            <Route path="/services/financial-planning-for-those-returning-to-india" element={<RetIndia />} />
            <Route path="/services/financial-planning-for-life-situations-those-emigrating-from-india" element={<MigIndia />} />
            <Route path="/services/financial-planning-for-life-situations-health-emergency" element={<HealthEme />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/blog/blog-list" element={<Blogs />} />
            <Route path="/mutual-funds-pricing" element={<MutualFundsPricing />} />
            <Route path="/stocks" element={<Stocks />} />
            <Route path="/stocks-pricing" element={<StocksPricing />} />
            <Route path="/pms-pricing" element={<PMSPricing />} />
            <Route path="/pms" element={<PMS />} />
            <Route path="/jewel-pms-large-midcap-focused" element={<JEWELTop350 />} />
            <Route path="/spark-pms-smallcap-5000-cr-cos" element={<Spark351 />} />
            <Route path="/gem-pms-quality-momentum" element={<GEM />} />
            <Route path="/pms/emerald-equity" element={<EMERALDE />} />
            <Route path="/pms/emerald-non-equity" element={<EMERALDNE />} />
            <Route path="/pms/diamond" element={<Diamond />} />
            <Route path="/resources/calculators" element={<Calculators />} />
            <Route path="/resources/calculators/:section" element={<Calculators />} />
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
            <Route path="/resources/calculators/dividend-yield" element={<DY/>}/>
            <Route path="/resources/calculators/gold-investment" element={<GI/>}/>
            <Route path="/resources/calculators/better-funds-checker" element={<BFC/>}/>
            <Route path="/resources/calculators/credit-card" element={<CCPC/>}/>
            <Route path="/resources/calculators/debt-repay" element={<DRC/>}/>
            <Route path="/resources/calculators/emergencyfund" element={<EFC/>}/>
            <Route path="/resources/calculators/savingsgoal" element={<SGC/>}/>
            <Route path="/resources/calculators/net-worth" element={<NWC/>}/>
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
            <Route path="/resources/calculators/gratuity" element={<GratuityEstimator />} />
            <Route path="/resources/calculators/pension" element={<Pension />} />
            <Route path="/resources/calculators/postretirement" element={<PostRetirementExpenses />} />
            <Route path="/resources/calculators/reverse-mortgage" element={<ReverseMortagage />} />
            <Route path="/resources/calculators/nps-reinvestment" element={<NPSReinvestment />} />
            <Route path="/resources/calculators/nps" element={<NPS />} />
            <Route path="/resources/calculators/student-loan" element={<StudentLoan />} />
            <Route path="/resources/calculators/career-growth-planner" element={<CareerGrowth />} />
            <Route path="/resources/calculators/capital-gains-tax" element={<CapitalGains />} />
            <Route path="/resources/calculators/hra-exemption" element={<HRA />} />
            <Route path="/resources/calculators/gst" element={<GST />} />
            <Route path="/resources/calculators/freelancer-income-tax" element={<Freelancer />} />
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
