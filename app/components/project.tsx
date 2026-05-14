import { useEffect, useRef, useState } from "react";
import Hom from "../asset/Projet/Hom.png";
import HotelPro from "../asset/Projet/HotelPro.png";
import { ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    title: "HOOM",
    category: "Development",
    year: "2025",
    description:
      "HOOM est une plateforme éducative innovante conçue pour accompagner les élèves et étudiants dans leurs révisions grâce à des quiz interactifs, annales, résumés de cours et une assistance IA intelligente.",
    image: Hom,
    lien: "https://www.hoom.space/",
  },
  {
    title: "HotelPro",
    category: "Development",
    year: "2026",
    description:
      "HotelPro est une plateforme de gestion hôtelière complète permettant de gérer réservations, chambres, facturation, restaurant et comptabilité.",
    image: HotelPro,
  },
];

function Project() {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<number | null>(null);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    );
  };

  // AUTO SLIDE
  useEffect(() => {
    timeoutRef.current = window.setTimeout(() => {
      nextSlide();
    }, 6000);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current]);

  return (
    <section
      id="projects"
      className="relative py-32 bg-white text-black overflow-hidden"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-black/5 rounded-full blur-[140px]" />
        <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-black/5 rounded-full blur-[160px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-black/5 rounded-full blur-[200px]" />
      </div>

      {/* HEADER */}
      <div className="text-center max-w-4xl mx-auto mb-24 px-6">
        <span className="uppercase tracking-[0.35em] text-xs text-black/50">
          Projects
        </span>

        <h2 className="mt-6 text-5xl md:text-7xl font-extralight leading-[1.05] tracking-[-0.05em]">
          Réalisations
          <br />
          <span className="font-normal">sélectionnées</span>
        </h2>
      </div>

      {/* SLIDER */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">

        {/* SLIDES */}
        <div className="overflow-hidden rounded-[2rem]">

          <div
            className="flex transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{
              transform: `translateX(-${current * 100}%)`,
            }}
          >
            {projects.map((p, i) => (
              <div
                key={i}
                className="min-w-full flex flex-col lg:flex-row items-center gap-14 lg:gap-24"
              >
                {/* IMAGE */}
                <div className="relative flex-1 w-full">

                  <div className="absolute inset-0 bg-black/5 blur-[120px] rounded-full scale-110 -z-10" />

                  <div className="overflow-hidden rounded-[2rem]">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="
                        w-full
                        h-[320px] md:h-[500px]
                        object-cover
                        hover:scale-105
                        transition duration-[1800ms]
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
                      <span className="text-sm font-extralight leading-[1.05] tracking-[0.18em] uppercase text-black/70 transition-all duration-500 group-hover:text-black">
                        Voir le projet
                      </span>

                      <div className="relative mt-3 h-[1px] w-20 overflow-hidden bg-black/10">
                        <div className="absolute inset-0 origin-left scale-x-0 bg-black transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-x-100" />
                      </div>

                      <div className="absolute -bottom-2 left-0 h-10 w-24 bg-black/[0.03] blur-2xl opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                    </a>
                  )}

                  <div className="mt-10 w-20 h-[1px] bg-black/20"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CONTROLS */}
        <div className="flex items-center justify-between mt-14">

          {/* BUTTONS */}
          <div className="flex items-center gap-4">

            <button
              onClick={prevSlide}
              className="
                w-14 h-14 rounded-full
                border border-black/10
                flex items-center justify-center
                hover:bg-black hover:text-white
                transition-all duration-500
              "
            >
              <ChevronLeft size={18} />
            </button>

            <button
              onClick={nextSlide}
              className="
                w-14 h-14 rounded-full
                border border-black/10
                flex items-center justify-center
                hover:bg-black hover:text-white
                transition-all duration-500
              "
            >
              <ChevronRight size={18} />
            </button>

          </div>

          {/* DOTS */}
          <div className="flex items-center gap-3">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`
                  transition-all duration-500 rounded-full
                  ${
                    current === i
                      ? "w-14 h-[3px] bg-black"
                      : "w-6 h-[3px] bg-black/20 hover:bg-black/40"
                  }
                `}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;