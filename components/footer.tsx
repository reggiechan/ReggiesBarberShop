import Link from "next/link";
import { Facebook, Instagram, MapPin, Phone, Mail, Clock } from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/gallery", label: "Gallery" },
  { href: "/schedule", label: "Book Now" },
  { href: "/shop", label: "Shop" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <span className="font-serif text-2xl font-bold tracking-tight">
                The Gentleman&apos;s Cut
              </span>
            </Link>
            <p className="mt-4 text-sm text-background/70 leading-relaxed">
              Experience the art of traditional grooming. Where every cut is a masterpiece.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-background/10 transition-colors hover:bg-background/20"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-background/10 transition-colors hover:bg-background/20"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/70 transition-colors hover:text-background"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Contact Us
            </h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-background/70" />
                <span className="text-sm text-background/70">
                  123 Main Street, Suite 100<br />
                  New York, NY 10001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-background/70" />
                <a
                  href="tel:+1234567890"
                  className="text-sm text-background/70 transition-colors hover:text-background"
                >
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-background/70" />
                <a
                  href="mailto:info@gentlemanscut.com"
                  className="text-sm text-background/70 transition-colors hover:text-background"
                >
                  info@gentlemanscut.com
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Hours
            </h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 shrink-0 text-background/70" />
                <div className="text-sm text-background/70">
                  <p>Mon - Fri: 9:00 AM - 7:00 PM</p>
                  <p>Saturday: 9:00 AM - 6:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-background/10 pt-8">
          <p className="text-center text-sm text-background/50">
            &copy; {new Date().getFullYear()} The Gentleman&apos;s Cut. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
