import Image from "next/image";

const features = [
  {
    icon: "🚀",
    title: "Certificações AWS",
    description:
      "Grupos de estudo focados nas principais certificações: Cloud Practitioner, Solutions Architect, Developer e mais.",
  },
  {
    icon: "💡",
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
    icon: "🎯",
    title: "Eventos & Meetups",
    description:
      "Encontros presenciais e online com palestras, workshops e hands-on labs.",
  },
];

export default function About() {
  return (
    <section id="sobre" className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-orbitron)] text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#a855f7] to-[#ec4899] bg-clip-text text-transparent">
              Sobre a Comunidade
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#ff9900] to-[#a855f7] mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
          <div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              O <strong className="text-[#ff9900]">AWS Women User Group Goiânia</strong> é
              uma comunidade criada para mulheres que querem se aprofundar no
              ecossistema AWS, trocar experiências e crescer juntas na carreira
              de tecnologia.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Aqui você encontra um espaço seguro e acolhedor para estudar,
              tirar dúvidas, participar de eventos e se preparar para
              certificações AWS. Não importa seu nível de experiência — todas são
              bem-vindas!
            </p>
          </div>
          <div className="flex justify-center gap-4">
            <Image
              src="/2.png"
              alt="AWS Women Community"
              width={200}
              height={200}
              className="rounded-2xl"
            />
            <Image
              src="/3.png"
              alt="AWS Women Community"
              width={200}
              height={200}
              className="rounded-2xl"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card-futuristic rounded-2xl p-6 text-center group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="font-[family-name:var(--font-orbitron)] text-lg font-semibold text-white mb-3">
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
