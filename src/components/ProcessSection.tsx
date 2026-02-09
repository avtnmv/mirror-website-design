import { Button } from "@/components/ui/button";
import { Phone, Search, FileSignature } from "lucide-react";

const steps = [
  {
    icon: Phone,
    title: "1. Kontaktujte nás",
    description: "Zavolejte nám nebo vyplňte formulář. Během úvodní konzultace zdarma posoudíme váš případ.",
  },
  {
    icon: Search,
    title: "2. Analýza případu",
    description: "Náš tým důkladně prověří všechny okolnosti a připraví strategii pro návrat vašich prostředků.",
  },
  {
    icon: FileSignature,
    title: "3. Podpis smlouvy",
    description: "Po odsouhlasení podmínek podepíšeme smlouvu a zahájíme aktivní práci na vašem případu.",
  },
];

const ProcessSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-foreground mb-4">
          Jak vypadá naše spolupráce
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          Jednoduchý proces ve třech krocích
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div
              key={i}
              className="text-center p-8 rounded-2xl bg-secondary/30 border border-border hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                <step.icon className="text-accent" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <Button className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8 py-6 text-base font-semibold">
            Kontaktujte nás
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
