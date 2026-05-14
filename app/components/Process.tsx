import { Search, FileText, Cog, Rocket } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Audit & Analyse',
    description:
      "Nous évaluons votre infrastructure existante, identifions les points d'amélioration et définissons vos besoins.",
    duration: '1-2 semaines',
    color: 'text-teal-400',
    bgColor: 'bg-teal-500/10',
    borderColor: 'border-teal-500/30',
  },
  {
    icon: FileText,
    title: 'Conception',
    description:
      'Notre équipe conçoit une architecture sur mesure, optimisée pour vos processus et vos objectifs métier.',
    duration: '2-3 semaines',
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-500/10',
    borderColor: 'border-cyan-500/30',
  },
  {
    icon: Cog,
    title: 'Déploiement',
    description:
      'Mise en œuvre progressive de la solution avec tests rigoureux et formation de vos équipes.',
    duration: '4-8 semaines',
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/30',
  },
  {
    icon: Rocket,
    title: 'Support continu',
    description:
      'Supervision 24/7, maintenance préventive et optimisation continue de votre infrastructure.',
    duration: 'Illimité',
    color: 'text-lime-400',
    bgColor: 'bg-lime-500/10',
    borderColor: 'border-lime-500/30',
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="bg-black mx-10 rounded-3xl text-white relative overflow-hidden py-20"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-grid-white/[0.02]"></div>
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-lime-300/10 rounded-full blur-[180px]"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-lime-500/10 rounded-full blur-[180px]"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="uppercase tracking-[0.35em] text-xs text-white/50">
            Notre approche
          </span>
          <h2 className="mt-6 text-4xl md:text-5xl font-extralight tracking-[-0.05em] leading-none">
            Une approche pensée pour
            <br />
            <span className="font-normal">durer</span>
          </h2>
          <p className="mt-8 text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
            De l'analyse stratégique au suivi continu, chaque étape est conçue
            pour créer une infrastructure performante, fiable et évolutive.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              {/* Icon */}
              <div className={`w-20 h-20 rounded-2xl ${step.bgColor} ${step.borderColor} border-2 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <step.icon className={`w-10 h-10 ${step.color}`} strokeWidth={1.5} />
              </div>

              {/* Step number */}
              <span className="text-white/30 text-sm font-light mb-3">
                Étape 0{index + 1}
              </span>

              {/* Content */}
              <h3 className="text-xl font-light mb-3 tracking-tight">
                {step.title}
              </h3>

              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                {step.description}
              </p>

              {/* Duration */}
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-lime-300/80">
                <div className="w-8 h-px bg-lime-300/50"></div>
                {step.duration}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}