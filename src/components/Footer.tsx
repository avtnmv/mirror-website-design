import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-primary py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <div className="text-primary-foreground font-bold text-xl mb-4">
              Poslední <span className="text-accent">tečka</span>
            </div>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Specializujeme se na návrat finančních prostředků od podvodných brokerů a investičních platforem.
            </p>
          </div>

          <div>
            <h4 className="text-primary-foreground font-semibold mb-4">Menu</h4>
            <nav className="space-y-2">
              <a href="#services" className="block text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors">Jak vám pomůžeme</a>
              <a href="#about" className="block text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors">O nás</a>
              <a href="#contact" className="block text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors">Kontakty</a>
            </nav>
          </div>

          <div>
            <h4 className="text-primary-foreground font-semibold mb-4">Kontakt</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-primary-foreground/60 text-sm">
                <Phone size={16} className="text-accent shrink-0" />
                +420 123 456 789
              </div>
              <div className="flex items-center gap-3 text-primary-foreground/60 text-sm">
                <Mail size={16} className="text-accent shrink-0" />
                info@poslednitecka.cz
              </div>
              <div className="flex items-center gap-3 text-primary-foreground/60 text-sm">
                <MapPin size={16} className="text-accent shrink-0" />
                Praha, Česká republika
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-primary-foreground/40 text-sm">
          © 2024 Poslední tečka. Všechna práva vyhrazena.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
