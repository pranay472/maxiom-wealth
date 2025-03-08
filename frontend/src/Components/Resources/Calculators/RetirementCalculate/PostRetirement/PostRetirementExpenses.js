import React from 'react';
import Header from '../../../../Header';
import Footer from '../../../../Footer';
import PostRetirementCalculator from './PostRetirementCalculator';

const PostRetirementInfo = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">What is Post-Retirement Planning?</h2>
      <p className="mb-4">Post-retirement planning involves managing your finances and lifestyle after retirement to ensure a comfortable and secure life. It focuses on optimizing your retirement corpus, managing expenses, and maintaining your desired standard of living throughout your retirement years.</p>

      <h3 className="text-xl font-semibold mb-3">Key Components</h3>
      <p className="mb-4">Post-retirement planning considers various factors including your retirement corpus, monthly expenses, healthcare costs, inflation, and expected returns on investments. It helps create a sustainable withdrawal strategy that ensures your savings last throughout retirement.</p>

      <h3 className="text-xl font-semibold mb-3">Why is Post-Retirement Planning Important?</h3>
      <ul className="list-disc pl-6 mb-4">
        <li>Ensures financial independence after retirement</li>
        <li>Helps manage healthcare and lifestyle expenses</li>
        <li>Protects against inflation impact</li>
        <li>Creates sustainable income streams</li>
      </ul>

      <h3 className="text-xl font-semibold mb-3">Using the Post-Retirement Calculator</h3>
      <p className="mb-4">Input your retirement corpus, expected monthly expenses, and investment returns to understand how long your savings will last. This calculator helps you plan your withdrawals and adjust your lifestyle to ensure financial security throughout retirement.</p>
    </div>
  );
};

const PostRetirement = () => {
  return (
    <>
      <Header/>
      <main className="overflow-x-hidden">
        <div className="relative z-20">
          <PostRetirementCalculator/>
        </div>
          <PostRetirementInfo />
      </main>
      <div className="relative z-20">
        <Footer />
      </div>
    </>
  );
};

export default PostRetirement;