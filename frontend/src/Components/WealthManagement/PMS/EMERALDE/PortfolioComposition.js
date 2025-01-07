import React from 'react';
import { motion } from 'framer-motion';
import { CircleDot, CircleDashed, Gem } from 'lucide-react';

const PortfolioComposition = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-4xl font-bold text-blue-100 mb-4 flex items-center justify-center"
            initial={{ opacity: 0.6 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
          >
            <Gem className="mr-2 text-blue-300" />
            Portfolio Structure
          </motion.h2>
          <motion.p 
            className="text-gray-200 max-w-2xl mx-auto"
            initial={{ opacity: 0.7 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            A carefully balanced composition of core holdings and supporting instruments
            designed to optimize returns while managing risk
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-8"
        >
          {/* Core Holdings Section */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-blue-900/40 to-blue-800/20 rounded-xl p-6 backdrop-blur-sm border border-blue-700/20"
          >
            <div className="flex items-center mb-4">
              <CircleDot className="text-blue-300 mr-2" />
              <motion.h3 
                className="text-2xl font-semibold text-blue-100"
                initial={{ opacity: 0.8 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2 }}
              >
                Core Holdings
              </motion.h3>
            </div>
            <div className="space-y-4">
              <div className="bg-blue-900/30 rounded-lg p-4">
                <motion.h4 
                  className="text-blue-200 font-medium mb-2"
                  initial={{ opacity: 0.9 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  Equity Mutual Funds
                </motion.h4>
                <motion.p 
                  className="text-gray-300 text-sm"
                  initial={{ opacity: 0.8 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2 }}
                >
                  Strategic allocation across market capitalizations, focusing on funds 
                  with consistent performance and strong fundamentals
                </motion.p>
              </div>
            </div>
          </motion.div>

          {/* Supporting Instruments Section */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-indigo-900/40 to-indigo-800/20 rounded-xl p-6 backdrop-blur-sm border border-indigo-700/20"
          >
            <div className="flex items-center mb-4">
              <CircleDashed className="text-indigo-400 mr-2" />
              <motion.h3 
                className="text-2xl font-semibold text-indigo-100"
                initial={{ opacity: 0.8 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2 }}
              >
                Supporting Instruments
              </motion.h3>
            </div>
            <div className="space-y-4">
              {[
                {
                  title: "REITs & InvITs",
                  description: "Strategic exposure to real estate and infrastructure assets for enhanced portfolio diversification"
                },
                {
                  title: "Gold ETFs",
                  description: "Hedge against market volatility and inflation through precious metal allocation"
                },
                {
                  title: "Debt Instruments",
                  description: "Carefully selected fixed-income securities for stability and regular income"
                }
              ].map((item, index) => (
                <div key={index} className="bg-indigo-900/30 rounded-lg p-4">
                  <motion.h4 
                    className="text-indigo-200 font-medium mb-2"
                    initial={{ opacity: 0.9 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                  >
                    {item.title}
                  </motion.h4>
                  <motion.p 
                    className="text-gray-300 text-sm"
                    initial={{ opacity: 0.8 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2 }}
                  >
                    {item.description}
                  </motion.p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default PortfolioComposition;