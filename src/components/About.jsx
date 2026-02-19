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
          <div className="absolute -inset-1 bg-linear-to-r from-[#F59E0B] to-[#F43F5E] rounded-2xl blur opacity-60 group-hover:opacity-100 transition duration-1000"></div>
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
          <h2 className="text-2xl md:text-3xl font-bold bg-linear-to-r from-[#F59E0B] to-[#F43F5E] text-transparent bg-clip-text">
            About Me
          </h2>
          <div className="bg-stone-800/50 p-6 rounded-xl border border-stone-700/40">
            <p className="text-stone-300 leading-relaxed">
              Hello! I&apos;m Ibnu Harun Almudzakir, a fresh graduate from a
              vocational high school majoring in Electrical Engineering.
              I&apos;m currently exploring a career path in Python development,
              bringing along the problem-solving mindset I built during my
              engineering studies.
              <br />
              <br />
              I enjoy learning new things — most of what I know about
              programming comes from online resources like YouTube and training
              programs from Dicoding Indonesia, including IDCamp 2025, Coding
              Camp 2026, and AWS Back-End Academy. I&apos;m still growing and
              always looking for opportunities to improve.
              <br />
              <br />
              I&apos;m curious about how technology, especially AI, can help
              solve everyday problems — from automating simple tasks to
              supporting better decision-making. Down the road, I hope to
              contribute to projects that make a real difference, particularly
              for small businesses in Indonesia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
