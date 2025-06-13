

// const Hero = () => (
//   <section className="py-20 text-center">
//     <h2 className="text-3xl font-bold">Hero Section</h2>
//   </section>
// );

// export default Hero;
import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiSmartphone } from 'react-icons/fi';
import mockupImage from '../assets/images/mockup.png'; // Adjust the path as necessary

const Hero = () => {
  return (
    <section className="py-20 px-20 max-w-7xl mx-auto max-h">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 mb-10 md:mb-0"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Building <span className="text-purple-600">Exceptional</span> Mobile Experiences
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Dexter Apks crafts high-performance mobile applications that drive business growth and user engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-medium flex items-center gap-2 transition-all">
              <FiSmartphone /> Get a Quote
            </button>
            <button className="border border-purple-600 text-purple-600 dark:text-purple-400 dark:border-purple-400 px-8 py-3 rounded-lg font-medium flex items-center gap-2 transition-all">
              <FiDownload /> View Portfolio
            </button>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-1/2"
        >
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="relative">
              <img 
                src={mockupImage} 
                alt="Mobile App Mockup"
                className="w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;