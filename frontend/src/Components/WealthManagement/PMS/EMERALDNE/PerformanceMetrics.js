import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Sample data for the chart
const historicalData = [
  { month: 'Jan', returns: 12 },
  { month: 'Feb', returns: 15 },
  { month: 'Mar', returns: 13 },
  { month: 'Apr', returns: 18 },
  { month: 'May', returns: 16 },
  { month: 'Jun', returns: 21 },
];

const PerformanceMetrics = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="p-8 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl shadow-2xl m-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-gray-100 mb-8 text-center">Performance Dashboard</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <motion.div
            {...fadeInUp}
            className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-700/50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <h3 className="text-gray-400 text-lg mb-4">Latest Yields</h3>
            <div className="text-3xl font-semibold text-blue-400">15.8%</div>
          </motion.div>

          <motion.div
            {...fadeInUp}
            className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-700/50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <h3 className="text-gray-400 text-lg mb-4">Portfolio Credit Rating</h3>
            <div className="text-3xl font-semibold text-blue-400">AA+</div>
          </motion.div>

          <motion.div
            {...fadeInUp}
            className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-700/50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <h3 className="text-gray-400 text-lg mb-4">Average Portfolio Duration</h3>
            <div className="text-3xl font-semibold text-blue-400">3.5 Years</div>
          </motion.div>

          <motion.div
            {...fadeInUp}
            className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-700/50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <h3 className="text-gray-400 text-lg mb-4">Portfolio YTM</h3>
            <div className="text-3xl font-semibold text-blue-400">12.4%</div>
          </motion.div>
        </div>

        <div className="h-[400px] mt-8 bg-gray-800/30 p-6 rounded-xl border border-gray-700/50">
          <h3 className="text-2xl font-semibold text-gray-200 mb-6">Historical Performance</h3>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={historicalData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis dataKey="month" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip 
                contentStyle={{ 
                  background: 'rgba(17, 24, 39, 0.9)', 
                  border: '1px solid rgba(75, 85, 99, 0.3)',
                  borderRadius: '8px',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
                  color: '#e5e7eb'
                }}
              />
              <Line 
                type="monotone" 
                dataKey="returns" 
                stroke="#60a5fa" 
                strokeWidth={2}
                dot={{ fill: '#60a5fa', strokeWidth: 2 }}
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <p className="text-center text-gray-400 italic mt-8 pt-4 border-t border-gray-700/50">
          Past performance is not indicative of future returns
        </p>
      </motion.div>
    </div>
  );
};

export default PerformanceMetrics;