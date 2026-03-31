import { client, queries } from '../lib/sanity';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyMe from '../components/WhyMe';
import Portfolio from '../components/Portfolio';
import About from '../components/About';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

// Revalidate every 60 seconds for near-realtime CMS updates
export const revalidate = 60;

async function getData() {
  try {
    const [portfolio, testimonials] = await Promise.all([
      client.fetch(queries.portfolio),
      client.fetch(queries.testimonials),
    ]);
    return { portfolio, testimonials };
  } catch (error) {
    // Gracefully fall back to placeholder data if Sanity isn't configured yet
    console.warn('Sanity fetch failed — using placeholder data:', error.message);
    return { portfolio: null, testimonials: null };
  }
}

export default async function Home() {
  const { portfolio, testimonials } = await getData();

  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Services />
      <WhyMe />
      <Portfolio projects={portfolio} />
      <About />
      <Process />
      <Testimonials testimonials={testimonials} />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}
