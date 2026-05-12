import { useRef } from "react";
import Hom from "../asset/Projet/Hom.png"

const projects = [
  {
    title: "Modern Network Infrastructure",
    category: "Network",
    year: "2025",
    description:
      "Architecture réseau sécurisée et scalable pour environnements multi-sites.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2000&auto=format&fit=crop",
  },
  {
    title: "Cloud Virtualization System",
    category: "Cloud",
    year: "2025",
    description:
      "Infrastructure virtualisée haute disponibilité basée sur Kubernetes.",
    image:
      "https://images.unsplash.com/photo-1597733336794-12d05021d510?q=80&w=2000&auto=format&fit=crop",
  },
  {
    title: "HOOM ",
    category: "Development",
    year: "2024",
    description:
      "Plateforme acadamique ",
    image:
      Hom,
  },
];

function Project() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const scroll = (dir: "left" | "right") => {
    if (!containerRef.current) return;

    const width = containerRef.current.offsetWidth;

    containerRef.current.scrollBy({
      left: dir === "left" ? -width : width,
      behavior: "smooth",
    });
  };

  return (
    <section id="projects" className="relative py-5 bg-white text-black overflow-hidden">

      {/* 🔥 HERO STYLE CIRCLES BACKGROUND */}
      <div className="absolute inset-0 -z-10">

        {/* big glow center */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-black/5 blur-[180px] rounded-full"></div>

        {/* top left circle */}
        <div className="absolute top-0 left-[-100px] w-[400px] h-[400px] bg-black/5 rounded-full blur-[120px]"></div>

        {/* bottom right circle */}
        <div className="absolute bottom-0 right-[-120px] w-[500px] h-[500px] bg-black/5 rounded-full blur-[140px]"></div>

        {/* small floating circle */}
        <div className="absolute top-[20%] right-[20%] w-[120px] h-[120px] bg-black/10 rounded-full blur-2xl"></div>

      </div>

      {/* HEADER */}
      <div className="text-center max-w-4xl mx-auto mb-16 relative">
        <span className="uppercase tracking-[0.35em] text-xs text-black/50">
          Projects
        </span>

        <h2 className="mt-6 text-5xl md:text-7xl font-extralight leading-[1.05]">
          Réalisations
          <br />
          <span className="font-normal">sélectionnées</span>
        </h2>
      </div>

      {/* BUTTONS */}
      <div className="flex justify-center gap-4 mb-10 relative z-10">
        <button
          onClick={() => scroll("left")}
          className="w-12 h-12 border border-black/10 rounded-full hover:bg-black hover:text-white transition"
        >
          ←
        </button>

        <button
          onClick={() => scroll("right")}
          className="w-12 h-12 border border-black/10 rounded-full hover:bg-black hover:text-white transition"
        >
          →
        </button>
      </div>

      {/* SLIDER */}
      <div
        ref={containerRef}
        className="
          flex gap-10 overflow-x-hidden scroll-smooth
          px-10
          snap-x snap-mandatory
          scrollbar-hide
          relative z-10
        "
      >

        {projects.map((p, i) => (
          <div
            key={i}
            className="
              min-w-full lg:min-w-[80%]
              snap-center
              flex flex-col lg:flex-row
              gap-12 items-center
              shrink-0
            "
          >

            {/* IMAGE */}
            <div className="md:w-full lg:w-1/2 md:h-[500px] h-[250px] w-[250px] overflow-hidden rounded-2xl">
              <img
                src={p.image}
                alt={p.title}
                className="
                  w-full h-full object-cover
                  hover:scale-105 transition duration-1000
                "
              />
            </div>

            {/* TEXT */}
            <div className="w-full lg:w-1/2 space-y-6">

              <div className="flex justify-center md:gap-0 gap-7  md:justify-between text-xs tracking-[0.3em] text-black/40">
                <span>{p.category}</span>
                <span>{p.year}</span>
              </div>

              <h3 className="text-2xl md:text-5xl font-light leading-tight">
                {p.title}
              </h3>

              <p className="text-black/60 max-w-96 text-lg leading-relaxed">
                {p.description}
              </p>

              <div className="w-16 h-[1px] bg-black/20"></div>

            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;