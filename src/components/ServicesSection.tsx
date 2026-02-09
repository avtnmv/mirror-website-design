import { Button } from "@/components/ui/button";
import { XCircle, CheckCircle, TrendingUp, Bitcoin, CreditCard, Banknote, ShieldCheck, Scale, FileSearch, Gavel } from "lucide-react";

const dontDo = [
  { icon: CreditCard, text: "Spotřebitelské úvěry a půjčky" },
  { icon: Banknote, text: "Bankovní produkty" },
  { icon: XCircle, text: "Pojistné události" },
];

const doHelp = [
  { icon: TrendingUp, text: "Ztráty z investic do akcií a fondů" },
  { icon: Bitcoin, text: "Podvody s kryptoměnami" },
  { icon: ShieldCheck, text: "Nelegální brokerské platformy" },
  { icon: Scale, text: "Forex a binární opce podvody" },
  { icon: FileSearch, text: "Vyšetřování podvodných schémat" },
  { icon: Gavel, text: "Právní zastoupení u soudu" },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-foreground mb-4">
          Vrátíme vám investice do akcií i kryptoměn
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          Specializujeme se na návrat finančních prostředků od podvodných brokerů a investičních platforem.
        </p>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <XCircle className="text-accent" size={24} />
              Co neřešíme
            </h3>
            <div className="space-y-4">
              {dontDo.map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center shrink-0">
                    <item.icon size={20} className="text-muted-foreground" />
                  </div>
                  <span className="text-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <CheckCircle className="text-accent" size={24} />
              S čím vám pomůžeme
            </h3>
            <div className="space-y-4">
              {doHelp.map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <item.icon size={20} className="text-accent" />
                  </div>
                  <span className="text-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-14">
          <Button className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8 py-6 text-base font-semibold">
            Chci vaši pomoc
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
