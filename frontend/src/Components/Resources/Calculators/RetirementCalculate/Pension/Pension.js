import React from 'react';
import Header from '../../../../Header';
import Footer from '../../../../Footer';
import PensionCalculator from './PensionCalculator';

const PensionInfo = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">What is Pension?</h2>
      <p className="mb-4">Pension is a regular payment made to a person who has retired from service, typically based on their years of service and final salary. It serves as a steady source of income during retirement years, ensuring financial security and maintaining quality of life.</p>

      <h3 className="text-xl font-semibold mb-3">Key Components</h3>
      <p className="mb-4">Pension calculations consider several factors including basic salary, dearness allowance, years of service, and the type of pension scheme. The formula varies based on whether it's a government pension, private sector pension, or other retirement schemes.</p>

      <h3 className="text-xl font-semibold mb-3">Why is Pension Important?</h3>
      <ul className="list-disc pl-6 mb-4">
        <li>Provides regular income post-retirement</li>
        <li>Ensures financial independence in later years</li>
        <li>Helps maintain standard of living</li>
        <li>Offers protection against inflation</li>
      </ul>

      <h3 className="text-xl font-semibold mb-3">Using the Pension Calculator</h3>
      <p className="mb-4">Enter your basic salary, years of service, and other relevant details to estimate your potential pension amount. This calculator helps you understand your retirement benefits and plan for a secure financial future.</p>
    </div>
  );
};

const Pension = () => {
  return (
    <>
      <Header/>
      <main className="overflow-x-hidden">
        <div className="relative z-20">
          <PensionCalculator/>
        </div>
          <PensionInfo />
      </main>
      <div className="relative z-20">
        <Footer />
      </div>
    </>
  );
};

export default Pension;