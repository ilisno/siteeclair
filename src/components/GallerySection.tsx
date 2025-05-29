import { Card, CardContent } from "@/components/ui/card";

export const GallerySection = () => {
  const projects = [
    { id: 1, image: "https://via.placeholder.com/400x300/A78BFA/FFFFFF?text=Projet+1", title: "Site E-commerce" },
    { id: 2, image: "https://via.placeholder.com/400x300/60A5FA/FFFFFF?text=Projet+2", title: "Blog Personnel" },
    { id: 3, image: "https://via.placeholder.com/400x300/34D399/FFFFFF?text=Projet+3", title: "Portfolio Artiste" },
    { id: 4, image: "https://via.placeholder.com/400x300/FCD34D/FFFFFF?text=Projet+4", title: "Site Association" },
    { id: 5, image: "https://via.placeholder.com/400x300/FB923C/FFFFFF?text=Projet+5", title: "Page de Service" },
    { id: 6, image: "https://via.placeholder.com/400x300/F87171/FFFFFF?text=Projet+6", title: "Site Restaurant" },
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Nos Réalisations
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden rounded-lg shadow-lg dark:bg-gray-700 dark:border-gray-600">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
              />
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{project.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Exemple de projet client</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};