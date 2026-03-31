import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'f6v1xxe3';
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}

// GROQ Queries
export const queries = {
  portfolio: `*[_type == "portfolio"] | order(order asc) {
    _id,
    title,
    slug,
    description,
    thumbnail,
    tags,
    liveUrl,
    featured,
    order,
    category
  }`,

  featuredPortfolio: `*[_type == "portfolio" && featured == true] | order(order asc) {
    _id,
    title,
    slug,
    description,
    thumbnail,
    tags,
    liveUrl,
    featured,
    order,
    category
  }`,

  testimonials: `*[_type == "testimonial" && featured == true] | order(_createdAt desc) {
    _id,
    clientName,
    businessName,
    quote,
    rating
  }`,

  services: `*[_type == "service"] | order(order asc) {
    _id,
    title,
    description,
    price,
    features,
    ctaText,
    order
  }`,

  siteSettings: `*[_type == "siteSettings"][0] {
    siteTitle,
    tagline,
    email,
    phone,
    socialLinks,
    fiverrUrl,
    upworkUrl
  }`,
};
