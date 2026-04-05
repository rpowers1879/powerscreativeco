'use client';

import Reveal from './ui/Reveal';

const quickLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'About', href: '#about' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  {
    name: 'Fiverr',
    url: 'https://www.fiverr.com/s/7YzjV0a',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.004 15.588a.995.995 0 1 0 .002-1.99.995.995 0 0 0-.002 1.99zm-.996-3.705h-.85c-.546 0-.84.41-.84 1.092v2.466h-1.61v-3.558h-.684c-.547 0-.84.41-.84 1.092v2.466h-1.61V11.14h1.61v.74a1.47 1.47 0 0 1 1.376-.853c.652 0 1.14.312 1.37.853.308-.503.826-.853 1.468-.853.994 0 1.61.682 1.61 1.74v2.916h-1.61zm-7.424 0h-.85c-.547 0-.84.41-.84 1.092v2.466h-1.61V11.14h1.61v.74a1.47 1.47 0 0 1 1.375-.853c.653 0 1.14.312 1.37.853.309-.503.827-.853 1.47-.853.993 0 1.609.682 1.609 1.74v2.916h-1.61v-2.466c0-.682-.293-1.092-.84-1.092h-.85c-.546 0-.84.41-.84 1.092v2.466h-1.61zm-5.348 1.622c0-.653.466-1.13 1.078-1.13.613 0 1.079.477 1.079 1.13 0 .652-.466 1.127-1.079 1.127-.612 0-1.078-.475-1.078-1.127zm3.727 0c0-1.503-1.137-2.61-2.65-2.61-1.51 0-2.648 1.107-2.648 2.61 0 1.502 1.137 2.608 2.649 2.608 1.512 0 2.649-1.106 2.649-2.608zm-8.464 2.755c-1.626 0-2.73-1.065-2.73-2.608v-4.291h1.626v1.684h1.398v1.37h-1.398v1.237c0 .7.387 1.24 1.104 1.24h.294v1.368z" />
      </svg>
    ),
  },
  {
    name: 'Upwork',
    url: 'https://www.upwork.com/freelancers/~01deaf3e989291cdef?mp_source=share',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703 0 1.49-1.212 2.702-2.704 2.702zm0-7.94c-2.832 0-4.872 1.85-5.725 4.346C11.587 7.568 10.507 5.59 9.755 3.95H6.488v7.672c0 1.404-1.143 2.55-2.55 2.55-1.404 0-2.55-1.146-2.55-2.55V3.95H0v7.672c0 2.55 2.078 4.631 4.631 4.631 2.553 0 4.631-2.078 4.631-4.631V9.767c.77 1.604 1.718 3.24 2.838 4.612l-2.41 11.305h1.617l1.744-8.19c1.18.907 2.59 1.45 4.147 1.45 2.953 0 5.363-2.41 5.363-5.363 0-2.953-2.41-5.363-5.363-5.363z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-surface-950">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
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
            </div>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              Custom websites that help business owners represent their brand and style.
              World-class customer service. Built with Next.js.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider"
              style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px' }}
            >
              Quick Links
            </h4>
            <nav className="space-y-2.5">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-gray-500 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider"
              style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px' }}
            >
              Connect
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/[0.08] hover:border-white/[0.12] transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <a
              href="mailto:russell@powerscreative.co"
              className="block mt-4 text-sm text-gray-500 hover:text-white transition-colors"
            >
              russell@powerscreative.co
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} Powers Creative Co. All rights reserved.
          </p>
          <p className="text-xs text-gray-600 flex items-center gap-1.5">
            Built with
            <span className="text-gray-500 font-medium">Next.js</span>
            &middot; Deployed on
            <span className="text-gray-500 font-medium">Vercel</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
