import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { GallerySection } from "@/components/GallerySection";
import { ContactFormSection } from "@/components/ContactFormSection";
import { AppointmentSection } from "@/components/AppointmentSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <HeroSection />
      <FeaturesSection />
      <GallerySection />
      <ContactFormSection />
      <AppointmentSection />
      <Footer />
    </div>
  );
};

export default Index;