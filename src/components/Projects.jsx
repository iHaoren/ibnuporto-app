import { listProyek } from "../data";

const Projects = () => {
  return (
    <section className="py-10 mt-10" id="project">
      <h1
        className="text-center text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-[#3BF686] to-[#4CA9FF] text-transparent bg-clip-text"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        Project
      </h1>
      <p
        className="text-center text-zinc-300"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        Here are some projects I have created
      </p>
      <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {listProyek.map((proyek) => (
          <div
            key={proyek.id}
            className="flex flex-col h-full bg-zinc-800/50 rounded-lg border border-zinc-700/50 overflow-hidden"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay={proyek.dad}
          >
            <div className="aspect-video w-full overflow-hidden">
              <img
                src={proyek.gambar}
                alt={proyek.nama}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="flex flex-col flex-grow p-6 space-y-4">
              <h1 className="text-xl font-bold text-white">{proyek.nama}</h1>

              <p className="text-zinc-400 flex-grow">{proyek.desk}</p>

              <div className="flex flex-wrap gap-2 pt-4">
                {proyek.tools.map((tool, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm bg-zinc-900 border border-zinc-700 rounded-md font-medium text-zinc-300"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <div className="pt-4">
                <a
                  className={`block text-center py-3 px-4 rounded-lg font-medium transition-colors ${
                    proyek.link
                      ? "bg-emerald-600 hover:bg-emerald-500 text-white"
                      : "bg-zinc-700 text-zinc-400 cursor-not-allowed"
                  }`}
                  href={proyek.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {proyek.link ? "View Website" : "Coming Soon"}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
