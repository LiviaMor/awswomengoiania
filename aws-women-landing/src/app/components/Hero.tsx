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
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center hero-bg grid-pattern pt-16"
    >
      {/* Glow de fundo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#ff9900] opacity-[0.04] rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#232f3e] to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Coluna de texto */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#ff9900]/10 border border-[#ff9900]/25 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#ff9900] animate-pulse" />
              <span className="text-[#ff9900] text-xs font-semibold tracking-wide uppercase">
                AWS User Group · Goiânia
              </span>
            </div>

            <h1 className="font-[family-name:var(--font-orbitron)] text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              <span className="bg-gradient-to-r from-[#ff9900] via-[#ffb84d] to-[#ff9900] bg-clip-text text-transparent glow-text">
                AWS Women
              </span>
              <br />
              <span className="text-white">
                User Group
              </span>
              <br />
              <span className="text-[#8fa3b8] text-3xl sm:text-4xl lg:text-5xl">
                Goiânia
              </span>
            </h1>

            {/* Typewriter */}
            <div className="h-10 flex items-center justify-center lg:justify-start mb-6">
              <p className="text-base sm:text-lg text-gray-300">
                <span>{text}</span>
                <span className="typewriter-cursor" />
              </p>
            </div>

            <p className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Uma comunidade para mulheres que desejam crescer na carreira em
              cloud computing, conquistar certificações AWS e construir o futuro
              da tecnologia juntas.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a
                href="#comunidade"
                className="btn-aws inline-flex items-center justify-center gap-2 py-3 px-7 text-base"
              >
                Junte-se a nós
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="#sobre"
                className="btn-aws-outline inline-flex items-center justify-center gap-2 py-3 px-7 text-base"
              >
                Saiba mais
              </a>
            </div>
          </div>

          {/* Coluna da imagem */}
          <div className="flex-shrink-0 order-1 lg:order-2 flex justify-center">
            <div className="relative">
              {/* Glow atrás da imagem */}
              <div className="absolute inset-0 bg-[#ff9900] rounded-full blur-3xl opacity-15 scale-110 pulse-glow" />
              <Image
                src="/2.png"
                alt="AWS Women User Group Goiânia"
                width={380}
                height={214}
                className="relative z-10 rounded-2xl shadow-2xl w-72 sm:w-80 lg:w-96"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ff9900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
