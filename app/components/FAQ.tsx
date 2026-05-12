import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Quels sont vos délais d'intervention ?",
    answer:
      "Nous assurons une prise en charge immédiate 24/7 avec un temps de réponse inférieur à 15 minutes pour les incidents critiques.",
  },
  {
    question: "Proposez-vous un audit gratuit ?",
    answer:
      "Oui, nous réalisons un audit complet et gratuit de votre infrastructure avec un rapport détaillé et des recommandations concrètes.",
  },
  {
    question: "Comment garantissez-vous la sécurité ?",
    answer:
      "Nous utilisons une architecture Zero Trust, des firewalls avancés, du chiffrement et une surveillance continue de tous les systèmes.",
  },
  {
    question: "Travaillez-vous avec quelles technologies ?",
    answer:
      "VMware, Kubernetes, Cisco, Fortinet, AWS, Azure, ainsi que des solutions sur mesure en Python, PHP et Go.",
  },
  {
    question: "Vos sauvegardes sont-elles sécurisées ?",
    answer:
      "Oui, nous appliquons la règle 3-2-1 avec des backups immutables et des tests de restauration réguliers.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative my-10 py-10 px-6 bg-lime-300 mx-10 rounded-3xl text-black overflow-hidden">

      {/* 🌫️ AWWARDS CIRCLES BACKGROUND */}
      <div className="absolute inset-0 -z-10">

        <div className="absolute top-[-120px] left-[-120px] w-[500px] h-[500px] bg-black/5 rounded-full blur-[140px]" />
        <div className="absolute bottom-[-120px] right-[-120px] w-[600px] h-[600px] bg-black/5 rounded-full blur-[160px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-black/5 rounded-full blur-[180px]" />

      </div>

      {/* HEADER */}
      <div className="max-w-4xl mx-auto text-center mb-24">
        <span className="uppercase tracking-[0.35em] text-xs text-black/50">
          FAQ
        </span>

        <h2 className="mt-6 text-6xl md:text-7xl font-extralight leading-[1.05] tracking-[-0.04em]">
          Questions
          <br />
          <span className="font-normal">fréquentes</span>
        </h2>

        <p className="mt-8 text-black/60 text-lg">
          Tout ce que vous devez savoir sur nos services IT.
        </p>
      </div>

      {/* ACCORDION */}
      <div className="max-w-3xl mx-auto space-y-6">

        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-black/10 pb-6 group"
          >

            {/* question */}
            <button
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
              className="w-full flex justify-between items-center text-left"
            >
              <h3 className="text-xl md:text-2xl font-light leading-snug group-hover:opacity-70 transition">
                {faq.question}
              </h3>

              <ChevronDown
                className={`w-5 h-5 transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* answer */}
            <div
              className={`overflow-hidden transition-all duration-500 ${
                openIndex === index
                  ? "max-h-40 opacity-100 mt-4"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-black/60 text-base leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="max-w-3xl mx-auto mt-24 text-center">
        <p className="text-black/60 mb-6">
          Vous avez une question spécifique ?
        </p>
<a href="#contact">
        <button className="px-8 py-4 rounded-full bg-black text-white hover:scale-105 transition">
          Nous contacter
        </button>
</a>
      </div>
    </section>
  );
}