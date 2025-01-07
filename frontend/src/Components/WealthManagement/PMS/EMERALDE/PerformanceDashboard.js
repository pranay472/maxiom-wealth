import React from 'react';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, BarChart2, Activity, AlertTriangle } from 'lucide-react';

const PerformanceDashboard = () => {
  // Sample data - replace with actual data in production
  const performanceData = [
    { month: 'Jan', portfolio: 15, benchmark: 12 },
    { month: 'Feb', portfolio: 18, benchmark: 15 },
    { month: 'Mar', portfolio: 25, benchmark: 20 },
    { month: 'Apr', portfolio: 22, benchmark: 18 },
    { month: 'May', portfolio: 28, benchmark: 23 },
    { month: 'Jun', portfolio: 32, benchmark: 25 }
  ];

  const volatilityData = [
    { month: 'Jan', value: 12 },
    { month: 'Feb', value: 15 },
    { month: 'Mar', value: 13 },
    { month: 'Apr', value: 18 },
    { month: 'May', value: 16 },
    { month: 'Jun', value: 14 }
  ];

  const MetricCard = ({ title, value, icon: Icon, trend }) => (
    <div className="bg-gradient-to-br from-blue-900/20 to-gray-900/30 backdrop-blur-lg rounded-xl p-6 border border-blue-900/20">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <Icon className="text-blue-400 mr-2" />
          <h3 className="text-lg font-semibold text-white">{title}</h3>
        </div>
        <span className={`px-2 py-1 rounded-full text-sm ${
          trend === 'up' ? 'bg-green-500/20 text-green-400' : 
          'bg-red-500/20 text-red-400'
        }`}>
          {trend === 'up' ? '+' : '-'}{Math.abs(value)}%
        </span>
      </div>
    </div>
  );

  return (
    <div className="w-full bg-gradient-to-br from-blue-900 via-gray-900 to-gray-900 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4 flex items-center justify-center">
            <TrendingUp className="mr-2 text-blue-400" />
            Performance Dashboard
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive analysis of portfolio performance and risk metrics
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <MetricCard 
            title="Current Returns" 
            value={8.5} 
            icon={TrendingUp}
            trend="up"
          />
          <MetricCard 
            title="Volatility Index" 
            value={2.3} 
            icon={Activity}
            trend="down"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Performance Chart */}
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <BarChart2 className="text-blue-400 mr-2" />
              Portfolio vs Benchmark
            </h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="month" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1F2937',
                      border: 'none',
                      borderRadius: '0.5rem',
                      color: '#fff'
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="portfolio" 
                    stroke="#60A5FA" 
                    strokeWidth={2}
                    dot={{ fill: '#60A5FA' }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="benchmark" 
                    stroke="#9CA3AF" 
                    strokeWidth={2}
                    dot={{ fill: '#9CA3AF' }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Volatility Chart */}
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Activity className="text-blue-400 mr-2" />
              Volatility Trends
            </h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={volatilityData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="month" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1F2937',
                      border: 'none',
                      borderRadius: '0.5rem',
                      color: '#fff'
                    }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#60A5FA" 
                    fill="url(#colorValue)" 
                    fillOpacity={0.2}
                  />
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#60A5FA" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#60A5FA" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="mt-8 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
          <div className="flex items-center text-yellow-500">
            <AlertTriangle className="mr-2" />
            <p className="text-sm">
              Past performance is not indicative of future returns. All investments carry risk.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceDashboard;