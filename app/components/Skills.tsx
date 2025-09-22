'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';

export default function Skills() {
  const ref = useRef(null);

  return (
    <section ref={ref} id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-40 h-40 bg-purple-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-pink-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-4">Skills & Technologies</h2>
          <p className="text-gray-300 max-w-3xl mx-auto mb-4">
            Here are the technologies and tools I work with to build amazing digital experiences.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-effect rounded-2xl p-8 card-hover animated-border group"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Frontend</h3>
            <div className="space-y-4">
              {[
                { name: 'JavaScript', level: 95 },
                { name: 'React.js', level: 90 },
                { name: 'Redux', level: 85 },
                { name: 'HTML/CSS', level: 92 }
              ].map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-purple-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-effect rounded-2xl p-8 card-hover animated-border group"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Backend</h3>
            <div className="space-y-4">
              {[
                { name: 'Node.js', level: 95 },
                { name: 'Express', level: 90 },
                { name: 'FastAPI', level: 85 },
                { name: 'Next.js', level: 88 }
              ].map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-purple-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.4 }}
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glass-effect rounded-2xl p-8 card-hover animated-border group"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Database & Tools</h3>
            <div className="space-y-4">
              {[
                { name: 'MongoDB', level: 90 },
                { name: 'PostgreSQL', level: 85 },
                { name: 'Redis', level: 80 },
                { name: 'Git', level: 95 }
              ].map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-purple-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.6 }}
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
