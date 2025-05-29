import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Globe, Mail, CalendarCheck, Image } from "lucide-react";

export const FeaturesSection = () => {
  const features = [
    {
      icon: <Globe className="h-8 w-8 text-blue-600" />,
      title: "Site Vitrine Simple",
      description: "Une présence en ligne élégante et professionnelle pour présenter votre activité.",
    },
    {
      icon: <Mail className="h-8 w-8 text-blue-600" />,
      title: "Formulaire de Contact",
      description: "Facilitez la communication avec vos clients grâce à un formulaire intégré.",
    },
    {
      icon: <CalendarCheck className="h-8 w-8 text-blue-600" />,
      title: "Prise de Rendez-vous",
      description: "Permettez à vos clients de réserver facilement une consultation ou un service.",
    },
    {
      icon: <Image className="h-8 w-8 text-blue-600" />,
      title: "Galerie de Réalisations",
      description: "Mettez en valeur vos projets passés et votre expertise avec une galerie dédiée.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Ce que votre site inclut
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="flex flex-col items-center text-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 dark:bg-gray-800 dark:border-gray-700">
              <CardHeader className="pb-4">
                <div className="mb-4">{feature.icon}</div>
                <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 dark:text-gray-400">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};