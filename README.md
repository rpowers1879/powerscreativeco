# Russ P. — Freelance Web Developer Portfolio

A premium, production-ready portfolio site built with **Next.js 14**, **Tailwind CSS**, **Sanity CMS**, and **Framer Motion**. Dark mode by default. Mobile-first. Designed to convert Fiverr, Upwork, and referral traffic into paying clients.

![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?logo=tailwindcss)
![Sanity](https://img.shields.io/badge/Sanity-v3-f03e2f?logo=sanity)
![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel)

---

## Features

- **9 conversion-optimized sections**: Hero, Services, Why Me, Portfolio, About, Process, Testimonials, Pricing, Contact
- **Sanity CMS integration**: Manage portfolio projects, testimonials, and services from an embedded studio at `/studio`
- **Filterable portfolio grid**: All, Business Sites, Web Apps, Landing Pages — with smooth Framer Motion animations
- **Contact form**: Full inquiry form with API route — ready for Resend or SendGrid integration
- **Premium design**: Cabinet Grotesk + Satoshi fonts, glassmorphism nav, animated gradient backgrounds, noise texture overlay
- **Performance**: Optimized for 90+ Lighthouse scores across all categories
- **SEO**: Schema.org JSON-LD, Open Graph tags, Twitter Cards, semantic HTML
- **Responsive**: Mobile-first design, tested at all breakpoints

---

## Quick Start

### 1. Clone & Install

```bash
git clone https://github.com/your-username/russ-p-portfolio.git
cd russ-p-portfolio
npm install
```

### 2. Environment Variables

Copy the example env file and fill in your values:

```bash
cp .env.example .env.local
```

Edit `.env.local`:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=f6v1xxe3
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
CONTACT_EMAIL_TO=rpowers1879@outlook.com
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — your portfolio site.
Open [http://localhost:3000/studio](http://localhost:3000/studio) — Sanity Studio.

---

## Sanity CMS Setup

### Configure Sanity

1. Go to [sanity.io/manage](https://www.sanity.io/manage) and find your project (ID: `f6v1xxe3`)
2. Under **API** → **CORS Origins**, add:
   - `http://localhost:3000` (for development)
   - `https://your-domain.com` (for production)
3. Enable **Allow credentials** for both origins

### Content Types

The studio at `/studio` lets you manage:

| Content Type | What It Controls |
|---|---|
| **Portfolio Projects** | Project cards in the Portfolio section — title, description, thumbnail, tags, live URL, category, featured flag |
| **Testimonials** | Client quotes in the Testimonials section — name, business, quote, star rating, featured flag |
| **Services** | Service tier details (optional override — defaults are hardcoded for reliability) |
| **Site Settings** | Global settings — site title, email, phone, social links, Fiverr/Upwork URLs |

### Adding a Portfolio Project

1. Go to `/studio` → **Portfolio Projects** → **Create**
2. Fill in:
   - **Title**: e.g., "The Master's Tree Service LLC"
   - **Slug**: Click "Generate" (auto-creates from title)
   - **Description**: One-liner about the project
   - **Thumbnail**: Upload a screenshot (recommended: 1200×800px)
   - **Category**: Landing Page, Business Site, or Web Application
   - **Tags**: e.g., "Next.js", "Small Business", "SEO"
   - **Live URL**: The deployed site URL
   - **Featured**: Toggle on to display in the portfolio grid
   - **Order**: Number for sort order (lower = first)
3. Click **Publish**

The site revalidates every 60 seconds, so your changes appear almost immediately.

---

## Contact Form Email Setup

The contact form API route is at `/api/contact/route.js`. It's ready for integration — choose one:

### Option A: Resend (Recommended)

1. Sign up at [resend.com](https://resend.com) (free: 100 emails/day)
2. Get your API key
3. Install: `npm install resend`
4. Add to `.env.local`: `RESEND_API_KEY=re_xxxxxxxxxxxxx`
5. Uncomment the Resend block in `/app/api/contact/route.js`

### Option B: SendGrid

1. Sign up at [sendgrid.com](https://sendgrid.com)
2. Verify a sender email
3. Install: `npm install @sendgrid/mail`
4. Add to `.env.local`: `SENDGRID_API_KEY=SG.xxxxxxxxxxxxx`
5. Uncomment the SendGrid block in `/app/api/contact/route.js`

---

## Deploy on Vercel

### One-Click Deploy

1. Push your repo to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your repository
4. Add your environment variables in the Vercel dashboard
5. Deploy

### Environment Variables on Vercel

Add these in **Settings** → **Environment Variables**:

```
NEXT_PUBLIC_SANITY_PROJECT_ID = f6v1xxe3
NEXT_PUBLIC_SANITY_DATASET = production
NEXT_PUBLIC_SANITY_API_VERSION = 2024-01-01
CONTACT_EMAIL_TO = rpowers1879@outlook.com
NEXT_PUBLIC_SITE_URL = https://your-domain.com
RESEND_API_KEY = re_xxxxxxxxxxxxx  (if using Resend)
```

### Custom Domain

1. In Vercel dashboard → **Settings** → **Domains**
2. Add your domain and follow DNS instructions
3. Update `NEXT_PUBLIC_SITE_URL` to match

---

## Project Structure

```
├── app/
│   ├── layout.js              # Root layout — fonts, metadata, Schema.org
│   ├── page.js                # Main page — assembles all sections
│   ├── globals.css            # Tailwind + custom styles
│   ├── studio/[[...index]]/   # Embedded Sanity Studio
│   └── api/contact/route.js   # Contact form API handler
├── components/
│   ├── Navbar.js              # Sticky glassmorphism navigation
│   ├── Hero.js                # Animated hero with gradient mesh
│   ├── Services.js            # Three service tier cards
│   ├── WhyMe.js               # Six differentiator cards
│   ├── Portfolio.js           # Filterable project grid
│   ├── About.js               # Bio section with headshot + stats
│   ├── Process.js             # Four-step visual timeline
│   ├── Testimonials.js        # Client testimonial cards
│   ├── Pricing.js             # Comparison table
│   ├── Contact.js             # Inquiry form + sidebar
│   ├── Footer.js              # Footer with links + social
│   └── ui/
│       ├── Button.js          # Reusable button component
│       ├── SectionHeading.js  # Consistent section headers
│       └── Reveal.js          # Scroll-triggered animation wrapper
├── lib/
│   └── sanity.js              # Sanity client + GROQ queries
├── sanity/
│   ├── sanity.config.js       # Sanity Studio configuration
│   └── schemas/
│       ├── index.js           # Schema registry
│       ├── portfolio.js       # Portfolio project schema
│       ├── testimonial.js     # Testimonial schema
│       ├── service.js         # Service schema
│       └── siteSettings.js    # Global site settings schema
├── public/
│   └── images/
│       └── headshot.png       # Profile photo
├── .env.local                 # Environment variables (gitignored)
├── .env.example               # Environment template
├── tailwind.config.js         # Custom theme configuration
├── next.config.js             # Next.js configuration
├── package.json               # Dependencies
└── README.md                  # This file
```

---

## Customization

### Changing Colors

Edit `tailwind.config.js` → `theme.extend.colors`:
- `brand.*` — Primary blue accent (buttons, links, highlights)
- `surface.*` — Dark background shades
- `accent.emerald` / `accent.amber` / `accent.rose` — Secondary accents

### Changing Fonts

The site uses [Cabinet Grotesk](https://www.fontshare.com/fonts/cabinet-grotesk) (display) and [Satoshi](https://www.fontshare.com/fonts/satoshi) (body) from Fontshare, with JetBrains Mono for code accents. To change:
1. Update the `<link>` tags in `app/layout.js`
2. Update `fontFamily` in `tailwind.config.js`

### Updating Portfolio Placeholder Data

The portfolio grid uses hardcoded fallback data in `components/Portfolio.js`. Once you add real projects to Sanity with thumbnails, the fallback data is automatically replaced.

---

## Performance Targets

| Metric | Target | How |
|---|---|---|
| Performance | 90+ | Next.js ISR, optimized images, minimal JS |
| SEO | 90+ | Schema.org, meta tags, semantic HTML |
| Accessibility | 90+ | ARIA labels, focus states, color contrast |
| Best Practices | 90+ | HTTPS, no console errors, modern APIs |

---

## License

This project is private and proprietary. Built by Russ P.
