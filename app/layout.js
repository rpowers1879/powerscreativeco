import './globals.css';
import localFont from 'next/font/local';
import { Inter } from 'next/font/google';

/* ============================================
   FONT SETUP
   Cabinet Grotesk (display) via CDN fallback
   Satoshi (body) via CDN fallback
   Using Inter as reliable Google Font base
   ============================================ */
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-satoshi',
  display: 'swap',
});

// We'll load premium fonts via CDN in head
// Fallback to Inter which is already loaded

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://powerscreative.co'),
  title: {
    default: 'Powers Creative Co. — Custom Websites for Your Brand',
    template: '%s | Powers Creative Co.',
  },
  description:
    'Custom websites that help business owners represent their brand and style. World-class customer service with Next.js and Tailwind CSS. You own everything — code, hosting, and full control.',
  keywords: [
    'web developer',
    'freelance web developer',
    'Next.js developer',
    'small business websites',
    'fast websites',
    'modern web design',
    'landing page developer',
    'React developer',
    'Tailwind CSS',
    'SEO optimized websites',
    'custom websites',
  ],
  authors: [{ name: 'Powers Creative Co.' }],
  creator: 'Powers Creative Co.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Powers Creative Co. — Custom Websites for Your Brand',
    description:
      'Custom websites that help business owners represent their brand with world-class customer service. You own everything — code, hosting, and full control.',
    siteName: 'Powers Creative Co.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Powers Creative Co. — Web Development',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Powers Creative Co. — Custom Websites for Your Brand',
    description:
      'Custom websites that represent your brand with world-class customer service. You own everything.',
    images: ['/images/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

// Schema.org structured data
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      name: 'Powers Creative Co.',
      description:
        'Custom websites that help business owners represent their brand and style with world-class customer service.',
      email: 'rpowers1879@outlook.com',
      url: process.env.NEXT_PUBLIC_SITE_URL || 'https://powerscreative.co',
      knowsAbout: [
        'Web Development',
        'Next.js',
        'React',
        'Tailwind CSS',
        'SEO',
        'Custom Development',
      ],
      sameAs: [],
    },
    {
      '@type': 'WebSite',
      name: 'Powers Creative Co.',
      url: process.env.NEXT_PUBLIC_SITE_URL || 'https://powerscreative.co',
    },
    {
      '@type': 'ProfessionalService',
      name: 'Powers Creative Co.',
      description:
        'Custom websites that help business owners represent their brand and style.',
      priceRange: '$100 - $800+',
      areaServed: 'Worldwide',
      serviceType: 'Web Development',
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <head>
        {/* Premium font: Cabinet Grotesk from Fontshare */}
        <link
          rel="preconnect"
          href="https://api.fontshare.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@400,500,700,800,900&f[]=satoshi@400,500,700,900&display=swap"
          rel="stylesheet"
        />
        {/* JetBrains Mono for code-like accents */}
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className="font-body bg-surface-950 text-gray-300"
        style={{
          fontFamily: "'Satoshi', var(--font-satoshi), system-ui, sans-serif",
        }}
      >
        {/* Subtle noise texture overlay for depth */}
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
