import Hero from '@/components/Hero';
import About from '@/components/About';
import Collections from '@/components/Collections'; // Great for ready-to-wear and kiddies
import Testimonials from '@/components/Testimonials';
import Services from '@/components/Services'; // Great for highlighting bespoke/Owanbe tailoring

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Collections />
      <Services />
      <Testimonials />
    </>
  );
}