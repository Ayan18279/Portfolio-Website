import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, MapPin, ChevronRight } from 'lucide-react';

const TIMELINE_DATA = [
  {
    type: 'work',
    role: 'Intern - Full Stack MERN Developer',
    company: 'Thiranex',
    location: 'Remote',
    period: 'May 2026 – Aug 2026',
    description: 'Developed and maintained full-stack web applications using MongoDB, Express.js, React.js, and Node.js (MERN stack).',
    achievements: [
      'Built responsive and reusable React.js components and integrated frontend interfaces with RESTful backend APIs.',
      'Debugged application issues, optimized functionality, and collaborated on development tasks using Git/GitHub.',
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'MERN Stack', 'REST APIs', 'Git', 'GitHub'],
  },
  {
    type: 'education',
    role: 'Computer Science and Engineering',
    company: 'SHRI SIDDHI VINAYAK INSTITUTE OF TECHNOLOGY',
    location: 'Dohna, Bareilly, U.P',
    period: '2023 – Present',
    description: 'Pursuing Bachelor of Technology in Computer Science and Engineering with a focus on Full-Stack Development, AI agentic systems, and cloud computing.',
    achievements: [
      'Hands-on expertise in MERN stack, LangChain, LangGraph multi-agent workflows, and microservices.',
      'Active developer in hackathons and open-source project leadership.',
    ],
    tech: ['Computer Science', 'MERN Stack', 'Data Structures', 'AI & LLMs', 'LangGraph', 'Next.js'],
  },
  {
    type: 'education',
    role: 'Senior Secondary (Class XII)',
    company: 'B.L INTERNATIONAL SCHOOL',
    location: 'C.B Ganj, Bareilly, U.P',
    period: '2022 – 2023',
    description: 'Completed Senior Secondary education with focus on Science, Mathematics, and Computer Applications.',
    achievements: [
      'Strong academic foundation in Mathematics, Logical Reasoning, and Programming fundamentals.',
    ],
    tech: ['Mathematics', 'Computer Science', 'Physics'],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 md:py-28 bg-slate-100/50 dark:bg-slate-900/40 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-wider font-semibold text-brand-600 dark:text-brand-400 font-mono">
            // Career Milestone Timeline
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Experience & Education
          </h2>
          <div className="w-16 h-1 bg-brand-500 mx-auto rounded-full" />
        </div>

        {/* Vertical Timeline Container */}
        <div className="relative border-l-2 border-slate-300 dark:border-slate-800 ml-4 sm:ml-32 space-y-12">
          {TIMELINE_DATA.map((item, index) => {
            const Icon = item.type === 'work' ? Briefcase : GraduationCap;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 sm:pl-10"
              >
                {/* Timeline Icon Node */}
                <div className="absolute -left-[17px] top-1.5 p-2 rounded-full bg-slate-50 dark:bg-slate-900 border-2 border-brand-500 text-brand-600 dark:text-brand-400 shadow-md">
                  <Icon className="w-4 h-4" />
                </div>

                {/* Left Period Tag for Large Screens */}
                <div className="hidden sm:block absolute -left-36 top-2 text-right w-28">
                  <span className="inline-flex items-center text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-brand-500/10 text-brand-700 dark:text-brand-300 border border-brand-500/20">
                    <Calendar className="w-3 h-3 mr-1" />
                    {item.period}
                  </span>
                </div>

                {/* Main Card Content */}
                <div className="glass-panel p-6 rounded-2xl space-y-4 hover:border-brand-500/40 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        {item.role}
                      </h3>
                      <div className="flex items-center space-x-2 text-sm font-semibold text-brand-600 dark:text-brand-400 mt-0.5">
                        <span>{item.company}</span>
                        <span>•</span>
                        <span className="text-slate-500 dark:text-slate-400 text-xs font-normal flex items-center">
                          <MapPin className="w-3 h-3 mr-1" />
                          {item.location}
                        </span>
                      </div>
                    </div>

                    {/* Mobile Period Tag */}
                    <span className="sm:hidden inline-flex items-center text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-brand-500/10 text-brand-700 dark:text-brand-300 w-fit">
                      <Calendar className="w-3 h-3 mr-1" />
                      {item.period}
                    </span>
                  </div>

                  <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Bullet Achievements */}
                  {item.achievements && (
                    <ul className="space-y-1.5">
                      {item.achievements.map((ach, aIdx) => (
                        <li key={aIdx} className="flex items-start text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                          <ChevronRight className="w-4 h-4 text-brand-500 shrink-0 mt-0.5 mr-1" />
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {item.tech.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-slate-200/70 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Experience;
