import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ArrowRight, Sparkles, Terminal } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Background Decorative Glowing Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-500/15 dark:bg-brand-500/20 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-slow" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-accent-500/10 dark:bg-accent-500/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Main Hero Text Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Status Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 dark:bg-brand-400/10 border border-brand-500/20 text-brand-700 dark:text-brand-300 text-xs sm:text-sm font-medium"
            >
              <span className="w-2 h-2 rounded-full bg-brand-500 animate-ping" />
              <Sparkles className="w-4 h-4 text-brand-500" />
              <span>Available for Full-Stack & AI Opportunities</span>
            </motion.div>

            {/* Name & Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-3"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-slate-900 dark:text-white">
                Hi, I'm <span className="text-gradient">Mohd Ayan</span>
              </h1>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-700 dark:text-slate-300 font-mono">
                Full-Stack & AI Developer
              </h2>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Full-Stack and AI Developer skilled in building scalable web applications with <span className="font-semibold text-slate-900 dark:text-slate-200">MERN Stack</span>, <span className="font-semibold text-slate-900 dark:text-slate-200">LangGraph & LangChain</span>, <span className="font-semibold text-slate-900 dark:text-slate-200">RAG Pipelines</span>, <span className="font-semibold text-slate-900 dark:text-slate-200">Next.js</span>, and modern microservices.
            </motion.p>

            {/* CTAs & Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
            >
              <a
                href="/Mohd_Ayan_Resume.pdf"
                download="Mohd_Ayan_Resume.pdf"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-500 dark:bg-brand-500 dark:hover:bg-brand-400 text-white font-semibold shadow-lg shadow-brand-500/25 transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <Download className="w-5 h-5 mr-2" />
                <span>Download Resume</span>
              </a>

              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl glass-card text-slate-800 dark:text-slate-200 font-medium hover:text-brand-600 dark:hover:text-brand-400 transition-all duration-200"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>

              {/* Social Icons */}
              <div className="flex items-center space-x-3 pt-4 sm:pt-0 sm:ml-4 border-t sm:border-t-0 sm:border-l border-slate-200 dark:border-slate-800 sm:pl-4">
                <a
                  href="https://github.com/Ayan18279"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-3 rounded-full text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-3 rounded-full text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:ayanansari102938@gmail.com"
                  aria-label="Send Email"
                  className="p-3 rounded-full text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Interactive Code Window Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="rounded-2xl glass-panel p-5 shadow-2xl relative overflow-hidden border border-slate-200 dark:border-slate-800">
              {/* Window Controls Header */}
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3 mb-4">
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                </div>
                <div className="flex items-center text-xs font-mono text-slate-500 dark:text-slate-400">
                  <Terminal className="w-3.5 h-3.5 mr-1.5" />
                  <span>developer-profile.js</span>
                </div>
              </div>

              {/* Code Snippet Display */}
              <pre className="font-mono text-xs sm:text-sm text-slate-800 dark:text-slate-200 overflow-x-auto leading-relaxed">
                <code>
                  <span className="text-purple-600 dark:text-purple-400">const</span> developer = &#123;{'\n'}
                  {'  '}name: <span className="text-emerald-600 dark:text-emerald-400">'Mohd Ayan'</span>,{'\n'}
                  {'  '}role: <span className="text-emerald-600 dark:text-emerald-400">'Full-Stack & AI Developer'</span>,{'\n'}
                  {'  '}stack: [
                  {'\n'}    <span className="text-cyan-600 dark:text-cyan-400">'MERN Stack'</span>,
                  {'\n'}    <span className="text-cyan-600 dark:text-cyan-400">'LangGraph & LangChain'</span>,
                  {'\n'}    <span className="text-cyan-600 dark:text-cyan-400">'RAG Pipelines'</span>,
                  {'\n'}    <span className="text-cyan-600 dark:text-cyan-400">'Next.js & FastAPI'</span>,
                  {'\n'}    <span className="text-cyan-600 dark:text-cyan-400">'Microservices'</span>
                  {'\n'}  ],{'\n'}
                  {'  '}passion: <span className="text-emerald-600 dark:text-emerald-400">'Building production-ready AI software'</span>,{'\n'}
                  {'  '}status: <span className="text-amber-600 dark:text-amber-400">'Available for hire'</span>{'\n'}
                  &#125;;{'\n\n'}
                  <span className="text-slate-400">// Execute deployment</span>{'\n'}
                  <span className="text-purple-600 dark:text-purple-400">await</span> developer.<span className="text-blue-600 dark:text-blue-400">buildFuture</span>();
                </code>
              </pre>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
