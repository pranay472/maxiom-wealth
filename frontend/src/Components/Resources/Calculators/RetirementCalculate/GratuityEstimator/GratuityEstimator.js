import React from 'react';
import Header from '../../../../Header';
import Footer from '../../../../Footer';
import GratuityEstimatorCalculator from './GratuityEstimatorCalculator';

const GratuityEstimatorInfo = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">What is Gratuity?</h2>
      <p className="mb-4">Gratuity is a financial benefit given to employees upon leaving a company, calculated based on their last drawn salary and years of service. It acts as a reward for the employee's service and helps in financial planning during transitions.</p>

      <h3 className="text-xl font-semibold mb-3">Key Components</h3>
      <p className="mb-4">The gratuity amount is determined by the formula: Gratuity = (Last drawn salary × 15/26) × Number of years of service. Understanding this calculation is crucial for both employees and employers.</p>

      <h3 className="text-xl font-semibold mb-3">Why is Gratuity Important?</h3>
      <ul className="list-disc pl-6 mb-4">
        <li>Provides financial security during job transitions</li>
        <li>Encourages employee loyalty and retention</li>
        <li>Ensures compliance with labor regulations</li>
        <li>Assists in retirement planning</li>
      </ul>

      <h3 className="text-xl font-semibold mb-3">Using the Gratuity Estimator</h3>
      <p className="mb-4">Utilize the gratuity estimator by entering your last drawn salary and years of service to calculate your gratuity entitlement. This tool aids in understanding your benefits and planning for the future.</p>
    </div>
  );
};

const GratuityEstimator = () => {
  return (
    <>
      <Header/>
      <main className="overflow-x-hidden">
        <div className="relative z-20">
          <GratuityEstimatorCalculator/>
        </div>
          <GratuityEstimatorInfo />
      </main>
      <div className="relative z-20">
        <Footer />
      </div>
    </>
  );
};

export default GratuityEstimator;