import React, { useState } from 'react';
import { Share, ChevronDown } from 'lucide-react';

const CreditCardPayoffCalculator = () => {
  // Debt details
  const [currentBalance, setCurrentBalance] = useState(100000);
  const [annualInterestRate, setAnnualInterestRate] = useState(36);
  const [monthlyPayment, setMonthlyPayment] = useState(5000);
  
  // Additional charges
  const [monthlySpending, setMonthlySpending] = useState(0);
  
  // Additional settings
  const [showAdditional, setShowAdditional] = useState(false);
  const [includeLatePayment, setIncludeLatePayment] = useState(false);
  const [showShareToast, setShowShareToast] = useState(false);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const calculatePayoff = () => {
    const monthlyRate = annualInterestRate / 1200; // Convert annual rate to monthly decimal
    let balance = currentBalance;
    let totalInterest = 0;
    let months = 0;
    let totalPaid = 0;

    // Add late payment fee if enabled
    const latePaymentFee = includeLatePayment ? 750 : 0;

    while (balance > 0 && months < 600) { // Cap at 50 years to prevent infinite loops
      months++;
      
      // Add monthly spending
      balance += monthlySpending;
      
      // Add monthly interest
      const monthlyInterest = balance * monthlyRate;
      totalInterest += monthlyInterest;
      balance += monthlyInterest;
      
      // Add late payment fee if enabled
      if (includeLatePayment) {
        balance += latePaymentFee;
        totalInterest += latePaymentFee;
      }
      
      // Subtract payment
      balance -= monthlyPayment;
      totalPaid += monthlyPayment;
    }

    // If still not paid off after 600 months, indicate that
    const willPayoff = months < 600;

    return {
      months: willPayoff ? months : -1,
      totalInterest: Math.round(totalInterest),
      totalPaid: Math.round(totalPaid),
      monthlyInterest: Math.round(currentBalance * monthlyRate)
    };
  };

  const results = calculatePayoff();

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setShowShareToast(true);
      setTimeout(() => setShowShareToast(false), 3000);
    } catch (err) {
      console.error('Failed to copy URL:', err);
    }
  };

  return (
    <div className="calculator-container pt-24">
      <div className="calculator-header text-center mb-8">
        <h1 className="text-2xl font-semibold text-[#113262] mb-2">Credit Card Payoff Calculator</h1>
        <h2 className="text-lg text-gray-600">Calculate credit card payoff with this calculator.</h2>
      </div>

      <div className="max-w-5xl mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Input Sections */}
          <div className="lg:col-span-2 space-y-8">
            {/* Current Debt Details */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Current Debt Details</h2>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block font-medium text-sm mb-1.5">Current Balance</label>
                  <input
                    type="number"
                    value={currentBalance}
                    onChange={(e) => setCurrentBalance(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={1000}
                    max={1000000}
                    value={currentBalance}
                    onChange={(e) => setCurrentBalance(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>₹1,000</span>
                    <span>₹10L</span>
                  </div>
                </div>

                <div>
                  <label className="block font-medium text-sm mb-1.5">Annual Interest Rate (%)</label>
                  <input
                    type="number"
                    value={annualInterestRate}
                    onChange={(e) => setAnnualInterestRate(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={1}
                    max={48}
                    step={0.1}
                    value={annualInterestRate}
                    onChange={(e) => setAnnualInterestRate(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>1%</span>
                    <span>48%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Details */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Payment Details</h2>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block font-medium text-sm mb-1.5">Monthly Payment</label>
                  <input
                    type="number"
                    value={monthlyPayment}
                    onChange={(e) => setMonthlyPayment(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={100}
                    max={100000}
                    value={monthlyPayment}
                    onChange={(e) => setMonthlyPayment(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>₹100</span>
                    <span>₹1L</span>
                  </div>
                </div>

                <div>
                  <label className="block font-medium text-sm mb-1.5">Monthly Spending</label>
                  <input
                    type="number"
                    value={monthlySpending}
                    onChange={(e) => setMonthlySpending(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={0}
                    max={50000}
                    value={monthlySpending}
                    onChange={(e) => setMonthlySpending(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>₹0</span>
                    <span>₹50,000</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Settings */}
            <div className="bg-white rounded-lg shadow">
              <button
                onClick={() => setShowAdditional(!showAdditional)}
                className="w-full p-4 flex justify-between items-center hover:bg-gray-50"
              >
                <h2 className="text-lg font-bold text-gray-900">Additional Settings</h2>
                <ChevronDown
                  className={`transform transition-transform ${showAdditional ? 'rotate-180' : ''}`}
                  size={20}
                />
              </button>

              {showAdditional && (
                <div className="p-4 border-t">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={includeLatePayment}
                      onChange={(e) => setIncludeLatePayment(e.target.checked)}
                      className="rounded"
                    />
                    <span className="text-sm">Include Late Payment Fee (₹750/month)</span>
                  </label>
                </div>
              )}
            </div>
          </div>

          {/* Results Section */}
          <div className="bg-[#113262] text-white rounded-lg h-[420px] sticky top-6">
            <div className="p-4 border-b border-white/20">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold">Payoff Summary</h3>
                <button onClick={handleShare} className="p-1 hover:bg-blue-700 rounded">
                  <Share size={18} />
                </button>
              </div>
            </div>

            <div className="p-4">
              <div className="mb-4">
                <div className="text-3xl font-bold mb-1">
                  {results.months === -1 ? 'Never' : `${results.months} months`}
                </div>
                <div className="text-sm text-gray-300">Time to Pay Off</div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-t border-white/20">
                  <span className="text-sm">Total Principal</span>
                  <span className="font-bold">{formatCurrency(currentBalance)}</span>
                </div>

                <div className="flex justify-between items-center py-2 border-t border-white/20">
                  <span className="text-sm">Total Interest</span>
                  <span className="font-bold">{formatCurrency(results.totalInterest)}</span>
                </div>

                <div className="flex justify-between items-center py-2 border-t border-white/20">
                  <span className="text-sm">Monthly Interest</span>
                  <span className="font-bold">{formatCurrency(results.monthlyInterest)}</span>
                </div>

                <div className="flex justify-between items-center py-2 border-t border-white/20">
                  <span className="text-sm">Total Amount Paid</span>
                  <span className="font-bold">{formatCurrency(results.totalPaid)}</span>
                </div>
              </div>

              <button className="w-full bg-orange-400 text-white py-2 rounded-lg mt-4 hover:bg-orange-500 transition-colors text-sm">
                Get Debt Free →
              </button>
            </div>
          </div>

          {showShareToast && (
            <div className="fixed top-4 right-4 bg-green-600 text-white px-6 py-3 rounded shadow-lg">
              Link copied!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreditCardPayoffCalculator;