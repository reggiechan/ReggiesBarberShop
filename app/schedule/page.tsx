import { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { BookingForm } from "@/components/schedule/booking-form";

export const metadata: Metadata = {
  title: "Book Appointment | The Gentleman's Cut",
  description:
    "Schedule your appointment at The Gentleman's Cut. Choose your service, barber, and preferred time.",
};

export default function SchedulePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 pt-16 md:pt-20">
        {/* Hero */}
        <section className="bg-secondary py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Book Now
            </p>
            <h1 className="mt-3 font-serif text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Schedule Your Appointment
            </h1>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Choose your service, select your preferred barber, and pick a time 
              that works for you. We look forward to seeing you.
            </p>
          </div>
        </section>

        {/* Booking Form */}
        <BookingForm />
      </main>
      <Footer />
    </div>
  );
}
