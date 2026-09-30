import Hero from '@/components/Hero';
import About from '@/components/About';
import Collections from '@/components/Collections';
import Testimonials from '@/components/Testimonials';
import Services from '@/components/Services';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Collections />
      <Testimonials />
      <Services />
    </>
  );
}