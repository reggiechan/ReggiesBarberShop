"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { useCart } from "./cart-context";

export function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    removeFromCart,
    updateQuantity,
    totalItems,
    totalPrice,
  } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-foreground/50 transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        className={cn(
          "fixed right-0 top-0 z-50 h-full w-full max-w-md bg-background shadow-xl transition-transform duration-300 ease-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-border p-4">
            <div className="flex items-center gap-2">
              <ShoppingBag className="h-5 w-5" />
              <h2 className="font-serif text-lg font-semibold">
                Your Cart ({totalItems})
              </h2>
            </div>
            <button
              onClick={closeCart}
              className="p-2 hover:bg-secondary rounded-md transition-colors"
              aria-label="Close cart"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-4">
            {items.length === 0 ? (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <ShoppingBag className="h-12 w-12 text-muted-foreground/50" />
                <p className="mt-4 font-medium">Your cart is empty</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Add some products to get started
                </p>
                <button
                  onClick={closeCart}
                  className="mt-6 inline-flex items-center justify-center rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 rounded-lg border border-border p-3"
                  >
                    <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-md">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-1 flex-col">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-medium text-sm">{item.name}</h3>
                          <p className="text-xs text-muted-foreground">
                            {item.category}
                          </p>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="p-1 text-muted-foreground hover:text-destructive transition-colors"
                          aria-label={`Remove ${item.name} from cart`}
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                      <div className="mt-auto flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="flex h-7 w-7 items-center justify-center rounded border border-border hover:bg-secondary transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="w-6 text-center text-sm">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="flex h-7 w-7 items-center justify-center rounded border border-border hover:bg-secondary transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                        <p className="font-semibold text-sm">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-border p-4 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-semibold">${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span className="text-sm">Calculated at checkout</span>
              </div>
              <div className="flex items-center justify-between border-t border-border pt-4">
                <span className="font-semibold">Total</span>
                <span className="font-bold text-lg">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
              <button className="w-full rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
                Proceed to Checkout
              </button>
              <button
                onClick={closeCart}
                className="w-full rounded-md border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-secondary"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
