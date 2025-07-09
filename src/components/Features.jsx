import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiLayers, FiSmartphone, FiZap, FiShield, FiPieChart } from 'react-icons/fi';

const Features = () => {
  const features = [
    {
      icon: <FiCode className="w-8 h-8" />,
      title: "Custom Development",
      description: "Tailored solutions designed specifically for your business needs and user requirements."
    },
    {
      icon: <FiLayers className="w-8 h-8" />,
      title: "Cross-Platform",
      description: "Build once, deploy everywhere with our Flutter expertise."
    },
    {
      icon: <FiSmartphone className="w-8 h-8" />,
      title: "UI/UX Focused",
      description: "Beautiful interfaces with intuitive user experiences that drive engagement."
    },
    {
      icon: <FiZap className="w-8 h-8" />,
      title: "High Performance",
      description: "Optimized apps that load quickly and run smoothly on all devices."
    },
    {
      icon: <FiShield className="w-8 h-8" />,
      title: "Secure",
      description: "Enterprise-grade security to protect your data and users."
    },
    {
      icon: <FiPieChart className="w-8 h-8" />,
      title: "Analytics Ready",
      description: "Built-in analytics to track user behavior and app performance."
    }
  ];

  return (
    <section id="features" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our <span className="text-purple-600">Superpowers</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Everything you need to build a successful mobile presence
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-purple-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;