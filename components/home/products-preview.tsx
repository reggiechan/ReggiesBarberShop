import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShoppingBag } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Premium Pomade",
    price: 24.99,
    image:
      "https://images.unsplash.com/photo-1597854710118-5c6f0a3c1f7b?q=80&w=1974&auto=format&fit=crop",
    category: "Styling",
  },
  {
    id: 2,
    name: "Beard Oil",
    price: 19.99,
    image:
      "https://images.unsplash.com/photo-1626808642875-0aa545482dfb?q=80&w=1974&auto=format&fit=crop",
    category: "Beard Care",
  },
  {
    id: 3,
    name: "Hair Clay",
    price: 22.99,
    image:
      "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?q=80&w=1974&auto=format&fit=crop",
    category: "Styling",
  },
];

export function ProductsPreview() {
  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Shop
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Premium Products
            </h2>
          </div>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-all hover:gap-3"
          >
            View All Products
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
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
              <div className="p-6">
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {product.category}
                </p>
                <h3 className="mt-2 font-serif text-lg font-semibold">
                  {product.name}
                </h3>
                <div className="mt-4 flex items-center justify-between">
                  <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
                  <Link
                    href="/shop"
                    className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    <ShoppingBag className="h-4 w-4" />
                    Shop
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
