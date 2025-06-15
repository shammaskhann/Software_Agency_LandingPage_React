import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiSmartphone } from 'react-icons/fi';
import mockupImage from '../assets/images/mockup.png';
import Typewriter from 'typewriter-effect';

const Hero = () => {
  // Lightning bolt SVG path
  const lightningPath = "M12 3L8 9H11L7 21L16 11H13L16 3H12Z";

  return (
    <section className="relative py-40 px-4 sm:px-8 lg:px-20 max-w-7xl mx-auto h-max overflow-hidden">
      {/* Lightning Background Animation
      <div className="absolute inset-0 overflow-hidden z-0">
        {[...Array(12)].map((_, i) => {
          const color = ['#8B5CF6', '#EC4899', '#3B82F6', '#10B981', '#F59E0B'][i % 5];
          const size = Math.random() * 30 + 20;
          const delay = Math.random() * 4;
          const duration = Math.random() * 3 + 2;
          
          return (
            <motion.svg
              key={i}
              viewBox="0 0 24 24"
              className="absolute"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                fill: color,
                opacity: 0.7
              }}
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 0.7, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
                delay
              }}
            >
              <path d={lightningPath} />
            </motion.svg>
          );
        })}
      </div> */}

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 mb-10 md:mb-0"
        >
          <div className="min-h-[200px] md:min-h-[280px] flex flex-col justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-2">
              <span className="block">
                <Typewriter
                  options={{
                    strings: [
                      'Transform Your Business',
                      'Innovative Mobile Solutions',
                      'Premium App Development',
                      'Digital Experiences That Convert'
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 50,
                    deleteSpeed: 30,
                  }}
                />
              </span>
              <span className="text-purple-600">That Drive Results</span>
            </h1>
          </div>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            We design & develop cutting-edge mobile applications that accelerate your business growth and maximize user engagement.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-medium flex items-center gap-2 transition-all"
            >
              <FiSmartphone /> Get Your Free Consultation
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-purple-600 text-purple-600 dark:text-purple-400 dark:border-purple-400 px-8 py-3 rounded-lg font-medium flex items-center gap-2 transition-all"
            >
              <FiDownload /> See Our Work
            </motion.button>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-1/2"
        >
          <div className="relative">
            <img 
              src={mockupImage} 
              alt="Premium Mobile App Design"
              className="w-full max-w-md mx-auto transform hover:scale-105 transition-transform duration-300"
            />
            <motion.div 
              className="absolute -z-10 inset-0 bg-purple-500/10 rounded-3xl"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.1, 0.15, 0.1]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

// import React from 'react';
// import { motion } from 'framer-motion';
// import { FiDownload, FiSmartphone } from 'react-icons/fi';
// import mockupImage from '../assets/images/mockup.png'; // Adjust the path as necessary

// const Hero = () => {
//   return (
//     <section className="py-40 px-20 max-w-7xl mx-auto h-max ">
//       <div className="flex flex-col md:flex-row items-center justify-between">
//         <motion.div 
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           className="md:w-1/2 mb-10 md:mb-0"
//         >
//           <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
//             Building <span className="text-purple-600">Exceptional</span> Mobile Experiences
//           </h1>
//           <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
//             Dexter Apks crafts high-performance mobile applications that drive business growth and user engagement.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4">
//             <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-medium flex items-center gap-2 transition-all">
//               <FiSmartphone /> Get a Quote
//             </button>
//             <button className="border border-purple-600 text-purple-600 dark:text-purple-400 dark:border-purple-400 px-8 py-3 rounded-lg font-medium flex items-center gap-2 transition-all">
//               <FiDownload /> View Portfolio
//             </button>
//           </div>
//         </motion.div>
        
//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="md:w-1/2"
//         >
//           <div className="relative">
//             <div className="absolute -top-10 -left-10 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
//             <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
//             <div className="relative">
//               <img 
//                 src={mockupImage} 
//                 alt="Mobile App Mockup"
//                 className="w-full max-w-md mx-auto"
//               />
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Hero;