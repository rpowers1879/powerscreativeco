'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from './ui/SectionHeading';
import Button from './ui/Button';

// Generate screenshot URL from live site URL
const getScreenshotUrl = (url) => {
  return `https://image.thum.io/get/width/800/crop/600/noanimate/${url}`;
};

// Portfolio projects
const fallbackProjects = [
  {
    _id: '1',
    title: "The Master's Tree Service LLC",
    description: 'Full business website for a North Georgia tree care and landscaping company. Services, gallery, testimonials, and lead generation.',
    category: 'business',
    tags: ['Next.js', 'Small Business', 'SEO'],
    liveUrl: 'https://masters-tree-service.vercel.app/',
    featured: true,
  },
  {
    _id: '2',
    title: 'Oak Harbor Finance',
    description: 'Life insurance and mortgage protection website for a Missouri-based independent broker. Eligibility funnel, educational content, and agent recruitment.',
    category: 'business',
    tags: ['Next.js', 'Finance', 'Lead Gen'],
    liveUrl: 'https://www.oakharborfinance.com/',
    featured: true,
  },
  {
    _id: '3',
    title: 'RoofProMatch',
    description: 'Multi-step lead generation app that matches homeowners with top local roofing contractors. Smart form logic and instant matching.',
    category: 'webapp',
    tags: ['Next.js', 'Lead Gen', 'Multi-Step Form'],
    liveUrl: 'https://roofpromatch.vercel.app/',
    featured: true,
  },
  {
    _id: '4',
    title: 'SolarProMatch',
    description: 'Lead generation platform connecting homeowners with verified solar installers. Qualification funnel with intelligent branching.',
    category: 'webapp',
    tags: ['Next.js', 'Lead Gen', 'Solar'],
    liveUrl: 'https://solarpromatch.vercel.app/',
    featured: true,
  },
  {
    _id: '5',
    title: 'Arete Wealth & Protection',
    description: 'Mortgage protection and wealth planning site with a clean eligibility screening funnel and educational resources.',
    category: 'business',
    tags: ['Next.js', 'Finance', 'Insurance'],
    liveUrl: 'https://arete-wealth-protection.vercel.app/',
    featured: true,
  },
  {
    _id: '6',
    title: 'Missouri Mortgage Protection',
    description: 'Focused eligibility screening tool for Missouri homeowners exploring mortgage protection insurance options.',
    category: 'webapp',
    tags: ['Next.js', 'Insurance', 'Funnel'],
    liveUrl: 'https://missouri-mortgage-protection.vercel.app/eligibility',
    featured: true,
  },
  {
    _id: '7',
    title: 'Life Insurance Guide',
    description: 'Comprehensive educational landing page breaking down life insurance options, designed to build trust and drive conversions.',
    category: 'landing',
    tags: ['Next.js', 'Content', 'Insurance'],
    liveUrl: 'https://www.oakharborfinance.com/life-insurance-guide',
    featured: true,
  },
];

const filters = [
  { label: 'All', value: 'all' },
  { label: 'Business Sites', value: 'business' },
  { label: 'Web Apps', value: 'webapp' },
  { label: 'Landing Pages', value: 'landing' },
];

// Color mapping for tags
const tagColors = {
  'Next.js': 'bg-brand-500/10 text-brand-400 border-brand-500/20',
  'Lead Gen': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  'Finance': 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  'Insurance': 'bg-violet-500/10 text-violet-400 border-violet-500/20',
  default: 'bg-white/5 text-gray-400 border-white/10',
};

export default function Portfolio() {
  const [filter, setFilter] = useState('all');
  const items = fallbackProjects;
  const filtered = filter === 'all' ? items : items.filter((p) => p.category === filter);

  return (
    <section id="portfolio" className="section-padding relative">
      <div className="container-custom">
        <SectionHeading
          label="Portfolio"
          title="Real Work. Real Results."
          description="Every project here is live, fast, and built with the same modern stack I'll use for yours."
        />

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                filter === f.value
                  ? 'bg-brand-500 text-white shadow-lg shadow-brand-500/20'
                  : 'bg-white/[0.04] text-gray-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.06]'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project._id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
              >
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block h-full rounded-2xl border border-white/[0.06] bg-surface-900/40 overflow-hidden hover:border-brand-500/30 transition-all duration-400 hover:-translate-y-1"
                >
                  {/* Thumbnail area */}
                  <div className="relative h-48 bg-gradient-to-br from-surface-800 to-surface-700 overflow-hidden">
                    {/* Live screenshot from project URL */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={getScreenshotUrl(project.liveUrl)}
                      alt={`Screenshot of ${project.title}`}
                      className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-400 flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-sm font-medium flex items-center gap-2 bg-brand-500 px-4 py-2 rounded-full">
                        View Live Site
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3
                      className="text-lg font-bold text-white mb-2 group-hover:text-brand-400 transition-colors"
                      style={{ fontFamily: "'Cabinet Grotesk', system-ui, sans-serif" }}
                    >
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags?.map((tag) => (
                        <span
                          key={tag}
                          className={`px-2.5 py-0.5 text-xs font-medium rounded-full border ${
                            tagColors[tag] || tagColors.default
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
