import { Button } from "@/components/ui/button";
import { Shield, Users, Clock } from "lucide-react";
import heroImage from "@/assets/hero-person.png";
const HeroSection = () => {
  return <section className="bg-primary pt-20 lg:pt-0 min-h-[90vh] flex items-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="py-16 lg:py-24">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              Zachráníme vám i zdánlivě{" "}
              <span className="text-[#fdfade]">ztracené investice</span>
            </h1>
            <p className="text-primary-foreground/70 text-lg mb-8 max-w-lg">
              Pomáháme obětem podvodných brokerů a investičních platforem získat zpět jejich peníze. Profesionálně, diskrétně a efektivně.
            </p>
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8 py-6 text-base font-semibold">
              Chci vaši pomoc
            </Button>

            <div className="flex-wrap mt-12 items-start justify-start flex flex-row gap-[24px]">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-amber-100">
                  <Clock className="text-accent" size={22} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary-foreground">10+</div>
                  <div className="text-primary-foreground/60 text-sm">let zkušeností</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-amber-100">
                  <Users className="text-accent" size={22} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary-foreground">500+</div>
                  <div className="text-primary-foreground/60 text-sm">spokojených klientů</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-amber-100">
                  <Shield className="text-accent" size={22} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary-foreground">95%</div>
                  <div className="text-primary-foreground/60 text-sm">úspěšnost</div>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex justify-end">
            <img src={heroImage} alt="Profesionální poradce" className="max-h-[600px] object-contain" />
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;