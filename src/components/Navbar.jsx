import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar py-6 px-4 fixed top-0 left-0 right-0 bg-zinc-900/80 backdrop-blur-sm z-50">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="brand text-xl md:text-2xl font-bold">I . H . A</h1>
        
        {/* Hamburger menu button */}
        <button 
          className="md:hidden text-2xl"
          onClick={toggleMenu}
        >
          <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line`}></i>
        </button>

        {/* Links Navigation*/}
        <ul className={`
          md:flex md:items-center md:gap-8
          fixed md:static
          top-[76px] md:top-auto
          left-0 md:left-auto
          w-full md:w-auto
          bg-zinc-900 md:bg-transparent
          p-6 md:p-0
          transition-all duration-300 ease-in-out
          ${isMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}>
          <li className="mb-4 md:mb-0">
            <a
              href="#hero"
              className="text-lg font-medium hover:bg-gradient-to-r from-[#3BF686] to-[#4CA9FF] hover:text-transparent transition-colors bg-clip-text block"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
          </li>
          <li className="mb-4 md:mb-0">
            <a
              href="#about"
              className="text-lg font-medium hover:bg-gradient-to-r from-[#3BF686] to-[#4CA9FF] hover:text-transparent transition-colors bg-clip-text block"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
          </li>
          <li className="mb-4 md:mb-0">
            <a
              href="#project"
              className="text-lg font-medium hover:bg-gradient-to-r from-[#3BF686] to-[#4CA9FF] hover:text-transparent transition-colors bg-clip-text block"
              onClick={() => setIsMenuOpen(false)}
            >
              Project
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-lg font-medium hover:bg-gradient-to-r from-[#3BF686] to-[#4CA9FF] hover:text-transparent transition-colors bg-clip-text block"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;