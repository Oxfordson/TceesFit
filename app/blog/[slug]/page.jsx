import Link from 'next/link';

export default function BlogPost({ params }) {
  // In a real application, fetch post data based on params.slug from your CMS
  const { slug } = params;

  return (
    <article className="pt-32 pb-24 bg-white min-h-screen">
      
      {/* Article Header */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <div className="text-brand-rose uppercase tracking-widest text-sm font-semibold mb-4">
          Hair Care
        </div>
        <h1 className="text-4xl md:text-6xl font-serif text-brand-dark mb-6 leading-tight">
          The Ultimate Guide to Maintaining French Curls
        </h1>
        <div className="text-sm uppercase tracking-widest text-brand-dark/50 flex items-center justify-center space-x-4">
          <time>October 15, 2026</time>
          <span>&bull;</span>
          <span>5 Min Read</span>
        </div>
      </header>

      {/* Hero Image */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="relative h-[60vh] w-full rounded-2xl overflow-hidden bg-brand-light">
          <img 
            src="/images/blog-1.jpg" 
            alt="Maintaining French Curls"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-headings:font-serif prose-headings:text-brand-dark prose-p:text-brand-dark/80 prose-p:font-light prose-a:text-brand-rose">
        <p className="lead text-xl italic text-brand-dark mb-8">
          French curls offer a bouncy, voluminous aesthetic that instantly elevates any look. However, maintaining that effortless structure requires a specific routine.
        </p>

        <h2>1. Detangle with Patience</h2>
        <p>
          Always start from the ends and work your way up to the roots. Use a wide-tooth comb or your fingers to gently separate the curls. Never brush dry curls, as this will lead to frizz and compromise the defined pattern.
        </p>

        <h2>2. Hydration is Key</h2>
        <p>
          Premium hair needs premium hydration. Light, water-based leave-in conditioners mixed with a touch of argan oil will keep the hair soft without weighing it down. Apply lightly to the mid-lengths and ends.
        </p>

        <blockquote>
          "Good hair requires great energy. Treat your extensions like your natural hair, and they will reward you with longevity."
        </blockquote>

        <h2>3. Nighttime Protection</h2>
        <p>
          To maintain the structure overnight, twist the hair into loose bantu knots or flexi rods and secure them under a silk bonnet. Silk pillowcases are also a non-negotiable for reducing friction and preserving moisture.
        </p>

        {/* Back to Blog */}
        <div className="mt-16 pt-8 border-t border-brand-dark/10">
          <Link href="/blog" className="text-brand-rose uppercase tracking-widest text-sm font-semibold hover:text-brand-dark transition-colors">
            &larr; Back to Editorial
          </Link>
        </div>
      </div>
    </article>
  );
}