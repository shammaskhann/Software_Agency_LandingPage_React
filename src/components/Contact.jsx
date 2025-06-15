import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      phone: Yup.string().matches(/^[0-9]+$/, "Must be only digits").min(10, 'Must be at least 10 characters'),
      message: Yup.string().required('Required').min(20, 'Must be at least 20 characters')
    }),
    onSubmit: async (values) => {
      setIsSubmitting(true);
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log('Form submitted:', values);
        setSubmitSuccess(true);
        formik.resetForm();
      } catch (error) {
        console.error('Submission error:', error);
      } finally {
        setIsSubmitting(false);
      }
    }
  });

  return (
    <section id="contact" className="py-20 px-4">
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
            Get In <span className="text-purple-600">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can help bring it to life.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/3"
          >
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="text-purple-600 mt-1 mr-4">
                    <FiMail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-1">Email Us</h4>
                    <p className="text-gray-600 dark:text-gray-400">dexterapkoffical@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-purple-600 mt-1 mr-4">
                    <FiPhone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-1">Call Us</h4>
                    <p className="text-gray-600 dark:text-gray-400">+92 (334) 368-0373</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-purple-600 mt-1 mr-4">
                    <FiMapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-1">Visit Us</h4>
                    <p className="text-gray-600 dark:text-gray-400">21st Commercial Street,DHA Phase 2 ext,Karachi</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:w-2/3"
          >
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm">
              {submitSuccess ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Thank You!</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">Your message has been sent successfully. We'll get back to you soon.</p>
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Send Us a Message</h3>
                  <form onSubmit={formik.handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name*</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.name}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
                          placeholder="Your name"
                        />
                        {formik.touched.name && formik.errors.name ? (
                          <div className="text-red-500 text-sm mt-1">{formik.errors.name}</div>
                        ) : null}
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email*</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.email}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
                          placeholder="your@email.com"
                        />
                        {formik.touched.email && formik.errors.email ? (
                          <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
                        ) : null}
                      </div>
                    </div>

                    <div className="mb-6">
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.phone}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
                        placeholder="+1 (___) ___-____"
                      />
                      {formik.touched.phone && formik.errors.phone ? (
                        <div className="text-red-500 text-sm mt-1">{formik.errors.phone}</div>
                      ) : null}
                    </div>

                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message*</label>
                      <textarea
                        id="message"
                        name="message"
                        rows="5"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.message}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
                        placeholder="Tell us about your project..."
                      ></textarea>
                      {formik.touched.message && formik.errors.message ? (
                        <div className="text-red-500 text-sm mt-1">{formik.errors.message}</div>
                      ) : null}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-purple-600 hover:bg-purple-700 text-white px-6 py-4 rounded-lg font-medium transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;