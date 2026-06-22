import Particles from "./components/Particles";
import Image from "next/image";

const links = [
  {
    name: "Meetup",
    url: "https://www.meetup.com/aws-women-user-group-goiania/",
    description: "Eventos e encontros presenciais e online",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/groups/18863023/",
    description: "Networking e oportunidades profissionais",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/awswomengoiania?igsh=cm9sdDdwOHAwOWJ2&utm_source=qr",
    description: "Conteúdo, dicas e bastidores",
  },
  {
    name: "WhatsApp",
    url: "https://chat.whatsapp.com/GKdAMmwNFuP4imsNRTrFra",
    description: "Grupo de estudos e discussões diárias",
  },
];

export default function Home() {
  return (
    <>
      <div className="aurora-bg" />
      <div className="grid-overlay" />

      <main className="relative z-10 min-h-[100dvh] flex flex-col items-center justify-between px-5 py-10 sm:py-14">
        <Particles />

        {/* Conteúdo principal — centralizado verticalmente */}
        <section className="flex-1 flex flex-col items-center justify-center w-full max-w-[400px] mx-auto">
          {/* Logo */}
          <div className="mb-6 sm:mb-8">
            <Image
              src="/aws9.png"
              alt="AWS Women User Group Goiânia"
              width={280}
              height={280}
              className="w-[160px] sm:w-[200px] md:w-[240px] h-auto drop-shadow-[0_0_40px_rgba(255,153,0,0.08)]"
              priority
            />
          </div>

          {/* Tagline */}
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-center mb-2 tracking-wide leading-relaxed">
            <span className="text-[#ff9900]">Conexão</span>
            <span className="text-gray-600 mx-1.5 sm:mx-2">·</span>
            <span className="text-[#a855f7]">Cloud</span>
            <span className="text-gray-600 mx-1.5 sm:mx-2">·</span>
            <span className="text-[#ec4899]">Comunidade</span>
          </h1>

          {/* Description */}
          <p className="text-gray-400 text-xs sm:text-sm text-center mb-8 sm:mb-10 leading-relaxed max-w-[300px]">
            Estudos AWS, carreira e certificações.
            <br />
            <span className="text-gray-200 font-semibold">Vem crescer com a gente!</span>
          </p>

          {/* Próximo Evento */}
          <div className="w-full mb-8 sm:mb-10">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="badge-live inline-block w-2 h-2 rounded-full bg-[#ff9900]" />
              <h2 className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-[0.2em]">
                Próximo Evento
              </h2>
            </div>
            <a
              href="https://www.meetup.com/aws-women-user-group-goiania/events/314700199/?eventOrigin=your_events&utm_medium=referral&utm_campaign=event_card_savedevents_share_modal&utm_source=link&utm_version=v2&member_id=476501116"
              target="_blank"
              rel="noopener noreferrer"
              className="event-card block rounded-2xl overflow-hidden"
            >
              <Image
                src="/evento2.png"
                alt="Próximo evento AWS Women User Group Goiânia"
                width={800}
                height={420}
                className="w-full h-auto"
              />
            </a>
            <p className="text-center mt-2.5">
              <a
                href="https://www.meetup.com/aws-women-user-group-goiania/events/314700199/?eventOrigin=your_events&utm_medium=referral&utm_campaign=event_card_savedevents_share_modal&utm_source=link&utm_version=v2&member_id=476501116"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ff9900] text-xs font-semibold hover:underline"
              >
                Inscreva-se →
              </a>
            </p>
          </div>

          {/* Link buttons */}
          <nav className="w-full flex flex-col gap-3" aria-label="Redes sociais e links">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="link-btn rounded-xl py-4 px-5 flex flex-col items-center justify-center text-center w-full group"
              >
                <span className="text-white font-semibold text-sm tracking-wide group-hover:text-[#ff9900] transition-colors duration-300 relative z-10">
                  {link.name}
                </span>
                <span className="text-gray-500 text-[11px] relative z-10 mt-1 group-hover:text-gray-400 transition-colors duration-300">
                  {link.description}
                </span>
              </a>
            ))}
          </nav>
        </section>

        {/* Footer */}
        <footer className="mt-10 sm:mt-14 text-center">
          <p className="text-gray-700 text-[10px] tracking-wide">
            © 2026 AWS Women User Group Goiânia
          </p>
        </footer>
      </main>
    </>
  );
}
