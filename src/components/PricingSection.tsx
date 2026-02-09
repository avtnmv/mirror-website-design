const tiers = [
  { range: "do 499 999 Kč", price: "49 900 Kč", priceVat: "60 379 Kč" },
  { range: "do 999 999 Kč", price: "79 900 Kč", priceVat: "96 679 Kč" },
  { range: "do 4 999 999 Kč", price: "129 900 Kč", priceVat: "157 179 Kč" },
  { range: "nad 5 000 000 Kč", price: "Individuální", priceVat: "Individuální" },
];

const PricingSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-foreground mb-4">
          Hrajeme fér!
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          Transparentní ceník bez skrytých poplatků
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiers.map((tier, i) => (
            <div
              key={i}
              className="bg-card rounded-2xl p-6 border border-border text-center hover:shadow-lg transition-shadow"
            >
              <div className="text-sm font-medium text-muted-foreground mb-2">Ztráta</div>
              <div className="text-lg font-bold text-foreground mb-6">{tier.range}</div>
              <div className="text-2xl font-bold text-accent mb-1">{tier.price}</div>
              <div className="text-sm text-muted-foreground">bez DPH</div>
              <div className="mt-3 pt-3 border-t border-border">
                <div className="text-base font-semibold text-foreground">{tier.priceVat}</div>
                <div className="text-xs text-muted-foreground">s DPH</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
