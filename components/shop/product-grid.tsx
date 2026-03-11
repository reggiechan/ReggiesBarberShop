"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ShoppingBag, ShoppingCart } from "lucide-react";
import { useCart, Product } from "./cart-context";

const categories = ["All", "Styling", "Beard Care", "Shampoo", "Tools"];

const products: Product[] = [
  {
    id: 1,
    name: "Premium Pomade",
    price: 24.99,
    image:
      "https://images.unsplash.com/photo-1597854710118-5c6f0a3c1f7b?q=80&w=1974&auto=format&fit=crop",
    category: "Styling",
    description:
      "High-hold, medium-shine pomade for classic and modern styles. Water-based formula washes out easily.",
  },
  {
    id: 2,
    name: "Beard Oil",
    price: 19.99,
    image:
      "https://images.unsplash.com/photo-1626808642875-0aa545482dfb?q=80&w=1974&auto=format&fit=crop",
    category: "Beard Care",
    description:
      "Nourishing blend of argan and jojoba oils. Softens beard hair and hydrates skin underneath.",
  },
  {
    id: 3,
    name: "Matte Hair Clay",
    price: 22.99,
    image:
      "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?q=80&w=1974&auto=format&fit=crop",
    category: "Styling",
    description:
      "Strong hold with a natural matte finish. Perfect for textured, modern styles.",
  },
  {
    id: 4,
    name: "Beard Balm",
    price: 18.99,
    image:
      "https://images.unsplash.com/photo-1621607512214-68297480165e?q=80&w=1974&auto=format&fit=crop",
    category: "Beard Care",
    description:
      "Conditioning balm that tames and shapes your beard while providing light hold.",
  },
  {
    id: 5,
    name: "Daily Shampoo",
    price: 16.99,
    image:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1974&auto=format&fit=crop",
    category: "Shampoo",
    description:
      "Gentle daily cleanser that removes buildup without stripping natural oils.",
  },
  {
    id: 6,
    name: "Sea Salt Spray",
    price: 21.99,
    image:
      "https://images.unsplash.com/photo-1594997756045-f4c0bc49b2e3?q=80&w=1976&auto=format&fit=crop",
    category: "Styling",
    description:
      "Creates natural, beachy texture with light hold. Perfect for effortless waves.",
  },
  {
    id: 7,
    name: "Beard Wash",
    price: 15.99,
    image:
      "https://images.unsplash.com/photo-1585751119414-ef2636f8aede?q=80&w=1974&auto=format&fit=crop",
    category: "Beard Care",
    description:
      "Specially formulated cleanser for facial hair. Removes dirt without drying.",
  },
  {
    id: 8,
    name: "Professional Scissors",
    price: 89.99,
    image:
      "https://images.unsplash.com/photo-1582771744541-9d0ce588c4ac?q=80&w=1974&auto=format&fit=crop",
    category: "Tools",
    description:
      "Japanese steel scissors for precision cutting. Professional-grade quality.",
  },
  {
    id: 9,
    name: "Hair Wax",
    price: 19.99,
    image:
      "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?q=80&w=1974&auto=format&fit=crop",
    category: "Styling",
    description:
      "Flexible hold wax for natural-looking styles. Easy to restyle throughout the day.",
  },
  {
    id: 10,
    name: "Scalp Treatment",
    price: 29.99,
    image:
      "https://images.unsplash.com/photo-1608248633614-f7d7c9e9c695?q=80&w=1974&auto=format&fit=crop",
    category: "Shampoo",
    description:
      "Intensive treatment for dry or irritated scalp. Contains tea tree and peppermint.",
  },
  {
    id: 11,
    name: "Beard Comb",
    price: 14.99,
    image:
      "https://images.unsplash.com/photo-1621607512374-1a40ec84e055?q=80&w=1974&auto=format&fit=crop",
    category: "Tools",
    description:
      "Handcrafted wooden comb with anti-static properties. Gentle on beard hair.",
  },
  {
    id: 12,
    name: "Styling Gel",
    price: 17.99,
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1980&auto=format&fit=crop",
    category: "Styling",
    description:
      "Strong hold gel with wet-look finish. Alcohol-free formula won't flake.",
  },
];

export function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState("All");
  const { addToCart, openCart, totalItems } = useCart();

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((product) => product.category === activeCategory);

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Filter & Cart */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2">
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

          {/* Cart Button */}
          <button
            onClick={openCart}
            className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <ShoppingCart className="h-4 w-4" />
            Cart ({totalItems})
          </button>
        </div>

        {/* Product Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group rounded-lg bg-card border border-border overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {product.category}
                </p>
                <h3 className="mt-2 font-serif text-lg font-semibold">
                  {product.name}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                  {product.description}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
                  <button
                    onClick={() => addToCart(product)}
                    className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    <ShoppingBag className="h-4 w-4" />
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
