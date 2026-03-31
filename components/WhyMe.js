'use client';

import { motion } from 'framer-motion';
import SectionHeading from './ui/SectionHeading';
import Reveal from './ui/Reveal';

const differentiators = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: '48-Hour Turnaround',
    description: 'Most projects delivered in 1–2 days. Not weeks, not months. You get a production-ready site while your competitors are still reviewing proposals.',
    accent: 'text-amber-400 bg-amber-400/10',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    title: 'Modern Tech Stack',
    description: 'Next.js & React — not bloated WordPress. Your site loads in under a second, ranks higher on Google, and won\'t break when you update a plugin.',
    accent: 'text-brand-400 bg-brand-400/10',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
      </svg>
    ),
    title: 'You Control Your Content',
    description: 'Every client gets a CMS dashboard. Update your text, images, and pages yourself — no developer needed for day-to-day changes.',
    accent: 'text-emerald-400 bg-emerald-400/10',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    title: 'SEO & Speed Built In',
    description: 'Google PageSpeed scores 90+. Proper meta tags, schema markup, and semantic HTML. Your site ranks higher and loads faster than your competition.',
    accent: 'text-rose-400 bg-rose-400/10',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: 'Ongoing Support',
    description: 'I don\'t disappear after launch. Monthly support plans available for updates, hosting management, and growth. Your site stays fresh and running.',
    accent: 'text-violet-400 bg-violet-400/10',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
    title: 'Affordable & Transparent',
    description: 'Clear pricing, no hidden fees. You know exactly what you\'re getting and what it costs before we start. Premium quality at fair prices.',
    accent: 'text-cyan-400 bg-cyan-400/10',
  },
];

export default function WhyMe() {
  return (
    <section className="section-padding relative">
      <div className="container-custom">
        <SectionHeading
          label="Why Me"
          title="What Makes Me Different"
          description="There are thousands of developers. Here's why my clients pick me — and come back."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {differentiators.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <div className="group h-full p-6 lg:p-8 rounded-2xl border border-white/[0.06] bg-surface-900/30 hover:bg-surface-800/40 transition-all duration-400 hover:-translate-y-0.5">
                <div className={`w-11 h-11 rounded-xl ${item.accent} flex items-center justify-center mb-5`}>
                  {item.icon}
                </div>
                <h3
                  className="text-lg font-bold text-white mb-2"
                  style={{ fontFamily: "'Cabinet Grotesk', system-ui, sans-serif" }}
                >
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
