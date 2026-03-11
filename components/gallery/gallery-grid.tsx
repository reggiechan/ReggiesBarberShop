"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

const categories = ["All", "Haircuts", "Fades", "Beards", "Styles"];

const galleryItems = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=1976&auto=format&fit=crop",
    alt: "Classic fade haircut",
    category: "Fades",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2070&auto=format&fit=crop",
    alt: "Beard trimming",
    category: "Beards",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=2070&auto=format&fit=crop",
    alt: "Modern hairstyle",
    category: "Styles",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=1974&auto=format&fit=crop",
    alt: "Professional grooming",
    category: "Haircuts",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=2070&auto=format&fit=crop",
    alt: "Precision haircut",
    category: "Haircuts",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1593702288056-7927b442d0fa?q=80&w=2070&auto=format&fit=crop",
    alt: "Skin fade",
    category: "Fades",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1567894340315-735d7c361db0?q=80&w=1887&auto=format&fit=crop",
    alt: "Beard styling",
    category: "Beards",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1584297091622-af8e5bd80b12?q=80&w=2070&auto=format&fit=crop",
    alt: "Textured crop",
    category: "Styles",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=2069&auto=format&fit=crop",
    alt: "Classic cut",
    category: "Haircuts",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?q=80&w=1999&auto=format&fit=crop",
    alt: "Low fade",
    category: "Fades",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1622288432450-277d0fef5ed6?q=80&w=2070&auto=format&fit=crop",
    alt: "Full beard",
    category: "Beards",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1596728325488-58c87691e9af?q=80&w=2072&auto=format&fit=crop",
    alt: "Pompadour style",
    category: "Styles",
  },
];

export function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<(typeof galleryItems)[0] | null>(
    null
  );

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-all duration-300",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 md:gap-6">
          {filteredItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative aspect-[3/4] overflow-hidden rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-foreground/0 transition-colors duration-300 group-hover:bg-foreground/30" />
              <div className="absolute inset-x-0 bottom-0 p-4 text-left opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="text-sm font-medium text-background">{item.alt}</p>
                <p className="text-xs text-background/70">{item.category}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/90 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 p-2 text-background/70 hover:text-background transition-colors"
            aria-label="Close"
          >
            <X className="h-8 w-8" />
          </button>
          <div
            className="relative max-h-[90vh] max-w-4xl w-full aspect-[3/4] sm:aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              className="object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
}
