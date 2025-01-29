import React from 'react';
import Header from '../../Header';
import Footer from '../../Footer';
import { TaxPlanningPage, HeroSection, ServicesSection, ApproachSection } from './CoreComponents';
import {ServiceSelector, FAQAccordion} from './InteractiveComponents';
import { BenefitCard, ExpertisePoint, ServiceDetail } from './ContentComponents';
import { benefitCardData, expertisePointData, serviceDetailData } from './taxPlanningData';

const TaxPlanning = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header/>
      <main className="flex-grow">
        <TaxPlanningPage>
          <HeroSection />
          <ServicesSection />
          <ApproachSection />
        </TaxPlanningPage>
        <ServiceSelector/>
        <BenefitCard {...benefitCardData} />
        <ExpertisePoint {...expertisePointData} />
        <ServiceDetail service={serviceDetailData} />
        <FAQAccordion/>
      </main>
      <Footer/>
    </div>
  );
};

export default TaxPlanning;