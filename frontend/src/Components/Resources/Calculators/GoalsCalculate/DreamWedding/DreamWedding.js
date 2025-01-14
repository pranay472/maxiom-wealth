import React from 'react';
import Header from '../../../../Header';
import Footer from '../../../../Footer';
import DreamWeddingCalculator from './DreamWeddingCalculator';

const WeddingInfo = () => (
  <div className="px-4 py-8">
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding Wedding Investment Planning</h2>
      <p className="text-gray-600 mb-4">
        Creating a wedding investment strategy helps transform your dream celebration into reality. By developing a structured 
        financial approach, you can ensure your special day unfolds exactly as envisioned while maintaining financial prudence.
      </p>
    </section>

    <section className="mb-8">
      <h3 className="text-xl font-semibold text-gray-900 mb-3">Benefits of Early Wedding Investment</h3>
      <p className="text-gray-600 mb-4">
        Starting your wedding investment journey early provides numerous advantages. It offers greater flexibility in choosing 
        venues, vendors, and experiences while reducing financial stress. Whether you're planning an intimate gathering or a 
        grand celebration, proper financial preparation ensures you can create lasting memories without compromise.
      </p>
    </section>

    <section className="mb-8">
      <h3 className="text-xl font-semibold text-gray-900 mb-3">Strategic Wedding Planning Steps</h3>
      <div className="space-y-4 text-gray-600">
        <p>
          Begin by establishing clear financial objectives and creating a detailed budget that aligns with your vision. Consider 
          key factors such as guest count, venue preferences, and whether you're dreaming of a destination or local celebration.
        </p>
        <p>
          Important considerations include:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Determining your ideal wedding style and location</li>
          <li>Setting a realistic guest count and venue capacity</li>
          <li>Planning for both essential and discretionary expenses</li>
          <li>Creating a systematic investment schedule</li>
        </ul>
        <p>
          Regular monitoring and adjustment of your investment strategy ensures you stay on track to achieve your wedding goals 
          while maintaining financial stability.
        </p>
      </div>
    </section>
  </div>
);

const DreamWedding = () => {
  return (
    <>
      <Header/>
      <main className="overflow-x-hidden bg-gray-100">
        <div className="container mx-auto">
          <div className="relative z-20">
            <DreamWeddingCalculator />
            <WeddingInfo />
          </div>
        </div>
      </main>
      <Footer/>
    </>
  );
};

export default DreamWedding;