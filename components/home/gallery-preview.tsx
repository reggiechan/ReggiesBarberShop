import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=1976&auto=format&fit=crop",
    alt: "Classic fade haircut",
  },
  {
    src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2070&auto=format&fit=crop",
    alt: "Beard trimming",
  },
  {
    src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=2070&auto=format&fit=crop",
    alt: "Modern hairstyle",
  },
  {
    src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=1974&auto=format&fit=crop",
    alt: "Professional grooming",
  },
];

export function GalleryPreview() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Our Work
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Gallery
            </h2>
          </div>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-all hover:gap-3"
          >
            View All
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-[3/4] overflow-hidden rounded-lg"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-foreground/0 transition-colors duration-300 group-hover:bg-foreground/20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
