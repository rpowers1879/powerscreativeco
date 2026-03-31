'use client';

import { motion } from 'framer-motion';
import SectionHeading from './ui/SectionHeading';
import Reveal from './ui/Reveal';
import Button from './ui/Button';

const tiers = [
  {
    name: 'Starter',
    price: '$80',
    suffix: '+',
    description: 'A single high-converting page for launches, products, or events.',
    popular: false,
    features: {
      pages: '1',
      cms: false,
      contactForm: true,
      seo: 'Basic',
      analytics: false,
      revisions: '2',
      delivery: '48 hours',
      support: false,
    },
  },
  {
    name: 'Business',
    price: '$380',
    suffix: '+',
    description: 'A complete web presence with CMS — the sweet spot for most businesses.',
    popular: true,
    features: {
      pages: 'Up to 5',
      cms: true,
      contactForm: true,
      seo: 'Full',
      analytics: true,
      revisions: 'Unlimited',
      delivery: '4–5 days',
      support: 'Optional',
    },
  },
  {
    name: 'Premium',
    price: '$750',
    suffix: '+',
    description: 'Custom web applications with advanced functionality and ongoing support.',
    popular: false,
    features: {
      pages: 'Up to 10',
      cms: true,
      contactForm: true,
      seo: 'Full',
      analytics: true,
      revisions: 'Unlimited',
      delivery: '7–10 days',
      support: 'Included (1 mo)',
    },
  },
];

const featureLabels = [
  { key: 'pages', label: 'Pages' },
  { key: 'cms', label: 'CMS Dashboard' },
  { key: 'contactForm', label: 'Contact Form' },
  { key: 'seo', label: 'SEO Setup' },
  { key: 'analytics', label: 'Analytics' },
  { key: 'revisions', label: 'Revisions' },
  { key: 'delivery', label: 'Delivery' },
  { key: 'support', label: 'Ongoing Support' },
];

function FeatureValue({ value }) {
  if (value === true) {
    return (
      <svg className="w-5 h-5 text-emerald-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
      </svg>
    );
  }
  if (value === false) {
    return <span className="text-gray-600">—</span>;
  }
  return <span className="text-gray-300 text-sm">{value}</span>;
}

export default function Pricing() {
  return (
    <section id="pricing" className="section-padding relative">
      <div className="container-custom">
        <SectionHeading
          label="Pricing"
          title="Simple, Transparent Pricing"
          description="No hidden fees. No surprises. Pick a tier that fits your needs — or let's talk about a custom quote."
        />

        {/* Mobile: Cards */}
        <div className="md:hidden space-y-6">
          {tiers.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 0.1}>
              <div
                className={`relative rounded-2xl border p-8 ${
                  tier.popular
                    ? 'border-brand-500/40 bg-brand-500/[0.04]'
                    : 'border-white/[0.06] bg-surface-900/40'
                }`}
              >
                {tier.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-semibold tracking-wider uppercase bg-brand-500 text-white rounded-full">
                    Most Popular
                  </span>
                )}
                <h3
                  className="text-lg font-bold text-white"
                  style={{ fontFamily: "'Cabinet Grotesk', system-ui, sans-serif" }}
                >
                  {tier.name}
                </h3>
                <div className="mt-2 flex items-baseline gap-1">
                  <span
                    className="text-4xl font-black text-white"
                    style={{ fontFamily: "'Cabinet Grotesk', system-ui, sans-serif" }}
                  >
                    {tier.price}
                  </span>
                  <span className="text-gray-400 text-lg">{tier.suffix}</span>
                </div>
                <p className="mt-3 text-sm text-gray-400">{tier.description}</p>

                <ul className="mt-6 space-y-3">
                  {featureLabels.map((f) => (
                    <li key={f.key} className="flex justify-between items-center text-sm">
                      <span className="text-gray-400">{f.label}</span>
                      <FeatureValue value={tier.features[f.key]} />
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Button
                    href="#contact"
                    variant={tier.popular ? 'primary' : 'secondary'}
                    className="w-full"
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Desktop: Comparison table */}
        <Reveal>
          <div className="hidden md:block">
            <div className="rounded-2xl border border-white/[0.06] bg-surface-900/30 overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/[0.06]">
                    <th className="text-left p-6 w-1/4">
                      <span className="text-sm text-gray-500">Compare plans</span>
                    </th>
                    {tiers.map((tier) => (
                      <th key={tier.name} className="p-6 text-center relative">
                        {tier.popular && (
                          <span className="absolute top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 text-[10px] font-semibold tracking-wider uppercase bg-brand-500 text-white rounded-full">
                            Popular
                          </span>
                        )}
                        <h3
                          className="text-lg font-bold text-white mt-2"
                          style={{ fontFamily: "'Cabinet Grotesk', system-ui, sans-serif" }}
                        >
                          {tier.name}
                        </h3>
                        <div className="mt-1 flex items-baseline justify-center gap-0.5">
                          <span className="text-3xl font-black text-white" style={{ fontFamily: "'Cabinet Grotesk', system-ui, sans-serif" }}>
                            {tier.price}
                          </span>
                          <span className="text-gray-400">{tier.suffix}</span>
                        </div>
                        <p className="mt-2 text-xs text-gray-500 max-w-[200px] mx-auto">
                          {tier.description}
                        </p>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {featureLabels.map((f, i) => (
                    <tr
                      key={f.key}
                      className={`border-b border-white/[0.04] ${
                        i % 2 === 0 ? 'bg-white/[0.01]' : ''
                      }`}
                    >
                      <td className="p-5 text-sm text-gray-400">{f.label}</td>
                      {tiers.map((tier) => (
                        <td key={tier.name} className="p-5 text-center">
                          <FeatureValue value={tier.features[f.key]} />
                        </td>
                      ))}
                    </tr>
                  ))}
                  {/* CTA row */}
                  <tr>
                    <td className="p-6" />
                    {tiers.map((tier) => (
                      <td key={tier.name} className="p-6 text-center">
                        <Button
                          href="#contact"
                          variant={tier.popular ? 'primary' : 'secondary'}
                          size="sm"
                        >
                          Get Started
                        </Button>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>

        {/* Custom note */}
        <Reveal>
          <div className="mt-12 text-center">
            <p className="text-gray-400">
              Every project is unique.{' '}
              <a
                href="#contact"
                className="text-brand-400 hover:text-brand-300 underline underline-offset-4 decoration-brand-400/30 hover:decoration-brand-300/50 transition-colors"
              >
                Let&apos;s talk about yours
              </a>
              .
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
