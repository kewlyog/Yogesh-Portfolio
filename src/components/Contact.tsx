'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState({
    type: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Sending message...' });

    try {
      // Replace these with your EmailJS credentials
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'a.yogesh87@gmail.com'
      };

      console.log('Sending email with params:', templateParams);

      const response = await emailjs.send(
        'service_01d8lws',
        'template_k4e4x6t',
        templateParams,
        'eHOEELBieRnRpJQ2Y'
      );

      console.log('EmailJS response:', response);
      
      setStatus({
        type: 'success',
        message: 'Message sent successfully! I will get back to you soon.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus({
        type: 'error',
        message: `Failed to send message: ${error instanceof Error ? error.message : 'Unknown error'}`
      });
    }
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Let&apos;s Build Something Intelligent
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                Get in Touch
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                I&apos;m always excited to discuss new AI/ML projects, collaborations, and opportunities.
                Whether you need help with implementing machine learning models, building AI-powered applications,
                or integrating AI capabilities into your existing systems, I&apos;m here to help.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-blue-600 dark:text-blue-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white">Email</h4>
                    <p className="text-gray-600 dark:text-gray-300">a.yogesh87@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-blue-600 dark:text-blue-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white">Location</h4>
                    <p className="text-gray-600 dark:text-gray-300">Remote / Worldwide</p>
                  </div>
                </div>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700"
                />
              </div>
              {status.message && (
                <div className={`p-4 rounded-md ${
                  status.type === 'success' 
                    ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'
                    : status.type === 'error'
                    ? 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300'
                    : 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                }`}>
                  {status.message}
                </div>
              )}
              <button
                type="submit"
                disabled={status.type === 'loading'}
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-400 to-purple-500 text-white rounded-full hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status.type === 'loading' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 