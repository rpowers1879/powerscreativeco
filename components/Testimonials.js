'use client';

import { motion } from 'framer-motion';
import SectionHeading from './ui/SectionHeading';
import Reveal from './ui/Reveal';

const testimonials = [
  {
    _id: '1',
    clientName: 'Marcus T.',
    businessName: "The Master's Tree Service LLC",
    quote: "Powers Creative built our entire website in two days. Two days! It looks incredible, loads fast, and we've already gotten calls from people who found us on Google. Best part? We own everything — the code, the hosting, no monthly platform fees.",
    rating: 5,
  },
  {
    _id: '2',
    clientName: 'Sarah K.',
    businessName: 'RoofProMatch',
    quote: "We needed a lead generation platform built fast and built right. Powers Creative understood exactly what we needed and the multi-step form they created is smooth, professional, and converts like crazy. They're our go-to developer now.",
    rating: 5,
  },
  {
    _id: '3',
    clientName: 'Jason M.',
    businessName: 'Ruff Lyfe Pet Services',
    quote: "I wanted something that felt like a real app, not just a website. Powers Creative delivered a slick PWA that my customers can install right to their phones. It's been a game-changer for bookings.",
    rating: 5,
  },
];

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-amber-400' : 'text-gray-700'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const items = testimonials;

  return (
    <section id="testimonials" className="section-padding relative">
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-500/[0.02] to-transparent pointer-events-none" />

      <div className="container-custom relative z-10">
        <SectionHeading
          label="Testimonials"
          title="What Clients Say"
          description="Don't take my word for it. Here's what real clients have to say about working with me."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((testimonial, i) => (
            <Reveal key={testimonial._id} delay={i * 0.1}>
              <div className="h-full p-8 rounded-2xl border border-white/[0.06] bg-surface-900/40 hover:bg-surface-800/40 transition-all duration-300 flex flex-col">
                {/* Stars */}
                <StarRating rating={testimonial.rating} />

                {/* Quote */}
                <blockquote className="mt-5 text-gray-300 leading-relaxed flex-1 text-sm">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="mt-6 pt-6 border-t border-white/[0.06]">
                  <p className="font-semibold text-white text-sm">{testimonial.clientName}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{testimonial.businessName}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
