import { Welcome } from "../welcome/welcome";
import  AboutUs from "../components/about";
import  Navigation from "../components/Navigation";
import  FAQ from "../components/FAQ";
import  Hero from "../components/Hero";
import  Partenaire from "../components/partenaire";
import  Process from "../components/Process";
import  Project from "../components/project";
import  ServicesStacked from "../components/Services";
import  Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Team from "~/components/team";
export function meta() {
  return [
    { title: "Kyronet - Votre partenaire IT" },
    { name: "description", content: "Kyronet est votre partenaire IT pour concevoir des infrastructures performantes, sécurisées et évolutives." },
  ];
}

export default function Home() {
  return (
    <div className="bg-white">
      <Navigation />
      <Hero />
      <Partenaire />
      <AboutUs />
      
      <ServicesStacked />
      <Project />
      <Process />
      <Team />
      <Testimonials />
      <FAQ />
      <Contact />
      

    </div>
  );
}
