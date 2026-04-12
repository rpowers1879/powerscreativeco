# CLAUDE.md — Powers Creative Co. Portfolio

## Project Overview

This is the portfolio website for Powers Creative Co., a freelance web development business owned by Russell Powers. It showcases his work, services, and pricing to convert Fiverr/Upwork traffic into paying clients. The site emphasizes fast delivery, modern tech, and full ownership (no vendor lock-in).

## Tech Stack

**Framework & Runtime:**
- Next.js 14.2 (App Router)
- React 18.3
- Node.js

**Styling:**
- Tailwind CSS 3.4
- Custom theme with brand colors (blue #2aa2ff) and dark surface colors
- Fonts: Cabinet Grotesk (display), Satoshi (body), JetBrains Mono (accents) via Fontshare CDN

**Animation:**
- Framer Motion 11

**Email:**
- Resend API for contact form submissions

**CMS (legacy, not currently used):**
- Sanity 3.40 is installed but the site uses hardcoded data
- Sanity Studio accessible at `/studio` but not actively used
- lib/sanity.js and sanity/schemas/ exist but aren't imported by main page

**Deployment:**
- Vercel
- Domain: powerscreative.co

## File Structure

```
portfolio/
├── app/
│   ├── api/contact/route.js    # POST endpoint for contact form
│   ├── studio/[[...index]]/    # Sanity Studio (not actively used)
│   ├── globals.css             # Tailwind + custom utilities
│   ├── layout.js               # Root layout, metadata, JSON-LD
│   └── page.js                 # Homepage (imports all sections)
├── components/
│   ├── ui/                     # Reusable UI primitives
│   │   ├── Button.js           # Button with variants/sizes
│   │   ├── Reveal.js           # Scroll-triggered animation wrapper
│   │   └── SectionHeading.js   # Section label + title + description
│   ├── Navbar.js
│   ├── Hero.js
│   ├── Services.js
│   ├── WhyMe.js
│   ├── Portfolio.js            # Contains hardcoded projects array
│   ├── About.js
│   ├── Process.js
│   ├── Testimonials.js         # Contains hardcoded testimonials array
│   ├── Pricing.js              # Contains hardcoded pricing tiers
│   ├── Contact.js
│   └── Footer.js
├── lib/
│   └── sanity.js               # Sanity client (not actively used)
├── public/
│   └── images/
│       ├── headshot.png        # Russell's photo
│       ├── og-image.png        # Social share image
│       └── portfolio/          # Static screenshots for each project
├── sanity/                     # Sanity schemas (not actively used)
├── .env.local                  # Environment variables (not in git)
├── next.config.js
├── tailwind.config.js
├── vercel.json
└── package.json
```

**Naming Conventions:**
- Components: PascalCase (e.g., `SectionHeading.js`)
- UI primitives go in `components/ui/`
- Page sections are flat in `components/`
- Portfolio screenshots: kebab-case in `public/images/portfolio/` (e.g., `oak-harbor.png`)

## Code Patterns

**All components are client components** — they use `'use client'` directive because of Framer Motion animations.

**Section component structure:**
```jsx
'use client';

import { motion } from 'framer-motion';
import SectionHeading from './ui/SectionHeading';
import Reveal from './ui/Reveal';

export default function SectionName() {
  return (
    <section id="section-id" className="section-padding relative">
      <div className="container-custom">
        <SectionHeading
          label="Label"
          title="Title"
          description="Description text."
        />
        {/* Content wrapped in Reveal for scroll animations */}
        <Reveal delay={0.1}>
          {/* ... */}
        </Reveal>
      </div>
    </section>
  );
}
```

**Data is hardcoded in components** — Portfolio projects in `Portfolio.js`, testimonials in `Testimonials.js`, pricing in `Pricing.js` and `Services.js`. No CMS fetching.

**Contact form API pattern:**
```js
// Dynamic import to avoid build-time errors when env var missing
const { Resend } = await import('resend');
const resend = new Resend(process.env.RESEND_API_KEY);
```

**Animation easing:** Custom cubic-bezier `[0.21, 0.47, 0.32, 0.98]` used throughout.

**Styling conventions:**
- Use Tailwind utility classes
- Custom utilities: `section-padding`, `container-custom`, `glass`, `gradient-text`
- Dark theme: `bg-surface-950` background, `text-gray-300` body text
- Brand blue: `brand-500` (#2aa2ff)
- Borders: `border-white/[0.06]` for subtle borders

## Things to Never Modify Without Asking

- `.env.local` — Contains API keys (RESEND_API_KEY)
- `vercel.json` — Deployment config
- `next.config.js` — Image remote patterns
- `app/layout.js` metadata — SEO/OG tags, JSON-LD schema
- Pricing values — Located in multiple files (Pricing.js, Services.js, Contact.js, layout.js)
- Email addresses — Also in multiple files
- Portfolio/testimonial data — Client-specific content

## Build and Deployment

**Development:**
```bash
npm run dev
```

**Build:**
```bash
npm run build
```

**Lint:**
```bash
npm run lint
```

**Deploy:**
Push to `main` branch on GitHub (rpowers1879/powerscreativeco) — Vercel auto-deploys.

**Environment variables needed in Vercel:**
- `NEXT_PUBLIC_SANITY_PROJECT_ID` = f6v1xxe3
- `NEXT_PUBLIC_SANITY_DATASET` = production
- `NEXT_PUBLIC_SANITY_API_VERSION` = 2024-01-01
- `RESEND_API_KEY` = (keep secret)
- `CONTACT_EMAIL_TO` = russell@powerscreative.co
- `NEXT_PUBLIC_SITE_URL` = https://powerscreative.co

## Project-Specific Rules

**Brand messaging:** Emphasize "You own everything" — no CMS lock-in, no monthly platform fees, full ownership of code and hosting.

**Pricing tiers:**
- Basic: $100+ (1 page)
- Business: $450+ (up to 3 pages)
- Premium: $800+ (up to 5 pages)
- Custom projects quoted per-job

**Contact email:** russell@powerscreative.co

**Social links:** Fiverr and Upwork only (no GitHub/LinkedIn currently)

**Testimonials:** Must be from actual clients. Russell owns Oak Harbor Finance, so no testimonial can be attributed to that business as if from a client.

## Current State

**Complete:**
- All 11 page sections implemented and styled
- Contact form working via Resend
- Portfolio with 7 projects and static screenshots
- 3 client testimonials
- Responsive design
- SEO metadata and JSON-LD
- OG image for social sharing
- Deployed and live at powerscreative.co

**Not actively used:**
- Sanity CMS — schemas exist but data is hardcoded
- Sanity Studio at `/studio` — accessible but not needed

**No TODOs/FIXMEs in codebase.**
