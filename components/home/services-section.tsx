import { Scissors, Sparkles, Users } from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Classic Haircuts",
    description:
      "Precision cuts tailored to your style. From traditional fades to modern styles, our expert barbers deliver excellence.",
    price: "From $35",
  },
  {
    icon: Sparkles,
    title: "Beard Grooming",
    description:
      "Shape, trim, and maintain your beard with our professional grooming services. Hot towel treatments included.",
    price: "From $25",
  },
  {
    icon: Users,
    title: "Complete Package",
    description:
      "The ultimate grooming experience. Haircut, beard trim, hot towel treatment, and premium styling products.",
    price: "From $55",
  },
];

export function ServicesSection() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Our Services
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-balance">
            Crafted for the Modern Gentleman
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Every service is delivered with precision, care, and attention to detail.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative rounded-lg border border-border bg-card p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-lg"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-serif text-xl font-semibold">
                {service.title}
              </h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                {service.description}
              </p>
              <p className="mt-4 text-lg font-semibold text-primary">
                {service.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
