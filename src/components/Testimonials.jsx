import React from 'react';
import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, FitnessPlus",
      content: "Dexter Apks transformed our mobile presence. Their team delivered an app that exceeded our expectations and has significantly increased user engagement.",
      rating: 5,
      image: "/assets/images/avatar1.jpg"
    },
    {
      name: "Michael Chen",
      role: "Product Manager, ShopEasy",
      content: "Working with Dexter Apks was a game-changer for our e-commerce platform. Their attention to detail and user experience focus is unparalleled.",
      rating: 5,
      image: "/assets/images/avatar2.jpg"
    },
    {
      name: "Emily Rodriguez",
      role: "Founder, SocialConnect",
      content: "From concept to launch, Dexter Apks guided us through the entire process. Our app has been featured in the App Store multiple times thanks to their expertise.",
      rating: 4,
      image: "/assets/images/avatar3.jpg"
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
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
            Client <span className="text-purple-600">Stories</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it - hear what our clients say
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm"
            >
              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <FiStar 
                    key={i} 
                    className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300 dark:text-gray-600'}`} 
                  />
                ))}
              </div>
              
              {/* Content */}
              <p className="text-gray-600 dark:text-gray-400 italic mb-6">"{testimonial.content}"</p>
              
              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold mr-4">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">{testimonial.name}</h4>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;