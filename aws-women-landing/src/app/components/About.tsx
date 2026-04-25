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
    <section id="sobre" className="relative py-24 px-4 section-alt">
      <div className="max-w-5xl mx-auto">

        {/* Cabeçalho centralizado */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#ff9900] text-xs font-semibold uppercase tracking-widest mb-3">
            Quem somos
          </span>
          <h2 className="font-[family-name:var(--font-orbitron)] text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Sobre a{" "}
            <span className="bg-gradient-to-r from-[#ff9900] to-[#ffb84d] bg-clip-text text-transparent">
              Comunidade
            </span>
          </h2>
          <div className="divider-aws mb-6" />
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            O{" "}
            <strong className="text-[#ff9900]">AWS Women User Group Goiânia</strong>{" "}
            é uma comunidade criada para mulheres que querem se aprofundar no
            ecossistema AWS, trocar experiências e crescer juntas na carreira de
            tecnologia.
          </p>
        </div>

        {/* Imagem centralizada */}
        <div className="flex justify-center mb-16">
          <div className="relative">
            <div className="absolute -inset-6 bg-[#ff9900]/8 rounded-3xl blur-2xl" />
            <Image
              src="/1.png"
              alt="AWS Women User Group Goiânia"
              width={560}
              height={315}
              className="relative z-10 rounded-2xl shadow-2xl w-full max-w-lg"
            />
          </div>
        </div>

        {/* Texto descritivo centralizado */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-gray-400 text-base leading-relaxed">
            Aqui você encontra um espaço seguro e acolhedor para estudar,
            tirar dúvidas, participar de eventos e se preparar para
            certificações AWS. Não importa seu nível de experiência —{" "}
            <strong className="text-white">todas são bem-vindas!</strong>
          </p>
        </div>

        {/* Cards de features */}
        <div id="atividades" className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card-aws rounded-2xl p-6 flex flex-col items-center text-center group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="font-[family-name:var(--font-orbitron)] text-sm font-bold text-white mb-3">
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
