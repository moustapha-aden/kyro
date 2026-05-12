
import { Network, Server, Code, Database, ChevronRight } from "lucide-react";

const services = [
  {
    icon: Network,
    title: "Infrastructure Réseau",
    description: "Conception d’architectures réseau modernes, sécurisées et évolutives.",
    features: ["LAN/WAN", "SD-WAN", "Firewall"],
    className: "md:col-span-2 md:row-span-2 bg-slate-50", // Grande carte
    visual: <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
  },
  {
    icon: Server,
    title: "Virtualisation",
    description: "Optimisation des ressources via haute disponibilité.",
    features: ["VMware", "Kubernetes"],
    className: "md:col-span-2 bg-slate-50/50", // Carte large
    visual: <div className="absolute top-0 right-0 p-8 opacity-10"><Server size={120} /></div>
  },
  {
    icon: Code,
    title: "Développement",
    description: "APIs robustes et automatisation.",
    features: ["Python", "Go"],
    className: "bg-slate-50", 
    visual: null
  },
  {
    icon: Database,
    title: "Backup & DRP",
    description: "Garantir la continuité de vos services.",
    features: ["Veeam", "3-2-1"],
    className: "bg-slate-900 text-white", // Carte contrastée
    visual: null
  },
];

export default function ServicesBento() {
  return (
    <section id="services" className="my-24 py-5 text-black  md:mx-10 mx-4 rounded-3xl bg-lime-300 ">
      <div className="max-w-6xl mx-auto">
        
        {/* Header - Aligné à gauche comme les designs SaaS */}

      <div className="text-center mb-12">
       
           <span className="uppercase tracking-[0.35em] text-xs text-black/50">
          Nos services
        </span>
          <h2 className="mt-6 text-5xl md:text-7xl font-extralight tracking-[-0.05em] leading-none">
            Expertise digitale
          <br />
          <span className="font-normal">Des solutions</span>
          </h2>

          <p className="mt-8  md:text-xl text-lg max-w-3xl mx-auto leading-relaxed">
            Une expertise IT complète pour opérer des infrastructures modernes et évolutives.
          </p>
        </div>

        {/* BENTO GRID SYSTEM */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mx-5 md:mx-0 auto-rows-[300px]">
          
          {services.map((service, index) => (
            <div
              key={index}
              className={`
                relative overflow-hidden rounded-[2.5rem] p-8 border border-slate-100
                transition-all duration-500 hover:shadow-2xl hover:shadow-slate-200/50 hover:-translate-y-1
                flex flex-col justify-between group
                ${service.className}
              `}
            >
              {/* Visuel décoratif en background */}
              {service.visual}

              <div className="relative z-10">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 
                  ${index === 3 ? "bg-white/10" : "bg-white shadow-sm border border-slate-100"}`}>
                  <service.icon size={24} className={index === 3 ? "text-white" : "text-slate-900"} />
                </div>

                <h3 className="text-2xl font-bold leading-[1.05] tracking-[-0.04em] mb-3 ">
                  {service.title}
                </h3>

                <p className={`text-sm leading-relaxed max-w-[240px]
                  ${index === 3 ? "text-slate-400" : "text-slate-500"}`}>
                  {service.description}
                </p>
              </div>

              {/* Tags & Interaction */}
              <div className="relative z-10 flex items-center justify-between mt-4">
                <div className="flex gap-2">
                  {service.features.map((f, i) => (
                    <span key={i} className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-lg
                      ${index === 3 ? "bg-white/5 text-white/50" : "bg-slate-200/50 text-slate-600"}`}>
                      {f}
                    </span>
                  ))}
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <ChevronRight size={20} />
                </div>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}