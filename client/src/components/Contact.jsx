import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { sendContactMessage } from '../services/api';
import { 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle, 
  AlertCircle, 
  Loader2, 
  MessageSquare, 
  Clock, 
  Phone, 
  Github, 
  Linkedin, 
  ExternalLink,
  MessageCircle
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: null, message: '', mailtoUrl: null });

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus({ type: null, message: '', mailtoUrl: null });

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await sendContactMessage(formData);
      setSubmitStatus({
        type: 'success',
        message: response.message || 'Thank you for your message! I will get back to you shortly.',
        mailtoUrl: null,
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    } catch (err) {
      console.warn('Contact API route unavailable or returned error:', err);
      
      const emailSubject = encodeURIComponent(formData.subject || `Portfolio Inquiry from ${formData.name}`);
      const emailBody = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      const mailtoUrl = `mailto:ayanansari102938@gmail.com?subject=${emailSubject}&body=${emailBody}`;

      setSubmitStatus({
        type: 'error',
        message: 'Unable to reach backend API. You can send your message directly via your email client using the link below.',
        mailtoUrl: mailtoUrl,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-wider font-semibold text-brand-600 dark:text-brand-400 font-mono flex items-center justify-center">
            <MessageSquare className="w-4 h-4 mr-1.5" />
            <span>// Get In Touch</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Let's Build Something Together
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            Have a project in mind, a full-time role opportunity, or just want to connect? Send a message below or reach out directly—I'd love to hear from you!
          </p>
          <div className="w-16 h-1 bg-brand-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Contact Information Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="glass-panel p-8 rounded-2xl space-y-6 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Contact Details
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                  I am currently open for full-stack developer positions, AI engineering opportunities, contract engagements, and open-source collaborations.
                </p>
              </div>

              <div className="space-y-4 pt-2">
                {/* Email Card */}
                <div className="flex items-center space-x-4 p-3.5 rounded-xl bg-slate-100/80 dark:bg-slate-800/60 transition-all hover:bg-slate-200/80 dark:hover:bg-slate-800">
                  <div className="p-3 rounded-lg bg-brand-500/10 text-brand-600 dark:text-brand-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-medium block">Direct Email</span>
                    <a 
                      href="mailto:ayanansari102938@gmail.com" 
                      className="text-sm font-semibold text-slate-900 dark:text-slate-200 hover:text-brand-500 dark:hover:text-brand-400 truncate block transition-colors"
                    >
                      ayanansari102938@gmail.com
                    </a>
                  </div>
                </div>

                {/* Location Card */}
                <div className="flex items-center space-x-4 p-3.5 rounded-xl bg-slate-100/80 dark:bg-slate-800/60">
                  <div className="p-3 rounded-lg bg-brand-500/10 text-brand-600 dark:text-brand-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-medium block">Location</span>
                    <span className="text-sm font-semibold text-slate-900 dark:text-slate-200">
                      Bareilly, Uttar Pradesh, India
                    </span>
                  </div>
                </div>

                {/* Phone Card */}
                <div className="flex items-center space-x-4 p-3.5 rounded-xl bg-slate-100/80 dark:bg-slate-800/60 transition-all hover:bg-slate-200/80 dark:hover:bg-slate-800">
                  <div className="p-3 rounded-lg bg-brand-500/10 text-brand-600 dark:text-brand-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-medium block">Phone / Mobile</span>
                    <a 
                      href="tel:+916395087487" 
                      className="text-sm font-semibold text-slate-900 dark:text-slate-200 hover:text-brand-500 dark:hover:text-brand-400 transition-colors"
                    >
                      +91 6395087487
                    </a>
                  </div>
                </div>

                {/* Response Time Card */}
                <div className="flex items-center space-x-4 p-3.5 rounded-xl bg-slate-100/80 dark:bg-slate-800/60">
                  <div className="p-3 rounded-lg bg-brand-500/10 text-brand-600 dark:text-brand-400 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-medium block">Response Time</span>
                    <span className="text-sm font-semibold text-slate-900 dark:text-slate-200">
                      Within 24 Hours
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct Quick Outreach */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold block mb-3 uppercase tracking-wider">
                  Quick Connect
                </span>
                <div className="flex items-center space-x-3">
                  <a
                    href="https://github.com/Ayan18279"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-brand-500 hover:text-white dark:hover:bg-brand-500 transition-all flex items-center justify-center"
                    title="GitHub Profile"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-brand-500 hover:text-white dark:hover:bg-brand-500 transition-all flex items-center justify-center"
                    title="LinkedIn Profile"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="https://wa.me/916395087487"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-600 hover:text-white dark:hover:bg-emerald-600 dark:hover:text-white transition-all flex items-center justify-center"
                    title="WhatsApp Message"
                  >
                    <MessageCircle className="w-5 h-5" />
                  </a>
                  <a
                    href="mailto:ayanansari102938@gmail.com"
                    className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-brand-500 hover:text-white dark:hover:bg-brand-500 transition-all flex items-center justify-center"
                    title="Send Direct Mail"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Interactive Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 glass-panel p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              
              {/* Alert Status Banners */}
              {submitStatus.type === 'success' && (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 text-sm flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block">Message Sent!</span>
                    <span>{submitStatus.message}</span>
                  </div>
                </div>
              )}

              {submitStatus.type === 'error' && (
                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-800 dark:text-amber-300 text-sm flex flex-col space-y-3">
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-amber-600 dark:text-amber-400" />
                    <span>{submitStatus.message}</span>
                  </div>
                  {submitStatus.mailtoUrl && (
                    <a
                      href={submitStatus.mailtoUrl}
                      className="inline-flex items-center space-x-2 self-start px-4 py-2 rounded-lg bg-amber-600 hover:bg-amber-500 text-white font-medium text-xs transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Open Email App with Prepared Message</span>
                    </a>
                  )}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name Field */}
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Jane Doe"
                    className={`w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-slate-900 dark:text-white border ${
                      errors.name ? 'border-red-500' : 'border-slate-300 dark:border-slate-700'
                    } focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all text-sm`}
                  />
                  {errors.name && (
                    <p className="text-xs text-red-500 mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jane@example.com"
                    className={`w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-slate-900 dark:text-white border ${
                      errors.email ? 'border-red-500' : 'border-slate-300 dark:border-slate-700'
                    } focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all text-sm`}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-500 mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Subject Field */}
              <div className="space-y-2">
                <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Collaboration Inquiry"
                  className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all text-sm"
                />
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hi Mohd Ayan, I'd like to discuss a project..."
                  className={`w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-slate-900 dark:text-white border ${
                    errors.message ? 'border-red-500' : 'border-slate-300 dark:border-slate-700'
                  } focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all text-sm resize-y`}
                />
                {errors.message && (
                  <p className="text-xs text-red-500 mt-1">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center space-x-2 py-4 px-6 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold shadow-lg shadow-brand-500/25 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
