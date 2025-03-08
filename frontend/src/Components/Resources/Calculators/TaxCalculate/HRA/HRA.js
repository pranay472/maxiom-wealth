import React from 'react';
import Header from '../../../../Header';
import Footer from '../../../../Footer';
import HRACalculator from './HRACalculator';

const HRAInfo = () => {
  return (
    <div className="bg-[#FFFFFF] rounded-lg shadow-lg p-6">
      <h2 className="text-[#1C52A0] text-2xl font-semibold mb-4">House Rent Allowance (HRA) Tax Exemption</h2>
      <p className="mb-4 text-[#0D0D0D]">House Rent Allowance (HRA) is a crucial component of salary structure that provides tax benefits to salaried individuals who pay rent for their accommodation. Understanding HRA can help employees optimize their tax liability and reduce overall tax burden.</p>

      <h3 className="text-[#1C52A0] text-xl font-semibold mb-3">HRA Calculation Components</h3>
      <ul className="list-disc pl-6 mb-4 text-[#0D0D0D]">
        <li>Actual HRA Received</li>
        <li>Rent Paid</li>
        <li>Basic Salary</li>
        <li>Dearness Allowance</li>
        <li>City of Residence</li>
      </ul>

      <h3 className="text-[#1C52A0] text-xl font-semibold mb-3">Eligibility Criteria</h3>
      <p className="mb-4 text-[#0D0D0D]">To claim HRA exemption, an individual must be a salaried employee receiving HRA as part of their salary and paying rent for their accommodation. The exemption is subject to specific conditions and calculations.</p>

      <h3 className="text-[#1C52A0] text-xl font-semibold mb-3">HRA Exemption Calculation</h3>
      <ul className="list-disc pl-6 mb-4 text-[#0D0D0D]">
        <li>Minimum of Actual HRA Received</li>
        <li>50% of Basic Salary (Metro Cities)</li>
        <li>40% of Basic Salary (Non-Metro Cities)</li>
        <li>Actual Rent Paid Minus 10% of Basic Salary</li>
      </ul>

      <h3 className="text-[#1C52A0] text-xl font-semibold mb-3">Documentation Requirements</h3>
      <ul className="list-disc pl-6 mb-4 text-[#0D0D0D]">
        <li>Rent Receipts</li>
        <li>Rental Agreement</li>
        <li>PAN of Landlord (if rent exceeds ₹1 Lakh annually)</li>
        <li>Salary Slip</li>
        <li>Form 12BB</li>
      </ul>

      <h3 className="text-[#1C52A0] text-xl font-semibold mb-3">Tax Planning Strategies</h3>
      <ul className="list-disc pl-6 mb-4 text-[#0D0D0D]">
        <li>Maintain Proper Rent Documentation</li>
        <li>Understand Exemption Limits</li>
        <li>Consider Rental Property Location</li>
        <li>Optimize Salary Structure</li>
        <li>Consult Tax Professionals</li>
      </ul>

      <h3 className="text-[#1C52A0] text-xl font-semibold mb-3">Using the HRA Calculator</h3>
      <p className="mb-4 text-[#0D0D0D]">Calculate your potential HRA tax exemption by entering details such as basic salary, HRA received, rent paid, and city of residence. Gain insights into your tax savings and optimize your tax planning strategy.</p>
    </div>
  );
};

const HRA = () => {
  return (
    <>
      <Header/>
      <main className="overflow-x-hidden">
        <div className="relative z-20">
          <HRACalculator/>
        </div>
        <HRAInfo />
      </main>
      <div className="relative z-20">
        <Footer />
      </div>
    </>
  );
};

export default HRA;