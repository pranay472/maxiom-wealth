import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const DiamondChart = () => {
  const data = [
    { month: 'Jan', value: 100 },
    { month: 'Feb', value: 102 },
    { month: 'Mar', value: 104 },
    { month: 'Apr', value: 105 },
    { month: 'May', value: 108 },
    { month: 'Jun', value: 110 },
    { month: 'Jul', value: 112 },
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

export default DiamondChart;