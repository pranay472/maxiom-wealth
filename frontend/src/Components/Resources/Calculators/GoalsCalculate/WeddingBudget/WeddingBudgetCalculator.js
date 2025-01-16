import React, { useState } from 'react';
import { Share, ChevronDown } from 'lucide-react';

const WeddingBudgetCalculator = () => {
  // Basic wedding details
  const [numberOfGuests, setNumberOfGuests] = useState(200);
  const [weddingType, setWeddingType] = useState('traditional');
  const [weddingCity, setWeddingCity] = useState('tier1');

  // Venue and catering
  const [venueBudget, setVenueBudget] = useState(200000);
  const [cateringPerPlate, setCateringPerPlate] = useState(1200);

  // Essential services
  const [decorationBudget, setDecorationBudget] = useState(100000);
  const [photographyBudget, setPhotographyBudget] = useState(75000);

  // Additional expenses section
  const [showAdditional, setShowAdditional] = useState(false);
  const [bridalExpenses, setBridalExpenses] = useState(150000);
  const [groomExpenses, setGroomExpenses] = useState(75000);
  const [entertainmentBudget, setEntertainmentBudget] = useState(50000);
  const [invitationsBudget, setInvitationsBudget] = useState(25000);
  const [jewelryBudget, setJewelryBudget] = useState(500000);

  // Contingency
  const [contingencyPercent, setContingencyPercent] = useState(10);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const calculateTotalBudget = () => {
    // Calculate main expenses
    const totalCatering = cateringPerPlate * numberOfGuests;
    const essentialServices = venueBudget + decorationBudget + photographyBudget;
    
    // Calculate personal expenses
    const personalExpenses = bridalExpenses + groomExpenses + jewelryBudget;
    
    // Calculate event expenses
    const eventExpenses = entertainmentBudget + invitationsBudget;
    
    // Calculate subtotal
    const subtotal = totalCatering + essentialServices + personalExpenses + eventExpenses;
    
    // Add contingency
    const contingencyAmount = (subtotal * contingencyPercent) / 100;
    const total = subtotal + contingencyAmount;
    
    const perGuestCost = Math.round(total / numberOfGuests);
    
    return {
      totalCost: Math.round(total),
      perGuest: perGuestCost,
      breakdown: {
        catering: totalCatering,
        essentialServices: essentialServices,
        personalExpenses: personalExpenses,
        eventExpenses: eventExpenses,
        contingency: contingencyAmount
      }
    };
  };

  const results = calculateTotalBudget();

  return (
    <div className="calculator-container pt-16">
      <div className="calculator-header text-center mb-8">
        <h1 className="text-2xl font-semibold text-[#113262] mb-2">Wedding Budget Planner</h1>
        <h2 className="text-lg text-gray-600">Break down wedding costs with this calculator</h2>
      </div>
      <div className="max-w-5xl mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Input Sections */}
          <div className="lg:col-span-2 space-y-8">
            {/* Wedding Details Section */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Wedding Details</h2>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block font-medium text-sm mb-1.5">Number of Guests</label>
                  <input
                    type="number"
                    value={numberOfGuests}
                    onChange={(e) => setNumberOfGuests(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={50}
                    max={1000}
                    step={50}
                    value={numberOfGuests}
                    onChange={(e) => setNumberOfGuests(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                </div>

                <div>
                  <label className="block font-medium text-sm mb-1.5">Wedding Type</label>
                  <select
                    value={weddingType}
                    onChange={(e) => setWeddingType(e.target.value)}
                    className="w-full p-1.5 border rounded text-sm"
                  >
                    <option value="traditional">Traditional</option>
                    <option value="destination">Destination Wedding</option>
                    <option value="intimate">Intimate Wedding</option>
                  </select>
                </div>

                <div>
                  <label className="block font-medium text-sm mb-1.5">Wedding City Type</label>
                  <select
                    value={weddingCity}
                    onChange={(e) => setWeddingCity(e.target.value)}
                    className="w-full p-1.5 border rounded text-sm"
                  >
                    <option value="tier1">Tier 1 City</option>
                    <option value="tier2">Tier 2 City</option>
                    <option value="tier3">Tier 3 City</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Venue & Catering Section */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Venue & Catering</h2>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block font-medium text-sm mb-1.5">Venue Budget</label>
                  <input
                    type="number"
                    value={venueBudget}
                    onChange={(e) => setVenueBudget(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={50000}
                    max={1000000}
                    step={10000}
                    value={venueBudget}
                    onChange={(e) => setVenueBudget(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                </div>

                <div>
                  <label className="block font-medium text-sm mb-1.5">Catering Cost (per plate)</label>
                  <input
                    type="number"
                    value={cateringPerPlate}
                    onChange={(e) => setCateringPerPlate(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={500}
                    max={5000}
                    step={100}
                    value={cateringPerPlate}
                    onChange={(e) => setCateringPerPlate(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                </div>
              </div>
            </div>

            {/* Essential Services Section */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Essential Services</h2>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block font-medium text-sm mb-1.5">Decoration Budget</label>
                  <input
                    type="number"
                    value={decorationBudget}
                    onChange={(e) => setDecorationBudget(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={25000}
                    max={500000}
                    step={5000}
                    value={decorationBudget}
                    onChange={(e) => setDecorationBudget(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                </div>

                <div>
                  <label className="block font-medium text-sm mb-1.5">Photography & Videography</label>
                  <input
                    type="number"
                    value={photographyBudget}
                    onChange={(e) => setPhotographyBudget(Number(e.target.value))}
                    className="w-full p-1.5 border rounded text-sm"
                  />
                  <input
                    type="range"
                    min={25000}
                    max={300000}
                    step={5000}
                    value={photographyBudget}
                    onChange={(e) => setPhotographyBudget(Number(e.target.value))}
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
                      <label className="block font-medium text-sm mb-1.5">Bridal Expenses</label>
                      <input
                        type="number"
                        value={bridalExpenses}
                        onChange={(e) => setBridalExpenses(Number(e.target.value))}
                        className="w-full p-1.5 border rounded text-sm"
                      />
                      <input
                        type="range"
                        min={50000}
                        max={500000}
                        step={10000}
                        value={bridalExpenses}
                        onChange={(e) => setBridalExpenses(Number(e.target.value))}
                        className="w-full mt-2"
                      />
                    </div>

                    <div>
                      <label className="block font-medium text-sm mb-1.5">Groom Expenses</label>
                      <input
                        type="number"
                        value={groomExpenses}
                        onChange={(e) => setGroomExpenses(Number(e.target.value))}
                        className="w-full p-1.5 border rounded text-sm"
                      />
                      <input
                        type="range"
                        min={25000}
                        max={300000}
                        step={5000}
                        value={groomExpenses}
                        onChange={(e) => setGroomExpenses(Number(e.target.value))}
                        className="w-full mt-2"
                      />
                    </div>

                    <div>
                      <label className="block font-medium text-sm mb-1.5">Entertainment & Music</label>
                      <input
                        type="number"
                        value={entertainmentBudget}
                        onChange={(e) => setEntertainmentBudget(Number(e.target.value))}
                        className="w-full p-1.5 border rounded text-sm"
                      />
                      <input
                        type="range"
                        min={10000}
                        max={200000}
                        step={5000}
                        value={entertainmentBudget}
                        onChange={(e) => setEntertainmentBudget(Number(e.target.value))}
                        className="w-full mt-2"
                      />
                    </div>

                    <div>
                      <label className="block font-medium text-sm mb-1.5">Invitations & Stationery</label>
                      <input
                        type="number"
                        value={invitationsBudget}
                        onChange={(e) => setInvitationsBudget(Number(e.target.value))}
                        className="w-full p-1.5 border rounded text-sm"
                      />
                      <input
                        type="range"
                        min={5000}
                        max={100000}
                        step={5000}
                        value={invitationsBudget}
                        onChange={(e) => setInvitationsBudget(Number(e.target.value))}
                        className="w-full mt-2"
                      />
                    </div>

                    <div>
                      <label className="block font-medium text-sm mb-1.5">Jewelry & Accessories</label>
                      <input
                        type="number"
                        value={jewelryBudget}
                        onChange={(e) => setJewelryBudget(Number(e.target.value))}
                        className="w-full p-1.5 border rounded text-sm"
                      />
                      <input
                        type="range"
                        min={100000}
                        max={2000000}
                        step={50000}
                        value={jewelryBudget}
                        onChange={(e) => setJewelryBudget(Number(e.target.value))}
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
                        max={20}
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
          <div className="bg-[#113262] text-white rounded-lg h-[400px] sticky top-6">
            <div className="p-4 border-b border-white/20">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold">Wedding Budget Summary</h3>
                <button className="p-1 hover:bg-blue-700 rounded">
                  <Share size={18} />
                </button>
              </div>
            </div>

            <div className="p-4">
              <div className="mb-4">
                <div className="text-3xl font-bold mb-1">{formatCurrency(results.totalCost)}</div>
                <div className="text-sm text-gray-300">Total Wedding Budget</div>
              </div>

              <div className="space-y-3">
                <h4 className="text-sm font-medium text-gray-300">Budget Breakdown</h4>
                
                <div className="flex justify-between items-center py-2 border-t border-white/20">
                  <span className="text-sm">Cost per Guest</span>
                  <span className="font-bold">{formatCurrency(results.perGuest)}</span>
                </div>
                
                <div className="flex justify-between items-center py-2 border-t border-white/20">
                  <span className="text-sm">Catering Total</span>
                  <span className="font-bold">{formatCurrency(results.breakdown.catering)}</span>
                </div>

                <div className="flex justify-between items-center py-2 border-t border-white/20">
                  <span className="text-sm">Contingency Amount</span>
                  <span className="font-bold">{formatCurrency(results.breakdown.contingency)}</span>
                </div>
              </div>

              <button className="w-full bg-orange-400 text-white py-2 rounded-lg mt-4 hover:bg-orange-500 transition-colors text-sm">
                Start Wedding Planning →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeddingBudgetCalculator;