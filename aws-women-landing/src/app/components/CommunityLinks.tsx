const links = [
  {
    name: "Meetup",
    url: "https://www.meetup.com/aws-women-user-group-goiania/",
    description: "Participe dos nossos encontros e eventos presenciais",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor" aria-hidden="true">
        <path d="M6.98.555a.518.518 0 0 0-.105.011c-.463.088-.779.53-.69.992a.801.801 0 0 0 .994.691c.463-.086.779-.529.69-.992C7.783.86 7.413.567 6.98.555zm8.691 1.342c-.832-.01-1.676.136-2.482.462a.522.522 0 0 0-.105.012c-2.033.744-3.158 2.838-2.711 4.975l.002.004c.02.098.04.195.065.293l.004.01c.023.088.05.176.078.264l.004.01c.03.09.063.18.098.27l.002.005c.036.09.075.18.117.27l.002.003c.043.09.088.18.137.268l.002.004c.05.09.1.178.155.264l.002.004c.055.088.113.174.174.258l.002.003c.062.086.127.17.195.25l.002.003c.07.083.14.163.216.24l.002.002c.076.078.155.153.238.225l.002.002c.084.073.17.143.26.21l.002.001c.09.066.184.13.28.19l.002.001c.098.06.198.117.3.17l.003.001c.103.053.208.103.316.148l.003.002c.11.046.22.088.334.125l.003.001c.115.037.232.07.35.098l.004.001c.12.028.24.052.362.07h.004c.123.02.247.033.372.04h.004c.125.008.25.01.377.006h.004c.127-.005.254-.016.381-.033h.003c.128-.018.255-.042.381-.072l.004-.001c.127-.031.252-.068.376-.11l.003-.002c.124-.044.247-.093.367-.148l.003-.002c.12-.056.238-.117.353-.184l.003-.002c.114-.068.226-.14.334-.219l.002-.002c.108-.08.213-.164.314-.254l.002-.002c.1-.091.197-.187.289-.288l.002-.002c.09-.102.177-.208.258-.32l.001-.002c.08-.112.155-.228.224-.349l.001-.002c.068-.121.13-.246.186-.375l.001-.003c.055-.13.104-.262.146-.398l.001-.003c.04-.137.075-.276.102-.418v-.003c.027-.143.046-.287.058-.433v-.003c.01-.146.014-.293.01-.44v-.004c-.006-.148-.02-.296-.04-.444v-.003a5.096 5.096 0 0 0-.09-.44v-.003a5.2 5.2 0 0 0-.14-.432l-.001-.003a5.14 5.14 0 0 0-.19-.418l-.001-.003a5.003 5.003 0 0 0-.237-.398l-.002-.003a4.835 4.835 0 0 0-.281-.373l-.002-.003a4.647 4.647 0 0 0-.322-.344l-.002-.002a4.456 4.456 0 0 0-.36-.31l-.002-.002a4.27 4.27 0 0 0-.393-.272l-.003-.002a4.1 4.1 0 0 0-.422-.23l-.003-.001a3.96 3.96 0 0 0-.447-.185l-.003-.001a3.86 3.86 0 0 0-.466-.137l-.004-.001a3.81 3.81 0 0 0-.48-.088h-.004a3.82 3.82 0 0 0-.49-.039z" />
      </svg>
    ),
    color: "#f65858",
    bg: "rgba(246,88,88,0.15)",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/groups/18863023/",
    description: "Conecte-se profissionalmente com a comunidade",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    color: "#0a66c2",
    bg: "rgba(10,102,194,0.15)",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/awswomengoiania?igsh=cm9sdDdwOHAwOWJ2&utm_source=qr",
    description: "Acompanhe nosso conteúdo e bastidores",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor" aria-hidden="true">
        <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
      </svg>
    ),
    color: "#e4405f",
    bg: "rgba(228,64,95,0.15)",
  },
  {
    name: "WhatsApp",
    url: "https://chat.whatsapp.com/GKdAMmwNFuP4imsNRTrFra",
    description: "Entre no nosso grupo de discussões e estudos",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    color: "#25d366",
    bg: "rgba(37,211,102,0.15)",
  },
];

export default function CommunityLinks() {
  return (
    <section id="comunidade" className="relative py-24 px-4 aws-bg">
      <div className="max-w-4xl mx-auto">

        {/* Cabeçalho centralizado */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#ff9900] text-xs font-semibold uppercase tracking-widest mb-3">
            Nossas plataformas
          </span>
          <h2 className="font-[family-name:var(--font-orbitron)] text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Faça{" "}
            <span className="bg-gradient-to-r from-[#ff9900] to-[#ffb84d] bg-clip-text text-transparent">
              Parte
            </span>
          </h2>
          <div className="divider-aws mb-4" />
          <p className="text-gray-400 text-base sm:text-lg max-w-md mx-auto">
            Escolha sua plataforma favorita e conecte-se com a comunidade
          </p>
        </div>

        {/* Grid de links */}
        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card-aws rounded-2xl p-5 flex items-center gap-4 group"
            >
              {/* Ícone */}
              <div
                className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                style={{ background: link.bg, color: link.color }}
              >
                {link.icon}
              </div>

              {/* Texto */}
              <div className="flex-1 min-w-0">
                <h3 className="font-[family-name:var(--font-orbitron)] text-sm font-bold text-white mb-0.5 group-hover:text-[#ff9900] transition-colors">
                  {link.name}
                </h3>
                <p className="text-gray-400 text-xs truncate">{link.description}</p>
              </div>

              {/* Seta */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="shrink-0 text-gray-600 group-hover:text-[#ff9900] group-hover:translate-x-1 transition-all"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          ))}
        </div>

        {/* CTA final centralizado */}
        <div className="text-center">
          <div className="inline-block card-aws rounded-2xl p-8 max-w-md w-full">
            <div className="text-5xl mb-4">☁️</div>
            <h3 className="font-[family-name:var(--font-orbitron)] text-xl font-bold text-white mb-2">
              Pronta para decolar?
            </h3>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Junte-se a centenas de mulheres que já estão transformando suas
              carreiras com AWS.
            </p>
            <a
              href="https://chat.whatsapp.com/GKdAMmwNFuP4imsNRTrFra"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-aws gap-2 py-3 px-7 text-sm font-bold rounded-full"
            >
              Entrar na comunidade
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
