import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Server, Wrench, CheckCircle2, Cpu, Globe, Award, Users } from 'lucide-react';

const SKILL_CATEGORIES = [
  {
    id: 'frontend',
    title: 'Frontend',
    icon: Code,
    color: 'from-cyan-500 to-blue-500',
    skills: [
      { name: 'React.js', level: '95%', icon: '⚛️' },
      { name: 'Next.js', level: '90%', icon: '▲' },
      { name: 'JavaScript (ES6+)', level: '95%', icon: '⚡' },
      { name: 'Tailwind CSS', level: '92%', icon: '🎨' },
      { name: 'HTML5 & CSS3', level: '95%', icon: '🌐' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend & AI',
    icon: Server,
    color: 'from-emerald-500 to-teal-500',
    skills: [
      { name: 'Node.js', level: '92%', icon: '🟢' },
      { name: 'Express.js', level: '95%', icon: '🚂' },
      { name: 'LangGraph & LangChain', level: '92%', icon: '🦜' },
      { name: 'RAG Pipelines', level: '90%', icon: '🔍' },
      { name: 'REST APIs & Microservices', level: '92%', icon: '🔌' },
      { name: 'Java', level: '85%', icon: '☕' },
    ],
  },
  {
    id: 'database',
    title: 'Database & Vectors',
    icon: Database,
    color: 'from-green-500 to-emerald-600',
    skills: [
      { name: 'MongoDB', level: '92%', icon: '🍃' },
      { name: 'PostgreSQL', level: '85%', icon: '🐘' },
      { name: 'MySQL', level: '85%', icon: '🐬' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Ecosystem',
    icon: Wrench,
    color: 'from-purple-500 to-indigo-500',
    skills: [
      { name: 'Git & GitHub', level: '95%', icon: '🐙' },
      { name: 'Postman', level: '92%', icon: '🚀' },
      { name: 'Docker', level: '85%', icon: '🐳' },
    ],
  },
];

const CERTIFICATIONS = [
  { title: 'Protex Hackathon', year: '2026', icon: '🏆' },
  { title: 'Bharatiya Antariksh Hackathon | ISRO', year: '2026', icon: '🚀' },
  { title: 'DP-203: Data Engineering on Microsoft Azure', year: 'Certified', icon: '☁️' },
];

const INTERPERSONAL_SKILLS = [
  'Strong Communication and Leadership Skills',
  'Effective Teamwork and Team Collaboration',
  'Critical Thinking and Problem-Solving Abilities',
];

const About = () => {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <section id="about" className="py-20 md:py-28 bg-slate-100/50 dark:bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-wider font-semibold text-brand-600 dark:text-brand-400 font-mono">
            // Background & Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            About Me & Technical Skills
          </h2>
          <div className="w-16 h-1 bg-brand-500 mx-auto rounded-full" />
        </div>

        {/* Bio Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 glass-panel p-8 rounded-2xl flex flex-col justify-between"
          >
            <div className="space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center">
                <Cpu className="w-6 h-6 mr-2 text-brand-500" />
                Full-Stack & AI Developer
              </h3>
              <p>
                I am a Full-Stack and AI Developer with hands-on experience in <span className="font-semibold text-slate-900 dark:text-slate-100">MERN stack, Node.js, React.js, MongoDB, LangChain, LangGraph, RAG pipelines, REST APIs, and microservices</span>.
              </p>
              <p>
                Skilled in developing scalable web applications and integrating LLM-powered workflows with modern backend architectures. I bring strong problem-solving abilities and a deep passion for building production-ready software.
              </p>
            </div>

            {/* Quick Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-200 dark:border-slate-800 mt-6">
              <div className="space-y-1">
                <span className="text-2xl font-extrabold text-brand-600 dark:text-brand-400">3+</span>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Major AI Projects</p>
              </div>
              <div className="space-y-1">
                <span className="text-2xl font-extrabold text-brand-600 dark:text-brand-400">Multi-Agent</span>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">LangGraph & RAG Architect</p>
              </div>
              <div className="space-y-1 col-span-2 sm:col-span-1">
                <span className="text-2xl font-extrabold text-brand-600 dark:text-brand-400">100%</span>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Production Standards</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 glass-panel p-8 rounded-2xl flex flex-col justify-between bg-gradient-to-br from-brand-500/5 to-transparent"
          >
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
              <Globe className="w-5 h-5 mr-2 text-brand-500" />
              What I Bring To The Table
            </h3>
            <ul className="space-y-3">
              {[
                'Full-stack MERN & Next.js web application development',
                'Stateful multi-agent workflows with LangGraph & Redis',
                'Enterprise document RAG & vector retrieval (Qdrant, OpenSearch)',
                '4-service microservices architecture & AWS S3 integration',
                'RESTful API engineering, JWT security, & input validation',
                'Containerization with Docker & MITRE ATT&CK framework mapping',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start space-x-3 text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Skills Grid Section */}
        <div className="space-y-8 mb-16">
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${activeTab === 'all'
                  ? 'bg-brand-600 text-white shadow-md'
                  : 'glass-card text-slate-700 dark:text-slate-300 hover:text-brand-500'
                }`}
            >
              All Skills
            </button>
            {SKILL_CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-medium transition-all ${isActive
                      ? 'bg-brand-600 text-white shadow-md'
                      : 'glass-card text-slate-700 dark:text-slate-300 hover:text-brand-500'
                    }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{cat.title}</span>
                </button>
              );
            })}
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SKILL_CATEGORIES.filter(cat => activeTab === 'all' || activeTab === cat.id).map((category) => {
              const CategoryIcon = category.icon;
              return (
                <motion.div
                  key={category.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="glass-panel p-6 rounded-2xl space-y-4 hover:border-brand-500/40 transition-all duration-300"
                >
                  <div className="flex items-center space-x-3 pb-3 border-b border-slate-200 dark:border-slate-800">
                    <div className={`p-2.5 rounded-xl bg-gradient-to-r ${category.color} text-white shadow-md`}>
                      <CategoryIcon className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-lg">
                      {category.title}
                    </h4>
                  </div>

                  <div className="space-y-3">
                    {category.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="space-y-1">
                        <div className="flex justify-between items-center text-xs font-medium text-slate-700 dark:text-slate-300">
                          <span className="flex items-center space-x-1.5">
                            <span>{skill.icon}</span>
                            <span>{skill.name}</span>
                          </span>
                          <span className="text-slate-500 font-mono">{skill.level}</span>
                        </div>
                        <div className="w-full bg-slate-200 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: skill.level }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: sIdx * 0.05 }}
                            className="bg-brand-500 h-full rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Certifications & Inter-Personal Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 glass-panel p-6 sm:p-8 rounded-2xl space-y-4 border border-slate-200 dark:border-slate-800"
          >
            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center">
              <Award className="w-5 h-5 mr-2 text-brand-500" />
              Certifications & Hackathons
            </h3>
            <div className="space-y-3">
              {CERTIFICATIONS.map((cert, idx) => (
                <div key={idx} className="flex items-center justify-between p-3.5 rounded-xl bg-slate-100/80 dark:bg-slate-800/60 border border-slate-200/50 dark:border-slate-700/50">
                  <div className="flex items-center space-x-3">
                    <span className="text-xl">{cert.icon}</span>
                    <span className="text-sm font-semibold text-slate-900 dark:text-slate-200">{cert.title}</span>
                  </div>
                  <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-brand-500/10 text-brand-700 dark:text-brand-300 font-bold">
                    {cert.year}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Inter-Personal Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-6 glass-panel p-6 sm:p-8 rounded-2xl space-y-4 border border-slate-200 dark:border-slate-800"
          >
            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center">
              <Users className="w-5 h-5 mr-2 text-brand-500" />
              Inter-Personal Skills
            </h3>
            <div className="space-y-3">
              {INTERPERSONAL_SKILLS.map((skill, idx) => (
                <div key={idx} className="flex items-center space-x-3 p-3.5 rounded-xl bg-slate-100/80 dark:bg-slate-800/60 border border-slate-200/50 dark:border-slate-700/50">
                  <CheckCircle2 className="w-5 h-5 text-brand-500 shrink-0" />
                  <span className="text-sm font-semibold text-slate-900 dark:text-slate-200">{skill}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default About;
