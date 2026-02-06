import { Button } from './ui/button';

export function CTASection() {
  const handleExploreClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="container mx-auto px-4 py-16 md:py-20">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-chart-1 to-chart-5 p-12 md:p-16 text-center">
        <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground">
            Start Saving on AI Tools Today
          </h2>
          
          <Button 
            size="lg"
            onClick={handleExploreClick}
            className="bg-background text-foreground hover:bg-background/90 shadow-xl hover:shadow-2xl transition-all duration-300 text-lg px-8 py-6 h-auto rounded-full font-semibold"
          >
            Explore Free Trials & Coupons
          </Button>
        </div>
        
        {/* Decorative gradient orbs */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-chart-2/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-chart-4/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>
    </section>
  );
}
