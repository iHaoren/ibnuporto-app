const Footer = () => {
  return (
    <footer className="mt-32 py-4 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center">
      <h1 className="text-2xl font-bold">
        By
        <span className="px-2 bg-gradient-to-r from-[#3BF686] to-[#4CA9FF] text-transparent bg-clip-text">
          Ibnu Harun
        </span>
      </h1>
      <div className="flex gap-6">
        <a
          href="#hero"
          className="text-lg font-medium hover:bg-gradient-to-r from-[#3BF686] to-[#4CA9FF] hover:text-transparent transition-colors bg-clip-text block"
        >
          Home
        </a>
        <a
          href="#about"
          className="text-lg font-medium hover:bg-gradient-to-r from-[#3BF686] to-[#4CA9FF] hover:text-transparent transition-colors bg-clip-text block"
        >
          About
        </a>
        <a
          href="#project"
          className="text-lg font-medium hover:bg-gradient-to-r from-[#3BF686] to-[#4CA9FF] hover:text-transparent transition-colors bg-clip-text block"
        >
          Project
        </a>
      </div>
      <div className="flex items-center gap-3 ">
        <a href="https://github.com/ihaoren" className="hover:bg-gradient-to-r from-[#3BF686] to-[#4CA9FF] hover:text-transparent transition-colors bg-clip-text block">
          <i className="ri-github-line ri-2x"></i>
        </a>
        <a href="https://instagram.com/ibnuhaoren" className="hover:bg-gradient-to-r from-[#3BF686] to-[#4CA9FF] hover:text-transparent transition-colors bg-clip-text block">
          <i className="ri-instagram-line ri-2x"></i>
        </a>
        <a href="https://linkedin.com/in/harunal" className="hover:bg-gradient-to-r from-[#3BF686] to-[#4CA9FF] hover:text-transparent transition-colors bg-clip-text block">
          <i className="ri-linkedin-line ri-2x"></i>
        </a>
        <a href="https://wa.me/0859180695624" className="hover:bg-gradient-to-r from-[#3BF686] to-[#4CA9FF] hover:text-transparent transition-colors bg-clip-text block">
          <i className="ri-whatsapp-line ri-2x"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
