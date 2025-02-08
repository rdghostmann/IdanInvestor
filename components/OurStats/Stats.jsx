"use client";
import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Users, DollarSign, BarChart } from "lucide-react";

const Stats = () => {
  return (
    
   
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="  mx-auto bg-gray-300 shadow-xl  w-full  p-6 border py-10 hover:shadow-2xl transition-shadow duration-300"
      >
        

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 ">
          {/* Total Investments */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3 bg-blue-100 p-5 rounded-xl shadow-md"
          >
            <DollarSign className="text-green-600 size-10" />
            <div>
              <p className="text-gray-600 text-sm">Total Investments</p>
              <p className="text-2xl font-semibold text-gray-800">$1.2M</p>
            </div>
          </motion.div>

          {/* Active Users */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3 bg-green-100 p-5 rounded-xl shadow-md"
          >
            <Users className="text-green-600 size-10" />
            <div>
              <p className="text-gray-600 text-sm">Active Users</p>
              <p className="text-2xl font-semibold text-gray-800">5,340</p>
            </div>
          </motion.div>

          {/* ROI */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3 bg-purple-100 p-5 rounded-xl shadow-md"
          >
            <TrendingUp className="text-purple-600 size-10" />
            <div>
              <p className="text-gray-600 text-sm">ROI (Annual)</p>
              <p className="text-2xl font-semibold text-gray-800">14.8%</p>
            </div>
          </motion.div>

          {/* Growth Rate */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3 bg-yellow-100 p-5 rounded-xl shadow-md"
          >
            <BarChart className="text-yellow-600 size-10" />
            <div>
              <p className="text-gray-600 text-sm">Growth Rate</p>
              <p className="text-2xl font-semibold text-gray-800">9.2%</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
  
  );
};

export default Stats;
