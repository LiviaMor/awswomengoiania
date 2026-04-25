const socialLinks = [
  { label: "Meetup",    href: "https://www.meetup.com/aws-women-user-group-goiania/" },
  { label: "LinkedIn",  href: "https://www.linkedin.com/groups/18863023/" },
  { label: "Instagram", href: "https://www.instagram.com/awswomengoiania?igsh=cm9sdDdwOHAwOWJ2&utm_source=qr" },
  { label: "WhatsApp",  href: "https://chat.whatsapp.com/GKdAMmwNFuP4imsNRTrFra" },
];

const navLinks = [
  { label: "Início",      href: "#inicio" },
  { label: "Sobre",       href: "#sobre" },
  { label: "Atividades",  href: "#atividades" },
  { label: "Comunidade",  href: "#comunidade" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-[#ff9900]/10 aws-bg">
      {/* Corpo principal */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* Marca */}
          <div className="lg:col-span-1">
            <div className="font-[family-name:var(--font-orbitron)] text-lg font-bold mb-3">
              <span className="bg-gradient-to-r from-[#ff9900] to-[#ffb84d] bg-clip-text text-transparent">
                AWS Women
              </span>{" "}
              <span className="text-white">User Group</span>
              <br />
              <span className="text-[#8fa3b8] text-sm font-normal">Goiânia</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Construindo o futuro da cloud, juntas. Uma comunidade para mulheres
              que querem crescer no ecossistema AWS.
            </p>
          </div>

          {/* Navegação */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-widest mb-4">
              Navegação
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-500 hover:text-[#ff9900] transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Redes sociais */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-widest mb-4">
              Comunidade
            </h4>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-[#ff9900] transition-colors text-sm inline-flex items-center gap-1.5"
                  >
                    {link.label}
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-50">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Rodapé inferior */}
      <div className="border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} AWS Women User Group Goiânia. Feito com
            {" "}<span className="text-[#ff9900]">♥</span> pela comunidade.
          </p>
          <p className="text-gray-700 text-xs">
            Não afiliado à Amazon Web Services, Inc.
          </p>
        </div>
      </div>
    </footer>
  );
}
