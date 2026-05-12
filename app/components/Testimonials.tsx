

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO, Fintech Company",
    text:
      "Une expertise technique exceptionnelle. Leur approche a totalement transformé notre infrastructure IT.",
  },
  {
    name: "Michael Brown",
    role: "IT Director, Logistics",
    text:
      "Fiabilité, performance et sécurité. L’équipe a livré une architecture robuste et scalable.",
  },
  {
    name: "David Martin",
    role: "CEO, SaaS Platform",
    text:
      "Un vrai partenaire stratégique. Ils comprennent parfaitement les enjeux business et techniques.",
  },
];

function Testimonials() {
  return (
    <section id="testimonials" className="relative py-32 px-6 bg-white text-black overflow-hidden">

      {/* 🌫️ AWWARDS BACKGROUND CIRCLES */}
      <div className="absolute inset-0 -z-10">

        <div className="absolute top-[-120px] left-[-120px] w-[500px] h-[500px] bg-black/5 rounded-full blur-[140px]"></div>

        <div className="absolute bottom-[-150px] right-[-150px] w-[600px] h-[600px] bg-black/5 rounded-full blur-[160px]"></div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-black/5 rounded-full blur-[180px]"></div>

      </div>

      {/* HEADER */}
      <div className="max-w-4xl mx-auto text-center mb-24 relative">
        <span className="uppercase tracking-[0.35em] text-xs text-black/50">
          Testimonials
        </span>

        <h2 className="mt-6 text-6xl md:text-7xl font-extralight leading-[1.05] tracking-[-0.04em]">
          Ce que disent
          <br />
          <span className="font-normal">nos clients</span>
        </h2>

        <p className="mt-8 text-black/60 text-lg">
          Des entreprises qui nous font confiance pour leurs infrastructures critiques.
        </p>
      </div>

      {/* GRID TESTIMONIALS */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-12 relative">

        {testimonials.map((t, i) => (
          <div key={i} className="relative group">

            {/* quote mark */}
            <div className="text-6xl text-black/10 absolute -top-6 left-0 group-hover:text-black/20 transition">
              “
            </div>

            <p className="text-lg text-black/70 leading-relaxed mb-8">
              {t.text}
            </p>

            <div className="space-y-1">
              <h4 className="text-lg font-light">{t.name}</h4>
              <span className="text-sm text-black/40">{t.role}</span>
            </div>

            {/* underline hover */}
            <div className="w-0 group-hover:w-16 h-[1px] bg-black/30 transition-all duration-500 mt-4"></div>

          </div>
        ))}

      </div>

      {/* floating center circle accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-24 h-24 bg-black/10 rounded-full blur-2xl"></div>

    </section>
  );
}

export default Testimonials;