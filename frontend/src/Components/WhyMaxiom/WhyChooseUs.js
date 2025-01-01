import React from 'react';
import '../../Styles/WhyMaxiomCss/WhyChooseUs.css';
import { Trophy, Target, Shield } from 'lucide-react';

const QuoteIcon = () => (
  <div className="quote-container">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="23" fill="none" className="quote-mark">
      <path fill="#F58024" d="M23.683 16.2c0 1.267-.481 2.356-1.444 3.268-.912.861-2.077 1.292-3.496 1.292-1.57 0-2.888-.557-3.952-1.672-1.064-1.115-1.596-2.71-1.596-4.788 0-4.104 1.039-6.27 3.116-8.5C18.44 3.52 20.77 2.253 23.303 2v3.572c-1.621.355-2.964 1.267-4.028 2.736-1.064 1.47-1.621 2.015-1.672 3.636.355-.253 1.014-.444 1.672-.444 1.318 0 2.407.43 3.268 1.292.862.81 1.14 1.99 1.14 3.408ZM10.683 16.2c0 1.267-.481 2.356-1.444 3.268-.912.861-2.077 1.292-3.496 1.292-1.57 0-2.888-.557-3.952-1.672C.727 17.973.195 16.378.195 14.3c0-4.104 1.039-6.27 3.116-8.5C5.44 3.52 7.77 2.253 10.303 2v3.572c-1.621.355-2.964 1.267-4.028 2.736-1.064 1.47-1.621 2.015-1.672 3.636.355-.253 1.014-.444 1.672-.444 1.318 0 2.407.43 3.268 1.292.862.81 1.14 1.99 1.14 3.408Z" />
    </svg>
    <div className="dashed-line"></div>
  </div>
);

const WhyChooseUs = () => {
  const backgroundPatterns = {
    geometric: 'repeating-linear-gradient(45deg, #f8fafc, #f8fafc 10px, #f1f5f9 10px, #f1f5f9 20px)',
    network: 'radial-gradient(circle at 50% 50%, #e2e8f0 1px, transparent 1px), radial-gradient(circle at 0% 0%, #e2e8f0 1px, transparent 1px)',
    graph: 'linear-gradient(0deg, #f1f5f9 2px, transparent 2px), linear-gradient(90deg, #f1f5f9 2px, transparent 2px)'
  };

  return (
    <div className="min-h-screen bg-slate-50 why-choose-us">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center overflow-hidden hero-section">
        {/* Hero Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center transform scale-105 hero-background"
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 to-indigo-900/90 hero-overlay"></div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-6 relative z-10 text-white hero-content">
          <div className="max-w-3xl content-wrapper">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Why Choose Maxiom
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 leading-relaxed hero-description">
              Your trusted partner in building and preserving wealth through scientific and process-driven investing.
            </p>
            <div className="flex flex-wrap gap-4 stats-container">
              <div className="flex items-center gap-2 stat-item">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm icon-wrapper">
                  <Trophy className="h-6 w-6 text-white icon" />
                </div>
                <span className="text-lg">1000+ Families</span>
              </div>
              <div className="flex items-center gap-2 stat-item">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm icon-wrapper">
                  <Target className="h-6 w-6 text-white icon" />
                </div>
                <span className="text-lg">450+ Crores Assets</span>
              </div>
              <div className="flex items-center gap-2 stat-item">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm icon-wrapper">
                  <Shield className="h-6 w-6 text-white icon" />
                </div>
                <span className="text-lg">SEBI Registered</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="values-content">
          <div className="values-intro">
            <div className="card-icon-wrapper">
              <Target className="card-icon h-6 w-6 text-blue-900" />
            </div>
            <h2>Our Values</h2>
            <QuoteIcon />
            <p className="values-description">
              Founded on the principles of transparency and client-first philosophy, Maxiom Wealth emerged as a response to the need for honest, effective wealth management. Our journey began with a simple question: How can we make investing more rewarding for our clients? This quest led to the creation of a company that puts clients' interests at the heart of everything we do.
            </p>
          </div>

          <div className="vision-mission-container">
            <div className="vision-box">
              <div className="card-icon-wrapper">
                <Shield className="card-icon h-6 w-6 text-blue-900" />
              </div>
              <h3>Vision</h3>
              <QuoteIcon />
              <p>
                To be India's most trusted and client-centric wealth advisory, helping people achieve financial independence & financial well-being, grow & preserve wealth.
              </p>
            </div>

            <div className="mission-box">
              <div className="card-icon-wrapper">
                <Trophy className="card-icon h-6 w-6 text-blue-900" />
              </div>
              <h3>Mission</h3>
              <QuoteIcon />
              <p>
                Enable better investing advised by industry experts & unbiased research powered by machine learning algorithms, operating on a transparent & fee-based model free of hidden costs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;