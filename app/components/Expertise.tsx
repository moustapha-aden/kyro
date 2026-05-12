import { CheckCircle2, Shield, Cpu, Database, Code2 } from 'lucide-react';

export default function Expertise() {
  return (
    <section  className="py-24 bg-gradient-to-br from-slate-50 via-blue-50/20 to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Infrastructure Réseau
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Des réseaux performants et sécurisés
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Nous concevons des architectures réseau modernes qui allient performance,
              sécurité et évolutivité pour accompagner votre croissance.
            </p>
            <div className="space-y-4">
              {[
                'Architecture LAN/WAN haute disponibilité',
                'SD-WAN pour interconnexion multi-sites',
                'Segmentation VLAN et Zero Trust',
                'Wi-Fi professionnel et gestion centralisée',
                'Firewalls nouvelle génération (NGFW)',
                'Load balancing et redondance'
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-[3rem] blur-3xl opacity-20"></div>
            <div className="relative bg-white border border-slate-200 rounded-[3rem] p-12 shadow-2xl">
              <Shield className="w-full h-64 text-blue-600" strokeWidth={1} />
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-600 to-purple-600 rounded-[3rem] blur-3xl opacity-20"></div>
            <div className="relative bg-white border border-slate-200 rounded-[3rem] p-12 shadow-2xl">
              <Cpu className="w-full h-64 text-violet-600" strokeWidth={1} />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="inline-block bg-violet-100 text-violet-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Virtualisation
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Optimisez vos ressources avec la virtualisation
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Consolidez vos serveurs, améliorez votre agilité et réduisez vos coûts
              grâce à nos solutions de virtualisation avancées.
            </p>
            <div className="space-y-4">
              {[
                'VMware vSphere & ESXi pour entreprises',
                'Microsoft Hyper-V et System Center',
                'Proxmox VE pour infrastructures flexibles',
                'Kubernetes et orchestration de containers',
                'VDI (Virtual Desktop Infrastructure)',
                'Haute disponibilité et disaster recovery'
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-violet-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Sauvegarde & Protection
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Vos données protégées en toute circonstance
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Stratégies de sauvegarde immutable et plans de reprise d&apos;activité
              pour garantir la continuité de vos opérations.
            </p>
            <div className="space-y-4">
              {[
                'Stratégie 3-2-1 (3 copies, 2 supports, 1 hors site)',
                'Backup immutable contre ransomwares',
                'Veeam Backup & Replication',
                'Réplication temps réel et asynchrone',
                'Tests automatiques de restauration',
                'RPO/RTO optimisés selon vos besoins'
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 to-green-600 rounded-[3rem] blur-3xl opacity-20"></div>
            <div className="relative bg-white border border-slate-200 rounded-[3rem] p-12 shadow-2xl">
              <Database className="w-full h-64 text-emerald-600" strokeWidth={1} />
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-600 to-orange-600 rounded-[3rem] blur-3xl opacity-20"></div>
            <div className="relative bg-white border border-slate-200 rounded-[3rem] p-12 shadow-2xl">
              <Code2 className="w-full h-64 text-amber-600" strokeWidth={1} />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="inline-block bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Développement & Automatisation
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Automatisez et optimisez vos processus IT
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Nos développeurs créent des outils sur mesure pour automatiser vos
              tâches répétitives et interconnecter vos systèmes.
            </p>
            <div className="space-y-4">
              {[
                'Scripts Python pour automatisation',
                'Applications web PHP personnalisées',
                'APIs REST pour intégration systèmes',
                'Infrastructure as Code (Terraform, Ansible)',
                'Développement d\'outils de migration',
                'Dashboards et reporting personnalisés'
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
