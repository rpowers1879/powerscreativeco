'use client';

import { motion } from 'framer-motion';
import SectionHeading from './ui/SectionHeading';
import Reveal from './ui/Reveal';

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'Tell me about your business, your goals, and what you need. I\'ll send a free proposal within hours — no obligation, no pressure.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
    accent: 'from-brand-500 to-brand-600',
  },
  {
    number: '02',
    title: 'Design & Build',
    description: 'I design and code your site using your content, branding, and business goals. You\'ll see progress in real time — no black box.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
    accent: 'from-emerald-500 to-emerald-600',
  },
  {
    number: '03',
    title: 'Review & Launch',
    description: 'You review the site, request any changes, and once you\'re happy — we go live. Deployed on Vercel for lightning-fast global performance.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
    accent: 'from-amber-500 to-amber-600',
  },
  {
    number: '04',
    title: 'Grow',
    description: 'Optional ongoing support to keep your site updated, optimized, and growing. Or take the keys and run it yourself — you own everything.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
    accent: 'from-rose-500 to-rose-600',
  },
];

export default function Process() {
  return (
    <section id="process" className="section-padding relative">
      <div className="container-custom">
        <SectionHeading
          label="Process"
          title="How It Works"
          description="Four simple steps from first message to live website. No complexity, no runaround."
        />

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line connector (desktop) */}
          <div className="hidden md:block absolute left-[39px] top-8 bottom-8 w-px bg-gradient-to-b from-brand-500/40 via-emerald-500/40 to-rose-500/40" />

          <div className="space-y-8 md:space-y-12">
            {steps.map((step, i) => (
              <Reveal key={step.number} delay={i * 0.12}>
                <div className="flex gap-6 md:gap-10 items-start">
                  {/* Step circle */}
                  <div className="flex-shrink-0">
                    <div
                      className={`relative w-[80px] h-[80px] rounded-2xl bg-gradient-to-br ${step.accent} flex items-center justify-center shadow-lg`}
                    >
                      <span className="text-white">{step.icon}</span>
                      {/* Step number badge */}
                      <span
                        className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-surface-950 border border-white/10 flex items-center justify-center text-[10px] font-bold text-gray-400"
                        style={{ fontFamily: "'JetBrains Mono', monospace" }}
                      >
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pt-2">
                    <h3
                      className="text-xl md:text-2xl font-bold text-white mb-2"
                      style={{ fontFamily: "'Cabinet Grotesk', system-ui, sans-serif" }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed max-w-lg">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
