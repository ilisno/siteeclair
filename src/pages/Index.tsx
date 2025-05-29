import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { GallerySection } from "@/components/GallerySection";
import { ContactFormSection } from "@/components/ContactFormSection";
import { AppointmentSection } from "@/components/AppointmentSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header"; // Import du nouveau Header

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header /> {/* Ajout du Header ici */}
      <HeroSection />
      <FeaturesSection />
      <GallerySection />
      <AppointmentSection />
      <ContactFormSection />
      <Footer />
    </div>
  );
};

export default Index;