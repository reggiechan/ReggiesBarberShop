import { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ProductGrid } from "@/components/shop/product-grid";
import { CartProvider } from "@/components/shop/cart-context";
import { CartDrawer } from "@/components/shop/cart-drawer";

export const metadata: Metadata = {
  title: "Shop | The Gentleman's Cut",
  description:
    "Shop premium hair care and grooming products at The Gentleman's Cut. Professional-grade products for the modern gentleman.",
};

export default function ShopPage() {
  return (
    <CartProvider>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 pt-16 md:pt-20">
          {/* Hero */}
          <section className="bg-secondary py-16 md:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
              <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
                Premium Products
              </p>
              <h1 className="mt-3 font-serif text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Shop Our Collection
              </h1>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Professional-grade hair care and grooming products, handpicked by 
                our expert barbers for the modern gentleman.
              </p>
            </div>
          </section>

          {/* Products */}
          <ProductGrid />
        </main>
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  );
}
