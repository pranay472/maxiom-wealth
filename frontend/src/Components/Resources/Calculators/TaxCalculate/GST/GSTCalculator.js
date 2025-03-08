import React, { useState, useEffect } from 'react';
import { Share, ChevronDown, Plus, Trash2 } from 'lucide-react';

const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 2
  }).format(amount);
};

const GSTCalculator = () => {
  // Basic inputs
  const [calculationType, setCalculationType] = useState("add");
  const [amount, setAmount] = useState(1000);
  const [gstRate, setGstRate] = useState(18);
  const [gstState, setGstState] = useState("same");
  
  // Itemized inputs
  const [showItemized, setShowItemized] = useState(false);
  const [items, setItems] = useState([
    { id: 1, name: "Item 1", price: 1000, quantity: 1, gstRate: 18, hsn: "", description: "" }
  ]);
  
  // Advanced settings
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [igstRatio, setIgstRatio] = useState(100);
  const [cgstRatio, setCgstRatio] = useState(50);
  const [sgstRatio, setSgstRatio] = useState(50);
  const [cessRate, setCessRate] = useState(0);
  const [showShareToast, setShowShareToast] = useState(false);
  
  // Results
  const [results, setResults] = useState({
    baseAmount: 0,
    totalGST: 0,
    cgst: 0,
    sgst: 0,
    igst: 0,
    cess: 0,
    totalAmount: 0,
    gstBreakup: {}
  });

  // Common GST rates in India
  const commonGSTRates = [0, 3, 5, 12, 18, 28];

  // HSN codes (small sample)
  const hsnCodes = [
    { code: "2401", description: "Unmanufactured tobacco", rate: 28 },
    { code: "3003", description: "Medicaments", rate: 12 },
    { code: "3926", description: "Plastic articles", rate: 18 },
    { code: "4901", description: "Printed books", rate: 0 },
    { code: "6101", description: "Men's overcoats, jackets", rate: 5 },
    { code: "8471", description: "Computers and peripherals", rate: 18 },
    { code: "9503", description: "Toys and models", rate: 12 }
  ];

  const calculateGST = () => {
    let baseAmount = 0;
    let totalGST = 0;
    let cgst = 0;
    let sgst = 0;
    let igst = 0;
    let cess = 0;
    let totalAmount = 0;
    let gstBreakup = {};
    
    if (showItemized) {
      // Initialize GST breakup by rate
      items.forEach(item => {
        if (!gstBreakup[item.gstRate]) {
          gstBreakup[item.gstRate] = { 
            taxableAmount: 0, 
            gstAmount: 0, 
            items: [] 
          };
        }
      });
      
      // Calculate for itemized entries
      items.forEach(item => {
        const itemTotal = item.price * item.quantity;
        let itemGST;
        let itemBaseAmount;
        
        if (calculationType === "add") {
          // GST to be added
          itemBaseAmount = itemTotal;
          itemGST = itemTotal * (item.gstRate / 100);
        } else {
          // GST included (reverse calculation)
          itemBaseAmount = itemTotal / (1 + (item.gstRate / 100));
          itemGST = itemTotal - itemBaseAmount;
        }
        
        baseAmount += itemBaseAmount;
        totalGST += itemGST;
        
        // Add to GST breakup
        gstBreakup[item.gstRate].taxableAmount += itemBaseAmount;
        gstBreakup[item.gstRate].gstAmount += itemGST;
        gstBreakup[item.gstRate].items.push({
          name: item.name,
          baseAmount: itemBaseAmount,
          gst: itemGST
        });
        
        // Apply cess if defined
        const itemCess = cess > 0 ? itemBaseAmount * (cessRate / 100) : 0;
        cess += itemCess;
      });
    } else {
      // Simple calculation
      if (calculationType === "add") {
        // GST to be added
        baseAmount = amount;
        totalGST = amount * (gstRate / 100);
      } else {
        // GST included (reverse calculation)
        baseAmount = amount / (1 + (gstRate / 100));
        totalGST = amount - baseAmount;
      }
      
      // Create GST breakup
      gstBreakup[gstRate] = {
        taxableAmount: baseAmount,
        gstAmount: totalGST,
        items: [{ name: "Item", baseAmount, gst: totalGST }]
      };
      
      // Apply cess if defined
      cess = cessRate > 0 ? baseAmount * (cessRate / 100) : 0;
    }
    
    // Calculate IGST, CGST, SGST based on state
    if (gstState === "same") {
      // Intrastate (CGST & SGST)
      cgst = totalGST * (cgstRatio / 100);
      sgst = totalGST * (sgstRatio / 100);
      igst = 0;
    } else {
      // Interstate (IGST)
      cgst = 0;
      sgst = 0;
      igst = totalGST * (igstRatio / 100);
    }
    
    // Calculate total amount
    totalAmount = baseAmount + totalGST + cess;
    
    return {
      baseAmount,
      totalGST,
      cgst,
      sgst,
      igst,
      cess,
      totalAmount,
      gstBreakup
    };
  };

  useEffect(() => {
    const calculatedResults = calculateGST();
    setResults(calculatedResults);
  }, [
    calculationType,
    amount,
    gstRate,
    gstState,
    items,
    showItemized,
    igstRatio,
    cgstRatio,
    sgstRatio,
    cessRate
  ]);

  const handleItemChange = (id, field, value) => {
    setItems(prevItems => 
      prevItems.map(item => 
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  const addItem = () => {
    const newId = items.length > 0 ? Math.max(...items.map(item => item.id)) + 1 : 1;
    setItems([...items, { 
      id: newId, 
      name: `Item ${newId}`, 
      price: 1000, 
      quantity: 1, 
      gstRate: 18,
      hsn: "",
      description: ""
    }]);
  };

  const removeItem = (id) => {
    if (items.length > 1) {
      setItems(items.filter(item => item.id !== id));
    }
  };

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setShowShareToast(true);
      setTimeout(() => setShowShareToast(false), 3000);
    } catch (err) {
      console.error('Failed to copy URL:', err);
    }
  };

  const handleHSNSelect = (id, hsn) => {
    const selectedHSN = hsnCodes.find(h => h.code === hsn);
    if (selectedHSN) {
      handleItemChange(id, "gstRate", selectedHSN.rate);
      handleItemChange(id, "hsn", hsn);
      handleItemChange(id, "description", selectedHSN.description);
    }
  };

  return (
    <div className="calculator-container pt-24">
      <div className="calculator-header text-center mb-8">
        <h1 className="text-2xl font-semibold text-[#113262] mb-2">GST Calculator</h1>
        <h2 className="text-lg text-gray-600">Calculate GST for your invoices and purchases</h2>
      </div>

      <div className="max-w-5xl mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Input Sections */}
          <div className="lg:col-span-2 space-y-8">
            {/* Basic Details */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Basic Details</h2>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block font-medium text-sm mb-1.5">Calculation Type</label>
                  <select
                    value={calculationType}
                    onChange={(e) => setCalculationType(e.target.value)}
                    className="w-full p-1.5 border rounded text-sm"
                  >
                    <option value="add">Add GST to Amount</option>
                    <option value="remove">Extract GST (GST Included)</option>
                  </select>
                </div>

                <div>
                  <label className="block font-medium text-sm mb-1.5">GST Location</label>
                  <select
                    value={gstState}
                    onChange={(e) => setGstState(e.target.value)}
                    className="w-full p-1.5 border rounded text-sm"
                  >
                    <option value="same">Within Same State (CGST+SGST)</option>
                    <option value="different">Interstate (IGST)</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-between items-center mt-6 mb-2">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="showItemized"
                    checked={showItemized}
                    onChange={(e) => setShowItemized(e.target.checked)}
                    className="w-4 h-4"
                  />
                  <label htmlFor="showItemized" className="text-sm font-medium">
                    Use Itemized Calculation
                  </label>
                </div>
              </div>

              {!showItemized && (
                <div className="grid grid-cols-2 gap-6 mt-4">
                  <div>
                    <label className="block font-medium text-sm mb-1.5">Amount</label>
                    <input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(Number(e.target.value))}
                      className="w-full p-1.5 border rounded text-sm"
                    />
                    <input
                      type="range"
                      min={100}
                      max={100000}
                      step={100}
                      value={amount}
                      onChange={(e) => setAmount(Number(e.target.value))}
                      className="w-full mt-2"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>₹100</span>
                      <span>₹1,00,000</span>
                    </div>
                  </div>

                  <div>
                    <label className="block font-medium text-sm mb-1.5">GST Rate (%)</label>
                    <select
                      value={gstRate}
                      onChange={(e) => setGstRate(Number(e.target.value))}
                      className="w-full p-1.5 border rounded text-sm mb-2"
                    >
                      {commonGSTRates.map(rate => (
                        <option key={rate} value={rate}>{rate}%</option>
                      ))}
                      <option value="custom">Custom Rate</option>
                    </select>
                    {gstRate === "custom" && (
                      <input
                        type="number"
                        value={gstRate}
                        onChange={(e) => setGstRate(Number(e.target.value))}
                        className="w-full p-1.5 border rounded text-sm"
                        placeholder="Enter custom GST rate"
                      />
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Itemized Entries */}
            {showItemized && (
              <div className="bg-white rounded-lg shadow p-4">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-bold text-gray-900">Itemized Entries</h2>
                  <button 
                    onClick={addItem} 
                    className="bg-[#113262] text-white p-1.5 rounded-full hover:bg-blue-700"
                  >
                    <Plus size={16} />
                  </button>
                </div>
                
                <div className="space-y-4">
                  {items.map((item, index) => (
                    <div key={item.id} className="border rounded p-3 bg-gray-50">
                      <div className="flex justify-between mb-2">
                        <span className="font-medium text-sm">Item {index + 1}</span>
                        {items.length > 1 && (
                          <button 
                            onClick={() => removeItem(item.id)} 
                            className="text-red-500 hover:text-red-700"
                          >
                            <Trash2 size={16} />
                          </button>
                        )}
                      </div>
                      
                      <div className="grid grid-cols-2 gap-3 mb-2">
                        <div>
                          <label className="block text-xs font-medium mb-1">Item Name</label>
                          <input
                            type="text"
                            value={item.name}
                            onChange={(e) => handleItemChange(item.id, "name", e.target.value)}
                            className="w-full p-1.5 border rounded text-sm"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-xs font-medium mb-1">HSN Code</label>
                          <select
                            value={item.hsn}
                            onChange={(e) => handleHSNSelect(item.id, e.target.value)}
                            className="w-full p-1.5 border rounded text-sm"
                          >
                            <option value="">Select HSN Code</option>
                            {hsnCodes.map(hsn => (
                              <option key={hsn.code} value={hsn.code}>
                                {hsn.code} - {hsn.description} ({hsn.rate}%)
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-3 mb-2">
                        <div>
                          <label className="block text-xs font-medium mb-1">Unit Price</label>
                          <input
                            type="number"
                            value={item.price}
                            onChange={(e) => handleItemChange(item.id, "price", Number(e.target.value))}
                            className="w-full p-1.5 border rounded text-sm"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-xs font-medium mb-1">Quantity</label>
                          <input
                            type="number"
                            value={item.quantity}
                            onChange={(e) => handleItemChange(item.id, "quantity", Number(e.target.value))}
                            className="w-full p-1.5 border rounded text-sm"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-xs font-medium mb-1">GST Rate (%)</label>
                          <select
                            value={item.gstRate}
                            onChange={(e) => handleItemChange(item.id, "gstRate", Number(e.target.value))}
                            className="w-full p-1.5 border rounded text-sm"
                          >
                            {commonGSTRates.map(rate => (
                              <option key={rate} value={rate}>{rate}%</option>
                            ))}
                            <option value="custom">Custom Rate</option>
                          </select>
                          {item.gstRate === "custom" && (
                            <input
                              type="number"
                              value={item.gstRate}
                              onChange={(e) => handleItemChange(item.id, "gstRate", Number(e.target.value))}
                              className="w-full mt-1 p-1.5 border rounded text-sm"
                              placeholder="Custom GST Rate"
                            />
                          )}
                        </div>
                      </div>
                      
                      {item.description && (
                        <div className="text-xs text-gray-500 mt-1">
                          {item.description}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Advanced Settings */}
            <div className="bg-white rounded-lg shadow">
              <button
                onClick={() => setShowAdvanced(!showAdvanced)}
                className="w-full p-4 flex justify-between items-center hover:bg-gray-50"
              >
                <h2 className="text-lg font-bold text-gray-900">Advanced Settings</h2>
                <ChevronDown 
                  className={`transform transition-transform ${showAdvanced ? 'rotate-180' : ''}`}
                  size={20}
                />
              </button>
              
              {showAdvanced && (
                <div className="p-4 border-t">
                  <div className="grid grid-cols-2 gap-6">
                    {gstState === "different" && (
                      <div>
                        <label className="block font-medium text-sm mb-1.5">IGST Ratio (%)</label>
                        <input
                          type="number"
                          value={igstRatio}
                          onChange={(e) => setIgstRatio(Number(e.target.value))}
                          className="w-full p-1.5 border rounded text-sm"
                          disabled={true}
                        />
                      </div>
                    )}

                    {gstState === "same" && (
                      <>
                        <div>
                          <label className="block font-medium text-sm mb-1.5">CGST Ratio (%)</label>
                          <input
                            type="number"
                            value={cgstRatio}
                            onChange={(e) => setCgstRatio(Number(e.target.value))}
                            className="w-full p-1.5 border rounded text-sm"
                            disabled={true}
                          />
                        </div>

                        <div>
                          <label className="block font-medium text-sm mb-1.5">SGST Ratio (%)</label>
                          <input
                            type="number"
                            value={sgstRatio}
                            onChange={(e) => setSgstRatio(Number(e.target.value))}
                            className="w-full p-1.5 border rounded text-sm"
                            disabled={true}
                          />
                        </div>
                      </>
                    )}

                    <div>
                      <label className="block font-medium text-sm mb-1.5">Cess Rate (%)</label>
                      <input
                        type="number"
                        value={cessRate}
                        onChange={(e) => setCessRate(Number(e.target.value))}
                        className="w-full p-1.5 border rounded text-sm"
                      />
                      <input
                        type="range"
                        min={0}
                        max={20}
                        step={0.1}
                        value={cessRate}
                        onChange={(e) => setCessRate(Number(e.target.value))}
                        className="w-full mt-2"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>0%</span>
                        <span>20%</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Results Section */}
          <div className="bg-[#113262] text-white rounded-lg h-[500px] sticky top-6">
            <div className="p-4 border-b border-white/20">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold">GST Calculation</h3>
                <button onClick={handleShare} className="p-1 hover:bg-blue-700 rounded">
                  <Share size={18} />
                </button>
              </div>
            </div>

            <div className="p-4 flex flex-col h-[calc(100%-68px)] justify-between">
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">
                    {formatCurrency(results.totalAmount)}
                  </div>
                  <div className="text-sm text-gray-300">Total Amount (Inc. GST)</div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-t border-white/20">
                    <span className="text-sm">Taxable Amount</span>
                    <span className="font-bold">{formatCurrency(results.baseAmount)}</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-2 border-t border-white/20">
                    <span className="text-sm">Total GST</span>
                    <span className="font-bold">{formatCurrency(results.totalGST)}</span>
                  </div>

                  {gstState === "same" ? (
                    <>
                      <div className="flex justify-between items-center py-2 border-t border-white/20">
                        <span className="text-sm">CGST ({cgstRatio}%)</span>
                        <span className="font-bold">{formatCurrency(results.cgst)}</span>
                      </div>
                      
                      <div className="flex justify-between items-center py-2 border-t border-white/20">
                        <span className="text-sm">SGST ({sgstRatio}%)</span>
                        <span className="font-bold">{formatCurrency(results.sgst)}</span>
                      </div>
                    </>
                  ) : (
                    <div className="flex justify-between items-center py-2 border-t border-white/20">
                      <span className="text-sm">IGST (100%)</span>
                      <span className="font-bold">{formatCurrency(results.igst)}</span>
                    </div>
                  )}

                  {cessRate > 0 && (
                    <div className="flex justify-between items-center py-2 border-t border-white/20">
                      <span className="text-sm">Cess ({cessRate}%)</span>
                      <span className="font-bold">{formatCurrency(results.cess)}</span>
                    </div>
                  )}

                  {showItemized && Object.keys(results.gstBreakup).length > 1 && (
                    <div className="py-2 border-t border-white/20">
                      <span className="text-sm font-bold">GST Breakup by Rate:</span>
                      {Object.entries(results.gstBreakup).map(([rate, data]) => (
                        <div key={rate} className="flex justify-between items-center mt-1">
                          <span className="text-xs">@{rate}%</span>
                          <span className="text-xs">{formatCurrency(data.gstAmount)}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <button className="w-full bg-orange-400 text-white py-2 rounded-lg mt-4 hover:bg-orange-500 transition-colors text-sm">
                Generate Invoice →
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

export default GSTCalculator;