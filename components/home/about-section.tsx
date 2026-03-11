import Image from "next/image";
import { Award, Clock, Users } from "lucide-react";

const stats = [
  { icon: Clock, value: "15+", label: "Years Experience" },
  { icon: Users, value: "10K+", label: "Happy Clients" },
  { icon: Award, value: "25+", label: "Awards Won" },
];

export function AboutSection() {
  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=2070&auto=format&fit=crop"
                alt="Barber cutting hair"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 h-48 w-48 rounded-lg bg-primary/10 -z-10 hidden md:block" />
          </div>

          {/* Content */}
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              About Us
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-balance">
              A Legacy of Excellence in Grooming
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Founded in 2008, The Gentleman&apos;s Cut has been dedicated to providing 
              exceptional grooming services that combine traditional barbering techniques 
              with modern style trends.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our team of master barbers brings decades of combined experience, 
              ensuring every client leaves looking and feeling their absolute best. 
              We believe in the power of a great haircut to transform not just your 
              appearance, but your confidence.
            </p>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="flex justify-center">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <p className="mt-2 font-serif text-2xl font-bold md:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
