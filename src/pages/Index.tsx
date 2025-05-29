import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { FeaturedProjectSection } from "@/components/FeaturedProjectSection";
import { AppointmentSection } from "@/components/AppointmentSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <FeaturedProjectSection />
      <AppointmentSection />
      {/* <ContactFormSection /> - Supprimé comme demandé */}
      <Footer />
    </div>
  );
};

export default Index;