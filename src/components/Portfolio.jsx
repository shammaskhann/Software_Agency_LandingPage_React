import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const Portfolio = () => {
  const projects = [
    {
      title: "Fitness Tracker App",
      description: "A comprehensive fitness app with workout plans, nutrition tracking, and progress analytics.",
      tags: ["React Native", "Firebase", "Redux"],
      image: "/assets/images/project1.jpg",
      links: [
        { icon: <FiExternalLink />, url: "#" },
        { icon: <FiGithub />, url: "#" }
      ]
    },
    {
      title: "E-commerce Mobile App",
      description: "Complete shopping experience with product browsing, cart, and secure checkout.",
      tags: ["Flutter", "Node.js", "MongoDB"],
      image: "/assets/images/project2.jpg",
      links: [
        { icon: <FiExternalLink />, url: "#" },
        { icon: <FiGithub />, url: "#" }
      ]
    },
    {
      title: "Social Media Platform",
      description: "Connect with friends, share moments, and discover new content in this engaging app.",
      tags: ["React Native", "GraphQL", "AWS"],
      image: "/assets/images/project3.jpg",
      links: [
        { icon: <FiExternalLink />, url: "#" },
        { icon: <FiGithub />, url: "#" }
      ]
    }
  ];

  return (
    <section id="portfolio" className="py-20 px-4">
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
            Our <span className="text-purple-600">Work</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            See how we've helped businesses like yours succeed in the mobile space
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl shadow-lg"
            >
              {/* Project Image */}
              <div className="h-64 bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                <div className="text-white text-xl font-bold">{project.title}</div>
              </div>
              
              {/* Project Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="bg-gray-800 bg-opacity-60 text-gray-200 text-xs px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Links */}
                <div className="flex space-x-4">
                  {project.links.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      className="text-white hover:text-purple-400 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <button className="border border-purple-600 text-purple-600 dark:text-purple-400 dark:border-purple-400 px-8 py-3 rounded-lg font-medium hover:bg-purple-50 dark:hover:bg-gray-800 transition-colors">
            View All Projects
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;