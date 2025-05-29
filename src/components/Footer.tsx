import { MadeWithDyad } from "@/components/made-with-dyad";

export const Footer = () => {
  return (
    <footer className="bg-gray-800 dark:bg-gray-950 text-white py-8 text-center">
      <div className="container mx-auto px-4">
        <p className="text-sm mb-4">
          © {new Date().getFullYear()} Votre Entreprise. Tous droits réservés.
        </p>
        <nav className="mb-4">
          <ul className="flex justify-center space-x-6 text-sm">
            <li><a href="#features" className="hover:text-blue-400 transition-colors duration-200">Services</a></li>
            <li><a href="#gallery" className="hover:text-blue-400 transition-colors duration-200">Réalisations</a></li>
            <li><a href="#contact-form" className="hover:text-blue-400 transition-colors duration-200">Contact</a></li>
            <li><a href="#appointment" className="hover:text-blue-400 transition-colors duration-200">Rendez-vous</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};