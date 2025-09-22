'use client';

import { motion } from 'framer-motion';

export default function Projects() {
  const projects = [
    {
      title: "Health-e Platform",
      description: "Full-fledged health management platform from scratch. Enables users to upload medical records and monitor health parameters. Provides intelligent health insights based on user data.",
      tech: ["MERN Stack", "Health Tracking", "Data Analytics", "Medical Records"],
      github: "#",
      demo: "#"
    },
    {
      title: "Health-e Specialized Modules",
      description: "Integrated specialized healthcare modules including Pregnancy Tracking, Childcare, and Cardiac Monitoring. Scalable and modular architecture for future healthcare extensions.",
      tech: ["React.js", "Node.js", "MongoDB", "Healthcare APIs"],
      github: "#",
      demo: "#"
    },
    {
      title: "GoodTalk - Video Sharing Platform",
      description: "Mobile app built with React Native inspired by TikTok. Users can view, like, and share videos with smooth and interactive UI. Features admin dashboard and real-time video compression.",
      tech: ["React Native", "Node.js", "MongoDB", "Video Processing"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="glass-effect rounded-2xl p-6 card-hover animated-border group"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span key={tech} className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.github}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  GitHub
                </a>
                <a
                  href={project.demo}
                  className="text-purple-400 hover:text-purple-300 transition-colors duration-200"
                >
                  Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
