import React, { useState } from 'react';
import { Share, ChevronDown } from 'lucide-react';

const DebtRepaymentCalculator = () => {
  // Strategy selection
  const [paymentStrategy, setPaymentStrategy] = useState('avalanche');
  
  // Monthly Payment
  const [monthlyPayment, setMonthlyPayment] = useState(25000);
  
  // Debts
  const [totalDebt, setTotalDebt] = useState(500000);
  const [minPayment, setMinPayment] = useState(15000);
  const [averageInterestRate, setAverageInterestRate] = useState(24);
  
  // Additional settings
  const [showAdditional, setShowAdditional] = useState(false);
  const [includeWindfall, setIncludeWindfall] = useState(false);
  const [windfallAmount, setWindfallAmount] = useState(100000);
  const [showShareToast, setShowShareToast] = useState(false);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const calculateRepayment = () => {
    let remainingDebt = totalDebt;
    let months = 0;
    let totalInterest = 0;
    const monthlyRate = averageInterestRate / 1200;
    const payment = Math.max(monthlyPayment, minPayment);
    
    // Apply windfall if selected
    if (includeWindfall) {
      remainingDebt -= windfallAmount;
    }

    // Calculate months until debt free
    while (remainingDebt > 0 && months < 360) { // Cap at 30 years
      months++;
      const monthlyInterest = remainingDebt * monthlyRate;
      totalInterest += monthlyInterest;
      remainingDebt = remainingDebt + monthlyInterest - payment;
    }

    const debtFreeDate = new Date();
    debtFreeDate.setMonth(debtFreeDate.getMonth() + months);

    return {
      months: months >= 360 ? -1 : months,
      totalInterest: Math.round(totalInterest),
      monthlyInterest: Math.round(totalDebt * monthlyRate),
      totalPaid: Math.round(totalDebt + totalInterest),
      debtFreeDate: debtFreeDate.toLocaleDateString('en-IN', { 
        year: 'numeric', 
        month: 'long' 
      }),
      monthlySavings: Math.max(0, payment - minPayment)
    };
  };

  const results = calculateRepayment();

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
        <h1 className="text-2xl font-semibold text-[#113262] mb-2">Debt Repayment Calculator</h1>
        <h2 className="text-lg text-gray-600">Plan debt repayments with this calculator.</h2>
      </div>

      <div className="max-w-5xl mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Input Sections */}
          <div className="lg:col-span-2 space-y-8">
            {/* Payment Strategy */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Payment Strategy</h2>
              <div className="flex gap-4">
                <button
                  onClick={() => setPaymentStrategy('avalanche')}
                  className={`flex-1 py-2 rounded ${
                    paymentStrategy === 'avalanche'
                      ? 'bg-[#113262] text-white'
                      : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  Debt Avalanche
                </button>
                <button
                  onClick={() => setPaymentStrategy('snowball')}
                  className={`flex-1 py-2 rounded ${
                    paymentStrategy === 'snowball'
                      ? 'bg-[#113262] text-white'
                      : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  Debt Snowball
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                {paymentStrategy === 'avalanche' 
                  ? 'Pay highest interest first to save money'
                  : 'Pay smallest debts first for quick wins'}
              </p>
            </div>

            {/* Current Debt Details */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Current Debt Details</h2>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block font-medium text-sm mb-1.5">Total Debt Amount</label>
                  <input
                    type="number"
                    value={totalDebt}
                    onChange={(e) => setTotalDebt(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={50000}
                    max={5000000}
                    value={totalDebt}
                    onChange={(e) => setTotalDebt(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>₹50,000</span>
                    <span>₹50L</span>
                  </div>
                </div>

                <div>
                  <label className="block font-medium text-sm mb-1.5">Average Interest Rate (%)</label>
                  <input
                    type="number"
                    value={averageInterestRate}
                    onChange={(e) => setAverageInterestRate(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={8}
                    max={36}
                    value={averageInterestRate}
                    onChange={(e) => setAverageInterestRate(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>8%</span>
                    <span>36%</span>
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
                    min={5000}
                    max={100000}
                    value={monthlyPayment}
                    onChange={(e) => setMonthlyPayment(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>₹5,000</span>
                    <span>₹1L</span>
                  </div>
                </div>

                <div>
                  <label className="block font-medium text-sm mb-1.5">Minimum Payment</label>
                  <input
                    type="number"
                    value={minPayment}
                    onChange={(e) => setMinPayment(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={1000}
                    max={50000}
                    value={minPayment}
                    onChange={(e) => setMinPayment(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>₹1,000</span>
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
                  <label className="flex items-center space-x-2 mb-4">
                    <input
                      type="checkbox"
                      checked={includeWindfall}
                      onChange={(e) => setIncludeWindfall(e.target.checked)}
                      className="rounded"
                    />
                    <span className="text-sm">Include One-time Payment</span>
                  </label>

                  {includeWindfall && (
                    <div>
                      <label className="block font-medium text-sm mb-1.5">One-time Amount</label>
                      <input
                        type="number"
                        value={windfallAmount}
                        onChange={(e) => setWindfallAmount(Number(e.target.value))}
                        className="w-full p-1.5 border rounded text-sm"
                      />
                      <input
                        type="range"
                        min={10000}
                        max={1000000}
                        value={windfallAmount}
                        onChange={(e) => setWindfallAmount(Number(e.target.value))}
                        className="w-full mt-2"
                      />
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Results Section */}
          <div className="bg-[#113262] text-white rounded-lg h-[470px] sticky top-6">
            <div className="p-4 border-b border-white/20">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold">Debt Freedom Plan</h3>
                <button onClick={handleShare} className="p-1 hover:bg-blue-700 rounded">
                  <Share size={18} />
                </button>
              </div>
            </div>

            <div className="p-4">
              <div className="mb-4">
                <div className="text-3xl font-bold mb-1">
                  {results.months === -1 ? 'Over 30 years' : `${results.months} months`}
                </div>
                <div className="text-sm text-gray-300">Time to Debt Freedom</div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-t border-white/20">
                  <span className="text-sm">Total Debt</span>
                  <span className="font-bold">{formatCurrency(totalDebt)}</span>
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
                  <span className="text-sm">Extra Monthly Savings</span>
                  <span className="font-bold">{formatCurrency(results.monthlySavings)}</span>
                </div>

                <div className="flex justify-between items-center py-2 border-t border-white/20">
                  <span className="text-sm">Debt Free Date</span>
                  <span className="font-bold">{results.debtFreeDate}</span>
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

export default DebtRepaymentCalculator;