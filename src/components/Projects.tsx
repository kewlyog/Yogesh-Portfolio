'use client';

import { motion } from 'framer-motion';

const projects = [
  {
    title: 'AI Chatbot',
    description:
      'An intelligent conversational AI chatbot built with modern NLP techniques, featuring real-time responses, context awareness, and natural language understanding capabilities.',
    technologies: ['Python', 'OpenAI API', 'React', 'FastAPI', 'WebSocket'],
    image: '/projects/ai-chatbot.jpg',
    link: 'https://ai-chatbot-dmxq.onrender.com',
  },
  {
    title: 'Computer Vision Pipeline',
    description:
      'Built an end-to-end computer vision pipeline for real-time object detection and tracking, implementing custom YOLO models and optimizing for edge devices.',
    technologies: ['Python', 'PyTorch', 'OpenCV', 'TensorRT', 'Docker'],
    image: '/projects/computer-vision.jpg',
    link: '#',
  },
  {
    title: 'ML-Powered Analytics Dashboard',
    description:
      'Created an interactive analytics dashboard with ML-powered insights, featuring predictive analytics and anomaly detection for business metrics.',
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'React', 'D3.js'],
    image: '/projects/analytics.jpg',
    link: '#',
  },
  {
    title: 'NLP Text Classification System',
    description:
      'Implemented a state-of-the-art text classification system using transformer models, achieving 95% accuracy in sentiment analysis and topic classification.',
    technologies: ['Python', 'Hugging Face', 'PyTorch', 'FastAPI', 'Docker'],
    image: '/projects/nlp.jpg',
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
              >
                <div className="relative h-48">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-90" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-2xl font-bold text-white text-center px-4">
                      {project.title}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-2 bg-gradient-to-r from-blue-400 to-purple-500 text-white rounded-full hover:opacity-90 transition-opacity"
                  >
                    View Project
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 