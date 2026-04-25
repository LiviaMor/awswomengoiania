"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [text, setText] = useState("");
  const fullText = "Empoderamento feminino na nuvem AWS";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i + 1));
      i++;
      if (i >= fullText.length) clearInterval(interval);
    }, 55);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center hero-bg grid-pattern pt-16"
    >
      {/* Glow central de fundo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#ff9900] opacity-[0.05] rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#1a2332] to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 py-24 flex flex-col items-center text-center">

        {/* Logo */}
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-[#ff9900] rounded-full blur-3xl opacity-20 scale-125 pulse-glow" />
          <Image
            src="/3.png"
            alt="AWS Women User Group Goiânia"
            width={160}
            height={160}
            className="relative z-10 drop-shadow-2xl w-32 sm:w-40"
            priority
          />
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#ff9900]/10 border border-[#ff9900]/25 rounded-full px-4 py-1.5 mb-6">
          <span className="w-2 h-2 rounded-full bg-[#ff9900] animate-pulse shrink-0" />
          <span className="text-[#ff9900] text-xs font-semibold tracking-widest uppercase">
            AWS User Group · Goiânia
          </span>
        </div>

        {/* Título principal */}
        <h1 className="font-[family-name:var(--font-orbitron)] font-bold leading-tight mb-4">
          <span className="block text-4xl sm:text-5xl lg:text-6xl bg-gradient-to-r from-[#ff9900] via-[#ffb84d] to-[#ff9900] bg-clip-text text-transparent glow-text">
            AWS Women
          </span>
          <span className="block text-3xl sm:text-4xl lg:text-5xl text-white mt-1">
            User Group Goiânia
          </span>
        </h1>

        {/* Typewriter */}
        <div className="h-8 flex items-center justify-center mb-6">
          <p className="text-base sm:text-lg text-[#8fa3b8]">
            <span>{text}</span>
            <span className="typewriter-cursor" />
          </p>
        </div>

        {/* Descrição */}
        <p className="text-gray-400 text-base sm:text-lg max-w-2xl leading-relaxed mb-10">
          Uma comunidade para mulheres que desejam crescer na carreira em cloud
          computing, conquistar certificações AWS e construir o futuro da
          tecnologia juntas.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
          <a
            href="#comunidade"
            className="btn-aws gap-2 py-3 px-8 text-base font-bold rounded-full"
          >
            Junte-se a nós
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="#sobre"
            className="btn-aws-outline gap-2 py-3 px-8 text-base rounded-full"
          >
            Saiba mais
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-60">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ff9900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
