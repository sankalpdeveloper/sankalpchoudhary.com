'use client';

import { motion } from 'framer-motion';

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
        </motion.div>

        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-8 backdrop-blur-sm border border-white/10"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-white">SDE-2</h3>
                <p className="text-purple-400 font-semibold">Health-e.in</p>
              </div>
              <span className="text-gray-400 text-sm">Apr 2024 - Present · 1 yr 6 mos</span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              Leading program creation and production deployment for health-tech solutions. Working on UHI and ABHA 
              integrations, building scalable APIs, and managing complex healthcare data exchange systems.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Program Creation', 'Production Deployment', 'UHI', 'ABHA', 'Node.js', 'MongoDB', 'React'].map((tech) => (
                <span key={tech} className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-8 backdrop-blur-sm border border-white/10"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-white">MERN Stack Manager</h3>
                <p className="text-purple-400 font-semibold">Health-e.in</p>
              </div>
              <span className="text-gray-400 text-sm">Apr 2022 - Apr 2024 · 2 yrs 1 mo</span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              Managed MERN stack development teams and architected healthcare solutions. Built comprehensive 
              lab test management systems, API architectures, and user management platforms with focus on 
              performance and scalability.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Node.js', 'React.js', 'MongoDB', 'Express', 'Team Management', 'API Design'].map((tech) => (
                <span key={tech} className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-8 backdrop-blur-sm border border-white/10"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-white">Full-stack Developer</h3>
                <p className="text-purple-400 font-semibold">Echo Innovate IT</p>
              </div>
              <span className="text-gray-400 text-sm">Apr 2022 - Apr 2024 · 2 yrs 1 mo</span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              Developed mobile applications and AI digital transformation solutions. Worked on diverse projects 
              involving React.js, Node.js, and mobile app development with focus on user experience and performance.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Node.js', 'React.js', 'Mobile Development', 'AI Solutions', 'Digital Transformation'].map((tech) => (
                <span key={tech} className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-8 backdrop-blur-sm border border-white/10"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-white">Junior Software Engineer</h3>
                <p className="text-purple-400 font-semibold">CMARIX TechnoLabs</p>
              </div>
              <span className="text-gray-400 text-sm">Oct 2021 - Mar 2022 · 6 mos</span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              Started my professional journey developing web applications with focus on front-end technologies. 
              Gained experience in CSS, HTML, and modern web development practices.
            </p>
            <div className="flex flex-wrap gap-2">
              {['CSS', 'HTML', 'JavaScript', 'Web Development'].map((tech) => (
                <span key={tech} className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
