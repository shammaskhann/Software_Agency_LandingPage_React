import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import frame13 from '../assets/images/Frame2013.jpeg';
import frame14 from '../assets/images/Frame2014.jpeg';
import frame15 from '../assets/images/Frame2015.jpeg';
import shady from '../assets/images/Shady.jpg';

import frame16 from '../assets/images/Frame2016.jpeg';
import { desc } from 'framer-motion/client';

const projects = [
  {
    title: "Aqare",
    description:
      "Aqare is a sophisticated bi-lingual real estate platform designed for the Saudi market, offering seamless property listings, user authentication, map integration, and government API (NAFATH) connectivity. The solution supports both English and Arabic, and features advanced auction capabilities, delivering a comprehensive experience for buyers and sellers.",
    tags: ["Flutter", "GetX", "REST-API"],
    image: frame14,
    links: [
      { icon: <FiExternalLink />, url: "https://play.google.com/store/apps/details?id=net.aqare.aqareapp&pcampaignid=web_share" },
      { icon: <FiExternalLink />, url: "https://apps.apple.com/sa/app/aqare/id6741023384" }
    ]
  },
  {
    title: "Map Off",
    description:
      "Map Off is a dual-language mobile application that empowers users to explore locations with custom markers, guest access, dynamic linking, and interactive features such as favorites, view counts, and reviews. The platform is engineered for scalability and user engagement.",
    tags: ["Flutter", "GetX", "REST-API"],
    image: frame15,
    links: [
      { icon: <FiExternalLink />, url: "https://play.google.com/store/apps/details?id=net.mapoff.mapoffapp" }
    ]
  },
  {
    title: "Smileline Dental Clinic App",
    description:
      "A full-stack mobile solution for dental clinics, Smileline streamlines appointment scheduling, automated reminders, WhatsApp integration, invoicing, prescription management, and patient history. The platform supports patients, doctors, and administrators, enhancing operational efficiency and patient care.",
    tags: ["Flutter", "Firebase", "GetX"],
    image: frame16,
    links: []
  },
  {
    title: "Car Fix Up",
    description:
      "Car Fix Up is a robust dual-role application for customers and vendors in the automotive service industry. It features appointment scheduling, live truck tracking for towing, real-time repair estimates, and emergency video calling. Built with Firebase and GetX, the app ensures secure authentication, real-time data, and seamless navigation.",
    tags: ["Flutter", "Firebase", "GetX"],
    image: frame13,
    links: []
    // links: [
    //   { icon: <FiGithub />, url: "https://github.com/yourusername/car_fix_up" }
    // ]
  },
  //Shady Beverage Co (A Rapid Prototype made for a iced tea beverage startup with ordering and menu features)
  {
    title: "Shady Beverage Co",
    description:
      "Shady Beverage Co is a rapid prototype mobile application designed for an iced tea beverage startup that features a user-friendly menu, ordering system, and payment integration. The app is built to enhance customer engagement and streamline the ordering process.",
    tags: ["Flutter", "GetX"],
    image: shady,
    links: [
      { 
        //https://www.youtube.com/watch?v=i1ZpYFWHqwQ
        icon: <FiExternalLink />,
        url: "https://www.youtube.com/watch?v=i1ZpYFWHqwQ"

  }
    ]  },
];

const Portfolio = () => {
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
            Explore a selection of our recent projects, each crafted to deliver exceptional value and innovation for our clients.
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
              className="group relative overflow-hidden rounded-xl shadow-lg bg-white dark:bg-gray-900"
            >
              {/* Project Image */}
              <div className="relative h-64 w-full">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-64 w-full object-cover"
                />
                {/* <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 py-3 px-4">
                  <span className="text-white text-lg font-semibold">{project.title}</span>
                </div> */}
              </div>

              {/* Project Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-black-700 text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>

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

        {/* View More Button
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
        </motion.div> */}
      </div>
    </section>
  );
};

export default Portfolio;