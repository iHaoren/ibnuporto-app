import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
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
                  "Junior Web Developer | Front-End dev enthusiast",
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
            href="https://drive.google.com/file/d/1iQHqHcKT5xKq8fOxG7T42RXvjBTJ_gAL/view?usp=drive_link"
            className="px-8 py-4 bg-emerald-600 rounded-lg font-medium hover:bg-emerald-500 transition-colors flex items-center gap-2 text-white"
          >
            View Resume <i className="ri-eye-fill"></i>
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
  );
};

export default Hero;
