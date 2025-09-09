import DataImage from "./data";
import { TypeAnimation } from "react-type-animation";

function App() {
  return (
    <main className="space-y-24">
      {/* Hero section */}
      <section
        className="min-h-[90vh] flex items-center justify-center pt-20 border-b border-zinc-700/50"
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
                    "A passionate Industrial Electronics graduate with expertise in motor maintenance and control systems, exploring the exciting world of Information Technology and Programming.",
                  ]}
                  wrapper="span"
                  speed={60}
                  cursor={true}
                />
              </p>
            </div>
          </div>

          {/* Tombol CTA */}
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#"
              className="px-8 py-4 bg-emerald-600 rounded-lg font-medium hover:bg-emerald-500 transition-colors flex items-center gap-2 text-white"
            >
              Download CV <i className="ri-download-line"></i>
            </a>
            <a
              href="#projects"
              className="px-8 py-4 bg-zinc-800 rounded-lg font-medium hover:bg-zinc-700 transition-colors flex items-center gap-2"
            >
              View Projects <i className="ri-arrow-right-line"></i>
            </a>
          </div>

          {/* Sosmed */}
          <div className="flex items-center justify-center gap-6">
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
          </div>
        </div>
      </section>

      {/* About section */}
      <section className="py-16" id="about">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#3BF686] to-[#4CA9FF] rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
            <img
              src={DataImage.HeroImage}
              alt="About Ibnu"
              className="relative rounded-2xl w-full h-[400px] object-cover"
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#3BF686] to-[#4CA9FF] text-transparent bg-clip-text">
              About Me
            </h2>
            <div className="bg-zinc-800/50 p-6 rounded-xl border border-zinc-700/50">
              <p className="text-zinc-300 leading-relaxed">
                Hi, my name is Ibnu Harun Almudzakir, a graduate of Vocational
                High School majoring in Industrial Electronics with internship
                experience at PT. Adiprima Suraprinta, which focuses on motor
                maintenance, Motor Control Center panels, and general electrical
                systems. I am enthusiastic about building a career in Industrial
                Electronics while developing skills in Information Technology,
                and I have recently learned several skills, namely:
              </p>
              <ul className="mt-4 space-y-2 text-zinc-400">
                <li className="flex items-center gap-2">
                  <i className="ri-html5-fill text-orange-500 text-3xl"></i>
                  HTML
                </li>
                <li className="flex items-center gap-2">
                  <i className="ri-tailwind-css-fill text-cyan-500 text-3xl"></i>
                  Tailwind CSS
                </li>
                <li className="flex items-center gap-2">
                  <i className="ri-javascript-fill text-yellow-400 text-3xl"></i>
                  Javascript
                </li>
                <li className="flex items-center gap-2">
                  <i className="ri-reactjs-line text-cyan-500 text-3xl"></i>
                  React JS
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
