import React from 'react';
import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';

const Testimonials = () => {
    const testimonials = [
    {
      name: "Ahmed Raza",
      role: "Founder, Shady Beverage Co",
      content: "Dexter Apks delivered a sleek and intuitive mobile app for our beverage startup. The ordering process is seamless and our customers love the new digital experience.",
      rating: 5,
      image: "/assets/images/avatar4.jpg"
    },
    {
      name: "Fatima Al-Sayed",
      role: "Operations Manager, Car Fix Up",
      content: "The Car Fix Up app has transformed our business operations. Real-time tracking and appointment scheduling have made our services more efficient and accessible.",
      rating: 5,
      image: "/assets/images/avatar5.jpg"
    },
    {
      name: "Dr. Sameer Qureshi",
      role: "Director, Smileline Dental Clinic",
      content: "Our clinic's workflow has improved dramatically thanks to Dexter Apks. The app's appointment and reminder features have enhanced both patient care and administrative efficiency.",
      rating: 5,
      image: "/assets/images/avatar6.jpg"
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