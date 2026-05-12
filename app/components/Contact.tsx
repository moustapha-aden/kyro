import {

  Mail,
  Phone,
  MapPin,
  Send,
 
} from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative p-12 rounded-t-[5rem] bg-black text-white overflow-hidden"
    >
      {/* 🌫️ AWWARDS BLACK GLOW BACKGROUND */}
      <div className="absolute inset-0 -z-10">

        <div className="absolute top-[-180px] left-[-180px] w-[600px] h-[600px] bg-white/5 rounded-full blur-[180px]" />

        <div className="absolute bottom-[-180px] right-[-180px] w-[700px] h-[700px] bg-blue-500/10 rounded-full blur-[200px]" />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[220px]" />

      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-24 items-start">

          {/* LEFT SIDE */}
          <div>

            <span className="uppercase tracking-[0.35em] text-xs text-white/50">
              Contact
            </span>

            <h2 className="mt-6 text-6xl md:text-7xl font-extralight leading-[1.05] tracking-[-0.04em]">
              Construisons
              <br />
              <span className="font-normal">votre système</span>
            </h2>

            <p className="mt-8 text-white/60 text-lg leading-relaxed max-w-xl">
              Nous concevons des infrastructures IT performantes, sécurisées et évolutives
              pour les entreprises modernes.
            </p>

            {/* CONTACT INFO */}
            <div className="mt-14 space-y-10">

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white/80" />
                </div>
                <div>
                  <p className="font-medium">Téléphone</p>
                  <p className="text-white/60">+33 1 84 88 33 10</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white/80" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-white/60">contact@kyronet.fr</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white/80" />
                </div>
                <div>
                  <p className="font-medium">Adresse</p>
                  <p className="text-white/60">Paris, France</p>
                </div>
              </div>

            </div>

           

          </div>

          {/* FORM */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10">

            <h3 className="text-2xl font-light mb-10">
              Demander un audit gratuit
            </h3>

            <form className="space-y-8">

              <input
                type="text"
                placeholder="Nom complet"
                className="w-full bg-transparent border-b border-white/20 py-3 focus:border-white outline-none"
              />

              <input
                type="email"
                placeholder="Email professionnel"
                className="w-full bg-transparent border-b border-white/20 py-3 focus:border-white outline-none"
              />

              <input
                type="text"
                placeholder="Entreprise"
                className="w-full bg-transparent border-b border-white/20 py-3 focus:border-white outline-none"
              />

              <textarea
                rows={4}
                placeholder="Votre besoin..."
                className="w-full bg-transparent border-b border-white/20 py-3 focus:border-white outline-none resize-none"
              />

              <button
                type="submit"
                className="w-full bg-white text-black py-4 rounded-xl hover:opacity-90 transition flex items-center justify-center gap-2"
              >
                Envoyer
                <Send className="w-4 h-4" />
              </button>

            </form>
          </div>
        </div>

        {/* FOOTER */}
        <footer className="mt-32 border-t border-white/10 pt-10 text-white/50 text-sm">

          <div className="flex flex-col md:flex-row justify-between gap-6">

            <p>© 2026 Kyronet. Tous droits réservés.</p>

            <div className="flex gap-6">
              <a className="hover:text-white" href="#">Mentions légales</a>
              <a className="hover:text-white" href="#">Confidentialité</a>
              <a className="hover:text-white" href="#">CGV</a>
            </div>

          </div>

        </footer>
      </div>
    </section>
  );
}