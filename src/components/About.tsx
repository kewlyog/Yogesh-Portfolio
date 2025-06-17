'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-300">
                I&apos;m a passionate Full Stack Developer with a strong foundation in modern web technologies.
                My journey in software development has equipped me with the skills to build robust and
                scalable applications.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                I love solving complex problems and creating elegant solutions that make a difference.
                When I&apos;m not coding, you can find me exploring new technologies and contributing to
                open-source projects.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                <h3 className="font-semibold mb-2">Experience</h3>
                <p className="text-gray-600 dark:text-gray-300">5+ Years</p>
              </div>
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                <h3 className="font-semibold mb-2">Projects</h3>
                <p className="text-gray-600 dark:text-gray-300">20+ Completed</p>
              </div>
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                <h3 className="font-semibold mb-2">Clients</h3>
                <p className="text-gray-600 dark:text-gray-300">15+ Satisfied</p>
              </div>
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                <h3 className="font-semibold mb-2">Location</h3>
                <p className="text-gray-600 dark:text-gray-300">Remote</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 