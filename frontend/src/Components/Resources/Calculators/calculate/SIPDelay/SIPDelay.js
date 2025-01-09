import React from "react";
import Header from "../../../../Header";
import Footer from "../../../../Footer";
import SIPDelayCalculator from "./SIPDelayCalculator";

const SIPDelayExplanation = () => {
    return (
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-6">Understanding SIP Delay and Investment Timing</h2>
        
        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">What is SIP Delay Cost?</h3>
          <p>
            SIP delay cost represents the potential earnings lost when you postpone your investment. 
            Each day of delay means missing out on potential market growth and compound returns. 
            The longer you wait, the more significant the opportunity cost becomes.
          </p>
        </section>
        
        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">The Power of Early Investment</h3>
          <p className="mb-4">
            Starting your investment journey early provides multiple strategic advantages:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Maximize compound interest potential</li>
            <li>Smooth out market volatility through consistent investments</li>
            <li>Build long-term wealth through disciplined saving</li>
            <li>Create a robust financial safety net</li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Compounding: Your Financial Superpower</h3>
          <p>
            Compounding transforms small, consistent investments into substantial wealth. 
            By reinvesting returns, you create a multiplicative effect where your money works continuously, 
            generating returns not just on your principal, but on previously earned returns.
          </p>
        </section>
        
        <section>
          <h3 className="text-2xl font-semibold mb-4">Strategic Investment Approach</h3>
          <p className="mb-4">
            The ideal investment strategy involves:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Starting as early as possible</li>
            <li>Investing consistently</li>
            <li>Adapting investments with changing financial circumstances</li>
            <li>Maintaining a long-term perspective</li>
          </ul>
        </section>
      </div>
    );
  };

const SIPDelay = () => {
    return (
      <>
        <Header />
        <main className="overflow-x-hidden">
          <div className="relative z-20">
            <SIPDelayCalculator/>
            <SIPDelayExplanation />
          </div>
        </main>
        <div className="relative z-20">
          <Footer />
        </div>
      </>
    );
  };
  
export default SIPDelay;