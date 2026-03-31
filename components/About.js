'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Reveal from './ui/Reveal';
import Button from './ui/Button';

const stats = [
  { value: '7+', label: 'Projects Delivered' },
  { value: '48hr', label: 'Avg. Delivery' },
  { value: '90+', label: 'PageSpeed Score' },
  { value: '100%', label: 'Client Satisfaction' },
];

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Photo side */}
          <Reveal direction="left">
            <div className="relative">
              {/* Decorative border */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-brand-500/20 via-transparent to-emerald-500/20 blur-sm opacity-50" />
              <div className="relative rounded-2xl overflow-hidden border border-white/[0.08]">
                <Image
                  src="/images/headshot.png"
                  alt="Russ Powers — Powers Creative Co."
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                />
                {/* Overlay gradient at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-surface-950/60 via-transparent to-transparent" />
              </div>

              {/* Floating tech badge */}
              <motion.div
                className="absolute -bottom-4 -right-4 lg:-right-8 glass rounded-xl px-5 py-3 shadow-2xl"
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-500/20 flex items-center justify-center">
                    <svg className="w-4 h-4 text-brand-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Stack</p>
                    <p className="text-sm font-semibold text-white">Next.js · Tailwind · Sanity</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </Reveal>

          {/* Bio side */}
          <Reveal direction="right">
            <div>
              <span
                className="inline-block mb-4 px-4 py-1.5 text-xs font-medium tracking-widest uppercase rounded-full bg-brand-500/10 text-brand-400 border border-brand-500/20"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                About Me
              </span>

              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6"
                style={{ fontFamily: "'Cabinet Grotesk', system-ui, sans-serif" }}
              >
                Hey, I&apos;m Russ.
              </h2>

              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  I&apos;m the founder of Powers Creative Co., where I build custom websites that
                  help business owners represent their brand and style exactly as they envision it.
                  My mission is simple: deliver world-class customer service and a website that
                  truly captures who you are.
                </p>
                <p>
                  I use <span className="text-white font-medium">Next.js</span>,{' '}
                  <span className="text-white font-medium">Tailwind CSS</span>, and{' '}
                  <span className="text-white font-medium">Sanity CMS</span> — the same tools
                  used by companies like Nike, Figma, and Twitch. No WordPress bloat. No page
                  builders. Just clean, fast code that Google loves.
                </p>
                <p>
                  Every client gets their own <span className="text-white font-medium">CMS dashboard</span> to
                  update text, images, and content — no developer needed for day-to-day changes.
                  I&apos;m here to partner with you, not disappear after launch. Your success is my success.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    className="text-center p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                  >
                    <p
                      className="text-2xl font-bold text-white"
                      style={{ fontFamily: "'Cabinet Grotesk', system-ui, sans-serif" }}
                    >
                      {stat.value}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8">
                <Button href="#contact" variant="primary" size="md">
                  Work With Me
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
