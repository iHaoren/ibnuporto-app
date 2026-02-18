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
              I am a recent graduate of a vocational high school with a major in
              Electrical Engineering. Currently, I am shifting my career focus
              to Python Development. My background in Electrical Engineering has
              trained me to think systematically, logically, and solve problems.
              Now, I apply the same mindset to programming, data, and digital
              products.
              <br />I am actively developing my skills in programming and
              artificial intelligence. I learned the basics of the Python
              programming language through YouTube and the Dicoding Indonesia
              scholarship program. I also actively participate in training
              programs organized by Dicoding Indonesia, such as the IDCamp 2025
              program, Coding Camp 2026, Microsoft Elevate Training Center, and
              AWS Back-End Academy.
              <br />I am interested in how artificial intelligence solves
              real-world problems. For example, I am learning how applications
              automate daily tasks and how data supports decision-making in
              sales, operations, and product design. I aspire to develop
              economic stability and help micro, small, and medium enterprises
              (MSMEs) in Indonesia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
