import React from 'react';
import { Github, Linkedin, Mail, ArrowUp, Code2 } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Tagline */}
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-lg bg-brand-500/10 text-brand-400">
              <Code2 className="w-6 h-6" />
            </div>
            <div>
              <span className="font-mono text-lg font-bold text-white tracking-tight">
                Ayan<span className="text-brand-400">.Dev</span>
              </span>
              <p className="text-xs text-slate-500">Full-Stack & AI Developer Portfolio</p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/Ayan18279"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-full bg-slate-800 hover:bg-brand-500 hover:text-white text-slate-300 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-full bg-slate-800 hover:bg-brand-500 hover:text-white text-slate-300 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:ayanansari102938@gmail.com"
              aria-label="Send Email"
              className="p-2.5 rounded-full bg-slate-800 hover:bg-brand-500 hover:text-white text-slate-300 transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright & Scroll Top */}
          <div className="flex items-center space-x-4">
            <p className="text-xs text-slate-500 text-center md:text-right">
              © {new Date().getFullYear()} Mohd Ayan. All rights reserved.
            </p>

            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="p-2.5 rounded-full bg-slate-800 hover:bg-brand-500 text-slate-300 hover:text-white transition-colors"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
