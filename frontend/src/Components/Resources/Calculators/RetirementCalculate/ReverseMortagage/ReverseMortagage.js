import React from 'react';
import Header from '../../../../Header';
import Footer from '../../../../Footer';
import ReverseMortgageCalculator from './ReverseMortgageCalculator';

const ReverseMortgageInfo = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">What is Reverse Mortgage?</h2>
      <p className="mb-4">A reverse mortgage is a financial product that allows homeowners aged 62 or older to borrow money against the value of their home. Unlike a traditional mortgage, no monthly payments are required, and the loan is repaid when the borrower moves, sells the home, or passes away.</p>

      <h3 className="text-xl font-semibold mb-3">Key Components</h3>
      <p className="mb-4">Reverse mortgage calculations consider your home's current market value, age of the youngest borrower, current interest rates, and any existing mortgage balance. These factors determine the maximum amount you can borrow and the various payment options available.</p>

      <h3 className="text-xl font-semibold mb-3">Why Consider Reverse Mortgage?</h3>
      <ul className="list-disc pl-6 mb-4">
        <li>Access home equity without selling</li>
        <li>No monthly mortgage payments required</li>
        <li>Maintain ownership of your home</li>
        <li>Supplement retirement income</li>
      </ul>

      <h3 className="text-xl font-semibold mb-3">Using the Reverse Mortgage Calculator</h3>
      <p className="mb-4">Enter your home's value, age, and current mortgage balance to estimate how much you might be eligible to borrow. This calculator helps you understand your options and plan for a more secure retirement using your home equity.</p>
    </div>
  );
};

const ReverseMortgage = () => {
  return (
    <>
      <Header/>
      <main className="overflow-x-hidden">
        <div className="relative z-20">
          <ReverseMortgageCalculator/>
        </div>
          <ReverseMortgageInfo />
      </main>
      <div className="relative z-20">
        <Footer />
      </div>
    </>
  );
};

export default ReverseMortgage;