'use client';

import { motion } from 'framer-motion';

export default function SectionHeading({ label, title, description, align = 'center' }) {
  const alignClass = align === 'center' ? 'text-center' : 'text-left';

  return (
    <motion.div
      className={`mb-16 md:mb-20 ${alignClass}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
    >
      {label && (
        <span
          className="inline-block mb-4 px-4 py-1.5 text-xs font-medium tracking-widest uppercase rounded-full bg-brand-500/10 text-brand-400 border border-brand-500/20"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          {label}
        </span>
      )}
      <h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
        style={{ fontFamily: "'Cabinet Grotesk', system-ui, sans-serif" }}
      >
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
