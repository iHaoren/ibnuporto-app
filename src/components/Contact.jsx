const Contact = () => {
  return (
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
  );
};

export default Contact;
