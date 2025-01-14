import React from "react";
import Header from "../../../../Header";
import Footer from "../../../../Footer";
import ChildMarriageCalculator from './ChildMarriageCalculator';

const MarriagePlanningGuide = () => (
  <>
    <div className="marriage-guide-container">
      <div className="guide-section">
        <h2 className="main-title">Strategic Planning for Your Child's Wedding</h2>
        
        <div className="planning-steps">
          <div className="step-box">
            <h3>Financial Assessment</h3>
            <p>Begin with a comprehensive financial assessment to determine your target savings goal. Consider factors like venue preferences, guest count, and celebration style to establish a realistic budget framework.</p>
          </div>

          <div className="step-box">
            <h3>Investment Strategy</h3>
            <p>Choose appropriate investment vehicles for your wedding fund. Options include dedicated savings accounts or diversified investment portfolios tailored to your timeline and risk tolerance.</p>
          </div>

          <div className="step-box">
            <h3>Strategic Planning</h3>
            <p>Develop a structured monthly savings plan. Analyze your current expenses to identify areas where you can optimize spending and redirect funds toward your wedding savings goal.</p>
          </div>
        </div>
      </div>

      <div className="guide-section">
        <h2 className="section-title">Investment Avenues</h2>
        <div className="investment-options">
          <ul>
            <li>
              <span className="highlight">Mutual Funds:</span>
              <p>Diversified investment option with professional management</p>
            </li>
            <li>
              <span className="highlight">Equity Markets:</span>
              <p>Potential for higher long-term returns through stock investments</p>
            </li>
            <li>
              <span className="highlight">Real Estate:</span>
              <p>Opportunity for rental income and property appreciation</p>
            </li>
            <li>
              <span className="highlight">Fixed Income:</span>
              <p>Stable returns through bonds and similar instruments</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="guide-section">
        <h2 className="section-title">Benefits of Wedding Planning Calculator</h2>
        <div className="benefits-grid">
          <div className="benefit-item">
            <span className="benefit-icon">📊</span>
            <p>Accurate projection of future wedding costs</p>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">💰</span>
            <p>Customized savings strategies based on timeline</p>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">📈</span>
            <p>Inflation-adjusted calculations</p>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">🎯</span>
            <p>Clear monthly investment targets</p>
          </div>
        </div>
      </div>
    </div>

    <style jsx>{`
      .marriage-guide-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 2rem;
      }

      .guide-section {
        margin-bottom: 3rem;
      }

      .main-title {
        color: #2c3e50;
        font-size: 2.5rem;
        text-align: center;
        margin-bottom: 2rem;
      }

      .section-title {
        color: #2c3e50;
        font-size: 2rem;
        margin-bottom: 1.5rem;
      }

      .planning-steps {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
      }

      .step-box {
        background: #f8f9fa;
        padding: 1.5rem;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      }

      .step-box h3 {
        color: #3498db;
        margin-bottom: 1rem;
      }

      .investment-options ul {
        list-style: none;
        padding: 0;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 1.5rem;
      }

      .investment-options li {
        background: #f8f9fa;
        padding: 1.5rem;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      }

      .highlight {
        color: #e74c3c;
        font-weight: bold;
        display: block;
        margin-bottom: 0.5rem;
      }

      .benefits-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1.5rem;
      }

      .benefit-item {
        text-align: center;
        padding: 1.5rem;
        background: #f8f9fa;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      }

      .benefit-icon {
        font-size: 2rem;
        margin-bottom: 1rem;
        display: block;
      }
    `}</style>
  </>
);

const ChildMarriage = () => (
  <>
    <Header/>
    <ChildMarriageCalculator />
    <MarriagePlanningGuide />
    <Footer />
  </>
);

export default ChildMarriage;