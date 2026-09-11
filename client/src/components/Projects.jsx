import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fetchProjects } from '../services/api';
import projectsData from '../data/projectsData';
import ProjectCard from './ProjectCard';
import { FolderGit2, Layers } from 'lucide-react';

const CATEGORIES = ['All', 'AI Platform', 'Cybersecurity & AI', 'Full Stack'];

const Projects = () => {
  const [projects, setProjects] = useState(projectsData);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const loadProjects = async () => {
    setLoading(true);
    try {
      const response = await fetchProjects();
      if (response && response.data && response.data.length > 0) {
        setProjects(response.data);
      } else {
        setProjects(projectsData);
      }
    } catch (err) {
      console.warn('Backend API unreachable, using local resume projects data:', err);
      setProjects(projectsData);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProjects();
  }, []);

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category?.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="text-xs uppercase tracking-wider font-semibold text-brand-600 dark:text-brand-400 font-mono flex items-center justify-center space-x-1">
            <FolderGit2 className="w-4 h-4 mr-1" />
            <span>// Featured Work</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Projects & Case Studies
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Live data pulled from MongoDB via the REST API (<code className="font-mono text-xs bg-slate-200 dark:bg-slate-800 px-1.5 py-0.5 rounded">GET /api/projects</code>).
          </p>
          <div className="w-16 h-1 bg-brand-500 mx-auto rounded-full" />
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-brand-600 text-white shadow-lg shadow-brand-500/20'
                  : 'glass-card text-slate-700 dark:text-slate-300 hover:text-brand-500'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Loading State Skeleton */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className="glass-panel rounded-2xl p-6 space-y-4 animate-pulse border border-slate-200 dark:border-slate-800"
              >
                <div className="aspect-video bg-slate-300 dark:bg-slate-800 rounded-xl" />
                <div className="h-6 bg-slate-300 dark:bg-slate-800 rounded w-3/4" />
                <div className="h-4 bg-slate-300 dark:bg-slate-800 rounded w-full" />
                <div className="h-4 bg-slate-300 dark:bg-slate-800 rounded w-5/6" />
                <div className="flex gap-2 pt-4">
                  <div className="h-8 bg-slate-300 dark:bg-slate-800 rounded w-16" />
                  <div className="h-8 bg-slate-300 dark:bg-slate-800 rounded w-16" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Projects Grid Display */}
        {!loading && (
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project) => (
                  <ProjectCard key={project._id || project.title} project={project} />
                ))
              ) : (
                <div className="col-span-full text-center py-12 glass-panel rounded-2xl">
                  <Layers className="w-10 h-10 text-slate-400 mx-auto mb-3" />
                  <p className="text-slate-600 dark:text-slate-400">No projects found in this category.</p>
                </div>
              )}
            </AnimatePresence>
          </motion.div>
        )}

      </div>
    </section>
  );
};

export default Projects;
