import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const FeaturedProjectSection = () => {
  return (
    <section id="featured-project" className="py-16 md:py-24 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Notre Dernière Réalisation
        </h2>
        <Card className="overflow-hidden rounded-lg shadow-lg dark:bg-gray-700 dark:border-gray-600 flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <img
              src="https://via.placeholder.com/800x600/A78BFA/FFFFFF?text=smoothiebananefraise.fr"
              alt="smoothiebananefraise.fr"
              className="w-full h-64 md:h-full object-cover"
            />
          </div>
          <div className="md:w-1/2 p-6 flex flex-col justify-center">
            <CardHeader className="p-0 mb-4">
              <CardTitle className="text-2xl font-semibold text-gray-900 dark:text-white">
                smoothiebananefraise.fr
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0 mb-6">
              <p className="text-gray-700 dark:text-gray-300 text-lg">
                Un site web moderne et entièrement responsive, conçu pour offrir une expérience utilisateur fluide sur tous les appareils. Idéal pour présenter des recettes, des produits ou des services avec style.
              </p>
            </CardContent>
            <Button
              asChild
              className="bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg rounded-md transition-colors duration-300"
            >
              <a href="https://smoothiebananefraise.fr" target="_blank" rel="noopener noreferrer">
                Visiter le site
              </a>
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};