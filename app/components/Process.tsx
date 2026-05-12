import { Search, FileText, Cog, Rocket } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Audit & Analyse',
    description:
      "Nous évaluons votre infrastructure existante, identifions les points d'amélioration et définissons vos besoins.",
    duration: '1-2 semaines',
  },
  {
    icon: FileText,
    title: 'Conception',
    description:
      'Notre équipe conçoit une architecture sur mesure, optimisée pour vos processus et vos objectifs métier.',
    duration: '2-3 semaines',
  },
  {
    icon: Cog,
    title: 'Déploiement',
    description:
      'Mise en œuvre progressive de la solution avec tests rigoureux et formation de vos équipes.',
    duration: '4-8 semaines',
  },
  {
    icon: Rocket,
    title: 'Support continu',
    description:
      'Supervision 24/7, maintenance préventive et optimisation continue de votre infrastructure.',
    duration: 'Illimité',
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="py-32 mx-8 rounded-[40px] bg-gradient-to-br from-black/80 via-slate-900 to-black text-white relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-grid-white/[0.02]"></div>

      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[180px]"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[180px]"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-28">
           <span className="uppercase tracking-[0.35em] text-xs text-white/50">
          Notre approche
        </span>
       
 <h2 className="mt-6 text-5xl md:text-7xl font-extralight tracking-[-0.05em] leading-none">
            Une approche pensée pour
          <br />
          <span className="font-normal">durer</span>
          </h2>
         

          <p className="mt-8 text-slate-400 text-xl max-w-3xl mx-auto leading-relaxed">
            De l’analyse stratégique au suivi continu, chaque étape est conçue
            pour créer une infrastructure performante, fiable et évolutive.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 h-full w-px bg-white/10 hidden lg:block"></div>

          <div className="space-y-28">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative grid lg:grid-cols-2 gap-16 items-center ${
                  index % 2 !== 0 ? 'lg:text-right' : ''
                }`}
              >

                {/* Content */}
                <div
                  className={`space-y-6 ${
                    index % 2 !== 0
                      ? 'lg:order-2 lg:pl-20'
                      : 'lg:pr-20'
                  }`}
                >
                  <div className="flex items-center gap-4 justify-center lg:justify-start">
                    <span className="text-white/20 text-6xl font-extralight">
                      0{index + 1}
                    </span>

                    <div className="w-14 h-14 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-cyan-400" />
                    </div>
                  </div>

                  <h3 className="text-4xl font-light tracking-tight">
                    {step.title}
                  </h3>

                  <p className="text-slate-400 text-lg leading-relaxed">
                    {step.description}
                  </p>

                  <div className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-cyan-300">
                    <div className="w-10 h-px bg-cyan-400"></div>
                    {step.duration}
                  </div>
                </div>

                {/* Visual side */}
                <div
                  className={`relative hidden lg:flex ${
                    index % 2 !== 0
                      ? 'justify-start'
                      : 'justify-end'
                  }`}
                >
                  <div className="relative w-72 h-72 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-2xl flex items-center justify-center">

                    <div className="absolute inset-6 rounded-full border border-white/5"></div>

                    <div className="absolute inset-12 rounded-full border border-cyan-400/10"></div>

                    <step.icon
                      className="w-20 h-20 text-white/80"
                      strokeWidth={1.2}
                    />

                    <div className="absolute w-full h-full rounded-full border border-cyan-400/20 animate-pulse"></div>
                  </div>
                </div>

                {/* Center Dot */}
                <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-5 h-5 rounded-full bg-cyan-400 shadow-[0_0_40px_rgba(34,211,238,0.8)]"></div>
                </div>

              </div>
            ))}
          </div>
        </div>

       
      </div>
    </section>
  );
}