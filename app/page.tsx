import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/home/hero-section";
import { ServicesSection } from "@/components/home/services-section";
import { AboutSection } from "@/components/home/about-section";
import { GalleryPreview } from "@/components/home/gallery-preview";
import { ProductsPreview } from "@/components/home/products-preview";
import { CTASection } from "@/components/home/cta-section";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 pt-16 md:pt-20">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <GalleryPreview />
        <ProductsPreview />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
