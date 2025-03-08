import React from 'react';
import Header from '../../../../Header';
import Footer from '../../../../Footer';
import NPSAnnuityCalculator from './NPSAnnuityCalculator';

const NPSReinvestmentInfo = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">What is NPS Reinvestment?</h2>
      <p className="mb-4">NPS (National Pension System) reinvestment refers to the strategic allocation of your accumulated NPS corpus at retirement. Upon reaching 60 years, subscribers can withdraw up to 60% of their corpus tax-free, while the remaining 40% must be used to purchase an annuity for regular pension income.</p>

      <h3 className="text-xl font-semibold mb-3">Key Components</h3>
      <p className="mb-4">NPS reinvestment planning involves understanding annuity options, tax implications, and withdrawal rules. The decision on how to allocate your corpus between lump sum withdrawal and annuity purchase can significantly impact your retirement income stream.</p>

      <h3 className="text-xl font-semibold mb-3">Why Plan NPS Reinvestment?</h3>
      <ul className="list-disc pl-6 mb-4">
        <li>Optimize retirement income through strategic allocation</li>
        <li>Balance between immediate needs and regular pension</li>
        <li>Understand tax implications of different options</li>
        <li>Choose suitable annuity plans for steady income</li>
      </ul>

      <h3 className="text-xl font-semibold mb-3">Using the NPS Calculator</h3>
      <p className="mb-4">Input your accumulated NPS corpus, desired withdrawal percentage, and preferred annuity options to understand your potential retirement income stream. This calculator helps you make informed decisions about your NPS corpus utilization at retirement.</p>
    </div>
  );
};

const NPSReinvestment = () => {
  return (
    <>
      <Header/>
      <main className="overflow-x-hidden">
        <div className="relative z-20">
          <NPSAnnuityCalculator/>
        </div>
          <NPSReinvestmentInfo />
      </main>
      <div className="relative z-20">
        <Footer />
      </div>
    </>
  );
};

export default NPSReinvestment;