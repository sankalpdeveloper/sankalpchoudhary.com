'use client';

import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Open to work in Web Developer, Python Developer, Javascript Developer, React Developer and DevOps Engineer roles. 
            Let's discuss healthcare technology, MERN stack development, or exciting new opportunities!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-purple-400 mr-4">📧</span>
                  <a href="mailto:hello@sankalpchoudhary.com" className="text-gray-300 hover:text-white transition-colors">
                    hello@sankalpchoudhary.com
                  </a>
                </div>
                <div className="flex items-center">
                  <span className="text-purple-400 mr-4">📱</span>
                  <a href="tel:+919549736263" className="text-gray-300 hover:text-white transition-colors">
                    +91 9549736263
                  </a>
                </div>
                <div className="flex items-center">
                  <span className="text-purple-400 mr-4">💼</span>
                  <a 
                    href="https://www.linkedin.com/in/sankalpchoudhary/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    LinkedIn Profile
                  </a>
                </div>
                <div className="flex items-center">
                  <span className="text-purple-400 mr-4">🐙</span>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    GitHub Profile
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-8 backdrop-blur-sm border border-white/10"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-colors"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-colors"
                />
                <textarea
                  rows={4}
                  placeholder="Your Message"
                  className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-colors resize-none"
                ></textarea>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
