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
              MERN stack developer with a healthcare focus and over 5 years of experience. 
              Building impactful web apps using React, Node.js, and MongoDB for seamless data 
              exchange and user-friendly interfaces. I optimize performance, build RESTful APIs, 
              and collaborate across teams.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Passionate about solving healthcare challenges with technology. My current project 
              in the healthcare sector has equipped me with valuable knowledge and experience in 
              this domain, enabling me to contribute effectively to healthcare-related initiatives 
              including UHI and ABHA integrations.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Recently completed Deep Research with LangGraph certification from LangChain, 
              continuously expanding my expertise in modern technologies and AI integration.
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
                <span className="text-purple-400 mr-3">📍</span>
                <span className="text-gray-300">Ahmedabad, Gujarat, India</span>
              </div>
              <div className="flex items-center">
                <span className="text-purple-400 mr-3">💼</span>
                <span className="text-gray-300">SDE-2 at Health-e.in</span>
              </div>
              <div className="flex items-center">
                <span className="text-purple-400 mr-3">🎯</span>
                <span className="text-gray-300">UHI & ABHA Specialist</span>
              </div>
              <div className="flex items-center">
                <span className="text-purple-400 mr-3">🚀</span>
                <span className="text-gray-300">5+ Years Experience</span>
              </div>
              <div className="flex items-center">
                <span className="text-purple-400 mr-3">🎓</span>
                <span className="text-gray-300">MCA - Jain University</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
