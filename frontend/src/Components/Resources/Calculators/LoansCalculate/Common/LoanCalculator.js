import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

/**
 * Theme configuration for the calculator
 * Includes primary and secondary colors with different shades
 */
export const theme = {
  primary: {
    500: '#113262', // Deep blue - main color
    300: '#1C52A0', // Medium blue - secondary color
    50: '#E8EEF6'   // Light blue - background color
  },
  secondary: {
    300: '#F49611', // Orange - accent color
    50: '#FEF5E7'   // Light orange - background accent
  }
};

/**
 * Custom input component that includes both a text input and a slider
 * @param {Object} props - Component props
 * @param {string} props.label - Label for the input field
 * @param {number} props.value - Current value of the input
 * @param {function} props.onChange - Function to handle value changes
 * @param {string} props.prefix - Prefix symbol (e.g., '₹')
 * @param {string} props.suffix - Suffix symbol (e.g., '%')
 * @param {string} props.helperText - Helper text below the label
 * @param {number} props.min - Minimum value for the input
 * @param {number} props.max - Maximum value for the input
 */
const CustomInput = ({ 
  label, 
  value, 
  onChange, 
  prefix = '', 
  suffix = '', 
  helperText = '', 
  min = 0, 
  max = 100000000 
}) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    {helperText && <p className="text-sm text-gray-500 mb-2">{helperText}</p>}
    <div className="relative space-y-2">
      {prefix && (
        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
          {prefix}
        </span>
      )}
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className={`w-full px-3 py-2 border rounded-md ${prefix ? 'pl-7' : ''} ${suffix ? 'pr-8' : ''}`}
        style={{ borderColor: theme.primary[50] }}
        min={min}
        max={max}
      />
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        style={{ accentColor: theme.primary[500] }}
      />
      {suffix && (
        <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
          {suffix}
        </span>
      )}
    </div>
  </div>
);

/**
 * Main Loan Calculator component
 * @param {Object} props - Component props
 * @param {string} props.title - Calculator title
 * @param {string} props.subtitle - Calculator subtitle
 * @param {Array} props.inputs - Array of input configurations
 * @param {function} props.calculateResults - Function to calculate loan details
 * @param {Object} props.additionalFeatures - Optional additional features configuration
 */
const LoanCalculator = ({ 
  title = "Loan Calculator",
  subtitle = "Calculate your loan EMI and payment breakdown",
  inputs = [],
  calculateResults,
  additionalFeatures = {}
}) => {
  // State for input values
  const [inputValues, setInputValues] = useState({});

  // State for calculation results
  const [results, setResults] = useState({
    monthlyEMI: 0,
    totalInterest: 0,
    totalPayment: 0,
    pieData: []
  });

  // Initialize input values
  useEffect(() => {
    const initialValues = {};
    inputs.forEach(input => {
      initialValues[input.key] = input.defaultValue || 0;
    });
    setInputValues(initialValues);
  }, [inputs]);

  // Calculate results when inputs change
  useEffect(() => {
    if (calculateResults && Object.keys(inputValues).length > 0) {
      const newResults = calculateResults(inputValues);
      setResults(newResults);
    }
  }, [inputValues, calculateResults]);

  // Currency formatter
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  // Handle input change
  const handleInputChange = (key, value) => {
    setInputValues(prev => ({
      ...prev,
      [key]: value
    }));
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2" style={{ color: theme.primary[500] }}>{title}</h1>
        <p className="text-gray-600">{subtitle}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Sections */}
        <div className="space-y-6">
          {/* Group inputs by section */}
          {inputs.reduce((sections, input) => {
            const section = sections.find(s => s.name === input.section);
            if (section) {
              section.inputs.push(input);
            } else {
              sections.push({
                name: input.section,
                inputs: [input]
              });
            }
            return sections;
          }, []).map((section, index) => (
            <div 
              key={section.name}
              className="bg-white rounded-lg shadow-lg p-6" 
              style={{ borderTop: `4px solid ${index % 2 === 0 ? theme.primary[300] : theme.secondary[300]}` }}
            >
              <h2 className="text-xl font-bold mb-6" style={{ color: theme.primary[500] }}>
                {section.name}
              </h2>
              
              {section.inputs.map(input => (
                <CustomInput
                  key={input.key}
                  label={input.label}
                  value={inputValues[input.key] || 0}
                  onChange={(value) => handleInputChange(input.key, value)}
                  prefix={input.prefix}
                  suffix={input.suffix}
                  helperText={input.helperText}
                  min={input.min}
                  max={input.max}
                />
              ))}
            </div>
          ))}

          {/* Additional Features Section */}
          {additionalFeatures.enabled && (
            <div className="bg-white rounded-lg shadow-lg p-6" style={{ borderTop: `4px solid ${theme.primary[300]}` }}>
              <h2 className="text-xl font-bold mb-6" style={{ color: theme.primary[500] }}>
                {additionalFeatures.title || "Additional Features"}
              </h2>
              {additionalFeatures.content}
            </div>
          )}
        </div>

        {/* Results Section */}
        <div>
          <div className="bg-white rounded-lg shadow-lg p-6 sticky top-4" style={{ borderTop: `4px solid ${theme.secondary[300]}` }}>
            <h2 className="text-xl font-bold mb-6" style={{ color: theme.primary[500] }}>
              Your plan for {title}
            </h2>

            {/* Adjusted Amount Section */}
            <div className="mb-6">
              <p className="text-sm text-gray-600">Adjusted for inflation you will need</p>
              <p className="text-2xl font-bold" style={{ color: theme.primary[500] }}>
                {formatCurrency(results.adjustedAmount || 0)}
              </p>
            </div>

            {/* Required Investments Section */}
            <div className="border-t border-gray-200 pt-4 mb-6">
              <h3 className="text-lg font-semibold mb-4" style={{ color: theme.primary[500] }}>
                Required Investments
              </h3>
              
              {/* Monthly SIP */}
              <div className="flex justify-between mb-3">
                <span className="text-gray-600">Monthly SIP</span>
                <span className="font-semibold" style={{ color: theme.primary[500] }}>
                  {formatCurrency(results.monthlySIP || 0)}
                </span>
              </div>

              {/* One Time Investment */}
              <div className="flex justify-between mb-3">
                <span className="text-gray-600">One time</span>
                <span className="font-semibold" style={{ color: theme.primary[500] }}>
                  {formatCurrency(results.oneTimeInvestment || 0)}
                </span>
              </div>

              {/* Yearly Investment - if needed */}
              {results.yearlyInvestment !== undefined && (
                <div className="flex justify-between mb-3">
                  <span className="text-gray-600">Yearly</span>
                  <span className="font-semibold" style={{ color: theme.primary[500] }}>
                    {formatCurrency(results.yearlyInvestment)}
                  </span>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                className="w-full py-2 px-4 rounded-md text-white font-medium"
                style={{ backgroundColor: theme.primary[500] }}
                onClick={() => {/* Handle Start SIP */}}
              >
                Start SIP
              </button>
              <button
                className="w-full py-2 px-4 rounded-md text-white font-medium"
                style={{ backgroundColor: theme.secondary[300] }}
                onClick={() => {/* Handle Start Lumpsum */}}
              >
                Start Lumpsum
              </button>
            </div>

            {/* Chart Section */}
            {results.pieData && results.pieData.length > 0 && (
              <div className="mt-6 h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={results.pieData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {results.pieData.map((entry, index) => (
                        <Cell 
                          key={`cell-${index}`}
                          fill={index === 0 ? theme.primary[500] : theme.secondary[300]}
                        />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => formatCurrency(value)} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanCalculator;
