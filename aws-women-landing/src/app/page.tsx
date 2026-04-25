import Particles from "./components/Particles";
import Image from "next/image";

const links = [
  {
    name: "Meetup",
    url: "https://www.meetup.com/aws-women-user-group-goiania/",
    description: "Eventos e encontros",
    gradient: "from-[#f65858] to-[#e0393e]",
    hoverShadow: "hover:shadow-[0_0_25px_rgba(246,88,88,0.25)]",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/groups/18863023/",
    description: "Networking profissional",
    gradient: "from-[#0077b5] to-[#005885]",
    hoverShadow: "hover:shadow-[0_0_25px_rgba(0,119,181,0.25)]",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/awswomengoiania?igsh=cm9sdDdwOHAwOWJ2&utm_source=qr",
    description: "Conteúdo e bastidores",
    gradient: "from-[#e4405f] via-[#c13584] to-[#833ab4]",
    hoverShadow: "hover:shadow-[0_0_25px_rgba(193,53,132,0.25)]",
  },
  {
    name: "WhatsApp",
    url: "https://chat.whatsapp.com/GKdAMmwNFuP4imsNRTrFra",
    description: "Grupo de estudos e discussões",
    gradient: "from-[#25d366] to-[#128c7e]",
    hoverShadow: "hover:shadow-[0_0_25px_rgba(37,211,102,0.25)]",
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0d1117] flex items-center justify-center">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#ff9900] rounded-full blur-[200px] opacity-[0.04]" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-[#a855f7] rounded-full blur-[180px] opacity-[0.03]" />

      <Particles />

      <div className="relative z-10 w-full max-w-md mx-auto px-6 py-16 flex flex-col items-center text-center">
        {/* Logo */}
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-[#ff9900] rounded-full blur-3xl opacity-15 animate-pulse" />
          <Image
            src="/aws-new.png"
            alt="AWS Women User Group Goiânia"
            width={280}
            height={280}
            className="relative z-10 drop-shadow-[0_0_25px_rgba(255,153,0,0.2)]"
            priority
          />
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold mb-1 tracking-wide">
          <span className="bg-gradient-to-r from-[#ff9900] via-[#ffb84d] to-[#ff9900] bg-clip-text text-transparent">
            AWS Women
          </span>
        </h1>
        <h2 className="text-lg text-gray-300 font-medium mb-4">
          User Group Goiânia
        </h2>

        {/* Tagline */}
        <p className="text-gray-400 text-sm mb-10 max-w-xs leading-relaxed">
          Conexão, cloud e comunidade. Estudos AWS, carreira e certificações — juntas.
        </p>

        {/* Links */}
        <div className="w-full flex flex-col gap-4">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`link-card rounded-2xl py-5 px-5 flex flex-col items-center justify-center gap-1 w-full ${link.hoverShadow}`}
            >
              <span className="text-white font-semibold text-base">
                {link.name}
              </span>
              <span className="text-gray-500 text-xs">{link.description}</span>
            </a>
          ))}
        </div>

      </div>

      {/* Footer */}
      <footer className="absolute bottom-0 w-full py-4 text-center">
        <p className="text-gray-600 text-xs">
          © 2026 AWS Women User Group Goiânia
        </p>
      </footer>
    </main>
  );
}
