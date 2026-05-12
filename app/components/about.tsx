function AboutUs() {
  return (
    <section
      id="about"
      className="relative  px-10  text-black overflow-hidden"
    >
      {/* Subtle noise / texture feel */}
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]"></div>

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">

        {/* LEFT CONTENT */}
        <div>
       

          <h2 className="mt-6 text-6xl md:text-7xl font-extralight leading-[1.05] tracking-[-0.04em]">
  Nous construisons
  <br />
  <span className="font-normal">des infrastructures IT</span> performantes.
</h2>

<div className="mt-10 space-y-6 text-black/70 text-lg leading-relaxed">
  <p>
    Nous concevons et gérons des écosystèmes informatiques modernes incluant
    les réseaux, la virtualisation et les infrastructures cloud sécurisées pour
    les entreprises exigeantes en performance et en fiabilité.
  </p>

  <p>
    De l’architecture réseau à la reprise d’activité, nous garantissons la
    continuité, la scalabilité et la sécurité à chaque niveau de votre système
    d’information.
  </p>
</div>

    

          {/* Divider line */}
          <div className="mt-12 w-24 h-[1px] bg-black/20"></div>

          {/* Inline stats (no cards) */}
          <div className="mt-10 flex gap-14">
            <div>
              <div className="text-4xl font-light">10+</div>
              <div className="text-xs uppercase tracking-[0.3em] text-black/50 mt-2">
                Projects
              </div>
            </div>

            <div>
              <div className="text-4xl font-light">24/7</div>
              <div className="text-xs uppercase tracking-[0.3em] text-black/50 mt-2">
                Monitoring
              </div>
            </div>

            <div>
              <div className="text-4xl font-light">99%</div>
              <div className="text-xs uppercase tracking-[0.3em] text-black/50 mt-2">
                Uptime
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT VISUAL (PURE AWWARDS SHAPE) */}
        <div className="relative flex justify-center lg:justify-end">

          <div className="relative w-[460px] h-[460px]">

            {/* Outer ring */}
            <div className="absolute inset-0 rounded-full border border-black/10"></div>

            {/* Middle ring */}
            <div className="absolute inset-10 rounded-full border border-black/5"></div>

            {/* Inner ring */}
            <div className="absolute inset-20 rounded-full border border-black/10"></div>

            {/* Core */}
            <div className="absolute inset-32 rounded-full bg-black"></div>

            {/* Text center */}
            <div className="absolute inset-0 flex items-center justify-center text-center text-white">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-white/60">
                  Infrastructure
                </p>
                <h3 className="text-2xl font-light mt-2 tracking-wide">
                 Conçue avec
                  <br />
                  précision
                </h3>
              </div>
            </div>

            {/* Accent dot */}
            <div className="absolute top-10 right-10 w-3 h-3 bg-black rounded-full"></div>
          </div>
        </div>

      </div>

    </section>
  );
}

export default AboutUs;