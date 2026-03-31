'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './ui/Button';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#portfolio' },
  { label: 'About', href: '#about' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-surface-950/80 backdrop-blur-xl border-b border-white/[0.06] shadow-2xl shadow-black/20'
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      >
        <div className="container-custom flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#hero"
            className="relative z-10 flex items-center gap-2 group"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-emerald-500 flex items-center justify-center text-white font-bold text-sm"
              style={{ fontFamily: "'Cabinet Grotesk', system-ui, sans-serif" }}
            >
              P
            </div>
            <span
              className="text-lg font-bold text-white tracking-tight"
              style={{ fontFamily: "'Cabinet Grotesk', system-ui, sans-serif" }}
            >
              Powers Creative Co.
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/[0.04]"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button href="#contact" size="sm">
              Let&apos;s Talk
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="relative z-10 md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <motion.span
              className="block w-5 h-0.5 bg-white rounded-full"
              animate={mobileOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block w-5 h-0.5 bg-white rounded-full"
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.1 }}
            />
            <motion.span
              className="block w-5 h-0.5 bg-white rounded-full"
              animate={mobileOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-surface-950/98 backdrop-blur-2xl flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col items-center gap-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="text-2xl font-medium text-gray-200 hover:text-white transition-colors"
                  style={{ fontFamily: "'Cabinet Grotesk', system-ui, sans-serif" }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.3 }}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.08, duration: 0.3 }}
              >
                <Button href="#contact" size="lg" onClick={() => setMobileOpen(false)}>
                  Let&apos;s Talk
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
