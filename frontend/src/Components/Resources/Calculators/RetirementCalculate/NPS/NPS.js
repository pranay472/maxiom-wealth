import React from 'react';
import Header from '../../../../Header';
import Footer from '../../../../Footer';
import NPSCalculator from './NPSCalculator';

const NPSInfo = () => {
  return (
    <div className="bg-[#FFFFFF] rounded-lg shadow-lg p-6">
      <h2 className="text-[#1C52A0] text-2xl font-semibold mb-4">What is NPS?</h2>
      <p className="mb-4 text-[#0D0D0D]">The National Pension System (NPS) is a government-sponsored retirement scheme that helps you build a secure financial future. It's a defined contribution pension system where you can invest regularly during your working years, with the flexibility to choose your investment allocation across different asset classes.</p>

      <h3 className="text-[#1C52A0] text-xl font-semibold mb-3">Key Features</h3>
      <p className="mb-4 text-[#0D0D0D]">NPS contributions are invested across equity (up to 75%), corporate bonds, government securities, and alternative investments based on your chosen allocation. The scheme offers tax benefits, low management costs, and the option to switch investment patterns as per your risk appetite.</p>

      <h3 className="text-[#1C52A0] text-xl font-semibold mb-3">Benefits of NPS</h3>
      <ul className="list-disc pl-6 mb-4 text-[#0D0D0D]">
        <li>Additional tax deduction up to ₹50,000 under Sec 80CCD(1B)</li>
        <li>Market-linked returns with professional fund management</li>
        <li>Choice of pension fund managers and investment options</li>
        <li>Systematic investment for long-term wealth creation</li>
      </ul>

      <h3 className="text-[#1C52A0] text-xl font-semibold mb-3">Using the NPS Calculator</h3>
      <p className="mb-4 text-[#0D0D0D]">Use our calculator to estimate your retirement corpus by entering your monthly contribution, expected returns, and investment horizon. Understand how different asset allocations and contribution amounts can impact your final pension wealth.</p>
    </div>
  );
};

const NPS = () => {
  return (
    <>
      <Header/>
      <main className="overflow-x-hidden">
        <div className="relative z-20">
          <NPSCalculator/>
        </div>
          <NPSInfo />
      </main>
      <div className="relative z-20">
        <Footer />
      </div>
    </>
  );
};

export default NPS;