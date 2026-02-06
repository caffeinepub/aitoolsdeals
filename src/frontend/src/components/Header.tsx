import { Button } from './ui/button';
import { Sparkles } from 'lucide-react';

export function Header() {
  return (
    <header className="topbar sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-xl md:text-2xl font-bold tracking-tight bg-gradient-to-r from-primary to-chart-1 bg-clip-text text-transparent">
            AIToolsDeals
          </h1>
        </div>
        
        <Button 
          asChild
          className="bg-gradient-to-r from-primary to-chart-1 hover:opacity-90 transition-all font-semibold shadow-lg hover:shadow-glow text-sm md:text-base"
        >
          <a 
            href="https://sites.google.com/view/aitoolsdeals-gift-cart/work/project-page"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Sparkles className="mr-2 h-4 w-4" />
            FREE COUPONS + TRIALS
          </a>
        </Button>
      </div>
    </header>
  );
}

