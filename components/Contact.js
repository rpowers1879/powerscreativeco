'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './ui/SectionHeading';
import Reveal from './ui/Reveal';

const serviceOptions = [
  { value: '', label: 'Select a service...' },
  { value: 'basic', label: 'Basic — Landing Page ($100+)' },
  { value: 'business', label: 'Business — Multi-Page Website ($450+)' },
  { value: 'premium', label: 'Premium — Web Application ($800+)' },
  { value: 'other', label: 'Something else / Not sure' },
];

const budgetOptions = [
  { value: '', label: 'Select your budget...' },
  { value: 'under-200', label: 'Under $200' },
  { value: '200-500', label: '$200 – $500' },
  { value: '500-1000', label: '$500 – $1,000' },
  { value: '1000-plus', label: '$1,000+' },
  { value: 'not-sure', label: 'Not sure yet' },
];

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    business: '',
    service: '',
    budget: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      });

      if (res.ok) {
        setStatus('success');
        setFormState({ name: '', email: '', business: '', service: '', budget: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const inputClasses =
    'w-full px-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/40 focus:border-brand-500/40 transition-all duration-200';

  const labelClasses = 'block text-sm font-medium text-gray-300 mb-2';

  return (
    <section id="contact" className="section-padding relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-500/[0.03] via-transparent to-transparent pointer-events-none" />

      <div className="container-custom relative z-10">
        <SectionHeading
          label="Contact"
          title="Let's Build Something Great"
          description="Got a project in mind? I usually respond within a few hours."
        />

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Form — takes 3 columns */}
          <Reveal className="lg:col-span-3">
            <div className="rounded-2xl border border-white/[0.06] bg-surface-900/40 p-8 md:p-10">
              {status === 'success' ? (
                <motion.div
                  className="text-center py-12"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-emerald-500/10 flex items-center justify-center">
                    <svg className="w-8 h-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3
                    className="text-2xl font-bold text-white mb-2"
                    style={{ fontFamily: "'Cabinet Grotesk', system-ui, sans-serif" }}
                  >
                    Message sent!
                  </h3>
                  <p className="text-gray-400">
                    Thanks for reaching out. I&apos;ll get back to you within a few hours.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 text-sm text-brand-400 hover:text-brand-300 underline underline-offset-4"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className={labelClasses}>
                        Name <span className="text-brand-400">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className={inputClasses}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className={labelClasses}>
                        Email <span className="text-brand-400">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        className={inputClasses}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="business" className={labelClasses}>
                      Business Name
                    </label>
                    <input
                      id="business"
                      name="business"
                      type="text"
                      value={formState.business}
                      onChange={handleChange}
                      placeholder="Your company or brand name"
                      className={inputClasses}
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="service" className={labelClasses}>
                        Service Interested In
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formState.service}
                        onChange={handleChange}
                        className={`${inputClasses} appearance-none cursor-pointer`}
                        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E\")", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', backgroundSize: '16px' }}
                      >
                        {serviceOptions.map((opt) => (
                          <option key={opt.value} value={opt.value} className="bg-surface-900 text-white">
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="budget" className={labelClasses}>
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formState.budget}
                        onChange={handleChange}
                        className={`${inputClasses} appearance-none cursor-pointer`}
                        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E\")", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', backgroundSize: '16px' }}
                      >
                        {budgetOptions.map((opt) => (
                          <option key={opt.value} value={opt.value} className="bg-surface-900 text-white">
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className={labelClasses}>
                      Project Description <span className="text-brand-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project — what does your business do, what do you need, and any deadlines?"
                      className={`${inputClasses} resize-none`}
                    />
                  </div>

                  {status === 'error' && (
                    <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-sm">
                      Something went wrong. Please try again or email me directly at rpowers1879@outlook.com.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full py-4 px-6 rounded-xl bg-brand-500 text-white font-semibold hover:bg-brand-400 transition-all duration-300 shadow-lg shadow-brand-500/20 hover:shadow-brand-400/30 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {status === 'sending' ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-25" />
                          <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" className="opacity-75" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </Reveal>

          {/* Sidebar info — takes 2 columns */}
          <Reveal className="lg:col-span-2" delay={0.15}>
            <div className="space-y-8">
              {/* Direct contact */}
              <div className="rounded-2xl border border-white/[0.06] bg-surface-900/40 p-8">
                <h3
                  className="text-lg font-bold text-white mb-5"
                  style={{ fontFamily: "'Cabinet Grotesk', system-ui, sans-serif" }}
                >
                  Prefer to reach out directly?
                </h3>

                <div className="space-y-4">
                  <a
                    href="mailto:rpowers1879@outlook.com"
                    className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center group-hover:bg-brand-500/10 group-hover:border-brand-500/20 transition-colors">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    rpowers1879@outlook.com
                  </a>
                </div>
              </div>

              {/* Platforms */}
              <div className="rounded-2xl border border-white/[0.06] bg-surface-900/40 p-8">
                <h3
                  className="text-lg font-bold text-white mb-5"
                  style={{ fontFamily: "'Cabinet Grotesk', system-ui, sans-serif" }}
                >
                  Find me on
                </h3>

                <div className="space-y-3">
                  {[
                    {
                      name: 'Fiverr',
                      url: '#',
                      icon: (
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M23.004 15.588a.995.995 0 1 0 .002-1.99.995.995 0 0 0-.002 1.99zm-.996-3.705h-.85c-.546 0-.84.41-.84 1.092v2.466h-1.61v-3.558h-.684c-.547 0-.84.41-.84 1.092v2.466h-1.61V11.14h1.61v.74a1.47 1.47 0 0 1 1.376-.853c.652 0 1.14.312 1.37.853.308-.503.826-.853 1.468-.853.994 0 1.61.682 1.61 1.74v2.916h-1.61zm-7.424 0h-.85c-.547 0-.84.41-.84 1.092v2.466h-1.61V11.14h1.61v.74a1.47 1.47 0 0 1 1.375-.853c.653 0 1.14.312 1.37.853.309-.503.827-.853 1.47-.853.993 0 1.609.682 1.609 1.74v2.916h-1.61v-2.466c0-.682-.293-1.092-.84-1.092h-.85c-.546 0-.84.41-.84 1.092v2.466h-1.61zm-5.348 1.622c0-.653.466-1.13 1.078-1.13.613 0 1.079.477 1.079 1.13 0 .652-.466 1.127-1.079 1.127-.612 0-1.078-.475-1.078-1.127zm3.727 0c0-1.503-1.137-2.61-2.65-2.61-1.51 0-2.648 1.107-2.648 2.61 0 1.502 1.137 2.608 2.649 2.608 1.512 0 2.649-1.106 2.649-2.608zm-8.464 2.755c-1.626 0-2.73-1.065-2.73-2.608v-4.291h1.626v1.684h1.398v1.37h-1.398v1.237c0 .7.387 1.24 1.104 1.24h.294v1.368z" />
                        </svg>
                      ),
                    },
                    {
                      name: 'Upwork',
                      url: '#',
                      icon: (
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703 0 1.49-1.212 2.702-2.704 2.702zm0-7.94c-2.832 0-4.872 1.85-5.725 4.346C11.587 7.568 10.507 5.59 9.755 3.95H6.488v7.672c0 1.404-1.143 2.55-2.55 2.55-1.404 0-2.55-1.146-2.55-2.55V3.95H0v7.672c0 2.55 2.078 4.631 4.631 4.631 2.553 0 4.631-2.078 4.631-4.631V9.767c.77 1.604 1.718 3.24 2.838 4.612l-2.41 11.305h1.617l1.744-8.19c1.18.907 2.59 1.45 4.147 1.45 2.953 0 5.363-2.41 5.363-5.363 0-2.953-2.41-5.363-5.363-5.363z" />
                        </svg>
                      ),
                    },
                    {
                      name: 'GitHub',
                      url: '#',
                      icon: (
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      ),
                    },
                    {
                      name: 'LinkedIn',
                      url: '#',
                      icon: (
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      ),
                    },
                  ].map((platform) => (
                    <a
                      key={platform.name}
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-xl text-sm text-gray-400 hover:text-white hover:bg-white/[0.04] transition-all group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center group-hover:bg-brand-500/10 group-hover:border-brand-500/20 transition-colors">
                        {platform.icon}
                      </div>
                      {platform.name}
                      <svg className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>

              {/* Response time note */}
              <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.04] p-6">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-emerald-400">Fast response</p>
                    <p className="text-xs text-gray-400 mt-1">
                      I typically respond within a few hours. Most projects can kick off the same day.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
