import DataImage from "../data";

const About = () => {
  return (
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
              A 2025 graduate of Industrial Electronics Technical Vocational
              School with a focus on IT, particularly web development. I am
              proficient in front-end development using React.js and Tailwind
              CSS. My internship experience in the industry has shaped my
              discipline, teamwork skills, and strong troubleshooting logic. I
              am currently actively building various web projects that can be
              accessed through my portfolio and GitHub.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
