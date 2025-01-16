import React, { useState } from 'react';
import { Share, ChevronDown, Plane, Hotel, UtensilsCrossed, Train, Globe, Briefcase, Users } from 'lucide-react';

const WorldTourCalculator = () => {
  // Basic tour details
  const [numDestinations, setNumDestinations] = useState(5);
  const [daysPerDestination, setDaysPerDestination] = useState(4);
  const [frequency, setFrequency] = useState(1);
  const [travelClass, setTravelClass] = useState('economy');

  // Budget details
  const [accommodationLevel, setAccommodationLevel] = useState(12000);  // ~$150
  const [activityBudget, setActivityBudget] = useState(8000);     // ~$100

  // Additional settings
  const [showAdditional, setShowAdditional] = useState(false);
  const [includeActivities, setIncludeActivities] = useState(true);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const calculateTour = () => {
    // Base costs per destination (in INR)
    const baseCosts = {
      economy: 65000,   // ~$800
      business: 205000, // ~$2500
      first: 410000    // ~$5000
    };

    // Flight multipliers based on class
    const flightMultiplier = {
      economy: 1,
      business: 3.2,
      first: 6
    };

    // Calculate total trip duration
    const totalDays = numDestinations * daysPerDestination;
    
    // Calculate flight costs
    const flightCosts = baseCosts[travelClass] * numDestinations * flightMultiplier[travelClass];
    
    // Calculate accommodation costs
    const accommodationCosts = accommodationLevel * totalDays;
    
    // Calculate food costs (40% of accommodation budget per day)
    const foodCosts = (accommodationLevel * 0.4) * totalDays;
    
    // Calculate local transport costs (₹5000 per day)
    const transportCosts = 5000 * totalDays;
    
    // Calculate activities costs
    const activityCosts = includeActivities ? (activityBudget * totalDays) : 0;
    
    // Calculate costs per tour
    const tripTotal = flightCosts + accommodationCosts + foodCosts + transportCosts + activityCosts;
    
    // Calculate annual costs based on frequency
    const annualCost = tripTotal * frequency;
    
    return {
      totalAnnualCost: Math.round(annualCost),
      monthlySavings: Math.round(annualCost / 12),
      breakdown: {
        flights: Math.round(flightCosts * frequency),
        accommodation: Math.round(accommodationCosts * frequency),
        food: Math.round(foodCosts * frequency),
        transport: Math.round(transportCosts * frequency),
        activities: Math.round(activityCosts * frequency)
      }
    };
  };

  const results = calculateTour();

  return (
    <div className="calculator-container pt-24">
      <div className="calculator-header text-center mb-8">
        <h1 className="text-2xl font-semibold text-[#113262] mb-2">World Tour Calculator</h1>
        <h2 className="text-lg text-gray-600">Plan Your Global Adventures</h2>
      </div>
      <div className="max-w-5xl mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Input Sections */}
          <div className="lg:col-span-2 space-y-8">
            {/* Tour Details Section */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Tour Details</h2>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block font-medium text-sm mb-1.5">Number of Destinations</label>
                  <input
                    type="number"
                    value={numDestinations}
                    onChange={(e) => setNumDestinations(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={2}
                    max={15}
                    value={numDestinations}
                    onChange={(e) => setNumDestinations(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                </div>

                <div>
                  <label className="block font-medium text-sm mb-1.5">Days per Destination</label>
                  <input
                    type="number"
                    value={daysPerDestination}
                    onChange={(e) => setDaysPerDestination(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={2}
                    max={10}
                    value={daysPerDestination}
                    onChange={(e) => setDaysPerDestination(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                </div>

                <div>
                  <label className="block font-medium text-sm mb-1.5">Tours per Year</label>
                  <input
                    type="number"
                    value={frequency}
                    onChange={(e) => setFrequency(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={1}
                    max={4}
                    value={frequency}
                    onChange={(e) => setFrequency(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                </div>
              </div>
            </div>

            {/* Travel Class Section */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Travel Class</h2>
              <div className="flex gap-2">
                {[
                  { value: 'economy', icon: Users, label: 'Economy' },
                  { value: 'business', icon: Briefcase, label: 'Business' },
                  { value: 'first', icon: Plane, label: 'First' }
                ].map(({ value, icon: Icon, label }) => (
                  <button
                    key={value}
                    onClick={() => setTravelClass(value)}
                    className={`
                      flex-1 px-4 py-3 rounded-lg flex flex-col items-center gap-2
                      transition-all duration-200 ease-in-out
                      ${travelClass === value 
                        ? 'bg-[#113262] text-white shadow-md transform scale-[1.02]' 
                        : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                      }
                    `}
                  >
                    <Icon size={18} className={travelClass === value ? 'text-white' : 'text-gray-500'} />
                    <span className="text-sm font-medium">{label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Additional Settings Section */}
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
                  <div className="space-y-6">
                    <div>
                      <label className="block font-medium text-sm mb-1.5">Daily Accommodation Budget (₹)</label>
                      <input
                        type="number"
                        value={accommodationLevel}
                        onChange={(e) => setAccommodationLevel(Number(e.target.value))}
                        className="w-full p-1.5 border rounded text-sm"
                      />
                      <input
                        type="range"
                        min={4000}
                        max={40000}
                        step={1000}
                        value={accommodationLevel}
                        onChange={(e) => setAccommodationLevel(Number(e.target.value))}
                        className="w-full mt-2"
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <label className="text-sm font-medium text-gray-900">Include Activities & Entertainment</label>
                      <div className="relative inline-block w-12 h-6">
                        <input 
                          type="checkbox" 
                          checked={includeActivities}
                          onChange={(e) => setIncludeActivities(e.target.checked)}
                          className="peer absolute w-0 h-0 opacity-0"
                        />
                        <label 
                          className="block h-6 overflow-hidden bg-gray-300 rounded-full cursor-pointer peer-checked:bg-[#113262] transition-colors duration-200"
                        >
                          <span 
                            className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform duration-200 ease-in-out peer-checked:translate-x-6"
                          ></span>
                        </label>
                      </div>
                    </div>

                    {includeActivities && (
                      <div>
                        <label className="block font-medium text-sm mb-1.5">Daily Activity Budget (₹)</label>
                        <input
                          type="number"
                          value={activityBudget}
                          onChange={(e) => setActivityBudget(Number(e.target.value))}
                          className="w-full p-1.5 border rounded text-sm"
                        />
                        <input
                          type="range"
                          min={4000}
                          max={24000}
                          step={1000}
                          value={activityBudget}
                          onChange={(e) => setActivityBudget(Number(e.target.value))}
                          className="w-full mt-2"
                        />
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Results Section */}
          <div className="bg-[#113262] text-white rounded-lg h-[600px] sticky top-6">
            <div className="p-4 border-b border-white/20">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold">Tour Cost Summary</h3>
                <button className="p-1 hover:bg-blue-700 rounded">
                  <Share size={18} />
                </button>
              </div>
            </div>

            <div className="p-4">
              <div className="mb-4">
                <div className="text-3xl font-bold mb-1">{formatCurrency(results.totalAnnualCost)}</div>
                <div className="text-sm text-gray-300">Total Annual Cost ({frequency} tour{frequency > 1 ? 's' : ''})</div>
              </div>

              <div className="space-y-3">
                <h4 className="text-sm font-medium text-gray-300">Annual Cost Breakdown</h4>
                
                <div className="flex justify-between items-center py-2 border-t border-white/20">
                  <div className="flex items-center gap-2">
                    <Plane className="h-4 w-4" />
                    <span className="text-sm">Flights</span>
                  </div>
                  <span className="font-bold">{formatCurrency(results.breakdown.flights)}</span>
                </div>

                <div className="flex justify-between items-center py-2 border-t border-white/20">
                  <div className="flex items-center gap-2">
                    <Hotel className="h-4 w-4" />
                    <span className="text-sm">Accommodation</span>
                  </div>
                  <span className="font-bold">{formatCurrency(results.breakdown.accommodation)}</span>
                </div>

                <div className="flex justify-between items-center py-2 border-t border-white/20">
                  <div className="flex items-center gap-2">
                    <UtensilsCrossed className="h-4 w-4" />
                    <span className="text-sm">Food & Dining</span>
                  </div>
                  <span className="font-bold">{formatCurrency(results.breakdown.food)}</span>
                </div>

                <div className="flex justify-between items-center py-2 border-t border-white/20">
                  <div className="flex items-center gap-2">
                    <Train className="h-4 w-4" />
                    <span className="text-sm">Local Transport</span>
                  </div>
                  <span className="font-bold">{formatCurrency(results.breakdown.transport)}</span>
                </div>

                {includeActivities && (
                  <div className="flex justify-between items-center py-2 border-t border-white/20">
                    <div className="flex items-center gap-2">
                      <Globe className="h-4 w-4" />
                      <span className="text-sm">Activities</span>
                    </div>
                    <span className="font-bold">{formatCurrency(results.breakdown.activities)}</span>
                  </div>
                )}
              </div>

              <div className="mt-4 pt-4 border-t border-white/20">
                <div className="text-sm text-gray-300 mb-1">Required Monthly Savings</div>
                <div className="text-2xl font-bold">{formatCurrency(results.monthlySavings)}</div>
              </div>

              <button className="w-full bg-orange-400 text-white py-2 rounded-lg mt-4 hover:bg-orange-500 transition-colors text-sm">
                Start Tour Planning →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorldTourCalculator;