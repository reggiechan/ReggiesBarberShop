import { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactInfo } from "@/components/contact/contact-info";

export const metadata: Metadata = {
  title: "Contact | The Gentleman's Cut",
  description:
    "Get in touch with The Gentleman's Cut. We'd love to hear from you.",
};

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 pt-16 md:pt-20">
        {/* Hero */}
        <section className="bg-secondary py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Get In Touch
            </p>
            <h1 className="mt-3 font-serif text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Contact Us
            </h1>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Have questions or feedback? We&apos;d love to hear from you. 
              Send us a message and we&apos;ll respond as soon as possible.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
              <ContactForm />
              <ContactInfo />
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="h-96 bg-secondary">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095919596!2d-74.00425878428698!3d40.74076794379132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sGoogle!5e0!3m2!1sen!2sus!4v1635181234567!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Our Location"
          />
        </section>
      </main>
      <Footer />
    </div>
  );
}
