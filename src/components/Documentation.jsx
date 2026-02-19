// ============================================================
// DOCUMENTATION ITEMS — Edit this array to add your certs!
// Put your images in: public/assets/docs/
// Then update the "image" paths and details below.
// ============================================================
const documentationItems = [
  {
    id: 1,
    title: "Certificate / Document 1",
    description: "Add your certificate or documentation description here.",
    icon: "ri-award-line",
    image: null, // Change to: "/assets/docs/cert1.webp"
    link: null, // Change to: "https://link-to-certificate.com"
    delay: "100",
  },
  {
    id: 2,
    title: "Certificate / Document 2",
    description: "Add your certificate or documentation description here.",
    icon: "ri-file-text-line",
    image: null,
    link: null,
    delay: "200",
  },
  {
    id: 3,
    title: "Certificate / Document 3",
    description: "Add your certificate or documentation description here.",
    icon: "ri-medal-line",
    image: null,
    link: null,
    delay: "300",
  },
  {
    id: 4,
    title: "Certificate / Document 4",
    description: "Add your certificate or documentation description here.",
    icon: "ri-bookmark-line",
    image: null,
    link: null,
    delay: "400",
  },
  {
    id: 5,
    title: "Certificate / Document 5",
    description: "Add your certificate or documentation description here.",
    icon: "ri-shield-star-line",
    image: null,
    link: null,
    delay: "500",
  },
  {
    id: 6,
    title: "Certificate / Document 6",
    description: "Add your certificate or documentation description here.",
    icon: "ri-graduation-cap-line",
    image: null,
    link: null,
    delay: "600",
  },
];

const Documentation = () => {
  return (
    <section className="py-16" id="docs">
      <h2
        className="text-center text-2xl md:text-3xl font-bold mb-3 bg-linear-to-r from-[#F59E0B] to-[#F43F5E] text-transparent bg-clip-text"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        Documentation
      </h2>
      <p
        className="text-center text-stone-400 mb-12"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Certifications, achievements, and learning milestones
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {documentationItems.map((item) => (
          <div
            key={item.id}
            className="group relative bg-stone-800/50 rounded-2xl border border-stone-700/40 p-6 hover:border-amber-500/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-amber-500/5 overflow-hidden"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay={item.delay}
          >
            {/* Subtle warm glow */}
            <div className="absolute inset-0 bg-linear-to-br from-amber-500/0 to-rose-500/0 group-hover:from-amber-500/5 group-hover:to-rose-500/5 transition-all duration-500 rounded-2xl"></div>

            <div className="relative z-10">
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-stone-700/50 flex items-center justify-center mb-4 group-hover:bg-amber-500/15 transition-colors duration-300">
                <i
                  className={`${item.icon} text-2xl text-stone-400 group-hover:text-amber-400 transition-colors duration-300`}
                ></i>
              </div>

              {/* Image — shows real image or placeholder */}
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-36 rounded-xl object-cover mb-4"
                />
              ) : (
                <div className="w-full h-36 rounded-xl border-2 border-dashed border-stone-700/50 bg-stone-900/30 flex items-center justify-center mb-4 group-hover:border-amber-500/30 transition-colors duration-300">
                  <div className="flex flex-col items-center gap-1">
                    <i className="ri-image-add-line text-xl text-stone-600 group-hover:text-amber-500/50 transition-colors duration-300"></i>
                    <span className="text-xs text-stone-600">Add Image</span>
                  </div>
                </div>
              )}

              {/* Content */}
              <h3 className="text-lg font-semibold text-stone-200 mb-2 group-hover:text-white transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-sm text-stone-400 leading-relaxed">
                {item.description}
              </p>

              {/* View badge — links if URL provided */}
              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-amber-500/70 group-hover:text-amber-400 transition-colors duration-300"
                >
                  <i className="ri-external-link-line"></i>
                  <span>View Details</span>
                </a>
              ) : (
                <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-stone-600">
                  <i className="ri-external-link-line"></i>
                  <span>Add Link</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Documentation;
