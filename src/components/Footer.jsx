const Footer = () => {
  return (
    <footer className="mt-24 py-8 border-t border-stone-800/50">
      <div className="flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center">
        <h1 className="text-2xl font-bold">
          By
          <span className="px-2 bg-linear-to-r from-[#F59E0B] to-[#F43F5E] text-transparent bg-clip-text">
            Ibnu Harun
          </span>
        </h1>

        <div className="flex gap-6">
          <a
            href="#hero"
            className="text-base font-medium text-stone-500 hover:text-amber-400 transition-colors duration-300"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-base font-medium text-stone-500 hover:text-amber-400 transition-colors duration-300"
          >
            About
          </a>
          <a
            href="#gallery"
            className="text-base font-medium text-stone-500 hover:text-amber-400 transition-colors duration-300"
          >
            Gallery
          </a>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/ihaoren"
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-500 hover:text-amber-400 transition-colors duration-300"
          >
            <i className="ri-github-line ri-xl"></i>
          </a>
          <a
            href="https://instagram.com/iharun_al"
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-500 hover:text-amber-400 transition-colors duration-300"
          >
            <i className="ri-instagram-line ri-xl"></i>
          </a>
          <a
            href="https://linkedin.com/in/harunal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-500 hover:text-amber-400 transition-colors duration-300"
          >
            <i className="ri-linkedin-line ri-xl"></i>
          </a>
          <a
            href="https://wa.me/0859180695624"
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-500 hover:text-amber-400 transition-colors duration-300"
          >
            <i className="ri-whatsapp-line ri-xl"></i>
          </a>
        </div>
      </div>

      <p className="text-center text-stone-600 text-sm mt-6">
        © {new Date().getFullYear()} Ibnu Harun Almudzakir. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
