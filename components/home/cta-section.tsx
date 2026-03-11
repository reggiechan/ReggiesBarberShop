import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 md:py-28 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <Calendar className="h-12 w-12 mx-auto opacity-80" />
        <h2 className="mt-6 font-serif text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-balance">
          Ready for Your Next Cut?
        </h2>
        <p className="mt-4 text-lg opacity-90 max-w-2xl mx-auto leading-relaxed">
          Book your appointment today and experience the difference of professional 
          grooming at The Gentleman&apos;s Cut.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/schedule"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-background px-6 py-3.5 text-base font-medium text-foreground transition-all hover:bg-background/90 hover:gap-3"
          >
            Book Appointment
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-primary-foreground/30 px-6 py-3.5 text-base font-medium transition-all hover:bg-primary-foreground/10 hover:border-primary-foreground/50"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
