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
                <p className="text-purple-400 font-semibold">Health-e</p>
              </div>
              <span className="text-gray-400 text-sm">Apr 2022 - Present</span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              Built scalable full-stack apps using Node.js and React.js, reducing development time by 30%. 
              Designed and integrated REST APIs, boosting system interoperability across key health modules. 
              Optimized frontend performance with reusable React components, improving load times by 40%.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Led backend development with Express.js and MongoDB, enhancing data throughput by 25%. 
              Deployed apps via Docker and AWS, enabling 99.9% uptime and smooth CI/CD workflows.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Node.js', 'React.js', 'Express.js', 'MongoDB', 'Docker', 'AWS', 'REST APIs'].map((tech) => (
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
                <h3 className="text-2xl font-bold text-white">Software Developer</h3>
                <p className="text-purple-400 font-semibold">Cmarix</p>
              </div>
              <span className="text-gray-400 text-sm">Oct 2021 - Apr 2022</span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              Supported the development of web applications using Node.js and React.js, contributing to feature implementation. 
              Assisted in debugging, code reviews, and API integrations across client projects. 
              Collaborated with senior developers to learn best practices and deliver quality code on schedule.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Node.js', 'React.js', 'JavaScript', 'API Integration', 'Code Reviews', 'Debugging'].map((tech) => (
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
                <h3 className="text-2xl font-bold text-white">Software Developer</h3>
                <p className="text-purple-400 font-semibold">Linkstar Infosys Private Limited</p>
              </div>
              <span className="text-gray-400 text-sm">Oct 2019 - Oct 2021</span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              Managed and enhanced the company's CRM system, streamlining sales workflows and improving data accuracy. 
              Led development and maintenance of custom auction platform, ensuring seamless bidding and real-time updates. 
              Coordinated with stakeholders to implement new features, improving user engagement and operational efficiency.
            </p>
            <div className="flex flex-wrap gap-2">
              {['CRM Development', 'Auction Platform', 'Sales Workflows', 'Data Management', 'Stakeholder Coordination'].map((tech) => (
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
