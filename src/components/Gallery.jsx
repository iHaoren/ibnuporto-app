const Gallery = () => {
  const placeholders = Array.from({ length: 9 }, (_, i) => i + 1);

  return (
    <section className="py-16" id="gallery">
      <h2
        className="text-center text-2xl md:text-3xl font-bold mb-3 bg-linear-to-r from-[#F59E0B] to-[#F43F5E] text-transparent bg-clip-text"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        Gallery
      </h2>
      <p
        className="text-center text-stone-400 mb-12"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Moments, memories, and milestones
      </p>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {placeholders.map((item, index) => {
          // Vary heights to create a masonry look
          const heights = [
            "h-56",
            "h-72",
            "h-64",
            "h-80",
            "h-60",
            "h-72",
            "h-56",
            "h-64",
            "h-80",
          ];
          const height = heights[index % heights.length];

          return (
            <div
              key={item}
              className={`${height} break-inside-avoid rounded-2xl border-2 border-dashed border-stone-700/60 bg-stone-800/40 flex flex-col items-center justify-center gap-3 group hover:border-amber-500/50 hover:bg-stone-800/70 transition-all duration-500 cursor-pointer overflow-hidden relative`}
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay={index * 80}
            >
              {/* Warm glow on hover */}
              <div className="absolute inset-0 bg-linear-to-br from-amber-500/0 to-rose-500/0 group-hover:from-amber-500/5 group-hover:to-rose-500/5 transition-all duration-500"></div>

              <div className="relative z-10 flex flex-col items-center gap-3">
                <div className="w-14 h-14 rounded-full bg-stone-700/50 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors duration-300">
                  <i className="ri-image-add-line text-2xl text-stone-500 group-hover:text-amber-400 transition-colors duration-300"></i>
                </div>
                <span className="text-sm text-stone-500 group-hover:text-stone-400 transition-colors duration-300 font-medium">
                  Photo {item}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Gallery;
