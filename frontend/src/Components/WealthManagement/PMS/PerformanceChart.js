import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, Award, ArrowUpRight } from 'lucide-react';

const PerformanceChart = () => {
  const [activeTimeframe, setActiveTimeframe] = useState('5Y');
  
  const performanceData = [
    { date: '2019', jewel: 100, benchmark: 100 },
    { date: '2020', jewel: 115, benchmark: 108 },
    { date: '2021', jewel: 142, benchmark: 122 },
    { date: '2022', jewel: 168, benchmark: 135 },
    { date: '2023', jewel: 195, benchmark: 148 },
  ];

  const timeframes = [
    { period: '1Y', jewel: 27.5, benchmark: 18.2 },
    { period: '3Y', jewel: 68.4, benchmark: 42.1 },
    { period: '5Y', jewel: 95.0, benchmark: 48.0 },
    { period: 'Since Inception', jewel: 95.0, benchmark: 48.0 },
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 shadow-lg rounded-lg border border-neutral-100">
          <p className="text-neutral-600 font-medium mb-2">{label}</p>
          {payload.map((entry, index) => (
            <div key={index} className="flex items-center justify-between gap-4">
              <span className="font-medium" style={{ color: entry.color }}>
                {entry.name}:
              </span>
              <span className="font-bold" style={{ color: entry.color }}>
                {entry.value.toFixed(1)}%
              </span>
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-6">
      {/* Main Performance Card */}
      <div className="w-full bg-gradient-to-br from-[#0C131C] to-[#131C2B] text-white shadow-xl rounded-xl overflow-hidden">
        {/* Header Section */}
        <div className="p-8">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-3 bg-gradient-to-r from-white to-neutral-200 bg-clip-text text-transparent">
                Portfolio Performance
              </h2>
              <p className="text-neutral-200 text-lg">
                Consistently Outperforming the Market
              </p>
            </div>
            <div className="flex items-center gap-2 bg-[#1C52A0]/20 p-3 rounded-lg">
              <TrendingUp className="text-[#F49611]" size={24} />
              <span className="text-lg font-semibold">+47% Alpha</span>
            </div>
          </div>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-6 mt-8">
            <div className="bg-white/10 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Award className="text-[#F49611]" size={20} />
                <span className="text-neutral-200">5-Year Return</span>
              </div>
              <span className="text-2xl font-bold">95.0%</span>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <ArrowUpRight className="text-[#4BCE97]" size={20} />
                <span className="text-neutral-200">Benchmark Return</span>
              </div>
              <span className="text-2xl font-bold">48.0%</span>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="text-[#F49611]" size={20} />
                <span className="text-neutral-200">Outperformance</span>
              </div>
              <span className="text-2xl font-bold">+47.0%</span>
            </div>
          </div>
        </div>
        
        {/* Chart Section */}
        <div className="p-8 pt-0">
          <div className="h-96 mb-8 bg-[#1C2B41] rounded-xl p-6">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={performanceData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis 
                  dataKey="date" 
                  stroke="rgba(255,255,255,0.6)"
                  tick={{ fill: 'rgba(255,255,255,0.6)' }}
                />
                <YAxis 
                  stroke="rgba(255,255,255,0.6)"
                  tick={{ fill: 'rgba(255,255,255,0.6)' }}
                />
                <Tooltip content={<CustomTooltip />} />
                <Legend 
                  wrapperStyle={{
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    borderRadius: '8px',
                    padding: '8px 16px'
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="jewel"
                  name="Jewel PMS"
                  stroke="#F49611"
                  strokeWidth={3}
                  dot={{ fill: '#F49611', strokeWidth: 2, r: 6, stroke: '#F49611' }}
                  activeDot={{ r: 8, stroke: '#F49611', strokeWidth: 2, strokeOpacity: 0.8, fill: '#F49611' }}
                />
                <Line
                  type="monotone"
                  dataKey="benchmark"
                  name="Nifty 500 TRI"
                  stroke="#388BFF"
                  strokeWidth={3}
                  dot={{ fill: '#388BFF', strokeWidth: 2, r: 6, stroke: '#388BFF' }}
                  activeDot={{ r: 8, stroke: '#388BFF', strokeWidth: 2, strokeOpacity: 0.8, fill: '#388BFF' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Performance Table Card */}
      <div className="w-full bg-white shadow-lg rounded-xl overflow-hidden">
        <div className="flex gap-2 p-4 border-b">
          {['1Y', '3Y', '5Y', 'Since Inception'].map((period) => (
            <button
              key={period}
              onClick={() => setActiveTimeframe(period)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                activeTimeframe === period
                  ? 'bg-[#1C52A0] text-white'
                  : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
              }`}
            >
              {period}
            </button>
          ))}
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-neutral-50">
                <th className="py-4 px-6 text-left text-neutral-600 font-medium">Time Period</th>
                <th className="py-4 px-6 text-right text-neutral-600 font-medium">Jewel PMS</th>
                <th className="py-4 px-6 text-right text-neutral-600 font-medium">Nifty 500 TRI</th>
                <th className="py-4 px-6 text-right text-neutral-600 font-medium">Alpha</th>
              </tr>
            </thead>
            <tbody>
              {timeframes.map((item) => (
                <tr 
                  key={item.period} 
                  className={`border-b border-neutral-100 transition-colors hover:bg-neutral-50 ${
                    activeTimeframe === item.period ? 'bg-blue-50' : ''
                  }`}
                >
                  <td className="py-4 px-6 text-left font-medium text-neutral-800">{item.period}</td>
                  <td className="py-4 px-6 text-right">
                    <span className="text-green-600 font-medium">+{item.jewel}%</span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <span className="text-neutral-600">+{item.benchmark}%</span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <span className="text-[#F49611] font-medium">+{(item.jewel - item.benchmark).toFixed(1)}%</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Disclaimer Section */}
      <div className="bg-neutral-50 rounded-xl p-6 border border-neutral-100">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-white rounded-lg shadow-sm">
            <Award className="text-[#F49611]" size={24} />
          </div>
          <div>
            <h4 className="text-lg font-semibold text-neutral-800 mb-2">
              Superior Risk-Adjusted Returns
            </h4>
            <p className="text-neutral-600">
              Past performance is not indicative of future results. Returns are calculated on a TWRR basis after accounting for all fees and charges. The portfolio has maintained a consistent track record of generating alpha through various market cycles.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceChart;