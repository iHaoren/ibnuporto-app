import DataImage from "./data";
import { TypeAnimation } from "react-type-animation";
import { listProyek } from "./data";

function App() {
  return (
    <main className="space-y-24">
      {/* Hero section */}
      <section
        className="min-h-[90vh] flex items-center justify-center pt-20 pb-14 border-b border-zinc-700/50"
        id="hero"
      >
        <div className="max-w-3xl mx-auto text-center space-y-8">
          {/* Hero title */}
          <div className="space-y-4">
            <div className="h-[120px] md:h-[160px]">
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#3BF686] to-[#4CA9FF] text-transparent bg-clip-text leading-tight">
                <TypeAnimation
                  sequence={[
                    "Hi",
                    500,
                    "Hi, I'm",
                    500,
                    "Hi, I'm Ibnu Harun Almudzakir",
                    1000,
                  ]}
                  wrapper="span"
                  speed={60}
                  cursor={true}
                />
              </h1>
            </div>
            <div className="h-[150px] md:h-[120px]">
              <p className="text-lg md:text-xl text-zinc-400 mx-auto">
                <TypeAnimation
                  sequence={[
                    3000,
                    "Electrical Engineering | Basic teamwork | Frontend dev enthusiast",
                  ]}
                  wrapper="span"
                  speed={60}
                  cursor={true}
                />
              </p>
            </div>
          </div>

          {/* Tombol CTA */}
          <div className="flex flex-wrap justify-center gap-4 animate__animated animate__fadeInUp animate__delay-1s">
            <a
              href="/public/assets/IbnuHarun_Resume.pdf"
              download="IbnuHarun_Resume.pdf"
              className="px-8 py-4 bg-emerald-600 rounded-lg font-medium hover:bg-emerald-500 transition-colors flex items-center gap-2 text-white"
            >
              Download CV <i className="ri-download-line"></i>
            </a>
            <a
              href="#project"
              className="px-8 py-4 bg-zinc-800 rounded-lg font-medium hover:bg-zinc-700 transition-colors flex items-center gap-2"
            >
              View Project <i className="ri-arrow-right-line"></i>
            </a>
          </div>

          {/* Sosmed */}
          <div className="flex items-center justify-center gap-6 animate__animated animate__fadeInUp animate__delay-1s">
            <a
              href="https://instagram.com/ibnuhaoren"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-zinc-400 hover:text-white transition-colors"
            >
              <i className="ri-instagram-line"></i>
            </a>
            <a
              href="https://linkedin.com/in/harunal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-zinc-400 hover:text-white transition-colors"
            >
              <i className="ri-linkedin-box-line"></i>
            </a>
            <a
              href="https://wa.me/0859180695624"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-zinc-400 hover:text-white transition-colors"
            >
              <i className="ri-whatsapp-line"></i>
            </a>
            <a
              href="https://github.com/ihaoren"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-zinc-400 hover:text-white transition-colors"
            >
              <i className="ri-github-line"></i>
            </a>
          </div>
        </div>
      </section>

      {/* About section */}
      <section className="py-8" id="about">
        <div
          className="grid md:grid-cols-2 gap-12 items-center"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <div
            className="relative group"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-[#3BF686] to-[#4CA9FF] rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
            <img
              src={DataImage.AboutImage}
              alt="About Ibnu"
              className="relative rounded-2xl w-full h-[400px] object-cover"
            />
          </div>

          <div
            className="space-y-6"
            data-aos="fade-left"
            data-aos-duration="3000"
          >
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#3BF686] to-[#4CA9FF] text-transparent bg-clip-text">
              About Me
            </h2>
            <div className="bg-zinc-800/50 p-6 rounded-xl border border-zinc-700/50">
              <p className="text-zinc-300 leading-relaxed">
                A graduate of Industrial Electronics Engineering with six months
                of internship experience at PT Adiprima Suraprinta. I have basic
                exposure to industrial work environments and experience
                following structured workflows. I am currently focusing on
                building new skills in software development by learning Flutter
                and Dart for application development. I am open to opportunities
                and projects that help strengthen my abilities in programming.
              </p>
            </div>
          </div>
        </div>

        <div className="tools mt-32">
          <h3
            className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-[#3BF686] to-[#4CA9FF] text-transparent bg-clip-text"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Tools Used
          </h3>
          <p className="text-zinc-300" data-aos="fade-up" data-aos-delay="300">
            Here are some tools I recently learned to use in website
            development.
          </p>
          <div className="tools-box mt-14 grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 gap-4">
            <div
              className="group flex items-center gap-2 p-3 border border-zinc-700/50 rounded-md hover:bg-zinc-800"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <i className="ri-tailwind-css-fill text-cyan-500 text-4xl px-2"></i>
              <div>
                <h1 className="text-zinc-100">Tailwind CSS</h1>
                <p className="text-zinc-400">Framework Styling</p>
              </div>
            </div>
            <div
              className="group flex items-center gap-2 p-3 border border-zinc-700/50 rounded-md hover:bg-zinc-800"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <i className="ri-javascript-fill text-yellow-400 text-3xl px-2"></i>
              <div>
                <h1 className="text-zinc-100">Javascript</h1>
                <p className="text-zinc-400">Languange</p>
              </div>
            </div>
            <div
              className="group flex items-center gap-2 p-3 border border-zinc-700/50 rounded-md hover:bg-zinc-800"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <i className="ri-reactjs-line text-cyan-500 text-3xl px-2"></i>
              <div>
                <h1 className="text-zinc-100">React JS</h1>
                <p className="text-zinc-400">Framework</p>
              </div>
            </div>
            <div
              className="group flex items-center gap-2 p-3 border border-zinc-700/50 rounded-md hover:bg-zinc-800"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <i className="ri-nodejs-line text-green-500 text-3xl px-2"></i>
              <div>
                <h1 className="text-zinc-100">Node JS</h1>
                <p className="text-zinc-400">Javascript running side</p>
              </div>
            </div>
            <div
              className="group flex items-center gap-2 p-3 border border-zinc-700/50 rounded-md hover:bg-zinc-800"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <i className="ri-bootstrap-fill text-purple-500 text-3xl px-2"></i>
              <div>
                <h1 className="text-zinc-100">Bootstrap</h1>
                <p className="text-zinc-400">Framework</p>
              </div>
            </div>
            <div
              className="group flex items-center gap-2 p-3 border border-zinc-700/50 rounded-md hover:bg-zinc-800"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <i className="ri-github-fill text-white text-3xl px-2"></i>
              <div>
                <h1 className="text-zinc-100">Github</h1>
                <p className="text-zinc-400">Repository</p>
              </div>
            </div>
            <div
              className="group flex items-center gap-2 p-3 border border-zinc-700/50 rounded-md hover:bg-zinc-800"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <i className="ri-npmjs-line text-red-800 text-3xl px-2"></i>
              <div>
                <h1 className="text-zinc-100">npmjs</h1>
                <p className="text-zinc-400">Package Manager</p>
              </div>
            </div>
            <div
              className="group flex items-center gap-2 p-3 border border-zinc-700/50 rounded-md hover:bg-zinc-800"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <i className="ri-openai-fill text-white text-4xl px-2"></i>
              <div>
                <h1 className="text-zinc-100">ChatGPT</h1>
                <p className="text-zinc-400">
                  Fixing bugs and project suggestions
                </p>
              </div>
            </div>
            <div
              className="group flex items-center gap-2 p-3 border border-zinc-700/50 rounded-md hover:bg-zinc-800"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img
                src="/assets/tools/figma.png"
                alt="vscode"
                className="w-10 mx-2 py-4"
              />
              <div>
                <h1 className="text-zinc-100">Figma</h1>
                <p className="text-zinc-400">Design</p>
              </div>
            </div>
            <div
              className="group flex items-center gap-2 p-3 border border-zinc-700/50 rounded-md hover:bg-zinc-800"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img
                src="/assets/tools/vscode.png"
                alt="vscode"
                className="w-10 mx-2 py-4"
              />
              <div>
                <h1 className="text-zinc-100">Visual Studio Code</h1>
                <p className="text-zinc-400">Code Editor</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* project section */}
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

      {/* Kontak section */}
      <section className="contact mt-10 sm:p-10 p-0" id="contact">
        <h1
          className="text-2xl md:text-3xl text-center font-bold mb-4 bg-gradient-to-r from-[#3BF686] to-[#4CA9FF] text-transparent bg-clip-text"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Contact
        </h1>
        <p
          className="text-center text-base/loose text-zinc-300 mb-10"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Let's connect with me
        </p>
        <form
          action="https://getform.io/f/amdyjomb"
          method="POST"
          encType="multipart/form-data"
          target="_blank"
          className="bg-zinc-800/50 p-10 mx-auto sm:w-fit w-full rounded-2xl border border-green-400"
          autoComplete="off"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Username</label>
              <input
                className="border border-green-400 p-2 rounded-md"
                type="text"
                name="name"
                placeholder="Input your name..."
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Email</label>
              <input
                className="border border-green-400 p-2 rounded-md"
                type="email"
                name="email"
                placeholder="Input your email..."
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="font-semibold">
                Message
              </label>
              <textarea
                className="bg-zinc-950 border border-green-400 p-2 rounded-md "
                name="message"
                id="message"
                cols={45}
                rows={7}
                placeholder="Message..."
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                className="bg-emerald-600 rounded-lg font-medium hover:bg-emerald-400 transition-colors text-white p-3 w-full cursor-pointer border border-zinc-500"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </div>
        </form>
      </section>
    </main>
  );
}

export default App;
