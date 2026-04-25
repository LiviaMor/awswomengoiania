import Particles from "./components/Particles";
import Image from "next/image";

const links = [
  {
    name: "Meetup",
    url: "https://www.meetup.com/aws-women-user-group-goiania/",
    description: "Nossos eventos e encontros",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/groups/18863023/",
    description: "Conecte-se com a comunidade",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/awswomengoiania?igsh=cm9sdDdwOHAwOWJ2&utm_source=qr",
    description: "Conteúdo, dicas e bastidores",
  },
  {
    name: "WhatsApp",
    url: "https://chat.whatsapp.com/GKdAMmwNFuP4imsNRTrFra",
    description: "Grupo de estudos e discussões",
  },
];

export default function Home() {
  return (
    <>
      <div className="mesh-bg" />

      <main className="relative z-10 min-h-screen flex flex-col items-center justify-between px-6 py-12">
        <Particles />

        <div className="flex-1 flex flex-col items-center justify-center w-full max-w-sm mx-auto">
          {/* Logo */}
          <div className="mb-8">
            <Image
              src="/aws-new.png"
              alt="AWS Women User Group Goiânia"
              width={320}
              height={320}
              className="w-[250px] md:w-[320px] h-auto"
              priority
            />
          </div>

          {/* Tagline */}
          <h1 className="text-xl md:text-2xl font-bold text-center mb-10 tracking-wide">
            <span className="text-[#ff9900]">Conexão</span>
            <span className="text-gray-500 mx-2">·</span>
            <span className="text-[#a855f7]">Cloud</span>
            <span className="text-gray-500 mx-2">·</span>
            <span className="text-[#ec4899]">Comunidade</span>
          </h1>

          {/* Description */}
          <p className="text-gray-400 text-sm text-center mb-12 leading-relaxed max-w-xs">
            Estudos AWS, carreira e certificações.
            <br />
            <span className="text-gray-300 font-medium">Vem crescer com a gente!</span>
          </p>

          {/* Link buttons */}
          <div className="w-full flex flex-col gap-5">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="link-btn rounded-2xl py-5 px-6 flex flex-col items-center justify-center text-center w-full group"
              >
                <span className="text-white font-bold text-sm tracking-wide group-hover:text-[#ff9900] transition-colors relative z-10">
                  {link.name}
                </span>
                <span className="text-gray-500 text-xs relative z-10 mt-1">{link.description}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 text-center">
          <p className="text-gray-600 text-xs">
            © 2026 AWS Women User Group Goiânia
          </p>
        </footer>
      </main>
    </>
  );
}
