export default function Collections() {
  // Driven by data arrays for scalable component architecture
  const collections = [
    {
      id: 1,
      name: "French Curls",
      description: "Bouncy. Full. Effortlessly Gorgeous.",
      // You can add an image path here later: image: "/images/french-curls.jpg"
    },
    {
      id: 2,
      name: "Italian Curls",
      description: "Defined curls. Luxurious Volume.",
    },
    {
      id: 3,
      name: "Bone Straight",
      description: "Sleek. Silky. Timelessly Beautiful.",
    }
  ];

  return (
    <section id="collections" className="py-24 bg-brand-dark text-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-rose uppercase tracking-widest text-sm font-semibold">
            Premium Quality
          </span>
          <h2 className="text-4xl md:text-5xl font-serif mt-3 mb-4">Shop Our Collection</h2>
          <div className="w-24 h-[1px] bg-brand-rose mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((item) => (
            <div 
              key={item.id} 
              className="group relative bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 flex flex-col items-center text-center cursor-pointer"
            >
              {/* Image Placeholder */}
              <div className="w-32 h-32 rounded-full bg-brand-rose/20 mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                <svg className="w-12 h-12 text-brand-rose" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              
              <h3 className="text-2xl font-serif mb-3">{item.name}</h3>
              <p className="text-brand-light/70 font-light italic mb-8 flex-grow">
                {item.description}
              </p>
              
              <span className="inline-block border-b border-brand-rose text-brand-rose pb-1 uppercase tracking-widest text-xs font-semibold group-hover:text-white group-hover:border-white transition-colors">
                Discover More
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}