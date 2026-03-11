import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop"
          alt="Barbershop interior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-widest text-background/70 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Premium Grooming Experience
          </p>
          <h1 className="mt-4 font-serif text-4xl font-bold tracking-tight text-background sm:text-5xl md:text-6xl lg:text-7xl animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            <span className="block text-balance">Where Style</span>
            <span className="block text-balance">Meets Tradition</span>
          </h1>
          <p className="mt-6 text-lg text-background/80 leading-relaxed max-w-lg animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            Experience the art of traditional grooming at The Gentleman&apos;s Cut. 
            Expert barbers, premium products, and timeless results.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
            <Link
              href="/schedule"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-background px-6 py-3.5 text-base font-medium text-foreground transition-all hover:bg-background/90 hover:gap-3"
            >
              Book Appointment
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/gallery"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-background/30 px-6 py-3.5 text-base font-medium text-background transition-all hover:bg-background/10 hover:border-background/50"
            >
              View Gallery
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce hidden md:block">
        <div className="h-14 w-8 rounded-full border-2 border-background/30 flex items-start justify-center p-2">
          <div className="h-2 w-1 rounded-full bg-background/50 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
