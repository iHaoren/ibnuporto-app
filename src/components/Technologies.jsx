const Technologies = () => {
  return (
    <section className="tools mt-32">
      <h3
        className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-[#3BF686] to-[#4CA9FF] text-transparent bg-clip-text"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        Tools Used
      </h3>
      <p className="text-zinc-300" data-aos="fade-up" data-aos-delay="300">
        Here are some tools I recently learned to use in website development.
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
            <p className="text-zinc-400">Fixing bugs and project suggestions</p>
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
    </section>
  );
};

export default Technologies;
