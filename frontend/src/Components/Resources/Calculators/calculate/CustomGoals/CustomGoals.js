import React from 'react';
import GoalsCalculator from './GoalsCalculator';
import Header from '../../../../Header';
import Footer from '../../../../Footer';

const CustomGoals = () => {
  const GoalsInfo = () => (
    <div className="text-gray-700">
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Life Goals and Financial Planning</h2>
        <p className="mb-4 leading-relaxed">
          Life presents countless opportunities for personal growth and achievement. From purchasing your dream home 
          to starting a business venture, or funding higher education - each individual's aspirations shape their 
          unique financial journey. Whether it's building a retirement nest egg or creating a legacy for future 
          generations, proper financial planning turns these dreams into attainable goals.
        </p>
        <p className="leading-relaxed">
          Modern lifestyles often require substantial financial backing. Some may aspire to own luxury vehicles 
          or high-end gadgets, while others might focus on building a diverse investment portfolio or establishing 
          a charitable foundation. The key lies in identifying these personal objectives and creating a structured 
          approach to achieve them.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Investment as a Path to Goal Achievement</h2>
        <p className="mb-4 leading-relaxed">
          Strategic investing serves as a powerful tool for reaching life's milestones. Short-term goals, such as 
          creating an emergency fund or saving for a dream vacation, require different investment approaches than 
          long-term objectives like property acquisition or retirement planning. Regular investment not only helps 
          accumulate wealth but also provides protection against inflation and market volatility.
        </p>
        <p className="leading-relaxed">
          The power of compound returns, combined with disciplined investing, can transform modest monthly 
          contributions into substantial wealth over time. Tax-efficient investment strategies further enhance 
          returns, while diversification helps manage risk across different market conditions.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding Our Custom Goals Calculator</h2>
        <p className="mb-4 leading-relaxed">
          Our calculator employs advanced financial algorithms to provide personalized investment insights. It 
          factors in critical variables such as time horizon, inflation impact, and expected investment returns 
          to determine optimal investment strategies. The tool considers both lump-sum and systematic investment 
          approaches, allowing for flexibility in financial planning.
        </p>
        <p className="leading-relaxed">
          By accounting for existing savings and their potential growth, the calculator offers a comprehensive 
          view of your financial journey. It helps visualize how different investment amounts and frequencies 
          can impact your goal achievement timeline.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Maximizing the Calculator's Potential</h2>
        <p className="mb-4 leading-relaxed">
          To get the most accurate results, start by defining your goal amount based on current market values. 
          Consider factors like inflation and realistic investment returns based on your risk tolerance and 
          market conditions. The calculator allows you to experiment with different scenarios, helping you 
          understand how adjusting variables affects your investment requirements.
        </p>
        <p className="leading-relaxed">
          For those with existing savings, the tool factors in both current corpus and its potential growth, 
          providing a more precise estimate of additional investments needed. This feature helps create a more 
          tailored and achievable financial roadmap.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Benefits of Goal-Based Financial Planning</h2>
        <p className="mb-4 leading-relaxed">
          Goal-based planning transforms abstract financial targets into concrete, achievable objectives. Our 
          calculator helps break down long-term goals into manageable monthly or annual investment commitments, 
          making the journey less daunting and more structured.
        </p>
        <p className="leading-relaxed">
          Regular monitoring and adjustment of your investment strategy ensure you stay on track. The calculator 
          serves as a dynamic tool, allowing you to modify your approach as circumstances change or as you get 
          closer to your goals. This flexibility, combined with disciplined investing, significantly increases 
          your chances of financial success.
        </p>
      </section>
    </div>
  );

  return (
    <div className="w-full">
        <Header/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GoalsCalculator />
        <div className="mt-16 max-w-4xl">
          <GoalsInfo />
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default CustomGoals;