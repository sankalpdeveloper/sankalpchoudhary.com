'use client';

import { motion } from 'framer-motion';

export default function Projects() {
  const projects = [
    {
      title: "Health-e Lab Test Platform",
      description: "Comprehensive lab test management system with cart functionality, user management, and payment integration.",
      tech: ["Node.js", "Express", "MongoDB", "React", "Swagger"],
      github: "#",
      demo: "#"
    },
    {
      title: "FastAPI AI Assistant",
      description: "AI-powered chatbot and data extraction service built with FastAPI, featuring document processing and conversation management.",
      tech: ["Python", "FastAPI", "OpenAI", "PostgreSQL", "Docker"],
      github: "#",
      demo: "#"
    },
    {
      title: "Insurance Claim UI",
      description: "Modern React application for insurance claim management with TypeScript and shadcn/ui components.",
      tech: ["React", "TypeScript", "Tailwind", "shadcn/ui"],
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
