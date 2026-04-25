const socialLinks = [
  { label: "Meetup",    href: "https://www.meetup.com/aws-women-user-group-goiania/" },
  { label: "LinkedIn",  href: "https://www.linkedin.com/groups/18863023/" },
  { label: "Instagram", href: "https://www.instagram.com/awswomengoiania?igsh=cm9sdDdwOHAwOWJ2&utm_source=qr" },
  { label: "WhatsApp",  href: "https://chat.whatsapp.com/GKdAMmwNFuP4imsNRTrFra" },
];

export default function Footer() {
  return (
    <footer className="relative section-alt border-t border-[#ff9900]/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 text-center">

        {/* Logo / Marca */}
        <div className="font-[family-name:var(--font-orbitron)] text-xl font-bold mb-2">
          <span className="bg-gradient-to-r from-[#ff9900] to-[#ffb84d] bg-clip-text text-transparent">
            AWS Women
          </span>{" "}
          <span className="text-white">User Group</span>
        </div>
        <p className="text-[#8fa3b8] text-sm mb-1">Goiânia</p>

        <p className="text-gray-500 text-sm max-w-sm mx-auto mt-3 mb-8 leading-relaxed">
          Construindo o futuro da cloud, juntas. Um espaço para mulheres
          crescerem no ecossistema AWS.
        </p>

        {/* Links sociais */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-8">
          {socialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-[#ff9900] transition-colors text-sm"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Divisor */}
        <div className="w-full h-px bg-white/5 mb-6" />

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-xs text-gray-600">
          <p>
            © {new Date().getFullYear()} AWS Women User Group Goiânia. Feito com{" "}
            <span className="text-[#ff9900]">♥</span> pela comunidade.
          </p>
          <span className="hidden sm:inline text-gray-700">·</span>
          <p>Não afiliado à Amazon Web Services, Inc.</p>
        </div>
      </div>
    </footer>
  );
}
