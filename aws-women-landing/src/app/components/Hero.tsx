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
    <section className="relative min-h-screen flex items-center justify-center gradient-bg grid-pattern">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0f]" />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-[#ff9900] rounded-full blur-3xl opacity-20 animate-pulse" />
            <Image
              src="/1.png"
              alt="AWS Women User Group Goiânia"
              width={200}
              height={200}
              className="relative z-10 drop-shadow-2xl"
              priority
            />
          </div>
        </div>

        <h1
          className="font-[family-name:var(--font-orbitron)] text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          <span className="bg-gradient-to-r from-[#ff9900] via-[#ffb84d] to-[#ff9900] bg-clip-text text-transparent glow-text">
            AWS Women
          </span>
          <br />
          <span className="text-white text-3xl md:text-5xl lg:text-6xl">
            User Group Goiânia
          </span>
        </h1>

        <div className="h-16 flex items-center justify-center mb-8">
          <p className="text-lg md:text-2xl text-gray-300 font-[family-name:var(--font-inter)]">
            <span>{text}</span>
            <span className="typewriter-cursor" />
          </p>
        </div>

        <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Uma comunidade para mulheres que desejam crescer na carreira em cloud
          computing, conquistar certificações AWS e construir o futuro da
          tecnologia juntas.
        </p>

        <a
          href="#comunidade"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-[#ff9900] to-[#e68a00] text-black font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,153,0,0.4)] font-[family-name:var(--font-orbitron)]"
        >
          Junte-se a nós
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 17l9.2-9.2M17 17V7H7" />
          </svg>
        </a>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ff9900"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}
