import React from 'react';
import Header from '../../../../Header';
import Footer from '../../../../Footer';
import GSTCalculator from './GSTCalculator';

const GSTInfo = () => {
  return (
    <div className="bg-[#FFFFFF] rounded-lg shadow-lg p-6">
      <h2 className="text-[#1C52A0] text-2xl font-semibold mb-4">What is GST?</h2>
      <p className="mb-4 text-[#0D0D0D]">Goods and Services Tax (GST) is a comprehensive, multi-stage, destination-based tax levied on the supply of goods and services. It is a unified tax system that replaced multiple indirect taxes, simplifying the taxation process and creating a more transparent economic environment.</p>

      <h3 className="text-[#1C52A0] text-xl font-semibold mb-3">Key Components</h3>
      <p className="mb-4 text-[#0D0D0D]">GST is structured with different tax rates for various goods and services, including 0%, 5%, 12%, 18%, and 28%. The tax is collected at every stage of the supply chain, with input tax credit allowing businesses to offset the GST paid on inputs against the GST collected on outputs.</p>

      <h3 className="text-[#1C52A0] text-xl font-semibold mb-3">Types of GST</h3>
      <ul className="list-disc pl-6 mb-4 text-[#0D0D0D]">
        <li>Central GST (CGST)</li>
        <li>State GST (SGST)</li>
        <li>Integrated GST (IGST)</li>
        <li>Union Territory GST (UTGST)</li>
      </ul>

      <h3 className="text-[#1C52A0] text-xl font-semibold mb-3">Benefits of GST</h3>
      <ul className="list-disc pl-6 mb-4 text-[#0D0D0D]">
        <li>Simplified tax structure</li>
        <li>Reduced cascading effect of taxes</li>
        <li>Increased transparency</li>
        <li>Easier interstate trade</li>
      </ul>

      <h3 className="text-[#1C52A0] text-xl font-semibold mb-3">Using the GST Calculator</h3>
      <p className="mb-4 text-[#0D0D0D]">Calculate GST for your transactions by entering the base amount and applicable GST rate. Understand how GST impacts your business or personal finances, and get a clear breakdown of tax calculations.</p>
    </div>
  );
};

const GST = () => {
  return (
    <>
      <Header/>
      <main className="overflow-x-hidden">
        <div className="relative z-20">
          <GSTCalculator/>
        </div>
          <GSTInfo />
      </main>
      <div className="relative z-20">
        <Footer />
      </div>
    </>
  );
};

export default GST;