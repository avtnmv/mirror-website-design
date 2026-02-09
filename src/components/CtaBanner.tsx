import { Button } from "@/components/ui/button";

const CtaBanner = () => {
  return (
    <section className="py-20 lg:py-28 bg-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-6">
          Jsme na vaší straně
        </h2>
        <p className="text-primary-foreground/70 text-lg mb-8 max-w-2xl mx-auto">
          Neváhejte nás kontaktovat. Úvodní konzultace je zcela zdarma a bez závazků.
        </p>
        <Button
          variant="outline"
          className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary rounded-full px-8 py-6 text-base font-semibold"
        >
          Nezávazná konzultace zdarma
        </Button>
      </div>
    </section>
  );
};

export default CtaBanner;
