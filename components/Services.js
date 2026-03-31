'use client';

import { motion } from 'framer-motion';
import SectionHeading from './ui/SectionHeading';
import Reveal from './ui/Reveal';
import Button from './ui/Button';

const services = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
      </svg>
    ),
    title: 'Landing Pages',
    price: '$80+',
    description: 'Perfect for product launches, events, and lead generation. One page that converts visitors into customers.',
    features: [
      'Custom design, mobile responsive',
      '48-hour delivery',
      'SEO optimized',
      'Contact form included',
      '2 rounds of revisions',
    ],
    accent: 'from-brand-500/20 to-brand-500/5',
    border: 'hover:border-brand-500/30',
    iconBg: 'bg-brand-500/10 text-brand-400',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: 'Business Websites',
    price: '$380+',
    description: 'A complete web presence for your business. Multiple pages, CMS dashboard, and everything you need to look professional.',
    features: [
      'Up to 5 pages',
      'CMS dashboard — edit your own content',
      'Contact forms, SEO, analytics',
      '4–5 day delivery',
      'Unlimited revisions',
    ],
    popular: true,
    accent: 'from-emerald-500/20 to-emerald-500/5',
    border: 'hover:border-emerald-500/30',
    iconBg: 'bg-emerald-500/10 text-emerald-400',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    title: 'Web Applications',
    price: '$750+',
    description: 'Custom-built applications with advanced functionality. Lead gen funnels, dashboards, e-commerce — if you can dream it, I can build it.',
    features: [
      'Custom functionality & logic',
      'Full CMS integration',
      'E-commerce capable',
      '7–10 day delivery',
      '1 month ongoing support included',
    ],
    accent: 'from-amber-500/20 to-amber-500/5',
    border: 'hover:border-amber-500/30',
    iconBg: 'bg-amber-500/10 text-amber-400',
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding relative">
      <div className="container-custom">
        <SectionHeading
          label="Services"
          title="What I Build"
          description="From single landing pages to full-scale web applications — I deliver production-ready sites built with modern tools, optimized for speed and conversions."
        />

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.1}>
              <div
                className={`relative group h-full rounded-2xl border border-white/[0.06] bg-surface-900/50 p-8 transition-all duration-500 ${service.border} hover:-translate-y-1`}
              >
                {/* Popular badge */}
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 text-xs font-semibold tracking-wider uppercase bg-emerald-500 text-white rounded-full shadow-lg shadow-emerald-500/30">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Gradient bg on hover */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-b ${service.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl ${service.iconBg} flex items-center justify-center mb-6`}>
                    {service.icon}
                  </div>

                  {/* Title & price */}
                  <h3
                    className="text-xl font-bold text-white mb-1"
                    style={{ fontFamily: "'Cabinet Grotesk', system-ui, sans-serif" }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "'Cabinet Grotesk', system-ui, sans-serif" }}>
                    {service.price}
                  </p>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-gray-300">
                        <svg className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button
                    href="#contact"
                    variant={service.popular ? 'primary' : 'secondary'}
                    size="md"
                    className="w-full"
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
