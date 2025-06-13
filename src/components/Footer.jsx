import React from 'react';
import { motion } from 'framer-motion';
import { FiTwitter, FiFacebook, FiLinkedin, FiInstagram, FiGithub } from 'react-icons/fi';

const Footer = () => {
  const links = [
    {
      title: "Company",
      items: ["About Us", "Careers", "Blog", "Contact"]
    },
    {
      title: "Services",
      items: ["Mobile Development", "UI/UX Design", "Web Development", "QA Testing"]
    },
    {
      title: "Legal",
      items: ["Privacy Policy", "Terms of Service", "Cookie Policy"]
    }
  ];

  const socialLinks = [
    { icon: <FiTwitter />, url: "#" },
    { icon: <FiFacebook />, url: "#" },
    { icon: <FiLinkedin />, url: "#" },
    { icon: <FiInstagram />, url: "#" },
    { icon: <FiGithub />, url: "#" }
  ];

  return (
    <footer className="bg-gray-900 text-gray-400 pt-20 pb-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-2xl font-bold text-white mb-4">
              Dexter<span className="text-purple-400">Apks</span>
            </div>
            <p className="mb-6">
              Building exceptional mobile experiences that drive business growth and user engagement.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="text-gray-400 hover:text-purple-400 transition-colors text-xl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Links */}
          {links.map((link, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-white font-medium text-lg mb-4">{link.title}</h3>
              <ul className="space-y-2">
                {link.items.map((item, i) => (
                  <li key={i}>
                    <a href="#" className="hover:text-purple-400 transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-white font-medium text-lg mb-4">Newsletter</h3>
            <p className="mb-4">Subscribe to our newsletter for the latest updates.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-3 rounded-l-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-600 w-full"
              />
              <button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-3 rounded-r-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="pt-8 border-t border-gray-800 text-center"
        >
          <p>&copy; {new Date().getFullYear()} Dexter Apks. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 