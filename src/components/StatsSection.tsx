import { CheckCircle2 } from "lucide-react";

const achievements = [
  "Více než 250 milionů Kč vrácených klientům",
  "Mezinárodní tým právníků a analytiků",
  "Spolupráce s regulačními orgány po celém světě",
  "Bezplatná úvodní konzultace pro každého",
];

const StatsSection = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-primary-foreground mb-4">
          Kolik peněz zachráníme
        </h2>
        <p className="text-primary-foreground/60 text-center mb-12 max-w-xl mx-auto">
          Naše výsledky mluví za nás
        </p>

        <div className="text-center mb-14">
          <div className="text-5xl lg:text-7xl font-bold text-accent mb-2">250 000 000+ Kč</div>
          <p className="text-primary-foreground/70 text-lg">celkem vráceno klientům</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {achievements.map((item, i) => (
            <div key={i} className="flex items-start gap-3 p-4">
              <CheckCircle2 className="text-accent shrink-0 mt-0.5" size={22} />
              <span className="text-primary-foreground/90">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
