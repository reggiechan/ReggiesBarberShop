import { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { GalleryGrid } from "@/components/gallery/gallery-grid";

export const metadata: Metadata = {
  title: "Gallery | The Gentleman's Cut",
  description:
    "Browse our gallery of haircuts, styles, and grooming work at The Gentleman's Cut barbershop.",
};

export default function GalleryPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 pt-16 md:pt-20">
        {/* Hero */}
        <section className="bg-secondary py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Our Work
            </p>
            <h1 className="mt-3 font-serif text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Gallery
            </h1>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Explore our collection of haircuts and styles. Every cut is crafted 
              with precision and tailored to each client&apos;s unique style.
            </p>
          </div>
        </section>

        {/* Gallery */}
        <GalleryGrid />
      </main>
      <Footer />
    </div>
  );
}
