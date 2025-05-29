import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20 md:py-32 text-center overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 animate-fade-in-up">
          Votre site web professionnel pour seulement <span className="text-yellow-300">190€</span>
        </h1>
        <p className="text-lg md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in-up delay-200">
          Idéal pour les petites entreprises et indépendants.
        </p>
        <p className="text-xl md:text-3xl font-semibold mb-10 animate-fade-in-up delay-400">
          <span className="block text-yellow-300">Vous ne payez rien avant d'avoir le site !</span>
          <span className="block text-lg md:text-xl mt-2">Si vous n'en voulez pas, vous ne payez rien.</span>
        </p>
        <Button
          size="lg"
          className="bg-white text-blue-700 hover:bg-gray-100 text-xl md:text-2xl px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up delay-600"
          onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Demander un site à 190€
        </Button>
        <p className="text-md md:text-xl mt-8 font-medium animate-fade-in-up delay-800">
          Livraison en <span className="font-bold text-yellow-300">48 heures</span> !
        </p>
      </div>
      <div className="absolute inset-0 bg-black opacity-20"></div>
    </section>
  );
};