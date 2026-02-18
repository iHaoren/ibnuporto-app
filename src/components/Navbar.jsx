import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Gallery", href: "#gallery" },
    { label: "Docs", href: "#docs" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="navbar py-5 px-4 fixed top-0 left-0 right-0 bg-[#1C1917]/85 backdrop-blur-md z-50 border-b border-stone-800/50">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-xl md:text-2xl font-bold bg-linear-to-r from-[#F59E0B] to-[#F43F5E] text-transparent bg-clip-text">
          I . H . A
        </h1>

        {/* Hamburger menu button */}
        <button
          className="md:hidden text-2xl text-stone-300 hover:text-amber-400 transition-colors"
          onClick={toggleMenu}
        >
          <i className={`ri-${isMenuOpen ? "close" : "menu"}-line`}></i>
        </button>

        {/* Links Navigation */}
        <ul
          className={`
          md:flex md:items-center md:gap-8
          fixed md:static
          top-[68px] md:top-auto
          left-0 md:left-auto
          w-full md:w-auto
          bg-[#1C1917]/95 md:bg-transparent
          backdrop-blur-md md:backdrop-blur-none
          p-6 md:p-0
          transition-all duration-300 ease-in-out
          border-b border-stone-800/50 md:border-none
          ${isMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
        >
          {navLinks.map((link, index) => (
            <li key={index} className="mb-4 md:mb-0">
              <a
                href={link.href}
                className="text-base font-medium text-stone-400 hover:text-amber-400 transition-colors duration-300 block"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
