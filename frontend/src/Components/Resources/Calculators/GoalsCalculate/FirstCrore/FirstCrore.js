import React from 'react';
import Header from '../../../../Header';
import Footer from '../../../../Footer';
import FirstCroreCalculator from './FirstCroreCalculator';


const FirstCroreInfo = () => {
    return (
      <div className="px-4 py-12">
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Building Your Path to One Crore</h2>
            <p className="text-gray-600 mb-4">
              Achieving your first crore is a significant milestone that requires strategic planning and disciplined execution. 
              While the journey demands dedication, it's an attainable goal with the right approach to saving and investing. 
              Starting early, particularly in your twenties, provides a substantial advantage due to the power of compound growth 
              over time.
            </p>
          </section>
  
          <section>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Strategic Investment Approaches</h3>
            <p className="text-gray-600 mb-4">
              Success in reaching one crore depends on creating a balanced portfolio of investments aligned with your risk tolerance. 
              High-yielding assets can accelerate your journey, but it's crucial to understand that higher returns often come with 
              increased risk. A diversified approach across different asset classes can help manage these risks while maintaining 
              growth potential.
            </p>
            <p className="text-gray-600 mb-4">
              Your investment strategy should evolve with your life stage, financial goals, and changing market conditions. Regular 
              monitoring and rebalancing of your portfolio ensures you stay on track while managing risk appropriately.
            </p>
          </section>
  
          <section>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Maximizing Your First Crore</h3>
            <div className="space-y-4">
              <p className="text-gray-600">
                Once you achieve your first crore, several strategic options become available:
              </p>
              <ul className="list-disc pl-5 space-y-3 text-gray-600">
                <li>
                  <span className="font-medium">Business Expansion:</span> Invest in starting or scaling a business venture to generate additional income streams
                </li>
                <li>
                  <span className="font-medium">Real Estate Investment:</span> Consider property investments for both appreciation and rental income potential
                </li>
                <li>
                  <span className="font-medium">Portfolio Diversification:</span> Create a balanced mix of equity, debt, and alternative investments
                </li>
                <li>
                  <span className="font-medium">Professional Wealth Management:</span> Engage with financial experts for optimized portfolio management
                </li>
              </ul>
            </div>
          </section>
  
          <section>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Investment Pathways</h3>
            <p className="text-gray-600 mb-4">
              Multiple investment avenues can contribute to reaching your first crore:
            </p>
            <ul className="list-disc pl-5 space-y-3 text-gray-600">
              <li>
                <span className="font-medium">Equity Markets:</span> Long-term investment in stocks and mutual funds for potential high returns
              </li>
              <li>
                <span className="font-medium">Real Estate:</span> Strategic property investments in growing markets
              </li>
              <li>
                <span className="font-medium">Business Ventures:</span> Entrepreneurial initiatives with scalable potential
              </li>
              <li>
                <span className="font-medium">Systematic Investment Plans (SIPs):</span> Regular, disciplined investing in market instruments
              </li>
            </ul>
          </section>
  
          <section>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Benefits of Our Calculator</h3>
            <p className="text-gray-600 mb-4">
              Our First Crore Calculator serves as a powerful planning tool by:
            </p>
            <ul className="list-disc pl-5 space-y-3 text-gray-600">
              <li>Providing clear visibility of your required monthly savings</li>
              <li>Accounting for inflation impact on your target amount</li>
              <li>Helping adjust investment strategies based on time horizons</li>
              <li>Enabling scenario planning with different return assumptions</li>
              <li>Tracking progress towards your financial milestone</li>
            </ul>
          </section>
        </div>
      </div>
    );
  };

const FirstCrore = () => {
  return (
    <>
      <Header/>
      <main className="overflow-x-hidden bg-gray-100">
        <div className="container mx-auto">
          <div className="relative z-20">
            <FirstCroreCalculator />
            <FirstCroreInfo/>
          </div>
        </div>
      </main>
      <Footer/>
    </>
  );
};

export default FirstCrore;