import React, { useState } from 'react';
import { Share, ChevronDown } from 'lucide-react';

const HomeRenovationCalculator = () => {
  // Basic property details
  const [totalArea, setTotalArea] = useState(1000);
  const [renovationType, setRenovationType] = useState('full');
  const [propertyAge, setPropertyAge] = useState('0-5');

  // Core renovation costs
  const [flooringBudget, setFlooringBudget] = useState(200);  // per sq ft
  const [wallsBudget, setWallsBudget] = useState(100);        // per sq ft
  const [electricalBudget, setElectricalBudget] = useState(50); // per sq ft

  // Additional expenses section
  const [showAdditional, setShowAdditional] = useState(false);
  const [kitchenBudget, setKitchenBudget] = useState(150000);
  const [bathroomCount, setBathroomCount] = useState(2);
  const [bathroomBudget, setBathroomBudget] = useState(75000); // per bathroom

  // Contingency
  const [contingencyPercent, setContingencyPercent] = useState(15);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const calculateTotalBudget = () => {
    // Calculate area-based costs
    const totalFlooring = totalArea * flooringBudget;
    const totalWalls = totalArea * wallsBudget;
    const totalElectrical = totalArea * electricalBudget;
    
    // Calculate fixed costs
    const totalBathrooms = bathroomCount * bathroomBudget;
    
    // Calculate subtotal
    const subtotal = totalFlooring + totalWalls + totalElectrical + kitchenBudget + totalBathrooms;
    
    // Add contingency
    const contingencyAmount = (subtotal * contingencyPercent) / 100;
    const total = subtotal + contingencyAmount;
    
    const perSquareFoot = Math.round(total / totalArea);
    
    return {
      totalCost: Math.round(total),
      perSqFt: perSquareFoot,
      breakdown: {
        areaBased: totalFlooring + totalWalls + totalElectrical,
        fixedCosts: kitchenBudget + totalBathrooms,
        contingency: contingencyAmount
      }
    };
  };

  const results = calculateTotalBudget();

  return (
    <div className="calculator-container pt-16">
      <div className="calculator-header text-center mb-8">
        <h1 className="text-2xl font-semibold text-[#113262] mb-2">Home Renovation Budget Planner</h1>
        <h2 className="text-lg text-gray-600">Plan Your Home Renovation Within Budget</h2>
      </div>
      <div className="max-w-5xl mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Input Sections */}
          <div className="lg:col-span-2 space-y-8">
            {/* Property Details Section */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Property Details</h2>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block font-medium text-sm mb-1.5">Total Area (sq ft)</label>
                  <input
                    type="number"
                    value={totalArea}
                    onChange={(e) => setTotalArea(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={500}
                    max={5000}
                    step={100}
                    value={totalArea}
                    onChange={(e) => setTotalArea(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                </div>

                <div>
                  <label className="block font-medium text-sm mb-1.5">Renovation Type</label>
                  <select
                    value={renovationType}
                    onChange={(e) => setRenovationType(e.target.value)}
                    className="w-full p-1.5 border rounded text-sm"
                  >
                    <option value="full">Full Home Renovation</option>
                    <option value="partial">Partial Renovation</option>
                    <option value="kitchen">Kitchen Only</option>
                    <option value="bathroom">Bathroom Only</option>
                  </select>
                </div>

                <div>
                  <label className="block font-medium text-sm mb-1.5">Property Age</label>
                  <select
                    value={propertyAge}
                    onChange={(e) => setPropertyAge(e.target.value)}
                    className="w-full p-1.5 border rounded text-sm"
                  >
                    <option value="0-5">0-5 years</option>
                    <option value="5-10">5-10 years</option>
                    <option value="10-20">10-20 years</option>
                    <option value="20+">20+ years</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Core Renovation Costs */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Core Renovation Costs (per sq ft)</h2>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block font-medium text-sm mb-1.5">Flooring Cost (per sq ft)</label>
                  <input
                    type="number"
                    value={flooringBudget}
                    onChange={(e) => setFlooringBudget(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={100}
                    max={1000}
                    step={50}
                    value={flooringBudget}
                    onChange={(e) => setFlooringBudget(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                </div>

                <div>
                  <label className="block font-medium text-sm mb-1.5">Walls & Painting (per sq ft)</label>
                  <input
                    type="number"
                    value={wallsBudget}
                    onChange={(e) => setWallsBudget(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={50}
                    max={500}
                    step={25}
                    value={wallsBudget}
                    onChange={(e) => setWallsBudget(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                </div>

                <div>
                  <label className="block font-medium text-sm mb-1.5">Electrical Work (per sq ft)</label>
                  <input
                    type="number"
                    value={electricalBudget}
                    onChange={(e) => setElectricalBudget(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={25}
                    max={200}
                    step={25}
                    value={electricalBudget}
                    onChange={(e) => setElectricalBudget(Number(e.target.value))}
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
                      <label className="block font-medium text-sm mb-1.5">Kitchen Renovation</label>
                      <input
                        type="number"
                        value={kitchenBudget}
                        onChange={(e) => setKitchenBudget(Number(e.target.value))}
                        className="w-full p-1.5 border rounded text-sm"
                      />
                      <input
                        type="range"
                        min={100000}
                        max={500000}
                        step={50000}
                        value={kitchenBudget}
                        onChange={(e) => setKitchenBudget(Number(e.target.value))}
                        className="w-full mt-2"
                      />
                    </div>

                    <div>
                      <label className="block font-medium text-sm mb-1.5">Number of Bathrooms</label>
                      <input
                        type="number"
                        value={bathroomCount}
                        onChange={(e) => setBathroomCount(Number(e.target.value))}
                        className="w-full p-1.5 border rounded text-sm"
                      />
                      <input
                        type="range"
                        min={1}
                        max={5}
                        value={bathroomCount}
                        onChange={(e) => setBathroomCount(Number(e.target.value))}
                        className="w-full mt-2"
                      />
                    </div>

                    <div>
                      <label className="block font-medium text-sm mb-1.5">Bathroom Cost (per bathroom)</label>
                      <input
                        type="number"
                        value={bathroomBudget}
                        onChange={(e) => setBathroomBudget(Number(e.target.value))}
                        className="w-full p-1.5 border rounded text-sm"
                      />
                      <input
                        type="range"
                        min={50000}
                        max={200000}
                        step={10000}
                        value={bathroomBudget}
                        onChange={(e) => setBathroomBudget(Number(e.target.value))}
                        className="w-full mt-2"
                      />
                    </div>

                    <div>
                      <label className="block font-medium text-sm mb-1.5">Contingency (%)</label>
                      <input
                        type="number"
                        value={contingencyPercent}
                        onChange={(e) => setContingencyPercent(Number(e.target.value))}
                        className="w-full p-1.5 border rounded text-sm"
                      />
                      <input
                        type="range"
                        min={5}
                        max={25}
                        value={contingencyPercent}
                        onChange={(e) => setContingencyPercent(Number(e.target.value))}
                        className="w-full mt-2"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Results Section */}
          <div className="bg-[#113262] text-white rounded-lg h-[450px] sticky top-6 flex flex-col">
            <div className="p-4 border-b border-white/20">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold">Renovation Budget Summary</h3>
                <button className="p-1 hover:bg-blue-700 rounded">
                  <Share size={18} />
                </button>
              </div>
            </div>

            <div className="p-4 flex flex-col flex-grow">
              <div className="mb-4">
                <div className="text-3xl font-bold mb-1">{formatCurrency(results.totalCost)}</div>
                <div className="text-sm text-gray-300">Total Renovation Budget</div>
              </div>

              <div className="space-y-3 flex-grow">
                <h4 className="text-sm font-medium text-gray-300">Budget Breakdown</h4>
                
                <div className="flex justify-between items-center py-2 border-t border-white/20">
                  <span className="text-sm">Cost per Sq Ft</span>
                  <span className="font-bold">{formatCurrency(results.perSqFt)}</span>
                </div>
                
                <div className="flex justify-between items-center py-2 border-t border-white/20">
                  <span className="text-sm">Area Based Costs</span>
                  <span className="font-bold">{formatCurrency(results.breakdown.areaBased)}</span>
                </div>

                <div className="flex justify-between items-center py-2 border-t border-white/20">
                  <span className="text-sm">Contingency Amount</span>
                  <span className="font-bold">{formatCurrency(results.breakdown.contingency)}</span>
                </div>
              </div>

              <button className="w-full bg-orange-400 text-white py-2 rounded-lg mt-4 hover:bg-orange-500 transition-colors text-sm">
                Start Renovation Planning →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeRenovationCalculator;