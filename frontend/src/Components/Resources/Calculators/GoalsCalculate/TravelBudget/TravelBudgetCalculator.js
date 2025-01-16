import React, { useState } from 'react';
import { Share, ChevronDown } from 'lucide-react';

const TravelBudgetCalculator = () => {
  // Basic travel details
  const [numberOfTravelers, setNumberOfTravelers] = useState(2);
  const [tripDuration, setTripDuration] = useState(7);
  const [destinationType, setDestinationType] = useState('domestic');

  // Accommodation and transport
  const [accommodationBudget, setAccommodationBudget] = useState(5000);
  const [transportationBudget, setTransportationBudget] = useState(3000);

  // Daily expenses
  const [foodBudget, setFoodBudget] = useState(1000);
  const [activitiesBudget, setActivitiesBudget] = useState(2000);

  // Additional expenses section
  const [showAdditional, setShowAdditional] = useState(false);
  const [shoppingBudget, setShoppingBudget] = useState(2000);
  const [emergencyFund, setEmergencyFund] = useState(5000);
  const [insuranceCost, setInsuranceCost] = useState(1000);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const calculateTotalBudget = () => {
    // Daily expenses calculation
    const dailyExpenses = (foodBudget + activitiesBudget) * tripDuration;
    const totalAccommodation = accommodationBudget * tripDuration;
    
    // One-time expenses calculation
    const totalTransportation = transportationBudget * numberOfTravelers;
    const totalShopping = shoppingBudget * numberOfTravelers;
    const totalInsurance = insuranceCost * numberOfTravelers;
    
    // Subtotals by category
    const totalDailyExpenses = dailyExpenses + totalAccommodation;
    const totalOneTimeExpenses = totalTransportation + totalShopping + totalInsurance + emergencyFund;
    
    const subtotal = totalDailyExpenses + totalOneTimeExpenses;
    
    const perPersonCost = Math.round(subtotal / numberOfTravelers);
    const dailyCost = Math.round(subtotal / tripDuration);
    
    return {
      totalCost: Math.round(subtotal),
      perPerson: perPersonCost,
      perDay: dailyCost,
      breakdown: {
        dailyExpenses: totalDailyExpenses,
        oneTimeExpenses: totalOneTimeExpenses
      }
    };
  };

  const results = calculateTotalBudget();

  return (
    <div className="calculator-container pt-16">
      <div className="calculator-header text-center mb-8">
        <h1 className="text-2xl font-semibold text-[#113262] mb-2">Travel Budget Planner</h1>
        <h2 className="text-lg text-gray-600">Plan travel budgets with this calculator</h2>
      </div>
      <div className="max-w-5xl mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Input Sections */}
          <div className="lg:col-span-2 space-y-8">
            {/* Trip Details Section */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Trip Details</h2>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block font-medium text-sm mb-1.5">Number of Travelers</label>
                  <input
                    type="number"
                    value={numberOfTravelers}
                    onChange={(e) => setNumberOfTravelers(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={1}
                    max={10}
                    value={numberOfTravelers}
                    onChange={(e) => setNumberOfTravelers(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                </div>

                <div>
                  <label className="block font-medium text-sm mb-1.5">Duration (Days)</label>
                  <input
                    type="number"
                    value={tripDuration}
                    onChange={(e) => setTripDuration(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={1}
                    max={30}
                    value={tripDuration}
                    onChange={(e) => setTripDuration(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                </div>

                <div className="col-span-2">
                  <label className="block font-medium text-sm mb-1.5">Destination Type</label>
                  <select
                    value={destinationType}
                    onChange={(e) => setDestinationType(e.target.value)}
                    className="w-full p-1.5 border rounded text-sm"
                  >
                    <option value="domestic">Domestic</option>
                    <option value="international">International</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Accommodation & Transportation Section */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Accommodation & Transportation</h2>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block font-medium text-sm mb-1.5">Daily Accommodation Budget</label>
                  <input
                    type="number"
                    value={accommodationBudget}
                    onChange={(e) => setAccommodationBudget(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={500}
                    max={20000}
                    value={accommodationBudget}
                    onChange={(e) => setAccommodationBudget(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                </div>

                <div>
                  <label className="block font-medium text-sm mb-1.5">Transportation Budget per Person</label>
                  <input
                    type="number"
                    value={transportationBudget}
                    onChange={(e) => setTransportationBudget(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={500}
                    max={50000}
                    value={transportationBudget}
                    onChange={(e) => setTransportationBudget(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                </div>
              </div>
            </div>

            {/* Daily Expenses Section */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Daily Expenses</h2>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block font-medium text-sm mb-1.5">Daily Food Budget</label>
                  <input
                    type="number"
                    value={foodBudget}
                    onChange={(e) => setFoodBudget(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={500}
                    max={5000}
                    value={foodBudget}
                    onChange={(e) => setFoodBudget(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                </div>

                <div>
                  <label className="block font-medium text-sm mb-1.5">Daily Activities Budget</label>
                  <input
                    type="number"
                    value={activitiesBudget}
                    onChange={(e) => setActivitiesBudget(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={500}
                    max={10000}
                    value={activitiesBudget}
                    onChange={(e) => setActivitiesBudget(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                </div>
              </div>
            </div>

            {/* Additional Expenses Section */}
            <div className="bg-white rounded-lg shadow">
              <button
                onClick={() => setShowAdditional(!showAdditional)}
                className="w-full p-4 flex justify-between items-center hover:bg-gray-50"
              >
                <h2 className="text-lg font-bold text-gray-900">Additional Expenses</h2>
                <ChevronDown 
                  className={`transform transition-transform ${showAdditional ? 'rotate-180' : ''}`} 
                  size={20}
                />
              </button>
              
              {showAdditional && (
                <div className="p-4 border-t">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block font-medium text-sm mb-1.5">Shopping Budget per Person</label>
                      <input
                        type="number"
                        value={shoppingBudget}
                        onChange={(e) => setShoppingBudget(Number(e.target.value))}
                        className="w-full p-1.5 border rounded text-sm"
                      />
                      <input
                        type="range"
                        min={0}
                        max={20000}
                        value={shoppingBudget}
                        onChange={(e) => setShoppingBudget(Number(e.target.value))}
                        className="w-full mt-2"
                      />
                    </div>

                    <div>
                      <label className="block font-medium text-sm mb-1.5">Emergency Fund</label>
                      <input
                        type="number"
                        value={emergencyFund}
                        onChange={(e) => setEmergencyFund(Number(e.target.value))}
                        className="w-full p-1.5 border rounded text-sm"
                      />
                      <input
                        type="range"
                        min={0}
                        max={20000}
                        value={emergencyFund}
                        onChange={(e) => setEmergencyFund(Number(e.target.value))}
                        className="w-full mt-2"
                      />
                    </div>

                    <div>
                      <label className="block font-medium text-sm mb-1.5">Insurance Cost per Person</label>
                      <input
                        type="number"
                        value={insuranceCost}
                        onChange={(e) => setInsuranceCost(Number(e.target.value))}
                        className="w-full p-1.5 border rounded text-sm"
                      />
                      <input
                        type="range"
                        min={0}
                        max={10000}
                        value={insuranceCost}
                        onChange={(e) => setInsuranceCost(Number(e.target.value))}
                        className="w-full mt-2"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Results Section */}
          <div className="bg-[#113262] text-white rounded-lg h-[360px] sticky top-6">
            <div className="p-4 border-b border-white/20">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold">Travel Budget Summary</h3>
                <button className="p-1 hover:bg-blue-700 rounded">
                  <Share size={18} />
                </button>
              </div>
            </div>

            <div className="p-4">
              <div className="mb-4">
                <div className="text-3xl font-bold mb-1">{formatCurrency(results.totalCost)}</div>
                <div className="text-sm text-gray-300">Total Trip Budget</div>
              </div>

              <div className="space-y-3">
                <h4 className="text-sm font-medium text-gray-300">Budget Breakdown</h4>
                
                <div className="flex justify-between items-center py-2 border-t border-white/20">
                  <span className="text-sm">Cost per Person</span>
                  <span className="font-bold">{formatCurrency(results.perPerson)}</span>
                </div>
                
                <div className="flex justify-between items-center py-2 border-t border-white/20">
                  <span className="text-sm">Daily Budget</span>
                  <span className="font-bold">{formatCurrency(results.perDay)}</span>
                </div>
              </div>

              <button className="w-full bg-orange-400 text-white py-2 rounded-lg mt-4 hover:bg-orange-500 transition-colors text-sm">
                Start Travel Planning →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelBudgetCalculator;