import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: '2019', Spark: 4000, Benchmark: 2400 },
  { name: '2020', Spark: 3000, Benchmark: 1398 },
  { name: '2021', Spark: 9800, Benchmark: 2000 },
  { name: '2022', Spark: 7800, Benchmark: 3908 },
  { name: '2023', Spark: 15000, Benchmark: 4800 },
];

const PerformanceChart = () => {
  return (
    <div className="h-[400px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="sparkGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#F49611" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#F49611" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="benchmarkGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#1C52A0" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#1C52A0" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
          <XAxis dataKey="name" stroke="#A2B8D8" />
          <YAxis stroke="#A2B8D8" />
          <Tooltip
            contentStyle={{
              backgroundColor: 'rgba(255,255,255,0.1)',
              border: 'none',
              borderRadius: '8px',
              color: '#fff'
            }}
          />
          <Area
            type="monotone"
            dataKey="Spark"
            stroke="#F49611"
            fillOpacity={1}
            fill="url(#sparkGradient)"
          />
          <Area
            type="monotone"
            dataKey="Benchmark"
            stroke="#1C52A0"
            fillOpacity={1}
            fill="url(#benchmarkGradient)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PerformanceChart;