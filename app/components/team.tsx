import { useState } from "react";

const team = [
  {
    name: "Alex Martin",
    role: "CEO & Architecte IT",
    desc: "Vision stratégique, architecture globale et direction technique des projets complexes.",
  },
  {
    name: "Sarah Johnson",
    role: "Lead Infrastructure",
    desc: "Conception et optimisation des systèmes réseau et cloud à grande échelle.",
  },
  {
    name: "David Kim",
    role: "Cyber Security",
    desc: "Sécurisation des infrastructures, audit et protection avancée des systèmes.",
  },
  {
    name: "Emma Lopez",
    role: "Full Stack Developer",
    desc: "Développement d’applications modernes et automatisation des workflows métier.",
  },
];

export default function Team() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative py-32   bg-black text-white overflow-hidden">

     

      {/* HEADER */}
      <div className="text-center mb-24 relative z-10">
        <span className="uppercase tracking-[0.35em] text-xs text-white/40">
          Team
        </span>

        <h2 className="mt-6 text-6xl md:text-7xl font-extralight leading-[1.05]">
          Une équipe
          <br />
          <span className="font-normal text-white">
            d’ingénieurs visionnaires
          </span>
        </h2>
      </div>

      {/* SPLIT LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 max-w-6xl mx-auto px-6 relative z-10">

        {/* LEFT LIST */}
        <div className="space-y-12">
          {team.map((m, i) => (
            <div
              key={i}
              onMouseEnter={() => setActive(i)}
              className="cursor-pointer group relative"
            >
              <div className="flex items-baseline justify-between">

                <h3
                  className={`text-3xl md:text-4xl font-extralight tracking-[-0.04em] transition-all duration-500
                  ${
                    active === i
                      ? "text-white translate-x-2"
                      : "text-white/40"
                  }`}
                >
                  {m.name}
                </h3>

                <span className="text-xs tracking-[0.35em] text-white/30">
                  0{i + 1}
                </span>

              </div>

              {/* LINE WITH GREEN ACCENT ON ACTIVE */}
              <div
                className={`h-[1px] mt-4 transition-all duration-500
                ${active === i ? "bg-lime-300 w-full" : "bg-white/10 w-3/4"}`}
              />

              {/* subtle glow dot */}
              <div
                className={`absolute -left-3 top-1/2 w-2 h-2 rounded-full transition-all
                ${active === i ? "bg-lime-300 opacity-100" : "bg-white/10 opacity-40"}`}
              />
            </div>
          ))}
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col justify-center">
          <p className="text-white/40 uppercase tracking-[0.35em] text-xs mb-6">
            Profil
          </p>

          <h3 className="text-4xl md:text-5xl font-extralight mb-6 leading-tight transition-all duration-500">
            {team[active].role}
          </h3>

          <p className="text-white/60 text-lg leading-relaxed max-w-xl transition-all duration-500">
            {team[active].desc}
          </p>

          <div className="mt-10 w-28 h-[1px] bg-gradient-to-r from-lime-300/60 to-transparent" />
        </div>

      </div>
    </section>
  );
}