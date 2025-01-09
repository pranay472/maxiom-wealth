import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, XCircle } from "lucide-react";

const InvestorProfile = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="bg-white py-24 sm:py-32 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        {/* Title Section with Background Text */}
        <div className="relative py-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[100px] sm:text-[120px] md:text-[140px] font-black text-[#E8F0FE] whitespace-nowrap w-full text-center select-none">
            ASSESSMENT
          </div>
          <motion.div 
            className="mx-auto max-w-3xl text-center relative z-10"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              <span className="text-blue-600">
                Suitability Assessment
              </span>
            </h2>
            <div className="flex justify-center items-center gap-3 my-4">
              <div className="h-[1px] w-20 bg-gray-300"></div>
              <div className="h-[2px] w-40 bg-blue-600"></div>
              <div className="h-[1px] w-20 bg-gray-300"></div>
            </div>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Discover if our investment approach aligns with your financial goals and risk tolerance
            </p>
          </motion.div>
        </div>

        {/* Profile Cards Grid */}
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:mt-20 lg:grid-cols-2">
          {/* Ideal For Section */}
          <motion.div 
            className="rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-200 hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden group"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <h3 className="text-xl font-semibold leading-8 text-emerald-600 mb-8 flex items-center">
              <span className="bg-emerald-100 rounded-full p-2 mr-3">
                <CheckCircle className="h-6 w-6 text-emerald-600" />
              </span>
              Ideal For
            </h3>
            <ul className="space-y-6 relative z-10">
              {[
                "Conservative investors seeking capital preservation",
                "Those prioritizing regular income",
                "Investors seeking lower volatility",
                "Those preferring fixed-income exposure"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-4 group/item">
                  <CheckCircle className="h-6 w-6 flex-none text-emerald-600 mt-1 group-hover/item:scale-110 transition-transform" />
                  <span className="text-gray-600 group-hover/item:text-gray-900 transition-colors">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Not Suitable For Section */}
          <motion.div 
            className="rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-200 hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden group"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <h3 className="text-xl font-semibold leading-8 text-red-600 mb-8 flex items-center">
              <span className="bg-red-100 rounded-full p-2 mr-3">
                <XCircle className="h-6 w-6 text-red-600" />
              </span>
              Not Suitable For
            </h3>
            <ul className="space-y-6 relative z-10">
              {[
                "High-risk seeking investors",
                "Those requiring extremely short-term liquidity",
                "Investors seeking aggressive growth"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-4 group/item">
                  <XCircle className="h-6 w-6 flex-none text-red-600 mt-1 group-hover/item:scale-110 transition-transform" />
                  <span className="text-gray-600 group-hover/item:text-gray-900 transition-colors">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Minimum Requirements Section */}
          <motion.div 
            className="lg:col-span-2 rounded-3xl bg-gradient-to-r from-gray-50 via-white to-gray-50 p-10 shadow-xl relative overflow-hidden"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="absolute inset-0 bg-white/40 backdrop-blur-sm"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-semibold leading-8 text-gray-900 mb-10 text-center">
                Minimum Requirements
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Minimum Investment",
                    value: "₹50 Lakhs",
                    icon: "💰"
                  },
                  {
                    title: "Time Horizon",
                    value: "3-5 Years",
                    subtext: "Recommended",
                    icon: "⏳"
                  },
                  {
                    title: "Risk Tolerance",
                    value: "Low to Moderate",
                    icon: "🎯"
                  }
                ].map((item, index) => (
                  <div key={index} 
                    className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
                  >
                    <span className="text-4xl mb-4">{item.icon}</span>
                    <span className="text-blue-600 font-semibold mb-2">{item.title}</span>
                    <span className="text-2xl font-bold text-gray-900">{item.value}</span>
                    {item.subtext && (
                      <span className="text-sm text-gray-500 mt-1">{item.subtext}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default InvestorProfile;
