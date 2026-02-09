import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Jan Novák",
    text: "Díky týmu Poslední tečka jsem získal zpět více než 800 000 Kč, které jsem ztratil u podvodného brokera. Profesionální přístup od začátku do konce.",
    rating: 5,
  },
  {
    name: "Marie Svobodová",
    text: "Nevěřila jsem, že se mi peníze ještě vrátí. Po půl roce spolupráce se podařilo získat zpět téměř celou investici. Velké díky!",
    rating: 5,
  },
  {
    name: "Petr Dvořák",
    text: "Rychlé jednání, srozumitelná komunikace a hlavně výsledky. Doporučuji každému, kdo se stal obětí investičního podvodu.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-foreground mb-4">
          Co říkají naši klienti
        </h2>
        <p className="text-muted-foreground text-center mb-16">
          Přečtěte si zkušenosti našich spokojených klientů
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-card rounded-2xl p-8 border border-border hover:shadow-lg transition-shadow"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="fill-accent text-accent" size={18} />
                ))}
              </div>
              <p className="text-foreground mb-6 leading-relaxed">"{t.text}"</p>
              <div className="font-semibold text-foreground">{t.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
