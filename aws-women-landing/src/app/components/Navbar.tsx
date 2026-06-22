"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
  { label: "Início",        href: "#inicio" },
  { label: "Sobre",         href: "#sobre" },
  { label: "Atividades",    href: "#atividades" },
  { label: "Comunidade",    href: "#comunidade" },
];

export default function Navbar() {
  const [isOpen, setIsOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "navbar shadow-xl" : "bg-transparent"
      }`}
    >
      <nav className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-3 shrink-0">
          <Image
            src="/aws8.png"
            alt="AWS Women Goiânia"
            width={36}
            height={36}
            className="rounded-lg"
          />
          <span className="font-[family-name:var(--font-orbitron)] text-sm font-bold leading-tight hidden sm:block">
            <span className="text-[#ff9900]">AWS Women</span>
            <br />
            <span className="text-[#8fa3b8] text-xs font-normal">User Group Goiânia</span>
          </span>
        </a>

        {/* Links desktop — centralizados */}
        <ul className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="px-4 py-2 text-sm text-gray-400 hover:text-[#ff9900] transition-colors duration-200 rounded-lg hover:bg-white/5"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA desktop */}
        <a
          href="#comunidade"
          className="hidden md:inline-flex btn-aws px-5 py-2 text-sm font-bold rounded-full gap-1.5"
        >
          Participar
        </a>

        {/* Hamburguer mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menu"
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded-lg hover:bg-white/10 transition-colors"
        >
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Menu mobile */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="navbar border-t border-white/10 px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="px-4 py-3 text-gray-300 hover:text-[#ff9900] hover:bg-white/5 rounded-lg transition-colors text-sm text-center"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#comunidade"
            onClick={() => setIsOpen(false)}
            className="btn-aws mt-2 py-3 px-5 text-sm font-bold rounded-full text-center"
          >
            Participar da Comunidade
          </a>
        </div>
      </div>
    </header>
  );
}
