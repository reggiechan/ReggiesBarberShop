import { Clock, Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

export function ContactInfo() {
  return (
    <div>
      <h2 className="font-serif text-2xl font-bold">Visit Us</h2>
      <p className="mt-2 text-muted-foreground">
        Stop by our shop or reach out through any of the channels below.
      </p>

      <div className="mt-8 space-y-6">
        {/* Address */}
        <div className="flex gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
            <MapPin className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-medium">Address</h3>
            <p className="mt-1 text-muted-foreground">
              123 Main Street, Suite 100
              <br />
              New York, NY 10001
            </p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Phone className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-medium">Phone</h3>
            <a
              href="tel:+1234567890"
              className="mt-1 block text-muted-foreground hover:text-primary transition-colors"
            >
              (123) 456-7890
            </a>
          </div>
        </div>

        {/* Email */}
        <div className="flex gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Mail className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-medium">Email</h3>
            <a
              href="mailto:info@gentlemanscut.com"
              className="mt-1 block text-muted-foreground hover:text-primary transition-colors"
            >
              info@gentlemanscut.com
            </a>
          </div>
        </div>

        {/* Hours */}
        <div className="flex gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Clock className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-medium">Hours</h3>
            <div className="mt-1 text-muted-foreground space-y-1">
              <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
              <p>Saturday: 9:00 AM - 6:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="mt-10">
        <h3 className="font-medium">Follow Us</h3>
        <div className="mt-4 flex gap-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            aria-label="Facebook"
          >
            <Facebook className="h-5 w-5" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
}
