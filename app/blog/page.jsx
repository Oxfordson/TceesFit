import Link from 'next/link';

// Mock CMS Data
const posts = [
  {
    slug: 'how-to-maintain-french-curls',
    title: 'The Ultimate Guide to Maintaining French Curls',
    excerpt: 'Keep your French Curls bouncy, full, and effortlessly gorgeous with our top maintenance secrets for longevity.',
    date: 'Oct 15, 2026',
    category: 'Hair Care',
    image: '/images/blog-1.jpg'
  },
  {
    slug: 'styling-bone-straight-extensions',
    title: '5 Ways to Style Bone Straight Extensions',
    excerpt: 'From sleek center parts to elegant updos, discover versatile ways to style your timeless Bone Straight hair.',
    date: 'Oct 02, 2026',
    category: 'Styling',
    image: '/images/blog-2.jpg'
  }
];

export default function BlogIndex() {
  return (
    <div className="pt-32 pb-24 bg-brand-light min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Blog Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-serif text-brand-dark mb-6">
            The Luxe Editorial
          </h1>
          <p className="text-lg text-brand-dark/70 max-w-2xl mx-auto font-light">
            Insights, tutorials, and inspiration for maintaining premium hair extensions and protecting your investment.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post) => (
            <article key={post.slug} className="group cursor-pointer">
              <Link href={`/blog/${post.slug}`}>
                <div className="relative h-80 w-full mb-6 overflow-hidden rounded-xl bg-brand-dark/5">
                  {/* Replace with next/image in production */}
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded text-xs uppercase tracking-widest text-brand-dark font-semibold">
                    {post.category}
                  </div>
                </div>
                
                <div className="flex items-center text-xs uppercase tracking-widest text-brand-dark/50 mb-3">
                  <time>{post.date}</time>
                </div>
                
                <h2 className="text-2xl font-serif text-brand-dark mb-3 group-hover:text-brand-rose transition-colors">
                  {post.title}
                </h2>
                
                <p className="text-brand-dark/70 font-light line-clamp-3 mb-4">
                  {post.excerpt}
                </p>
                
                <span className="text-brand-rose text-sm font-semibold uppercase tracking-widest border-b border-transparent group-hover:border-brand-rose transition-all">
                  Read Article
                </span>
              </Link>
            </article>
          ))}
        </div>
        
      </div>
    </div>
  );
}