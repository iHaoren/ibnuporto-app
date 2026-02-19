import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section
      className="min-h-[90vh] flex items-center justify-center pt-20 pb-14 border-b border-stone-700/40"
      id="hero"
    >
      <div className="max-w-3xl mx-auto text-center space-y-8">
        {/* Hero title */}
        <div className="space-y-4">
          <div className="h-[120px] md:h-[160px]">
            <h1 className="text-4xl md:text-6xl font-bold bg-linear-to-r from-[#F59E0B] to-[#F43F5E] text-transparent bg-clip-text leading-tight">
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
            <p className="text-lg md:text-xl text-stone-400 mx-auto">
              <TypeAnimation
                sequence={[
                  3000,
                  "Electronics Engineering Fresh Graduate | Python Enthusiast",
                ]}
                wrapper="span"
                speed={60}
                cursor={true}
              />
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 animate__animated animate__fadeInUp animate__delay-1s">
          <a
            href="https://drive.google.com/file/d/1iQHqHcKT5xKq8fOxG7T42RXvjBTJ_gAL/view?usp=drive_link"
            className="px-8 py-4 bg-amber-600 rounded-xl font-medium hover:bg-amber-500 transition-all duration-300 flex items-center gap-2 text-white shadow-lg shadow-amber-600/20 hover:shadow-amber-500/30 hover:-translate-y-0.5"
          >
            View Resume <i className="ri-eye-fill"></i>
          </a>
          <a
            href="#gallery"
            className="px-8 py-4 bg-stone-700/80 rounded-xl font-medium hover:bg-stone-600 transition-all duration-300 flex items-center gap-2 text-stone-200 hover:-translate-y-0.5"
          >
            View Gallery <i className="ri-arrow-right-line"></i>
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6 animate__animated animate__fadeInUp animate__delay-1s">
          <a
            href="https://instagram.com/iharun_al"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-stone-500 hover:text-amber-400 transition-colors duration-300"
          >
            <i className="ri-instagram-line"></i>
          </a>
          <a
            href="https://linkedin.com/in/harunal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-stone-500 hover:text-amber-400 transition-colors duration-300"
          >
            <i className="ri-linkedin-box-line"></i>
          </a>
          <a
            href="https://wa.me/0859180695624"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-stone-500 hover:text-amber-400 transition-colors duration-300"
          >
            <i className="ri-whatsapp-line"></i>
          </a>
          <a
            href="https://github.com/ihaoren"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-stone-500 hover:text-amber-400 transition-colors duration-300"
          >
            <i className="ri-github-line"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
