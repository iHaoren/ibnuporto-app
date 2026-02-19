const documentationItems = [
  {
    id: 1,
    title: "Sertifikat / Dokumen 1",
    description:
      "Tambahkan deskripsi sertifikat atau dokumentasi kamu di sini.",
    icon: "ri-award-line",
    delay: "100",
  },
  {
    id: 2,
    title: "Sertifikat / Dokumen 2",
    description:
      "Tambahkan deskripsi sertifikat atau dokumentasi kamu di sini.",
    icon: "ri-file-text-line",
    delay: "200",
  },
  {
    id: 3,
    title: "Sertifikat / Dokumen 3",
    description:
      "Tambahkan deskripsi sertifikat atau dokumentasi kamu di sini.",
    icon: "ri-medal-line",
    delay: "300",
  },
  {
    id: 4,
    title: "Sertifikat / Dokumen 4",
    description:
      "Tambahkan deskripsi sertifikat atau dokumentasi kamu di sini.",
    icon: "ri-bookmark-line",
    delay: "400",
  },
  {
    id: 5,
    title: "Sertifikat / Dokumen 5",
    description:
      "Tambahkan deskripsi sertifikat atau dokumentasi kamu di sini.",
    icon: "ri-shield-star-line",
    delay: "500",
  },
  {
    id: 6,
    title: "Sertifikat / Dokumen 6",
    description:
      "Tambahkan deskripsi sertifikat atau dokumentasi kamu di sini.",
    icon: "ri-graduation-cap-line",
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
        Dokumentasi
      </h2>
      <p
        className="text-center text-stone-400 mb-12"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Sertifikasi, pencapaian, dan perjalanan belajar
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
            {/* Efek glow hangat */}
            <div className="absolute inset-0 bg-linear-to-br from-amber-500/0 to-rose-500/0 group-hover:from-amber-500/5 group-hover:to-rose-500/5 transition-all duration-500 rounded-2xl"></div>

            <div className="relative z-10">
              {/* Ikon */}
              <div className="w-12 h-12 rounded-xl bg-stone-700/50 flex items-center justify-center mb-4 group-hover:bg-amber-500/15 transition-colors duration-300">
                <i
                  className={`${item.icon} text-2xl text-stone-400 group-hover:text-amber-400 transition-colors duration-300`}
                ></i>
              </div>

              {/* Placeholder gambar */}
              <div className="w-full h-36 rounded-xl border-2 border-dashed border-stone-700/50 bg-stone-900/30 flex items-center justify-center mb-4 group-hover:border-amber-500/30 transition-colors duration-300">
                <div className="flex flex-col items-center gap-1">
                  <i className="ri-image-add-line text-xl text-stone-600 group-hover:text-amber-500/50 transition-colors duration-300"></i>
                  <span className="text-xs text-stone-600">Tambah Gambar</span>
                </div>
              </div>

              {/* Konten */}
              <h3 className="text-lg font-semibold text-stone-200 mb-2 group-hover:text-white transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-sm text-stone-400 leading-relaxed">
                {item.description}
              </p>

              {/* Badge lihat detail */}
              <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-amber-500/70 group-hover:text-amber-400 transition-colors duration-300">
                <i className="ri-external-link-line"></i>
                <span>Lihat Detail</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Documentation;
