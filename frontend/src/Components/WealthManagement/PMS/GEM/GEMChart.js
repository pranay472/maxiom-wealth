// GEMChart.jsx
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const GEMChart = () => {
  const data = [
    { month: 'Jan', value: 100 },
    { month: 'Feb', value: 120 },
    { month: 'Mar', value: 110 },
    { month: 'Apr', value: 140 },
    { month: 'May', value: 160 },
    { month: 'Jun', value: 180 },
    { month: 'Jul', value: 190 },
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#A2B8D8" opacity={0.1} />
        <XAxis 
          dataKey="month" 
          stroke="#A2B8D8" 
          opacity={0.5}
        />
        <YAxis 
          stroke="#A2B8D8" 
          opacity={0.5}
        />
        <Tooltip 
          contentStyle={{ 
            background: '#1C52A0',
            border: 'none',
            borderRadius: '8px',
            color: '#fff'
          }}
        />
        <Line 
          type="monotone" 
          dataKey="value" 
          stroke="#F49611"
          strokeWidth={3}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};
export default GEMChart;