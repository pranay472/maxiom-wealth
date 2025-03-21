import React, { useState } from 'react';
import { 
  TrendingUp, Users, PieChart, Shield, 
  BarChart4, Target, ArrowUpRight 
} from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const performanceData = [
  { month: 'Jan', value: 100, benchmark: 90 },
  { month: 'Feb', value: 120, benchmark: 95 },
  { month: 'Mar', value: 115, benchmark: 92 },
  { month: 'Apr', value: 140, benchmark: 100 },
  { month: 'May', value: 160, benchmark: 110 },
  { month: 'Jun', value: 155, benchmark: 115 },
  { month: 'Jul', value: 180, benchmark: 120 }
];

const FeatureCard = ({ icon: Icon, title, description, metrics, index, isActive, onClick }) => (
  <div 
    onClick={onClick}
    className={`group cursor-pointer rounded-xl transition-all duration-500 relative overflow-hidden
      ${isActive ? 
        'md:col-span-2 row-span-2 bg-primary-600 shadow-xl' : 
        'bg-white hover:bg-gray-50 border border-gray-200 shadow-sm hover:shadow-md'}`}
  >
    <div className={`p-6 sm:p-8 h-full flex flex-col ${isActive ? 'text-white bg-primary-600' : ''}`}>
      {/* Icon */}
      <div className={`inline-flex items-center justify-center w-14 h-14 rounded-lg mb-6 
        ${isActive ? 'bg-white/20' : 'bg-primary-50'}`}>
        <Icon size={28} className={`${isActive ? 'text-white' : 'text-primary-600'}`} />
      </div>

      {/* Content */}
      <h3 className={`text-xl font-bold mb-3 
        ${isActive ? 'text-white' : 'text-gray-900'}`}>
        {title}
      </h3>

      <p className={`text-base leading-relaxed mb-4
        ${isActive ? 'text-white opacity-90' : 'text-gray-700'}`}>
        {description}
      </p>

      {/* Performance Chart for Active Card */}
      {isActive && metrics && (
        <div className="mt-auto space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold text-white">
                {metrics[0].value}
              </div>
              <div className="text-sm text-white/90">
                {metrics[0].label}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold text-white">
                {metrics[1].value}
              </div>
              <div className="text-sm text-white/90">
                {metrics[1].label}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl">
            <div className="p-4 border-b border-gray-100">
              <div className="flex justify-between items-center">
                <span className="text-gray-900 font-semibold">Performance</span>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 bg-primary-600 rounded-full"/>
                    <span className="text-sm text-gray-600">Spark PMS</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 bg-gray-400 rounded-full"/>
                    <span className="text-sm text-gray-600">Benchmark</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-4 h-48">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={performanceData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="sparkGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#1C52A0" stopOpacity={0.2}/>
                      <stop offset="95%" stopColor="#1C52A0" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="benchmarkGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#94A3B8" stopOpacity={0.2}/>
                      <stop offset="95%" stopColor="#94A3B8" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis 
                    dataKey="month" 
                    tick={{ fill: '#374151', fontSize: 12 }}
                    axisLine={{ stroke: '#E5E7EB' }}
                    tickLine={{ stroke: '#E5E7EB' }}
                  />
                  <YAxis 
                    tick={{ fill: '#374151', fontSize: 12 }}
                    axisLine={{ stroke: '#E5E7EB' }}
                    tickLine={{ stroke: '#E5E7EB' }}
                    tickFormatter={(value) => `${value}%`}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#FFFFFF',
                      border: '1px solid #E5E7EB',
                      borderRadius: '8px',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                    }}
                    labelStyle={{ color: '#111827', fontWeight: 'bold', marginBottom: '4px' }}
                    itemStyle={{ color: '#374151', padding: '2px 0' }}
                    formatter={(value) => [`${value}%`]}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#1C52A0"
                    strokeWidth={2}
                    fill="url(#sparkGradient)"
                    name="Spark PMS"
                    dot={{ stroke: '#1C52A0', strokeWidth: 2, r: 3, fill: '#FFFFFF' }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="benchmark" 
                    stroke="#94A3B8"
                    strokeWidth={2}
                    fill="url(#benchmarkGradient)"
                    name="Benchmark"
                    dot={{ stroke: '#94A3B8', strokeWidth: 2, r: 3, fill: '#FFFFFF' }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      )}
    </div>
  </div>
);

const SparkFeatures = () => {
  const [activeCard, setActiveCard] = useState(0);

  const features = [
    {
      icon: TrendingUp,
      title: "Hidden Gems Focus",
      description: "We focus on discovering promising small companies that show strong potential for growth - tomorrow's market leaders in their growth phase.",
      metrics: [
        { value: "22.11%", label: "Current Returns" },
        { value: "23.69%", label: "Previous Year" }
      ]
    },
    {
      icon: Users,
      title: "Strong Fundamentals",
      description: "We select companies with strong financial health, low debt, consistent track record of returns, and trustworthy management.",
      metrics: [
        { value: "3-5", label: "Years Horizon" },
        { value: "50L", label: "Min Investment" }
      ]
    },
    {
      icon: PieChart,
      title: "Diverse Portfolio",
      description: "Investment spread across carefully selected stocks, liquid funds for safety, and other market instruments for optimized returns.",
      metrics: [
        { value: "100%", label: "Research Coverage" },
        { value: "24/7", label: "Monitoring" }
      ]
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Regular monitoring, quick action on risks, diversification across businesses, and focus on companies with strong fundamentals.",
      metrics: [
        { value: "5+", label: "Risk Metrics" },
        { value: "Daily", label: "Risk Assessment" }
      ]
    },
    {
      icon: BarChart4,
      title: "Investment Process",
      description: "Thorough process including identifying promising companies, research, quality checks, regular monitoring, and proactive management.",
      metrics: [
        { value: "5", label: "Step Process" },
        { value: "Regular", label: "Reviews" }
      ]
    },
    {
      icon: Target,
      title: "Ideal Investment",
      description: "Perfect for investors seeking higher returns, comfortable with market volatility, and able to invest for 3-5 years or longer.",
      metrics: [
        { value: "3-5", label: "Year Timeline" },
        { value: "High", label: "Growth Potential" }
      ]
    }
  ];

  return (
    <div className="bg-gray-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2  className="text-4xl font-bold text-[#003399] mb-4 relative inline-block after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-[3px] after:bg-gradient-to-r after:from-transparent after:via-[#003399] after:to-transparent">
            How MaxiomWealth's Spark PMS Revolutionizes Small-Cap Investing
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Experience a revolutionary approach to small-cap investing that combines 
            cutting-edge technology with decades of market expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              {...feature}
              index={index}
              isActive={activeCard === index}
              onClick={() => setActiveCard(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SparkFeatures;