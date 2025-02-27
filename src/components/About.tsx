import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Code2, Database, Network, FileDown, Mail, Phone } from 'lucide-react';

export const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="about" className="min-h-screen flex items-center py-20 px-6 bg-slate-900/50">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center"
      >
        <motion.div variants={itemVariants} className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-50 to-sky-500 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <p className="text-slate-400 text-lg leading-relaxed">
            I'm Shiv, an AI & ML enthusiast passionate about building intelligent systems that solve real-world problems. 
            With expertise in Python, TensorFlow, and Keras, I thrive on turning data into actionable insights and creating 
            models that push the boundaries of innovation.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3 text-slate-300">
              <Brain className="text-sky-500" size={20} />
              <span>Machine Learning & Deep Learning</span>
            </div>
            <div className="flex items-center gap-3 text-slate-300">
              <Code2 className="text-sky-500" size={20} />
              <span>Python & TensorFlow Expert</span>
            </div>
            <div className="flex items-center gap-3 text-slate-300">
              <Database className="text-sky-500" size={20} />
              <span>Data Analysis & Visualization</span>
            </div>
            <div className="flex items-center gap-3 text-slate-300">
              <Network className="text-sky-500" size={20} />
              <span>Neural Network Architecture Design</span>
            </div>
          </div>

          <div className="space-y-3 pt-2">
            <div className="flex items-center gap-3 text-slate-300">
              <Mail className="text-sky-500" size={20} />
              <a href="mailto:work.sibsankar@gmail.com" className="text-slate-300 hover:text-sky-500 transition-colors">
                work.sibsankar@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3 text-slate-300">
              <Phone className="text-sky-500" size={20} />
              <a href="tel:+918144258284" className="text-slate-300 hover:text-sky-500 transition-colors">
                +91 81442 58284
              </a>
            </div>
          </div>

          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-sky-500 to-sky-400 text-white rounded-lg hover:translate-y-[-5px] hover:shadow-[0_0_20px_rgba(14,165,233,0.2)] transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <FileDown size={20} />
            Download Resume
          </motion.a>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-sky-500 to-sky-400 rounded-lg blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
          <div className="relative rounded-lg overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800"
              alt="AI Development Workspace"
              className="w-full object-cover aspect-[4/3]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};