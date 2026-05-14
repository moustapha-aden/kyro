import Hom from "../asset/Projet/Hom.png";
import HotelPro from "../asset/Projet/HotelPro.png";


const projects = [
  {
    title: "HOOM",
    category: "Development",
    year: "2025",
    description:
      "HOOM est une plateforme éducative innovante conçue pour accompagner les élèves et étudiants dans leurs révisions grâce à des quiz interactifs, annales, résumés de cours et une assistance IA intelligente. Avec plus de 4 000 utilisateurs actifs à Djibouti, HOOM modernise l’apprentissage et le rend plus accessible.",
    image: Hom,
    lien:"https://www.hoom.space/"
  },
  {
    title: "HotelPro",
    category: "Development",
    year: "2026",
    description:
      "HotelPro est une plateforme de gestion hôtelière complète permettant de gérer réservations, chambres, facturation, restaurant et comptabilité en temps réel avec une interface moderne et intuitive.",
    image: HotelPro,
  },
];

function Project() {
  return (
    <section
      id="projects"
      className="relative py-32 bg-white text-black overflow-hidden"
    >
      {/* 🌫 HERO CIRCLES BACKGROUND */}
      <div className="absolute inset-0 -z-10">

        <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-black/5 rounded-full blur-[140px]" />

        <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-black/5 rounded-full blur-[160px]" />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-black/5 rounded-full blur-[200px]" />

      </div>

      {/* HEADER */}
      <div className="text-center max-w-4xl mx-auto mb-24">
        <span className="uppercase tracking-[0.35em] text-xs text-black/50">
          Projects
        </span>

        <h2 className="mt-6 text-6xl md:text-7xl font-extralight leading-[1.05]">
          Réalisations
          <br />
          <span className="font-normal">sélectionnées</span>
        </h2>
      </div>

      {/* PROJECT LIST */}
      <div className="space-y-40">

        {projects.map((p, i) => {
          const isReversed = i % 2 === 1;

          return (
            <div
              key={i}
              className={`
                max-w-7xl mx-auto px-6 lg:px-10
                flex flex-col lg:flex-row
                items-center gap-16 lg:gap-24
                ${isReversed ? "lg:flex-row-reverse" : ""}
              `}
            >

              {/* IMAGE */}
              <div className="relative flex-1">

                <div className="absolute inset-0 -z-10 bg-black/5 blur-[120px] rounded-full scale-110" />

                <div className="overflow-hidden rounded-3xl">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="
                      w-full h-[320px] md:h-[500px]
                      object-cover
                      hover:scale-105 transition duration-1000
                    "
                  />
                </div>

              </div>

              {/* TEXT */}
              <div className="flex-1">

                <div className="flex items-center gap-6 text-xs tracking-[0.3em] text-black/40 uppercase">
                  <span>{p.category}</span>
                  <span className="w-8 h-[1px] bg-black/20"></span>
                  <span>{p.year}</span>
                </div>

                <h3 className="mt-6 text-4xl md:text-6xl font-light tracking-[-0.04em] leading-[1.05]">
                  {p.title}
                </h3>
              

                <p className="mt-8 text-black/60 text-lg leading-relaxed max-w-xl">
                  {p.description}
                </p>
               {p.lien && (
  <a
    href={p.lien}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative inline-flex flex-col items-start py-5 overflow-hidden"
  >
    {/* Text */}
    <span className="text-sm font-extralight leading-[1.05] tracking-[0.18em] uppercase text-black/70 transition-all duration-500 group-hover:text-black">
      Visiter le site
    </span>

    {/* Animated underline */}
    <div className="relative mt-3 h-[1px] w-20 overflow-hidden bg-black/10">
      <div className="absolute inset-0 origin-left scale-x-0 bg-black transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-x-100" />
    </div>

    {/* Subtle blur glow */}
    <div className="absolute -bottom-2 left-0 h-10 w-24 bg-black/[0.03] blur-2xl opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
  </a>
)}

                <div className="mt-10 w-20 h-[1px] bg-black/20 "></div>
                                

              </div>

            </div>
          );
        })}

      </div>
    </section>
  );
}

export default Project;