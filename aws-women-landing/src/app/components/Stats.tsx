const stats = [
  { value: "200+", label: "Membras ativas",             icon: "👩‍💻" },
  { value: "15+",  label: "Eventos realizados",          icon: "🎯" },
  { value: "50+",  label: "Certificações conquistadas",  icon: "🏆" },
  { value: "2+",   label: "Anos de comunidade",          icon: "☁️" },
];

export default function Stats() {
  return (
    <section className="relative py-16 px-4 aws-bg">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="stat-card p-6 sm:p-8 flex flex-col items-center text-center">
              <div className="text-3xl mb-3">{stat.icon}</div>
              <div className="font-[family-name:var(--font-orbitron)] text-3xl sm:text-4xl font-bold text-[#ff9900] mb-1">
                {stat.value}
              </div>
              <div className="text-[#8fa3b8] text-sm leading-snug">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
