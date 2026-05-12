import bgback from '../asset/HeroVideo.mp4'; 
import Button from '../utils/Button';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      
      {/* 1. Vidéo en Background Arrière-plan */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={bgback} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay pour le contraste et le style "Premium" */}
        <div className="absolute inset-0  "></div>
      </div>

      {/* 2. Contenu Textuel (Design Awwwards Style) */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="text-white text-6xl md:text-7xl lg:text-7xl font-extralight tracking-[-0.05em] leading-none">
         Votre infrastructure IT, notre expertise
        </h1>
        
        <p className="mt-8 text-gray-300 text-lg md:text-xl max-w-2xl mx-auto font-light tracking-wide">
  Nous concevons, déployons et gérons des infrastructures informatiques
              sur mesure pour propulser votre entreprise vers le futur.        </p>

        <div className=" flex  items-center justify-center gap-6">
           <Button />
        </div>
      </div>

    

    </section>
  );
}