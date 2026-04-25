export default function Footer() {
  return (
    <footer className="relative py-12 px-4 border-t border-white/5">
      <div className="max-w-5xl mx-auto text-center">
        <div className="font-[family-name:var(--font-orbitron)] text-lg font-bold mb-2">
          <span className="bg-gradient-to-r from-[#ff9900] to-[#ffb84d] bg-clip-text text-transparent">
            AWS Women
          </span>{" "}
          <span className="text-white">User Group Goiânia</span>
        </div>
        <p className="text-gray-500 text-sm mb-4">
          Construindo o futuro da cloud, juntas. ☁️
        </p>
        <div className="flex justify-center gap-6 mb-6">
          <a
            href="https://www.meetup.com/aws-women-user-group-goiania/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-[#ff9900] transition-colors text-sm"
          >
            Meetup
          </a>
          <a
            href="https://www.linkedin.com/groups/18863023/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-[#ff9900] transition-colors text-sm"
          >
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/awswomengoiania?igsh=cm9sdDdwOHAwOWJ2&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-[#ff9900] transition-colors text-sm"
          >
            Instagram
          </a>
          <a
            href="https://chat.whatsapp.com/GKdAMmwNFuP4imsNRTrFra"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-[#ff9900] transition-colors text-sm"
          >
            WhatsApp
          </a>
        </div>
        <p className="text-gray-600 text-xs">
          © {new Date().getFullYear()} AWS Women User Group Goiânia. Feito com
          💛 pela comunidade.
        </p>
      </div>
    </footer>
  );
}
