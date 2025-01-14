import React, { useState, useEffect } from 'react';
import { Share, Plane, Hotel, UtensilsCrossed, Train, Globe, Briefcase, Users } from 'lucide-react';

const WorldTourCalculator = () => {
  const [values, setValues] = useState({
    numDestinations: 5,
    daysPerDestination: 4,
    accommodationLevel: 150,
    travelClass: 'economy',
    frequency: 1,
    includeActivities: true,
    activityBudget: 100
  });

  const handleChange = (key, value) => {
    setValues(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const calculateTour = () => {
    const { numDestinations, daysPerDestination, accommodationLevel, travelClass, frequency, includeActivities, activityBudget } = values;
    
    // Base costs per destination
    const baseCosts = {
      economy: 800,
      business: 2500,
      first: 5000
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
    
    // Calculate local transport costs ($60 per day)
    const transportCosts = 60 * totalDays;
    
    // Calculate activities costs
    const activityCosts = includeActivities ? (activityBudget * totalDays) : 0;
    
    // Calculate costs per tour
    const tripTotal = flightCosts + accommodationCosts + foodCosts + transportCosts + activityCosts;
    
    // Calculate annual costs based on frequency
    const annualCost = tripTotal * frequency;
    
    const result = {
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
    
    return result;
  };

  const [result, setResult] = useState(calculateTour());

  useEffect(() => {
    setResult(calculateTour());
  }, [values]);

  const formatCurrency = amount => new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  }).format(amount);

  const InputField = ({ label, value, onChange, min, max, unit, step = 1 }) => (
    <div className="mb-3">
      <label className="block font-semibold text-gray-800 mb-1 text-sm">{label}</label>
      <div className="flex gap-2">
        <input 
          type="number" 
          value={value} 
          onChange={e => {
            const val = parseFloat(e.target.value);
            if (!isNaN(val) && val >= min && val <= max) {
              onChange(val);
            }
          }}
          className="w-24 px-2 py-1 border rounded text-sm" 
        />
        <span className="text-sm text-gray-600">{unit}</span>
      </div>
      <input 
        type="range" 
        min={min} 
        max={max} 
        step={step} 
        value={value}
        onChange={e => {
          const val = parseFloat(e.target.value);
          if (!isNaN(val) && val >= min && val <= max) {
            onChange(val);
          }
        }}
        className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer mt-1" 
      />
    </div>
  );

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      <div className="container mx-auto">
        <div className="mb-4 pt-36">
          <h1 className="text-2xl font-bold text-gray-900">World Tour Calculator</h1>
          <p className="text-sm text-gray-600 mt-1">Plan your recurring world adventures with precision</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <InputField 
                label="Number of Destinations" 
                value={values.numDestinations}
                onChange={v => handleChange('numDestinations', v)}
                min={2}
                max={15}
                unit="places"
              />
              <InputField 
                label="Days per Destination" 
                value={values.daysPerDestination}
                onChange={v => handleChange('daysPerDestination', v)}
                min={2}
                max={10}
                unit="days"
              />
              <InputField 
                label="Daily Accommodation Budget" 
                value={values.accommodationLevel}
                onChange={v => handleChange('accommodationLevel', v)}
                min={50}
                max={500}
                unit="USD"
                step={10}
              />
              <InputField 
                label="Tours per Year" 
                value={values.frequency}
                onChange={v => handleChange('frequency', v)}
                min={1}
                max={4}
                unit="tours"
              />
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <label htmlFor="includeActivities" className="text-sm font-semibold text-gray-800 cursor-pointer">
                  Include Activities & Entertainment?
                </label>
                <div className="relative inline-block w-12 h-6 transition duration-200 ease-in-out">
                  <input 
                    type="checkbox" 
                    id="includeActivities" 
                    checked={values.includeActivities}
                    onChange={e => handleChange('includeActivities', e.target.checked)}
                    className="peer absolute w-0 h-0 opacity-0"
                  />
                  <label 
                    htmlFor="includeActivities"
                    className="block h-6 overflow-hidden bg-gray-300 rounded-full cursor-pointer peer-checked:bg-[#113262] transition-colors duration-200"
                  >
                    <span 
                      className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform duration-200 ease-in-out peer-checked:translate-x-6"
                    ></span>
                  </label>
                </div>
              </div>

              {values.includeActivities && (
                <div className="grid grid-cols-2 gap-3 animate-fadeIn">
                  <InputField 
                    label="Daily Activity Budget" 
                    value={values.activityBudget}
                    onChange={v => handleChange('activityBudget', v)}
                    min={50}
                    max={300}
                    unit="USD"
                    step={10}
                  />
                </div>
              )}
            </div>

            <div className="mt-4 bg-white p-4 rounded-lg shadow-sm">
              <label className="block font-semibold text-gray-800 mb-3 text-sm">Travel Class</label>
              <div className="flex gap-2">
                { [
                  { value: 'economy', icon: Users, label: 'Economy' },
                  { value: 'business', icon: Briefcase, label: 'Business' },
                  { value: 'first', icon: Plane, label: 'First' }
                ].map(({ value, icon: Icon, label }) => (
                  <button
                    key={value}
                    onClick={() => handleChange('travelClass', value)}
                    className={`
                      flex-1 px-4 py-3 rounded-lg flex flex-col items-center gap-2
                      transition-all duration-200 ease-in-out
                      ${values.travelClass === value 
                        ? 'bg-[#113262] text-white shadow-md transform scale-[1.02]' 
                        : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                      }
                    `}
                  >
                    <Icon size={18} className={values.travelClass === value ? 'text-white' : 'text-gray-500'} />
                    <span className="text-sm font-medium">{label}</span>
                  </button>
                )) }
              </div>
            </div>
          </div>

          <div className="bg-[#113262] text-white p-4 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold">Annual Tour Cost</h3>
              <button className="p-1.5 hover:bg-[#1e3a8a] rounded">
                <Share size={18} />
              </button>
            </div>

            <div className="mb-6">
              <div className="text-3xl font-bold mb-1">{formatCurrency(result.totalAnnualCost)}</div>
              <div className="text-sm text-gray-300">Total annual cost for {values.frequency} tour(s)</div>
            </div>

            <div className="space-y-3">
              <h4 className="text-sm font-medium text-gray-300">Cost Breakdown</h4>
              <div className="text-sm text-gray-300">(Annual costs)</div>
　　 　 　 　 <div className="space-y-2">
                <div className="flex justify-between items-center py-1.5 border-t border-white/20">
                  <div className="flex items-center gap-2">
                    <Plane className="h-4 w-4" />
                    <span className="text-sm">Flights</span>
                  </div>
                  <span className="font-bold">{formatCurrency(result.breakdown.flights)}</span>
                </div>
                
                <div className="flex justify-between items-center py-1.5 border-t border-white/20">
                  <div className="flex items-center gap-2">
                    <Hotel className="h-4 w-4" />
                    <span className="text-sm">Accommodation</span>
                  </div>
                  <span className="font-bold">{formatCurrency(result.breakdown.accommodation)}</span>
                </div>

                <div className="flex justify-between items-center py-1.5 border-t border-white/20">
                  <div className="flex items-center gap-2">
                    <UtensilsCrossed className="h-4 w-4" />
                    <span className="text-sm">Food & Dining</span>
                  </div>
                  <span className="font-bold">{formatCurrency(result.breakdown.food)}</span>
                </div>

                <div className="flex justify-between items-center py-1.5 border-t border-white/20">
                  <div className="flex items-center gap-2">
                    <Train className="h-4 w-4" />
                    <span className="text-sm">Local Transport</span>
                  </div>
                  <span className="font-bold">{formatCurrency(result.breakdown.transport)}</span>
                </div>

                {values.includeActivities && (
                  <div className="flex justify-between items-center py-1.5 border-t border-white/20">
                    <div className="flex items-center gap-2">
                      <Globe className="h-4 w-4" />
                      <span className="text-sm">Activities</span>
                    </div>
                    <span className="font-bold">{formatCurrency(result.breakdown.activities)}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/20">
              <div className="text-sm text-gray-300 mb-1">Required Monthly Savings</div>
              <div className="text-2xl font-bold">{formatCurrency(result.monthlySavings)}</div>
            </div>

            <button className="w-full bg-[#fb923c] text-white py-2 rounded-lg mt-6 text-sm hover:bg-[#f97316] transition-colors">
              Start Planning →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorldTourCalculator;