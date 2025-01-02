import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-[#113262] text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to Maxiom
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Your trusted partner in wealth management and financial solutions
            </p>
            <button className="bg-white text-[#113262] px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors">
              Get Started
            </button>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-white shadow-lg rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Investment Advisory</h3>
                <p className="text-gray-600">Expert guidance for your investment decisions with personalized strategies.</p>
              </div>
              <div className="p-6 bg-white shadow-lg rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Portfolio Management</h3>
                <p className="text-gray-600">Professional management of your investment portfolio for optimal returns.</p>
              </div>
              <div className="p-6 bg-white shadow-lg rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Wealth Planning</h3>
                <p className="text-gray-600">Comprehensive wealth planning services for your financial future.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;