import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX, FiMoon, FiSun } from 'react-icons/fi';
import { Link } from 'react-scroll';
import logo from '../assets/images/logo.png';
import xirodFont from '../assets/fonts/Xirod.otf'; // Adjust the path as necessary

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const navItems = [
    { name: 'Home', to: 'home' },
    { name: 'Features', to: 'features' },
    { name: 'Portfolio', to: 'portfolio' },
    { name: 'Testimonials', to: 'testimonials' },
    { name: 'Contact', to: 'contact' }
  ];

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {
           //Logo (Image/logo.png)
          //  <div className="flex-shrink-0">
            
          // </div>
          }
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex-shrink-0 flex items-center bg-white-400"
          >
            <img 
  src={logo} 
  alt="DexterApks Logo" 
  className="h-24 w-auto"
/>
            <span className="text-2xl font-bold text-purple-600 dark:text-purple-400" style={{ fontFamily: 'Xirod, sans-serif' }}>
              Dexter<span className="text-gray-900 dark:text-white" style={{ fontFamily: 'Xirod, sans-serif'}}>Apks</span>
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth={true}
                duration={500}
                className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Theme Toggle and Mobile Menu Button */}
          {/* <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>

            <button
              className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div> */}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white dark:bg-gray-900 shadow-lg"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth={true}
                duration={500}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
