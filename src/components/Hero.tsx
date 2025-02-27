import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import { ParticleField } from './ParticleField';
import { TypeAnimation } from 'react-type-animation';

export const Hero = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(30,41,59,0.3)_30%,rgba(14,165,233,0.15)_100%)]" />
      <ParticleField />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative max-w-7xl mx-auto flex flex-col items-center text-center"
      >
        <motion.div 
          variants={item}
          className="relative mb-12"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-sky-500 to-sky-400 rounded-full blur-2xl opacity-20"></div>
          <motion.div
            className="relative rounded-full overflow-hidden border-4 border-sky-500/50 shadow-[0_0_20px_rgba(14,165,233,0.3)] w-[200px] h-[200px] mx-auto"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300&h=300"
              alt="Shiv's Portrait"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>

        <motion.div variants={item} className="max-w-3xl">
          <motion.h1
            variants={item}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-50 to-sky-500 bg-clip-text text-transparent tracking-tight"
          >
            <TypeAnimation
              sequence={[
                'AI & ML Enthusiast',
                1000,
                'Machine Learning Developer',
                1000,
                'Data Scientist',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.h1>

          <motion.p
            variants={item}
            className="text-slate-400 text-lg md:text-xl mb-12 leading-relaxed"
          >
            Building intelligent systems with a passion for AI and Machine Learning.
            Transforming complex data into meaningful solutions.
          </motion.p>

          <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="#contact"
              className="px-8 py-3 bg-gradient-to-r from-sky-500 to-sky-400 text-white rounded-lg flex items-center gap-2 hover:translate-y-[-5px] hover:shadow-[0_0_20px_rgba(14,165,233,0.2)] transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              Get in touch <ArrowRight size={20} />
            </motion.a>

            <motion.div variants={item} className="flex items-center gap-4">
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-slate-700 rounded-lg hover:border-sky-500 hover:text-sky-500 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-slate-700 rounded-lg hover:border-sky-500 hover:text-sky-500 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-slate-700 rounded-lg hover:border-sky-500 hover:text-sky-500 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <Twitter size={24} />
              </motion.a>
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-slate-700 rounded-lg hover:border-sky-500 hover:text-sky-500 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <Instagram size={24} />
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};