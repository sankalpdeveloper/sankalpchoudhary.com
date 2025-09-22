'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Full-stack developer with expertise in JavaScript, HTML/CSS, Node.js, React.js, Redux, 
              Express, FastAPI, and Next.js. Currently serving as SDE-2 at Health-e, where I've built 
              scalable applications using Node.js and React.js, reducing development time by 30%.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Specialized in designing and integrating REST APIs, boosting system interoperability 
              across key health modules. Expert in optimizing frontend performance with reusable React 
              components, improving load times by 40%, and led backend development with Express.js and 
              MongoDB, enhancing data throughput by 25%.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Deployed applications via Docker and AWS, achieving 99.9% uptime and smooth CI/CD workflows. 
              Fluent in Hindi with conversational proficiency in English, bringing strong communication 
              skills to collaborative development environments.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl p-8 backdrop-blur-sm border border-white/10"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Quick Facts</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="text-purple-400 mr-3">📱</span>
                <span className="text-gray-300">+91 9549736263</span>
              </div>
              <div className="flex items-center">
                <span className="text-purple-400 mr-3">📧</span>
                <span className="text-gray-300">hello@sankalpchoudhary.com</span>
              </div>
              <div className="flex items-center">
                <span className="text-purple-400 mr-3">💼</span>
                <span className="text-gray-300">SDE-2 at Health-e</span>
              </div>
              <div className="flex items-center">
                <span className="text-purple-400 mr-3">🎯</span>
                <span className="text-gray-300">MERN Stack Specialist</span>
              </div>
              <div className="flex items-center">
                <span className="text-purple-400 mr-3">🎓</span>
                <span className="text-gray-300">MCS - Jain University, Bengaluru</span>
              </div>
              <div className="flex items-center">
                <span className="text-purple-400 mr-3">🎓</span>
                <span className="text-gray-300">BSc - Lucky Institute, Jodhpur</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
