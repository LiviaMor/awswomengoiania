import Image from "next/image";

const features = [
  {
    icon: "🏅",
    title: "Certificações AWS",
    description:
      "Grupos de estudo focados nas principais certificações: Cloud Practitioner, Solutions Architect, Developer e muito mais.",
  },
  {
    icon: "🚀",
    title: "Carreira em Cloud",
    description:
      "Mentoria, dicas de carreira e networking para impulsionar sua trajetória profissional na nuvem.",
  },
  {
    icon: "🤝",
    title: "Networking",
    description:
      "Conecte-se com mulheres incríveis da área de tecnologia em Goiânia e região.",
  },
  {
    icon: "📅",
    title: "Eventos & Meetups",
    description:
      "Encontros presenciais e online com palestras, workshops e hands-on labs práticos.",
  },
];

export default function About() {
  return (
    <section id="sobre" className="relative py-24 px-4 aws-bg">
      <div className="max-w-6xl mx-auto">

        {/* Cabeçalho da seção */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#ff9900] text-sm font-semibold uppercase tracking-widest mb-3">
            Quem somos
          </span>
          <h2 className="font-[family-name:var(--font-orbitron)] text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
            Sobre a{" "}
            <span className="bg-gradient-to-r from-[#ff9900] to-[#ffb84d] bg-clip-text text-transparent">
              Comunidade
            </span>
          </h2>
          <div className="divider-aws" />
        </div>

        {/* Bloco de texto + imagem */}
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center mb-20">
          <div>
            <p className="text-gray-300 text-lg leading-relaxed mb-5">
              O{" "}
              <strong className="text-[#ff9900]">
                AWS Women User Group Goiânia
              </strong>{" "}
              é uma comunidade criada para mulheres que querem se aprofundar no
              ecossistema AWS, trocar experiências e crescer juntas na carreira
              de tecnologia.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              Aqui você encontra um espaço seguro e acolhedor para estudar,
              tirar dúvidas, participar de eventos e se preparar para
              certificações AWS. Não importa seu nível de experiência —{" "}
              <strong className="text-white">todas são bem-vindas!</strong>
            </p>
            <a
              href="#comunidade"
              className="btn-aws inline-flex items-center gap-2 py-3 px-6 text-sm"
            >
              Faça parte
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-3 bg-[#ff9900]/10 rounded-3xl blur-xl" />
              <Image
                src="/3.png"
                alt="AWS Women Community — ícone da comunidade"
                width={320}
                height={320}
                className="relative z-10 rounded-2xl shadow-2xl w-64 sm:w-72 lg:w-80"
              />
            </div>
          </div>
        </div>

        {/* Cards de features */}
        <div id="atividades" className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card-aws rounded-2xl p-6 text-center group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="font-[family-name:var(--font-orbitron)] text-base font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
