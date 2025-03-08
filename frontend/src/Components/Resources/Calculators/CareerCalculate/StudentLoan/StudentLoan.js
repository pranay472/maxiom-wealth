import React from 'react';
import Header from '../../../../Header';
import Footer from '../../../../Footer';
import StudentLoanCalculator from './StudentLoanCalculator';

const StudentLoanInfo = () => {
  return (
    <div className="bg-[#FFFFFF] rounded-lg shadow-lg p-6">
      <h2 className="text-[#1C52A0] text-2xl font-semibold mb-4">What is a Student Loan?</h2>
      <p className="mb-4 text-[#0D0D0D]">A student loan is a type of financial aid designed to help students pay for higher education expenses, including tuition, books, living costs, and other educational fees. These loans provide crucial financial support to pursue academic and career goals.</p>

      <h3 className="text-[#1C52A0] text-xl font-semibold mb-3">Key Components</h3>
      <p className="mb-4 text-[#0D0D0D]">Student loans typically include principal amount, interest rate, repayment term, and various repayment options. Factors like loan type (federal or private), interest rate structure, and grace periods significantly impact the overall loan burden.</p>

      <h3 className="text-[#1C52A0] text-xl font-semibold mb-3">Types of Student Loans</h3>
      <ul className="list-disc pl-6 mb-4 text-[#0D0D0D]">
        <li>Federal Student Loans</li>
        <li>Private Student Loans</li>
        <li>Subsidized Loans</li>
        <li>Unsubsidized Loans</li>
      </ul>

      <h3 className="text-[#1C52A0] text-xl font-semibold mb-3">Benefits of Student Loans</h3>
      <ul className="list-disc pl-6 mb-4 text-[#0D0D0D]">
        <li>Access to higher education</li>
        <li>Flexible repayment options</li>
        <li>Potential tax deductions</li>
        <li>Build credit history</li>
      </ul>

      <h3 className="text-[#1C52A0] text-xl font-semibold mb-3">Using the Student Loan Calculator</h3>
      <p className="mb-4 text-[#0D0D0D]">Calculate your potential loan payments by entering loan amount, interest rate, and repayment term. Understand your monthly obligations and explore different scenarios to make informed financial decisions about your education financing.</p>
    </div>
  );
};

const StudentLoan = () => {
  return (
    <>
      <Header/>
      <main className="overflow-x-hidden">
        <div className="relative z-20">
          <StudentLoanCalculator/>
        </div>
          <StudentLoanInfo />
      </main>
      <div className="relative z-20">
        <Footer />
      </div>
    </>
  );
};

export default StudentLoan;