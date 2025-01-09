import React from "react";
import Header from "../../../../Header";
import Footer from "../../../../Footer";
import SimpleInterestCalculator from "./SimpleInterestCalculator";

const SimpleInterestInfo = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">Understanding Simple Interest</h2>
      <p className="mb-4">Simple interest represents the most basic form of interest calculation in lending and borrowing. Unlike compound interest, simple interest is calculated solely on the initial principal amount, making it easier to understand and predict. This straightforward approach is commonly used in short-term financial arrangements, including personal loans and certain types of consumer financing.</p>

      <h3 className="text-xl font-semibold mb-3">How Simple Interest Works</h3>
      <p className="mb-4">When you borrow or lend money with simple interest, the interest payment remains constant throughout the loan term. For instance, if you borrow ₹10,000 at 5% simple interest annually, you'll pay ₹500 in interest each year, regardless of any previous interest payments. This consistency makes it an attractive option for both borrowers and lenders who prefer predictable payment structures.</p>

      <h3 className="text-xl font-semibold mb-3">Simple Interest Formula Explained</h3>
      <p className="mb-4">The calculation of simple interest follows a straightforward formula:</p>
      <div className="bg-gray-50 p-4 rounded-lg mb-4">
        <p className="font-mono">Interest = P × R × T</p>
        <p className="text-sm text-gray-600 mt-2">
          Where:<br />
          P = Principal (initial amount)<br />
          R = Interest rate per year (in decimal form)<br />
          T = Time period (in years)
        </p>
      </div>

      <h3 className="text-xl font-semibold mb-3">Practical Example</h3>
      <p className="mb-4">Let's consider a practical scenario: If you invest ₹50,000 at 6% simple interest for 2 years, here's how it works:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>Principal (P) = ₹50,000</li>
        <li>Rate (R) = 6% = 0.06</li>
        <li>Time (T) = 2 years</li>
        <li>Interest = 50,000 × 0.06 × 2 = ₹6,000</li>
        <li>Total Amount = ₹56,000</li>
      </ul>

      <h3 className="text-xl font-semibold mb-3">Advantages of Our Simple Interest Calculator</h3>
      <ul className="list-disc pl-6 mb-4">
        <li>Instant and accurate calculations</li>
        <li>Easy comparison of different interest scenarios</li>
        <li>Clear breakdown of principal and interest amounts</li>
        <li>Helps in making informed borrowing decisions</li>
        <li>Perfect for planning short-term investments</li>
      </ul>

      <h3 className="text-xl font-semibold mb-3">Using Our Calculator</h3>
      <p className="mb-4">Our simple interest calculator streamlines your financial planning process. Simply input your principal amount, interest rate, and time period above. The calculator instantly shows you both the interest amount and the total sum you'll receive at maturity. This helps you make well-informed decisions about your investments or loans.</p>
    </div>
  );
};

const SimpleInterest = () => {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <div className="relative z-20">
          <SimpleInterestCalculator />
        </div>
        <SimpleInterestInfo />
      </main>
      <div className="relative z-20">
        <Footer />
      </div>
    </>
  );
};

export default SimpleInterest;