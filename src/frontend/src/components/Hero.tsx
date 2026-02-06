import { Badge } from './ui/badge';
import { TrendingUp, Users, Zap } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-chart-1/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            🎉Congratulations! Your FREE Pro Tools access has been unlocked.
          </h1>
          
          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover official free trials, bonus credits, and limited-time discounts on the world's most popular AI tools — all in one place.
          </p>
          
          {/* Achievement Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Badge variant="secondary" className="px-5 py-2.5 text-sm font-semibold bg-card/80 backdrop-blur-sm border border-border/50 shadow-md hover:shadow-lg transition-shadow">
              <TrendingUp className="mr-2 h-4 w-4 text-chart-1" />
              500+ Tools
            </Badge>
            <Badge variant="secondary" className="px-5 py-2.5 text-sm font-semibold bg-card/80 backdrop-blur-sm border border-border/50 shadow-md hover:shadow-lg transition-shadow">
              <Users className="mr-2 h-4 w-4 text-chart-2" />
              10K+ Happy Users
            </Badge>
            <Badge variant="secondary" className="px-5 py-2.5 text-sm font-semibold bg-card/80 backdrop-blur-sm border border-border/50 shadow-md hover:shadow-lg transition-shadow">
              <Zap className="mr-2 h-4 w-4 text-chart-4" />
              Daily Updates
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
}
