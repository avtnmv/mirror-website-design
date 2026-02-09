import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: "Jak vám pomůžeme", href: "#services" },
    { label: "O nás", href: "#about" },
    { label: "Kontakty", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">
        <a href="#" className="text-primary-foreground font-bold text-xl lg:text-2xl tracking-tight">
          Poslední <span className="text-accent">tečka</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-primary-foreground/80 hover:text-primary-foreground text-sm font-medium transition-colors"
            >
              {item.label}
            </a>
          ))}
          <Button className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-6">
            Chci vědět více
          </Button>
        </nav>

        <button
          className="md:hidden text-primary-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-primary border-t border-primary-foreground/10 px-4 pb-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-primary-foreground/80 hover:text-primary-foreground text-sm font-medium"
            >
              {item.label}
            </a>
          ))}
          <Button className="w-full mt-2 bg-accent hover:bg-accent/90 text-accent-foreground rounded-full">
            Chci vědět více
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;
