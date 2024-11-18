import React, { useState, useEffect } from "react";
import './Styles/navbar.css';

const Navbar = () => {
  const [navBackground, setNavBackground] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setNavBackground(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-colors duration-300 text-white ${
        navBackground ? "bg-black" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center py-1 px-6">
        {/* Botão de Menu Responsivo */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="w-9 h-10 cursor-pointer flex flex-col items-center justify-center md:hidden lg:hidden"
        >
          <div
            className={`w-6 h-[2px] bg-white rounded transition-transform duration-300 ${
              menuOpen ? "rotate-45 translate-y-[6px]" : "translate-y-[0.45rem]"
            }`}
          ></div>
          <div
            className={`w-6 h-[2px] bg-white rounded transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          ></div>
          <div
            className={`w-6 h-[2px] bg-white rounded transition-transform duration-300 ${
              menuOpen
                ? "-rotate-45 -translate-y-[6px]"
                : "-translate-y-[0.45rem]"
            }`}
          ></div>
        </button>
      </div>

      {/* Menu Responsivo */}
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 ${
          menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        } md:hidden`}
      >
        <div className="flex flex-col items-center mt-9 h-full">
          <ul className="flex flex-col space-y-4">
            <li>
              <a
                href="/"
                className="text-white text-xl"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/performance"
                className="text-white text-xl"
                onClick={() => setMenuOpen(false)}
              >
                Performance
              </a>
            </li>
            <li>
              <a
                href="/database-driven"
                className="text-white text-xl"
                onClick={() => setMenuOpen(false)}
              >
                Database Driven
              </a>
            </li>
            <li>
              <a
                href="/marketing-partner"
                className="text-white text-xl"
                onClick={() => setMenuOpen(false)}
              >
                Marketing Partner
              </a>
            </li>
            <li>
              <a
                href="/creators"
                className="text-white text-xl"
                onClick={() => setMenuOpen(false)}
              >
                Creators
              </a>
            </li>
            <li>
              <a
                href="/who-we-are"
                className="text-white text-xl"
                onClick={() => setMenuOpen(false)}
              >
                Who We Are
              </a>
            </li>
            <li>
              <button
                onClick={() => setMenuOpen(false)}
                className="text-white text-2xl flex items-center justify-center"
              >
                ✕
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Links de Desktop */}
      <div className="hidden md:flex justify-between items-center py-1 px-6">
        <ul className="flex space-x-9 mx-8">
          <li>
            <a href="/" className="c-magnetic">
              Home
            </a>
          </li>
          <li>
            <a href="/performance" className="c-magnetic">
              Performance
            </a>
          </li>
          <li>
            <a href="/database-driven" className="c-magnetic">
              Database Driven
            </a>
          </li>
        </ul>

        {/* Logo entre os links */}
        <div className="flex items-center">
          <img src="/images/logo_t.png" alt="Logo" width={100} height={40} />
        </div>

        <ul className="flex space-x-9 mx-8">
          <li>
            <a href="/marketing-partner" className="c-magnetic">
              Marketing Partner
            </a>
          </li>
          <li>
            <a href="/creators" className="c-magnetic">
              Creators
            </a>
          </li>
          <li>
            <a href="/who-we-are" className="c-magnetic">
              Who We Are
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
