"use client";

import { useEffect, useState } from "react";

interface Particle {
  id: number;
  left: string;
  size: number;
  duration: number;
  delay: number;
  color: string;
}

export default function Particles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const colors = [
      "rgba(255, 153, 0, 0.3)",
      "rgba(168, 85, 247, 0.3)",
      "rgba(236, 72, 153, 0.2)",
      "rgba(6, 182, 212, 0.2)",
    ];

    const generated: Particle[] = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 15 + 10,
      delay: Math.random() * 10,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    setParticles(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
